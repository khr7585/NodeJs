// function addNote(title) {
//   console.log("Note Added:",title);
// }
// module.exports = {
//   addNote
// };

//SAVE NOTES INTO A FILE
// const fs = require("fs");
// function addNote(title) {
//     fs.appendFile("notes.txt", title + "\n", (err) => {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         console.log("Note Saved");
//     });
// }
// module.exports = {
//     addNote
// };


//READ NOTES
// const fs = require("fs");
// function listNotes() {
//     fs.readFile("notes.txt", "utf8", (err, data) => {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         console.log(data);
//     });
// }
// module.exports = {
//     // addNote,
//     listNotes
// };


//DELETE ALL NOTES
// function deleteNotes() {
//     fs.unlink("notes.txt", (err) => {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         console.log("Notes Deleted");
//     });
// }
// module.exports = {
//     // addNote,
//     // listNotes,
//     deleteNotes
// };


//USE COMMAND-LINE ARGUMENTS
// const notes = require("./notes");
// const command = process.argv[2];
// const title = process.argv[3];
// if (command === "add") {
//     notes.addNote(title);
// }


//ADD MORE COMMANDS
// const notes = require("./notes");
// const command = process.argv[2];
// const title = process.argv[3];
// if (command === "add") {
//     notes.addNote(title);
// }
// else if (command === "list") {
//     notes.listNotes();
// }
// else if (command === "delete") {
//     notes.deleteNotes();
// }
// else {
//     console.log("Unknown Command");
// }
