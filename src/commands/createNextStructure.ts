import * as path from 'path';
import * as vscode from 'vscode';
import { generateFile } from '../utils/generatorNextStructure';
import { NextjsTemplates, NextjsTemplateType } from '../types';

function getNextjsTemplateConfigurations(uri: vscode.Uri, fileName: NextjsTemplateType): { template: string, fileExtension: string } {
    const workspaceFolder = vscode.workspace.getWorkspaceFolder(uri);

    if (!workspaceFolder) {
        vscode.window.showErrorMessage('请在工作区文件夹中使用此命令');
        return { template: '', fileExtension: '' };
    }

    const config = vscode.workspace.getConfiguration("customTemplateGenerator", workspaceFolder.uri);
    const templates = config.get<NextjsTemplates>('nextjsTemplates');
    const fileExtension = config.get<string>('nextjsTemplateExtension');

    return { template: templates ? templates[fileName] : '', fileExtension: fileExtension ?? '.tsx' };
}

export const generateAll = vscode.commands.registerCommand(
    "customTemplateGenerator.createNextStructure",
    async (uri: vscode.Uri) => {
        let targetPath;
        if (!uri) {
            vscode.window.showErrorMessage('没有打开的工作区');
            return;
        }

        const folderName = await vscode.window.showInputBox({
            placeHolder: "请输入文件夹名称",
        });

        if (folderName) {
            targetPath = path.join(uri.fsPath, folderName);
        } else {
            targetPath = uri.fsPath;
        }

        const fileOptions = [
            { label: "page",picked:true },
            { label: "loading",picked:true },
            { label: "layout",picked:true },
            { label: "error",picked:true },
            { label: "not-found" },
            { label: "template" },
            { label: "default" }
        ];

        const selectedFiles = await vscode.window.showQuickPick(fileOptions, {
            canPickMany: true,
            placeHolder: "请选择需要生成的文件",
        });

        if (!selectedFiles) {
            vscode.window.showInformationMessage("没有选择文件");
            return;
        }

        selectedFiles.forEach((file) => {
            const { fileExtension, template } = getNextjsTemplateConfigurations(uri, file.label as NextjsTemplateType);
            generateFile(
                file.label as NextjsTemplateType,
                targetPath,
                template,
                fileExtension
            ).catch((error) => {
                vscode.window.showErrorMessage(`文件创建失败: ${error}`);
            });
        });

        // const layout = getNextjsTemplateConfigurations(uri, "layout");
        // const page = getNextjsTemplateConfigurations(uri, "page");
        // const loading = getNextjsTemplateConfigurations(uri, "loading");
        // const error = getNextjsTemplateConfigurations(uri, "error");
        // const notFound = getNextjsTemplateConfigurations(uri, "not-found");

        // generateFile("layout", targetPath, layout.template, layout.fileExtension);
        // generateFile("page", targetPath, page.template, page.fileExtension);
        // generateFile("loading", targetPath, loading.template, loading.fileExtension);
        // generateFile("error", targetPath, error.template, error.fileExtension);
        // generateFile("not-found", targetPath, notFound.template, notFound.fileExtension);
    }
);

export const generateSelected = vscode.commands.registerCommand(
    "customTemplateGenerator.createNextStructureSelector",
    async (uri: vscode.Uri) => {

        if (!uri) {
            vscode.window.showErrorMessage('没有打开的工作区');
            return;
        }

        const fileOptions = [
            { label: "page" },
            { label: "loading" },
            { label: "layout" },
            { label: "template" },
            { label: "default" },
            { label: "error" },
            { label: "not-found" },
            { label: "global-error" },
            { label: "middleware" },
            { label: "route" },
        ];

        const selectedFiles = await vscode.window.showQuickPick(fileOptions, {
            canPickMany: true,
            placeHolder: "请选择需要生成的文件",
        });

        if (!selectedFiles) {
            vscode.window.showInformationMessage("没有选择文件");
            return;
        }

        selectedFiles.forEach((file) => {
            const { fileExtension, template } = getNextjsTemplateConfigurations(uri, file.label as NextjsTemplateType);
            generateFile(
                file.label as NextjsTemplateType,
                uri.fsPath,
                template,
                fileExtension
            ).catch((error) => {
                vscode.window.showErrorMessage(`文件创建失败: ${error}`);
            });
        });
    }
);

