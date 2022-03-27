# Async Utilities

<p align="center">
  <a href='https://github.com/bowencool/async-utilities/actions/workflows/gh-pages.yml'><img src='https://github.com/bowencool/async-utilities/actions/workflows/gh-pages.yml/badge.svg' alt='Actions Status' /></a>
  <a href='https://coveralls.io/github/bowencool/async-utilities?branch=main'><img src='https://coveralls.io/repos/github/bowencool/async-utilities/badge.svg?branch=main' alt='Coverage Status' /></a>
  <a href="https://www.npmjs.com/package/high-order-async-utilities"><img src="https://img.shields.io/npm/v/high-order-async-utilities.svg?style=flat-square" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/high-order-async-utilities"><img src="https://img.shields.io/npm/dt/high-order-async-utilities.svg?style=flat-square" alt="npm downloads" /></a>
  <a href="https://github.com/bowencool/create-vitepress-demo"><img src="https://img.shields.io/badge/docs%20by-vitepress-blue" alt="vitepress" /></a>
</p>

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
