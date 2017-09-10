/**
 * Created by Mobius on 2017/9/10 23:18.
 */
const url = require("url");
const urlString = "http://user:password@www.baidu.com:8080/a/b?c=d&e=ff#abc";
console.log(url.parse(urlString,true))