---
id: back-deploy
title: 后端部署
sidebar_position: 2
---

### 环境准备

`nodejs` `redis` `mysql`

使用 npm 提前全局安装

```bash
npm i typeorm pm2 -g
// 安装pm2的日志切片工具(可选)
pm2 install pm2-logrotate
```

[pm2-logrotate 使用方法](https://github.com/keymetrics/pm2-logrotate) 根据情况自行设置

:::warning 注意
如果本地 pm2 deploy 出现 not found xxx 记得 link node, npm, pm2

```bash
ln -s xxx/xxx/node /usr/bin/node
```

:::

```bash npm2yarn
git clone https://github.com/sewerganger/lonely-mgmt
cd lonely-manager
npm install
```

### 开通支付宝当面付

**注意:** 如果没有营业执照 当面付会按 0.6%收取服务费率

1.  到支付宝开放平台申请当面付 [https://openhome.alipay.com/platform/](https://openhome.alipay.com/platform/) 可以不用提供营业执照 (门店随便找张图就行了) 有一定概率不通过
2.  添加应用 很好用弄就不赘述了， 添加密钥看文档[https://opendocs.alipay.com/open/291/105971#LDsXr](https://opendocs.alipay.com/open/291/105971#LDsXr)
3.  设置好授权回调地址 等等...

---

把支付宝生成的 public key 放到 `key/alipay_public.pem`

把支付宝开放平台助手生成的私钥放到 `key/alipay_app_private.pem`(使用 rsa2)

注意密钥规范

---

### 接口

用 postman 打开`app-shop（doc）.postman_collection.json`文件
接口中有(admin) 的为管理台
有(client)的为客户端接口
(both)为二者共用接口
有(doc)的为有注释的，点击左上角文本图标按钮

postman 中 authorization 有值的就是要带上 token

登录注册接口中 auth 字段为 token 请求时 header 中加上`Authorization: Bearer + token`

### 配置

:::caution 注意

1. nginx-conf 中有代理配置
2. lonely 只支持 https
3. lonely 只提供 development production 两种环境

:::

- 将 https 的公钥和证书放到 key 中 ,并在 `.env.production` 中 添加 `HTTPS_KEY=文件名` `HTTPS_CERT=文件名`

- PM2 部署配置 [PM2 部署文档](https://pm2.keymetrics.io/docs/usage/deployment/)

```javascript title="ecosystem.config.js"
module.exports = {
  deploy: {
    production: {
      key: "xxxxxxxxxxxxxxxxxx", //本地ssh私钥位置
      user: "xxxxxxxxxxxxxxxxxx", //服务器用户名
      host: ["xxxxxxxxxxxxxxxxxx"], //服务器地址
      ref: "xxxxxxxxxxxxxxxxxx", //git主机 e.g origin/master
      repo: "xxxxxxxxxxxxxxxxxx", //仓库地址 使用ssh 不要用 https
      ssh_options: "StrictHostKeyChecking=no",
      path: "xxxxxxxxxxxxxxxxxx", //项目部署路径
      "post-setup": "ls -al",
      "post-deploy":
        "npm install && npm run migration:generate && npm run build && pm2 startOrReload ecosystem.config.js --env production",
    },
  },
};
```

- 数据库配置

手动在 mysql 里创建好对应的 database

```javascript title="ormconfig.js"

case 'production':
      return {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'xxxxxxxxxxxxxxxxxx',
        password: 'xxxxxxxxxxxxxxxxxx',
        database: 'xxxxxxxxxxxxxxxxxx',
        entities: ['dist/**/*.entity.{js,ts}'],
        synchronize: false,
        migrationsTableName: 'app_mgmt_prod_migration_table',
        migrations: ['dist/migration/*.js'],
        migrationsRun: true,
        cli: {
          migrationsDir: 'src/migration',
        },
      };

```

- .env 文件配置

```shell title=".env.xxx"
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_AUTH=redis密码
REDIS_DB=0

JWT_SECRET=jwt 密钥

NET_SPEED_LIMIT_MAX=400

PAYMENT_APPID=支付宝应用的appid

OWNER_NAME=用于登录管理台
OWNER_PASSWORD=用于登录管理台

#推荐使用163 Outlook的安全机制严格不推荐 记得前去相应邮箱开启POP3/SMTP服务
MAILER_NAME=邮箱服务用户名
MAILER_PASSWORD=邮箱服务密码
MAILER_PORT=995

HTTPS_KEY=证书公钥 xxx.key
HTTPS_CERT=证书 xxx.pem


```

### 部署

:::warning
windows 上使用 git bash 或者 cygwin
:::

初始化

```bash
npm run deploy:setup
```

:::warning
每次部署前需要 commit 或 stash
:::

更新部署

```bash
npm run deploy
```
