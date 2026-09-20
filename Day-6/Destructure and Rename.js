const user = {
  firstName: "Sara",
  lastName: "Khan",
  age: 25
};

const {
  firstName: name,
  lastName,
  age
} = user;

console.log(name);     // Sara
console.log(lastName); // Khan
console.log(age);      // 25