// walk is a method in the person object
// talk is another method, ES6 syntax, drop colon and function keyword
const person = {
  name: 'Mosh',
  walk() {
    console.log(this);
  },
  talk() {},
};

person.walk(); // <- we get reference to the object

const walk = person.walk;
console.log(walk);

walk(); // <- we get reference to the window object
