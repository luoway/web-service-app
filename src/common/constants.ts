interface MIMEs {
    [propName: string]: string
}
export const staticAssetsMIME: MIMEs = {
    txt: 'text/plain;charset=utf-8',
    html: 'text/html;charset=utf-8',
    css: 'text/css;charset=utf-8',
    js: 'text/javascript;charset=utf-8',
    json: 'application/json;charset=utf-8',
}

export const staticAssetsExtname = Object.keys(staticAssetsMIME)
