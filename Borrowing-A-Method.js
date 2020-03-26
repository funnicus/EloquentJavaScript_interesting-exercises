let map = {one: true, two: true, hasOwnProperty: true};

// Fix this call

const hasOwnPropertySymbol = Symbol("hasOwnProperty");
Object.prototype[hasOwnPropertySymbol] = function(str) {
  return this[str];
};

console.log(map[hasOwnPropertySymbol]("one"));
// → true