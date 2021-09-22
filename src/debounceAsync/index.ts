export default function debounceAsync<T, P extends any[], R>(
  fn: (this: T, ...p: P) => Promise<R>,
  // { normalDebounceInterval = 0 } = {},
) {
  let lastFetchId = 0;
  // let run = debounce(() => {
  //   fn.call(this, ...args)
  // })

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
 * 1.先尝试用高阶函数组合
 *  - 返回值就完全不能兼容
 *  1.1 先不考虑返回值
 *  1.2 返回 Promise<null>
 *  1.2 返回 Promise<pending>
 * 2.不行再编码
 */

// export function debounce<T, P extends any[], R>(
//   fn: (this: T, ...p: P) => R & (void extends R ? void : never),
//   ms: number = 300,
// ) {
//   let timeoutId: ReturnType<typeof setTimeout>;
//   return function debounced(this: T, ...args: P) {
//     if (timeoutId !== void 0) {
//       clearTimeout(timeoutId);
//     }
//     timeoutId = setTimeout(() => {
//       fn.call(this, ...args);
//     }, ms);
//   };
// }
