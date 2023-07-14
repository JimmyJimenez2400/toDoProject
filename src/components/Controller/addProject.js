import { createProject } from "../Model/collection";
import createProjectTab from "../View/createTabProject";
import createMainTab from "../View/createMainTab";

export default function addProject(e) {
  e.preventDefault();

  const titleInput = document.getElementById("title");
  const descriptionInput = document.getElementById("description");

  const item = createProject(titleInput.value, descriptionInput.value);

  createProjectTab(titleInput.value, item.id);
  createMainTab(titleInput.value, descriptionInput.value, item.id);

  titleInput.value = "";
  descriptionInput.value = "";

  return item;
}
