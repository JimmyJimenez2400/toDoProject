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
    this.completeTasks = [];
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
    if (value.length < 3)
      throw new Error("Invalid, note description is too short.");

    this.current_description = value;
  }

  get description() {
    return this.current_description;
  }

  get task() {
    return this.tasks;
  }

  createTodoItem(
    task,
    date,
    priority,
    notes,
    status = "incomplete",
    id = randomString()
  ) {
    const todoItem = new Task(task, date, priority, notes, status, id);
    this.tasks.push(todoItem);
    return todoItem;
  }

  removeTodoItem(item) {
    this.tasks = this.tasks.filter((task) => task.id !== item);
  }

  updateTodoItem(id, task, date, priority, notes, status = "incomplete") {
    this.tasks = this.task.map((item) =>
      item.id === id ? new Task(task, date, priority, notes, status, id) : item
    );
  }

  retrieveItemsInProject() {
    this.tasks.forEach((item) => item);
  }

  retrieveItemsInCompleteTasks() {
    this.completeTasks.forEach((item) => item);
  }

  byID(id) {
    return this.tasks.find((task) => task.id === id);
    // we can retrieve a specific task or item which can be used to `update cards`
  }

  toJSON() {
    return {
      title: this.current_title,
      description: this.current_description,
      task: this.tasks,
      completeTask: this.completeTasks,
      id: this.id,
    };
  }
}
export default Project;
