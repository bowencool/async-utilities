export class AbortError extends Error {}
AbortError.prototype.name = 'AbortError';
export class TimeoutError extends Error {}
TimeoutError.prototype.name = 'TimeoutError';

export type AbortableOption = {
  timeout?: number;
  signal?: AbortSignal;
  alwaysPendingWhenAborted?: boolean;
};

export function abortableAsync<T, P extends any[], R>(fn: (this: T, ...p: P) => Promise<R>, opt: AbortableOption = {}) {
  return function abortabledAsync(this: T, ...args: P): Promise<R> {
    return new Promise((resolve, reject) => {
      let timer: ReturnType<typeof setTimeout>;
      let aborted = false; // avoid resolve when opt.reject is false
      function doAbort() {
        if (aborted) return;
        if (!opt.alwaysPendingWhenAborted) {
          reject(new AbortError('aborted'));
        }
        aborted = true;
      }
      function doTimeout() {
        if (aborted) return;
        if (!opt.alwaysPendingWhenAborted) {
          reject(new TimeoutError(`timeout of ${opt.timeout}ms`));
        }
        aborted = true;
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
          if (!aborted) {
            resolve(...r);
          }
          clearEffect();
        })
        .catch((...e) => {
          // if (!stoped) {
          reject(...e);
          // }
          clearEffect();
        });
    });
  };
}
