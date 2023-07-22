import addProject from "../components/Controller/addProject";
import openForm from "../components/Controller/openProjectForm";
import { retrieveFromLocalStorage } from "../components/Model/collection";

export default function pageLoad() {
  const content = document.querySelector("#content");

  const addProjectButton = document.querySelector(".addProject");
  const projectSubmit = document.querySelector(".submitButton");

  addProjectButton.addEventListener("click", openForm);

  projectSubmit.addEventListener("click", addProject);

  // In here we're going to probably save the array `projects` into the local storage
  // Or we can retrieve it from here

  // Remember, we have to set up a complete or incomplete status for each `todo` item, inside project template

  retrieveFromLocalStorage("projects");

  return content;
}
