class ToDoItem {
  constructor(task, date, priority) {
    this.task = task;
    this.date = date;
    this.priority = priority;
  }

  get task() {
    return this._task;
  }

  set task(value) {
    this._task = value;
  }

  get date() {
    return this._date;
  }

  set date(value) {
    this._date = value;
  }

  get priority() {
    return this._priority;
  }

  set priority(value) {
    this._priority = value;
  }
}
