export default function createProjectTab(titleInput, itemID) {
  // Grab the projects list UL element
  const projectUL = document.querySelector(".projects");

  const liElementContainer = document.createElement("li");
  liElementContainer.setAttribute("id", `${itemID}`);

  const createTitle = document.createElement("h6");
  createTitle.textContent = `${titleInput}`;

  liElementContainer.appendChild(createTitle);

  projectUL.appendChild(liElementContainer);

  return projectUL;
}
