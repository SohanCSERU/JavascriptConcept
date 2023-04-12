const fs = require('fs');

fs.readFile('./demo.js', (readFileErr,data) => {
    if(readFileErr) throw readFileErr;
    console.log(data.toString());

    fs.unlink('./demo.js', (unlinkErr)=>{
        if(unlinkErr) throw unlinkErr;
    });
});