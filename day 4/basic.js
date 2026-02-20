// ============================================
// BASIC JAVASCRIPT FULL ASSESSMENT - COMPLETE
// ============================================

// ---------------- Section 1 ----------------
// Variables & Assignment

// 1 & 2
let name = "yugesh waran";
let age = 21;
let isStudent = true;

console.log("Name:", name);
console.log("Age:", age);
console.log("Student:", isStudent);

// 3. Swap without third variable
let a = 10;
let b = 20;

a = a + b;
b = a - b;
a = a - b;

console.log("After swap a =", a);
console.log("After swap b =", b);

// 4. Output & reason
let x = 10;
let y = x;
y = 20;
console.log("Value of x:", x); // 10

// 5. const usage
const pi = 3.14;
const radius = 5;
const area = pi * radius * radius;
console.log("Area of circle:", area);

// ---------------- Section 2 ----------------
// Operators

// 6. Arithmetic
let num1 = 25;
let num2 = 5;

console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);
console.log("Remainder:", num1 % num2);

// 7. Predict output
console.log(5 + "5");   // "55"
console.log(5 - "2");   // 3
console.log(true + 1);  // 2

// 8. Compare with 100
let num = 100;

if (num > 100) {
  console.log("Greater than 100");
} else if (num === 100) {
  console.log("Equal to 100");
} else {
  console.log("Less than 100");
}

// 9. Difference between == and ===
console.log(5 == "5");   // true
console.log(5 === "5");  // false

// 10. Logical operator eligibility
let checkAge = 30;

if (checkAge >= 18 && checkAge <= 60) {
  console.log("Eligible");
} else {
  console.log("Not eligible");
}

// ---------------- Section 3 ----------------
// Control Statements

// 11. Even or Odd
let number = 7;

if (number % 2 === 0) {
  console.log("Even number");
} else {
  console.log("Odd number");
}

// 12. FizzBuzz
let n = 15;

if (n % 3 === 0 && n % 5 === 0) {
  console.log("FizzBuzz");
} else if (n % 3 === 0) {
  console.log("Fizz");
} else if (n % 5 === 0) {
  console.log("Buzz");
}

// 13. Switch weekday
let day = 4;

switch(day){
  case 1: console.log("Sunday"); break;
  case 2: console.log("Monday"); break;
  case 3: console.log("Tuesday"); break;
  case 4: console.log("Wednesday"); break;
  case 5: console.log("Thursday"); break;
  case 6: console.log("Friday"); break;
  case 7: console.log("Saturday"); break;
  default: console.log("Invalid");
}

// 14. For loop
console.log("Numbers 1 to 20:");
for(let i=1;i<=20;i++){
  console.log(i);
}

console.log("Even numbers:");
for(let i=1;i<=20;i++){
  if(i%2===0){
    console.log(i);
  }
}

// 15. While loop sum
let N = 5;
let i = 1;
let sum = 0;

while(i <= N){
  sum += i;
  i++;
}
console.log("Sum from 1 to N:", sum);

// 16. Break & Continue
console.log("Break & Continue:");
for(let j=1;j<=10;j++){
  if(j === 5) continue;
  if(j === 8) break;
  console.log(j);
}

// ---------------- Section 4 ----------------
// Functions

// 17. Sum function
function add(x,y){
  return x + y;
}
console.log("Sum:", add(5,6));

// 18. Arrow function
const addArrow = (x,y) => x + y;
console.log("Arrow Sum:", addArrow(10,5));

// 19. Prime check
function isPrime(num){
  if(num < 2) return false;
  for(let i=2;i<=Math.sqrt(num);i++){
    if(num % i === 0) return false;
  }
  return true;
}
console.log("Is 7 prime?", isPrime(7));

// 20. Reverse string
function reverseString(str){
  return str.split("").reverse().join("");
}
console.log("Reverse:", reverseString("JavaScript"));

// 21. Output question
function test(){
  return;
  console.log("Hello");
}
test(); // nothing prints

// 22. Largest number in array
function largest(arr){
  let max = arr[0];
  for(let i=1;i<arr.length;i++){
    if(arr[i] > max){
      max = arr[i];
    }
  }
  return max;
}
console.log("Largest:", largest([4,9,2,15,6]));

// ---------------- Section 5 ----------------
// Integrated challenge - Student grade

let marks = 82;

function calculateGrade(score){
  if(score >= 90) return "A";
  else if(score >= 75) return "B";
  else if(score >= 50) return "C";
  else return "Fail";
}

let finalGrade = calculateGrade(marks);

console.log("Student Marks:", marks);
console.log("Final Grade:", finalGrade);
