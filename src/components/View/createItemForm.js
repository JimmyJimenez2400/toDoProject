export default function createItemForm() {
  const content = document.querySelector("#content");
  const dialogContainer = document.createElement("dialog");
  dialogContainer.setAttribute("class", "itemFormContainer");
  const formHolder = document.createElement("form");
  formHolder.setAttribute("class", "formContainer");
  formHolder.setAttribute("id", "itemForm");
  const topRow = document.createElement("section");
  const itemTitle = document.createElement("label");
  itemTitle.setAttribute("for", "item");
  const itemTitleInput = document.createElement("input");
  itemTitleInput.setAttribute("id", "item");
  itemTitleInput.setAttribute("type", "text");
  topRow.appendChild(itemTitle);
  topRow.appendChild(itemTitleInput);
  const middleRow = document.createElement("section");
  const itemNotesLabel = document.createElement("label");
  const itemNotesText = document.createElement("textarea");
  middleRow.appendChild(itemNotesLabel);
  middleRow.appendChild(itemNotesText);
  const bottomRow = document.createElement("section");
  const cancelButton = document.createElement("button");
  const submitButton = document.createElement("button");
  bottomRow.appendChild(cancelButton);
  bottomRow.appendChild(submitButton);
  formHolder.appendChild(topRow);
  formHolder.appendChild(middleRow);
  formHolder.appendChild(bottomRow);
  dialogContainer.appendChild(formHolder);
  content.appendChild(dialogContainer);
  return content;
}

/* 

task, date, priority, notes

[TASK]
[NOTES] = Text area perhaps

[Data, Priority]

*/
