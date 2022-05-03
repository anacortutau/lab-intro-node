class SortedList {
  constructor(items, length) {
    
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item)
    let sortItem = this.items.sort((item1,item2) =>{
      if(item1 > item2){
        return 1
      }else{
        return -1
      }
    })
    this.length = sortItem.length
  }
  get(pos) {
    if(this.items[pos] === undefined){
      throw new Error('OutOfBounds');
    }else{
      return this.items[pos]

    }

  }

  max() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    }else{
      return Math.max.apply(null, this.items)
    }
  }

  min() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    }else{
      return Math.min.apply(null, this.items)
    }
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
