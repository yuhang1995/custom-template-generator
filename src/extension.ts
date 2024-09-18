import * as vscode from 'vscode';
import { log } from './utils/logger';
import { createStructure } from './commands/createStructure';
import { configureTemplates } from './commands/configureTemplates';

export function activate(context: vscode.ExtensionContext) {
    log('自定义模板生成器已激活');

    let createStructureCommand = vscode.commands.registerCommand('customTemplateGenerator.createStructure', createStructure);
    let configureTemplatesCommand = vscode.commands.registerCommand('customTemplateGenerator.configureTemplates', configureTemplates);

    context.subscriptions.push(createStructureCommand, configureTemplatesCommand);
}

export function deactivate() {
    log('自定义模板生成器已停用');
}