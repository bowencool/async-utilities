import { abortableAsync, AbortError, TimeoutError } from './index';

jest.useFakeTimers();

function flushPromises() {
  return new Promise((resolve) => setImmediate(resolve));
}

function resolveInNms(delay = 1000, fail?: boolean): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fail) {
        reject('error');
      } else {
        resolve(`The result in ${delay}ms`);
      }
    }, delay);
  });
}

describe('abortableAsync', () => {
  test('basic', async () => {
    const fn = abortableAsync(resolveInNms);
    const p = fn(1000);
    // “快进”时间使得定时器回调被执行
    jest.advanceTimersByTime(1000);
    await expect(p).resolves.toBe('The result in 1000ms');

    const p2 = fn(1000, true);
    jest.advanceTimersByTime(1000);
    await expect(p2).rejects.toBe('error');
  });
  test('timeout', async () => {
    const fn = abortableAsync(resolveInNms, { timeout: 2000 });
    const p = fn(1000);
    jest.advanceTimersByTime(1000);
    await expect(p).resolves.toBe('The result in 1000ms');

    const p2 = fn(2000);
    jest.advanceTimersByTime(2000);
    await expect(p2).rejects.toBeInstanceOf(TimeoutError);
    await expect(p2).rejects.toMatchObject({ name: 'TimeoutError' });
  });
  test('signal', async () => {
    // controller.abort() 只能触发一次 abort 事件
    const controller = new AbortController();
    const fn = abortableAsync(resolveInNms, { signal: controller.signal });
    const p = fn(1000);
    jest.advanceTimersByTime(1000);
    await expect(p).resolves.toBe('The result in 1000ms');

    const p2 = fn(2000);
    jest.advanceTimersByTime(1000);
    controller.abort();
    await expect(p2).rejects.toBeInstanceOf(AbortError);
    await expect(p2).rejects.toMatchObject({ name: 'AbortError' });
  });
  test('alwaysPendingWhenAborted', async () => {
    const controller = new AbortController();
    const fn = abortableAsync(resolveInNms, {
      signal: controller.signal,
      timeout: 2000,
      alwaysPendingWhenAborted: true,
    });
    const p = fn(1000);
    jest.advanceTimersByTime(1000);
    await expect(p).resolves.toBe('The result in 1000ms');

    const resolveOrReject = jest.fn();
    fn(2000, true).then(resolveOrReject).catch(resolveOrReject);
    jest.advanceTimersByTime(1000);
    controller.abort();

    await flushPromises();
    // // expect(pp).not.toComplete();
    expect(resolveOrReject).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1500);
    await flushPromises();
    expect(resolveOrReject).not.toHaveBeenCalled();
  });
  test('alwaysPendingWhenTimeout', async () => {
    const controller = new AbortController();
    const fn = abortableAsync(resolveInNms, {
      signal: controller.signal,
      timeout: 2000,
      alwaysPendingWhenAborted: true,
    });
    const p = fn(1000);
    jest.advanceTimersByTime(1000);
    await expect(p).resolves.toBe('The result in 1000ms');

    const resolveOrReject = jest.fn();
    fn(2000).then(resolveOrReject, resolveOrReject);
    jest.advanceTimersByTime(1000);
    await flushPromises();
    expect(resolveOrReject).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1500);
    await flushPromises();
    controller.abort();
    expect(resolveOrReject).not.toHaveBeenCalled();
  });
});
