---
slug: job-hunt
title: 工作求职
author: HanWang
author_title: Carlajs 画饼作者
author_url: https://www.zhihu.com/people/mrno-64
author_image_url: https://i.loli.net/2021/05/11/jvB2r3MWRVeC7Od.jpg
tags: [other]
---

应聘职位：前端工程师

:::warning
非正式简历，不是正确排版格式，21 届毕业 由于某些原因错过了 21 届招聘
:::

### 技能简介

1. 技能罗列：
   `Javascript/Typescript` `React` `ReactNative` `Electron` `Flutter/Dart` `Nodejs`
2. 喜爱使用 Ts，React，Vanillajs 开发，能够使用 Webpack, Rolllup 独立搭建自定义的开发环境
3. 能够使用 Nodejs 及其相关 Web 技术开发后端应用，Pm2/Express/SocketIo/Nestjs/Typeorm 对 sql 有一定了解
4. 对安卓开发有一定了解，未系统性的学习过
5. 能够熟练使用 Git，Github, 搭建 CI/CD(Travis, Github Action)
6. 具有较强的文档阅读能力和对技术的适应能力，相对于对一般技术可以快速学习

### 实习经历

图灵人工智能研究院（南京）有限公司

公司主要方向是 AI 鉴定 核心业务围绕小程序展开 使用 Taro 开发 本人负责了部分界面的开发， 同样负责开发商城的中台，用 Vue + D2Admin 开发。辅助同事快速迭代产品。

### 项目经历

个人的业余工作室 deskbtm https://deskbtm.com/<br />
创建的两个 organization [deskbtm](https://github.com/deskbtm) [carla-app](https://github.com/carla-app)
[Github](https://github.com/sewerganger)

#### 1. carlajs(开发中) 一个强大的跨平台 javascript 脚本应用环境

使用 ReactNative 和移动端 Native 技术构建的一个平台，目前无 IOS 计划<br />

1. 在老的技术方案中 ，为 Android 平台编译 Nodejs
   为用其提供 Runtime，利用 JNI 和 Napi 实现 Nodejs 和 ReactNative 通信。`native<->rn<->carla bridge<->nodejs<-carla插件`，原理类似 RN 老架构。然后封装原生 api 给 RN 使用，实现类似 Autojs 的能力。[Carlajs 简介详情](https://carlajs.deskbtm.com/more/join-me)。但这种方案 UI 更新不灵活, 完全依靠软件提供的 UI 组件。事件调度复杂，也无法很好的管理内存。之后也考虑过 React Reconciler。
2. 目前的方案，可以理解为使用 RecatNative 开发的"浏览器"，"浏览器"中绘制的为原生组件, 类似北海。通过 hack ReactNative 和 android 原生, 实现在 Fragment 上运行新的 React 应用, 并提供封装的系统 api。安全性方面，会对提供的 Sdk api 拦截，实现权限管理。借助 npm 仓库和 URI 两种方式安装/使用应用。待程序稳定 后期可能将整个架构抽离并开源, 提供给其他 APP 搭建"小程序平台"

#### 2. aqua 使用 Flutter 开发的一款优雅至极的文件管理器

Github 地址: [Aqua](https://github.com/deskbtm/aqua)

开源应用，目前上架在酷安平台，技术要点：

1. 为了解决图片过大导致 imageview 卡顿的问题，
   去了解了外接纹理+glide 的方案，但最终选择为 glide 开发一个轻量的 plugin ，
2. 内部通过 proot + rootfs(Alpine Linux), 搭建了一个最小化的 Virtual Container，并借助 Code Server 实现了移动的代码平台<br/>
   目前也在利用空余时间重构部分内容

#### 3. lonely 独立开发者的软件管理工具 支付无需签约

地址:[Lonely](https://carlajs.deskbtm.com/more/lonely-mgmt/start)。

此软件主要为以上的个人的内购应用业务服务, 涉及到 Nestjs Typeorm Pm2 Redis React Vite

#### 3. 其他

1.  [win-win-api](https://github.com/sewerganger/win-win-api) 使用 FFI 实现的 Js 对 win32 api 的绑定
2.  [android-adb-wlan](https://github.com/sewerganger/android-adb-wlan) vscode 插件, 安卓无线调试, 支持多台设备
3.  [liver3rd](https://github.com/sewerganger/liver3rd) 是使用 Flutter 开发的第三方米游社

### 教育经历

双非本科， 2021 届毕业生

### 技能/证书及其他

1. 技能 英语(CET-6)，UI 设计，logo 绘制，目前所有的 UI 和 logo 都是亲自设计。
2. 奖项：安徽大数据三等级，ican 物联网三等奖

### 联系方式

| 微信                                         | 邮箱                    | 手机        |
| -------------------------------------------- | ----------------------- | ----------- |
| <img src="/img/wechat_qr.jpg" width="200" /> | wanghan9423@outlook.com | 15398207602 |
