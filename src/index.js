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
  retrieveFromLocalStorage,
} from "./components/Model/collection";

pageLoad();

window.Project = Project;
window.Task = Task;
window.ProjectManager = {
  addProject: addProjectToProjects,
  removeProject: removeProjectFromProjects,
  retrieveLocalStorage: retrieveFromLocalStorage,
  getProjects,
  save: saveProjectSTodoLS,
  load: lookForDataInLS,
};
