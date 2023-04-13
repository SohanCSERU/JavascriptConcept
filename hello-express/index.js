let express = require('express');
let app = express();
let absolutePath = __dirname + '/views/index.html';

let bodyParser = require('body-parser');

// app.use(bodyParser.text());

app.use(function (req,res,next){
  var string = req.method + " " + req.path+ " - "+req.ip;
  console.log(string);
  next();
});


app.get("/:word/echo",(req,res) => {
    var word = req.params.word;
    res.json({echo:word});
});

app.post("/search", (req,res,next) =>{
  console.log(req.body);
  res.json({message: "develop"});
});

app.get("/name",(req,res) =>{
  let string = req.query.first + ' '+req.query.last;
  console.log(string);
  res.json({name:string});
});

app.listen(3000);