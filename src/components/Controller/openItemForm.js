import createItemForm from "../View/createItem";

createItemForm();

export default function openItemForm() {
  const formOpen = document.querySelector(".itemForm");
  formOpen.showModal();
}
