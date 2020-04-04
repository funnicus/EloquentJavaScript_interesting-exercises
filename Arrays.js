// Modify these definitions...
topScope.array = (...values) => {
	let arr = [];
  	for(let val of values){
    	arr.push(val);
    }
  	return arr;
};

topScope.length = (arr) => {
	return arr.length;
};

topScope.element = (arr, n) => {
	return arr[n];
};

run(`
do(define(sum, fun(array,
     do(define(i, 0),
        define(sum, 0),
        while(<(i, length(array)),
          do(define(sum, +(sum, element(array, i))),
             define(i, +(i, 1)))),
        sum))),
   print(sum(array(1, 2, 3))))
`);
// → 6