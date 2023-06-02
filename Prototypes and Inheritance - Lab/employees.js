function solution() {

    class Employee {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        }
        work() {
            return this.tasks.join();
        }

        collectSalary() {
            return `${this.name} received ${(this.getSalary())} this month.`;
        }
        getSalary() {
            return this.salary;
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);

            this.tasks.push(`${name} is working on a simple task.`);
        }

    }



    class Senior extends Employee {
        constructor(name, age, task) {
            super(name, age);
            task =
                `${name} is working on a complicated task.
${name} is taking time off work.
${name} is supervising junior workers.`
            this.tasks.push(task);
        }
    }

    class Manager extends Employee {
        constructor(name, age, task) {
            super(name, age);
            task = `${name} scheduled a meeting.
        ${name} is preparing a quarterly report.`

            this.tasks.push(task);
            this.dividend = 0;

        }
        getSalary() {
            return this.salary + this.dividend;
        }
    }
    return {
        Employee,
        Junior,
        Senior,
        Manager
    }
}
const classes = solution();
// const junior = new classes.Junior('Peter',27); 
//  junior.salary = 1200;
// console.log(junior.collectSalary());
// console.log(junior.work()); 

const senior = new classes.Senior('Pesho', 30);
console.log(senior.work());
// //junior.work();  
senior.salary = 11000;
console.log(senior.collectSalary());

// junior.salary = 5811; 
// console.log(junior.collectSalary());  

const manager = new classes.Manager('Tom', 55);

manager.salary = 15000;
console.log(manager.collectSalary());
manager.dividend = 2500;
console.log(manager.collectSalary());