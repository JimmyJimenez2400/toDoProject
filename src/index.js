import pageLoad from "./pageLoad/pageLoad";
import "./style.css";

import Project from "./components/Model/projectTemplate";
import Task from "./components/Model/taskTemplate";

import {
  saveProjectSTodoLS,
  lookForDataInLS,
} from "./helpful_functions/localStorage";

import {
  createProject,
  getProjects,
  deleteProject,
  retrieveFromLocalStorage,
  updateInformation,
  readInformation,
} from "./components/Model/collection";

pageLoad();

window.Project = Project;
window.Task = Task;
window.ProjectManager = {
  addProject: createProject,
  removeProject: deleteProject,
  retrieveLocalStorage: retrieveFromLocalStorage,
  read: readInformation,
  editInfo: updateInformation,
  getProjects,
  save: saveProjectSTodoLS,
  load: lookForDataInLS,
};
