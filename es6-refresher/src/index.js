// Problem:
// const person = {
//   name: 'Mosh',
//   walk() {
//     console.log('walk');
//   },
// };
// const person2 = {
//   name: 'Mosh',
//   walk() {
//     console.log('walk'); // <- duplicated implementation of walk method!
//   },
// };

// Solution using classes:
class Person {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log(`walk ${this.name}`);
  }
}

const person = new Person('Caro');
const person2 = new Person('Mosh');

person.walk();
person2.walk();
