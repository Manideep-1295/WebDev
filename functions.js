function mul(n){
    return n*2; //return is compulsory otherwise it is undefined
}
console.log(mul(5));

//Function ends after return executes
function fun1(n){
    console.log("Line1");
    if(n>2){
        return true;
    }
    console.log("Line2");
}
console.log(fun1(3));

//Arrow Funtions
const double = (n) =>{  //longer version
    return n*2;
}
const double1 =(n) => n*2; // shorter version
console.log(double(3));
console.log(double1(4));