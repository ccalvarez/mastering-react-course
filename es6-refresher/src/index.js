// var -> function
// let -> block
// const -> block

// prefer const over let, never use var

// i is accessible inside the function
// function sayHello() {
//   for (var i = 0; i < 5; i++) {
//     console.log(i);
//   }

//   console.log(i);
// }

// i is only accessible inside of the for block
// function sayHello() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log(i);
// }

// sayHello();

const x = 1;
x = 2;
