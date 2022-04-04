import { withRetryAsync } from './index';

// jest.useFakeTimers();
function flushPromises() {
  return new Promise((resolve) => setImmediate(resolve));
}

let cache = new Map<string | symbol, number>();

function someAsyncTask<T>(key: symbol | string, data: T, delay = 10, successOrder = 1): Promise<T> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!cache.has(key)) {
        cache.set(key, 0);
      }
      const count = cache.get(key)!;
      // console.log(`${String(key)} ${count}`);
      if (count + 1 >= successOrder) {
        cache.set(key, 0);
        resolve(data);
      } else {
        cache.set(key, count + 1);
        reject(data);
      }
    }, delay);
  });
}

describe('withRetryAsync', () => {
  test('keep result correctly', async () => {
    jest.useFakeTimers();
    const wrap = withRetryAsync(someAsyncTask);
    const N = Math.random();
    const p = wrap(Symbol('will success at 1st time'), N, 1);
    jest.advanceTimersByTime(100);
    await expect(p).resolves.toBe(N);
  });
  test('keep result correctly when failed', async () => {
    jest.useRealTimers();
    const wrap = withRetryAsync(someAsyncTask, { retryInterval: 0 });
    const N = Math.random();
    const p2 = wrap(Symbol('will success at 4th time'), N, 1, 4);
    await expect(p2).rejects.toBe(N);
  });

  test('retry', async () => {
    jest.useFakeTimers();
    const rawFn = jest.fn(someAsyncTask);
    const onFailed = jest.fn();
    const onRetry = jest.fn();
    const wrap = withRetryAsync(rawFn, { maxCount: 2, onRetry, onFailed });
    const N = Math.random();
    const p = wrap(Symbol('will success at 2nd time'), N, 10, 2);
    expect(rawFn).toBeCalledTimes(1);
    expect(onFailed).toBeCalledTimes(0);
    expect(onRetry).toBeCalledTimes(1);

    jest.advanceTimersByTime(10);
    await flushPromises();
    // first failed
    expect(rawFn).toBeCalledTimes(1);
    expect(onFailed).toBeCalledTimes(1);
    expect(onFailed).lastCalledWith(1, [N]);
    expect(onRetry).toBeCalledTimes(1);
    expect(onRetry).lastCalledWith(1);

    // wait for retry
    jest.advanceTimersByTime(999);
    expect(rawFn).toBeCalledTimes(1);
    expect(onFailed).toBeCalledTimes(1);
    expect(onRetry).toBeCalledTimes(1);

    // retry
    jest.advanceTimersByTime(1);
    expect(rawFn).toBeCalledTimes(2);
    expect(onRetry).toBeCalledTimes(2);
    expect(onRetry).lastCalledWith(2);
    expect(onFailed).toBeCalledTimes(1);

    // 2nd retry will be success
    jest.advanceTimersByTime(10);
    await flushPromises();
    expect(rawFn).toBeCalledTimes(2);
    expect(onRetry).toBeCalledTimes(2);
    expect(onFailed).toBeCalledTimes(1);

    await expect(p).resolves.toBe(N);
  });
});
