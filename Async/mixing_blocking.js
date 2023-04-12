const fs = require('fs');

fs.readFile('./demo.js',(err,data) =>{
    if(err) throw err;
    console.log(data.toString());
});

fs.unlinkSync('./demo.js');
