export function debounceAsync<T, P extends any[], R>(fn: (this: T, ...p: P) => Promise<R>, ms: number = 300) {
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
