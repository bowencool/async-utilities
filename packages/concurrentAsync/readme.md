## Intro

一个限制最大（异步任务）并发的高阶函数。

A higher-order function that limits the maximum (asynchronous task) concurrency.

## Demo

> 以下 Demo 以网络请求为例，打开 Devtool 查看效果。
>
> The following demo takes a network request as an example and opens Devtool to see the effect.

<demo src="./demo.vue" />

## Types

```ts
export default function concurrentAsync<T, P extends any[], R>(
  fn: (this: T, ...p: P) => Promise<R>,
  maxCount?: number,
): (this: T, ...rawParams: P) => Promise<R>;
```
