export function withRetryAsync<T, P extends any[], R>(
  fn: (this: T, ...p: P) => Promise<R>,
  {
    maxCount = 3,
    retryInterval = 500,
    onRetry = (i: number, lastFailedReason: unknown[]) => {},
  } = {},
) {
  return function withRetryedAsync(this: T, ...args: P): Promise<R> {
    return new Promise((resolve, reject) => {
      let retriedCount = 0;
      let lastFailedReason: unknown[] = [];
      // let timer: ReturnType<typeof setTimeout>;
      const that = this;

      execTask();

      function execTask() {
        onRetry(retriedCount, lastFailedReason);
        fn.call(that, ...args)
          .then((...r) => {
            resolve(...r);
          })
          .catch((...e) => {
            // console.log('failed');
            if (++retriedCount >= maxCount) {
              reject(...e);
            } else {
              lastFailedReason = e;
              setTimeout(execTask, retryInterval);
            }
          });
      }
    });
  };
}
