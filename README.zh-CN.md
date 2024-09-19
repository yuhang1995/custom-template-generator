# 自定义模板生成器

<div align="center">
    <img src="https://github.com/yuhang1995/custom-template-generator/raw/HEAD/assets/logo.png" alt="Logo" width="150" />
</div>

<div align="center">
    <strong>欢迎使用 Custom Template Generator！这个插件旨在帮助您快速创建和管理项目中的文件结构，提升开发效率。</strong>
</div>

<br>

<div align="center">
    <img src="https://github.com/yuhang1995/custom-template-generator/raw/HEAD/assets/demo.gif" alt="演示" width="400" />
</div>

简体中文 | [English](README.md)

> Note: For English users, please click the link above to view the English version of the documentation.

## 简介

自定义模板生成器是一个 VS Code 扩展，旨在通过自动化创建重复性文件结构来简化您的开发过程。它对于经常需要创建具有一致文件结构的组件或模块的开发者特别有用。

内置Nextjs常见文件类型（如page、layout、template、error、not-found、route、global-error、middleware等）来加速Next.js应用程序的开发。

## 目录

- [简介](#简介)
  - [使用场景示例](#使用场景示例)
- [功能](#功能)
- [安装](#安装)
- [使用方法](#使用方法)
  - [一、使用Nextjs模板(目前仅支持App Router)](#一使用nextjs模板目前仅支持app-router)
  - [二、使用自定义模板](#二使用自定义模板)
    - [1、配置模板](#1配置模板)
    - [2、创建结构](#2创建结构)

### 使用场景示例

想象一下，您正在开发一个 React 应用，经常需要创建新的组件。每个组件通常需要：

1. 一个以组件名命名的文件夹（例如 "Avatar"）
2. 一个用于导出的 index.ts 文件
3. 一个主要的组件文件（例如 Avatar.tsx）

结构如下所示：

```
  Avatar/
  ├── index.ts
  └── Avatar.tsx
```

为每个新组件手动创建这种结构可能会很耗时。这个扩展允许您为这种结构创建一个模板，并通过几次点击就能生成它，从而节省宝贵的开发时间。

## 功能

-   快速创建自定义文件和文件夹结构
-   配置和管理可重用的模板
-   内置Nextjs模板（未来会支持更多框架）
-   支持文件名和内容中的占位符

## 安装

1. 打开 VS Code
2. 转到扩展视图 (Ctrl+Shift+X 或 Cmd+Shift+X)
3. 搜索 "custom-template-generator"
4. 点击 "安装" 按钮

## 使用方法

### 一、使用Nextjs模板(目前仅支持App Router) 

#### 1、使用演示

<div align="center">
    <img src="https://github.com/yuhang1995/custom-template-generator/raw/HEAD/assets/nextjs-demo.svg" alt="Logo" width="150" />
</div>

<br>

> 子菜单说明：
> 
> - `App Router`：创建一个Nextjs页面，可自定义需要的文件，默认创建Page、Layout、Loading、Error
> - `Custom Structure`：在已有文件夹中快速添加想要的文件，可选文件有：Page、Layout、Loading、Error、NotFound、Middleware、Global Error、Route
> - `Page`：创建一个page.tsx文件
> - `Loading`：创建一个loading.tsx文件
> - `Layout`：创建一个layout.tsx文件
> - `Template`：创建一个template.tsx文件
> - `Error`：创建一个error.tsx文件
> - `Not Found`：创建一个not-found.tsx文件
> - `Middleware`：创建一个middleware.ts文件
> - `Global Error`：创建一个global-error.tsx文件
> - `Route`：创建一个route.ts文件
> - `Default`：创建一个default.tsx文件


#### 2、自定义模板

1. 打开 VS Code
2. 转到扩展视图 (Ctrl+Shift+X 或 Cmd+Shift+X)
3. 搜索 "custom-template-generator"
4. 点击 "安装" 按钮


### 二、使用自定义模板

#### 1、配置模板

1. 打开命令面板 (Ctrl+Shift+P 或 Cmd+Shift+P)
2. 输入 "Configure Custom Templates" 并选择该命令
3. 在打开的设置页面中，配置 `customTemplateGenerator.templates` 设置
4. 添加您的模板，每个模板应包含 `name` 和 `files` 属性

##### 示例

```json
"customTemplateGenerator.templates": [
    {
        "name": "React Component",
        "files": [
            {
                "name": "index.ts",
                "content": "export * from './{{componentName}}'",
            },
            {
                "name": "{{componentName}}.tsx",
                "content": "export function {{componentName}}() { return <div /> }"
            }
        ]
    }
]
```

#### 2、创建结构

1. 在工作区文件夹中右键打开菜单
2. 点击 `Create Custom Structure`
3. 选择您想要的模板
4. 输入组件名称，然后按 `Enter` 确认
