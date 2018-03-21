/**
 * Created by Mobius on 2017/9/9 17:56.
 */
const http = require("http");
http.createServer((req, res) => {
    //设置响应头,响应状态码和返回内容格式和编码
    res.writeHead(200, {
        'Content-Type': 'json;charset=utf-8'
    });
    //设置响应内容
    res.write("<p>hello Node.Js</p>");
    //响应结束并返回内容
    res.end("mobius");
    console.log(15865);
}).listen(8080, () => {
    console.log("开启服务")
});
