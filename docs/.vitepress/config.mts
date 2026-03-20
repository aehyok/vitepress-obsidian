import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh-CN",
  title: "前端哥社群",
  description: "一个基于 VitePress 搭建的文档站点",
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: "首页", link: "/" }
    ],
    sidebar: [
      {
        text: "开始使用",
        items: [
          { text: "介绍", link: "/" }
        ]
      }
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/" }
    ],
    footer: {
      message: "Built with VitePress",
      copyright: "Copyright © 2026"
    }
  }
});
