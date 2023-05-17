// In here, we'll make the card in JS so it's render on screen
export default function createCardVisual() {
  const sectionContainer = document.createElement("section");

  const checkList = document.createElement("article");
  checkList.classList.add("checklist");

  const checkBoxInput = document.createElement("input");
  checkBoxInput.setAttribute("type", "checkbox");
  checkBoxInput.setAttribute("id", "checkItem");
  checkBoxInput.setAttribute("name", "checkItem");

  const checkBoxLabel = document.createElement("label");
  checkBoxLabel.setAttribute("for", "checkItem");
  const labelSpan = document.createElement("span");
  labelSpan.classList.add("labelSpan");

  checkBoxLabel.appendChild(labelSpan);

  checkList.appendChild(checkBoxInput);
  checkList.appendChild(labelSpan);

  sectionContainer.appendChild(checkList);

  return sectionContainer;
}

// A card consist of the following information:
/* 
-Input checkbox with value we GET from the user
- Little text area for note taking
-

*/

/* 

So, we have a class 'todoItem`{

The properties it will have are
--title
--notes

The methods will be:
--Edit the task
--Delete the task
--Perhaps, check if we complete the task(checkbox)

}

*/
