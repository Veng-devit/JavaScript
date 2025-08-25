const students=[
    { name: "Alice", score: 85 },
    { name: "Bob", score: 92 },
    { name: "Charlie", score: 78 }
];
const result=students.map(student=>{
    if(student.score>=80) return `${student.name}: Passed`;
    else return `${student.name}: Failed`;
});
console.log(result);