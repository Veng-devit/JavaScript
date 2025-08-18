// combine array
let arr1=[1,2,3];
let arr2=[4,5,6];
let mixArr=[...arr1,...arr2];
console.log(mixArr);

//combine object
const a = { x: 1, y: 2 };
const b = { y: 3, z: 4 };
const mixObj={...a,...b};
console.log(mixObj);