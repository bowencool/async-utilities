import { throttleAsyncResult } from './index';

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

describe('throttleAsyncResult', () => {
  test('keep result correctly', async () => {
    jest.useFakeTimers();
    const throttled = throttleAsyncResult(someAsyncTask);
    const N = Math.random();
    const p = throttled(N, 1);
    jest.advanceTimersByTime(1000);
    await expect(p).resolves.toBe(N);
    const p2 = throttled(N, 0, true);
    jest.advanceTimersByTime(1000);
    await expect(p2).rejects.toBe(N);
  });
  test('keep result correctly with multiple calls', async () => {
    jest.useFakeTimers();
    const rawFn = jest.fn(someAsyncTask);
    const throttled = throttleAsyncResult(rawFn);
    const resolveOrReject = jest.fn();
    new Array(5).fill(0).map((_, i) =>
      throttled(i * 2, 100 - 10 * i, i % 2 === 0)
        .then(resolveOrReject)
        .catch(resolveOrReject),
    );

    expect(rawFn).toHaveBeenCalledTimes(1);
    expect(resolveOrReject).not.toHaveBeenCalled();
    jest.advanceTimersByTime(500);
    await flushPromises();
    expect(rawFn).toHaveBeenCalledTimes(1);
    expect(rawFn).lastCalledWith(0, 100, true);
    expect(resolveOrReject).toHaveBeenCalledTimes(1);
    expect(resolveOrReject).lastCalledWith(0);
  });
  test('useSamePromise', async () => {
    jest.useFakeTimers();
    const rawFn = jest.fn(someAsyncTask);
    const throttled = throttleAsyncResult(rawFn, { useSamePromise: true });
    const resolveOrReject = jest.fn();
    new Array(5).fill(0).map((_, i) =>
      throttled(i * 2, 100 - 10 * i, i % 2 === 0)
        .then(resolveOrReject)
        .catch(resolveOrReject),
    );

    expect(rawFn).toHaveBeenCalledTimes(1);
    expect(resolveOrReject).not.toHaveBeenCalled();
    jest.advanceTimersByTime(500);
    await flushPromises();
    expect(rawFn).toHaveBeenCalledTimes(1);
    expect(rawFn).lastCalledWith(0, 100, true);
    expect(resolveOrReject).toHaveBeenCalledTimes(5);
  });
});
