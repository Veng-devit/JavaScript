const readlineSync=require('readline-sync');
let firstName=readlineSync.question('Enter your first name: ');
let lastName=readlineSync.question('Enter your last name: ');
console.log("Hello, my name is " + firstName + lastName);