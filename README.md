# Custom Template Generator

<div align="center">
    <img src="https://github.com/yuhang1995/custom-template-generator/raw/HEAD/assets/logo.png" alt="Logo" width="150" />
</div>

<div align="center">
    <strong>Welcome to the Custom Template Generator! This extension helps you quickly create and manage file structures in your projects, enhancing your development efficiency.</strong>
</div>

<br>

<div align="center">
    <img src="https://github.com/yuhang1995/custom-template-generator/raw/HEAD/assets/demo.gif" alt="Demo" width="400" />
</div>

[简体中文](README.zh-CN.md) | English

> 注：中文用户可以点击上方链接查看中文版本的文档。

## Introduction

Custom Template Generator is a VS Code extension designed to streamline your development process by automating the creation of repetitive file structures. It's particularly useful for developers who frequently create components or modules with a consistent file structure.

It includes common Next.js file types (such as page, layout, template, error, not-found, route, global-error, middleware, etc.) to accelerate Next.js application development.

## Table of Contents

- [Introduction](#introduction)
  - [Use Case Example](#use-case-example)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [1. Using Next.js Templates (Currently only supports App Router)](#1-using-nextjs-templates-currently-only-supports-app-router)
  - [2. Using Custom Templates](#2-using-custom-templates)
    - [1. Configuring Templates](#1-configuring-templates)
    - [2. Creating Structure](#2-creating-structure)

### Use Case Example

Imagine you're developing a React application and often need to create new components. Each component typically requires:

1. A folder with the component name (e.g., "Avatar")
2. An index.ts file for exporting
3. A main component file (e.g., Avatar.tsx)

The structure would look like this:

```
Avatar/
├── index.ts
└── Avatar.tsx
```

Manually creating this structure for each new component can be time-consuming. This extension allows you to create a template for this structure and generate it with just a few clicks, saving valuable development time.

## Features

- Quickly create custom file and folder structures
- Configure and manage reusable templates
- Built-in Next.js templates (more frameworks will be supported in the future)
- Support for placeholders in file names and contents

## Installation

1. Open VS Code
2. Go to the Extensions view (Ctrl+Shift+X or Cmd+Shift+X)
3. Search for "Custom Template Generator"
4. Click the "Install" button

## Usage

### 1. Using Next.js Templates (Currently only supports App Router)

#### 1. Demo

<div align="center">
    <img src="https://github.com/yuhang1995/custom-template-generator/raw/HEAD/assets/nextjs-demo.svg" alt="Logo" width="150" />
</div>

<br>

> Submenu Explanation:
> 
> - `App Router`: Create a Next.js page with customizable files, default creates Page, Layout, Loading, Error
> - `Custom Structure`: Quickly add desired files in an existing folder, optional files include: Page, Layout, Loading, Error, NotFound, Middleware, Global Error, Route
> - `Page`: Create a page.tsx file
> - `Loading`: Create a loading.tsx file
> - `Layout`: Create a layout.tsx file
> - `Template`: Create a template.tsx file
> - `Error`: Create an error.tsx file
> - `Not Found`: Create a not-found.tsx file
> - `Middleware`: Create a middleware.ts file
> - `Global Error`: Create a global-error.tsx file
> - `Route`: Create a route.ts file
> - `Default`: Create a default.tsx file

#### 2. Using Custom Templates

1. Open VS Code
2. Go to the Extensions view (Ctrl+Shift+X or Cmd+Shift+X)
3. Search for "Custom Template Generator"
4. Click the "Install" button

### 2. Using Custom Templates

#### 1. Configuring Templates

1. Open the command palette (Ctrl+Shift+P or Cmd+Shift+P)
2. Type "Configure Custom Templates" and select the command
3. In the opened settings page, configure the `customTemplateGenerator.templates` setting
4. Add your templates, each template should have `name` and `files` properties

##### Example

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

#### 2. Creating Structure

1. Right-click in the folder to open the context menu
2. Click `Create Custom Structure`
3. In the opened settings page, select the template you want
4. Enter the component name and press `Enter` to confirm