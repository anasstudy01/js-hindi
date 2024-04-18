// let array = [1, 2, 3];
// for(let i = 0;i<array.length;i++){
//     console.log(array[i]);
// }
// //Expected output: 1 2

// all mathe matical table 1 to 10

for (let i = 1; i <= 10; i++) {
  console.log(`outer loop ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j}  = ${i * j}`);
  }
}
