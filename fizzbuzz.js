const fizzbuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    // console.log(i);

    if (i % 3 == 0 || i % 5 == 0) {
      console.log("fizzbuzz");
    } else if (i % 5 == 0) {
      console.log("buzz");
    } else if (i % 3 == 0) {
      console.log("fizz");
    } else {
      console.log(i);
    }
  }
  return;
};
console.log(fizzbuzz(16)); //1,2,fizz,4,buzz