export const generatePage = vscode.commands.registerCommand(
    "customTemplateGenerator.createNextStructurePage",
    async (uri: vscode.Uri) => {

        if (!uri) {
            vscode.window.showErrorMessage('没有打开的工作区');
            return;
        }

        const type = "page";
        const { fileExtension, template } = getNextjsTemplateConfigurations(uri, type);

        generateFile(type, uri.fsPath, template, fileExtension)
            .then((fileCreated) => {
                if (fileCreated) {
                    vscode.window.showInformationMessage(
                        "文件创建成功!"
                    );
                } else {
                    vscode.window.showErrorMessage(`文件已经存在`);
                }
            })
            .catch((error) => {
                vscode.window.showErrorMessage(`文件创建失败: ${error}`);
            });
    }
);

export const generateLoading = vscode.commands.registerCommand(
    "customTemplateGenerator.createNextStructureLoading",
    async (uri: vscode.Uri) => {

        if (!uri) {
            vscode.window.showErrorMessage('没有打开的工作区');
            return;
        }

        const type = "loading";
        const { fileExtension, template } = getNextjsTemplateConfigurations(uri, type);

        generateFile(type, uri.fsPath, template, fileExtension)
            .then((fileCreated) => {
                if (fileCreated) {
                    vscode.window.showInformationMessage(
                        "文件创建成功!"
                    );
                } else {
                    vscode.window.showErrorMessage(`文件已经存在`);
                }
            })
            .catch((error) => {
                vscode.window.showErrorMessage(`文件创建失败: ${error}`);
            });
    }
);

export const generateLayout = vscode.commands.registerCommand(
    "customTemplateGenerator.createNextStructureLayout",
    async (uri: vscode.Uri) => {

        if (!uri) {
            vscode.window.showErrorMessage('没有打开的工作区');
            return;
        }

        const type = "layout";
        const { fileExtension, template } = getNextjsTemplateConfigurations(uri, type);

        generateFile(type, uri.fsPath, template, fileExtension)
            .then((fileCreated) => {
                if (fileCreated) {
                    vscode.window.showInformationMessage(
                        "文件创建成功!"
                    );
                } else {
                    vscode.window.showErrorMessage(`文件已经存在`);
                }
            })
            .catch((error) => {
                vscode.window.showErrorMessage(`文件创建失败: ${error}`);
            });
    }
);

export const generateTemplate = vscode.commands.registerCommand(
    "customTemplateGenerator.createNextStructureTemplate",
    async (uri: vscode.Uri) => {

        if (!uri) {
            vscode.window.showErrorMessage('没有打开的工作区');
            return;
        }

        const type = "template";
        const { fileExtension, template } = getNextjsTemplateConfigurations(uri, type);

        generateFile(type, uri.fsPath, template, fileExtension)
            .then((fileCreated) => {
                if (fileCreated) {
                    vscode.window.showInformationMessage(
                        "文件创建成功!"
                    );
                } else {
                    vscode.window.showErrorMessage(`文件已经存在`);
                }
            })
            .catch((error) => {
                vscode.window.showErrorMessage(`文件创建失败: ${error}`);
            });
    }
);

export const generateError = vscode.commands.registerCommand(
    "customTemplateGenerator.createNextStructureError",
    async (uri: vscode.Uri) => {

        if (!uri) {
            vscode.window.showErrorMessage('没有打开的工作区');
            return;
        }


        const type = "error";
        const { fileExtension, template } = getNextjsTemplateConfigurations(uri, type);

        generateFile(type, uri.fsPath, template, fileExtension)
            .then((fileCreated) => {
                if (fileCreated) {
                    vscode.window.showInformationMessage(
                        "文件创建成功!"
                    );
                } else {
                    vscode.window.showErrorMessage(`文件已经存在`);
                }
            })
            .catch((error) => {
                    vscode.window.showErrorMessage(`文件创建失败: ${error}`);
            });
    }
);

