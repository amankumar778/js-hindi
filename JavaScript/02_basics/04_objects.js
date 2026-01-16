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
const obj4 = {5:"a", 6:"b"}
// const obj3 = { obj1, obj2}
// const obj3 = Object.assign({},obj1,obj2, obj4);

const obj3 ={...obj1,...obj2,...obj4}
// console.log(obj3);

const users = [
  {
    id:1,
    email:"abc@gmail.com"
  },
  {
    d:3
  }
]
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// Destructuring
const course = {
  courseName : "js in hindi",
  price: "999",
courseInstructor :"Aman"
}

// course.courseInstructor
const {courseInstructor : instructor} =course 
console.log(instructor);
// {
//   "name":"Aman",
//   "courserName" : "js in hindi",
//   "price":"free"
// }
[
  {},
  {},
  {}
]