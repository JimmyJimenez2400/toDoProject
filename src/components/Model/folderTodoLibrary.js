import FolderProjectsTitle from "./projectTemplate";

const folderToDoList = {
  folderLibrary: [],
  pushFolders_To_ToDoLibrary() {
    this.folderLibrary.push(new FolderProjectsTitle("VideoGames"));
    this.folderLibrary.push(new FolderProjectsTitle("Laundry"));
    this.folderLibrary.push(new FolderProjectsTitle("Stuff"));
    console.log("Push new object to folder");
  },
  removeFolder_From_ToDoLibrary() {},
  iteratingOverArray() {
    for (let i = 0; i < this.folderLibrary.length; i++) {
      console.log(this.folderLibrary[i]);
    }
  },
};

export default folderToDoList;
