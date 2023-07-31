import delProject from "../Controller/deleteProject";

export default function createProjectTab(titleInput, itemID) {
  // Grab the projects list UL element
  const projectUL = document.querySelector(".projects");

  const liElementContainer = document.createElement("li");
  liElementContainer.setAttribute("class", "liElement");
  liElementContainer.setAttribute("id", `${itemID}`);

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

  liElementContainer.addEventListener("click", (e) => {
    const test = document.querySelector(".currentPage").children;

    const currentID = e.currentTarget.id;

    for (let i = 0; i < test.length; i += 1) {
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
