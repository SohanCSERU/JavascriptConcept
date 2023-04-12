//Synchronous example of blocking operations
// const fs = require('fs');

// const  data = fs.readFileSync('./app.js', 'utf8');
// console.log(data);


//Async example of non-blocking operations

const fs = require('fs');

function moreWork(){
    console.log('Running more operations');
}

const data = fs.readFileSync('./app.js'); // blocks here until file is read
console.log(data.toString());
moreWork(); // will run after console.log