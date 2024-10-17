//WAP to print Fibonacci series.
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 0; i <= 10; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
// WAP to reverse a number.

let num = 57439;
let reverse = 0;

while (num > 0) {
    console.log(num, reverse);

    let d = num % 10;
    reverse = reverse * 10 + d;
    num = parseInt(num / 10);
}
console.log(reverse);
