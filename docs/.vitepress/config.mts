import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "陈小厨的个人小站",
  description: "陈小厨的技术分享",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '代码示例', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    // footer:{
    //   message: '<img src="./gonganbeian.png"/><a href="https://beian.mps.gov.cn/#/query/webSearch?code=51015602000879" rel="noreferrer" target="_blank">川公网安备51015602000879</a>蜀ICP备19040810号',
    //   copyright: 'Copyright © 2024-present 陈小厨'
    // }
  }
})
