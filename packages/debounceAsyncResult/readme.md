## Intro

一个类似 `debounce` 的高阶函数，返回一个新函数，这个新函数返回最后一次执行的异步任务结果（执行频率过高时或执行时间不均匀）。

A debounce-like higher-order function that returns a new function that returns the result of the last asynchronous task executed (when execution is too frequent or when execution time is uneven).

`debounceAsyncResult` 和 [debounceAsync](../debounceAsync/readme.md) 的区别是： `debounceAsync` 处理异步任务的执行时机。 `debounceAsyncResult` 处理已经执行的异步任务的结果。

The difference between `debounceAsyncResult` and [debounceAsync](../debounceAsync/readme.md) are: `debounceAsync` handles the occasion of asynchronous task execution. `debounceAsyncResult` handles the result of an asynchronous task that has already been executed.

## Demo

::: demo src="./demo.vue" iframe iframeHeight="100"

Demo 以网络请求为例，打开 Devtool 查看效果。

This demo takes a network request as an example and opens Devtool to see the effect.

:::

## Types

<<< es/debounceAsyncResult/index.d.ts
