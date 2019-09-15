import * as http from 'http'
import * as path from 'path'

import { apiServe, assetServe } from './service'

export const Server = http.createServer((request, response) => {
    if(request.url.length < 2) request.url = '/index.html'
    const target = request.url
    const extname = path.extname(target)
    const serve = /^\.[a-zA-Z]\w*$/.test(extname) ? assetServe : apiServe
    serve(request, response, {
        cacheControl: {
            '/index.html': 'no-store',
            '/404.html': new Date('2019-10-1'),
            '/cache-control/max-age.css': 10,
            '/cache-control/public.css': 'public',
            '/cache-control/private.css': 'private',
            '/cache-control/Last-Modified.css': 'Modified',
        }
    })
})

const originalListen = Server.listen
Server.listen = function(){
    console.log('监听端口：'+arguments[0])
    return originalListen.apply(this, arguments)
}