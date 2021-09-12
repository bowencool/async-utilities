## Intro

超时取消、手动取消.

## Demo

<script setup>
import Demo from './demo.vue'
</script>

<Demo />
<details>
  <summary>查看代码</summary>

<<< src/cancelizeAsync/demo.vue{14,29-30,34-37}

</details>

## Types

```ts
export default function cancelizeAsync<T, P extends any[], R>(
  fn: (this: T, ...p: P) => Promise<R>,
  opt?: {
    timeout?: number;
    signal?: AbortSignal;
  },
): (this: T, ...args: P) => Promise<R>;
```
