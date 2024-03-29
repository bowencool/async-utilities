export function throttleAsyncResult<T, P extends any[], R>(
  fn: (this: T, ...p: P) => Promise<R>,
  { useSamePromise = false } = {},
): (this: T, ...p: P) => Promise<R> {
  let isPending = false;
  let theLastPromise: null | Promise<R> = null;
  return function asyncThrottled(this: T, ...args: P): Promise<R> {
    if (isPending) {
      if (useSamePromise && theLastPromise) {
        return theLastPromise;
      }
      return new Promise(() => {});
    } else {
      const ret = fn
        .call(this, ...args)
        .then((...a1) => {
          isPending = false;
          theLastPromise = null;
          return Promise.resolve(...a1);
        })
        .catch((...a2) => {
          isPending = false;
          theLastPromise = null;
          return Promise.reject(...a2);
        });
      theLastPromise = ret;
      isPending = true;
      return ret;
    }
  };
}
