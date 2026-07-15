//CORE MODULES(Built-in Modules)
// const fs=require("fs");
// console.log(fs.existsSync("./notes/modules/module.txt"));

//LOCAL(CUSTOM)MODULES
// const math=require("./math");
// console.log(math.add(5,6));
// console.log(math.subtract(8,9));

//DESTRUCTURING 
// const {add,subtract}=require("./math");
// console.log(add(5,6));

//ESMODULES
// import { add } from "./math.js";
// console.log(add(10, 20));








// Practice:

// Notes app
// File reader
// Todo file storage
// HTTP Module




//BUILT-IIN MODULES
//1.PATH MODULE
// const path=require("path");
// const filePath=path.join("notes","modules","notes.txt");
// console.log(filePath);

//path.basename()
// const path=require("path");
// const file=path.basename("notes/modules/notes.txt");
// console.log(file);

//path.dirname()
// const path=require("path");
// const folder=path.dirname("notes/modules/notes.txt");
// console.log(folder);

//path.extname()
// const path=require("path");
// console.log(path.extname("notes.txt"));

//path.parse()
// const path=require("path");
// console.log(path.parse("notes/modules/notes.txt"));

//path.resolve()
// const path=require("path");
// console.log(path.resolve("notes","modules"));

//2.OS MODULE-The os module provides information about the computer's operating system.
// const os=require("os");

//os.platform()
// const os=require("os");
// console.log(os.platform());

//os.arch()
// const os=require("os");
// console.log(os.arch());

//os.hostname()
// const os=require("os");
// console.log(os.hostname());

//os.homedir()
// const os=require("os");
// console.log(os.homedir());

//os.tmpdir()
// const os=require("os");
// console.log(os.tmpdir());

//os.freemem()
// const os=require("os");
// console.log(os.freemem());

//os.totalmem()
// const os=require("os");
// console.log((os.totalmem() / 1024 / 1024 / 1024).toFixed(2), "GB");

//os.uptime()
// const os=require("os");
// console.log(os.uptime());

//os.cpus()
// const os=require("os");
// console.log(os.cpus());

//os.userinfo()
// const os=require("os");
// console.log(os.userInfo());

//FILE OPERATION
//1.fs.writefile()-syntax
// fs.writeFile(path,data,callback);

//example
// const fs=require("fs");
// fs.writeFile("notes.txt","hello hemanth",(err)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log("file created successfully.")
// })

//2.fs.appendfile()
// const fs=require("fs");
// fs.appendFile("./notes.txt","\nlearning file system",(err)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log("content appended.")
// })

//3.fs.unlink()
// const fs = require("fs");
// fs.unlink("notes.txt", (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log("File deleted successfully.");
// });

//SIMPLE HTTP SERVER EXAMPLE
// const http=require("http");
// const server=http.createServer((req,res)=>{
//     res.write("hello");
//     res.end();
// })
// server.listen(3000,()=>{
//     console.log("server running at 3000")
// })

//REQ
// const http=require("http");
// const server=http.createServer((req,res)=>{
//     console.log(req.url);
//     console.log(req.method);
//     res.write("hello");
//     res.end();
// });
// server.listen(3000,()=>{
//     console.log("server started");
// });

//RES
// const http=require("http");
// const server=http.createServer((req,res)=>{
//     res.write("welcome");
//     res.end();
// });
// server.listen(3000);

//STATUS CODES
//200OK-Request completed successfully.
// res.statuscode=200;
// res.end("successs");

//201 created-Used when creating a new resource.
// res.statuscode=201;
// res.end("user created");

//400 bad req-The client sent invalid data.
// res.statuscode=400;
// res.end("bad request");

//401 unauthorized-authentication required
// res.statuscode=401;
// res.end("login required");

//403 forbidden-The client is authenticated but doesn't have permission.
// res.statuscode=403;
// res.end("access denied");

//404 not found-Page or resource doesn't exist.
// res.statuscode=403;
// res.end("page not found");

//500 internal server error-Something went wrong on the server.
// res.statuscode=403;
// res.end("server error");