function multiply(a, b) {
    return a * b;
  }
  
const assert = require('chai').assert;

describe('multiply', function() {
  it('should return 4 when given 2 and 2', function() {
    assert.equal(multiply(2, 2), 4);
  });

  it('should return -6 when given -3 and 2', function() {
    assert.equal(multiply(-3, 2), -6);
  });

  it('should return 0 when given 0 and any number', function() {
    assert.equal(multiply(0, 100), 0);
    assert.equal(multiply(0, -1), 0);
  });
});