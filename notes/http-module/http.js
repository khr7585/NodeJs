//import http server
// const http=require("http");

const { json } = require("express");

//create  a server-Use the createServer() method.
// const http=require("http");
// const server=http.createServer((req,res)=>{
//     res.end("hello node.js");
// });
// server.listen(3000,()=>{
//     console.log("server is running on port 30000");
// })

//request object(req)
// const http=require("http");
// const server=http.createServer((req,res)=>{
//     console.log(req.url);
//     res.end("done");
// });
// server.listen(3000);

//listen()-server.listen(3000);

//routing example
// const http=require("http");
// const server=http.createServer((req,res)=>{
//     if(req.url==="/"){
//         res.end("home page");
//     }else if(req.url==="/about"){
//         res.end("about page");
//     }else{
//         res.end("404 page not found");
//     }
// });
// server.listen(3000);

//status code-res.statusCode=200;

//headers
// res.setHeader("content-type","appplication/json");
// res.end(JSON.stringify({
//     name:"hemanth",
//     age:21
// }));

//example
// const http=require("http");
// const server=http.createServer((req,res)=>{
//     if(req.url==="/"){
//         res.statusCode=200;
//         res.setHeader("content-type","text/plain");
//         res.end("welcome home");
//     }else if(req.url==="/user"){
//         res.statusCode=200;
//         res.setHeader("content-type","application/json");
//         res.end(JSON.stringify({
//             id:1,
//             name:"hemanth"
//         }))
//     }else{
//         res.statusCode=200;
//         res.end("page not found");
//     }
// })
// server.listen(3000,()=>{
//     console.log("server running...");
// })