import pageLoad from "./pageLoad/pageLoad";
import "./style.css";

import Project from "./components/Model/projectTemplate";
import Task from "./components/Model/taskTemplate";
import Collection from "./components/Model/collectionTemplate";

pageLoad();

const HomeFolder = new Project("Home");
console.log(HomeFolder);

const cleanToilet = new Task("Clean Toilet", "5/20/2023", "High");
console.log(cleanToilet);
HomeFolder.projectArray.push(cleanToilet);
console.log(HomeFolder);

const cleanRoom = new Task("Clean Room", "5/20/2023", "Medium");

const cleanDesk = new Task("Clean Desk", "5/20/2023", "Low");

HomeFolder.projectArray.push(cleanDesk, cleanRoom);
console.log(HomeFolder.projects);

const SchoolFolder = new Project("School");
console.log(SchoolFolder);

const FolderContainer = new Collection();
FolderContainer.items.push(HomeFolder);
FolderContainer.items.push(SchoolFolder);

console.log(FolderContainer.items);
