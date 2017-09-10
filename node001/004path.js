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
console.log(path.join("./", "/a", "//b", "c", "../", "d"));
//判断路径是否为绝对路径
console.log(path.isAbsolute(pathStr));
//获取后者相对于前者的相对路径
console.log(path.relative("G:\\MyFiles\\baseCode\\05node\\node000\\info.js", __filename));
//把一个路径或路径片段的序列解析为一个绝对路径。
console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'));
console.log(path.resolve('wwwroot', '/static_files/png/', '../gif/image.gif'));
console.log(path.resolve('/wwwroot', 'static_files/png/', '../gif/image.gif'));
console.log(path.resolve('../gif/image.gif'));
//获取文件名
console.log(path.basename('G:\\MyFiles\\baseCode\\05node\\node000\\info.js'));
console.log(path.basename('G:\\MyFiles\\baseCode\\05node\\node000\\info.js', ".js"));
//获取问价呢扩展名
console.log(path.extname('G:\\MyFiles\\baseCode\\05node\\node000\\info.js'));
//路径解析(字符串转化为对象)
console.log(path.parse('G:\\MyFiles\\baseCode\\05node\\node000\\info.js'));
// 路径编码(对象转化为字符串)
console.log(path.format({
    root: 'G:\\',
    dir: 'G:\\MyFiles\\baseCode\\05node\\node000',
    base: 'info.js',
    ext: '.js',
    name: 'info'
}));
//获取系统环境变量
const systemPath = process.env.PATH;
//path.delimiter:提供平台特定的路径分隔符
console.log(systemPath.split(path.delimiter));
//path.sep:提供了平台特定的路径片段分隔符
console.log("G:\\MyFiles\\baseCode\\05node\\node000\\info.js".split(path.sep));
//返回文件目录名
console.log(path.dirname("G:\\MyFiles\\baseCode\\05node\\node000\\info.js"))