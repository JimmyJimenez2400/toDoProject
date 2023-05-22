// HEre we would push folders into a collection
import randomString from "../../helpful_functions/createRandomID";

class Collection {
  items = [];

  constructor(title = "Default Collection", id = randomString()) {
    this.title = title;
    this.id = id;
  }

  addItem(item, _id = randomString()) {
    this.items.push(item);
  }

  removeItem(id) {
    // How to remove specific items with ID?
    this.items = this.items.filter((item) => item.id !== id);
    console.log(`removing Item ${id}`);
  }

  get projectItems() {
    this.items.forEach((item) => {
      console.log(item);
    });
  }

  get collectionID() {
    return this.id;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }
}

export default Collection;
