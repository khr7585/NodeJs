//1.path.basename()-Returns the file name.
// const path=require("path");
// const filepath="C:\\Users\\Hemanth\\notes.txt";
// console.log(path.basename(filepath));

//2.path.dirname()-Returns the folder (directory) path.
// const path = require("path");
// const filePath = "C:\\Users\\Hemanth\\notes.txt";
// console.log(path.dirname(filePath));

//3.path.extname()-returns the file extension
// const path = require("path");
// console.log(path.extname("notes.txt"));

//4.path.join()-joins multiple path segments safely
// const path = require("path");
// const fullPath = path.join("users", "hemanth", "notes.txt");
// console.log(fullPath);

//5.path.resolve()-Returns an absolute path.
// const path = require("path");
// console.log(path.resolve("notes.txt"));

//6.path.parse()-Breaks a path into its parts
// const path = require("path");
// const result = path.parse("C:\\Users\\Hemanth\\notes.txt");
// console.log(result);

//7.path.format()-creates a path from an object
// const path = require("path");
// const file = {
//     dir: "C:\\Users\\Hemanth",
//     base: "notes.txt"
// };
// console.log(path.format(file));