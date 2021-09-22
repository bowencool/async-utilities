// 在给定时间间隔内，取最后一次事件执行
// todo 这个好像跟同步 debounce 的概念更像
export default function debounceAsync<T, P extends any[], R>(
  fn: (this: T, ...p: P) => Promise<R>,
  ms: number = 300,
) {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function debouncedFiltered(this: T, ...args: P): Promise<R> {
    return new Promise((resolve, reject) => {
      if (timeoutId !== void 0) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        fn.call(this, ...args)
          .then(resolve)
          .catch(reject);
      }, ms);
    });
  };
}
