import createProjectForm from "../View/createEditProject";

export default function openEditForm() {
  createProjectForm();
  const formOpen = document.querySelector(".editProject");
  formOpen.showModal();
}
