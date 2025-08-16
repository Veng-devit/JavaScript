let str = " JavaScript is fun! ";
let text="";
for(let x of str){
   if(x!=' ') text += x.toUpperCase(); 
}
console.log(text);