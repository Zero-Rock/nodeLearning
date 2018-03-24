/**
 * Created by PanJiankang on 2018/2/4 下午2:50.
 */
const fs = require( "fs" );
const path = require( "path" );
const keyMap = path.resolve( __dirname, "../test/user2.txt" );
fs.readFile( keyMap, "UTF-8", ( error, data ) => {
  if (error) {
    console.error( `[ERROR]--------${error}` );
    return;
  }
  console.log( data );
} );

