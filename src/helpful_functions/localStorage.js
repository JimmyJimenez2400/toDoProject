// Save everything
import { getProjects } from "../components/Model/collection";

function saveProjectSTodoLS() {
  const stringify = JSON.stringify(getProjects());
  localStorage.setItem("projects", JSON.stringify(stringify));
  // We need to target the arrays of collection and project
}

function lookForDataInLS() {
  // We need to look for the data in the local storage

  const data = JSON.parse(localStorage.getItem("projects"));
  console.log(`Here is the data: ${data}`);
}

export { saveProjectSTodoLS, lookForDataInLS };
