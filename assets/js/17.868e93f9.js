(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{61:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署","aria-hidden":"true"}},[t._v("#")]),t._v(" 部署")]),a("p",[t._v("以下指南假设你将文档放置在项目的 "),a("code",[t._v("docs")]),t._v(" 目录中，并使用默认的编译输出位置。")]),a("h2",{attrs:{id:"github-页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-页面","aria-hidden":"true"}},[t._v("#")]),t._v(" GitHub 页面")]),a("ol",[a("li",[a("p",[t._v("将 "),a("code",[t._v(".vuepress/config.js")]),t._v(" 中的 "),a("code",[t._v("base")]),t._v(" 设置为你的仓库名称。例如，如果你的仓库是 "),a("code",[t._v("https://github.com/foo/bar")]),t._v(" ，则已部署的页面将在 "),a("code",[t._v("https://foo.github.io/bar")]),t._v(" 上可用。在这种情况下，你应该将"),a("code",[t._v("base")]),t._v("设置为 "),a("code",[t._v('"/bar/"')]),t._v(" 。")])]),a("li",[a("p",[t._v("在你的项目中，运行：")])])]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("# 构建")]),t._v("\nvuepress build docs\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 导航到构建输出目录")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" docs/.vuepress/dist\n\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" add -A\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{attrs:{class:"token string"}},[t._v("'deploy'")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 推到你仓库的的 gh-page 分支")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 将 <USERNAME>/<REPO> 替换为你的信息")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" push -f git@github.com:"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("USERNAME"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("/"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("REPO"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(".git master:gh-pages\n")])]),a("p",[t._v("你可以在 CI 设置中运行此脚本以启用每次推送时的自动部署。")]),a("h2",{attrs:{id:"netlify"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#netlify","aria-hidden":"true"}},[t._v("#")]),t._v(" Netlify")]),a("ol",[a("li",[t._v("确保你有用于构建文档的 npm 脚本：")])]),a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"docs:build"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"vuepress build docs"')]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("在 Netlify 上，使用以下设置从 GitHub 创建一个新项目：")])]),a("ul",[a("li",[a("strong",[t._v("构建命令：")]),a("code",[t._v("npm run docs:build")]),t._v(" or "),a("code",[t._v("yarn docs:build")])]),a("li",[a("strong",[t._v("发布目录：")]),a("code",[t._v("docs/.vuepress/dist")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("点击部署按钮！")])]),a("hr"),a("blockquote",[a("p",[t._v("原文："),a("a",{attrs:{href:"https://vuepress.vuejs.org/guide/deploy.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://vuepress.vuejs.org/guide/deploy.html")])])]),a("hr")])}],!1,null,null,null);s.default=e.exports}}]);