export function withRetryAsync<T, P extends any[], R>(
  fn: (this: T, ...p: P) => Promise<R>,
  {
    /** 最多重试次数 */
    maxCount = 3,
    /**
     * @desc 每次重试之间的等待间隔时间
     */
    retryInterval = 1000,
    /** 每次重试开始的回调，含第一次，第一次是1 */
    onRetry = (i: number) => {},
    /**
     * @desciption 每次失败的回调
     */
    onFailed = (i: number, lastFailedReason: unknown[]) => {},
  } = {},
) {
  return function withRetryedAsync(this: T, ...args: P): Promise<R> {
    return new Promise((resolve, reject) => {
      let retriedCount = 0;

      const that = this;
      execTask();
      function execTask() {
        onRetry(++retriedCount);
        fn.call(that, ...args)
          .then((...r) => {
            resolve(...r);
          })
          .catch((...e) => {
            if (retriedCount >= maxCount) {
              onFailed(retriedCount, e);
              reject(...e);
            } else {
              onFailed(retriedCount, e);
              setTimeout(execTask, retryInterval);
            }
          });
      }
    });
  };
}
