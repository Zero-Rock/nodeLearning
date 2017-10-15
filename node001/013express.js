/**
 * Created by Mobius on 2017/10/14 20:54.
 */
const express = require("express");
const queryString = require("querystring");
const path = require("path");
const app = express();
app.get("/index", (req, res) => {
    res.send(req.query.username + "欢迎光临");
});
//*代表所有路径,都识别
app.get("*", (req, res) => {
    console.log(req.path);
    //向客户端返回文件
    //注:文件路径 为绝对路径
    console.log(path.resolve(__dirname + "./../test/user.txt"))
    res.sendFile(path.resolve(__dirname + "./../test/user.txt"))
})
app.post('/adult', (req, res) => {
    var pathData = "";
    req.on("data", (chunk) => {
        pathData += chunk;
    });
    req.on("end", () => {
        var obj = queryString.parse(pathData);
        console.log(obj);
        res.send("你的年龄是" + obj.age);
    })
});
app.listen(1234);
console.log("service start")