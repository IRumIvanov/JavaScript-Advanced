Array.prototype.last = function () {
    return this[this.length - 1];
};

let arrayTwo = ['first', 'second', 'third'];
console.log(arrayTwo.last());

Array.prototype.skip = function (n) {
    let result = [];
    for (let i = n; i < this.length; i++) {
        result.push(this[i]);
    }
    return result;
}
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.skip(2));

Array.prototype.take = function (n) {
    let result = [];

    for (let i = 0; i < n; i++) {
        result.push(this[i]);
    }
    return result;
}
let arr1 = ['one', 'two', 'three', 'four', 'five'];
console.log(arr1.take(3));