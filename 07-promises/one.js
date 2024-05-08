// const promiseOne = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("chalie intelligent hai");
//     resolve("promise one resolved");
//   }, 2000);
// });

// promiseOne.then((data) => {
//   console.log("promised consumed");
//   console.log(`your data : ${data}`);
// });

// /// promise with catching error

// const promiseTwo = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("mission started");

//     let error = false;
//     if (!error) {
//       resolve("your code is clean");
//     } else {
//       reject("promise two rejected");
//     }
//   }, 2000);
// });

// promiseTwo
//   .then(function (message) {
//     console.log(message);
//   })

//   .catch(function (message) {
//     console.log(message);
//   });

// ////  dot the chaining

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let data = { name: "anas", state: "chnadigarh", username: "anasstudy" };
//     resolve(data);
//     reject("invalid input ");
//   }, 1000);
// });

// promiseThree
//   .then(function (data) {
//     console.log(data);
//     return data.state;
//   })

//   .then(function (state) {
//     console.log(state);
//   });

  fetch('https://jsonplaceholder.typicode.com/posts/1')
 .then(response => response.json())
 .then(data => console.log(data))
 .catch(error => console.error(error));