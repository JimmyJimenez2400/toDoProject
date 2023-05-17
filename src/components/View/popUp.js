function popUp() {
  const dialogContainer = document.createElement("dialog");

  const topSection = document.createElement("section");
  topSection.classList.add("topSection");
  const middleSection = document.createElement("section");
  middleSection.classList.add("middleSection");
  const bottomSection = document.createElement("section");
  bottomSection.classList.add("bottomSection");

  const titleInput = document.createElement("input");

  dialogContainer.appendChild(topSection);
  dialogContainer.appendChild(middleSection);
  dialogContainer.appendChild(bottomSection);

  topSection.appendChild(titleInput);

  return dialogContainer;
}

export default popUp;

// When clicking the add button, a dialog should appear
// It should require user to enter
// Task for the day, priority, date, notes

// Maybe have one side for tasks and the other for note taking,
// Left to right or top to bottom

// ------------------
//  Main Area
//
// ------------------
//  Select Input (task / notes)
// ------------------
