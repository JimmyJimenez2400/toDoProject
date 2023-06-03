import { lookForDataInLS } from "../../helpful_functions/localStorage";
import Project from "./projectTemplate";

// eslint-disable-next-line import/no-mutable-exports
let projects = [];

const addProjectToProjects = (item) => {
  // push to projects array
  projects.push(item);
};

const removeProjectFromProjects = (item) => {
  console.log(`Calling Projects before filter: ${projects}`);
  projects = projects.filter((object) => object.id !== item.id);
  console.log(`Calling Projects after filter: ${projects}`);
};

const updateInformation = (id, title, description) => {
  projects = projects.map((item) =>
    item.id === id ? new Project(title, description, id) : item
  );
};

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
  addProjectToProjects,
  getProjects,
  projects,
  setProjects,
  removeProjectFromProjects,
  retrieveFromLocalStorage,
  updateInformation,
};
