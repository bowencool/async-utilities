# async-utilities

<!-- [![Coverage Status](https://coveralls.io/repos/github/bowencool/async-utilities/badge.svg)](https://coveralls.io/github/bowencool/async-utilities) -->

<a href='https://coveralls.io/github/bowencool/async-utilities?branch=main'><img src='https://coveralls.io/repos/github/bowencool/async-utilities/badge.svg?branch=main' alt='Coverage Status' /></a>

一个异步工具库，风格以高阶函数为主。

An asynchronous tool library in the style of higher-order functions. [Website](https://bowencool.github.io/async-utilities/)

# Usage

```bash
yarn add high-order-async-utilities
```

```ts
import { throttleAsyncResult } from 'high-order-async-utilities';
```

# Todo

- ~~cacheAsync~~ see [memoizee](https://github.com/medikoo/memoizee#memoizing-asynchronous-functions) or [lru-pcache](https://github.com/jmendiara/lru-pcache)
- [ ] abort fetch & xhr
