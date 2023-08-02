import { projects, createProject, getProjects } from "../Model/collection";
import createProjectTab from "../View/createTabProject";
import createMainTab from "../View/createMainTab";
import { saveProjectSTodoLS } from "../../helpful_functions/localStorage";

export default function addProject(e) {
  e.preventDefault();

  const titleInput = document.getElementById("title");
  const descriptionInput = document.getElementById("description");

  const item = createProject(titleInput.value, descriptionInput.value);

  createProjectTab(item.title, item.id);
  const createMain = createMainTab(item.title, item.description, item.id);
  const createMainID = createMain.getAttribute("data-projectid");

  saveProjectSTodoLS("projects", projects);

  getProjects();

  titleInput.value = "";
  descriptionInput.value = "";

  const grabAllProjectContainers =
    document.querySelectorAll(".projectContainer");

  for (let i = 0; i < grabAllProjectContainers.length; i += 1) {
    const currentProjectID =
      grabAllProjectContainers[i].getAttribute("data-projectid");

    if (currentProjectID === createMainID) {
      grabAllProjectContainers[i].classList.add("ONLINE");
    } else {
      grabAllProjectContainers[i].classList.add("OFFLINE");
    }
  }

  // First, give our new created projectTab a class of ONLINE
  // Next, we use a for loop to go through each project. IF class === true, console.log
  // Else, set all other projects class to OFFLINE

  // liElementContainer.addEventListener("click", (e) => {
  //   const test = document.querySelector(".currentPage").children;

  //   const currentID = e.currentTarget.id;

  //   for (let i = 0; i < test.length; i += 1) {
  //     if (currentID === test[i].getAttribute("data-projectid")) {
  //       test[i].classList.add("ONLINE");
  //       test[i].classList.remove("OFFLINE");
  //     } else {
  //       test[i].classList.add("OFFLINE");
  //       test[i].classList.remove("ONLINE");
  //     }
  //   }

  //   // Now, I need to make this specific ID from the mainPage be active or class active
  // });
}
