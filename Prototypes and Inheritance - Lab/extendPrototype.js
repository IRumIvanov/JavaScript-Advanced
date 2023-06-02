function Person(firstName, lastName) {
    const result = {
        firstName,
        lastName
    }
    Object.defineProperty(result, 'fullName', {
        get() {
            return `${this.firstName} ${this.lastName}`;
        },
        set(value) {
            let [_firstName, _lastName] = value.split(' ');
            this.firstName = _firstName;
            this.lastName = _lastName;
            return `${this.firstName} ${this.lastName}`;
        }

    })

    return result;
}
Person.prototype.species = "Human";
Person.prototype.toSpeciesString = function () {
    return `I am a ${this.species}. ${this.toString()}`;
}


console.log(Person('Ina', 'Ivanova'));
console.log(Person.prototype.species)