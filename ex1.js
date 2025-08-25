const fruits=["apple", "banana", "cherry"];
fruits.push("mango", "orange");
console.log("Push:", fruits);
fruits.pop();
console.log("Pop:", fruits);
fruits.splice(1,1,"grape", "kiwi");
console.log("Final Answer:",fruits);