import pageLoad from "./pageLoad/pageLoad";
import "./style.css";

import Project from "./components/Model/projectTemplate";
import Task from "./components/Model/taskTemplate";

import {
  saveProjectSTodoLS,
  lookForDataInLS,
} from "./helpful_functions/localStorage";

import {
  addProjectToProjects,
  getProjects,
} from "./components/Model/collection";

pageLoad();

const folder1 = new Project("Title");
const task1 = new Task("task1", "04/24/2400", "low", "1");
const task2 = new Task("task2", "04/24/2400", "low", "1");
const task3 = new Task("task3", "04/24/2400", "low", "1");

folder1.addToTasksOutside(task1);
folder1.addToTasksOutside(task2);
folder1.addToTasksOutside(task3);
console.table(folder1);

addProjectToProjects(folder1);
console.log(getProjects());

saveProjectSTodoLS();
lookForDataInLS();

console.log(getProjects());

// function updateUI() {
//   const values = [];
//   const keys = Object.keys(localStorage);
//   let i = keys.length;
//   while (i--) {
//     values.push(localStorage.getItem(keys[i]));
//   }
//   document.getElementById("ls-currently").textContent = `Value: ${values}`;
// }

// const addButton = document.querySelector(".addItem");
// console.log(addButton);
// addButton.addEventListener("click", () => {
//   window.localStorage.setItem("name", "Jimmy");
//   updateUI();
// });
