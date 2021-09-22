## Intro

一个类似 `throttle` 的高阶函数，返回一个新函数，这个新函数返回第一次执行的异步任务结果并忽略在此期间的任何执行。

A higher-order function like `throttle` that returns a new function that returns the result of the first execution of the asynchronous task and ignores any executions in the meantime.

换句话说，在任意时刻，仅会存在 1 个或 0 个正在执行的异步任务。

In other words, at any given moment, there will be only 1 or 0 executing asynchronous tasks.

再换句话说，假如有一个 pending promise，在它结束之前不会重复执行下一个异步任务，直接返回它。

In other words, if there is a pending promise, the next asynchronous task will not be repeated until it ends, and it will be returned directly.

## Demo

> 以下 Demo 以网络请求为例，打开 Devtool 查看效果。
>
> The following demo takes a network request as an example and opens Devtool to see the effect.

<script setup>
import Demo from './demo.vue'
import Demo2 from './demo2.vue'
</script>

<Demo />
<details>
  <summary>查看代码</summary>

<<< src/throttleAsync/demo.vue{13,29-34}

</details>

<Demo2 />
<details>
  <summary>查看代码</summary>

<<< src/throttleAsync/demo2.vue{16-17}

</details>

## Types

```ts
export default function throttleAsync<T, P extends any[], R>(
  fn: (this: T, ...p: P) => Promise<R>,
  {
    useSamePromise,
  }?: {
    useSamePromise?: boolean | undefined;
  },
): (this: T, ...args: P) => Promise<R>;
```
