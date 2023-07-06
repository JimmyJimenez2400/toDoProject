import addProject from "../components/Controller/addProject";
import openForm from "../components/Controller/openProjectForm";

export default function pageLoad() {
  const content = document.querySelector("#content");

  const addProjectButton = document.querySelector(".addProject");
  const projectSubmit = document.querySelector(".submitButton");

  addProjectButton.addEventListener("click", openForm);

  projectSubmit.addEventListener("click", addProject);
  // itemSubmit.addEventListener("click", addTask);

  // addItemButton
  // itemSubmit

  // event listener
  // event listener

  // addProjectButton.addEventListener("click", () => {
  //   const getTitleInput = document.getElementById("title").value;
  //   console.log(getTitleInput);

  // });

  return content;
}
