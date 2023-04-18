const fs = require("fs");
// const book = {
//     title: "Ego is the Enemy",
//     author: "Ryan Holiday",
// };

// const bookJSON = JSON.stringify(book); //converts the object to a string

// fs.writeFileSync("1-json.json", bookJSON); //writes the string to a file

// const dataBuffer = fs.readFileSync("1-json.json"); //reads the file and returns a buffer
// const JSONdata = dataBuffer.toString(); //prints the buffer
// const dataObject = JSON.parse(JSONdata); //converts the string to an object

// console.log(dataObject);

// Challenge: Work with JSON and the file system
// 1. Load and parse the JSON data
// 2. Change the name and age property using your info
// 3. Stringify the changed object and overwrite the original data

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const dataObject = JSON.parse(dataJSON);
dataObject.name = "Peter";
dataObject.age = 40;
fs.writeFileSync("1-json.json", JSON.stringify(dataObject));
