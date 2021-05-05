## 准备

文档使用 docusaurus2
[https://docusaurus.io/](https://docusaurus.io/)

## 部署前

```bash
npm run build

npm run serve 部署前测试
```

## 部署

修改`scripts/deploy.js`

```js
user: {
  name: "xxxx",
  email: "xxxx",
},
```

```bash
npm run deploy 部署重新build
```
