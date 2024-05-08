function SetUsername(username){
    this.username = username
console.log("called username");
}

function createUser(username,email,passowrd){


    SetUsername.call(this,username)
    this.email=email
this.password = passowrd;



}

user1 = new createUser("coderwibes","anas@example.com","1234")

console.log(user1)