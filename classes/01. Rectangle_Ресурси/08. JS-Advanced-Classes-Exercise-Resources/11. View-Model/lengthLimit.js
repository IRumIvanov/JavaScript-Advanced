class Stringer {
    constructor(string, length) {
        this.string = string;
        this.length = length;
        this.stringer = this.string;
    }
    decrease(number) {
        this.length -= number;
        if (this.length < 0) {
            this.length = 0;
            this.string = `...`;

        } else if (this.length == 0) {
            this.string = `...`;
        } else {

            this.string = this.string.substring(0, this.length) + `...`;
        }

    }
    increase(number) {
        this.length += number;
        this.string = this.stringer.slice(0, number);
    }
    toString() {
        return this.string;
    }

}
let test = new Stringer("Viktor", 6);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
test.increase(4);
console.log(test.toString());