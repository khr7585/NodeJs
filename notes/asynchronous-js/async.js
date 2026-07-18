//1.CALLBACKS-A callback is a function that is passed as an argument to another function and is executed after an asynchronous task completes
// function greet(name,callback){
//     console.log("hello",name);
//     callback();
// }
// greet("hemanth",()=>{
//     console.log("welcome");
// })


//2.PROMISES
// const promise=new Promise((resolve,reject)=>{
//     const success=true;
//     if(success){
//         resolve("task completed");
//     }else{
//         reject("task failed");
//     }
// });
// promise
//    .then((result)=>console.log(result))
//    .catch((error)=>console.log(error));

//3.ASYNC
// async function name() {
//     return "hello";
// }
// name().then(console.log);

//4.AWAIT
// function fetchdata(){
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve("user data");
//         }, 2000);
//     });
// }
// async function displayData() {
//     const data=await fetchdata();
//     console.log(data);   
// }
// displayData();

//5.TRY...CATCH
// async function fetchdata(){
//     try{
//         throw new Error("user not found");
//     }catch(error){
//         console.log(error.message);
//     }
// }
// fetchdata();

//PRACTICE
//1.FETCH DATA
// function fetchdata(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve({
//                 id:1,
//                 name:"hemanth",
//                 age:22
//             });
//         },2000);
//     });
// }
// async function name() {
//     const user=await fetchdata();
//     console.log(user);
// }
// name();

//2.READ MULTIPLE FILES
// const fs=require("fs").promises;
// async function readFiles(){
//     const file1=await fs.readFile("file1.txt","utf-8");
//     const file2=await fs.readFile("file2.txt","utf-8");
//     console.log(file1);
//     console.log(file2);
// }
// readFiles();

//3.DELAY FUCNTIONS
// function delay(ms){
//     return new Promise((resolve)=>{
//          setTimeout(resolve,ms);
//     });
// }
// async function start(){
//     console.log("start");
//     await delay(3000);
//     console.log("3 seconds completed");
// }
// start();