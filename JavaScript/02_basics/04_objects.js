//  const tinderUser = new object()  // SingleTun object
const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "Aman";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "amankumar@gmail.com",
  fullName: {
    userFullName: {
      firstName: "Aman",
      lastName :"Kumar"
    }
  }
};

// console.log(regularUser.fullName.userFullName.lastName);
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = { obj1, obj2}
console.log(obj3);

// object literal

const mySym = Symbol("key1")
const jsUser = {
    name : "Aman",
    "full name":"Aman kumar",
    [mySym]:"mykey1",
    age: 22,
    email: "amankumar@gmail.com",
    isLoggedIn : false,
    lastLoginDay : ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday","sunday"]
}
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym])
jsUser.email ="amankumar@google.com";
// Object.freeze(jsUser);

jsUser.greeting = function(){
    console.log("Hello js user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello jsUser ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());