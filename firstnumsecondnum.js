var URL = require("url");
var http = require("http");
var F = function(req,res){

   var path = URL.parse(req.url,true).pathname;
   if(path=="/"){
       res.writeHead(200,{'content-type':'text/html'});
       res.write("<html><center><h1>Select First Number: </h1></center></html>");
       

       for (var i=1;i<=10;i++){
           res.write("<html><center> <a href = 'http://localhost:2222/second?no1=" + i + "'>" + i + "</a></center></html>");
           res.write("<br>");
       }
    res.end();
   }
   if (path=="/second"){
       var firstNo = URL.parse(req.url,true).query.no1;
       res.write("<html><center><h1>Select Second Number: </h1></center></html>");
       res.write("<html><center><h1>First number was </h1><center></html>" + firstNo);


       for(var i=1; i <=10; i++){
           res.write("<html><center><a href='http://localhost:2222/result?no1=" + firstNo + "&no2=" + i + "'>" + i + "</a></center></html>");
           res.write("<br>");
       }
       res.end();
   }
   if (path=="/result"){
    var firstNo = parseInt(URL.parse(req.url,true).query.no1);
    var secondNo = parseInt(URL.parse(req.url,true).query.no2);
    res.write("<h1>Result</h1>");
    res.write("<html>Awnser:  </html>" + (firstNo+secondNo));
    res.write("<html> <a href = 'http://localhost:2222/'>Back</a></html>");
   }
   res.end();
}




var server = http.createServer(F);

server.listen(2222);