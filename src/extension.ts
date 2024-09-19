import * as vscode from "vscode";
import { log } from "./utils/logger";
import { createCustomStructure } from "./commands/createCustomStructure";
import { configureTemplates } from "./commands/configureTemplates";
import * as nextjsStructure from "./commands/createNextStructure";

export function activate(context: vscode.ExtensionContext) {
    log("自定义模板生成器已激活");

    let createStructureCommand = vscode.commands.registerCommand(
        "customTemplateGenerator.createCustomStructure",
        createCustomStructure
    );
    let configureTemplatesCommand = vscode.commands.registerCommand(
        "customTemplateGenerator.configureCustomTemplates",
        configureTemplates
    );

    let openNextjsTemplateConfigCommand = vscode.commands.registerCommand(
        "customTemplateGenerator.configureNextjsTemplates",
        () => {
            vscode.commands.executeCommand('workbench.action.openSettings', 'customTemplateGenerator.nextjsTemplates');
        }
    );

    context.subscriptions.push(
        createStructureCommand,
        configureTemplatesCommand,
        openNextjsTemplateConfigCommand,
        ...Object.values(nextjsStructure)
    );
}

export function deactivate() {
    log("自定义模板生成器已停用");
}
