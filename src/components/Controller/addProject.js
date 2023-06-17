import { createProject } from "../Model/collection";
import createProjectForm from "../View/createProjectForm";

export default function addProject(title, description) {
  // we need to grab the button for projec
  createProject(title, description);
  createProjectForm();

  const formOpen = document.querySelector(".dialogContainer");
  formOpen.showModal();

  const closeForm = document.querySelector(".cancelButton");
  closeForm.addEventListener("click", () => {
    formOpen.remove();
  });

  // add an event listener which will call our class
  // then call our view `project` html\
  console.log("HELLO");
}
