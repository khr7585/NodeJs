//1.OBJECT DESTRUCTURING
// const person={
//     name:"hemanth",
//     age:21
// }
// const {name,age}=person;
// console.log(name);
// console.log(age);

//RENAME VARIABLES
// const person={
//     name:"hemanth",
//     age:21
// }
// const {name:username,age:userage}=person;
// console.log(username);
// console.log(userage);

//DEFAULT VALUES
// const person={
//     name:"hemanth",
//     age:21
// }
// const {name,age,city="madanapalle"}=person;
// console.log(city);

//ARRAY DESTRUCTURING
// const color=["red","greene","yellow"];
// const [first,second,third]=color;
// console.log(third);

//SKIP ELEMENTS
// const num=[10,20,30,40];
// const [first, , third]=num;
// console.log(first);
// console.log(third);

//REST OPERATOR
// const num=[10,20,30,40];
// const [first,...remaining]=num;
// console.log(first);
// console.log(remaining);

//NESTED DESTRUCTUING
// const details={
//     name:"heamnth",
//     address:{
//         city:"madanapalle"
//     }
// }
// const {address:{city}}=details;
// console.log(city);

//DESTRUCTURING IN FUNCTION PARAMETERS
// function display(person){
//     console.log(person.name);
// }
// display({
//     name:"hemanth"
// })