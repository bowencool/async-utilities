const fs = require('fs-extra');
const path = require('path');

const INPUT_PATH = path.resolve(__dirname, '../../src');
/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  title: 'Async Utils',
  lang: 'zh-CN',
  description: 'Just async utils.',
  // https://vitepress.vuejs.org/guide/markdown.html#advanced-configuration
  markdown: {
    lineNumbers: true,
    config: (md) => {
      md.use(require('markdown-it-checkbox'));
    },
  },
  themeConfig: {
    sidebar: {
      '/functions/': getComponentsSidebar(),
      '/guide/': getGuideSidebar(),
      '/': getGuideSidebar(),
    },
    nav: [
      { text: '指南', link: '/', activeMatch: '^/$|^/guide/' },
      {
        text: '函数',
        link: '/functions/index',
        activeMatch: '^/functions/',
      },
      // {
      //   text: '发布日志',
      // },
      {
        text: 'Github',
        link: 'https://github.com/bowencool/async-utils',
      },
    ],
  },
};

function getGuideSidebar() {
  return [
    {
      text: '介绍',
      children: [
        { text: '开始使用', link: '/guide/getting-started' },
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
      console.log(name, mdFile);
      if (fs.existsSync(`${INPUT_PATH}/${name}/${mdFile}`)) {
        const text = name.replace(/[-_]([a-z])/g, (_, $1) => $1.toUpperCase());
        const link = `/functions/${name}/${mdFile.replace(/\.md$/, '')}`;
        functions.push({
          text,
          link,
        });
      }
    });
  // console.log(functions);
  // return functions;
  return [
    {
      text: '函数',
      children: functions,
    },
  ];
}
