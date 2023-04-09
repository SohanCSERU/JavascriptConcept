const fs = require('fs');


//reading files
// fs.readFile('./docs/blog1.txt', (err,data)=> {
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// global.setTimeout(3000);
// writting files
// fs.writeFile('./docs/blog1.txt','hello world',() => {
//     console.log('Data written to the file');
// });


//directory creation

if(!fs.existsSync('./newDocs')){
    fs.mkdir('./newDocs', (err) => {
        if(err){
            console.log(err);
        }
        console.log('Directory created');
    });
}else{
    fs.rmdir('./newDocs', (err) => {
        if(err){
            console.log(err);
        }
        console.log('Directory deleted');
    });
}