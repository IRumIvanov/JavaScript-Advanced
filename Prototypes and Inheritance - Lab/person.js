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


let person = new Person("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla