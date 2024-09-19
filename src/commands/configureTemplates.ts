import * as vscode from 'vscode';

export async function configureTemplates() {
    await vscode.commands.executeCommand('workbench.action.openSettings', 'customTemplateGenerator.templates');

    vscode.window.showInformationMessage(
        '请在设置中配置 "customTemplateGenerator.templates"。' +
        '配置应该是一个数组，每个元素包含 name 和 files 属性。'
    );
}