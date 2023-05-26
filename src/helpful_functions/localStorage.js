// Save everything
import { getProjects } from "../components/Model/collection";

function saveProjectSTodoLS() {
  const stringify = JSON.stringify(getProjects());
  localStorage.setItem("projects", stringify);
}

function lookForDataInLS() {
  // We need to look for the data in the local storage
  if (localStorage.getItem("projects") === null) {
    return [];
  }
  const getItem = localStorage.getItem("projects");
  console.log(`Getting item...: ${getItem}`);
  console.log(`Typeof getItem: ${typeof getItem}`);

  const data = JSON.parse(getItem);

  return data;
}

export { saveProjectSTodoLS, lookForDataInLS };
