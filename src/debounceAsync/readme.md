## Intro

一个类似 `debounce` 的高阶函数，但是接收一个异步任务。区别是在`debounceAsync`里，如果任务没有执行则会返回一个`pending promise`。

A higher-order function like `debounce`, but receiving an asynchronous task. The difference is that in `debounceAsync`, a `pending promise` is returned if the task is not executed.

下面两段代码的运行效果是一样的，只是风格不同：

The following two pieces of code run the same way, just in different styles:

```ts
export default defineComponent({
  setup() {
    const suggestions = ref<string[]>([]);
    return {
      suggestions,
      // 同步风格 Synchronization style
      onInput: debounce(function onInput(e) {
        const keywords = e.target.value;
        searchApi(keywords).then((rez) => {
          suggestions.value = rez;
        });
      }),
    };
  },
});
```

```ts
const debouncedSearchApi = debounceAsync(searchApi);

export default defineComponent({
  setup() {
    const suggestions = ref<string[]>([]);
    return {
      suggestions,
      // 异步风格 Asynchronous style
      async onInput(e) {
        // 注意在 `await debouncedSearchApi` 之前的代码仍会执行
        // Note that the code before `await debouncedSearchApi` will still execute
        const keywords = e.target.value;

        // 会在适当的时机在此处卡住
        // will get stuck here at the right time
        const rez = await debouncedSearchApi(keywords);
        suggestions.value = rez;
      },
    };
  },
});
```

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

<<< src/debounceAsync/demo.vue

</details>

## Types

```ts
export default function debounceAsync<T, P extends any[], R>(
  fn: (this: T, ...p: P) => Promise<R>,
): (this: T, ...args: P) => Promise<R>;
```
