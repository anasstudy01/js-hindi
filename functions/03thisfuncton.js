// const user = {
//     username:"John Doe",    
//     price:999
//     ,
//     welcomeMessage: function(){
//         console.log(`welcome ${this.username} to our website `)
//         console.log(this);
//     }
  
// }

// user.welcomeMessage();
//  user.username="samwilson";
//  user.welcomeMessage();
// // console.log(this);
 
// const one =()=>{
// console.log("this is basic fn")
// console.log(this); // arrow funcion does not support .this   
// }

// one();

const addTwo = (num1, num2)=> {
return num1 +num2

}
console.log(addTwo(5,3));

// implecite return fuction -one liner

const addThree = (num1,num2,num3)=>num1+num2+num3
console.log(addThree(1,2,3));

