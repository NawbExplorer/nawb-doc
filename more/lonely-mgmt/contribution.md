---
id: contribution
title: 使用&贡献
---

### 数据迁移 {#数据迁移} {#数据迁移-数据迁移} {#数据迁移-数据迁移-数据迁移-数据迁移} {#数据迁移-数据迁移-数据迁移-数据迁移-数据迁移-数据迁移-数据迁移-数据迁移}

如果生产下 sql 的结构发生改变 请仔细查阅 typeorm 文档[typeorm migrations](https://orkhan.gitbook.io/typeorm/docs/zh_cn/migrations)。 不要在 production 使用`synchronize：true`可能会导致数据丢失

lonely 每次部署`build`前都会执行 `npm run migration:generate`

手动执行 `npm run migration:run`

手动恢复 `npm run migration:revert`

### 定时备份数据库 {#定时备份数据库} {#定时备份数据库-定时备份数据库} {#定时备份数据库-定时备份数据库-定时备份数据库-定时备份数据库} {#定时备份数据库-定时备份数据库-定时备份数据库-定时备份数据库-定时备份数据库-定时备份数据库-定时备份数据库-定时备份数据库}

lonely 会在凌晨两点自动备份到`~/.mysql-bak/YYYY-MM-DD-xxxxx.sql.gz`。如果不要请在`tools.module.ts` 中注释掉 MySqlBakService
当然也可以调整备份时间 参考[task-scheduling](https://docs.nestjs.com/techniques/task-scheduling#declarative-cron-jobs)

### 注意 {#注意} {#注意-注意} {#注意-注意-注意-注意} {#注意-注意-注意-注意-注意-注意-注意-注意}

1. git pull 请默认使用 rebase 在 `.git/config` 中添加

```bash
[pull]
	rebase = true
```

2. commit 遵循[conventionalcommits](https://www.conventionalcommits.org/en/v1.0.0/)规范
3. lonely 使用了 husky 每次 commit 前都会 lint 一下
4. 推荐安装 vscode 插件 `git graph` `Visual Studio Code Commitizen Support`

如果有疑问可以联系本人 微信号`maxcalibur9423`
