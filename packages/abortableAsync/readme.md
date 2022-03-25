## Intro

一个高阶函数，可以通过[AbortSignal](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal)中止异步任务或在超时时自动中止。

A higher-order function that can abort asynchronous tasks by [AbortSignal](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) or automatically abort on timeout.

## Demo

<demo src="./demo.vue" iframe iframeHeight="178" />

::: demo src="./demo2.vue" title="取消或超时时丢弃结果（而不是抛出错误）。Always pending when aborted instead of rejections." iframe iframeHeight="178"

如果你想重试的话，请使用 [withRetryAsync](../withRetryAsync/readme.md)。 If you want to retry, use [withRetryAsync](../withRetryAsync/readme.md).

:::

## Types

<<< es/abortableAsync/index.d.ts
