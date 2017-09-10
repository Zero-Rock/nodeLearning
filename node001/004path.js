/**
 * Created by Mobius on 2017/9/10 18:04.
 */
const path = require("path");

//获取当前文件夹绝对路径
console.log(__dirname);
//获取当前文件绝对路径
console.log(__filename);
//序列化文件路径
const pathStr = "./a//b/c/../d";
let normalizePath = path.normalize(pathStr);
console.log(normalizePath);
//文件路径拼接,并规范化路径
console.log( path.join("./", "/a", "//b", "c", "../", "d"));