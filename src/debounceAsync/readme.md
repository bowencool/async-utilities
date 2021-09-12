## Intro

短时间内触发多次，取最后一次**触发**的结果。

> 背景：网络不稳，响应时间严重不均匀，无法保证响应顺序和请求顺序一致
>
> 需求：无论网络请求的返回顺序如何，我们只想要最后一次“发起”的请求结果
>
> 注释：如果说 debounce 是发送前取最后一次输入，那么 debounceAsync 就是发送后取最后一次请求对应的输出
>
> 原文：https://github.com/bowencool/blog/issues/3

## Demo

> demo 以网络请求为例，请打开 Devtool -> Network 查看效果

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
