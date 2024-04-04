//singleton  =  any objects  that only has one instance in can be crated with constructor only , singleton is a private const.

// objects literal = the way to define objects

const mySym = Symbol("key1"); // declaration of symbol

const Jsuser = {
  name: "mohdanas",
  [mySym]: "value1", // using  symbol
  age: 23,
  locaton: "Chandigarh",
  "full name": "mohdanassalmani",
  email: "mohdanas@gmail.com",
  isLooggedIn: false,
  lastLoginDays: ["monday", "saturday"],
};

console.log(Jsuser);
console.log(Jsuser.email);
console.log(Jsuser["email"]);
console.log(Jsuser["full name"]);
console.log(Jsuser[mySym]);

// changing the value of object

Jsuser.email = "newmail@yahoo.com";

console.log(Jsuser.email);

//// freezing the objects values

// Object.freeze(Jsuser);

Jsuser.greeting = function () {
  console.log("hello mr anas ");
};

console.log(Jsuser.greeting());

Jsuser.gretingTwo =function () {
    console.log(`Hello ${this.name}`);

}
console.log(Jsuser.gretingTwo())
