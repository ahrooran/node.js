var express=require("express");
var app=express();

app.use(function(req,res,next){
    console.log("I AM MIDDLWARE");
    next();
});



//this middleware will excute before any route
app.use("/", function(req,res,next){
    console.log("i am first middleware");
    next();
});

//this middleware will excute before any route
app.use("/login", function(req, res, next){
    console.log("i am login route");
    next();
});

app.use("/logout", function(req, res, next){
    console.log("logout page");
    next();
});


app.get("/", function(req,res,){
    response.send("Welcome to homepage");
});


app.get("/login", function(req, res, ){
    response.send("Welcome to login page");
});

app.get("/logout", function(req, res, ){
    response.send("w logout page");
});


var server=app.listen(4000);
//app.listen(3000);