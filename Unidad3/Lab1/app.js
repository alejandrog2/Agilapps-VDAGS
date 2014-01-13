var http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(200, {"Content-type" : "text/plain" });
    res.end("hello Phonegap\n");
});
//listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

//Put a friendly message
console.log("Server running at http://127.0.0.1:8000/");