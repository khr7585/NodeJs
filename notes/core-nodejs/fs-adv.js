//1.mkdir()-create a folder
// const fs=require("fs");
// fs.mkdir("documents",(err)=>{
//     if(err) throw err;
//     console.log("folder created");
// })

//2.mkdirsync()-creates a folder synchronously
// const fs=require("fs");
// fs.mkdirSync("images");
// console.log("folder created");

//3.rename()-reanmes a file or folder.
// const fs=require("fs");
// fs.rename("old.txt","new.txt",(err)=>{
//     if(err ) throw err;
//     console.log("file renamed");
// });

//4.unlink()-deletes a file.
// const fs=require("fs");
// fs.unlink("notes.txt",(err)=>{
//     if(err) throw err;
//     console.log("file deleted");
// });

//5.copyfile()-copies one file to another
// const fs=require("fs");
// fs.copyFile("old.txt","new.txt",(err)=>{
//     if(err) throw err;
//     console.log("file copied");
// });

//6.appendfile()-adds new content to the end of an existing file.
// const fs=require("fs");
// fs.appendFile("notes.txt","\n learning nod.js",(err)=>{
//     if(err) throw err;
//     console.log("content added");
// });

//7.existssunc()-checks whether a file or folder exists.
// const fs=require("fs");
// if(fs.existsSync("notes.txt")){
//     console.log("file exists");
// }else{
//     console.log("file not found");
// }

//8.readdir()-lists all files and folders inside a directory.
// const fs=require("fs");
// fs.readdir(".",(err,files)=>{
//     if(err) throw err;
//     console.log(files);
// });

//9.stat()-returns information about a file
// const fs=require("fs");
// fs.stat("notes.txt",(err,stats)=>{
//     if(err) throw err;
//     console.log(stats.size);
// });

//10.rm()-deletes a folder or file.
// const fs=require("fs");
// fs.rm("documents",{recursive:true},(err)=>{
//     if(err) throw err;
//     console.log("folder deleted");
// });