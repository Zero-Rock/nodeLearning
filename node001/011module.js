/**
 * Created by Mobius on 2017/9/28 23:16.
 */
const self = require("../test/011module");
const mod = require("../test/011modules")
console.log(self.add(1,3));
mod.setAge(123);
console.log(mod.getAge())