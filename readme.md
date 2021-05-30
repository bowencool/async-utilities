# async-utils

> 一个异步工具库，风格以高阶函数为主。
> [Live Demo](https://bowencool.github.io/async-utils/)

## 使用

```sh
yarn add bowen-async-utils
```

```ts
import { throttleAsync } from 'bowen-async-utils';

function submitApi(data: object) {
  console.log('submiting', data);
  return fetch('https://httpbin.org/delay/1.5', {
    body: JSON.stringify(data),
    method: 'POST',
    mode: 'cors',
  });
}
const throttledApi = throttleAsync(submitApi);
```

更多使用示例请查看[example/components](./example/components/)

## API

| 函数            | 一句话描述                                |
| --------------- | ----------------------------------------- |
| debouncedAsync  | 短时间内触发多次，取最后一次触发的结果。  |
| throttleAsync   | 上一次的 promise 完成之前，不会再次触发。 |
| concurrentAsync | 限制最大并发数                            |

## TODO
- [ ] 可手动/超时取消的异步任务