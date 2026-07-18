//creating a buffer
// const buffer=Buffer.from("hello");
// console.log(buffer);

//convert buffer to string
// const buffer=Buffer.from("hello");
// console.log(buffer.toString());

//buffer to length
// const buffer=Buffer.from("nodejs");
// console.log(buffer.length);

//Reading a File Using a Stream
// const fs=require("fs");
// const readstream=fs.createReadStream("notes.txt","utf-8");
// readstream.on("data",(chunk)=>{
//     console.log(chunk);
// });

//Writing with a Stream
// const fs=require("fs");
// const writestream=fs.createWriteStream("notes.txt");
// writestream.write("welcome");
// writestream.end();

//types of streams
//1.readable stream=fs.createReadStream("file.txt");
//2.writable stream=fs.createWriteStream("file.txt");
//Duplex Stream=can read and write data
//transform stream=Reads data, changes it, then writes the modified data.