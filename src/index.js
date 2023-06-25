import pageLoad from "./pageLoad/pageLoad";
import "./style.css";

pageLoad();

function checkLiElements() {
  const allLiElements = document.getElementsByTagName("li");

  console.log(allLiElements);
}

checkLiElements();
// implement tab switching

// We need to be able to click on the projects tabs by targeting ID perhaps?
// Once clicked, we want that tab to have a class of "onlineTab" and the rest "offlineTab"
