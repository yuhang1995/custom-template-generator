import fs from "fs/promises";
import path from "path";

import {
  layoutTemplate,
  pageTemplate,
  loadingTemplate,
  errorTemplate,
  globalErrorsTemplate,
  notFoundTemplate,
  templateFile,
  middlewareTemplate,
  routeTemplate,
  defaultFileTemplate,
} from "./nextjs-template";
import { NextjsTemplateType } from "../types";

type TemplateFunction = (name: string) => string;

const defaultTemplates: Record<NextjsTemplateType, TemplateFunction> = {
  page: pageTemplate,
  loading: loadingTemplate,
  layout: layoutTemplate,
  error: errorTemplate,
  template: templateFile,
  "global-error": globalErrorsTemplate,
  "not-found": notFoundTemplate,
  middleware: middlewareTemplate,
  route: routeTemplate,
  default: defaultFileTemplate,
};

export async function generateFile(
  type: NextjsTemplateType,
  filePath: string,
  fileTemplate: string,
  fileExtension = ".tsx",
  name: string = "",
  customType: string = ""
): Promise<boolean> {
  const fileName = `${type}${fileExtension}`;
  const pathToCreateFile = path.join(filePath, fileName);
  const templateContent = (
    fileTemplate || defaultTemplates[type || customType](name)
  ).replace(/\{\{componentName\}\}/g, name);

  try {
    await fs.mkdir(filePath, { recursive: true });
    const fileExists = await fs.access(pathToCreateFile).then(() => true).catch(() => false);
    if (fileExists) {
      return false;
    }

    await fs.writeFile(pathToCreateFile, templateContent, { encoding: "utf8" });
    return true;
  } catch (error) {
    throw new Error(
      `Error creating file: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
}