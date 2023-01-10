function printStars(howMany,ln) {
    console.log(" ".repeat(ln-howMany),'*'.repeat(howMany));
  }
   
  [1, 2, 3, 4, 5, 6].forEach(function (num, i, arr) {
    printStars(num,arr.length);
  });
  