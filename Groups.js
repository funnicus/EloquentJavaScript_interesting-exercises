class Group {
    // Your code here.
    constructor(){
        this.group = [];
    }
    add(val){
        if(this.has(val) === false) this.group.push(val);
    }
    delete(val){
        this.group = this.group.filter(v => v !== val);
    }
    has(val){
        for(let v of this.group){
          if(v === val) return true;
      }
      return false;
    }
    static from(group){
      let g = new Group();
      for(let val of group){
          g.add(val);
      }
        return g;
    }
  }
  
  let group = Group.from([10, 20]);
  console.log(group.has(10));
  // → true
  console.log(group.has(30));
  // → false
  group.add(10);
  group.delete(10);
  console.log(group.has(10));
  // → false