
// creating variable to check conversion 
let score = 33;

// both the ways gives same output first  is funciton  and second one is method 
console.log(typeof score); // Output: 33
console.log(typeof (score));



// if your alredy define datatype  then js forfully conver the input to  number
let valueinNumber = Number(score);
console.log(typeof valueinNumber);
console.log(valueinNumber);


// converion outputs
/*  "33" = 33
true = 1
33abc =  NaN

*/
