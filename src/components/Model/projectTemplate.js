// For Folder Names
export default class FolderProjectsTitle {
  constructor(title) {
    this.title = title;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  removeProjectFromLibrary() {
    const getSpecificIndex = projectLibrary.indexOf(this);
    // const getTitle = projectLibrary[getSpecificIndex].title;
    console.log(getSpecificIndex);
    projectLibrary.splice(getSpecificIndex, 1);
    console.table(projectLibrary);
    // console.log(getTitle);
    // console.log(`removing ${this.title} from library`);
    // const filterArray = projectLibrary.filter((x) => x.title !== getTitle);
    // console.log(`${filterArray} HELLO`);
    // console.log(projectLibrary);

    // We need to remove that specific project from the library
  }
}
