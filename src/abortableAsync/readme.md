## Intro

一个高阶函数，可以通过[AbortSignal](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal)中止异步任务或在超时时自动中止。

A higher-order function that can abort asynchronous tasks by [AbortSignal](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) or automatically abort on timeout.

## Demo

<script setup>
import Demo from './demo.vue'
</script>

<Demo />
<details>
  <summary>查看代码</summary>

<<< src/abortableAsync/demo.vue{14,29-30,34-37}

</details>

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
