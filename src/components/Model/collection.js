let projects = [];

const addProjectToProjects = (item) => {
  // push to projects array
  projects.push(item);
};

const removeProjectFromProjects = (item) => {
  console.log(`Calling Projects before filter: ${projects}`);
  projects = projects.filter((object) => object.id !== item.id);
  console.log(`Calling Projects after filter: ${projects}`);
};

const setProjects = (value) => projects.push(value);

const getProjects = () => projects;

export {
  addProjectToProjects,
  getProjects,
  projects,
  setProjects,
  removeProjectFromProjects,
};
