function isSymmetric(arr) {
    if (!Array.isArray(arr)){
        return false; // Non-arrays are non-symmetric
    }
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}

const assert = require('chai').assert;

describe('isSymmetry', function() {
    it('should return true when given [10, 20, 30, 20, 10]', function() {
        assert.equal(isSymmetric([10, 20, 30, 20, 10]), true);
      });
      it('should return false when given [true, 1]', function() {
        assert.equal(isSymmetric([true, 1]), false);
      });
      it('should return true when given []', function() {
        assert.equal(isSymmetric([]), true);
      });
      it('should return true when given [ioi]', function() {
        assert.equal(isSymmetric(['ioi']), true);
      });
      it('should return true when given [test, i, test]', function() {
        assert.equal(isSymmetric(['test', 'i', 'test']), true);
      });
      it('should return true when given [10, undefined, undefined, 10]', function() {
        assert.equal(isSymmetric([10, undefined, undefined, 10]), true);
      })
      it('should return false when given ioi', function() {
        assert.equal(isSymmetric('ioi'), false);
      })
})
