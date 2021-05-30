/**
 * @author bowencool<z.bowen66@gmail.com>
 * @description 异步节流：上一次的promise完成之前，不会再次触发。
 */
export default function throttleAsync<T, P extends any[], R>(
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
