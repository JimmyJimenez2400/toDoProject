import { createProject } from "../Model/collection";

export default function addProject(e) {
  e.preventDefault();

  const titleInput = document.getElementById("title");
  const descriptionInput = document.getElementById("description");

  return createProject(titleInput.value, descriptionInput.value);
}
