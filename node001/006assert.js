/**
 * Created by Mobius on 2017/9/11 23:02.
 */
const assert = require("assert");
const obj1 = {
    a: {
        b: 1
    }
};
const obj2 = {
    a: {
        b: 2
    }
};
const obj3 = {
    a: {
        b: 1
    }
};
const obj4 = Object.create(obj1);
console.log(assert.deepEqual(obj1, obj4))