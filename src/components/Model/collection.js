const projects = [];

const addProjectToProjects = (item) => {
  // push to projects array
  projects.push(item);
};

const getProjects = () => projects;

export { addProjectToProjects, getProjects };
