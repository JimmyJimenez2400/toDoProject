import addProject from "../components/Controller/addProject";
import openForm from "../components/Controller/openForm";

export default function pageLoad() {
  const content = document.querySelector("#content");

  const addProjectButton = document.querySelector(".addProject");
  const projectForm = document.getElementById("projectForm");



  addProjectButton.addEventListener("click", openForm);

  projectForm.addEventListener("submit", addProject)




  // addProjectButton.addEventListener("click", () => {
  //   const getTitleInput = document.getElementById("title").value;
  //   console.log(getTitleInput);

  // });

  return content;
}
