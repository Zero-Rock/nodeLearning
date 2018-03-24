/**
 * Created by PanJiankang on 2018/3/24 下午8:32.
 */
const path = require( "path" );
const fs = require( "fs" );
const chalk = require( "chalk" );
const root = "../node001/";
const outToot = "../test/fileName.txt";
const Basepath = path.resolve( __dirname, root );
const fileNamepath = path.resolve( __dirname, outToot );
console.time(chalk.red("耗时"))
fs.readdir( Basepath, ( err, files ) => {
  const data = [];
  files.forEach( file => {
    if (! ~ file.indexOf( "DS_Store" )) {
      data.push( `\'./node001/${file}\',` );
    }
  } );
  const newData = data.join( "\n" );
  fs.writeFile( fileNamepath, newData, ( err ) => {
    if (err) {
      console.log( err );
    } else {
      console.log(chalk.yellow( "目录生成成功" ));
      console.timeEnd(chalk.red("耗时"))
    }
  } );
} );


