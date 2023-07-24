import { lookForDataInLS } from "../../helpful_functions/localStorage";
import Project from "./projectTemplate";
import createMainTab from "../View/createMainTab";
import createProjectTab from "../View/createTabProject";
import createItemCard from "../View/createCardVisual";

// eslint-disable-next-line import/no-mutable-exports
let projects = [];

const createProject = (title, description) => {
  const newProject = new Project(title, description);
  projects.push(newProject);

  return newProject;
};

const deleteProject = (item) => {
  projects = projects.filter((object) => object.id !== item);
};

const findByID = (id) => projects.find((item) => item.id === id);

const updateTitleAndDescription = (title, description, id) => {
  const item = findByID(id);

  item.title = title;
  item.description = description;
};

const readInformation = () => {
  projects.forEach((project) => project);
};

// Still thinking about how I'll use setProjects
const setProjects = (value) => projects.push(value);

const getProjects = () => projects;

const retrieveFromLocalStorage = (keyName) => {
  const arrayWithObjects = lookForDataInLS(keyName);

  for (let i = 0; i < arrayWithObjects.length; i += 1) {
    const item = new Project(
      arrayWithObjects[i].title,
      arrayWithObjects[i].description,
      arrayWithObjects[i].id
    );

    item.tasks = arrayWithObjects[i].task;

    setProjects(item);
  }

  const test = getProjects();

  for (let start = 0; start < test.length; start += 1) {
    createProjectTab(test[start].title, test[start].id);
    createMainTab(test[start].title, test[start].description, test[start].id);
    for (let j = 0; j < test[start].tasks.length; j += 1) {
      const grabProjectContainer =
        document.querySelectorAll(".projectContainer");
      const projectID = test[start].id;

      for (
        let project = 0;
        project < grabProjectContainer.length;
        project += 1
      ) {
        const containerID =
          grabProjectContainer[project].getAttribute("data-projectid");
        if (containerID === projectID) {
          const middleRow =
            grabProjectContainer[project].querySelector(".middleRow");
          middleRow.appendChild(
            createItemCard(
              test[start].task[j].task,
              test[start].task[j].notes,
              test[start].task[j].priority,
              test[start].task[j].date,
              test[start].task[j].id
            )
          );
        }
      }

      // console.log(test[start].task[j]);
    }
    // createItemCard(
    //   test[start].tasks[start].task,
    //   test[start].tasks[start].notes,
    //   test[start].tasks[start].priority,
    //   test[start].tasks[start].date
    // );
  }
};

export {
  createProject,
  getProjects,
  projects,
  setProjects,
  deleteProject,
  retrieveFromLocalStorage,
  readInformation,
  findByID,
  updateTitleAndDescription,
};
