/**
 * @author bowencool<z.bowen66@gmail.com>
 * @description 异步节流：上一次的promise完成之前，不会再次触发。
 * @param fn
 * @param {boolean} [config.useSamePromise] pending期间，使用同一个 Promise 作为结果
 */
export default function throttleAsync<T, P extends any[], R>(
  fn: (this: T, ...p: P) => Promise<R>,
  { useSamePromise = false } = {},
) {
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
