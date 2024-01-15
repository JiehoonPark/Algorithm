let input = require('fs').readFileSync('/dev/stdin').toString();

function factorial(integer) {
    if (integer <= 1) {
        return 1;
    }
    
    return integer * factorial(integer - 1);
}

console.log(factorial(input));