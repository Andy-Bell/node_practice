var http = require("http");

function start() {
  function onRequest(request, response){
    console.log("request received");
    response.writeHead(200, {"Content-type" : "text/plain"});
    response.write("Hello, world.");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started");
}

exports.start = start;
