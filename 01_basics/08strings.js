const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('chandigarh is  the capital of which state');

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('d'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Delhi    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://anasisone//developwer"

console.log(url.replace("one","king"))

console.log(url.includes('developwer'))

console.log(gameName.split(' '));