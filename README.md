# Custom Template Generator

<div align="center" style="margin: 40px 0;">
    <img src="https://github.com/yuhang1995/custom-template-generator/raw/HEAD/assets/logo.png" alt="Logo" width="150" />
</div>

<div align="center" style="margin: 20px 0;">
    <strong>Welcome to the Custom Template Generator! This extension helps you quickly create and manage file structures in your projects, enhancing your development efficiency.</strong>
</div>

<div align="center" style="margin: 40px 0;">
    <img src="https://github.com/yuhang1995/custom-template-generator/raw/HEAD/assets/demo.gif" alt="Demo" width="400" />
</div>

[简体中文](README.zh-CN.md) | English

> 注：中文用户可以点击上方链接查看中文版本的文档。

## Introduction

Custom Template Generator is a VS Code extension designed to streamline your development process by automating the creation of repetitive file structures. It's particularly useful for developers who frequently create components or modules with a consistent file structure.

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

## Features

- Quickly create custom file and folder structures
- Configure and manage reusable templates
- Support for placeholders in file names and contents

## Installation

1. Open VS Code
2. Go to the Extensions view (Ctrl+Shift+X or Cmd+Shift+X)
3. Search for "Custom Template Generator"
4. Click the "Install" button

## Usage

### Configuring Templates

1. Open the command palette (Ctrl+Shift+P or Cmd+Shift+P)
2. Type "Configure Custom Templates" and select the command
3. In the opened settings page, configure the `customTemplateGenerator.templates` setting
4. Add your templates, each template should have `name` and `files` properties

#### Example

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
        }]
```

### Creating Structure

1. Right-click in the folder to open the context menu
2. Click `Create Custom Structure`
3. In the opened settings page, select the template you want
4. Enter the component name and press `Enter` to confirm