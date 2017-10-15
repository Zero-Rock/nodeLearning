/**
 * Created by Mobius on 2017/10/14 20:54.
 */
const express = require("express");
const queryString = require("querystring");
const path = require("path");
const app = express();
//请求 localhost:1234/index?name=mobius
app.get("/index", (req, res) => {
    res.send(`${req.query.name}欢迎光临1`);
    console.log(req.params)
});
//请求 localhost:1234/mobius
app.get("/index/:name", (req, res) => {
    res.send(`${req.params.name}欢迎光临2`);
});
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
app.set("view engine", "ejs");

//设置模板引擎的位置
app.set("views", path.resolve(__dirname, "./../test"));
app.get("/welcome/:name/:gender/:age", (req, res) => {
    console.log(req.params)
    //res.sendFile(__dirname+req.path);
    //返回模板(默认后缀ejs)
    res.render("013express", {
        name: req.params.name,
        gender: req.params.gender,
        age: req.params.age,
    })
})
//*代表所有路径,都识别
app.get("*", (req, res) => {
    console.log(req.path);
    //向客户端返回文件
    //注:文件路径 为绝对路径
    console.log(path.resolve(__dirname + "./../test/user.txt"))
    res.sendFile(path.resolve(__dirname + "./../test/user.txt"))
})
app.listen(1234);
console.log("service start")