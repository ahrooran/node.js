var express=require("express");
var app=express();

app.route('/shafeeq')
    .get(function (req, res){
        res.send('shafeeq, get method called')
    })
    .post(function (req, res){
        res.send('shafeeq, post method called')
    })
    .put(function(req, res){
        res.send('shaefeeq. put method called')
    })
app.route('/qa')
    .get(function(req, res){
        res.send('qa, get method called')
    })
    .post(function(req, res){
        res.send('qa, post method called')
    })
    .put(function(req, res){
        res.send('qa, put function caled')
    })


app.listen(3000);