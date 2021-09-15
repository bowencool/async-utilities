## Intro

一个类似 `debounce` 的高阶函数，返回一个新函数，这个新函数返回最后一次执行的异步任务结果。

A higher-order function like `debounce` that returns a new function that returns the result of the last executed asynchronous task.

> 背景：网络不稳，响应时间严重不均匀，无法保证响应顺序和请求顺序一致
>
> 需求：无论网络请求的返回顺序如何，我们只想要最后一次“发起”的请求结果
>
> 注释：如果说 debounce 是发送前取最后一次输入，那么 debounceAsync 就是发送后取最后一次请求对应的输出
>
> 原文：https://github.com/bowencool/blog/issues/3

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

<<< src/debounceAsync/demo.vue{32,42}

</details>

## Types

```ts
export default function debounceAsync<T, P extends any[], R>(
  fn: (this: T, ...p: P) => Promise<R>,
): (this: T, ...args: P) => Promise<R>;
```
