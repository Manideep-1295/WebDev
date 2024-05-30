## Loops
### For loops
1. For loop (Traditional)  
for (var_name = value; condition; Increment/Decrement){  
    //statements  
}
```js
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
for(let mark of marks){
    console.log("Mark : " + mark);
}
```