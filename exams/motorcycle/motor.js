const assert = require('chai').assert;
//const motorcycleRider = require('./motorcycleRider');

describe('motorcycleRider', function () {

  describe('licenseRestriction', function () {
    it('should return information for AM category', function () {
      assert.equal(motorcycleRider.licenseRestriction('AM'), 'Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.');
    });
    it('should return information for A1 category', function () {
      assert.equal(motorcycleRider.licenseRestriction('A1'), 'Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.');
    });
    it('should return information for A2 category', function () {
      assert.equal(motorcycleRider.licenseRestriction('A2'), 'Motorcycles with maximum power of 35KW. and the minimum age is 18.');
    });
    it('should return information for A category', function () {
      assert.equal(motorcycleRider.licenseRestriction('A'), 'No motorcycle restrictions, and the minimum age is 24.');
    });
    it('should throw an error for invalid input', function () {
      assert.throw(() => motorcycleRider.licenseRestriction('Invalid information!'), Error);
    });
  });

  describe('motorcycleShowroom', function () {
    it('should return the correct number of available bikes', function () {

      assert.equal(motorcycleRider.motorcycleShowroom([50, 75, 100, 125, 150], 125), `There are 3 available motorcycles matching your criteria!`);
    });
    it('should throw an error for invalid input', function () {
      assert.throw(() => motorcycleRider.motorcycleShowroom([50, 75, 100, 125, 150], 'Invalid information!'), Error);
    });
  });

  describe('otherSpendings', function () {
    it('should return the correct price without discount', function () {
      assert.equal(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], false), 'You spend $600.00 for equipment and consumables!');
    });
    it('should return the correct price with discount', function () {
      assert.equal(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], true), 'You spend $540.00 for equipment and consumables with 10% discount!');
    });
    it('should throw an error for invalid input', function () {
      assert.throw(() => motorcycleRider.otherSpendings(['helmet', 'jacked'], 'Invalid information!', true), Error);
    });
  });

});