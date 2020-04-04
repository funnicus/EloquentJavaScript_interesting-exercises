async function locateScalpel1(nest) {
    let name = "Big Oak";
    while(name !== await anyStorage(nest, name, "scalpel")){
      name = await anyStorage(nest, name, "scalpel");    
    }
    return name;
  }
  
  function locateScalpel(nest) {
    // Your code here.
    function loop(source){
        return anyStorage(nest, source, 'scalpel')
        .then(val => {
                if(val === source){
                  return source;   
              }
              else{
                  return loop(val);
              }
            });
        }
    return loop(nest.name);
  }
  
  locateScalpel(bigOak).then(console.log);
  // → Butcher Shop