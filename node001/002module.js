/**
 * Created by Mobius on 2017/9/10 17:50.
 */
/**
 * 模块:把一些通用的代码分到不同的解释文件中,每一个js文件就是一个模块
 * 创建模块
 */
let name;

//以下方法只能在模块内使用
let setname = ( aname ) => {
    name = aname;
};

let getname = () => {
    return name;
};

//如果想在模块外使用,需要配合exports对象来实现
/**
 * exports对象
 * 1.是一个空对象
 * 2.可以为对象添加属性和方法
 * 3.在其他文件中可以通过require来获取exports对象
 *
 */
exports.name = "mobius";
exports.age = 10;
exports.setAge = ( aAge ) => {
    this.age = aAge;
};
exports.getAge = () => {
    return this.age;
};
