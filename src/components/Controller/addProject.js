import { projects, createProject } from "../Model/collection";
import createProjectTab from "../View/createTabProject";
import createMainTab from "../View/createMainTab";
import { saveProjectSTodoLS } from "../../helpful_functions/localStorage";

export default function addProject(e) {
  e.preventDefault();

  const titleInput = document.getElementById("title");
  const descriptionInput = document.getElementById("description");

  const item = createProject(titleInput.value, descriptionInput.value);

  createProjectTab(item.title, item.id);
  createMainTab(item.title, item.description, item.id);

  saveProjectSTodoLS("projects", projects);

  titleInput.value = "";
  descriptionInput.value = "";
}
