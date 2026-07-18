//EVENETMITTER-To work with events, import the events module.
// const EventEmitter=require("events");

//Create an object:
// const EventEmitter=new EventEmitter();

//ON()-Listen for an Event
// const EventEmitter=require("events");
// const eventEmitter=new EventEmitter();
// eventEmitter.on("greet",()=>{
//     console.log("hello,welcome");
// });
// eventEmitter.emit("greet");

//emit()-trigger an event
//evenEmitter.emit("greet");

//Passing Data with Events-You can send data when emitting an event.
// const EventEmitter=require("events");
// const eventEmitter=new EventEmitter();
// eventEmitter.on("welcome",(name)=>{
//     console.log(`welcome ${name}`);
// });
// eventEmitter.emit("welcome","hemanth");

//Multiple Listeners-One event can have multiple listeners.
// const EventEmitter=require("events");
// const eventEmitter=new EventEmitter();
// eventEmitter.on("login",()=>{
//     console.log("user logged in");
// });
// eventEmitter.on("login",()=>{
//     console.log("send welcome email");
// });
// eventEmitter.emit("login");

//once()-run only once
// const EventEmitter=require("events");
// const eventEmitter=new EventEmitter();
// eventEmitter.once("login",()=>{
//     console.log("welcome");
// });
// eventEmitter.emit("login");
// eventEmitter.emit("login");

//LOGIN EVENT
// const EventEmitter = require("events");
// const eventEmitter = new EventEmitter();
// eventEmitter.on("login", (username) => {
//     console.log(`${username} logged in successfully.`);
// });
// eventEmitter.emit("login", "Hemanth");

//NOTIFICATION SYSTEM
// const EventEmitter = require("events");
// const eventEmitter = new EventEmitter();
// eventEmitter.on("orderPlaced", (product) => {
//     console.log(`Email: Your order for ${product} has been placed.`);
// });
// eventEmitter.on("orderPlaced", (product) => {
//     console.log(`SMS: ${product} order confirmed.`);
// });
// eventEmitter.on("orderPlaced", (product) => {
//     console.log(`Database updated for ${product}.`);
// });
// eventEmitter.emit("orderPlaced", "Laptop");