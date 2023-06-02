function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255)){
        return undefined; // Red value is invalid
    }
    if (!Number.isInteger(green) || (green < 0) || (green > 255)){
        return undefined; // Green value is invalid
    }
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255)){
        return undefined; // Blue value is invalid
    }
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}

const assert = require('chai').assert;

describe('rgbToHex', function() {
    it('should return #6FDE32 when given 111, 222, 50', function() {
        assert.equal(rgbToHexColor(111, 222, 50), '#6FDE32');
      });
      it('should return undefined when given red, 16, 15', function() {
        assert.equal(rgbToHexColor('red',16,15), undefined);
      });
      it('should return undefined when given 300, 100, 150', function() {
        assert.equal(rgbToHexColor(300,100,150), undefined);
      });
      it('should return undefined when given [], 16, 16', function() {
        assert.equal(rgbToHexColor([], 16, 16), undefined);
      });
      it('should return undefined when given 60, 50, -2', function() {
        assert.equal(rgbToHexColor(60, 50, -2), undefined);
      });
      it('should return #3C3214 when given 60, 50, 20', function() {
        assert.equal(rgbToHexColor(60, 50, 20), '#3C3214');
      });
      it('should return #006400 when given 0, 100, 0', function() {
        assert.equal(rgbToHexColor(0, 100, 0), '#006400');
      });
      it('should return #FF3214 when given 255, 50, 20', function() {
        assert.equal(rgbToHexColor(255, 50, 20), '#FF3214');
      });
})
