export default function withRetryAsync<T, P extends any[], R>(
  fn: (this: T, ...p: P) => Promise<R>,
  { maxCount = 3, retryInterval = 500, onRetry = (i: number) => {} } = {},
) {
  return function withRetryedAsync(this: T, ...args: P): Promise<R> {
    return new Promise((resolve, reject) => {
      let retriedCount = 0;
      // let timer: ReturnType<typeof setTimeout>;
      const that = this;

      execTask();

      function execTask() {
        onRetry(retriedCount);
        fn.call(that, ...args)
          .then((...r) => {
            resolve(...r);
          })
          .catch((...e) => {
            // console.log('failed');
            if (++retriedCount >= maxCount) {
              reject(...e);
            } else {
              setTimeout(execTask, retryInterval);
            }
          });
      }
    });
  };
}