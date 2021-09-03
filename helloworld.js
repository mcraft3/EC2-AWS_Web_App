var http = require("http")

http.createServer(function (request, response) {

   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'})

   // Send the response body as "Hello World"
   response.end('<span style="color:blue text-align: center font-weight:bold">Welcome to your Web Application\n <em>Dynamic and live in EC2 on AWS!</em>\n</span>')
}).listen(3333)

// Console will print the message
console.log('Server running')