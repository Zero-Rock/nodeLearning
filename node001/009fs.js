/**
 * Created by Mobius on 2017/9/28 23:10.
 */
const fs = require( "fs" );
const path = require( "path" );
const _path1 = path.resolve( __dirname, "../test/user.txt" );
const _path2 = path.resolve( __dirname, "../test/user2.txt" );
/**
 * 异步读取文件
 * fs.readFile(path[, options], callback)
 * 若不指定编码，则返回buffer对象
 */
fs.readFile( _path1, "UTF-8", ( error, data ) => {
  if (error) {
    console.log( error );
  }
  console.log( data );
} );
console.log( "complate" );
/**
 * 同步读取文件
 * fs.readFileSync(path[, options])
 * 若不指定编码，则返回buffer对象
 */
const data = fs.readFileSync( _path2, "utf-8" );
console.log( data );
fs.readlink( _path2, ( e, d ) => {
  if (e) {
    console.log( e );
    return;
  }
  console.log( d );
} );