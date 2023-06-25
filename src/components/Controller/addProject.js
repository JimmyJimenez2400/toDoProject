import { createProject, readInformation } from "../Model/collection";
import createProjectTab from "../View/createTabProject";
import createMainTab from "../View/createMainTab";

export default function addProject(e) {
  e.preventDefault();

  const titleInput = document.getElementById("title");
  const descriptionInput = document.getElementById("description");

  const item = createProject(titleInput.value, descriptionInput.value);

  console.log(`THIS IS: ${item.id}`);
  createProjectTab(titleInput.value, item.id);
  createMainTab(titleInput.value, descriptionInput.value, item.id);

  console.log(readInformation());

  titleInput.value = "";
  descriptionInput.value = "";
}
