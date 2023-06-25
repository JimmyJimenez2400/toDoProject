/* eslint-disable no-dupe-class-members */
// For Folder Names
import randomString from "../../helpful_functions/createRandomID";
import Task from "./taskTemplate";

class Project {
  constructor(title, description, id = randomString()) {
    this.title = title;
    this.description = description;
    this.id = id;
    this.tasks = [];
  }

  set title(value) {
    if (value.length < 3)
      throw new Error("Invalid, note description is too short.");

    this.current_title = value;
  }

  get title() {
    return this.current_title;
  }

  set description(value) {
    if (value.length < 5)
      throw new Error("Invalid, note description is too short.");

    this.current_description = value;
  }

  get description() {
    return this.current_description;
  }

  createTodoItem(task, date, priority, notes, id = randomString()) {
    const todoItem = new Task(task, date, priority, notes, id);
    this.tasks.push(todoItem);
  }

  removeTodoItem(item) {
    console.log(item);
    console.log(item.id);
    console.log(`Before: ${this.tasks}`);
    this.tasks = this.tasks.filter((task) => task.id !== item.id);
    console.log(`After: ${this.tasks}`);
    // this.#tasks = this.#tasks.filter((task) => task);
  }

  updateTodoItem(id, task, date, priority, notes) {
    this.tasks = this.task.map((item) =>
      item.id === id ? new Task(task, date, priority, notes, id) : item
    );
  }

  retrieveItemsInProject() {
    this.tasks.forEach((item) => console.log(item));
  }

  byID(id) {
    return this.tasks.find((task) => task.id === id);
  }
}
export default Project;
