/**
 * Created by Mobius on 2018/1/1 10:42.
 */
const fs = require("fs");
fs.readdir(process.cwd(), (error, files) => {
    console.log("----------------------------");
    if ( !files.length ) {
        console.log(" \033[31m No files to show ! \033[39m\n");
    }
    console.log(" \033[31m Select which file or dirctory you want  to see \033[39m \n");
    const file = (i) => {
        const fileName = files[ i ];
        fs.stat(`${__dirname}/${fileName}`, (err, stat) => {
            if ( stat.isDirectory() ) {
                console.log(`           ${i}    ${'\033[36m'}${fileName}${"/\033[39m"}`)
            } else {
                console.log(`           ${i}    ${'\033[90m'}${fileName}${"\033[39m"}`)
            }
            i++;
            if ( i === files.length ) {
                console.log("   ");
                process.stdout.write("  \033[33m Enter your choice: \033[39m");
                process.stdin.resume();
            } else {
                file(i)
            }
        })
    };
    file(0)
});
