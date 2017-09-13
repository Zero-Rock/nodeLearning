/**
 * Created by Mobius on 2017/9/11 23:17.
 */
const os = require("os");
// 返回一个字符串, 表明Node.js 二进制编译 所用的 操作系统CPU架构. 等价于 process.arch.
// 现在可能的值有: 'arm', 'arm64', 'ia32', 'mips', 'mipsel', 'ppc', 'ppc64', 's390', 's390x', 'x32', 'x64', 和 'x86'.
console.log(os.arch());
/**
 * 返回一个对象数组, 包含安装的每个CPU/CPU核的信息
 * model <string>
 * speed <number> (兆赫兹为单位)
 * times <Object>
 *      user <number> CPU花费在用户模式下的毫秒时间数.
 *      nice <number> CPU花费在良好模式下的毫秒时间数.
 *      sys <number> CPU花费在系统模式下的毫秒时间数.
 *      idle <number> CPU花费在空闲模式下的毫秒时间数.
 *      irq <number> CPU花费在中断请求模式下的毫秒时间数.
 */
console.log(os.cpus())
console.log(os.endianness())
