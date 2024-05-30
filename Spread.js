var q1 = [1, 2, 3, 4];
var q2 = [...q1];
q1.push(5);
var q3 = [10, ...q1, 8, 9];
console.log("Array 1 is : " + q1);
console.log("Array 2 is : " + q2);
console.log("Array 3 is : " + q3);

//Task
var t1 = [400, 500];
var t2 = [90, 80];
var t3 = [...t2, ...t1];
console.log("Final Array t3 : " + t3);
