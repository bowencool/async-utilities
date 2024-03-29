export function debounceAsyncResult<T, P extends any[], R>(
  fn: (this: T, ...p: P) => Promise<R>,
): (this: T, ...p: P) => Promise<R> {
  let lastFetchId = 0;
  return function asyncDebounced(this: T, ...args: P): Promise<R> {
    const fetchId = ++lastFetchId;
    return new Promise<R>((resolve, reject) => {
      fn.call(this, ...args)
        .then((...rez) => {
          if (fetchId === lastFetchId) {
            resolve(...rez);
          }
        })
        .catch((...err) => {
          if (fetchId === lastFetchId) {
            reject(...err);
          }
        });
    });

    // return fn
    //   .call(this, ...args)
    //   .then((...a1) => {
    //     if (fetchId !== lastFetchId) {
    //       return new Promise(() => {});
    //     }
    //     return Promise.resolve(...a1);
    //   })
    //   .catch((err) => {
    //     if (fetchId !== lastFetchId) {
    //       return new Promise(() => {}) as Promise<R>;
    //     }
    //     return Promise.reject(err);
    //   });
  };
}
