export function log(message: string, type: 'info' | 'error' | 'warn' = 'info') {
    const prefix = '[自定义模板生成器]';
    switch (type) {
        case 'info':
            console.log(`${prefix} ${message}`);
            break;
        case 'error':
            console.error(`${prefix} ${message}`);
            break;
        case 'warn':
            console.warn(`${prefix} ${message}`);
            break;
    }
}