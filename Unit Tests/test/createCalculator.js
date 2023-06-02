// function createCalculator() {
//     let value = 0;
//     return {
//         add: function(num) { 
//             value += Number(num); 
//         },
//         subtract: function(num) { 
//             value -= Number(num); 
//         },
//         get: function() { 
//             return value; 
//         }
//     }
// }
const { createCalculator } = require('./calculator.js');
//const createCalculator = require('./createCalculator');
//const expect = require('chai').expect;
const { expect } = require('chai');

describe('createCalculator', () => {
    let calculator;
  
    beforeEach(() => {
      calculator = createCalculator();
    });
  
    it('should initialize the value to zero', () => {
      expect(calculator.get()).to.equal(0);
    });
  
    it('should add two numbers correctly', () => {
      calculator.add(2);
      calculator.add(3);
      expect(calculator.get()).to.equal(5);
    });

    it('should add negative number and a string correctly', () => {
        calculator.add(-2);
        calculator.add('3');
        expect(calculator.get()).to.equal(1);
      });

    it('should subtract two numbers correctly', () => {
      calculator.subtract(2);
      calculator.subtract(3);
      expect(calculator.get()).to.equal(-5);
    });
  
    it('should handle adding and subtracting decimal numbers', () => {
      calculator.add(2.5);
      calculator.subtract(1.5);
      expect(calculator.get()).to.equal(1);
    });
  });