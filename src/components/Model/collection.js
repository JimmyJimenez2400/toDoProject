import { lookForDataInLS } from "../../helpful_functions/localStorage";
import Project from "./projectTemplate";

// eslint-disable-next-line import/no-mutable-exports
let projects = [];

const createProject = (title, description) => {
  const newProject = new Project(title, description);
  projects.push(newProject);

  return newProject;
};

const deleteProject = (item) => {
  projects = projects.filter((object) => object.id !== item);
};

const findByID = (id) => projects.find((item) => item.id === id);

const updateTitleAndDescription = (title, description, id) => {
  const item = findByID(id);

  item.title = title;
  item.description = description;
};

const readInformation = () => {
  projects.forEach((project) => project);
};

// Still thinking about how I'll use setProjects
const setProjects = (value) => projects.push(value);

const getProjects = () => {};

const retrieveFromLocalStorage = (keyName) => {
  const arrayWithObjects = lookForDataInLS(keyName);

  console.log(arrayWithObjects);

  for (let i = 0; i < arrayWithObjects.length; i += 1) {
    console.log(arrayWithObjects[i]);
    Object.assign(new Project(), arrayWithObjects[i]);
    // SETTTERS | GETTERS
  }
  // return hello.forEach((item) => {
  //   console.log(item);
  //   Object.assign(new Project(), item);
  // });

  // return Object.assign(new Project(), hello);
};

export {
  createProject,
  getProjects,
  projects,
  setProjects,
  deleteProject,
  retrieveFromLocalStorage,
  readInformation,
  findByID,
  updateTitleAndDescription,
};
