/* eslint-disable no-dupe-class-members */
// For Folder Names
import randomString from "../../helpful_functions/createRandomID";

class Project {
  projectArray = [];

  title;

  constructor(title) {
    this.title = title;
    this.id = randomString();
  }

  get title() {
    return this.title;
  }

  set title(value) {
    this.title = value;
  }

  get Projects() {
    return this.projectArray;
  }

  get itemID() {
    return this.id;
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
