const inputs = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

let string = inputs[0].toString();
let number = Number(inputs[1]);

console.log(string[number-1])