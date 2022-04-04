import { debounceAsync } from './index';

// jest.useFakeTimers();

function someAsyncTask<T>(data: T, delay = 100, fail?: boolean): Promise<T> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fail) {
        reject(data);
      } else {
        resolve(data);
      }
    }, delay);
  });
}

describe('debounceAsync', () => {
  test('keep result correctly', async () => {
    jest.useFakeTimers();
    const debounced = debounceAsync(someAsyncTask);
    const N = Math.random();
    const p = debounced(N, 1);
    jest.advanceTimersByTime(1000);
    await expect(p).resolves.toBe(N);
    const p2 = debounced(N, 0, true);
    jest.advanceTimersByTime(1000);
    await expect(p2).rejects.toBe(N);
  });

  test('debounce correctly', (done) => {
    jest.useRealTimers();
    // const rawFn = jest.fn(someAsyncTask);
    const debounced = debounceAsync(someAsyncTask, 10);
    const cb = jest.fn();
    const promises = new Array(5).fill(0).map((_, i) =>
      debounced(i * 2, 10, i % 2 === 0)
        .then(cb)
        .catch(cb),
    );

    // jest.advanceTimersByTime(500);
    // await Promise.resolve(1);
    // await someAsyncTask(1, 20);
    // jest.advanceTimersByTime(500);
    expect(cb).not.toHaveBeenCalled();
    // jest.advanceTimersByTime(500);
    // await Promise.resolve();
    // jest.advanceTimersByTime(500);
    // console.log(cb.mock.calls.length);

    setTimeout(() => {
      expect(cb).toHaveBeenCalledTimes(1);
      done();
    }, 25);
  });
});
