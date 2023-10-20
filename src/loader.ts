function isProd(): boolean {
    const mode = getQueryString('mode');
    if (!!mode) {
        if (mode === 'prod') { return true; }
        if (mode === 'dev') { return false; }
    }
    return ['127.0.0.1', 'localhost'].indexOf(location.hostname) === -1;
}

function getQueryString(key: string): string | null {
    const query = new URLSearchParams(location.search);
    return query.get(key);
}

async function loadScripts(scripts: Array<ImportMapProps | ScriptProps>): Promise<void> { // eslint-disable-line max-len
    for (const script of scripts) {
        await loadScript(script);
    }
}

function loadScript({ src, type }: ImportMapProps | ScriptProps): Promise<void> { // eslint-disable-line max-len
    if (type === 'importmap') {
        return loadImportmap(src);
    }
    return new Promise((resolve, reject) => {
        const el = document.createElement('script');
        type = type || 'text/javascript';
        el.setAttribute('type', type);
        el.setAttribute('src', src);
        if (type === 'text/javascript' || type === 'module') {
            el.onload = () => resolve();
            el.onerror = ex => reject(ex);
        }
        else {
            resolve();
        }
        document.body.appendChild(el);
    });
}

async function loadImportmap(url: string | string[]): Promise<void> {
    if (Array.isArray(url)) {
        const importMap: ImportMap = { imports: {} };
        for (const u of url) {
            const res = await fetch(u);
            const json = await res.json() as ImportMap;
            Object.assign(importMap.imports, json.imports);
        }
        createImportMapElement(importMap)
    }
    else {
        const res = await fetch(url);
        const importMap = await res.json() as ImportMap;
        createImportMapElement(importMap);
    }
}

function createImportMapElement(importMap: ImportMap): void {
    const el = document.createElement('script');
    el.type = 'importmap';
    el.textContent = JSON.stringify(importMap);
    document.body.appendChild(el);
}

interface ImportMapProps {
    type: 'importmap',
    src: string | string[];
}

interface ScriptProps {
    type: 'text/javascript' | 'module' | undefined;
    src: string;
}

interface ImportMap {
    imports: {
        [key: string]: string;
    }
}

async function loadStyles(styles: string[]): Promise<void> {
    for (const style of styles) {
        await loadStyle(style);
    }
}

function loadStyle(href: string): Promise<void> {
    if (document.head.querySelector(`link[href="${href}"]`)) {
        return Promise.resolve();
    }
    return new Promise((resolve, reject) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);

        link.onload = () => resolve();
        link.onerror = ex => reject(ex);
    });
}

interface StyleProps {
    id: string;
    href: string;
}
