## Intro

短时间内触发多次，取第一次（仅执行一次）的执行结果。

换句话说，在任意时刻，仅会存在 1 个或 0 个正在 pending 的任务。

再换句话说，上一个 Promise 结束之前，不会重复执行，直接返回正在 pending 的 Promise。

## Demo

> demo 以网络请求为例，请打开 Devtool -> Network 查看效果

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

<<< src/throttleAsync/demo2.vue{16,28-31}

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
