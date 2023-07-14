import { projects } from "../Model/collection";
import createItemCard from "../View/createCardVisual";
import openItemForm from "./openItemForm";

export default function addItem(e) {
  e.preventDefault();

  openItemForm();

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
    const mainPages2 = document.querySelectorAll(".projectContainer");

    projects.forEach((project) => {
      console.log(project);

      if (project.id === e.target.id) {
        const itemMade = project.createTodoItem(
          taskInput.value,
          dateInput.value,
          priorityInput.value,
          noteInput.value
        );

        for (let i = 0; i < mainPages2.length; i += 1) {
          const pageID = mainPages2[i].getAttribute("data-projectid");

          if (pageID === e.target.id) {
            mainPages2[i]
              .querySelector(".middleRow")
              .appendChild(
                createItemCard(
                  taskInput.value,
                  noteInput.value,
                  priorityInput.value,
                  dateInput.value,
                  itemMade.id
                )
              );
          }
        }
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
