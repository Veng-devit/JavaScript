const numbers=[5, 12, 8, 130, 44];
const extract=numbers.slice(1,4);
console.log("Extract:", extract);
const checkAge=age=>age>10;
const result=numbers.filter(checkAge);
console.log("Result:", result);

