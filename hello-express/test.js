const express = require('express')
const app = express()

console.log( typeof express);
console.log( typeof app);
const port = 3001


const my_file_path = __dirname + '/public';
console.log({ my_file_path });

app.use( express.static(my_file_path));

app.get('/', (req, res) => {
    res.send("Root path is called !");
});


app.post('/root', (req, res) => {
    res.send('Got a POST request')
});

app.get('/path1', (req, res) => {
    console.log('path 1 called');
    res.send('Hello World!')
})

app.get('/path2', (req, res) => {
    console.log('path 2 called');
    res.send('Hello Mars!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})