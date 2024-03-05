export class AbortError extends Error {}
AbortError.prototype.name = 'AbortError';
export class TimeoutError extends Error {}
TimeoutError.prototype.name = 'TimeoutError';

export type AbortableOption = {
  timeout?: number;
  signal?: AbortSignal;
  alwaysPendingWhenAborted?: boolean;
  // alwaysPendingWhenTimeout?: boolean;
};

export function abortableAsync<T, P extends any[], R>(
  fn: (this: T, ...p: P) => Promise<R>,
  opt: AbortableOption = {},
): (this: T, ...p: P) => Promise<R> {
  return function abortabledAsync(this: T, ...args: P): Promise<R> {
    return new Promise((resolve, reject) => {
      let timer: ReturnType<typeof setTimeout> | undefined;
      let aborted = false; // avoid resolve when opt.alwaysPendingWhenAborted is true
      function doAbort() {
        // if (aborted) return;
        if (!opt.alwaysPendingWhenAborted) {
          reject(new AbortError('aborted'));
        }
        aborted = true;
        clearEffect();
      }
      opt.signal?.addEventListener?.('abort', doAbort);
      function doTimeout() {
        // if (aborted) return;
        if (!opt.alwaysPendingWhenAborted) {
          reject(new TimeoutError(`timeout of ${opt.timeout}ms`));
        }
        aborted = true;
        clearEffect();
      }
      if (typeof opt.timeout === 'number' && opt.timeout > 0) {
        timer = setTimeout(doTimeout, opt.timeout);
      }
      function clearEffect() {
        if (typeof timer !== 'undefined') {
          clearTimeout(timer);
          timer = undefined;
        }
        opt.signal?.removeEventListener?.('abort', doAbort);
      }

      fn.call(this, ...args)
        .then((...r) => {
          if (!aborted) {
            resolve(...r);
          }
          clearEffect();
        })
        .catch((...e) => {
          if (!aborted) {
            reject(...e);
          }
          clearEffect();
        });
    });
  };
}
