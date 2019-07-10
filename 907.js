var URL = require("url");
var http = require("http");
var F = function(req,res){

   var lookingfor = URL.parse(req.url,true).pathname;
   if(lookingfor=="/"){
       res.writeHead(200,{'content-type':'text/html'});
       res.write("<html> <a href = 'http://localhost:2222/qa'>QA</a></html>");
       res.write("<html> <a href = 'http://localhost:2222/aboutme'>About me</a> </html>");
       res.write("<html> <a href = 'http://localhost:2222/nationwide'>Nationwide</a> </html>");
       res.write("<html><center> <h1>Welcome to this page</center></h1>");
       res.write("<html><p>Here is a page with four links and some text</p>");
       res.end();
   }
   if(lookingfor=="/qa"){
       res.writeHead(200,{'content-type':'text/html'});
       res.write("<html> This is about QA. <a href = 'http://localhost:2222/'>Home page</a> </html>");
       res.end();
   }
   if(lookingfor=="/nationwide"){
       res.writeHead(200,{'content-type':'text/html'});
       res.write("<html> This is about Nationwide. <a href = 'http://localhost:2222/'>Home page</a> </html>");
       res.write("<html> <h1>Hello</h1>");
       res.end();
   }
   if(lookingfor=="/aboutme"){
       res.writeHead(200,{'content-type':'text/html'});
       res.write("<html> This is about me. <a href = 'http://localhost:2222/'>Home page</a> </html>");
       res.end();
   }
}

var server = http.createServer(F);

server.listen(2222);