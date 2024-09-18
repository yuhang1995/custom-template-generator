import * as vscode from 'vscode';
import * as fs from 'fs/promises';
import * as path from 'path';
import { log } from '../utils/logger';
import { Template } from '../types';

export async function createStructure(uri: vscode.Uri) {
    if (!uri) {
        if (vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders.length > 0) {
            uri = vscode.workspace.workspaceFolders[0].uri;
        } else {
            vscode.window.showErrorMessage('没有打开的工作区');
            return;
        }
    }

    const workspaceFolder = vscode.workspace.getWorkspaceFolder(uri);
    if (!workspaceFolder) {
        vscode.window.showErrorMessage('请在工作区文件夹中使用此命令');
        return;
    }

    const config = vscode.workspace.getConfiguration('customTemplateGenerator', workspaceFolder.uri);
    const templates = config.get<Template[]>('templates') || [];
    
    if (templates.length === 0) {
        const action = await vscode.window.showWarningMessage(
            '没有配置模板，请先配置模板。',
            '打开设置'
        );
        if (action === '打开设置') {
            vscode.commands.executeCommand('workbench.action.openSettings', 'customTemplateGenerator.templates');
        }
        return;
    }

    const selectedTemplate = await vscode.window.showQuickPick(
        templates.map(t => ({ label: t.name, template: t })),
        { placeHolder: '选择要使用的模板' }
    );

    if (!selectedTemplate) return;

    const folderName = await vscode.window.showInputBox({ prompt: '输入文件夹名称' });
    if (!folderName) return;

    const basePath = path.join(uri.fsPath, folderName);
    await fs.mkdir(basePath, { recursive: true });

    log('开始创建文件', 'info');

    try {
        for (const file of selectedTemplate.template.files) {
            log(`正在处理文件 ${file.name}`, 'info');
            let fileName = file.name.replace(/\{\{componentName\}\}/g, folderName);
            const filePath = path.join(basePath, fileName);
            let content = file.content.replace(/\{\{componentName\}\}/g, folderName);
            
            await fs.writeFile(filePath, content);
        }
    } catch (error: any) {
        log(`创建文件时出错: ${error.message}`, 'error');
        vscode.window.showErrorMessage(`创建文件时出错: ${error.message}`);
    }

    vscode.window.showInformationMessage(`模板 "${selectedTemplate.label}" 已创建在 ${basePath}`);
}