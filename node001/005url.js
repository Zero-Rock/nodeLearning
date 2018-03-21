/**
 * Created by Mobius on 2017/9/10 23:18.
 */
const url = require("url");
const urlString = "http://user:password@www.baidu.com:8080/a/b?c=123&e=mobiua&age=23#1505219048356";
const urlString1 = "http://user:password@www.baidu.com:8080/a/b?c=123&e=mobiua&age=23#1505219048356";
const urlObj = new url.Url('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash')
const obj = url.parse(urlString, true);
console.log(urlObj);
console.log(obj.protocol);//协议
console.log(obj.slashes);//协议后是否有双斜杠
console.log(obj.auth);//授权认证
console.log(obj.host);//主机名(包含端口号)
console.log(obj.port);//端口号
console.log(obj.hostname);//主机名
console.log(obj.hash);//锚点名称,#abc
console.log(obj.search);//查询的内容(以问号开头),?c=d&e=ff
console.log(obj.query);//查询内容(不包括问号),c=d&e=ff,当parse的第二个参数为true时,会将query解析为对象
console.log(obj.pathname);//路径名,/a/b
console.info(obj.path);//把pathname和search拼接起来
console.info(obj.href);//完整的地址