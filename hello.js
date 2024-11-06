const fs = require("fs");
// console.log(fs); 
fs.readFile("./welcome", "utf-8", (err, data) => {
    err ? console.log(err) : console.log(data);
});