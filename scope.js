{
    var x1 = 10;
    let x2 = "20";
    console.log(x1+x2);
    console.log(x1-x2);
  }
  console.log(x1);

  function adult(age) { //Change the declaration to var to escape the error
    if (age > 18) {
      let msg = "Adult";
    } else {
      let msg = "Child";
    }
    console.log(msg);
}

adult(21);