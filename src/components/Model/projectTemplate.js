const projectLibrary = [];

class Project {
  constructor(title) {
    this.title = title;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  pushProjectToProjectLibrary() {
    projectLibrary.push(this);
    console.log(`pushing ${this.title} to library`);
  }

  removeProjectFromLibrary() {
    const getSpecificIndex = projectLibrary.indexOf(this);
    const getTitle = projectLibrary[getSpecificIndex].title;
    console.log(getSpecificIndex);
    console.log(getTitle);
    console.log(`removing ${this.title} from library`);
    const filterArray = projectLibrary.filter((x) => x === getSpecificIndex);
    console.log(`${filterArray} HELLO`);

    // We need to remove that specific project from the library
  }
}

function newProjects() {
  const titleInput = "Favorites";
  const createTasks = new Project(titleInput);
  createTasks.pushProjectToProjectLibrary();
  console.log(createTasks);
}

export { Project, newProjects, projectLibrary };
