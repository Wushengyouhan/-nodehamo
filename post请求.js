//用于创建服务器
const http = require('http')
const querystring = require('querystring')

const server = http.createServer((req, res) => {
    if(req.method === 'POST') {
        //存储数据
        let postData = ''
        //流stream
        req.on('data',chunk => {
            postData += chunk.toString()
        })
        // 数据收完会触发end事件，这里监听
        req.on('end', () => {
            console.log('postData', postData)
            res.end('数据接收完毕')
        })
        console.log('post data content type', req.headers['content-type']);
    }
})

server.listen(5000, () => {
    console.log('server runing at port 5000');
})

//用postman去发送请求