const fs = require('fs');
fs.readFile('../servers.js', (err,data) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(data.toString());
});