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
  removeProjectFromProjects,
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
  removeProject: removeProjectFromProjects,
  getProjects,
  save: saveProjectSTodoLS,
  load: lookForDataInLS,
};
