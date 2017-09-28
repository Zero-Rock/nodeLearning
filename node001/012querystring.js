/**
 * Created by Mobius on 2017/9/28 23:19.
 */
const Url = require("url");
const querystring = require('querystring');
const _url = "http://www.baidu.com?name=mobius&age=24&hobby=code&hobby=reading&hobby=movies#1009492x";
const _urls = "https://www.baidu.com?name=mobius&age=24&hobby=code&hobby=reading&hobby=movies#1009492x";
let url = Url.parse(_url,true)
let urls = Url.parse(_urls)
let search = url.search;
let _search = urls.search;
console.log(search);
console.log(_search);
console.log(querystring.parse(search))
