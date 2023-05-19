import pageLoad from "./pageLoad/pageLoad";
import folderToDoList from "./components/Model/folderTodoLibrary";
import "./style.css";

pageLoad();

console.log(folderToDoList.folderLibrary);
console.log(folderToDoList.pushFolders_To_ToDoLibrary());
console.log(folderToDoList.folderLibrary);

folderToDoList.iteratingOverArray();
