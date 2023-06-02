class Company {
    constructor() {
        this.departments = {};
    }
    addEmployee(name, salary, position, department) {
        let obj = {};

        if (!name || !salary || !position || !department || salary < 0) {
            return `Invalid input!`;
        }
        if (this.departments.hasOwnProperty(department)) {
            obj = {
                name: name,
                position: position,
                salary: salary
            };
            this.departments[department].push(obj);

        } else {
            this.departments[department] = [{
                name: name,
                position: position,
                salary: salary
            }];

        }

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }
    bestDepartment() {
        let total = 0;
        let max = 0;
        let bestDep;
        let employeesDep;
        for (let department in (this.departments)) {
            for (let employees of this.departments[department]) {
                total += employees.salary;
            }
            let current = total / this.departments[department].length;

            if (current > max) {
                max = current;
                bestDep = department;
                employeesDep = this.departments[department];

            }
            current = 0;
            total = 0;
        }
        console.log(`Best Department is: ${bestDep}`)
        console.log(`Average salary: ${max.toFixed(2)}`);
        employeesDep = Object.values(employeesDep).sort((a, b) => {

            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        }).sort((a, b) => b.salary - a.salary);
        for (let employee of employeesDep) {
            console.log(`${employee.name} ${employee.salary} ${employee.position}`)
        }
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());