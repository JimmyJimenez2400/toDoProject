import createEditForm from "../View/createEditForm";

export default function openEditForm() {
  createEditForm();
  const formOpen = document.querySelector(".editItemForm");
  formOpen.showModal();
}
