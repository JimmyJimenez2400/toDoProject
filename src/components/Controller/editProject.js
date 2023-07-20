import openEditForm from "./openEditProject";
import {
  projects,
  updateTitleAndDescription,
  findByID,
} from "../Model/collection";

export default function editForm(e) {
  e.preventDefault();

  openEditForm();

  const editDialogContainer = document.querySelector(".editProject");

  const getNewTitle = document.getElementById("editTitle");

  const getNewDescription = document.getElementById("editDescription");

  const getCurrentID = e.target.getAttribute("data-editid");

  const cancelButton = document.querySelector("#editCancelButton");

  const submitButton = document.querySelector("#editSubmitButton");

  // We need to grab the tab, and main title and description

  const liElements = document.querySelectorAll(".liElement");

  const projectContainers = document.querySelectorAll(".projectContainer");

  cancelButton.addEventListener("click", () => {
    editDialogContainer.close();
    editDialogContainer.remove();
  });

  submitButton.addEventListener("click", () => {
    updateTitleAndDescription(
      getNewTitle.value,
      getNewDescription.value,
      getCurrentID
    );

    const itemFound = findByID(getCurrentID);

    for (let i = 0; i < liElements.length; i += 1) {
      const getCurrentLiElementID = liElements[i].id;

      for (let j = 0; j < projectContainers.length; j += 1) {
        const getCurrentProjectID =
          projectContainers[j].getAttribute("data-projectid");

        if (
          getCurrentID === getCurrentProjectID &&
          getCurrentID === getCurrentLiElementID
        ) {
          const titleTab = liElements[i].querySelector(".titleTab");
          titleTab.textContent = `${itemFound.title}`;

          const projectTitle = projectContainers[j].querySelector(".mainTitle");
          projectTitle.textContent = `${itemFound.title}`;

          const projectDescription =
            projectContainers[j].querySelector(".descriptionText");
          projectDescription.textContent = `${itemFound.description}`;
        }
      }
    }

    console.log(projects);

    editDialogContainer.close();
    editDialogContainer.remove();
  });
}
