/**
 * @author bowencool<z.bowen66@gmail.com>
 * @description 异步去抖：短时间内触发多次，取最后一次触发的结果。如果说debounce是发送前取最后一次输入，那么debounceAsync就是发送后取最后一次请求对应的输出。
 */
export function debounceAsync<T, P extends any[], R>(
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

/**
 * @author bowencool<z.bowen66@gmail.com>
 * @description 异步节流：上一次的promise完成之前，不会再次触发。
 */
export function throttleAsync<T, P extends any[], R>(
  fn: (this: T, ...p: P) => Promise<R>,
) {
  let isPending = false;
  return function asyncThrottled(this: T, ...args: P): Promise<R> {
    if (isPending) {
      return new Promise(() => {});
    } else {
      isPending = true;
      return fn
        .call(this, ...args)
        .then((...a1) => {
          isPending = false;
          return Promise.resolve(...a1);
        })
        .catch((...a2) => {
          isPending = false;
          return Promise.reject(...a2);
        });
    }
  };
}
