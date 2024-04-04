// const tinderUser = new Object();
// console.log(tinderUser);  // singleton object  


const tinderUser ={}

tinderUser.id ="123abc"
tinderUser.name = "sam"
tinderUser.isLoggedin = false


// console.log(tinderUser);

const regularUser = {
    email: 'regular@gmail.com',
    fullname: {username:{firstname:"sam",lastname:"wilson"}},
    password: 'password'
}

console.log(regularUser.fullname.username.firstname)

const obj1 = {1:"a",2:"b"}
const obj2 ={3:"c",4:"d"}
// const obj3 = {...obj1,...obj2}; // ... it is used to collect multiple elements or arguments into a single array

// console.log(obj3);               

const obj3 = Object.assign({},obj1,obj2);
console.log(obj3);   



