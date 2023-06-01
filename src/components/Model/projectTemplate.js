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

  addTodoItem(task, date, priority, notes, id = randomString()) {
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

  retrieveItemsInProject() {
    this.tasks.forEach((item) => console.log(item));
  }

  r;

  toJSON() {
    return {
      title: this.title,
      description: this.description,
      id: this.id,
      tasks: this.tasks,
    };
  }
}
export default Project;
