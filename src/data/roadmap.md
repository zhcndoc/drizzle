# v1 路线图

### Drizzle Kit V1
- [x] 支持 `generated` 列 [beta 分支]
- [x] 将 Brocli 集成到 Drizzle Kit
- [x] 生成的 SQL 迁移严格模式，无需 `try catch` 和 `if not exists`
- [x] Drizzle Kit 开源发布 🎉
- [x] PostgreSQL 枚举类型改进
- [x] 支持 PostgreSQL 行级安全 (RLS)
- [x] Drizzle Kit 中支持 `check` 约束
- [x] Drizzle Kit 暴露用于编程访问的 API
- [x] Drizzle Kit 支持 `materialized views` （物化视图）
- [x] Drizzle Studio 针对 Docker 环境的 `mkcert` 修复

### Drizzle ORM V1
- [x] 迁移到文件夹 v3，移除日志
- [x] 增加推送的 explain 模式
- [ ] 增加交换律迁移检查
- [x] 支持 `generated` 列 [beta 分支]
- [x] MySQL 支持 `.$returningIds()`
- [x] 支持 PostgreSQL `decimals` 的 `mode: number` 和 `mode: bigint`
- [x] 表声明中增加 `(t) =>` 回调，以可选省略列类型导入
- [x] 表声明中可选数据库别名支持 -> `id: serial()`
- [x] 支持 PostgreSQL 行级安全 (RLS)
- [x] 关系查询 V2 API
- [x] 通过 `drizzle('pg', ...)` 驱动实例化，降低学习门槛
- [x] 支持 CockroachDB（严格 SQL 迁移支持）
- [x] 原生种子数据支持
- [x] 修复多个问题：[详见原文中的 Issues 链接]
- [x] 支持 MSSQL
- [ ] 🎉 V1 正式发布 🎉
- [ ] 支持下迁移、更好的回滚及 Drizzle Kit 中 `migrate` 体验改进
- [ ] 支持 `NODE_ENV` 用于内嵌 `.env` 使用者
- [ ] 支持 MariaDB