function solve() {
   let arr = [];

   let add = (number) => arr.push(number);
   let remove = (index) => arr.splice(1, checkIndex(index));
   let get = (number) => {
      if (checkIndex(number) == true) {
         return arr[number];
      }
   }
   let result = {
      add,
      remove,
      get,
      size: 0
   }

   function checkIndex(index) {
      return index >= 0 && index < arr.length;
   }
   return result;
}
let list = solve();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));