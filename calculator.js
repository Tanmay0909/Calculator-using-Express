const express = require('express');
const bodyParser=require("body-parser");
const app = express();

app.use(express.urlencoded({extended:true}));
//In the above code snippet of body parser,the object (bodyParser) helps to pass the value from the html while the urlencodedhelps to access the value defined

app.get("/",function(req,res){
  res.sendFile(__dirname +"/index.html");
});

app.post("/",function(req,res){
  var num1=Number(req.body.num1);
  var num2=Number(req.body.num2);
  var result=num1+num2;
      res.send(result);
});

app.listen("0909",function(){
  console.log("Server is running at 0909.");
});
