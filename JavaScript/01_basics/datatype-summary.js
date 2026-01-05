// Primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol,BigInt

// const score = 100;
// console.log("typeof score = ",typeof score);

// const scoreValue = 100.3;
// console.log("typeof scoreValue = ",typeof scoreValue);

// const isLoggedIn = false;
// console.log("typeof isLoggedIn = ",typeof isLoggedIn);


// const outsideTemp = null;
// console.log("typeof outsideTemp = ",typeof outsideTemp);


// let userEmail;


// const id = Symbol('123');
// console.log("typeof id = ",typeof id);

// const anotherId = Symbol('123');
// console.log("typeof anotherId = ",typeof anotherId);

// console.log(id == anotherId);

// const bigNumber = 645345865486451465444n;
// console.log(bigNumber);
// console.log("typeof bigNumber = ",typeof bigNumber);




// Reference (Non primitive)

// Array, Objects, Functions

// const heroes = ["shaktiman", "naagraj", "doga"];    //Array
// console.log("typeof heroes = ",typeof heroes);


// let myObj ={            //Object
//     name: "Aman",
//     age : 22,
// }
// console.log("typeof name = ",typeof name);
// console.log("typeof age = ",typeof age);
// console.log("typeof myObj = ",typeof myObj);


// const myFunction = function(){          //Function
//     console.log("Hello world");
    
// }
// console.log("typeof myFunction = ",typeof myFunction);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (Primitive), Heap (Non-Primitive)
let myGmail = "amankumar@gmail.com"

let anotherGmail = "aman@gmail.com"

console.log(myGmail);
console.log(anotherGmail);


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne;
userTwo.email = "aman@google.com"

console.log(userOne.email);
console.log(userTwo.email);
