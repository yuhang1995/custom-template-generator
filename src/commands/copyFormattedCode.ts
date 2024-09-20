import * as vscode from 'vscode';
// import { NextjsTemplates, Template } from '../types';

export const copyFormattedCodeCommand = vscode.commands.registerCommand('customTemplateGenerator.copyFormattedCode', async (uri: vscode.Uri) => {
    // 获取活动编辑器
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        return vscode.window.showInformationMessage('没有打开的编辑弹窗');
    }

    // 获取选中的文本
    const selection = editor.selection;
    const selectedText = editor.document.getText(selection);

    // 如果没有选中内容，给出提示并返回
    if (!selectedText) {
        return vscode.window.showInformationMessage('No code selected.');
    }

    // 格式化代码（这里可以进行自定义格式化处理）
    const formattedCode = formatCode(selectedText);

    // const workspaceFolder = vscode.workspace.getWorkspaceFolder(uri);
    // if (!workspaceFolder) {
    //     // 如果没有工作区，将格式化后的代码放入剪贴板
    //     await vscode.env.clipboard.writeText(formattedCode);
    //     return vscode.window.showInformationMessage("复制成功");
    // }


    await vscode.env.clipboard.writeText(formattedCode);

    const action = await vscode.window.showWarningMessage(
        '已复制',
        '去设置'
    );
    if (action === '去设置') {
        return vscode.commands.executeCommand('workbench.action.openSettings', 'customTemplateGenerator');
    }
    return;

    // const config = vscode.workspace.getConfiguration("customTemplateGenerator", workspaceFolder.uri);

    // const excludeKeys = ['has', 'get','update', 'inspect','nextjsTemplateExtension'];

    // const customTemplates = config.get<Template>('customTemplates');
    // const nextjsTemplates = config.get<NextjsTemplates>('nextjsTemplates');

    // console.log(customTemplates, nextjsTemplates);

    // const configOptions: { label: string }[] = Object.keys(config).filter(key => !excludeKeys.includes(key)).map(key => ({
    //   label: key,
    // //   description: configuration.get(key) || 'No description available'
    // }));

    // console.log(configOptions);

    // const selectedConfig = await vscode.window.showQuickPick(configOptions, {
    //     placeHolder: 'Select a configuration to save the formatted code'
    // });

    // if (!selectedConfig) {
    //     return; // 用户取消了选择
    // }

    // // 保存到选定的插件设置
    // const configuration = vscode.workspace.getConfiguration('myPlugin');
    // await configuration.update(selectedConfig.label, formattedCode, vscode.ConfigurationTarget.Global);

    // vscode.window.showInformationMessage(`Code copied and saved to ${selectedConfig.description}`);
});


function formatCode(code: string): string {
    // 实现自定义的代码格式化逻辑
    // 这里只是简单地返回代码大写
    return JSON.stringify(code);
}