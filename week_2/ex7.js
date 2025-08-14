console.log(sumArray([1,2,3])); // 6
console.log(sumArray([2,2,2,2])); // 8
console.log(sumArray([50,50,1])); // 101
function sumArray(arr){
    sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}