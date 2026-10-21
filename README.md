## Drizzle ORM 中文文档

本项目由[简中文档](https://www.zhcndoc.com/)社区提供翻译和维护。

上游仓库地址：https://github.com/drizzle-team/drizzle-orm-docs

```text
├── src/
│   ├── content/
│   │   └── docs
```

公告 Markdown 文件：

```text
├── src/
│   ├──data/
│   │   └── announcements
```

路线图 Markdown 文件：

```text
├── src/
│   ├──data/
│   │   └── roadmap.md
```

发布计划 YAML 文件：

```text
├── src/
│   ├──data/
│   │   └── shipping.yaml
```

```
progress: number
weeks:
  - date:
      start: "YYYY-MM-DD"
    details:
      - string
```


## 🧞 Commands

所有命令都在终端中从项目根目录运行：

| 命令                      | 操作                                             |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | 安装依赖                                         |
| `pnpm run dev`             | 在 `localhost:4321` 启动本地开发服务器            |
| `pnpm run build`           | 将生产站点构建到 `./dist/`                       |
| `pnpm run preview`         | 部署前在本地预览构建结果                         |
| `pnpm run astro ...`       | 运行 `astro add`、`astro check` 等 CLI 命令      |
| `pnpm run astro -- --help` | 查看 Astro CLI 帮助                              |

## 📄 License

本仓库中的文档采用 [知识共享署名 4.0 国际许可协议（CC BY 4.0）](./LICENSE)授权。只要注明适当的署名，您可以在任何媒介或格式中复制、再分发和改编，包括用于商业目的。

Copyright © Drizzle Team.

### 署名与规范链接

重新分发或改编文档（例如镜像、离线文档浏览器和翻译版本）时，必须按以下方式注明出处：

1. 将 **Drizzle Team** 标注为作者，注明内容采用 CC BY 4.0 许可，并链接到[许可协议](https://creativecommons.org/licenses/by/4.0/)。
2. 每个再分发的页面都必须链接到 `https://orm.drizzle.team` 上的原始页面。例如，`src/content/docs/select.mdx` 的副本应链接到 `https://orm.drizzle.team/docs/select`。
3. 注明是否修改过内容。
4. 如果将文档作为网页重新发布，每个页面都必须将原始页面声明为规范 URL，以便搜索引擎将 `orm.drizzle.team` 识别为来源。仅添加可见链接并不足够：

```html
<link rel="canonical" href="https://orm.drizzle.team/docs/select" />
```

Drizzle 名称和徽标不受此许可协议涵盖。
