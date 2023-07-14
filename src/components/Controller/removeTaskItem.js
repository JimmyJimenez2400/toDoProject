import { projects } from "../Model/collection";

export default function removeTask(e) {
  // The purpose is to remove item from their object and from the display items
  // We have a method called removeTodoItem(item)
  //  Which will need the item.id of the item we select

  // So, how willl this play out
  // 1. The user will press on the `delete` button
  // 2. When doing so, we will grab that item ID where we pressed `delete`
  // 2a. We need to remove the visual card first
  // 3. Next we will get that project object, call it's method ``removeTodoItem`
  //  3a. We will have to check which project we are dealing with
  //  3b. Once we get the correct project, we will need to iterate through it's task items
  //  3c. We need to check if taskItem ID is equal to our itemID, if so. we call the method to remove
  // 4. Inset itemID into argument and hope for the best
  // 5. Next, we try to remove the visual card as well

  const buttonID = e.target.getAttribute("data-deleteid");

  const grabAllCards = document.querySelectorAll(".cardItemContainer");
  console.log(grabAllCards);

  for (let i = 0; i < grabAllCards.length; i += 1) {
    const cardID = grabAllCards[i].getAttribute("data-cardid");
    if (buttonID === cardID) {
      console.log(`Match found ID: ${grabAllCards[i]}`);
      grabAllCards[i].remove();

      projects.forEach((project) => {
        for (let p = 0; p < project.task.length; p += 1) {
          const projectTaskID = project.task[p].id;

          if (projectTaskID === buttonID) {
            console.log(
              `Current ${project.task[p].task} ID: ${project.task[p].id}`
            );
            projects.removeTodoItem(buttonID);
            console.log(projects);
          }
        }
      });

      // Next step, we have to remove it from the project task
    }
  }
}
