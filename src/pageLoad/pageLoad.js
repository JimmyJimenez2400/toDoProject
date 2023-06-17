import addProject from "../components/Controller/addProject";

export default function pageLoad() {
  const content = document.querySelector("#content");

  const addProjectButton = document.querySelector(".addProject");

  addProjectButton.addEventListener("click", () => {
    addProject("NEW TITLE", "YOOOOOOO WHAT IS HAPPENING");
  });

  return content;
}
