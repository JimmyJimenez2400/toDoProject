export default function togglingProjectView(e) {
  // We need to be able to click on a project to view it's contents, while the others are hidden

  const liElementID = e.currentTarget.id;

  // We click on "LiElement", when doing so. It will showcase the Maintab connected, (Id === id)
  // We have to grab all projectContainers., do an if statement if the liELement ID === projectContainersID, change it's class to ONLINE and the rest OFFLINE

  const grabAllProjectContainers =
    document.querySelectorAll(".projectContainer");

  for (let i = 0; i < grabAllProjectContainers.length; i += 1) {
    const projectContainerID =
      grabAllProjectContainers[i].getAttribute("data-projectid");
    if (projectContainerID === liElementID) {
      grabAllProjectContainers[i].classList.add("ONLINE");
      grabAllProjectContainers[i].classList.remove("OFFLINE");
    } else {
      grabAllProjectContainers[i].classList.add("OFFLINE");
      grabAllProjectContainers[i].classList.remove("ONLINE");
    }
  }
}
