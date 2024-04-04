const accountId=1446;
let accountEmail = "anas@gmail.com";
var accountpassword = "12345";
accountCity = "chandigarh";

// accountId =23; not allows due to reassignment of const variable
console.log(accountId);

accountEmail = "hritick@yahoo.com"; // allowed as it is a varibale and can be changed
accountpassword = "2323232";
console.log(accountEmail);

console.table( [accountId, accountEmail,accountpassword, accountCity] ); // console.table is used to show var in table form 
// if your create a var and didnt assign any value then  the default value is undefined ..