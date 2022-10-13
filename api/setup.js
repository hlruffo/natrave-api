import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import cors from '@koa/cors'
import { router } from './router.js'

export const app = new Koa()

app.use(cors({
    allowMethods:["GET","OPTIONS","PATCH","DELETE","POST","PUT"],
    origin: 'https://natrave-web-two-livid.vercel.app/', // front end origin
    credentials: true // Allow cross domain band cookie
})) 
app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods());



/* const allowCors = fn => async (ctx) => {
    ctx.response.setHeader('Access-Control-Allow-Credentials', true)
    ctx.response.setHeader('Access-Control-Allow-Origin', '*')
    // another common pattern
    // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    ctx.response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
    ctx.response.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )
    if (ct.method === 'OPTIONS') {
        ctx.response.status(200).end()
        return
    }
    return await fn(req, res)
}

const handler = (req, res) => {
    const d = new Date()
    res.end(d.toString())
}

module.exports = allowCors(handler)
 */