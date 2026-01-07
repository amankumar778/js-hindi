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