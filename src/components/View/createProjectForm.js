// This will create a dialog form view

export default function createProjectForm() {
  const content = document.querySelector("#content");
  const dialogContainer = document.createElement("dialog");
  dialogContainer.setAttribute("class", "dialogContainer");

  const formHolder = document.createElement("form");
  formHolder.setAttribute("class", "formContainer");

  const para = document.createElement("p");

  para.textContent = "HELL BIATCH";

  const titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("placeholder", "Enter Name");

  const buttonCancel = document.createElement("button");
  const buttonSubmit = document.createElement("button");

  buttonCancel.setAttribute("formmethod", "dialog");
  buttonCancel.setAttribute("class", "cancelButton");
  buttonCancel.textContent = "Cancel";

  buttonSubmit.setAttribute("type", "submit");
  buttonSubmit.textContent = "Submit";

  dialogContainer.appendChild(formHolder);
  dialogContainer.appendChild(para);

  formHolder.appendChild(titleInput);
  formHolder.appendChild(buttonCancel);
  formHolder.appendChild(buttonSubmit);

  content.appendChild(dialogContainer);

  return content;
}

/* 





*/
