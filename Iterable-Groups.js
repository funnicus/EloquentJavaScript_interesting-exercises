// Your code here (and the code from the previous exercise)
class Group {
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
  
  class GroupIterator {
    constructor(obj) {
      this.indx = 0;
      this.obj = obj;
    }
  
    next() {
      if(this.indx >= this.obj.group.length) return {done: true};
      let value = this.obj.group[this.indx];
      this.indx++;
      return {value, done: false};
    }
  }
  
  Group.prototype[Symbol.iterator] = function() {
    return new GroupIterator(this);
  };
  
  for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
  // → a
  // → b
  // → c