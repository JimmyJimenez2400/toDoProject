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

// const test = new Project("Test");

// addProjectToProjects(test);

// saveProjectSTodoLS();
// lookForDataInLS();

window.Project = Project;
window.Task = Task;
window.ProjectManager = {
  addProject: addProjectToProjects,
  getProj: getProjects(),
  save: saveProjectSTodoLS,
  load: lookForDataInLS,
};
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
