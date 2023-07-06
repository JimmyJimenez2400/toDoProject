import { projects } from "../Model/collection";
import createItemCard from "../View/createCardVisual";
import openItemForm from "./openItemForm";

export default function addItem(e) {
  e.preventDefault();
  openItemForm();

  const currentPage = document.querySelector(".currentPage");

  console.log(currentPage);

  // We want to go through currentPage children and find which ID matches with our e.target.id, if so we append createVisualItemCard

  const taskInput = document.getElementById("task");
  const noteInput = document.getElementById("note");
  const dateInput = document.getElementById("date");
  const priorityInput = document.getElementById("select");

  const dialogContainer = document.querySelector(".itemForm");

  const cancelButton = document.querySelector(".itemCancel");

  cancelButton.addEventListener("click", () => {
    dialogContainer.close();
    dialogContainer.remove();
  });

  const submitButton = document.querySelector(".itemSubmit");
  submitButton.addEventListener("click", () => {
    projects.forEach((project) => {
      console.log(project);

      if (project.id === e.target.id) {
        console.log(
          `${project.current_title} matches with ${e.target.id} being clicked on`
        );
        project.createTodoItem(
          taskInput.value,
          dateInput.value,
          priorityInput.value,
          noteInput.value
        );

        // createItemCard(taskInput.value, noteInput.value, priorityInput.value, dateInput.value)
      }
    });

    dialogContainer.close();
    dialogContainer.remove();
  });

  // getTaskInput.value = "";
  // getNoteInput.value = "";
  // getDateInput.value = "";
  // getPriorityInput.value = "";
}
