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
/*
const fs = require("fs");
const server = http.createServer((req, res) => {
  //   console.log(req.url, req.method, req.headers);
  const url = req.url;
  const method = res.method;

  if (url === '/') {
    // res.setHeader("Content-Type", "text/html");
    res.write('<html>');
    res.write('<head><title> Enter Message </title></head>');
    res.write(
      '<body><form action="/message" method="POST"> <input type ="text" name="message"> <button type="submit"> Send </button> </form></body>'
    );
    res.write("</html>");
    return res.end();
  }

  if (url === '/message' && method === 'POST') {
    console.log('here');
    fs.writeFileSync('message.txt', 'Dummy');
    res.statusCode = 302;
    res.setHeader('Location', '/');
    console.log('here end');
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

// Video11 parsing request bodies
/*
const fs = require("fs");
const server = http.createServer((req, res) => {
  //   console.log(req.url, req.method, req.headers);
  const url = req.url;
  const method = res.method;

  if (url === "/") {
    // res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title> Enter Message </title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split("=")[1];

      fs.writeFileSync('message.txt', message);
    });

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
*/


//video 12 event driven code
/*
const fs = require('fs');
const server = http.createServer((req, res) => {
  //   console.log(req.url, req.method, req.headers);
  const url = req.url;
  const method = res.method;

  if (url === '/') {
    // res.setHeader("Content-Type", "text/html");
    res.write('<html>');
    res.write('<head><title> Enter Message </title></head>');
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }

  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split('=')[1];

      fs.writeFileSync('message.txt', message);
    });

    res.statusCode = 302;
    res.setHeader('Location', '/');

    return res.end();
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My first Page</title></head>');
  res.write('<body><h1> Hello!!!! </h1></body>');
  res.write('</html>');
});

server.listen(3000);
*/

// video 13 Blocking and non blocking code
const fs = require('fs');

const server = http.createServer((req, res) => {
  //   console.log(req.url, req.method, req.headers);
  const url = req.url;
  const method = res.method;

  if (url === '/') {
    // res.setHeader("Content-Type", "text/html");
    res.write('<html>');
    res.write('<head><title> Enter Message </title></head>');
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write('</html>');
     res.end();
  }

  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split('=')[1];

      fs.writeFile('message.txt', message,err=>{
        res.statusCode = 302;
        res.setHeader('Location', '/');
    
        return res.end();
      });
    });

    
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My first Page</title></head>');
  res.write('<body><h1> Hello!!!! </h1></body>');
  res.write('</html>');
});

server.listen(3000);