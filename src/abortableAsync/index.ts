export class AbortError extends Error {}
export class TimeoutError extends Error {}

export default function abortableAsync<T, P extends any[], R>(
  fn: (this: T, ...p: P) => Promise<R>,
  opt: { timeout?: number; signal?: AbortSignal } = {},
) {
  return function abortabledAsync(this: T, ...args: P): Promise<R> {
    return new Promise((resolve, reject) => {
      let timer: ReturnType<typeof setTimeout>;
      function doAbort() {
        reject(new AbortError('aborted'));
      }
      function doTimeout() {
        reject(new TimeoutError(`timeout of ${opt.timeout}ms`));
      }
      if (typeof opt.timeout === 'number' && opt.timeout > 0) {
        timer = setTimeout(doTimeout, opt.timeout);
      }
      if (opt.signal) {
        opt.signal.addEventListener('abort', doAbort);
      }
      function clearEffect() {
        if (timer) clearTimeout(timer);
        if (opt.signal) {
          //? 感觉没必要
          opt.signal.removeEventListener('abort', doAbort);
        }
      }

      fn.call(this, ...args)
        .then((...r) => {
          resolve(...r);
          clearEffect();
        })
        .catch((...e) => {
          reject(...e);
          clearEffect();
        });
    });
  };
}
