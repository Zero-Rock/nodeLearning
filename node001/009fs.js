/**
 * Created by Mobius on 2017/9/28 23:10.
 */
const fs = require("fs");
/**
 * 异步读取文件
 * fs.readFile(path[, options], callback)
 */
fs.readFile("../test/user.txt","UTF-8",(error,data)=>{
    if(error){
        console.log(error)
    }
    console.log(data)
})
console.log("complate")
