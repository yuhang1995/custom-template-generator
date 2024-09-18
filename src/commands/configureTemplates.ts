import * as vscode from 'vscode';

export async function configureTemplates() {
    const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
    if (!workspaceFolder) {
        vscode.window.showErrorMessage('请在工作区文件夹中使用此命令');
        return;
    }

    await vscode.commands.executeCommand('workbench.action.openSettings', 'customTemplateGenerator.templates');

    vscode.window.showInformationMessage(
        '请在设置中配置 "customTemplateGenerator.templates"。' +
        '配置应该是一个数组，每个元素包含 name 和 files 属性。'
    );
}