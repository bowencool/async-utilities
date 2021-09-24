export default function debounceAsyncResult<T, P extends any[], R>(
  fn: (this: T, ...p: P) => Promise<R>,
) {
  let lastFetchId = 0;
  return function asyncDebounced(this: T, ...args: P): Promise<R> {
    const fetchId = ++lastFetchId;

    return fn.call(this, ...args).then((...a1) => {
      if (fetchId !== lastFetchId) {
        return new Promise(() => {});
      }
      return Promise.resolve(...a1);
    });
  };
}
