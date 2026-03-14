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

- [x] 迁移到 folder v3，移除日志
- [x] 为 push 添加 explain 模式
- [x] 添加迁移交换律检查（PostgreSQL，MySQL）
- [ ] 添加迁移交换律检查（SQLite，MSSQL，CockroachDB，SingleStore）
- [x] 支持 `generated` 列 [beta 分支]
- [x] MySQL 的 `.$returningIds()`
- [x] PostgreSQL `decimals` 支持 `mode: number` 和 `mode: bigint`
- [x] 使用 `(t) => ` 回调声明表以可选地省略列类型导入
- [x] 表声明中的列支持可选数据库别名 -> `id: serial()`
- [x] 支持 PostgreSQL RLS
- [x] 关系查询 V2 API
- [x] 使用 `drizzle('pg', ...)` 驱动实例化，降低入门学习曲线
- [x] 支持 CockroachDB（支持严格 SQL 迁移）
- [x] 原生数据填充
- [x] 修复了多个问题：[#2575](https://github.com/drizzle-team/drizzle-orm/issues/2575), [#2572](https://github.com/drizzle-team/drizzle-orm/issues/2572), [#2571](https://github.com/drizzle-team/drizzle-orm/issues/2571),
[#2568](https://github.com/drizzle-team/drizzle-orm/issues/2568), [#2559](https://github.com/drizzle-team/drizzle-orm/issues/2559), [#2555](https://github.com/drizzle-team/drizzle-orm/issues/2555), [#2530](https://github.com/drizzle-team/drizzle-orm/issues/2530), [#2514](https://github.com/drizzle-team/drizzle-orm/issues/2514), [#2510](https://github.com/drizzle-team/drizzle-orm/issues/2510), [#2506](https://github.com/drizzle-team/drizzle-orm/issues/2506), [#2496](https://github.com/drizzle-team/drizzle-orm/issues/2496), [#2486](https://github.com/drizzle-team/drizzle-orm/issues/2486), [#2484](https://github.com/drizzle-team/drizzle-orm/issues/2484), [#2474](https://github.com/drizzle-team/drizzle-orm/issues/2474), [#2472](https://github.com/drizzle-team/drizzle-orm/issues/2472), [#2458](https://github.com/drizzle-team/drizzle-orm/issues/2458), [#2455](https://github.com/drizzle-team/drizzle-orm/issues/2455), 新增 `drizzle-kit migrate/push --inspect` [#2488](https://github.com/drizzle-team/drizzle-orm/issues/2448), [#2432](https://github.com/drizzle-team/drizzle-orm/issues/2432), [#2430](https://github.com/drizzle-team/drizzle-orm/issues/2430), [#2426](https://github.com/drizzle-team/drizzle-orm/issues/2426), [#2424](https://github.com/drizzle-team/drizzle-orm/issues/2424), [#2418](https://github.com/drizzle-team/drizzle-orm/issues/2418), [#2414](https://github.com/drizzle-team/drizzle-orm/issues/2414), [#2401](https://github.com/drizzle-team/drizzle-orm/issues/2401), [#2396](https://github.com/drizzle-team/drizzle-orm/issues/2396), [#2395](https://github.com/drizzle-team/drizzle-orm/issues/2395), [#2394](https://github.com/drizzle-team/drizzle-orm/issues/2394), [#2390](https://github.com/drizzle-team/drizzle-orm/issues/2390), [#2389](https://github.com/drizzle-team/drizzle-orm/issues/2389), [#2388](https://github.com/drizzle-team/drizzle-orm/issues/2388), [#2387](https://github.com/drizzle-team/drizzle-orm/issues/2387), [#2384](https://github.com/drizzle-team/drizzle-orm/issues/2384), [#1210](https://github.com/drizzle-team/drizzle-orm/issues/1210), [#1157](https://github.com/drizzle-team/drizzle-orm/issues/1157), [#1113](https://github.com/drizzle-team/drizzle-orm/issues/1113), [#1020](https://github.com/drizzle-team/drizzle-orm/issues/1020), [#1003](https://github.com/drizzle-team/drizzle-orm/issues/1003), [#998](https://github.com/drizzle-team/drizzle-orm/issues/998), [#830](https://github.com/drizzle-team/drizzle-orm/issues/830), [#724](https://github.com/drizzle-team/drizzle-orm/issues/724), [#2254](https://github.com/drizzle-team/drizzle-orm/issues/2254), [#2239](https://github.com/drizzle-team/drizzle-orm/issues/2239), [#2236](https://github.com/drizzle-team/drizzle-orm/issues/2236), [#2224](https://github.com/drizzle-team/drizzle-orm/issues/2224), [#2216](https://github.com/drizzle-team/drizzle-orm/issues/2216), [#2198](https://github.com/drizzle-team/drizzle-orm/issues/2198), [#2189](https://github.com/drizzle-team/drizzle-orm/issues/2189), [#2183](https://github.com/drizzle-team/drizzle-orm/issues/2183), [#2174](https://github.com/drizzle-team/drizzle-orm/issues/2174), [#2169](https://github.com/drizzle-team/drizzle-orm/issues/2169), [#2157](https://github.com/drizzle-team/drizzle-orm/issues/2157), [#2151](https://github.com/drizzle-team/drizzle-orm/issues/2151), [#2146](https://github.com/drizzle-team/drizzle-orm/issues/2146), [#2136](https://github.com/drizzle-team/drizzle-orm/issues/2136), [#2122](https://github.com/drizzle-team/drizzle-orm/issues/2122), [#2085](https://github.com/drizzle-team/drizzle-orm/issues/2085), [#2067](https://github.com/drizzle-team/drizzle-orm/issues/2067), [#2047](https://github.com/drizzle-team/drizzle-orm/issues/2047), [#2015](https://github.com/drizzle-team/drizzle-orm/issues/2015), [#1928](https://github.com/drizzle-team/drizzle-orm/issues/1928), [#1835](https://github.com/drizzle-team/drizzle-orm/issues/1835), [#1804](https://github.com/drizzle-team/drizzle-orm/issues/1804), [#1765](https://github.com/drizzle-team/drizzle-orm/issues/1765), [#1748](https://github.com/drizzle-team/drizzle-orm/issues/1748), [#1744](https://github.com/drizzle-team/drizzle-orm/issues/1744), [#1625](https://github.com/drizzle-team/drizzle-orm/issues/1625), [#1428](https://github.com/drizzle-team/drizzle-orm/issues/1428), [#1402](https://github.com/drizzle-team/drizzle-orm/issues/1402), [#1315](https://github.com/drizzle-team/drizzle-orm/issues/1315), [#1313](https://github.com/drizzle-team/drizzle-orm/issues/1313), [#1294](https://github.com/drizzle-team/drizzle-orm/issues/1294), [#1272](https://github.com/drizzle-team/drizzle-orm/issues/1272), [#1269](https://github.com/drizzle-team/drizzle-orm/issues/1269), [#1225](https://github.com/drizzle-team/drizzle-orm/issues/1225), [#2378](https://github.com/drizzle-team/drizzle-orm/issues/2378), [#2343](https://github.com/drizzle-team/drizzle-orm/issues/2343), [#2322](https://github.com/drizzle-team/drizzle-orm/issues/2322), [#2315](https://github.com/drizzle-team/drizzle-orm/issues/2315), [#2282](https://github.com/drizzle-team/drizzle-orm/issues/2282), [#2279](https://github.com/drizzle-team/drizzle-orm/issues/2279)
- [x] 支持 MSSQL
- [ ] 🎉 V1 正式发布流 🎉
- [ ] 下游迁移、更佳的回滚以及 Drizzle Kit 中 `migrate` 体验改进
- [ ] 支持嵌入式 `.env` 的 `NODE_ENV`
- [ ] 支持 MariaDB
