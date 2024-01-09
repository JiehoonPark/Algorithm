let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
let string = "";

for (let i = 0; i < input.length; i++) {
	if (input[i] === input[i].toUpperCase()) {
        string += input[i].toLowerCase()
    }else{
        string += input[i].toUpperCase();
    }
}

console.log(string);