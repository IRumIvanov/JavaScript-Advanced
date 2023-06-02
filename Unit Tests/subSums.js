function sum(arr, start, end) {
  
  if (!Array.isArray(arr)) {
    return NaN;
  }
  start = Math.max(start, 0);
  end = Math.min(end, arr.length - 1);
  let sum = 0;
  for (let i = start; i <= end; i++) {
   
    sum += Number(arr[i]);
  }
  return sum;
}

console.log(sum([10, 'twenty', 30, 40], 0, 2))
// console.log(sum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
// console.log(sum([10, 20, 30, 40, 50, 60], 3, 300));
// console.log(sum([], 1, 2));