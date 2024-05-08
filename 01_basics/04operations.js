let value =3;
let negValue = -value;
console.log(negValue); 


console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/2);
console.log(2%2);



let str1 ="hello"
let str2 ="hitesh"
let str3 =str1+str2
console.log(str3);

console.log(2+"2");
console.log("2"+2);
console.log("1"+2+2);// if fist number is string then they all treat as string 
console.log(2+2+"1");// if fist number is number then first it complete the operation then add string 
console.log(true);
console.log(typeof true);
console.log(+true); // + operator convert boolean to Number     


// prefix and postfix increment 
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
