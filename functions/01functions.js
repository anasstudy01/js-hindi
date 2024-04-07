function sayMyName() {
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(num1, num2) {
  let result = num1 + num2;
  return result;
}
const result = addTwoNumbers(5, 7);
// console.log(result);

function loginuser(username) {
  return `Welcome ${username} just loged in`;
}
// console.log(loginuser("anas"));



function validateusername (username){
if(!username){console.log(`reenter the username`)}
else return `welsome ${username} go ahead with your journey`


}

const  user=validateusername("ibrah");
// console.log(user);


function calcuatecartprice (...num1){
    return num1
}




cartprice =calcuatecartprice(90,20,30,40);
// console.log(cartprice);


const user1 ={
  username: "Anas",
  password:"123456",
  email :"Abdulaziz@gmail.com",
  phone :"+966589456321",
}

function handleobject (objects)
{
console.log(`the name of the user is ${objects.username} and passowrd is  ${objects.password}`);
}

handleobject(user1);







