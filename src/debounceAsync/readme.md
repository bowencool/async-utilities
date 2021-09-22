## Intro

一个类似 `debounce` 的高阶函数，返回一个新函数，这个新函数返回最后一次执行的异步任务结果（执行时间过长或执行频率过高时）。

A higher-order function like `debounce` that returns a new function that returns the result of the last executed asynchronous task (when the execution takes too long or is executed too often).

## Demo

> 以下 Demo 以网络请求为例，打开 Devtool 查看效果。
>
> The following demo takes a network request as an example and opens Devtool to see the effect.

<script setup>
import Demo from './demo.vue'
</script>

<Demo />
<details>
  <summary>查看代码</summary>

<<< src/debounceAsync/demo.vue{37,48}

</details>

## Types

```ts
export default function debounceAsync<T, P extends any[], R>(
  fn: (this: T, ...p: P) => Promise<R>,
): (this: T, ...args: P) => Promise<R>;
```
