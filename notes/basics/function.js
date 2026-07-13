//1.FUNCTION DECLARATION
// function calculation(price,quantity){
//     return price * quantity;
// }
// console.log(calculation(499,7))

//2.FUNCTION EXPRESSION-Assigned to a variable. Not hoisted — must be defined before use.
// const calculation=function(price,quantity){
//     return price*quantity;
// };
// console.log(calculation(499,7))

//3.ARROW FUNCTIONS-Shorter syntax, very common in modern Node.js code — especially for callbacks and middleware.
// const calculation=(price,quantity)=>{
//     return price*quantity;
// };
// console.log(calculation(5,7))

//4.ASYNC FUNCTIONS-Critical in Node.js, since so much of what you do (database calls, API calls, file reads) is asynchronous
// async function verifypayment(orderid) {
// const result=await razorpay.orders.fetch(orderid);
// return result;   
// }

//5.CALLBACK FUNCTIONS-A function passed into another function, to be run later. This is the original way Node.js handled async work, before async/await existed
// fs.readFile('package.json',(err,data)=>{
//     if(err){
//         console.error('error reading file:',err);
//         return;
//     }
//     console.log(data);
// })
