const fs=require("fs");
fs.appendFile("notes.txt","\n learning nod.js",(err)=>{
    if(err) throw err;
    console.log("content added");
});