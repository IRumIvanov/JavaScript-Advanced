function sum(arr) {
    let sum = 0;
    if (!Array.isArray(arr)) {
        return 'Invalid input!';
      }
    if(arr.length == 0){
        sum = 0;
    }
    for (let num of arr){
        num = Number(num);
        
        sum += num;
        
    }
    return sum;
}

console.log(sum(10));
console.log(sum(['one', 1]))