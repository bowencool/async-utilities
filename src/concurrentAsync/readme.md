## Intro

一个限制最大（异步任务）并发的高阶函数。

A higher-order function that limits the maximum (asynchronous task) concurrency.

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

<<< src/concurrentAsync/demo.vue{21,29,31,39,41}

</details>

## Types

```ts
export default function concurrentAsync<T, P extends any[], R>(
  fn: (this: T, ...p: P) => Promise<R>,
  maxCount?: number,
): (this: T, ...rawParams: P) => Promise<R>;
```
