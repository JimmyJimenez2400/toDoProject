/* eslint-disable no-dupe-class-members */
// For Folder Names
class Project {
  projectArray = [];

  title;

  constructor(title) {
    this.title = title;
  }

  get title() {
    return this.title;
  }

  set title(value) {
    this.title = value;
  }

  pushToProjects(item) {
    this.projectArray.append(item);
  }

  removeFromProjects(item) {
    // We want to remove specific item from array
    // Give Specific ID to each Task
  }

  get Projects() {
    return this.projectArray;
  }
}

// removeProjectFromLibrary() {
//   const getSpecificIndex = projectLibrary.indexOf(this);
//   // const getTitle = projectLibrary[getSpecificIndex].title;
//   console.log(getSpecificIndex);
//   projectLibrary.splice(getSpecificIndex, 1);
//   console.table(projectLibrary);
//   // console.log(getTitle);
//   // console.log(`removing ${this.title} from library`);
//   // const filterArray = projectLibrary.filter((x) => x.title !== getTitle);
//   // console.log(`${filterArray} HELLO`);
//   // console.log(projectLibrary);

//   // We need to remove that specific project from the library
// }

export default Project;
