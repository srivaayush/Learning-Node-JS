const http = require("http");

/* 1 way
function rqListener(req,res){
     
}

//please look for this function with this name and execute for every request
http.createServer(rqListener);
*/

/* 2 way using anaonymous function

//please look for this function with this name and execute for every request
http.createServer(rqListener(req,res){

});
*/

/*3rd way
// use arrow function

//please look for this function with this name and execute for every request
http.createServer((req,res)=>{
    console.log(req);
});
*/
/* video 5
const server = http.createServer((req, res) => {
  console.log(req);
  process.emit();
});

server.listen(3000);
*/
/*
video 6
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  process.emit();
});

server.listen(3000);

*/

/* video 7 sending responses
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  //   process.emit();
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first Page</title></head>");
  res.write("<body><h1> Hello!!!! </h1></body>");
  res.write("</html>");
});

server.listen(3000);
*/

/* video 9 routing requests
const server = http.createServer((req, res) => {
  //   console.log(req.url, req.method, req.headers);
  const url = req.url;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title> Enter Message </title></head>");
    res.write(
      '<body><form action="/message" method="POST"> <input type ="text"> <button type="submit"> Send </button> </form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first Page</title></head>");
  res.write("<body><h1> Hello!!!! </h1></body>");
  res.write("</html>");
});

server.listen(3000);
*/

// video 10 redirecting requests
const fs = require("fs");
const server = http.createServer((req, res) => {
  //   console.log(req.url, req.method, req.headers);
  const url = req.url;
  const method = res.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title> Enter Message </title></head>");
    res.write(
      '<body><form action="/message" method="POST"> <input type ="text"> <button type="submit"> Send </button> </form></body>'
    );
    res.write("</html>");
    return res.end();
  }

  if (url == "/message" && method === "POST") {
    fs.writeFileSync("message.txt", "Dummy");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first Page</title></head>");
  res.write("<body><h1> Hello!!!! </h1></body>");
  res.write("</html>");
});

server.listen(3000);
