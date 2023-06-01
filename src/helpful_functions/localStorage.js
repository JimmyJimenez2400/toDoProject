// Save everything
import Project from "../components/Model/projectTemplate";
import { setProjects, getProjects } from "../components/Model/collection";

function saveProjectSTodoLS() {
  const stringify = JSON.stringify(getProjects());

  localStorage.setItem("projects", stringify);

  // we need to setItem for todo items, how do we grab that?
}

function lookForDataInLS() {
  // We need to look for the data in the local storage
  if (localStorage.getItem("projects") === null) {
    return [];
  }
  const getItem = localStorage.getItem("projects");

  const data = JSON.parse(getItem);

  return data.forEach((item) =>
    setProjects(Object.assign(new Project(), item))
  );
}

export { saveProjectSTodoLS, lookForDataInLS };
