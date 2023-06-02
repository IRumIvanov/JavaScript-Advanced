const pointOne = {};
const pointTwo = pointOne;
pointTwo.x = 10;
delete pointOne.x;
console.log(pointTwo.x);

const letters = ['a', 'e', 'c', 'b', 'd'];
const lettersCopy = letters;
lettersCopy.sort();
console.log(letters);

const person = {
  name: 'Pesho'
};
const modify = (p) => {
  p.name = 'Gosho';
};
modify(person);
console.log(person.name);

const user1 = {
  name: 'Pesho'
};
const user2 = {
  ...user1
};
user2.name = 'Gosho';
user2.age = 30;
console.log(`${user1.name} ${user1.age} ${user2.name} ${user2.age}`);

let obj1 = {};
const obj2 = {};

obj1.key = 'value';
obj2.key = 'value';

console.log(obj1.key);
console.log(obj2.key);