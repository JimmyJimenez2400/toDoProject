import pageLoad from "./pageLoad/pageLoad";
import {
  newProjects,
  Project,
  projectLibrary,
} from "./components/Model/projectTemplate";
import "./style.css";

pageLoad();

const defaultProject = new Project("Default");
console.log(defaultProject.title);

defaultProject.pushProjectToProjectLibrary();

const defaultProject2 = new Project("Default2");
defaultProject2.pushProjectToProjectLibrary();

console.table(projectLibrary);

defaultProject.removeProjectFromLibrary();

defaultProject2.removeProjectFromLibrary();
