const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const numbers = input[0].split(' ');
  const A = parseInt(numbers[0]);
  const B = parseInt(numbers[1]);
  
  const result = A/B;
  console.log(result);
  process.exit();
});