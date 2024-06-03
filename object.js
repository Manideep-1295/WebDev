let salaries = {
  john: 100,
  pete: 200,
  mary: 250,
};

console.log("Names of the employees : ", Object.keys(salaries));
console.log("Salaries of the employees : ", Object.values(salaries));

// Task 5
const movieUrl = (domain, genre, year) =>
  "https://" + domain + "?genere=" + genre + "&year=" + year;

console.log(movieUrl("imdb.com", "thriller", 2020));

//Refactoring - Better Quality & Same Functionality
const movie_Url = (domain, genre, year) =>
  `https://${domain}?genere=${genre}&year=${year}`;

console.log(movie_Url("imdb.com", "thriller", 2020));

//Array Destructuring
const [t1, t2] = [100, 200]; // Concept is unpacking the array.
const [x1, x2, x3] = [100, 200]; // x3 will be undefined
const [y1, y2, y3 = 10] = [30, 20]; // Default values (y3 = 10), these values can be taken only when undefined

const [z1, z2, z3 = 10] = [10, 20, null]; // z3 will be 'null' because it will assign only when undefined

const [a1, a2, a3 = 10] = [10, 20, undefined]; // z3 will be 10 because it will assign only when undefined
//Holes
const [, b1, b2, b3 = 10] = [10, 20, null]; // b1 = 20, b2 = null, b3 = 10 // ',' is used to skip the values

// Object Destructuring
/*
const {age, name, networth, skill =["ASDF"]}={
    age : 21,
    name : "Mani",
    networth : "💵💵💵",
    addr : "Kmm",
};
console.log(skill);
*/

const avenger = {
  name: "asd",
  age: 21,
  networth: "💵💵💵",
  phrase: "❤️ you 3000",
};

const { name, networth, skill = "Fire shots" } = avenger; // Object Destructuring
console.log(skill);

//Task - 6
const cart = [
  { name: "Apple", price: 0.5, quantity: 4 },
  { name: "Banana", price: 0.25, quantity: 6 },
];

const newItems = [
  { name: "Cherry", price: 0.75, quantity: 5 },
  { name: "Date", price: 1, quantity: 3 },
];

//   Ex 1.1: Combine cart + newItems
const Fruits = [...cart, ...newItems];
console.log(Fruits);

let ans = 0;
for (let { price, quantity } of Fruits) {
  console.log("The price is : ", price);
  console.log("The qunatity is : ", quantity);
  console.log("Total price of this fruit is : ", price * quantity);
  ans += price * quantity;
}
console.log(ans);

let str = "This is beautiful";
console.log(str.split(" "));

// Task 6
function transformSentence(sentence) {
  return sentence.toUpperCase().split(" ").reverse().join(" ");
}

const transformSentence2 = (sentence) =>
  sentence.toUpperCase().split(" ").reverse().join(" ");

let sentence = "Hello world from JavaScript";
let transformed = transformSentence2(sentence);
console.log(transformed);
// Output: "JAVASCRIPT FROM WORLD HELLO"

// Task 7: Improving code quality

function processNames1(names) {
  let result = [];

  for (let i = 0; i < names.length; i++) {
    let upperCaseName = names[i].toUpperCase();
    let nameParts = upperCaseName.split(" ");
    let joinedName = nameParts.join("_");
    result.push(joinedName);
  }
  return result;
}

function processNames2(names) {
  let result = [];
  for (let i = 0; i < names.length; i++) {
    result.push(names[i].toUpperCase().split(" ").join("_"));
  }
  return result;
}

function processNames3(names) {
  let result = [];
  for (let i in names) {
    result.push(names[i].toUpperCase().split(" ").join("_"));
  }
  return result;
}

function processNames4(names) {
  let result = [];
  for (let i of names) {
    result.push(i.toUpperCase().split(" ").join("_"));
  }
  return result;
}

const processNames5 = (names) =>
  names.map((i) => i.toUpperCase().split(" ").join("_"));

const namesArray = ["john doe", "jane smith", "alice jones"];
console.log(processNames5(namesArray));
