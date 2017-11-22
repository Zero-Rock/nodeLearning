/**
 * Created by Mobius on 2017/9/10 17:56.
 */
/**
 * 导入模块,可以省略js后缀,重复导入获取的模块都是同一个expors对象
 */
const myModule = require('./002module');
const modules = require("./002modules_default")
myModule.setAge(30);
console.log(myModule.getAge());
console.log(myModule.age);
console.log(myModule.name);
modules.modules.fun(myModule.name)
