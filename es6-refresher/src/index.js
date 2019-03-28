// walk is a method in the person object
// talk is another method, ES6 syntax, drop colon and function keyword
const person = {
  name: 'Mosh',
  walk: function() {},
  talk() {},
};

// two ways to access members
// dot notation:
person.talk();

const targetMember = 'name';
// bracket notation:
// person['name'] = 'Caro';
person[targetMember] = 'Caro';
console.log(person.name);
