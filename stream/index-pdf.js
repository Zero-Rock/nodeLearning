/**
 * Created by PanJiankang on 2018/2/4 下午2:50.
 */
const fs = require( "fs" );
const path = require( "path" );
const stream = require( "stream" );
const keyMap = path.resolve( __dirname, "../test/keyMap.pdf" );
fs.readFile( keyMap, ( error, data ) => {
  if (error) {
    console.error( `[ERROR]--------------------${error}` );
    return;
  }
  console.log( data.toString( "utf16le" ) );
} );

