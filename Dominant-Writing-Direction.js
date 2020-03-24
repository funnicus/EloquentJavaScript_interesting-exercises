function characterScript(code) {
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
        return script;
      }
    }
    return null;
  }
  
  //console.log(characterScript(121));
  
  function dominantDirection(text) {
    // Your code here.
    let ltr = 0, rtl = 0, ttb = 0;
    for(let i = 0; i < text.length; i++){
      if(characterScript(text.codePointAt(i)) !== null){
        let dir = characterScript(text.codePointAt(i)).direction;
        if(dir === "ltr") ltr++;
        if(dir === "rtl") rtl++;
        if(dir === "ttb") ttb++;
      }
    }
    if(ltr > rtl && ltr > ttb) return "ltr";
    if(rtl > ltr && rtl > ttb) return "rtl";
    if(ttb > rtl && ttb > ltr) return "ttb";
    return "No dominant direction."
  }
  
  console.log(dominantDirection("Hello!"));
  // → ltr
  console.log(dominantDirection("Hey, مساء الخير"));
  // → rtl