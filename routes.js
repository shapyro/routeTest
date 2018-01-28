var http = require('http')
var fs = require('fs')

var PORT = 7000;

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
  console.log("Server Listening on http://localhost:" + PORT)
});

function handleRequest(req, res) {
  var path = req.url;

  switch(path) {
    case "/":
      // return: displayRoot(path, req, res);
      fs.readFile(__dirname + '/index.html', function(err, data){
        res.writeHead(200, { "Content-Type": "text/html"});
        res.end(data);
      })
      break;
    case "/css":
      // return: displayCSS(path, req, res);
      fs.readFile(__dirname + '/cssFrameworks.html', function(err, data){
        res.writeHead(200, {"Content-Type": "text/html"})
        res.end(data);
      })
      break;
    case "/food":
      // return: displayFood(path, req, res);
      fs.readFile(__dirname + '/foods.html', function(err, data){
        res.writeHead(200, {"Content-Type": "text/html"})
        res.end(data);
      })
      break;
    case "/movies":
      fs.readFile(__dirname + '/movies.html', function(err, data){
        res.writeHead(200, {"Content-Type": "text/html"})
        res.end(data);
      })
      break;
      // return: displayMovies(path, req, res);
    default:
      // return "404";
      // return display404(path, req, res);
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end('404')
      break;
  }
};

// function displayCSS(){
//   fs.readFile('./cssFramewokds.html', function(err, data){
//     res.writeHead(200, {"Content-Type": "text/html"})
//     res.end('');
//   })
// }

// function readTheFile(){
//   fs.readFile()
// }