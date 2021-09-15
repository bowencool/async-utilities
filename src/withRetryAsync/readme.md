## Intro

自动重试。

## Demo

> demo 以网络请求为例，请打开 Devtool 查看效果

<script setup>
import Demo from './demo.vue'
</script>

<Demo />
<details>
  <summary>查看代码</summary>

<<< src/withRetryAsync/demo.vue{13,29-34}

</details>


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
