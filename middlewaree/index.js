const express = require('express')
const app = express()
const port = 3001

const my_file_path = __dirname + '/public';
console.log({ my_file_path });

// function middle(req, res, next) {
//     console.log('Middle is called');
//     next();
// }

app.use('/public',express.static(my_file_path));

app.get('/path1', (req, res) => {
    console.log('path 1 called');
    res.send('Hello World!')
})

app.get('/path2', (req, res) => {
    console.log('path 2 called');
    res.send('Hello Mars!');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})