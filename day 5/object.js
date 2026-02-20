// ============================================
// OBJECT LITERALS + ARRAY METHODS FULL CODE
// ============================================

// ---------- Object Literal ----------
const user = {
  name: "Sam",
  age: 27,
  isAdmin: false
};

console.log("Name:", user.name);
console.log("Age:", user["age"]);

// Add & modify
user.city = "Chennai";
user.age = 29;

// Delete
delete user.isAdmin;

console.log("Updated user:", user);

// ---------- Nested Object ----------
const person = {
  name: "Sam",
  address: {
    city: "Chennai",
    pincode: 600001
  }
};

console.log("City:", person.address.city);

// ---------- Destructuring ----------
const student = {
  name: "Kishore",
  age: 21,
  city: "Pondicherry"
};

// basic destructuring
const { name, age } = student;
console.log(name, age);

// rename
const { name: username } = student;
console.log("Username:", username);

// default value
const { role = "student" } = student;
console.log("Role:", role);

// nested destructuring
const user2 = {
  id: 1,
  address: {
    city: "Chennai"
  }
};

const { address: { city } } = user2;
console.log("Nested city:", city);

// ---------- Array Destructuring ----------
const arr = [10,20,30];
const [a,b] = arr;
console.log("a:",a,"b:",b);

const [first, , third] = arr;
console.log("First:",first,"Third:",third);

// ---------- Object Methods ----------
const userObj = {
  name: "Sam",
  greet() {
    return "Hello " + this.name;
  }
};

console.log(userObj.greet());

// ---------- this keyword ----------
const userThis = {
  name: "Kishore",
  show(){
    console.log("This name:", this.name);
  }
};
userThis.show();

// Arrow function issue
const wrong = {
  name: "Sam",
  greet: () => {
    console.log(this.name); // undefined
  }
};
wrong.greet();

// ---------- Array Methods ----------
const numbers = [1,2,3,4,5];

// map
const doubled = numbers.map(n => n*2);
console.log("Map doubled:", doubled);

// filter
const even = numbers.filter(n => n%2===0);
console.log("Even numbers:", even);

// reduce (sum)
const sum = numbers.reduce((acc,curr)=>acc+curr,0);
console.log("Sum:", sum);

// forEach
numbers.forEach(n=>console.log("forEach:",n));

// find
const found = numbers.find(n=>n>3);
console.log("Find >3:", found);

// some
console.log("Some >4:", numbers.some(n=>n>4));

// every
console.log("Every >0:", numbers.every(n=>n>0));

// ---------- Sorting ----------
const nums = [10,5,20,2];

// ascending
nums.sort((a,b)=>a-b);
console.log("Ascending:", nums);

// descending
nums.sort((a,b)=>b-a);
console.log("Descending:", nums);

// ---------- Sorting objects ----------
const users = [
  {name:"A", age:25},
  {name:"B", age:20},
  {name:"C", age:30}
];

users.sort((a,b)=>a.age-b.age);
console.log("Sorted by age:", users);

// ---------- Real MERN style examples ----------

// Extract emails
const data = [
  {email:"a@gmail.com"},
  {email:"b@gmail.com"}
];

const emails = data.map(u=>u.email);
console.log("Emails:", emails);

// Filter price > 1000
const products = [
  {name:"Phone", price:15000},
  {name:"Pen", price:20}
];

const costly = products.filter(p=>p.price>1000);
console.log("Costly:", costly);

// Cart total
const cart = [
  {price:100},
  {price:200},
  {price:300}
];

const total = cart.reduce((t,item)=>t+item.price,0);
console.log("Cart total:", total);
