const fs = require("fs");
fs.readFile('test.txt','utf-8',(err,data) => {
    let x = data;

    while(x.includes("  ")){
        x=x.replace("  ",' ');
    }

    fs.writeFile('test.txt',x,'utf-8',()=>{
        console.log('done');
    })
})

