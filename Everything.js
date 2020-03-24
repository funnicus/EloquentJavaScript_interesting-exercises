function everyLoop(array, test) {
    // Your code here.
    for(i = 0; i < array.length; i++){
      if(test(array[i]) === false) return false;
    }
    return true;
  }
  
  function every(array, test) {
    // Your code here.
    return !array.some(n => !test(n));
  }
  console.log(every([1, 3, 5], n => n < 10));
  // → true
  console.log(every([2, 4, 16], n => n < 10));
  // → false
  console.log(every([], n => n < 10));
  // → true