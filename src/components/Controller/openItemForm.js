import createItemForm from "../View/createItemForm";

export default function openItemForm() {
  createItemForm();
  const formOpen = document.querySelector(".itemForm");
  formOpen.showModal();
}
