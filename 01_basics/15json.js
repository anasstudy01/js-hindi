// json is a objectsJSON (JavaScript Object Notation) is a lightweight data format that is used to store and exchange data between a server and a web application. It is a text format that is completely language independent, but it is often used in JavaScript because JavaScript provides a direct mapping between JSON and JavaScript objects.
const o1bj = {
    "name": "John",
    "age": 30,
    "isMarried": true,
    "hobbies": ["music", "movies"]
  }
//   In JavaScript, you can create a JSON object by using the JSON.stringify() method, and you can parse a JSON string back into a JavaScript object by using the JSON.parse() method.

// Here is an example:

// javascript
// Copy code
const obj = {
  name: 'John',
  age: 30,
  isMarried: true,
  hobbies: ['music', 'movies']
};

const jsonStr = JSON.stringify(obj);
console.log(jsonStr); // "{"name":"John","age":30,"isMarried":true,"hobbies":["music","movies"]}"

const jsonObj = JSON.parse(jsonStr);
console.log(jsonObj); // {name: 'John', age: 30, isMarried: true, hobbies: Array(2)}
// JSON is a very useful data format when working with APIs, where the data is transmitted as strings. By using JSON, you can convert the string back into a JavaScript object, which is much easier to work with