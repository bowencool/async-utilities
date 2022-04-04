import { debounceAsyncResult } from './index';

// jest.useFakeTimers();
function flushPromises() {
  return new Promise((resolve) => setImmediate(resolve));
}

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

describe('debounceAsyncResult', () => {
  test('keep result correctly', async () => {
    jest.useFakeTimers();
    const debounced = debounceAsyncResult(someAsyncTask);
    const N = Math.random();
    const p = debounced(N, 1);
    jest.advanceTimersByTime(1000);
    await expect(p).resolves.toBe(N);
    const p2 = debounced(N, 0, true);
    jest.advanceTimersByTime(1000);
    await expect(p2).rejects.toBe(N);
  });
  test('keep result correctly with multiple calls', async () => {
    jest.useFakeTimers();
    const rawFn = jest.fn(someAsyncTask);
    const debounced = debounceAsyncResult(rawFn);
    const resolveOrReject = jest.fn();
    new Array(5).fill(0).map((_, i) =>
      debounced(i * 2, 100 - 10 * i, i % 2 === 0)
        .then(resolveOrReject)
        .catch(resolveOrReject),
    );

    expect(rawFn).toHaveBeenCalledTimes(5);
    expect(resolveOrReject).not.toHaveBeenCalled();
    jest.advanceTimersByTime(500);
    await flushPromises();
    expect(rawFn).toHaveBeenCalledTimes(5);
    expect(rawFn).lastCalledWith(8, 60, true);
    expect(resolveOrReject).toHaveBeenCalledTimes(1);
    expect(resolveOrReject).lastCalledWith(8);
  });
});
