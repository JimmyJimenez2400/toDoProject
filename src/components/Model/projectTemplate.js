/* eslint-disable no-dupe-class-members */
// For Folder Names
import randomString from "../../helpful_functions/createRandomID";

class Project {
  #title;

  #id;

  #tasks;

  constructor(title, id = randomString()) {
    this.#title = title;
    this.#id = id;
    this.#tasks = [];
  }

  get title() {
    return this.#title;
  }

  set title(value) {
    this.#title = value;
  }

  set id(value) {
    this.#id = value;
  }

  get id() {
    return this.#id;
  }

  set tasks(value) {
    this.#tasks = value;
  }

  get tasks() {
    return this.#tasks;
  }

  toJSON() {
    return {
      title: this.title,
      tasks: this.tasks,
      id: this.id,
    };
  }

  addTodoItems(item) {
    this.#tasks.push(item);
  }
}

// removeProjectFromLibrary() {
//   const getSpecificIndex = projectLibrary.indexOf(this);
//   // const getTitle = projectLibrary[getSpecificIndex].title;
//   console.log(getSpecificIndex);
//   projectLibrary.splice(getSpecificIndex, 1);
//   console.table(projectLibrary);
//   // console.log(getTitle);
//   // console.log(`removing ${this.title} from library`);
//   // const filterArray = projectLibrary.filter((x) => x.title !== getTitle);
//   // console.log(`${filterArray} HELLO`);
//   // console.log(projectLibrary);

//   // We need to remove that specific project from the library
// }

export default Project;
