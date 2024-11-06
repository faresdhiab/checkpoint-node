const http = require("http");

http.createServer((require,response) => {
    response.end("Hello Node !!!");
})
.listen(3000);