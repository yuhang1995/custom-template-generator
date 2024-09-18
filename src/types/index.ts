export interface TemplateFile {
    name: string;
    content: string;
}

export interface Template {
    name: string;
    files: TemplateFile[];
}