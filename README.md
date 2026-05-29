# Yikai 的工作与学习笔记

一个用 Astro 构建的极简中文个人博客，适合长期记录工作复盘、学习心得与方法论沉淀。

## 特点

- 基于 Astro 静态生成，默认几乎零客户端 JavaScript
- Markdown 内容管理，写作简单
- 自带 RSS、站点地图、`robots.txt`
- 页面结构语义化，便于搜索引擎理解
- 样式轻量，移动端和桌面端都可用

## 开发

```bash
npm install
npm run dev
```

如果你已经有正式域名，建议先复制一份环境变量文件：

```bash
cp .env.example .env
```

然后把 `PUBLIC_SITE_URL` 改成你的真实域名。这个值会同时影响：

- `canonical`
- `RSS`
- `sitemap`
- `robots.txt`
- Open Graph 分享链接

## 生产构建

```bash
npm run build
npm run preview
```

## Pages CMS 后台

这个项目已经接好了 [Pages CMS](https://app.pagescms.org/)。

使用方式：

1. 打开 [app.pagescms.org](https://app.pagescms.org/)
2. 用 GitHub 登录
3. 选择这个仓库
4. Pages CMS 会自动读取根目录下的 [.pages.yml](./.pages.yml)
5. 之后你就可以直接在网页里管理 [src/content/posts](./src/content/posts) 里的 Markdown 文章

当前配置包含：

- 文章列表后台
- 关于页单文件后台
- 新建文章文件名规则：`YYYY-MM-DD-title.md`
- `title`、`description`、`pubDate`、`updatedDate`、`draft`、`featured`、`tags`
- Markdown 正文可视化编辑
- 文章图片上传到 [public/uploads/posts](./public/uploads/posts)

说明：

- `draft: true` 的文章不会出现在站点里
- `description` 会同时用于首页摘要、SEO 描述和 RSS
- Pages CMS 只负责编辑 GitHub 仓库内容，不负责部署；保存后仍然走你原来的部署流程

## 你需要优先修改的地方

1. `.env` 里的 `PUBLIC_SITE_URL`
2. [src/config/site.ts](./src/config/site.ts) 里的站点标题、作者名、描述和关键词
3. [src/content/posts](./src/content/posts) 里的示例文章
4. [src/pages/about.astro](./src/pages/about.astro) 里的自我介绍

## 当前结构

```text
src/
  components/    复用组件（Head、PostCard、TagList、首页视觉）
  config/        站点配置
  content/       Markdown 文章内容
  layouts/       全局布局
  lib/           文章与 URL 工具函数
  pages/         首页、文章页、专题页、RSS、robots
  styles/        全局样式
```
