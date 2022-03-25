import { concurrentAsync } from './index';

function someAsyncTask<T>(data: T, delay = 100, fail?: boolean): Promise<T> {
  // console.log('created', { data, delay, fail });
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fail) {
        reject(data);
        // console.log('reject', data);
      } else {
        // console.log('resolve', data);
        resolve(data);
      }
    }, delay);
  });
}

describe('concurrentAsync', () => {
  test('keep result correctly', async () => {
    const con3 = concurrentAsync(someAsyncTask);
    const promises = new Array(7).fill(0).map((_, i) => con3(i * 2, 10, i % 2 === 0));
    for (let i = 0; i < promises.length; i++) {
      if (i % 2 === 0) {
        await expect(promises[i]).rejects.toBe(i * 2);
      } else {
        await expect(promises[i]).resolves.toBe(i * 2);
      }
    }
  });
  test('invoked when', async () => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');
    // 0,200,400
    // 100,300
    const con2 = concurrentAsync(someAsyncTask, 2);
    const promises = new Array(5).fill(0).map((_, i) => con2(i * 2, i * 100, i % 2 === 0));

    expect(setTimeout).toHaveBeenCalledTimes(2);

    jest.advanceTimersByTime(1);
    await expect(promises[0]).rejects.toBe(0);
    // next task will be created util previous promise is resolved or rejected
    expect(setTimeout).toHaveBeenCalledTimes(3); // the 3rd task has be created and the 4th hasn't been created yet

    jest.advanceTimersByTime(50); // 51ms
    expect(setTimeout).toHaveBeenCalledTimes(3); // no new task(4th) was created

    jest.advanceTimersByTime(50); // 101ms
    expect(setTimeout).toHaveBeenCalledTimes(3); // no new task(4th) was created
    await expect(promises[1]).resolves.toBe(2); // the 2nd task was resolved
    expect(setTimeout).toHaveBeenCalledTimes(4); // the 4th task was created
    jest.advanceTimersByTime(50); // 151ms
    expect(setTimeout).toHaveBeenCalledTimes(4); // no new task(5th) was created

    jest.advanceTimersByTime(50); // 201ms
    expect(setTimeout).toHaveBeenCalledTimes(4); // no new task(5th) was created
    await expect(promises[2]).rejects.toBe(4); // the 3rd task was resolved
    expect(setTimeout).toHaveBeenCalledTimes(5); // the 5th task was created

    jest.advanceTimersByTime(200); // 401ms
    await expect(promises[3]).resolves.toBe(6); // the 4th task was resolved
    expect(setTimeout).toHaveBeenCalledTimes(5); // no more task was created

    jest.advanceTimersByTime(200); // 601ms
    await expect(promises[4]).rejects.toBe(8); // the 5th task was resolved
    expect(setTimeout).toHaveBeenCalledTimes(5); // no more task was created
  });
});
