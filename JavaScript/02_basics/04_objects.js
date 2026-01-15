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

console.log(regularUser.fullName.userFullName.firstName.lastName);