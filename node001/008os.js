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
console.log(os.cpus());
//返回一个字符串,表明Node.js二进制编译环境的字节顺序.
console.log(os.endianness());
//方法以整数的形式回空闲系统内存 的字节数.
console.log(os.freemem());
//以字符串的形式返回当前用户的home目录.
console.log(os.homedir());
//法以字符串的形式返回操作系统的主机名.
console.log(os.hostname());
//返回一个数组,包含1, 5, 15分钟平均负载.
console.log(os.loadavg());
/**
 * 返回一个对象,包含只有被赋予网络地址的网络接口.在返回对象的每个关键词都指明了一个网络接口.
 * address <string> 被赋予的 IPv4 或 IPv6 地址
 * netmask <string> IPv4 或 IPv6 子网掩码
 * family <string> IPv4 或 IPv6
 * mac <string> 网络接口的MAC地址
 * internal <boolean> 如果 网络接口是loopback或相似的远程不能用的接口时, 值为true,否则为false
 * scopeid <number> IPv6 数字领域识别码 (只有当 family 是IPv6时可用)
 */
console.log(os.networkInterfaces());
