// Named functions: A named function is a function that has a name, which can be used to call the function.
// javascript
// Copy code
function greet() {
  console.log("Hello, world!");
}
greet(); // 'Hello, world!'
// Anonymous functions: An anonymous function is a function that does not have a name. It is often used as an argument to another function or assigned to a variable.
// javascript
// Copy code
const greet1 = function () {
  console.log("Hello, world!");
};
greet1(); // 'Hello, world!'
// Arrow functions: An arrow function is a shorthand syntax for defining a function. It is often used for simple, one-line functions.
// javascript
// Copy code
const greet3 = () => console.log("Hello, world!");
greet(); // 'Hello, world!'
// Immediately-invoked function expressions (IIFEs): An IIFE is a function that is invoked immediately after it is defined. It is often used to create a scope for variables and avoid polluting the global namespace.
// javascript
// Copy code
(function () {
  console.log("Hello, world!");
})(); // 'Hello, world!'
// Constructor functions: A constructor function is a function that is used to create objects. It is called with the new keyword and is used to define the properties and methods of the object.
// javascript
// Copy code
function Person(name) {
  this.name = name;
}
const john = new Person("John");
console.log(john.name); // 'John'
// Generator functions: A generator function is a function that can be paused and resumed, allowing it to produce a sequence of values. It is called with the function* syntax and is used to define a generator object.
// javascript
// Copy code
function* idMaker() {
  let index = 0;
  while (true) {
    yield index++;
  }
}
const gen = idMaker();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
// These are some of the most common types of functions in JavaScript. Each type has its own syntax and use cases, and it's important to understand the differences between them to write effective and efficient code.
