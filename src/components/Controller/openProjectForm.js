import createProjectForm from "../View/createProjectForm";

createProjectForm();

export default function openForm() {
  const formOpen = document.querySelector(".dialogContainer");
  formOpen.showModal();
}
