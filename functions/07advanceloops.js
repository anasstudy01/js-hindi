/////////                              for of loops :

//  note :It's important to note that the for...of loop can only be used with iterable objects. If you try to use it with a non-iterable object, you will get a syntax error.
 const arr = [1, 2, 3, 4, 5, 6, "chandigarh"];
 for (const item of arr) {
//    console.log(item);
 }

 const greetings = "hello world";
 for (const albhabets of greetings) {
//    console.log(`the alphabets of  greeting are  ${albhabets}`);
 }
 const states = [1, 2, 3, 4, 5, 6, 7, 8];
 for (const value of states) {
//    console.log(`the vlaue of states is ${value}`);
 }

//                    maps in js
const map = new Map();
 map.set("IN","india")
/map.set("EN","usa")
 map.set("ING","uk")
 map.set("IN","india")
// console.log(map);


 for(const key of map){
   //  console.log(key)
 }

for(const [key,value] of map){
   // console.log(key,"--",value);
 }

const bhidu = {game1:"Needfor speed",game2:"callofduty", game3:"Cricket"};
 //console.log(bhidu);
 // for of not work wih obj directly because its not iteratatble objects 


const language = {js:"javascript",cpp:"c++",java:"java",rb:"ruby",swift:"swift by apple"};
//console.log(language);


// for in loop is used for objects to print all values nad keys 

for (const key in language){
    // console.log(`the name of lng is ${key} and the shortform is ${language[key]}`);
}



// for each loops 


const coding = [ "python","php","java","c#"];
// coding.forEach((element,value) => {
//     console.log(`i like ${element} and their value are ${value}`);
// });



// coding.forEach( function (item){console.log(`I like ${item}`)})



function printme(item){
    console.log( `I love ${item}` );
}


coding.forEach(printme);