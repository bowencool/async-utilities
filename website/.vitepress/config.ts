import MarkdownIt from 'markdown-it';
import { UserConfig } from 'vitepress';
import markdownItCheckbox from 'markdown-it-checkbox';
import markdownItDemo from './markdown/plugin/markdown-it-demo';
const fs = require('fs-extra');
const path = require('path');

const INPUT_PATH = path.resolve(__dirname, '../../packages');

export const config: UserConfig = {
  base: '/async-utilities/',
  title: 'Async Utilities',
  lang: 'zh-CN',
  description: process.env.npm_package_description,

  // https://vitepress.vuejs.org/guide/markdown.html#advanced-configuration
  markdown: {
    lineNumbers: true,
    config: (md: MarkdownIt) => {
      md.use(markdownItCheckbox);
      md.use(markdownItDemo);
    },
  },

  themeConfig: {
    sidebar: {
      // '/functions/': getComponentsSidebar(),
      // '/guide/': getGuideSidebar(),
      '/': getComponentsSidebar(),
    },
    nav: [
      { text: '指南 Guide', link: '/', activeMatch: '^/$|^/guide/' },
      {
        text: '函数 Functions',
        link: '/functions/index',
        activeMatch: '^/functions/',
      },
      // {
      //   text: '发布日志',
      // },
      {
        text: 'Github',
        link: 'https://github.com/bowencool/async-utilities',
      },
    ],
  },
};


function getGuideSidebar() {
  return [
    {
      text: '介绍 Intro',
      children: [
        { text: '开始使用 Getting started', link: '/guide/getting-started' },
        // { text: '配置', link: '/guide/configuration' },
        // { text: '贡献/开发指南', link: '/guide/contribution' },
        // { text: 'Todos', link: '/guide/todos' },
      ],
    },
  ];
}

function getComponentsSidebar() {
  let functions = [];
  fs.readdirSync(`${INPUT_PATH}`)
    .filter((name) => !name.includes('.'))
    .forEach((name) => {
      // console.log(name)
      // return;
      let mdFile = `readme.md`;
      // console.log(name, mdFile);
      if (fs.existsSync(`${INPUT_PATH}/${name}/${mdFile}`)) {
        const text = name.replace(/[-_]([a-z])/g, (_, $1) => $1.toUpperCase());
        const link = `/functions/${name}/${mdFile.replace(/\.md$/, '')}`;
        functions.push({
          text,
          link,
        });
      }
    });
  console.log(functions);
  // return functions;
  return [
    {
      text: '函数 Functions',
      children: functions,
    },
  ];
}
