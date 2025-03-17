# Social Runner - 社媒维护平台

## 项目简介

Social Runner 是一个现代化的社交媒体运营维护平台，主要用于管理和监控社交媒体账号的投后管理、品牌监控和品类线索等功能。

## 技术栈

- Vue 3
- Vite
- Arco Design Vue
- Vue Router
- Less

## 功能特性

- 📊 投后管理
  - 投后笔记：记录和管理投后跟进内容
  - 投后评论：跟踪和响应投后反馈

- 👁️ 品牌监控
  - 实时监控品牌提及
  - 舆情分析

- 🔍 品类线索
  - 线索收集和管理
  - 数据分析

- ⚙️ 系统设置
  - 用户管理
  - 系统配置

## 快速开始

### 环境要求

- Node.js >= 16
- pnpm >= 8

### 安装

```bash
# 安装依赖
pnpm install
```

### 开发

```bash
# 启动开发服务器
pnpm dev
```

### 构建

```bash
# 构建生产版本
pnpm build
```

## 项目结构

```
src/
├── components/     # 公共组件
├── pages/         # 页面组件
├── router/        # 路由配置
├── styles/        # 全局样式
└── App.vue        # 根组件
```

## 开发规范

- 组件命名：使用 PascalCase
- 文件命名：使用 kebab-case
- 样式：使用 Less 预处理器，采用 BEM 命名规范
- 代码格式：使用 ESLint + Prettier

## 贡献指南

1. Fork 本仓库
2. 创建特性分支：`git checkout -b feature/xxx`
3. 提交更改：`git commit -m 'Add some feature'`
4. 推送分支：`git push origin feature/xxx`
5. 提交 Pull Request

## 许可证

[MIT License](LICENSE) 