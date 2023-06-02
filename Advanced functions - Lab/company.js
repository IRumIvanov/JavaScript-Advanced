class Company {
    constructor() {
        this.departments = {};
    }
    addEmployee(name, salary, position, department) {
        if (!name || !salary || !position || !department || salary < 0) {
            throw new Error('Invalid input!');
        };
        if (!this.departments[department]) {
            this.departments[department] = [];

        };
        this.departments[department].push({
            name: name,
            salary: salary,
            position: position
        });

        return this.departments //`New employee is hired. Name: ${name}. Position: ${position}`
    }
    bestDepartment() {
        for (let department of Object.keys(this.departments)) {
            let average = 0;
            for (let i = 0; i < this.departments[department].length; i++) {
                average += this.departments[department][i].salary;
            }
            average /= this.departments[department].length;
        }
    }
}


let c = new Company();
(c.addEmployee("Pesho", 1500, "electrical engineer", "Construction"));
console.log(c.addEmployee("Stanimir", 2000, "engineer", "Construction"));
// c.addEmployee("Slavi",500,"dyer","Construction");
// c.addEmployee("Stan",2000,"architect","Construction");
// c.addEmployee("Stanimir",1200,"digital marketing manager", "Marketing");
// c.addEmployee("Pesho",1000,"graphical designer", "Marketing");
// c.addEmployee("Gosho",1350,"HR","Human resources");
console.log(c.bestDepartment());