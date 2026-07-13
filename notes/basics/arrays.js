//SYNTAX
// const arrayname=[value1,value2,value3];

//ACCESSING ARRAY ELEMENTS
// const fruits=["apple","mangp","guava"];
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

//CHANGING AN ELEMENT
// const name=["hemanth","billa"];
// name[1]="jake";
// console.log(name);

//FINDING THE LENGTH
// const name=["hemanth","jake","billa"]
// console.log(name.length);

//ADDING ELEMENTS
// const name=["hemanth","jake","billa"];
// name.push("snake");
// console.log(name);

//UNSHIFT()-Add at the Beginning
// const name=["hemanth","jake","billa"]
// name.unshift("snake");
// console.log(name);

//POP()-Remove Last Element
// const name=["hemanth","jake","billa"];
// name.pop();
// console.log(name);

// SHIFT()-Remove First Element
// const name=["hemanth","jake","billa"];
// name.shift();
// console.log(name);

//LOOP THROUGH AN ARRAY
// const name=["hemanth","jake","billa"];
// for (let i=0;i<name.length;i++){
//     console.log(name[i]);
// }

//FOR OF LOOP
// const name=["hemanth","jake","billa"];
// for (let names of name){
//     console.log(names);
// }

//FOREACH()
// const name=["hemanth","jake","billa"];
// name.forEach(function(names){
//     console.log(names);
// });

//USING AN ARROW FUNCTION
// const name=["hemanth","jake","billa"];
// name.forEach((names)=>{
//     console.log(names);
// })

//INDEXOF()-Finds the index of an element.
// const name=["hemanth","jake","billa"];
// console.log(name.indexOf("jake"));

//INCLUDES()-Checks if an element exists
// const name=["hemanth","jake","billa"];
// console.log(name.includes("jake"));

//SLICE()-Returns part of an array.
// const num=[10,20,30,40,50];
// console.log(num.slice(1,4));

//SPLICE()-Adds or removes elements.
// const name=["hemanth","jake","billa"];
// name.splice(1,1);
// console.log(name);

//MAP()-Creates a new array by transforming each element.
// const num=[1,2,3,4,5];
// const square=num.map(num=>num*num);
// console.log(square);

//FILTER()-Returns elements that match a condition.
// const num=[1,2,3,4,5];
// const find=num.filter(num=>num>2);
// console.log(find);

//FIND()-Returns the first matching element.
// const num=[1,2,3,4,5];
// const match=num.find(num=>num>2);
// console.log(match);

//REDUCE()-Combines all elements into a single value.
// const num=[1,2,3,4,5];
// const total=num.reduce((sum,num)=>sum+num,0);
// console.log(total);

//ARRAYS OF OBJECTS
// const students=[
//     {name:"hemanth",age:21},
//     {name:"jake",age:22}
// ]
// console.log(students[0].name);