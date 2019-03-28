// arrow functions don't rebind this

// this references to the person object:
// const person = {
//   name: 'Caro',
//   talk() {
//     console.log('this', this);
//   },
// };

// log this inside a callback function
// the callback function is not part of any object
// it's a stand alone function
// const person = {
//   name: 'Caro',
//   talk() {
//     setTimeout(function() {
//       console.log('this', this);
//     }, 1000);
//   },
// };

// how to print the reference to the person object?
// #1: pattern that we used in the old days:
// const person = {
//   name: 'Caro',
//   talk() {
//     var self = this;
//     setTimeout(function() {
//       console.log('self', self);
//     }, 1000);
//   },
// };

// how to print the reference to the person object?
// #2: arrow function don't rebind this,
// arrow function will inherit the this keyword:
const person = {
  name: 'Caro',
  talk() {
    setTimeout(() => console.log('this', this), 1000);
  },
};

person.talk();
