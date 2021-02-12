class HashMap {
    constructor(key) {
      this.hashmap = new Array(key)
        .fill(null);
    }
    hash(key){
        let hashCode = 0;
        for(let i =0;i<key.length;i++){
          hashCode += hashCode + key.charCodeAt(i);
        }
        return hashCode
      }

      assign(key,value) {
        const arrayIndex = this.hash(key);
       this.hashmap[arrayIndex] = value;
    }
      retrieve(key){
        const arrayIndex = this.hash(key);
         return  this.hashmap[arrayIndex] ;
         
         }
  }
  
  module.exports = HashMap;