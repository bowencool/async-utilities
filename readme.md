# Async Utilities

<p align="center">
  <a href='https://github.com/bowencool/async-utilities/actions/workflows/gh-pages.yml'><img src='https://github.com/bowencool/async-utilities/actions/workflows/gh-pages.yml/badge.svg' alt='Actions Status' /></a>
  <a href='https://coveralls.io/github/bowencool/async-utilities?branch=main'><img src='https://coveralls.io/repos/github/bowencool/async-utilities/badge.svg?branch=main' alt='Coverage Status' /></a>
  <a href="https://www.npmjs.com/package/@bowencool/async-utilities"><img src="https://img.shields.io/npm/v/@bowencool/async-utilities.svg?style=flat-square" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/@bowencool/async-utilities"><img src="https://img.shields.io/npm/dt/@bowencool/async-utilities.svg?style=flat-square" alt="npm downloads" /></a>
  <!-- <a target="_blank" rel="noopener noreferrer" href="https://npmjs.org/package/@bowencool/async-utilities"><img src="https://img.shields.io/npm/dm/@bowencool/async-utilities.svg?style=flat" alt="NPM downloads"></a> -->
  <img src="https://img.badgesize.io/https:/unpkg.com/@bowencool/async-utilities/umd/index.js?label=gzip%20size&amp;compression=gzip" alt="gzip size">
  <img src="https://img.shields.io/github/license/bowencool/async-utilities" alt="GitHub">
  <a href="https://github.com/bowencool/create-vitepress-demo"><img src="https://img.shields.io/badge/docs%20by-vitepress-blue" alt="vitepress" /></a>
</p>

一个异步工具库，风格以高阶函数为主。

An asynchronous tools library in the style of higher-order functions. [Website](https://bowencool.github.io/async-utilities/)

# Usage

使用 npm：

```bash
npm i @bowencool/async-utilities
```

```ts
import { throttleAsyncResult } from '@bowencool/async-utilities';
```

在浏览器中：

```html
<script scr="//unpkg.com/@bowencool/async-utilities"></script>
<!-- or -->
<script scr="//cdn.jsdelivr.net/npm/@bowencool/async-utilities"></script>
```

# Todo

- ~~cacheAsync~~ see [memoizee](https://github.com/medikoo/memoizee#memoizing-asynchronous-functions) or [lru-pcache](https://github.com/jmendiara/lru-pcache)
- [ ] abort fetch & xhr

## License

MIT
