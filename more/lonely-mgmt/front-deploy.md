---
id: front-deploy
title: 前端部署
sidebar_position: 4
---

管理台仓库: [https://github.com/sewerganger/lonely-mgmt-dashboard](https://github.com/sewerganger/lonely-mgmt-dashboard)

### 配置 {#配置} {#配置-配置} {#配置-配置-配置-配置} {#配置-配置-配置-配置-配置-配置-配置-配置}

- .env.xxxx 配置

```bash title=".env.production"
VITE_API=后端API地址

WEBSITE_URL=管理台地址(选填)
```

- 部署

lonely 的前端管理台托管在 `github gitee coding`等类似服务, 当然你也可以把`dist`部署到自己的服务器

:::warning
只支持 https 证书请自行配置
:::

```javascript title="scripts/deploy-production"
async function publish() {
  ghpages.publish(
    "dist",
    {
      branch: "master",
      repo: "xxxxxxxxxxxx", // 仓库地址
      message: "Auto-generated commit",
      user: {
        name: "xxxxxxxxxxxx", //git用户名
        email: "xxxxxxxxxxxx", //git邮箱
      },
    },
    (err) => {
      if (err) {
        throw err;
      }
    }
  );
}
```

```bash title="部署"
npm run deploy:production
```
