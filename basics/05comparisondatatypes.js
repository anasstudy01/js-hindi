//comparison bw two same datatyes


console.log(2>1);
console.log(1>=1);
//comparison bw two  different data types
console.log("2">1);
console.log("02">1);
//comparison bw null 
console.log(null>0);   //false 
console.log(null==0); //false
console.l0og(null>=0) // true  due to fIn JavaScript, when comparing different data types, the rules of the comparison algorithm state that null is converted to 0 and undefined is converted to NaN (Not-a-Number). This is why null >= 0 returns true, because null is converted to 0 and 0 is equal to 0



//comparison bw  undefined


console.log(undefined>0);
console.log(undefined==0);
console.log(undefined>=0);