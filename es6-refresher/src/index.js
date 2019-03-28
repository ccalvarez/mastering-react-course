// Spread Operator
// const first = [1, 2, 3];
// const second = [4, 5, 6];

// Combine arrays:
// #1: The old way:
// const combined = first.concat(second);

// #2: With spread operator:
// const combined = [...first, 'a', ...second, 'b'];
// console.log(combined);

// Clone the first array:
// const clone = [...first];
// console.log(first);
// console.log(clone);

// Spread operator on objects:
// #1: Combine two objects:
const first = { name: 'Mosh' };
const second = { job: 'Instructor' };
// Combine these two objects in one object:
const combined = { ...first, ...second, location: 'Australia' };
console.log('Combined object', combined);

// #2: Clone the first object:
const clone = { ...first };
console.log('Cloned object', clone);
