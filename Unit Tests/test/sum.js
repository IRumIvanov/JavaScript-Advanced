function sum(arr) {
    let sum = 0;
    // if (!Array.isArray(arr)) {
    //     return 'Invalid input!';
    //   }
    // if(arr.length == 0){
    //     sum = 0;
    // }
    for (let num of arr){
        num = Number(num);
       
        sum += num;
        
    }
    return sum;
}

const assert = require('chai').assert;

describe('sum', function() {
    it('should return 210 when given [10, 20, 30, 40, 50, 60]', function() {
        assert.equal(sum([10, 20, 30, 40, 50, 60]), 210);
      });
      it('should return 2 when given [true, 1]', function() {
        assert.equal(sum([true, 1]), 2);
      });
      it('should return 0 when given []', function() {
        assert.equal(sum([]), 0);
      });
    //   it('should return Invalid input! when given 10', function() {
    //     assert.equal(sum(10), 'Invalid input!');
    //   });
      
})
