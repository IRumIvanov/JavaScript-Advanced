function createCalculator() {
    let value = 0;
    return {
        add: function(num) { 
            value += Number(num); 
        },
        subtract: function(num) { 
            value -= Number(num); 
        },
        get: function() { 
            return value; 
        }
    }
}
let calculator = createCalculator();

module.exports = {createCalculator};
//console.log(calculator);
calculator.add(5);
console.log(calculator.get())
calculator.subtract(3);
console.log(calculator.get())
calculator.add('10');
console.log(calculator.get());
calculator.subtract('3');
console.log(calculator.get())