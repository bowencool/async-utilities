# async-utils

> 一个异步工具库，风格以高阶函数为主。
> [Live Demo](https://bowencool.github.io/async-utils/)

## API

| 函数            | 一句话描述                                   |
| --------------- | -------------------------------------------- |
| debouncedAsync  | 短时间内触发多次，取最后一次**触发**的结果。 |
| throttleAsync   | 上一次的 promise 完成之前，不会再次触发。    |
| concurrentAsync | 并发限制、自动排队                           |
| cancelizeAsync  | 超时取消、手动取消                           |

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
const throttledSubmitApi = throttleAsync(submitApi);
throttledSubmitApi(1);
throttledSubmitApi(2);
throttledSubmitApi(3);
// 2、3 在 1 结束之前不会被提交
```

更多使用示例请查看[example/components](./example/components/)

## TODO
- [ ] vitepress重构下文档
- [ ] 单测
- [ ] 改个名字
- [ ] feat: retry
