import { projects } from "../Model/collection";
import openEditForm from "./openEditForm";
import { saveProjectSTodoLS } from "../../helpful_functions/localStorage";

export default function editTask(e) {
  e.preventDefault();
  openEditForm();

  const buttonID = e.target.getAttribute("data-editid");

  const getTask = document.getElementById("editTask");
  const getNote = document.getElementById("editNote");
  const getDate = document.getElementById("editDate");
  const getPriority = document.getElementById("editSelect");

  const editDialogContainer = document.querySelector(".editItemForm");

  const cancelButton = document.querySelector(".editItemCancel");

  const submitButton = document.querySelector(".editItemSubmit");

  cancelButton.addEventListener("click", () => {
    editDialogContainer.close();
    editDialogContainer.remove();
  });

  submitButton.addEventListener("click", () => {
    projects.forEach((project) => {
      project.updateTodoItem(
        buttonID,
        getTask.value,
        getDate.value,
        getPriority.value,
        getNote.value
      );
    });

    // Now we update the card
    const grabAllCardVisuals = document.querySelectorAll(".cardItemContainer");

    for (let i = 0; i < grabAllCardVisuals.length; i += 1) {
      const cardID = grabAllCardVisuals[i].getAttribute("data-cardid");
      const changeTaskText = grabAllCardVisuals[i].querySelector(".labelTask");
      const changeNoteText = grabAllCardVisuals[i].querySelector(".noteArea");
      const changeDate = grabAllCardVisuals[i].querySelector(".inputDate");
      const changePriority =
        grabAllCardVisuals[i].querySelector(".priorityTitleSpan");

      if (cardID === buttonID) {
        // projects.forEach((project) => {
        //   const itemFound = project.byID(cardID);
        //   if (itemFound === undefined) {
        //     console.log("IT RETURNED UNDEFINED");
        //     continue;
        //   }
        // changeTaskText.textContent = `${itemFound.task}`;
        // changeNoteText.textContent = `${itemFound.notes}`;
        // changeDate.textContent = `${itemFound.date}`;
        // changePriority.textContent = `${itemFound.priority}`;
        // });
        // eslint-disable-next-line no-restricted-syntax
        for (const project of projects) {
          const itemFound = project.byID(cardID);
          if (itemFound === undefined) {
            // eslint-disable-next-line no-continue
            continue;
          }
          changeTaskText.textContent = `${itemFound.task}`;
          changeNoteText.textContent = `${itemFound.notes}`;
          changeDate.textContent = `${itemFound.date}`;
          changePriority.textContent = `${itemFound.priority}`;
        }
      }
    }

    editDialogContainer.close();
    editDialogContainer.remove();
    saveProjectSTodoLS("projects", projects);
  });

  // NEW PLAN
  /* 
  So we need to find the task object ID that matches with the card chosen
  Once we do, we save that value into a variable and use it's getters instead of the form values
 */
}
