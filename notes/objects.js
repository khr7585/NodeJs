//SYNTAX
// const objectname={
//     key1=value1,
//     key2=value2,
//     key3=value3
// };

//DOT NOTATION
// const details={
//     name:"hemanth",
//     age:21
// }
// console.log(details.name);
// console.log(details.age);


//BRACKET NOTATION
// const details={
//     name:"hemanth",
//     age:21
// };
// console.log(details["name"]);
// console.log(details["age"]);

//ADDING A NEW PROPERTY
// const stu={
//     name:"hemanth"
// }
// stu.city="madanapalle";
// console.log(stu);

//UPDATING A PROPERTY
// const stu={
//     name:"hemanth",
//     age:21
// }
// stu.age=22;
// console.log(stu);

//DELETING A PROPERTY
// const stu={
//     name:"hemanth",
//     age:21
// }
// delete stu.age;
// console.log(stu);

//OBJECTS CAN STORE ARRAYS
// const student={
//     name:"hemanth",
//     skills:["html","css","js"]
// }
// console.log(student.skills);

//OBJECTS CAN STORE OTHER OBJECTS
// const student={
//     name:"hemanth",
//     address:{
//         city:"madanapalle",
//         town:"ring road"
//     }
// }
// console.log(student.address.city);

//METHODS(FUNCTIONS INSIDE OBJECTS
// const student={
//     name:"hemanth",
//     greet:function(){
//         console.log("hello")
//     }
// };
// student.greet()

//LOOP THROUGH AN OBJECT
// const student={
//     name:"hemanth",
//     age:21
// };
// for(let key in student){
//     console.log(key,student[key]);
// }

//OBJECT.KEYS()
// const student={
//     name:"hemanth",
//     age:21
// };
// console.log(Object.keys(student));

//OBJECT.VALUES()
// const student={
//     name:"hemanth",
//     age:21
// }
// console.log(Object.values(student));

//OBJECT.ENTRIES()
// const student={
//     name:"heamnth",
//     age:21
// }
// console.log(Object.entries(student));

//EXAMPLE
// const product = {
//     id: 101,
//     name: "T-Shirt",
//     price: 499,
//     quantity: 3,
//     totalPrice() {
//         return this.price * this.quantity;
//     }
// };
// console.log(product.name);
// console.log(product.price);
// console.log(product.totalPrice());