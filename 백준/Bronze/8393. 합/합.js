const input = require("fs").readFileSync("/dev/stdin").toString();

let count = 0;
for (i = 1; i <= input; i++) {
    count = count + i;
}
console.log(count);