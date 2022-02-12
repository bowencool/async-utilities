## Intro

一个高阶函数，可以通过[AbortSignal](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal)中止异步任务或在超时时自动中止。

A higher-order function that can abort asynchronous tasks by [AbortSignal](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) or automatically abort on timeout.

## Demo

<demo src="./demo.vue" iframe />

## Types

```ts
export default function abortableAsync<T, P extends any[], R>(
  fn: (this: T, ...p: P) => Promise<R>,
  opt?: {
    timeout?: number;
    signal?: AbortSignal;
  },
): (this: T, ...args: P) => Promise<R>;
```
