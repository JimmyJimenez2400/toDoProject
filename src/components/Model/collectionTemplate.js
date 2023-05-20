// HEre we would push folders into a collection

class Collection {
  items = [];

  addItem(item) {
    this.items.push(item);
  }

  get items() {
    return this.items;
  }
}

export default Collection;
