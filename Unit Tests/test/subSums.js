function result(arr, start, end) {
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


const assert = require('chai').assert;

describe('result', function() {
    it('should return 150 when given [10, 20, 30, 40, 50, 60] and 3 and 300', function() {
        assert.equal(result([10, 20, 30, 40, 50, 60], 3, 300), 150);
      });
      it('should return 3.3 when given [1.1, 2.2, 3.3, 4.4, 5.5] and -3 and 1', function() {
        assert.equal(result([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1), 3.3);
      });
      it('should return NaN when given [10, twenty, 30, 40] and 0 and 2', function() {
        assert.equal(result([10, 'twenty', 30, 40], 0, 2), NaN);
      });
      it('should return 0 when given [] and 1 and 2', function() {
        assert.equal(result([], 1, 2), 0);
      });
      it('should return NaN when given text and 0 and 2', function() {
        assert.equal(result('text', 0, 2), 'NaN');
      });
})