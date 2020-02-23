const Calculator = require('./MathOperation');

a = 1;
b = 2;

c = Calculator.sum(a, b);
d = Calculator.product(a, b);
e = Calculator.divide(a, b);
f = Calculator.square(a);
d = Calculator.subtract(a, b);
j = Calculator.square_root(a);


console.log("the addition is: " + c);
console.log("the product is " + d);
console.log("the divison is: " + e);
console.log("the square is: " + f);

console.log("the answer for the subtract is: " + d);
console.log("the squareroot is :" + j);


