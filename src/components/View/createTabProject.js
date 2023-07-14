export default function createProjectTab(titleInput, itemID) {
  // Grab the projects list UL element
  const projectUL = document.querySelector(".projects");

  const liElementContainer = document.createElement("li");
  liElementContainer.setAttribute("class", "liElement");
  liElementContainer.setAttribute("id", `${itemID}`);

  const leftSideContainer = document.createElement("section");
  leftSideContainer.setAttribute("class", "leftSideElementTab");

  const rightSideContainer = document.createElement("section");
  rightSideContainer.setAttribute("class", "rightSideElementTab");

  const createTitle = document.createElement("h6");
  createTitle.textContent = `${titleInput}`;

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  leftSideContainer.appendChild(createTitle);

  rightSideContainer.appendChild(editButton);
  rightSideContainer.appendChild(deleteButton);

  liElementContainer.appendChild(leftSideContainer);
  liElementContainer.appendChild(rightSideContainer);

  projectUL.appendChild(liElementContainer);

  liElementContainer.addEventListener("click", (e) => {
    const test = document.querySelector(".currentPage").children;

    console.log(e.currentTarget.id);
    const currentID = e.currentTarget.id;

    for (let i = 0; i < test.length; i += 1) {
      // console.log(test[i].getAttribute("project-id"));
      if (currentID === test[i].getAttribute("data-projectid")) {
        test[i].classList.add("ONLINE");
        test[i].classList.remove("OFFLINE");
      } else {
        test[i].classList.add("OFFLINE");
        test[i].classList.remove("ONLINE");
      }
    }

    // Now, I need to make this specific ID from the mainPage be active or class active
  });

  return projectUL;
}
