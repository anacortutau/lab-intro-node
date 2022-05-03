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

  }

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
