import removeTaskItem from "../Controller/removeTaskItem";
import editTask from "../Controller/editTask";

// Create how the initial card will look
export default function createItemCard(task, note, priority, date, id) {
  // grab currentPage or main page to append to

  const cardContainer = document.createElement("section");
  cardContainer.setAttribute("class", "cardItemContainer");
  cardContainer.setAttribute("data-cardID", `${id}`);

  const priorityTitle = document.createElement("span");
  priorityTitle.setAttribute("class", "priorityTitleSpan");
  priorityTitle.textContent = `${priority}`;

  cardContainer.appendChild(priorityTitle);

  const leftSideSectionItem = document.createElement("section");
  leftSideSectionItem.setAttribute("class", "leftSideSectionItem");

  const topSectionLeftItem = document.createElement("section");
  topSectionLeftItem.setAttribute("class", "topSectionLeftItem");

  const taskSection = document.createElement("section");
  taskSection.setAttribute("class", "taskSection");

  const inputTask = document.createElement("input");
  inputTask.setAttribute("type", "checkbox");
  const labelTask = document.createElement("label");
  labelTask.setAttribute("for", "checkbox");
  labelTask.setAttribute("class", "labelTask");
  labelTask.textContent = `${task}`;

  taskSection.appendChild(inputTask);
  taskSection.appendChild(labelTask);

  topSectionLeftItem.appendChild(taskSection);

  const middleSectionLeftItem = document.createElement("section");
  middleSectionLeftItem.setAttribute("class", "middleSectionLeftItem");

  const inputDate = document.createElement("p");
  inputDate.setAttribute("class", "inputDate");
  inputDate.textContent = `${date}`;

  middleSectionLeftItem.appendChild(inputDate);

  const bottomSectionLeftItem = document.createElement("section");
  bottomSectionLeftItem.setAttribute("class", "bottomSectionLeftItem");
  const editButton = document.createElement("button");
  editButton.setAttribute("class", "editButton");
  editButton.setAttribute("data-editid", `${id}`);
  editButton.addEventListener("click", editTask);
  editButton.textContent = "Edit";

  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "deleteButtonItem");
  deleteButton.setAttribute("data-deleteid", `${id}`);
  deleteButton.addEventListener("click", removeTaskItem);
  deleteButton.textContent = "Delete";

  bottomSectionLeftItem.appendChild(editButton);
  bottomSectionLeftItem.appendChild(deleteButton);

  leftSideSectionItem.appendChild(topSectionLeftItem);
  leftSideSectionItem.appendChild(middleSectionLeftItem);
  leftSideSectionItem.appendChild(bottomSectionLeftItem);

  const rightSideSectionItem = document.createElement("section");
  rightSideSectionItem.setAttribute("class", "rightSideSectionItem");

  const noteArea = document.createElement("p");
  noteArea.setAttribute("class", "noteArea");
  noteArea.textContent = `${note}`;

  rightSideSectionItem.appendChild(noteArea);

  cardContainer.appendChild(leftSideSectionItem);
  cardContainer.appendChild(rightSideSectionItem);

  return cardContainer;
}

/* 

[
  []TASK
  [NOTES HERE]


]

*/
