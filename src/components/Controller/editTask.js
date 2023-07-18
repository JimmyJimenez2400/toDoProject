import { projects } from "../Model/collection";
import openEditForm from "./openEditForm";

export default function editTask(e) {
  e.preventDefault();
  openEditForm();

  console.log(projects);

  const buttonID = e.target.getAttribute("data-editid");
  console.log(`Edit ID: ${buttonID}`);

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
    console.log(grabAllCardVisuals);

    for (let i = 0; i < grabAllCardVisuals.length; i += 1) {
      const cardID = grabAllCardVisuals[i].getAttribute("data-cardid");
      console.log(`Card ID: ${cardID}`);
      if (cardID === buttonID) {
        console.log(grabAllCardVisuals[i]);
        const changeTaskText =
          grabAllCardVisuals[i].querySelector(".labelTask");
        const changeNoteText = grabAllCardVisuals[i].querySelector(".noteArea");
        const changeDate = grabAllCardVisuals[i].querySelector(".inputDate");
        const changePriority =
          grabAllCardVisuals[i].querySelector(".priorityTitleSpan");

        changeTaskText.textContent = `${getTask.value}`;
        changeNoteText.textContent = `${getNote.value}`;
        changeDate.textContent = `${getDate.value}`;
        changePriority.textContent = `${getPriority.value}`;
      }
    }

    editDialogContainer.close();
    editDialogContainer.remove();
  });

  // iterate through card visuals
  // if match, that's the one we want in if statement

  // Grab the id's, then we will use their values
  // We have to make sure that we're editing the right object
  // Maybe user for loop projects.task??

  // projects.forEach(project =>{ <- Will go inside an if statement
  //   project.updateTodoItem();
  // })
}
