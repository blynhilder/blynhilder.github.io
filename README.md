# blynhilder.github.io

一个用于 GitHub Pages 部署的静态网站仓库，当前页面主题为 **Cosmic Geometry**。

## 项目概览

- 技术栈：纯 HTML + CSS + JavaScript（无构建步骤）。
- 入口文件：`index.html`。
- 部署方式：GitHub Pages（可直接托管静态资源）。

## 快速开始

### 1) 本地预览

你可以直接双击 `index.html` 打开，或使用任意静态服务器：

```bash
python3 -m http.server 8080
# 然后访问 http://localhost:8080
```

### 2) 推送到 GitHub

```bash
git add .
git commit -m "chore: update website"
git push origin <your-branch>
```

### 3) 启用 GitHub Pages

仓库设置路径：`Settings -> Pages`。
建议选择：

- Source: **Deploy from a branch**
- Branch: `main`（或你的发布分支）
- Folder: `/ (root)`

## 推荐分支模型

本仓库已补充分支规范文档：[`docs/BRANCHING.md`](docs/BRANCHING.md)

建议使用以下长期分支：

- `main`：生产可发布代码
- `develop`：日常集成分支
- `staging`：预发布验证分支

短期分支：

- `feature/<name>`：新功能开发
- `fix/<name>`：缺陷修复
- `hotfix/<name>`：线上紧急修复
- `release/<version>`：发布整理


## 新增：C++ 入门知识库 + 搜索

- 新增页面：`knowledge.html`
- 新增索引：`knowledge/index.json`
- 功能：纯前端搜索（按标题/摘要/标签/正文关键字匹配）

使用方式：

1. 进入 `knowledge.html`
2. 在搜索框输入关键词（例如：`vector`、`RAII`、`函数`）
3. 点击结果可跳转到对应知识点锚点

## 仓库规范文件

- [贡献指南](CONTRIBUTING.md)
- [行为准则](CODE_OF_CONDUCT.md)
- [安全策略](SECURITY.md)
- [变更日志](CHANGELOG.md)
- [许可证](LICENSE)

## 后续建议

- 增加 `assets/` 目录拆分图片、样式、脚本。
- 增加 CI（例如 HTML 检查、链接检查）。
- 增加 issue / PR 模板提升协作效率。
