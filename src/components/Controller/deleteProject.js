import { deleteProject } from "../Model/collection";

export default function delProject(e) {
  // For deleting, we just need to remove the object
  // Remove the DOM elements related to that object

  const delID = e.target.getAttribute("data-deleteid");

  const projectTabs = document.querySelectorAll(".liElement");
  const projectContainers = document.querySelectorAll(".projectContainer");

  for (let i = 0; i < projectTabs.length; i += 1) {
    const projectID = projectTabs[i].id;
    for (let j = 0; j < projectContainers.length; j += 1) {
      const projectContainerID =
        projectContainers[j].getAttribute("data-projectid");

      if (delID === projectID && delID === projectContainerID) {
        deleteProject(delID);

        projectTabs[i].remove();
        projectContainers[j].remove();
      }
    }
  }
}
