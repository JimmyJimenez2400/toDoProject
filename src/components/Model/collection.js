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
  console.log(`Calling Projects before filter: ${projects}`);
  projects = projects.filter((object) => object.id !== item);
  console.log(`Calling Projects after filter: ${projects}`);
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

const getProjects = () => projects;

const retrieveFromLocalStorage = (keyName) => {
  const hello = lookForDataInLS(keyName);
  // data.forEach((item) =>
  //   setProjects(Object.assign(new Project(), item))
  console.log(hello);
  return hello.forEach((item) =>
    setProjects(Object.assign(new Project(), item))
  );
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
