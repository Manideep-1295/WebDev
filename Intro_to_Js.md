## Types of Data Types in Js

1. Number
2. String
3. Boolean
4. Object
5. Undefined (null)

## Number

var x = 10  
typeof(x) --> number

## String

var y = "String"  
typeof(y) --> String

## Arrays and Dictionaries

These 2 comes under object data type as they have key value pair
For arrayas key is the index.
example :

```js
var x = { name: "Js", version: "Es24" };
Typeof(x);
Output: "Object";

var y = [10, 20, 30];
Typeof(y);
Output: "Object";
```

## Special Data Types

> Undefined and Null

![Undefined & null](image-3.png)

## To access values in dictionaries

1. Dot method
2. Box Method

Ex:

```js
var x = {no : 1, name : "XYZ"} ;
x.name or x['name']
```

## Re-Declation & Re-Assignment

Var - RA & RD  
let - RA  
const - None

**Note :** We can change the values in the array but cannot change the addresses of assigned values.

![Analyzing Scenario in Js RD & RA](image-4.png)
