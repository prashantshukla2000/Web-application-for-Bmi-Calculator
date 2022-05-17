const express = require("express")
const bodyParser =require("body-parser")
const app = express()
app.use(bodyParser.urlencoded({extended:true}));
const port = 3000


app.get("/",function(request,response){
  response.sendFile(__dirname + "/index.html");
});
app.post("/",function(req,res){

var num1=Number(req.body.num1);
var num2=Number(req.body.num2);
var result=num1+num2;
 res.send("The result is"+ result);

});
app.get("/bmiCalculator",function(request,response){
  response.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmiCalculator",function(req,res){

var w=parseFloat(req.body.weight);
var h=parseFloat(req.body.height);
var result=w/(h*h);
 res.send("The result is "+ result);

});


app.listen(3000,function(){
console.log("Server started in port 3000");
});
