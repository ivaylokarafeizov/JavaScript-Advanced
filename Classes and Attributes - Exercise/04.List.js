class List {
  constructor(collection = []) {
    this.collection = collection.sort((a, b) => a - b);
    this.size = this.collection.length;
  }

  add(element) {
    this.collection.push(element);
    this.collection.sort((a, b) => a - b);
    this.size++;
    return;
  }
  remove(index) {
    if (index < 0 || index >= this.collection.length) {
      throw new Error(`Invalid index!`);
    } else {
      this.collection.splice(index, 1);
      this.size--;
      return;
    }
  }

  get(index) {
    if (index < 0 || index >= this.collection.length) {
      throw new Error(`Invalid index!`);
    } else {
      return this.collection[index];
    }
  }

  size() {
    return this.collection.length;
  }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
