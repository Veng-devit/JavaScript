let day=["Monday", "Tuseday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
console.log(returnDay(1) );// "Monday"
console.log(returnDay(7)); // "Sunday"
console.log(returnDay(4)); // "Thursday"
console.log(returnDay(0)); // null
function returnDay(number){
    if(number<1||number>7) return null;
    return day[number-1];
}