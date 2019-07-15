var express = require("express");
var app = express();

app.get("/add/:no1/:no2", function(req, res){
    res.send(no1+no2);
});

app.post("/process", function(req, res){
    res.send("bye");
});
app.all("/process",function(req,res){
    res.send("bywww");
});
app.put("/process", function(req, res){
    res.send("Hello");
});


app.listen(8000);