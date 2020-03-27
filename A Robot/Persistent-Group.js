class PGroup {
    // Your code here
    constructor(group){
        this.group = group;
    }
    add(val){
        if(this.has(val) === false) return new PGroup(this.group.concat([val]));
    }
    delete(val){
        return new PGroup(this.group.filter(v => v !== val));
    }
    has(val){
        for(let i = 0; i < this.group.length; i++){
            if(this.group[i] === val) return true;
        }
        return false;
    }
  }
  
  PGroup.empty = new PGroup([]);

  let a = PGroup.empty.add("a");
  let ab = a.add("b");
  let b = ab.delete("a");
  
  console.log(b.has("b"));
  // → true
  console.log(a.has("b"));
  // → false
  console.log(b.has("a"));
  // → false