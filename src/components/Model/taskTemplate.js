/* eslint-disable no-dupe-class-members */
class Task {
  #task;

  #date;

  #priority;

  #id;

  constructor(task, date, priority, id = "Hello") {
    this.#task = task;
    this.#date = date;
    this.#priority = priority;
    this.#id = id;
  }

  get task() {
    return this.#task;
  }

  set task(value) {
    this.#task = value;
  }

  get date() {
    return this.#date;
  }

  set date(value) {
    this.#date = value;
  }

  get priority() {
    return this.#priority;
  }

  set priority(value) {
    this.#priority = value;
  }

  toJSON() {
    return {
      task: this.task,
      date: this.date,
      priority: this.priority,
      id: this.id,
    };
  }
}

export default Task;
