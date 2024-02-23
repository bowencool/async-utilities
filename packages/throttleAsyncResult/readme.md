## Intro

一个类似 `throttle` 的高阶函数，返回一个新函数，这个新函数返回第一次执行的异步任务结果并忽略在此期间的任何执行。

A higher-order function like `throttle` that returns a new function that returns the result of the first execution of the asynchronous task and ignores any executions in the meantime.

换句话说，在任意时刻，仅会存在 1 个或 0 个正在执行的异步任务。

In other words, at any given moment, there will be only 1 or 0 executing asynchronous tasks.

再换句话说，假如有一个 pending promise，在它结束之前不会重复执行下一个异步任务，直接返回它或者一个`always pending promise`（根据配置中的 `useSamePromise`）。

In other words, if there is a pending promise, the next asynchronous task will not be repeated until it finishes, and it will be returned directly or as an `always pending promise` (according to `useSamePromise` in the configuration).

## Demo

> 以下 Demo 以网络请求为例，打开 Devtool 查看效果。
>
> The following demo takes a network request as an example and opens Devtool to see the effect.

::: demo src="./demo.vue" title="提交场景 Submission Case" iframe iframeHeight="50"

- 背景：为防止用户重复提交，我们通常需要维护一个 loading 变量，当 loading 数量多起来就难搞了（我也想偷懒）。
- 需求：不需要写 loading，也可以去重。
- 原文：https://blog.bowen.cool/zh/posts/when-throttling-meets-asynchrony

:::

::: demo src="./demo2.vue" title="查询场景 Query Case" iframe iframeHeight="100"

- 背景：多个地方需要同一份数据，往往调用（请求）多次。
- 需求：执行（请求）一次，返回同一个结果给多个调用方。

:::

## Types

<<< es/throttleAsyncResult/index.d.ts
