## Intro

一个可以让异步任务支持重试的高阶函数。

A higher-order function that allows asynchronous tasks to support retries.

## Demo

> 以下 Demo 以网络请求为例，打开 Devtool 查看效果。
>
> The following demo takes a network request as an example and opens Devtool to see the effect.

<demo src="./demo.vue" />

## Types

```ts
export default function withRetryAsync<T, P extends any[], R>(
  fn: (this: T, ...p: P) => Promise<R>,
  {
    maxCount,
    retryInterval,
  }?: {
    maxCount?: number | undefined;
    retryInterval?: number | undefined;
  },
): (this: T, ...args: P) => Promise<R>;
```
