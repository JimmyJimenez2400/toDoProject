// eslint-disable-next-line import/no-cycle
import delProject from "../Controller/deleteProject";
import togglingProjectView from "../Controller/togglingProjectView";

export default function createProjectTab(titleInput, itemID) {
  // Grab the projects list UL element
  const projectUL = document.querySelector(".projects");

  const liElementContainer = document.createElement("li");
  liElementContainer.setAttribute("class", "liElement");
  liElementContainer.setAttribute("id", `${itemID}`);
  liElementContainer.addEventListener("click", togglingProjectView);

  const createTitle = document.createElement("h6");
  createTitle.classList.add("titleTab");
  createTitle.textContent = `${titleInput}`;

  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "deleteBtn");

  const imgIcon = document.createElement("img");
  imgIcon.setAttribute("alt", "garbage");
  imgIcon.setAttribute("class", "delICON");
  imgIcon.setAttribute("data-deleteid", itemID);

  imgIcon.addEventListener("click", delProject);

  deleteButton.appendChild(imgIcon);

  liElementContainer.appendChild(createTitle);
  liElementContainer.appendChild(deleteButton);

  projectUL.appendChild(liElementContainer);

  return projectUL;
}
