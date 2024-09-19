export interface TemplateFile {
    name: string;
    content: string;
}

export interface Template {
    name: string;
    files: TemplateFile[];
}

export type NextjsTemplateType = 'page' | 'loading' | 'layout' | 'error' | 'template' | 'global-error' | 'not-found' | 'middleware' | 'route' | 'default';

export type NextjsTemplates = Record<NextjsTemplateType, string>;
