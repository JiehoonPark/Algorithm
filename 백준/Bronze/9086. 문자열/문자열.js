const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const testCount = Number(input[0]);
for (let i = 1; i <= testCount; i++) {
  const string = input[i].trim();
  const first = string[0];
  const last = string[string.length - 1];
  console.log(first + last);
}