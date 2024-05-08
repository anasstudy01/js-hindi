// let myName = "mohdanas    "

// console.log(myName.length)

// // first  way to delete all emply spaces 
// // console.log(myName.trim().length)


let myHeroes = ["thor","spiderman"]
let heroPower = {
    thor:"hammer",spiderman:"sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}

Object.prototype.anas = function(){
    console.log("anas is preset is all objects")
}
// heroPower.anas();
// myHeroes.anas();

Array.prototype.heyAnas = function(){
    console.log(`anas is also preset in array`);
}



