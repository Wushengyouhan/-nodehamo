//用于创建服务器
const http = require('http')
const querystring = require('querystring')

const server = http.createServer((req, res) => {
    const method = req.method
    console.log('method',method);
    const url = req.url
    console.log('url',url);
    //通过url获取query参数
    req.query = querystring.parse(url.split('?')[1])
    console.log('query',req.query);
    //浏览器显示的返回值
    res.end(
        JSON.stringify(req.query)
    )

})

server.listen(5000, () => {
    console.log('server runing at port 5000');
})