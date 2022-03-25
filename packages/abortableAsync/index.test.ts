import { abortableAsync, AbortError, TimeoutError } from './index';

jest.useFakeTimers();

function someAsyncTask(delay = 1000, fail?: boolean): Promise<string> {
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
    const fn = abortableAsync(someAsyncTask);
    const p = fn(1000);
    // “快进”时间使得定时器回调被执行
    jest.advanceTimersByTime(1000);
    await expect(p).resolves.toBe('The result in 1000ms');

    const p2 = fn(1000, true);
    jest.advanceTimersByTime(1000);
    await expect(p2).rejects.toBe('error');
  });
  test('timeout', async () => {
    const fn = abortableAsync(someAsyncTask, { timeout: 2000 });
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
    const fn = abortableAsync(someAsyncTask, { signal: controller.signal });
    const p = fn(1000);
    jest.advanceTimersByTime(1000);
    await expect(p).resolves.toBe('The result in 1000ms');

    const p2 = fn(2000);
    jest.advanceTimersByTime(1000);
    controller.abort();
    await expect(p2).rejects.toBeInstanceOf(AbortError);
    await expect(p2).rejects.toMatchObject({ name: 'AbortError' });
  });
});
