// Your code here.
function arrayToList(arr){
  	let list = {value: null, rest: null}
    list.value = arr[0];
  	if(arr.length > 1) list.rest = arrayToList(arr.splice(1, arr.length));
  	else list.rest = null;
  	return list;
}

function listToArray(list){
  	let arr = [];
	for (let node = list; node; node = node.rest) {
    	arr.push(node.value);	
    }
  	return arr;
}

function prepend(elem, list){
	let l = {value: null, rest: null}
    l.value = elem;
 	l.rest = list;  
  	return l;
}

function nth(list, pos){
	let arr = listToArray(list);
  	return arr[pos];
}
console.log(arrayToList([10, 20]));
// ? {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// ? [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// ? {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// ? 20