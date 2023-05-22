import pageLoad from "./pageLoad/pageLoad";
import "./style.css";

import Project from "./components/Model/projectTemplate";
import Task from "./components/Model/taskTemplate";
import Collection from "./components/Model/collectionTemplate";

pageLoad();

const FolderContainer = new Collection("Folder");

console.log(FolderContainer.title);

const home = new Project("Home");
const school = new Project("School");

FolderContainer.addItem(home);
FolderContainer.addItem(school);

console.log(home);
console.log(school);

function updateUI() {
  const values = [];
  const keys = Object.keys(localStorage);
  let i = keys.length;
  while (i--) {
    values.push(localStorage.getItem(keys[i]));
  }
  document.getElementById("ls-currently").textContent = values;
}

const addButton = document.getElementById("addItem");
// addButton.addEventListener("click", () => {
//   window.localStorage.setItem("name", "Jimmy");
//   updateUI();
// });

console.log(addButton);
