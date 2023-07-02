export default function addItem(e) {
  e.preventDefault();

  console.log("PRESSING ADD ITEM BUTTON");

  const getTaskInput = document.getElementById("task");
  const getNoteInput = document.getElementById("note");
  const getDateInput = document.getElementById("date");
  const getSelectInput = document.getElementById("select");

  console.log(getTaskInput.value);
  console.log(getNoteInput.value);
  console.log(getDateInput.value);
  console.log(getSelectInput.value);

  getTaskInput.value = "";
  getNoteInput.value = "";
  getDateInput.value = "";
  getSelectInput.value = "";

  // const itemTask = document.getElementById("itemTask");
  // const itemDate = document.getElementById("itemDate");
  // const itemPriority = document.getElementById("itemPriority");
  // const itemNote = document.getElementById("itemNote");

  // const callItemMaker = (
  //   itemTask.value,
  //   itemDate.value,
  //   itemPriority.value,
  //   itemNote.value
  // );

  // // call call visual

  // itemTask.value = "";
  // itemDate.value = "";
  // itemPriority.value = "";
  // itemNote.value = "";
}
