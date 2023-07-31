import { projects } from "../Model/collection";
import { saveProjectSTodoLS } from "../../helpful_functions/localStorage";

function filterItemDependingOnStatus(id) {
  const grabAllCards = document.querySelectorAll(".cardItemContainer");

  projects.forEach((project) => {
    const completeTasksArray = project.completeTasks;
    const taskArray = project.tasks;
    for (let i = 0; i < taskArray.length; i += 1) {
      const taskID = taskArray[i].id;

      if (id === taskID) {
        const itemStatus = taskArray[i].status;
        if (itemStatus === "complete") {
          completeTasksArray.push(taskArray[i]);
          project.removeTodoItem(id);

          for (let j = 0; j < grabAllCards.length; j += 1) {
            const cardID = grabAllCards[j].getAttribute("data-cardid");
            if (id === cardID) {
              grabAllCards[i].remove();

              saveProjectSTodoLS("projects", projects);
            }
          }
          // Now remove card
        }
      }
    }
  });

  // Then, we want to check if a condition is met if status is 'complete'. IF SO, we will move that specific item to an array called 'completed todos` for that specific project
}

function changeItemStatus(e) {
  const checkingStatus = e.target.checked;
  const checkboxID = e.target.getAttribute("data-statusid");

  if (checkingStatus === true) {
    projects.forEach((project) => {
      const tasksArray = project.tasks;
      for (let i = 0; i < tasksArray.length; i += 1) {
        const taskID = tasksArray[i].id;
        if (taskID === checkboxID) {
          tasksArray[i].status = "complete";
        }
      }
    });
  }

  filterItemDependingOnStatus(checkboxID);
}

export { changeItemStatus, filterItemDependingOnStatus };

/* 

The main idea of this part of the project is to make `setting complete todos`

We need to figure out how we'll do that, so 

main purpose: switch the status from 'incomplete' to 'complete'
+ When pressing on the checkbox input, we will switch that specific item status to 'complete'


*/
