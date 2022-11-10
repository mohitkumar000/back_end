const http =require('http');
const server =http.createServer((req,res)=>
{
    console.log("request brom browser to server ")
    console.log(req.url);
    res.setHeader('Content-Type','text/plain');
    res.write("hello world");
    res.end();
}
);
//port number , hostname 
server.listen(3000,'localhost',() => {
    console.log("server is listening on port 3000");

});