export const generateNotFound = vscode.commands.registerCommand(
    "customTemplateGenerator.createNextStructureNotFound",
    async (uri: vscode.Uri) => {

        if (!uri) {
            vscode.window.showErrorMessage('没有打开的工作区');
            return;
        }


        const type = "not-found";
        const { fileExtension, template } = getNextjsTemplateConfigurations(uri, type);

        generateFile(type, uri.fsPath, template, fileExtension)
            .then((fileCreated) => {
                if (fileCreated) {
                    vscode.window.showInformationMessage(
                        "文件创建成功!"
                    );
                } else {
                    vscode.window.showErrorMessage(`文件已经存在`);
                }
            })
            .catch((error) => {
                vscode.window.showErrorMessage(`文件创建失败: ${error}`);
            });
    }
);

export const generateMiddleware = vscode.commands.registerCommand(
    "customTemplateGenerator.createNextStructureMiddleware",
    async (uri: vscode.Uri) => {

        if (!uri) {
            vscode.window.showErrorMessage('没有打开的工作区');
            return;
        }


        const type = "middleware";
        const { fileExtension, template } = getNextjsTemplateConfigurations(uri, type);

        // 此处检查配置的拓展名，如果是tsx和ts则此处为ts,反之为js
        const finalExtension = ['ts', 'tsx'].includes(fileExtension) ? 'ts' : 'js';

        generateFile(type, uri.fsPath, template, finalExtension)
            .then((fileCreated) => {
                if (fileCreated) {
                    vscode.window.showInformationMessage(
                        "文件创建成功!"
                    );
                } else {
                    vscode.window.showErrorMessage(`文件已经存在`);
                }
            })
            .catch((error) => {
                vscode.window.showErrorMessage(`文件创建失败: ${error}`);
            });
    }
);

export const generateGlobalError = vscode.commands.registerCommand(
    "customTemplateGenerator.createNextStructureGlobalError",
    async (uri: vscode.Uri) => {

        if (!uri) {
            vscode.window.showErrorMessage('没有打开的工作区');
            return;
        }


        const type = "global-error";
        const { fileExtension, template } = getNextjsTemplateConfigurations(uri, type);

        generateFile(type, uri.fsPath, template, fileExtension)
            .then((fileCreated) => {
                if (fileCreated) {
                    vscode.window.showInformationMessage(
                        "文件创建成功!"
                    );
                } else {
                    vscode.window.showErrorMessage(`文件已经存在`);
                }
            })
            .catch((error) => {
                vscode.window.showErrorMessage(`文件创建失败: ${error}`);
            });
    }
);

export const generateRoute = vscode.commands.registerCommand(
    "customTemplateGenerator.createNextStructureRoute",
    async (uri: vscode.Uri) => {

        if (!uri) {
            vscode.window.showErrorMessage('没有打开的工作区');
            return;
        }


        const type = "route";
        const { fileExtension, template } = getNextjsTemplateConfigurations(uri, type);

        generateFile(type, uri.fsPath, template, fileExtension)
            .then((fileCreated) => {
                if (fileCreated) {
                    vscode.window.showInformationMessage(
                        "文件创建成功!"
                    );
                } else {
                    vscode.window.showErrorMessage(`文件已经存在`);
                }
            })
            .catch((error) => {
                vscode.window.showErrorMessage(`文件创建失败: ${error}`);
            });
    }
);

export const generateDefaultFile = vscode.commands.registerCommand(
    "customTemplateGenerator.createNextStructureDefault",
    async (uri: vscode.Uri) => {

        if (!uri) {
            vscode.window.showErrorMessage('没有打开的工作区');
            return;
        }

        const type = "default";
        const { fileExtension, template } = getNextjsTemplateConfigurations(uri, type);

        generateFile(type, uri.fsPath, template, fileExtension)
            .then((fileCreated) => {
                if (fileCreated) {
                    vscode.window.showInformationMessage(
                        "文件创建成功!"
                    );
                } else {
                    vscode.window.showErrorMessage(`文件已经存在`);
                }
            })
            .catch((error) => {
                vscode.window.showErrorMessage(`文件创建失败: ${error}`);
            });
    }
);