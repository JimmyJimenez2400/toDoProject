export default function createMainTab(title, description, id) {
  // append to the maincontainer
  const mainContainer = document.querySelector(".currentPage");

  const projectContainer = document.createElement("section");
  projectContainer.setAttribute("class", "projectContainer ONLINE");
  projectContainer.setAttribute("project-id", `${id}`);

  const topRow = document.createElement("section");
  topRow.setAttribute("class", "topRow");

  const mainTitle = document.createElement("h2");
  mainTitle.setAttribute("class", "mainTitle");
  mainTitle.textContent = `${title}`;

  const descriptionText = document.createElement("p");
  descriptionText.setAttribute("class", "descriptionText");
  descriptionText.textContent = `${description}`;

  topRow.appendChild(mainTitle);
  topRow.appendChild(descriptionText);

  const middleRow = document.createElement("section");
  middleRow.setAttribute("class", "middleRow");

  // Middle row will be where all task items will go

  const bottomRow = document.createElement("section");
  bottomRow.setAttribute("class", "bottomRow");

  const addTaskButton = document.createElement("button");
  addTaskButton.setAttribute("class", "addTaskButton");
  addTaskButton.textContent = "+";

  bottomRow.appendChild(addTaskButton);

  projectContainer.appendChild(topRow);
  projectContainer.appendChild(middleRow);
  projectContainer.appendChild(bottomRow);

  mainContainer.appendChild(projectContainer);

  return mainContainer;

  // create top row[title and description will be]

  // then create [] big size where all tasks will go
}
