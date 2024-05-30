const marks = [80, 90, 100];

// More Control over the loop
for (let i = 0; i < marks.length; i++) {
  console.log("Index : " + i + ", Marks : " + marks[i]);
}

// Readable and simple - in stands for index
for (let idx in marks) {
  console.log("Index : " + idx + ", Marks : " + marks[idx]);
}

//Readable and cleaner - of stands for value
for (let mark of marks) {
  console.log("Mark : " + mark);
}

//Task
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

// Ex 1.2: Find total of cart
let res = 0;
for (let item of Fruits) {
  res += item.price * item.quantity;
}
console.log("Total price of all the fruits : " + res);

// Ex 2: Rating 4.7 and above | Recommendations List
const books = [
  { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
  { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
  { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
  { title: "Sapiens", rating: 4.9, genre: "History" },
  { title: "Clean Code", rating: 4.7, genre: "Technology" },
];

let res_arr = [];
for (let book of books) {
  if (book.rating >= 4.7) {
    res_arr.push(book.title);
  }
}
console.log(
  "List of books which are having rating more than 4.7 are : ",
  res_arr
);

// Ex 3: If employee's grades 80 or above promote them
const employes = [
  { id: 1, name: "Alice", grade: 78 },
  { id: 2, name: "Bob", grade: 85 },
  { id: 3, name: "Charlie", grade: 92 },
  { id: 4, name: "David", grade: 88 },
  { id: 5, name: "Eva", grade: 76 },
];

// This should output:
// [{ id: 2, status: 'Promoted' }, { id: 3, status: 'Promoted' }, { id: 4, status: 'Promoted' }]

let prom_emp = [];
for (let emp of employes) {
  if (emp.grade >= 80) {
    prom_emp.push({ id: emp.id, status: "promoted" });
  }
}
console.log(prom_emp);

// Ex4: Top 1 movie titles

const movies = [
  { title: "Inception", ratings: [5, 4, 5, 4, 5] },
  { title: "Interstellar", ratings: [5, 5, 4, 5, 4] },
  { title: "Dunkirk", ratings: [4, 4, 4, 3, 4] },
  { title: "The Dark Knight", ratings: [5, 5, 5, 5, 5] },
  { title: "Memento", ratings: [4, 5, 4, 5, 4] },
];

// Expected Output:  The Dark Knight

//Finding the Averages of the movie rating
let result = [];
let avg_arr = [];
for (let mve in movies) {
  let avg = 0;
  for (let i of movies[mve].ratings) {
    avg += i;
  }
  avg /= movies[mve].ratings.length;
  avg_arr.push(avg);
  result.push({ title: movies[mve].title, Average: avg });
}
console.log("Averages of all the movie's ratings : ", result);
console.log(avg_arr);

let z = Math.max(...avg_arr);
// let z = Math.max.apply(null, avg_arr); //Instead of spreading the array elements by spread operator
console.log(result)
for (let j in result) {
    if (z == result[j].Average) {
        console.log(result[j].title);
    }
}

// Approach - 2
/*
var z = 0;
for (let i = 0; i < avg_arr.length; i++) {
  if (z < avg_arr[i]) {
    z = avg_arr[i];
  }
}

for (let i = 0; i < avg_arr.length; i++) {
  if (z == avg_arr[i]) {
    console.log(movies[i].title);
  }
}
*/

