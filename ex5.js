const expenses = [120, 75, 300, 50];
let sum = 0;
expenses.forEach(expense => {
  console.log("Expense recorded: $" , expense);
  sum += expense;
});
console.log("Total expenses: $" ,sum);