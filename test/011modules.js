/**
 * Created by Mobius on 2017/10/15 20:50.
 */
let name;
//以下方法只能在模块内使用
const setname = (aname) => {
    name = aname;
}
const getname = () => {
    return name;
}
//如果想在模块外使用,需要配合exports对象来实现
/**
 * exports对象
 * 1.是一个空对象
 * 2.可以为对象添加属性和方法
 * 3.在其他文件中可以通过require来获取exports对象
 *
 */
exports.age = 10;
console.log(exports);
exports.setAge = (aAge) => {
    this.age = aAge;
}
exports.getAge = () => {
    return this.age;
}
console.log(exports);