/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --Licorice: #0D0106;\n  --Zaffre: #3626A7;\n  --Glaucous: #657ED4;\n  --Scarlet: #FF331F;\n  --Ghost-White: #FBFBFF;\n  --Royal-Blue: #00539C;\n  --Peach: #EEA47F;\n}\n\nbody,\nhtml {\n  height: 100%;\n  box-sizing: border-box;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n  padding: 0;\n  margin: 0;\n  outline: 2px solid green;\n\n}\n\nbody {\n  font-size: 16px;\n  background-color: lightblue;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n#content {\n  height: 100%;\n\n\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  grid-template-rows: auto 2fr minmax(200px, 1fr);\n}\n\n#headerContainer {\n  grid-column-start: 1;\n  grid-column-end: -1;\n\n  grid-row-start: 1;\n  grid-row-end: 2;\n  background-color: var(--Licorice);\n  border: 2px solid var(--Ghost-White);\n  color: var(--Ghost-White);\n}\n\n#sideContainer {\n  grid-row-start: 2;\n  grid-row-end: 5;\n  background-color: var(--Licorice);\n  border: 2px solid var(--Ghost-White);\n  display: flex;\n  flex: 2;\n  flex-direction: column;\n}\n\n#displayCurrentPageContainer {\n  grid-row-start: 2;\n  grid-row-end: 4;\n  background-color: var(--Licorice);\n  border: 2px solid var(--Ghost-White);\n}\n\n/* Header */\n\n\n/* Side */\n\n.side {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  color: var(--Ghost-White);\n}\n\n.projectsTitle {\n  margin-bottom: 5px;\n}\n\n.topSection {\n  display: flex;\n  flex-direction: column;\n\n  flex: 1;\n}\n\n.todayFolder {\n  flex: 0 1 10%;\n  border: 2px solid var(--Ghost-White);\n\n}\n\n.upcomingFolder {\n  flex: 0 1 10%;\n  border: 2px solid var(--Ghost-White);\n\n}\n\n.folderContainer {\n  flex: 1;\n  border: 2px solid var(--Ghost-White);\n\n}\n\n.bottomSection {\n  display: inline-flex;\n  flex: 0 1 10%;\n}\n\n.addProjectContainer {\n  display: inline-flex;\n  flex: 1;\n}\n\n.addProject {\n  flex: 1;\n}\n\n.projects {\n  padding: 20px;\n}\n\n.liElement {\n  cursor: pointer;\n  padding: 10px;\n  font-size: 24px;\n  margin-bottom: 20px;\n  background-color: gray;\n  color: var(--Ghost-White);\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n\n.leftSideElementTab {\n  flex: 2;\n}\n\n.rightSideElementTab {\n  display: flex;\n  justify-content: space-between;\n  flex: 1;\n}\n\n\n.liElement:hover {\n  background-color: var(--Scarlet);\n}\n\n/* Main */\n\n\n.dialogContainer {\n  position: absolute;\n  margin-right: auto;\n  margin-left: auto;\n  top: 190px;\n  height: 50%;\n  width: 50%;\n\n  border-radius: 1em;\n\n}\n\n.dialogContainer::backdrop {\n  background-color: hsl(250, 100%, 50%, 0.25)\n}\n\n.formContainer {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  height: 100%;\n\n  padding: 1em;\n\n  border-radius: 1em;\n}\n\n.formContainer .form-list {\n  margin-bottom: 20px;\n}\n\n.formContainer>* {\n  flex: 1;\n}\n\n.formContainer label {\n  display: inline-block;\n  width: 100%;\n  font-size: 24px;\n  font-weight: 900;\n}\n\n.formContainer input {\n  margin-top: 1em;\n  padding: 1em;\n  width: 100%;\n  font-size: 18px;\n\n  border-radius: 1em;\n  border: 5px solid rgb(11, 43, 54);\n\n}\n\n.formContainer .buttonsContainer {\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n}\n\n.formContainer .buttonsContainer>* {\n  flex: 1;\n}\n\n.formContainer .cancelButton,\n.formContainer .submitButton {\n  padding: 1em;\n}\n\n.formContainer .cancelButton {\n  background-color: red;\n  border: none;\n  text-transform: uppercase;\n  font-weight: 900;\n  border-radius: 1em;\n}\n\n.formContainer .submitButton {\n  background-color: green;\n  border: none;\n  text-transform: uppercase;\n  font-weight: 900;\n  border-radius: 1em;\n}\n\n/* Main page*/\n\n.projectContainer {\n  height: 100%;\n  color: var(--Ghost-White);\n  display: flex;\n  flex-direction: column;\n\n  flex: 1;\n}\n\n.ONLINE {\n  display: block;\n}\n\n.OFFLINE {\n  display: none;\n}\n\n.currentPage {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 0.5em;\n\n  height: 100%;\n}\n\n.topRow {\n  display: flex;\n  flex-direction: column;\n  flex: 0 1 10%;\n  border-bottom: 2px solid var(--Scarlet);\n\n}\n\n.mainTitle {\n  font-size: 3rem;\n}\n\n.descriptionText {\n  font-size: 1.9rem;\n}\n\n.topRowSecond {\n  display: flex;\n  justify-content: space-between;\n}\n\n.leftSideSectionItem {\n  padding: 20px;\n}\n\n\n.middleRow {\n  display: grid;\n  grid-template-rows: repeat(2, 1fr);\n  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));\n  gap: 4px;\n\n  height: 100%;\n  overflow: scroll;\n  scroll-behavior: smooth;\n}\n\n.noteArea {\n  padding: 20px;\n  height: 100%;\n}\n\n\n\n.bottomRow {\n\n  margin-left: auto;\n  bottom: 20px;\n  right: 20px;\n}\n\n.addTaskButton {\n  position: absolute;\n  border: none;\n  border-radius: 50%;\n  height: 50px;\n  width: 50px;\n  font-size: 24px;\n\n  bottom: 20px;\n  right: 20px;\n}\n\n\n/* Item form*/\n\n.itemForm {\n  position: absolute;\n  margin-right: auto;\n  margin-left: auto;\n  top: 190px;\n  height: 50%;\n  width: 50%;\n\n  border-radius: 1em;\n}\n\n.itemForm::backdrop {\n  background-color: hsla(105, 53%, 48%, 0.25)\n}\n\n.formContainerItem {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n\n  padding: 1em;\n\n  border-radius: 1em;\n}\n\n.formContainerItem>* {\n  flex: 1;\n}\n\n.formListItem {\n  margin-bottom: 20px;\n}\n\n.formListItem label {\n  display: inline-block;\n  width: 100%;\n  font-size: 24px;\n  font-weight: 900;\n}\n\n/* .formContainerItem input {\n  display: inline-block;\n  width: 100%;\n  font-size: 24px;\n  font-weight: 900;\n} */\n\n.formListItem input {\n  display: inline-block;\n  width: 100%;\n  font-size: 24px;\n  font-weight: 900;\n}\n\n.formListItem textarea {\n  display: inline-block;\n  width: 100%;\n  font-size: 24px;\n  font-weight: 900;\n}\n\n.secondMiddleSection {\n  display: flex;\n  justify-content: space-around;\n}\n\n.secondMiddleSection>* {\n  flex: 1;\n}\n\n.bottomSectionItem {\n  display: flex;\n  justify-content: space-around;\n}\n\n.bottomSectionItem>button {\n  padding: 20px;\n}\n\n/* Card Item*/\n\n.cardItemContainer {\n  background-color: var(--Peach);\n  color: var(--Royal-Blue);\n  border-radius: 20px;\n  margin: 20px;\n  height: 150px;\n  border: none;\n\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n}\n\n.priorityTitleSpan {\n  position: absolute;\n  bottom: 150px;\n  background-color: var(--Ghost-White);\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  padding-left: 25px;\n  padding-right: 25px;\n  text-transform: uppercase;\n  font-weight: 900;\n  font-size: 16px;\n}\n\n.leftSideSectionItem {\n  display: flex;\n  flex-direction: column;\n  flex: 0 1 30%;\n  padding: 20px;\n\n  align-items: center;\n\n  background-color: var(--Royal-Blue);\n  color: var(--Ghost-White);\n\n\n}\n\n.topSectionLeftItem {\n  flex: 2;\n}\n\n.taskSection {\n  display: flex;\n  flex-direction: column;\n}\n\n.middleSectionLeftItem {\n  flex: 1;\n}\n\n.bottomSectionLeftItem {\n  flex: 1;\n}\n\n.rightSideSectionItem {\n  flex: 2;\n}\n\n\n.editItemForm {\n  position: absolute;\n  margin-right: auto;\n  margin-left: auto;\n  top: 290px;\n  height: 50%;\n  width: 50%;\n  left: 500px;\n\n  border-radius: 1em;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --Licorice: #0D0106;\n  --Zaffre: #3626A7;\n  --Glaucous: #657ED4;\n  --Scarlet: #FF331F;\n  --Ghost-White: #FBFBFF;\n  --Royal-Blue: #00539C;\n  --Peach: #EEA47F;\n}\n\nbody,\nhtml {\n  height: 100%;\n  box-sizing: border-box;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n  padding: 0;\n  margin: 0;\n  outline: 2px solid green;\n\n}\n\nbody {\n  font-size: 16px;\n  background-color: lightblue;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n#content {\n  height: 100%;\n\n\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  grid-template-rows: auto 2fr minmax(200px, 1fr);\n}\n\n#headerContainer {\n  grid-column-start: 1;\n  grid-column-end: -1;\n\n  grid-row-start: 1;\n  grid-row-end: 2;\n  background-color: var(--Licorice);\n  border: 2px solid var(--Ghost-White);\n  color: var(--Ghost-White);\n}\n\n#sideContainer {\n  grid-row-start: 2;\n  grid-row-end: 5;\n  background-color: var(--Licorice);\n  border: 2px solid var(--Ghost-White);\n  display: flex;\n  flex: 2;\n  flex-direction: column;\n}\n\n#displayCurrentPageContainer {\n  grid-row-start: 2;\n  grid-row-end: 4;\n  background-color: var(--Licorice);\n  border: 2px solid var(--Ghost-White);\n}\n\n/* Header */\n\n\n/* Side */\n\n.side {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  color: var(--Ghost-White);\n}\n\n.projectsTitle {\n  margin-bottom: 5px;\n}\n\n.topSection {\n  display: flex;\n  flex-direction: column;\n\n  flex: 1;\n}\n\n.todayFolder {\n  flex: 0 1 10%;\n  border: 2px solid var(--Ghost-White);\n\n}\n\n.upcomingFolder {\n  flex: 0 1 10%;\n  border: 2px solid var(--Ghost-White);\n\n}\n\n.folderContainer {\n  flex: 1;\n  border: 2px solid var(--Ghost-White);\n\n}\n\n.bottomSection {\n  display: inline-flex;\n  flex: 0 1 10%;\n}\n\n.addProjectContainer {\n  display: inline-flex;\n  flex: 1;\n}\n\n.addProject {\n  flex: 1;\n}\n\n.projects {\n  padding: 20px;\n}\n\n.liElement {\n  cursor: pointer;\n  padding: 10px;\n  font-size: 24px;\n  margin-bottom: 20px;\n  background-color: gray;\n  color: var(--Ghost-White);\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n\n.leftSideElementTab {\n  flex: 2;\n}\n\n.rightSideElementTab {\n  display: flex;\n  justify-content: space-between;\n  flex: 1;\n}\n\n\n.liElement:hover {\n  background-color: var(--Scarlet);\n}\n\n/* Main */\n\n\n.dialogContainer {\n  position: absolute;\n  margin-right: auto;\n  margin-left: auto;\n  top: 190px;\n  height: 50%;\n  width: 50%;\n\n  border-radius: 1em;\n\n}\n\n.dialogContainer::backdrop {\n  background-color: hsl(250, 100%, 50%, 0.25)\n}\n\n.formContainer {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  height: 100%;\n\n  padding: 1em;\n\n  border-radius: 1em;\n}\n\n.formContainer .form-list {\n  margin-bottom: 20px;\n}\n\n.formContainer>* {\n  flex: 1;\n}\n\n.formContainer label {\n  display: inline-block;\n  width: 100%;\n  font-size: 24px;\n  font-weight: 900;\n}\n\n.formContainer input {\n  margin-top: 1em;\n  padding: 1em;\n  width: 100%;\n  font-size: 18px;\n\n  border-radius: 1em;\n  border: 5px solid rgb(11, 43, 54);\n\n}\n\n.formContainer .buttonsContainer {\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n}\n\n.formContainer .buttonsContainer>* {\n  flex: 1;\n}\n\n.formContainer .cancelButton,\n.formContainer .submitButton {\n  padding: 1em;\n}\n\n.formContainer .cancelButton {\n  background-color: red;\n  border: none;\n  text-transform: uppercase;\n  font-weight: 900;\n  border-radius: 1em;\n}\n\n.formContainer .submitButton {\n  background-color: green;\n  border: none;\n  text-transform: uppercase;\n  font-weight: 900;\n  border-radius: 1em;\n}\n\n/* Main page*/\n\n.projectContainer {\n  height: 100%;\n  color: var(--Ghost-White);\n  display: flex;\n  flex-direction: column;\n\n  flex: 1;\n}\n\n.ONLINE {\n  display: block;\n}\n\n.OFFLINE {\n  display: none;\n}\n\n.currentPage {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 0.5em;\n\n  height: 100%;\n}\n\n.topRow {\n  display: flex;\n  flex-direction: column;\n  flex: 0 1 10%;\n  border-bottom: 2px solid var(--Scarlet);\n\n}\n\n.mainTitle {\n  font-size: 3rem;\n}\n\n.descriptionText {\n  font-size: 1.9rem;\n}\n\n.topRowSecond {\n  display: flex;\n  justify-content: space-between;\n}\n\n.leftSideSectionItem {\n  padding: 20px;\n}\n\n\n.middleRow {\n  display: grid;\n  grid-template-rows: repeat(2, 1fr);\n  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));\n  gap: 4px;\n\n  height: 100%;\n  overflow: scroll;\n  scroll-behavior: smooth;\n}\n\n.noteArea {\n  padding: 20px;\n  height: 100%;\n}\n\n\n\n.bottomRow {\n\n  margin-left: auto;\n  bottom: 20px;\n  right: 20px;\n}\n\n.addTaskButton {\n  position: absolute;\n  border: none;\n  border-radius: 50%;\n  height: 50px;\n  width: 50px;\n  font-size: 24px;\n\n  bottom: 20px;\n  right: 20px;\n}\n\n\n/* Item form*/\n\n.itemForm {\n  position: absolute;\n  margin-right: auto;\n  margin-left: auto;\n  top: 190px;\n  height: 50%;\n  width: 50%;\n\n  border-radius: 1em;\n}\n\n.itemForm::backdrop {\n  background-color: hsla(105, 53%, 48%, 0.25)\n}\n\n.formContainerItem {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n\n  padding: 1em;\n\n  border-radius: 1em;\n}\n\n.formContainerItem>* {\n  flex: 1;\n}\n\n.formListItem {\n  margin-bottom: 20px;\n}\n\n.formListItem label {\n  display: inline-block;\n  width: 100%;\n  font-size: 24px;\n  font-weight: 900;\n}\n\n/* .formContainerItem input {\n  display: inline-block;\n  width: 100%;\n  font-size: 24px;\n  font-weight: 900;\n} */\n\n.formListItem input {\n  display: inline-block;\n  width: 100%;\n  font-size: 24px;\n  font-weight: 900;\n}\n\n.formListItem textarea {\n  display: inline-block;\n  width: 100%;\n  font-size: 24px;\n  font-weight: 900;\n}\n\n.secondMiddleSection {\n  display: flex;\n  justify-content: space-around;\n}\n\n.secondMiddleSection>* {\n  flex: 1;\n}\n\n.bottomSectionItem {\n  display: flex;\n  justify-content: space-around;\n}\n\n.bottomSectionItem>button {\n  padding: 20px;\n}\n\n/* Card Item*/\n\n.cardItemContainer {\n  background-color: var(--Peach);\n  color: var(--Royal-Blue);\n  border-radius: 20px;\n  margin: 20px;\n  height: 150px;\n  border: none;\n\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n}\n\n.priorityTitleSpan {\n  position: absolute;\n  bottom: 150px;\n  background-color: var(--Ghost-White);\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  padding-left: 25px;\n  padding-right: 25px;\n  text-transform: uppercase;\n  font-weight: 900;\n  font-size: 16px;\n}\n\n.leftSideSectionItem {\n  display: flex;\n  flex-direction: column;\n  flex: 0 1 30%;\n  padding: 20px;\n\n  align-items: center;\n\n  background-color: var(--Royal-Blue);\n  color: var(--Ghost-White);\n\n\n}\n\n.topSectionLeftItem {\n  flex: 2;\n}\n\n.taskSection {\n  display: flex;\n  flex-direction: column;\n}\n\n.middleSectionLeftItem {\n  flex: 1;\n}\n\n.bottomSectionLeftItem {\n  flex: 1;\n}\n\n.rightSideSectionItem {\n  flex: 2;\n}\n\n\n.editItemForm {\n  position: absolute;\n  margin-right: auto;\n  margin-left: auto;\n  top: 290px;\n  height: 50%;\n  width: 50%;\n  left: 500px;\n\n  border-radius: 1em;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/Controller/addProject.js":
/*!*************************************************!*\
  !*** ./src/components/Controller/addProject.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addProject)
/* harmony export */ });
/* harmony import */ var _Model_collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Model/collection */ "./src/components/Model/collection.js");
/* harmony import */ var _View_createTabProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../View/createTabProject */ "./src/components/View/createTabProject.js");
/* harmony import */ var _View_createMainTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../View/createMainTab */ "./src/components/View/createMainTab.js");




function addProject(e) {
  e.preventDefault();

  const titleInput = document.getElementById("title");
  const descriptionInput = document.getElementById("description");

  const item = (0,_Model_collection__WEBPACK_IMPORTED_MODULE_0__.createProject)(titleInput.value, descriptionInput.value);

  console.log(`HELLLO: ${item.title}`);

  (0,_View_createTabProject__WEBPACK_IMPORTED_MODULE_1__["default"])(item.title, item.id);
  (0,_View_createMainTab__WEBPACK_IMPORTED_MODULE_2__["default"])(item.title, item.description, item.id);

  titleInput.value = "";
  descriptionInput.value = "";
}


/***/ }),

/***/ "./src/components/Controller/addTask.js":
/*!**********************************************!*\
  !*** ./src/components/Controller/addTask.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addItem)
/* harmony export */ });
/* harmony import */ var _Model_collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Model/collection */ "./src/components/Model/collection.js");
/* harmony import */ var _View_createCardVisual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../View/createCardVisual */ "./src/components/View/createCardVisual.js");
/* harmony import */ var _openItemForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./openItemForm */ "./src/components/Controller/openItemForm.js");




function addItem(e) {
  e.preventDefault();

  (0,_openItemForm__WEBPACK_IMPORTED_MODULE_2__["default"])();

  // We want to go through currentPage children and find which ID matches with our e.target.id, if so we append createVisualItemCard

  const taskInput = document.getElementById("task");
  const noteInput = document.getElementById("note");
  const dateInput = document.getElementById("date");
  const priorityInput = document.getElementById("select");

  const dialogContainer = document.querySelector(".itemForm");

  const cancelButton = document.querySelector(".itemCancel");

  cancelButton.addEventListener("click", () => {
    dialogContainer.close();
    dialogContainer.remove();
  });

  const submitButton = document.querySelector(".itemSubmit");
  submitButton.addEventListener("click", () => {
    const mainPages2 = document.querySelectorAll(".projectContainer");

    _Model_collection__WEBPACK_IMPORTED_MODULE_0__.projects.forEach((project) => {
      if (project.id === e.target.id) {
        const itemMade = project.createTodoItem(
          taskInput.value,
          dateInput.value,
          priorityInput.value,
          noteInput.value
        );

        for (let i = 0; i < mainPages2.length; i += 1) {
          const pageID = mainPages2[i].getAttribute("data-projectid");

          if (pageID === e.target.id) {
            mainPages2[i]
              .querySelector(".middleRow")
              .appendChild(
                (0,_View_createCardVisual__WEBPACK_IMPORTED_MODULE_1__["default"])(
                  itemMade.task,
                  itemMade.notes,
                  itemMade.priority,
                  itemMade.date,
                  itemMade.id
                )
              );
          }
        }
      }
    });

    dialogContainer.close();
    dialogContainer.remove();
  });
}


/***/ }),

/***/ "./src/components/Controller/editTask.js":
/*!***********************************************!*\
  !*** ./src/components/Controller/editTask.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ editTask)
/* harmony export */ });
/* harmony import */ var _Model_collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Model/collection */ "./src/components/Model/collection.js");
/* harmony import */ var _openEditForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./openEditForm */ "./src/components/Controller/openEditForm.js");



function editTask(e) {
  e.preventDefault();
  (0,_openEditForm__WEBPACK_IMPORTED_MODULE_1__["default"])();

  console.log(_Model_collection__WEBPACK_IMPORTED_MODULE_0__.projects);

  const buttonID = e.target.getAttribute("data-editid");
  console.log(`Edit ID: ${buttonID}`);

  const getTask = document.getElementById("editTask");
  const getNote = document.getElementById("editNote");
  const getDate = document.getElementById("editDate");
  const getPriority = document.getElementById("editSelect");

  const editDialogContainer = document.querySelector(".editItemForm");

  const cancelButton = document.querySelector(".editItemCancel");

  const submitButton = document.querySelector(".editItemSubmit");

  cancelButton.addEventListener("click", () => {
    editDialogContainer.close();
    editDialogContainer.remove();
  });

  submitButton.addEventListener("click", () => {
    _Model_collection__WEBPACK_IMPORTED_MODULE_0__.projects.forEach((project) => {
      project.updateTodoItem(
        buttonID,
        getTask.value,
        getDate.value,
        getPriority.value,
        getNote.value
      );
    });

    // Now we update the card
    const grabAllCardVisuals = document.querySelectorAll(".cardItemContainer");
    console.log(grabAllCardVisuals);

    for (let i = 0; i < grabAllCardVisuals.length; i += 1) {
      const cardID = grabAllCardVisuals[i].getAttribute("data-cardid");
      console.log(`Card ID: ${cardID}`);
      if (cardID === buttonID) {
        console.log(grabAllCardVisuals[i]);
        const changeTaskText =
          grabAllCardVisuals[i].querySelector(".labelTask");
        const changeNoteText = grabAllCardVisuals[i].querySelector(".noteArea");
        const changeDate = grabAllCardVisuals[i].querySelector(".inputDate");
        const changePriority =
          grabAllCardVisuals[i].querySelector(".priorityTitleSpan");

        changeTaskText.textContent = `${getTask.value}`;
        changeNoteText.textContent = `${getNote.value}`;
        changeDate.textContent = `${getDate.value}`;
        changePriority.textContent = `${getPriority.value}`;
      }
    }

    editDialogContainer.close();
    editDialogContainer.remove();
  });

  // iterate through card visuals
  // if match, that's the one we want in if statement

  // Grab the id's, then we will use their values
  // We have to make sure that we're editing the right object
  // Maybe user for loop projects.task??

  // projects.forEach(project =>{ <- Will go inside an if statement
  //   project.updateTodoItem();
  // })
}


/***/ }),

/***/ "./src/components/Controller/openEditForm.js":
/*!***************************************************!*\
  !*** ./src/components/Controller/openEditForm.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ openEditForm)
/* harmony export */ });
/* harmony import */ var _View_createEditForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../View/createEditForm */ "./src/components/View/createEditForm.js");


function openEditForm() {
  (0,_View_createEditForm__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const formOpen = document.querySelector(".editItemForm");
  formOpen.showModal();
}


/***/ }),

/***/ "./src/components/Controller/openItemForm.js":
/*!***************************************************!*\
  !*** ./src/components/Controller/openItemForm.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ openItemForm)
/* harmony export */ });
/* harmony import */ var _View_createItemForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../View/createItemForm */ "./src/components/View/createItemForm.js");


function openItemForm() {
  (0,_View_createItemForm__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const formOpen = document.querySelector(".itemForm");
  formOpen.showModal();
}


/***/ }),

/***/ "./src/components/Controller/openProjectForm.js":
/*!******************************************************!*\
  !*** ./src/components/Controller/openProjectForm.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ openForm)
/* harmony export */ });
/* harmony import */ var _View_createProjectForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../View/createProjectForm */ "./src/components/View/createProjectForm.js");


(0,_View_createProjectForm__WEBPACK_IMPORTED_MODULE_0__["default"])();

function openForm() {
  const formOpen = document.querySelector(".dialogContainer");
  formOpen.showModal();
}


/***/ }),

/***/ "./src/components/Controller/removeTaskItem.js":
/*!*****************************************************!*\
  !*** ./src/components/Controller/removeTaskItem.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ removeTask)
/* harmony export */ });
/* harmony import */ var _Model_collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Model/collection */ "./src/components/Model/collection.js");


function removeTask(e) {
  // The purpose is to remove item from their object and from the display items
  // We have a method called removeTodoItem(item)
  //  Which will need the item.id of the item we select

  // So, how willl this play out
  // 1. The user will press on the `delete` button
  // 2. When doing so, we will grab that item ID where we pressed `delete`
  // 2a. We need to remove the visual card first
  // 3. Next we will get that project object, call it's method ``removeTodoItem`
  //  3a. We will have to check which project we are dealing with
  //  3b. Once we get the correct project, we will need to iterate through it's task items
  //  3c. We need to check if taskItem ID is equal to our itemID, if so. we call the method to remove
  // 4. Inset itemID into argument and hope for the best
  // 5. Next, we try to remove the visual card as well

  const buttonID = e.target.getAttribute("data-deleteid");

  const grabAllCards = document.querySelectorAll(".cardItemContainer");

  for (let i = 0; i < grabAllCards.length; i += 1) {
    const cardID = grabAllCards[i].getAttribute("data-cardid");
    if (buttonID === cardID) {
      grabAllCards[i].remove();

      _Model_collection__WEBPACK_IMPORTED_MODULE_0__.projects.forEach((project) => {
        project.removeTodoItem(buttonID);
      });
    }
  }
}


/***/ }),

/***/ "./src/components/Model/collection.js":
/*!********************************************!*\
  !*** ./src/components/Model/collection.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "getProjects": () => (/* binding */ getProjects),
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "readInformation": () => (/* binding */ readInformation),
/* harmony export */   "retrieveFromLocalStorage": () => (/* binding */ retrieveFromLocalStorage),
/* harmony export */   "setProjects": () => (/* binding */ setProjects),
/* harmony export */   "updateInformation": () => (/* binding */ updateInformation)
/* harmony export */ });
/* harmony import */ var _helpful_functions_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpful_functions/localStorage */ "./src/helpful_functions/localStorage.js");
/* harmony import */ var _projectTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectTemplate */ "./src/components/Model/projectTemplate.js");



// eslint-disable-next-line import/no-mutable-exports
let projects = [];

const createProject = (title, description) => {
  const newProject = new _projectTemplate__WEBPACK_IMPORTED_MODULE_1__["default"](title, description);
  projects.push(newProject);

  return newProject;
};

const deleteProject = (item) => {
  console.log(`Calling Projects before filter: ${projects}`);
  projects = projects.filter((object) => object.id !== item.id);
  console.log(`Calling Projects after filter: ${projects}`);
};

const updateInformation = (id, title, description) => {
  projects = projects.map((item) =>
    item.id === id ? new _projectTemplate__WEBPACK_IMPORTED_MODULE_1__["default"](title, description, id) : item
  );
};

const readInformation = () => {
  projects.forEach((project) => project);
};

// Still thinking about how I'll use setProjects
const setProjects = (value) => projects.push(value);

const getProjects = () => projects;

const retrieveFromLocalStorage = (keyName) => {
  const hello = (0,_helpful_functions_localStorage__WEBPACK_IMPORTED_MODULE_0__.lookForDataInLS)(keyName);
  // data.forEach((item) =>
  //   setProjects(Object.assign(new Project(), item))
  console.log(hello);
  return hello.forEach((item) =>
    setProjects(Object.assign(new _projectTemplate__WEBPACK_IMPORTED_MODULE_1__["default"](), item))
  );
};




/***/ }),

/***/ "./src/components/Model/projectTemplate.js":
/*!*************************************************!*\
  !*** ./src/components/Model/projectTemplate.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpful_functions_createRandomID__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpful_functions/createRandomID */ "./src/helpful_functions/createRandomID.js");
/* harmony import */ var _taskTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskTemplate */ "./src/components/Model/taskTemplate.js");
/* eslint-disable no-dupe-class-members */
// For Folder Names



class Project {
  constructor(title, description, id = (0,_helpful_functions_createRandomID__WEBPACK_IMPORTED_MODULE_0__["default"])()) {
    this.title = title;
    this.description = description;
    this.id = id;
    this.tasks = [];
  }

  set title(value) {
    if (value.length < 3)
      throw new Error("Invalid, note description is too short.");

    this.current_title = value;
  }

  get title() {
    return this.current_title;
  }

  set description(value) {
    if (value.length < 3)
      throw new Error("Invalid, note description is too short.");

    this.current_description = value;
  }

  get description() {
    return this.current_description;
  }

  get task() {
    return this.tasks;
  }

  createTodoItem(task, date, priority, notes, id = (0,_helpful_functions_createRandomID__WEBPACK_IMPORTED_MODULE_0__["default"])()) {
    const todoItem = new _taskTemplate__WEBPACK_IMPORTED_MODULE_1__["default"](task, date, priority, notes, id);
    this.tasks.push(todoItem);
    return todoItem;
  }

  removeTodoItem(item) {
    this.tasks = this.tasks.filter((task) => task.id !== item);
  }

  updateTodoItem(id, task, date, priority, notes) {
    this.tasks = this.task.map((item) =>
      item.id === id ? new _taskTemplate__WEBPACK_IMPORTED_MODULE_1__["default"](task, date, priority, notes, id) : item
    );
  }

  retrieveItemsInProject() {
    this.tasks.forEach((item) => item);
  }

  byID(id) {
    return this.tasks.find((task) => task.id === id);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);


/***/ }),

/***/ "./src/components/Model/taskTemplate.js":
/*!**********************************************!*\
  !*** ./src/components/Model/taskTemplate.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable no-dupe-class-members */
class Task {
  constructor(task, date, priority, notes, id) {
    this.task = task;
    this.date = date;
    this.priority = priority;
    this.notes = notes;

    this.id = id;
  }

  get task() {
    return this.current_task;
  }

  set task(value) {
    if (value === "" || value.length < 3) throw new Error("Invalid Task");

    this.current_task = value;
  }

  get priority() {
    return this.current_priority;
  }

  // set priority(value) {
  //   if (!["high", "medium", "low"].includes(value.toLowerCase()))
  //     throw new Error("Invalid, not one of the choices");

  //   this.current_priority = value;
  // }

  set priority(value) {
    this.current_priority = value;
  }

  get notes() {
    return this.current_notes;
  }

  set notes(value) {
    if (value.length < 10)
      throw new Error("Invalid, note description is too short.");

    this.current_notes = value;
  }

  toJSON() {
    return {
      task: this.task,
      date: this.date,
      priority: this.priority,
      notes: this.notes,
      id: this.id,
    };
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);


/***/ }),

/***/ "./src/components/View/createCardVisual.js":
/*!*************************************************!*\
  !*** ./src/components/View/createCardVisual.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createItemCard)
/* harmony export */ });
/* harmony import */ var _Controller_removeTaskItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Controller/removeTaskItem */ "./src/components/Controller/removeTaskItem.js");
/* harmony import */ var _Controller_editTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Controller/editTask */ "./src/components/Controller/editTask.js");



// Create how the initial card will look
function createItemCard(task, note, priority, date, id) {
  // grab currentPage or main page to append to

  const cardContainer = document.createElement("section");
  cardContainer.setAttribute("class", "cardItemContainer");
  cardContainer.setAttribute("data-cardID", `${id}`);

  const priorityTitle = document.createElement("span");
  priorityTitle.setAttribute("class", "priorityTitleSpan");
  priorityTitle.textContent = `${priority}`;

  cardContainer.appendChild(priorityTitle);

  const leftSideSectionItem = document.createElement("section");
  leftSideSectionItem.setAttribute("class", "leftSideSectionItem");

  const topSectionLeftItem = document.createElement("section");
  topSectionLeftItem.setAttribute("class", "topSectionLeftItem");

  const taskSection = document.createElement("section");
  taskSection.setAttribute("class", "taskSection");

  const inputTask = document.createElement("input");
  inputTask.setAttribute("type", "checkbox");
  const labelTask = document.createElement("label");
  labelTask.setAttribute("for", "checkbox");
  labelTask.setAttribute("class", "labelTask");
  labelTask.textContent = `${task}`;

  taskSection.appendChild(inputTask);
  taskSection.appendChild(labelTask);

  topSectionLeftItem.appendChild(taskSection);

  const middleSectionLeftItem = document.createElement("section");
  middleSectionLeftItem.setAttribute("class", "middleSectionLeftItem");

  const inputDate = document.createElement("p");
  inputDate.setAttribute("class", "inputDate");
  inputDate.textContent = `${date}`;

  middleSectionLeftItem.appendChild(inputDate);

  const bottomSectionLeftItem = document.createElement("section");
  bottomSectionLeftItem.setAttribute("class", "bottomSectionLeftItem");
  const editButton = document.createElement("button");
  editButton.setAttribute("class", "editButton");
  editButton.setAttribute("data-editid", `${id}`);
  editButton.addEventListener("click", _Controller_editTask__WEBPACK_IMPORTED_MODULE_1__["default"]);
  editButton.textContent = "Edit";

  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "deleteButtonItem");
  deleteButton.setAttribute("data-deleteid", `${id}`);
  deleteButton.addEventListener("click", _Controller_removeTaskItem__WEBPACK_IMPORTED_MODULE_0__["default"]);
  deleteButton.textContent = "Delete";

  bottomSectionLeftItem.appendChild(editButton);
  bottomSectionLeftItem.appendChild(deleteButton);

  leftSideSectionItem.appendChild(topSectionLeftItem);
  leftSideSectionItem.appendChild(middleSectionLeftItem);
  leftSideSectionItem.appendChild(bottomSectionLeftItem);

  const rightSideSectionItem = document.createElement("section");
  rightSideSectionItem.setAttribute("class", "rightSideSectionItem");

  const noteArea = document.createElement("p");
  noteArea.setAttribute("class", "noteArea");
  noteArea.textContent = `${note}`;

  rightSideSectionItem.appendChild(noteArea);

  cardContainer.appendChild(leftSideSectionItem);
  cardContainer.appendChild(rightSideSectionItem);

  return cardContainer;
}

/* 

[
  []TASK
  [NOTES HERE]


]

*/


/***/ }),

/***/ "./src/components/View/createEditForm.js":
/*!***********************************************!*\
  !*** ./src/components/View/createEditForm.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createEditForm)
/* harmony export */ });
function createEditForm() {
  const content = document.querySelector("#content");

  const dialogContainer = document.createElement("dialog");
  dialogContainer.setAttribute("class", "editItemForm");

  const formContainer = document.createElement("form");
  formContainer.classList.add("formContainerItem");

  const topSection = document.createElement("section");
  topSection.setAttribute("class", "topSectionItem formListItem");

  const taskLabel = document.createElement("label");
  taskLabel.setAttribute("for", "editTask");
  taskLabel.textContent = "Task:";

  const taskInput = document.createElement("input");
  taskInput.setAttribute("id", "editTask");
  taskInput.setAttribute("type", "text");

  topSection.appendChild(taskLabel);
  topSection.appendChild(taskInput);

  topSection.appendChild(taskLabel);
  topSection.appendChild(taskInput);

  const middleSection = document.createElement("section");
  middleSection.setAttribute("class", "middleSectionItem formListItem");

  const textAreaLabel = document.createElement("label");
  textAreaLabel.setAttribute("for", "editNote");
  textAreaLabel.textContent = "Note:";

  const textAreaInput = document.createElement("textarea");
  textAreaInput.setAttribute("type", "text");
  textAreaInput.setAttribute("id", "editNote");

  middleSection.appendChild(textAreaLabel);
  middleSection.appendChild(textAreaInput);

  const secondMiddleSection = document.createElement("section");
  secondMiddleSection.setAttribute("class", "secondMiddleSection formListItem");

  const calendarInput = document.createElement("input");
  calendarInput.setAttribute("id", "editDate");
  calendarInput.type = "date";

  const selectDropDownInput = document.createElement("select");
  selectDropDownInput.setAttribute("id", "editSelect");
  const lowTier = document.createElement("option");
  lowTier.setAttribute = ("value", "low");
  lowTier.textContent = "Low";

  const mediumTier = document.createElement("option");
  mediumTier.setAttribute = ("value", "medium");
  mediumTier.textContent = "Medium";

  const highTier = document.createElement("option");
  highTier.setAttribute = ("value", "high");
  highTier.textContent = "High";

  selectDropDownInput.appendChild(lowTier);
  selectDropDownInput.appendChild(mediumTier);
  selectDropDownInput.appendChild(highTier);

  secondMiddleSection.appendChild(calendarInput);
  secondMiddleSection.appendChild(selectDropDownInput);

  const bottomSection = document.createElement("section");
  bottomSection.setAttribute("class", "bottomSectionItem formListItem");

  const cancelButton = document.createElement("button");
  cancelButton.setAttribute("formmethod", "dialog");

  cancelButton.setAttribute("class", "editItemCancel");
  cancelButton.textContent = "Cancel";

  const submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("class", "editItemSubmit");
  submitButton.textContent = "Submit";

  bottomSection.appendChild(cancelButton);
  bottomSection.appendChild(submitButton);

  formContainer.appendChild(topSection);
  formContainer.appendChild(middleSection);
  formContainer.appendChild(secondMiddleSection);
  formContainer.appendChild(bottomSection);

  dialogContainer.appendChild(formContainer);

  content.appendChild(dialogContainer);

  return content;
}

/* 

Input

Input Note

Date Input | Priority Input

Cancel | Submit <- Will update card visuals

*/


/***/ }),

/***/ "./src/components/View/createItemForm.js":
/*!***********************************************!*\
  !*** ./src/components/View/createItemForm.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createItemForm)
/* harmony export */ });
function createItemForm() {
  const content = document.querySelector("#content");

  const dialogContainer = document.createElement("dialog");
  dialogContainer.setAttribute("class", "itemForm");

  const formContainer = document.createElement("form");
  formContainer.classList.add("formContainerItem");

  const topSection = document.createElement("section");
  topSection.setAttribute("class", "topSectionItem formListItem");

  const taskLabel = document.createElement("label");
  taskLabel.setAttribute("for", "task");
  taskLabel.textContent = "Task:";

  const taskInput = document.createElement("input");
  taskInput.setAttribute("id", "task");
  taskInput.setAttribute("type", "text");

  topSection.appendChild(taskLabel);
  topSection.appendChild(taskInput);

  topSection.appendChild(taskLabel);
  topSection.appendChild(taskInput);

  const middleSection = document.createElement("section");
  middleSection.setAttribute("class", "middleSectionItem formListItem");

  const textAreaLabel = document.createElement("label");
  textAreaLabel.setAttribute("for", "note");
  textAreaLabel.textContent = "Note:";

  const textAreaInput = document.createElement("textarea");
  textAreaInput.setAttribute("type", "text");
  textAreaInput.setAttribute("id", "note");

  middleSection.appendChild(textAreaLabel);
  middleSection.appendChild(textAreaInput);

  const secondMiddleSection = document.createElement("section");
  secondMiddleSection.setAttribute("class", "secondMiddleSection formListItem");

  const calendarInput = document.createElement("input");
  calendarInput.setAttribute("id", "date");
  calendarInput.type = "date";

  const selectDropDownInput = document.createElement("select");
  selectDropDownInput.setAttribute("id", "select");
  const lowTier = document.createElement("option");
  lowTier.setAttribute = ("value", "low");
  lowTier.textContent = "Low";

  const mediumTier = document.createElement("option");
  mediumTier.setAttribute = ("value", "medium");
  mediumTier.textContent = "Medium";

  const highTier = document.createElement("option");
  highTier.setAttribute = ("value", "high");
  highTier.textContent = "High";

  selectDropDownInput.appendChild(lowTier);
  selectDropDownInput.appendChild(mediumTier);
  selectDropDownInput.appendChild(highTier);

  secondMiddleSection.appendChild(calendarInput);
  secondMiddleSection.appendChild(selectDropDownInput);

  const bottomSection = document.createElement("section");
  bottomSection.setAttribute("class", "bottomSectionItem formListItem");

  const cancelButton = document.createElement("button");
  cancelButton.setAttribute("formmethod", "dialog");

  cancelButton.setAttribute("class", "itemCancel");
  cancelButton.textContent = "Cancel";


  const submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("class", "itemSubmit");
  submitButton.textContent = "Submit";

  bottomSection.appendChild(cancelButton);
  bottomSection.appendChild(submitButton);

  formContainer.appendChild(topSection);
  formContainer.appendChild(middleSection);
  formContainer.appendChild(secondMiddleSection);
  formContainer.appendChild(bottomSection);

  dialogContainer.appendChild(formContainer);

  content.appendChild(dialogContainer);

  return content;
}


/***/ }),

/***/ "./src/components/View/createMainTab.js":
/*!**********************************************!*\
  !*** ./src/components/View/createMainTab.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMainTab)
/* harmony export */ });
/* harmony import */ var _Controller_addTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Controller/addTask */ "./src/components/Controller/addTask.js");


function createMainTab(title, description, id) {
  // append to the maincontainer
  const mainContainer = document.querySelector(".currentPage");

  const projectContainer = document.createElement("section");
  projectContainer.setAttribute("class", "projectContainer");
  projectContainer.setAttribute("data-projectid", `${id}`);

  const topRow = document.createElement("section");
  topRow.setAttribute("class", "topRow");

  const mainTitle = document.createElement("h2");
  mainTitle.setAttribute("class", "mainTitle");
  mainTitle.textContent = `${title}`;

  const topRowSecond = document.createElement("section");
  topRowSecond.setAttribute("class", "topRowSecond");

  const descriptionText = document.createElement("p");
  descriptionText.setAttribute("class", "descriptionText");
  descriptionText.textContent = `${description}`;

  const editButton = document.createElement("button");
  editButton.setAttribute("class", "editButton");
  editButton.textContent = "Edit";

  topRow.appendChild(mainTitle);
  topRow.appendChild(topRowSecond);

  topRowSecond.appendChild(descriptionText);
  topRowSecond.appendChild(editButton);

  const middleRow = document.createElement("section");
  middleRow.setAttribute("class", "middleRow");

  // Middle row will be where all task items will go

  const bottomRow = document.createElement("section");
  bottomRow.setAttribute("class", "bottomRow");

  const addTaskButton = document.createElement("button");
  addTaskButton.setAttribute("class", "addTaskButton");
  addTaskButton.setAttribute("id", id);
  addTaskButton.textContent = "+";

  addTaskButton.addEventListener("click", _Controller_addTask__WEBPACK_IMPORTED_MODULE_0__["default"]);

  bottomRow.appendChild(addTaskButton);

  projectContainer.appendChild(topRow);
  projectContainer.appendChild(middleRow);
  projectContainer.appendChild(bottomRow);

  mainContainer.appendChild(projectContainer);

  return projectContainer;

  // create top row[title and description will be]

  // then create [] big size where all tasks will go
}


/***/ }),

/***/ "./src/components/View/createProjectForm.js":
/*!**************************************************!*\
  !*** ./src/components/View/createProjectForm.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createProjectForm)
/* harmony export */ });
// This will create a dialog form view

function createProjectForm() {
  const content = document.querySelector("#content");

  const dialogContainer = document.createElement("dialog");

  dialogContainer.setAttribute("class", "dialogContainer");

  const formHolder = document.createElement("form");
  formHolder.setAttribute("class", "formContainer");
  formHolder.setAttribute("id", "projectForm");

  const div1Container = document.createElement("div");
  div1Container.setAttribute("class", "form-list");

  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "title");
  titleLabel.textContent = "Title:";

  const titleInput = document.createElement("input");
  titleInput.setAttribute("id", "title");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("class", "titleInputValue");
  titleInput.setAttribute("placeholder", "Enter Name");

  div1Container.appendChild(titleLabel);
  div1Container.appendChild(titleInput);

  const div2Container = document.createElement("div");
  div2Container.setAttribute("class", "form-list");

  const descriptionTitle = document.createElement("label");
  descriptionTitle.setAttribute("for", "description");
  descriptionTitle.textContent = "Description:";

  const descriptionInput = document.createElement("input");
  descriptionInput.setAttribute("id", "description");
  descriptionInput.setAttribute("type", "text");
  descriptionInput.setAttribute("name", "description");
  descriptionInput.setAttribute("for", "description");

  div2Container.appendChild(descriptionTitle);
  div2Container.appendChild(descriptionInput);

  const div3Container = document.createElement("div");

  div3Container.setAttribute("class", "buttonsContainer");

  const buttonCancel = document.createElement("button");
  const buttonSubmit = document.createElement("button");

  buttonCancel.setAttribute("formmethod", "dialog");
  buttonCancel.setAttribute("class", "cancelButton");
  buttonCancel.textContent = "Cancel";
  buttonCancel.addEventListener("click", () => {
    titleInput.value = "";
    descriptionInput.value = "";
    dialogContainer.close();
  });

  buttonSubmit.setAttribute("class", "submitButton");
  buttonSubmit.setAttribute("type", "submit");
  buttonSubmit.textContent = "Submit";

  buttonSubmit.addEventListener("click", () => {
    dialogContainer.close();
  });

  div3Container.appendChild(buttonCancel);
  div3Container.appendChild(buttonSubmit);

  dialogContainer.appendChild(formHolder);

  formHolder.appendChild(div1Container);
  formHolder.appendChild(div2Container);
  formHolder.appendChild(div3Container);

  content.appendChild(dialogContainer);

  return content;
}

/* 

[SPECIAL ICON]
[INPUT FIELDS]
[CANCEL SUBMIT BUTTONS]




*/


/***/ }),

/***/ "./src/components/View/createTabProject.js":
/*!*************************************************!*\
  !*** ./src/components/View/createTabProject.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createProjectTab)
/* harmony export */ });
function createProjectTab(titleInput, itemID) {
  // Grab the projects list UL element
  const projectUL = document.querySelector(".projects");

  const liElementContainer = document.createElement("li");
  liElementContainer.setAttribute("class", "liElement");
  liElementContainer.setAttribute("id", `${itemID}`);

  const createTitle = document.createElement("h6");
  createTitle.textContent = `${titleInput}`;

  liElementContainer.appendChild(createTitle);

  projectUL.appendChild(liElementContainer);

  liElementContainer.addEventListener("click", (e) => {
    const test = document.querySelector(".currentPage").children;

    console.log(e.currentTarget.id);
    const currentID = e.currentTarget.id;

    for (let i = 0; i < test.length; i += 1) {
      // console.log(test[i].getAttribute("project-id"));
      if (currentID === test[i].getAttribute("data-projectid")) {
        test[i].classList.add("ONLINE");
        test[i].classList.remove("OFFLINE");
      } else {
        test[i].classList.add("OFFLINE");
        test[i].classList.remove("ONLINE");
      }
    }

    // Now, I need to make this specific ID from the mainPage be active or class active
  });

  return projectUL;
}


/***/ }),

/***/ "./src/helpful_functions/createRandomID.js":
/*!*************************************************!*\
  !*** ./src/helpful_functions/createRandomID.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function randomString() {
  return String(Date.now().toString(32) + Math.random().toString(16)).replace(
    /\./g,
    ""
  );
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (randomString);


/***/ }),

/***/ "./src/helpful_functions/localStorage.js":
/*!***********************************************!*\
  !*** ./src/helpful_functions/localStorage.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lookForDataInLS": () => (/* binding */ lookForDataInLS),
/* harmony export */   "saveProjectSTodoLS": () => (/* binding */ saveProjectSTodoLS)
/* harmony export */ });
// Save everything

function saveProjectSTodoLS(keyName, array) {
  const stringify = JSON.stringify(array);
  // allows us to grab projects
  localStorage.setItem(keyName, stringify);

  // now we need one for todo items

  // we need to setItem for todo items, how do we grab that?
}

function lookForDataInLS(keyName) {
  // We need to look for the data in the local storage
  if (localStorage.getItem(keyName) === null) {
    return [];
  }
  const getItem = localStorage.getItem(keyName);

  const data = JSON.parse(getItem);

  // remember parse returns an object not an array

  return data;
}




/***/ }),

/***/ "./src/pageLoad/pageLoad.js":
/*!**********************************!*\
  !*** ./src/pageLoad/pageLoad.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageLoad)
/* harmony export */ });
/* harmony import */ var _components_Controller_addProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Controller/addProject */ "./src/components/Controller/addProject.js");
/* harmony import */ var _components_Controller_openProjectForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Controller/openProjectForm */ "./src/components/Controller/openProjectForm.js");



function pageLoad() {
  const content = document.querySelector("#content");

  const addProjectButton = document.querySelector(".addProject");
  const projectSubmit = document.querySelector(".submitButton");

  addProjectButton.addEventListener("click", _components_Controller_openProjectForm__WEBPACK_IMPORTED_MODULE_1__["default"]);

  projectSubmit.addEventListener("click", _components_Controller_addProject__WEBPACK_IMPORTED_MODULE_0__["default"]);
  // itemSubmit.addEventListener("click", addTask);

  // addItemButton
  // itemSubmit

  // event listener
  // event listener

  // addProjectButton.addEventListener("click", () => {
  //   const getTitleInput = document.getElementById("title").value;
  //   console.log(getTitleInput);

  // });

  return content;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageLoad_pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad/pageLoad */ "./src/pageLoad/pageLoad.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



(0,_pageLoad_pageLoad__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLFlBQVksV0FBVyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLGFBQWEsT0FBTyxLQUFLLFVBQVUsYUFBYSxPQUFPLEtBQUssVUFBVSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGNBQWMsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsV0FBVyxhQUFhLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksY0FBYyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksV0FBVyxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFlBQVksVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxZQUFZLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsUUFBUSxNQUFNLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsT0FBTyxXQUFXLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFdBQVcsWUFBWSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxTQUFTLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLFdBQVcsS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsV0FBVyxhQUFhLGFBQWEsZUFBZSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxXQUFXLFlBQVksaUNBQWlDLHdCQUF3QixzQkFBc0Isd0JBQXdCLHVCQUF1QiwyQkFBMkIsMEJBQTBCLHFCQUFxQixHQUFHLGlCQUFpQixpQkFBaUIsMkJBQTJCLEdBQUcsNEJBQTRCLHdCQUF3QixlQUFlLGNBQWMsNkJBQTZCLEtBQUssVUFBVSxvQkFBb0IsZ0NBQWdDLEdBQUcsWUFBWSxvQkFBb0IsR0FBRyxjQUFjLGlCQUFpQixzQkFBc0IsbUNBQW1DLG9EQUFvRCxHQUFHLHNCQUFzQix5QkFBeUIsd0JBQXdCLHdCQUF3QixvQkFBb0Isc0NBQXNDLHlDQUF5Qyw4QkFBOEIsR0FBRyxvQkFBb0Isc0JBQXNCLG9CQUFvQixzQ0FBc0MseUNBQXlDLGtCQUFrQixZQUFZLDJCQUEyQixHQUFHLGtDQUFrQyxzQkFBc0Isb0JBQW9CLHNDQUFzQyx5Q0FBeUMsR0FBRywyQ0FBMkMsa0JBQWtCLDJCQUEyQixZQUFZLDhCQUE4QixHQUFHLG9CQUFvQix1QkFBdUIsR0FBRyxpQkFBaUIsa0JBQWtCLDJCQUEyQixjQUFjLEdBQUcsa0JBQWtCLGtCQUFrQix5Q0FBeUMsS0FBSyxxQkFBcUIsa0JBQWtCLHlDQUF5QyxLQUFLLHNCQUFzQixZQUFZLHlDQUF5QyxLQUFLLG9CQUFvQix5QkFBeUIsa0JBQWtCLEdBQUcsMEJBQTBCLHlCQUF5QixZQUFZLEdBQUcsaUJBQWlCLFlBQVksR0FBRyxlQUFlLGtCQUFrQixHQUFHLGdCQUFnQixvQkFBb0Isa0JBQWtCLG9CQUFvQix3QkFBd0IsMkJBQTJCLDhCQUE4QixvQkFBb0IsNEJBQTRCLHdCQUF3QixjQUFjLG9CQUFvQixHQUFHLHlCQUF5QixZQUFZLEdBQUcsMEJBQTBCLGtCQUFrQixtQ0FBbUMsWUFBWSxHQUFHLHdCQUF3QixxQ0FBcUMsR0FBRyxzQ0FBc0MsdUJBQXVCLHVCQUF1QixzQkFBc0IsZUFBZSxnQkFBZ0IsZUFBZSx5QkFBeUIsS0FBSyxnQ0FBZ0Msa0RBQWtELG9CQUFvQixrQkFBa0IsMkJBQTJCLG1DQUFtQyxtQkFBbUIsbUJBQW1CLHlCQUF5QixHQUFHLCtCQUErQix3QkFBd0IsR0FBRyxzQkFBc0IsWUFBWSxHQUFHLDBCQUEwQiwwQkFBMEIsZ0JBQWdCLG9CQUFvQixxQkFBcUIsR0FBRywwQkFBMEIsb0JBQW9CLGlCQUFpQixnQkFBZ0Isb0JBQW9CLHlCQUF5QixzQ0FBc0MsS0FBSyxzQ0FBc0Msa0JBQWtCLG1DQUFtQyxjQUFjLEdBQUcsd0NBQXdDLFlBQVksR0FBRyxpRUFBaUUsaUJBQWlCLEdBQUcsa0NBQWtDLDBCQUEwQixpQkFBaUIsOEJBQThCLHFCQUFxQix1QkFBdUIsR0FBRyxrQ0FBa0MsNEJBQTRCLGlCQUFpQiw4QkFBOEIscUJBQXFCLHVCQUF1QixHQUFHLHlDQUF5QyxpQkFBaUIsOEJBQThCLGtCQUFrQiwyQkFBMkIsY0FBYyxHQUFHLGFBQWEsbUJBQW1CLEdBQUcsY0FBYyxrQkFBa0IsR0FBRyxrQkFBa0IsdUJBQXVCLGtCQUFrQiwyQkFBMkIsbUJBQW1CLG1CQUFtQixHQUFHLGFBQWEsa0JBQWtCLDJCQUEyQixrQkFBa0IsNENBQTRDLEtBQUssZ0JBQWdCLG9CQUFvQixHQUFHLHNCQUFzQixzQkFBc0IsR0FBRyxtQkFBbUIsa0JBQWtCLG1DQUFtQyxHQUFHLDBCQUEwQixrQkFBa0IsR0FBRyxrQkFBa0Isa0JBQWtCLHVDQUF1QyxpRUFBaUUsYUFBYSxtQkFBbUIscUJBQXFCLDRCQUE0QixHQUFHLGVBQWUsa0JBQWtCLGlCQUFpQixHQUFHLG9CQUFvQix3QkFBd0IsaUJBQWlCLGdCQUFnQixHQUFHLG9CQUFvQix1QkFBdUIsaUJBQWlCLHVCQUF1QixpQkFBaUIsZ0JBQWdCLG9CQUFvQixtQkFBbUIsZ0JBQWdCLEdBQUcsbUNBQW1DLHVCQUF1Qix1QkFBdUIsc0JBQXNCLGVBQWUsZ0JBQWdCLGVBQWUseUJBQXlCLEdBQUcseUJBQXlCLGtEQUFrRCx3QkFBd0Isa0JBQWtCLDJCQUEyQixtQ0FBbUMsaUJBQWlCLG1CQUFtQix5QkFBeUIsR0FBRywwQkFBMEIsWUFBWSxHQUFHLG1CQUFtQix3QkFBd0IsR0FBRyx5QkFBeUIsMEJBQTBCLGdCQUFnQixvQkFBb0IscUJBQXFCLEdBQUcsaUNBQWlDLDBCQUEwQixnQkFBZ0Isb0JBQW9CLHFCQUFxQixJQUFJLDJCQUEyQiwwQkFBMEIsZ0JBQWdCLG9CQUFvQixxQkFBcUIsR0FBRyw0QkFBNEIsMEJBQTBCLGdCQUFnQixvQkFBb0IscUJBQXFCLEdBQUcsMEJBQTBCLGtCQUFrQixrQ0FBa0MsR0FBRyw0QkFBNEIsWUFBWSxHQUFHLHdCQUF3QixrQkFBa0Isa0NBQWtDLEdBQUcsK0JBQStCLGtCQUFrQixHQUFHLDBDQUEwQyxtQ0FBbUMsNkJBQTZCLHdCQUF3QixpQkFBaUIsa0JBQWtCLGlCQUFpQix5QkFBeUIsa0JBQWtCLG1DQUFtQyxHQUFHLHdCQUF3Qix1QkFBdUIsa0JBQWtCLHlDQUF5QyxnQ0FBZ0MsaUNBQWlDLHVCQUF1Qix3QkFBd0IsOEJBQThCLHFCQUFxQixvQkFBb0IsR0FBRywwQkFBMEIsa0JBQWtCLDJCQUEyQixrQkFBa0Isa0JBQWtCLDBCQUEwQiwwQ0FBMEMsOEJBQThCLE9BQU8seUJBQXlCLFlBQVksR0FBRyxrQkFBa0Isa0JBQWtCLDJCQUEyQixHQUFHLDRCQUE0QixZQUFZLEdBQUcsNEJBQTRCLFlBQVksR0FBRywyQkFBMkIsWUFBWSxHQUFHLHFCQUFxQix1QkFBdUIsdUJBQXVCLHNCQUFzQixlQUFlLGdCQUFnQixlQUFlLGdCQUFnQix5QkFBeUIsR0FBRyxtQkFBbUI7QUFDbDZqQjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYm9EO0FBQ0k7QUFDTjs7QUFFbkM7QUFDZjs7QUFFQTtBQUNBOztBQUVBLGVBQWUsZ0VBQWE7O0FBRTVCLHlCQUF5QixXQUFXOztBQUVwQyxFQUFFLGtFQUFnQjtBQUNsQixFQUFFLCtEQUFhOztBQUVmO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkIrQztBQUNPO0FBQ1o7O0FBRTNCO0FBQ2Y7O0FBRUEsRUFBRSx5REFBWTs7QUFFZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLCtEQUFnQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsdUJBQXVCO0FBQy9DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGtFQUFjO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdEK0M7QUFDTDs7QUFFM0I7QUFDZjtBQUNBLEVBQUUseURBQVk7O0FBRWQsY0FBYyx1REFBUTs7QUFFdEI7QUFDQSwwQkFBMEIsU0FBUzs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLElBQUksK0RBQWdCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLCtCQUErQjtBQUNuRDtBQUNBLDhCQUE4QixPQUFPO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0NBQXdDLGNBQWM7QUFDdEQsd0NBQXdDLGNBQWM7QUFDdEQsb0NBQW9DLGNBQWM7QUFDbEQsd0NBQXdDLGtCQUFrQjtBQUMxRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtDQUFrQztBQUNsQztBQUNBLE1BQU07QUFDTjs7Ozs7Ozs7Ozs7Ozs7OztBQzVFb0Q7O0FBRXJDO0FBQ2YsRUFBRSxnRUFBYztBQUNoQjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOb0Q7O0FBRXJDO0FBQ2YsRUFBRSxnRUFBYztBQUNoQjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOMEQ7O0FBRTFELG1FQUFpQjs7QUFFRjtBQUNmO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1ArQzs7QUFFaEM7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsa0JBQWtCLHlCQUF5QjtBQUMzQztBQUNBO0FBQ0E7O0FBRUEsTUFBTSwrREFBZ0I7QUFDdEI7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ3VFO0FBQy9COztBQUV4QztBQUNBOztBQUVBO0FBQ0EseUJBQXlCLHdEQUFPO0FBQ2hDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpREFBaUQsU0FBUztBQUMxRDtBQUNBLGdEQUFnRCxTQUFTO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsd0RBQU87QUFDaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGdCQUFnQixnRkFBZTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyx3REFBTztBQUN6QztBQUNBOztBQVdFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JERjtBQUNBO0FBQ2tFO0FBQ2hDOztBQUVsQztBQUNBLHVDQUF1Qyw2RUFBWTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1EQUFtRCw2RUFBWTtBQUMvRCx5QkFBeUIscURBQUk7QUFDN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCLHFEQUFJO0FBQy9CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsT0FBTyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUMvRHZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMURzQztBQUNaOztBQUU5QztBQUNlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBLCtDQUErQyxHQUFHOztBQUVsRDtBQUNBO0FBQ0EsaUNBQWlDLFNBQVM7O0FBRTFDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsS0FBSzs7QUFFbEM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkIsS0FBSzs7QUFFbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsR0FBRztBQUMvQyx1Q0FBdUMsNERBQVE7QUFDL0M7O0FBRUE7QUFDQTtBQUNBLGdEQUFnRCxHQUFHO0FBQ25ELHlDQUF5QyxrRUFBYztBQUN2RDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsS0FBSzs7QUFFakM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQzVGZTtBQUNmOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQzNHZTtBQUNmOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEc0Qzs7QUFFN0I7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxREFBcUQsR0FBRzs7QUFFeEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCLE1BQU07O0FBRW5DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQyxZQUFZOztBQUUvQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQ0FBMEMsMkRBQU87O0FBRWpEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM5REE7O0FBRWU7QUFDZjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7Ozs7Ozs7Ozs7Ozs7OztBQzVGZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJDQUEyQyxPQUFPOztBQUVsRDtBQUNBLCtCQUErQixXQUFXOztBQUUxQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFK0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJjO0FBQ0c7O0FBRWpEO0FBQ2Y7O0FBRUE7QUFDQTs7QUFFQSw2Q0FBNkMsOEVBQVE7O0FBRXJELDBDQUEwQyx5RUFBVTtBQUNwRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLE1BQU07O0FBRU47QUFDQTs7Ozs7OztVQzNCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0EyQztBQUN0Qjs7QUFFckIsOERBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL3NyYy9jb21wb25lbnRzL0NvbnRyb2xsZXIvYWRkUHJvamVjdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL3NyYy9jb21wb25lbnRzL0NvbnRyb2xsZXIvYWRkVGFzay5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL3NyYy9jb21wb25lbnRzL0NvbnRyb2xsZXIvZWRpdFRhc2suanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9zcmMvY29tcG9uZW50cy9Db250cm9sbGVyL29wZW5FZGl0Rm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL3NyYy9jb21wb25lbnRzL0NvbnRyb2xsZXIvb3Blbkl0ZW1Gb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLy4vc3JjL2NvbXBvbmVudHMvQ29udHJvbGxlci9vcGVuUHJvamVjdEZvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9zcmMvY29tcG9uZW50cy9Db250cm9sbGVyL3JlbW92ZVRhc2tJdGVtLmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLy4vc3JjL2NvbXBvbmVudHMvTW9kZWwvY29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL3NyYy9jb21wb25lbnRzL01vZGVsL3Byb2plY3RUZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL3NyYy9jb21wb25lbnRzL01vZGVsL3Rhc2tUZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL3NyYy9jb21wb25lbnRzL1ZpZXcvY3JlYXRlQ2FyZFZpc3VhbC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL3NyYy9jb21wb25lbnRzL1ZpZXcvY3JlYXRlRWRpdEZvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9zcmMvY29tcG9uZW50cy9WaWV3L2NyZWF0ZUl0ZW1Gb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLy4vc3JjL2NvbXBvbmVudHMvVmlldy9jcmVhdGVNYWluVGFiLmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLy4vc3JjL2NvbXBvbmVudHMvVmlldy9jcmVhdGVQcm9qZWN0Rm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL3NyYy9jb21wb25lbnRzL1ZpZXcvY3JlYXRlVGFiUHJvamVjdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL3NyYy9oZWxwZnVsX2Z1bmN0aW9ucy9jcmVhdGVSYW5kb21JRC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL3NyYy9oZWxwZnVsX2Z1bmN0aW9ucy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9zcmMvcGFnZUxvYWQvcGFnZUxvYWQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLUxpY29yaWNlOiAjMEQwMTA2O1xcbiAgLS1aYWZmcmU6ICMzNjI2QTc7XFxuICAtLUdsYXVjb3VzOiAjNjU3RUQ0O1xcbiAgLS1TY2FybGV0OiAjRkYzMzFGO1xcbiAgLS1HaG9zdC1XaGl0ZTogI0ZCRkJGRjtcXG4gIC0tUm95YWwtQmx1ZTogIzAwNTM5QztcXG4gIC0tUGVhY2g6ICNFRUE0N0Y7XFxufVxcblxcbmJvZHksXFxuaHRtbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qLFxcbio6YmVmb3JlLFxcbio6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBvdXRsaW5lOiAycHggc29saWQgZ3JlZW47XFxuXFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuXFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDJmciBtaW5tYXgoMjAwcHgsIDFmcik7XFxufVxcblxcbiNoZWFkZXJDb250YWluZXIge1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICBncmlkLWNvbHVtbi1lbmQ6IC0xO1xcblxcbiAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICBncmlkLXJvdy1lbmQ6IDI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1MaWNvcmljZSk7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1HaG9zdC1XaGl0ZSk7XFxuICBjb2xvcjogdmFyKC0tR2hvc3QtV2hpdGUpO1xcbn1cXG5cXG4jc2lkZUNvbnRhaW5lciB7XFxuICBncmlkLXJvdy1zdGFydDogMjtcXG4gIGdyaWQtcm93LWVuZDogNTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUxpY29yaWNlKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLUdob3N0LVdoaXRlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2Rpc3BsYXlDdXJyZW50UGFnZUNvbnRhaW5lciB7XFxuICBncmlkLXJvdy1zdGFydDogMjtcXG4gIGdyaWQtcm93LWVuZDogNDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUxpY29yaWNlKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLUdob3N0LVdoaXRlKTtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuXFxuXFxuLyogU2lkZSAqL1xcblxcbi5zaWRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogMTtcXG4gIGNvbG9yOiB2YXIoLS1HaG9zdC1XaGl0ZSk7XFxufVxcblxcbi5wcm9qZWN0c1RpdGxlIHtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLnRvcFNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICBmbGV4OiAxO1xcbn1cXG5cXG4udG9kYXlGb2xkZXIge1xcbiAgZmxleDogMCAxIDEwJTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLUdob3N0LVdoaXRlKTtcXG5cXG59XFxuXFxuLnVwY29taW5nRm9sZGVyIHtcXG4gIGZsZXg6IDAgMSAxMCU7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1HaG9zdC1XaGl0ZSk7XFxuXFxufVxcblxcbi5mb2xkZXJDb250YWluZXIge1xcbiAgZmxleDogMTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLUdob3N0LVdoaXRlKTtcXG5cXG59XFxuXFxuLmJvdHRvbVNlY3Rpb24ge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBmbGV4OiAwIDEgMTAlO1xcbn1cXG5cXG4uYWRkUHJvamVjdENvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5hZGRQcm9qZWN0IHtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5wcm9qZWN0cyB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4ubGlFbGVtZW50IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gIGNvbG9yOiB2YXIoLS1HaG9zdC1XaGl0ZSk7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4ubGVmdFNpZGVFbGVtZW50VGFiIHtcXG4gIGZsZXg6IDI7XFxufVxcblxcbi5yaWdodFNpZGVFbGVtZW50VGFiIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4OiAxO1xcbn1cXG5cXG5cXG4ubGlFbGVtZW50OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVNjYXJsZXQpO1xcbn1cXG5cXG4vKiBNYWluICovXFxuXFxuXFxuLmRpYWxvZ0NvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIHRvcDogMTkwcHg7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIHdpZHRoOiA1MCU7XFxuXFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuXFxufVxcblxcbi5kaWFsb2dDb250YWluZXI6OmJhY2tkcm9wIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyNTAsIDEwMCUsIDUwJSwgMC4yNSlcXG59XFxuXFxuLmZvcm1Db250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICBoZWlnaHQ6IDEwMCU7XFxuXFxuICBwYWRkaW5nOiAxZW07XFxuXFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxufVxcblxcbi5mb3JtQ29udGFpbmVyIC5mb3JtLWxpc3Qge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmZvcm1Db250YWluZXI+KiB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uZm9ybUNvbnRhaW5lciBsYWJlbCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5mb3JtQ29udGFpbmVyIGlucHV0IHtcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcblxcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgYm9yZGVyOiA1cHggc29saWQgcmdiKDExLCA0MywgNTQpO1xcblxcbn1cXG5cXG4uZm9ybUNvbnRhaW5lciAuYnV0dG9uc0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uZm9ybUNvbnRhaW5lciAuYnV0dG9uc0NvbnRhaW5lcj4qIHtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5mb3JtQ29udGFpbmVyIC5jYW5jZWxCdXR0b24sXFxuLmZvcm1Db250YWluZXIgLnN1Ym1pdEJ1dHRvbiB7XFxuICBwYWRkaW5nOiAxZW07XFxufVxcblxcbi5mb3JtQ29udGFpbmVyIC5jYW5jZWxCdXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxufVxcblxcbi5mb3JtQ29udGFpbmVyIC5zdWJtaXRCdXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICBib3JkZXI6IG5vbmU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG59XFxuXFxuLyogTWFpbiBwYWdlKi9cXG5cXG4ucHJvamVjdENvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBjb2xvcjogdmFyKC0tR2hvc3QtV2hpdGUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uT05MSU5FIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uT0ZGTElORSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY3VycmVudFBhZ2Uge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAwLjVlbTtcXG5cXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnRvcFJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDAgMSAxMCU7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tU2NhcmxldCk7XFxuXFxufVxcblxcbi5tYWluVGl0bGUge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4uZGVzY3JpcHRpb25UZXh0IHtcXG4gIGZvbnQtc2l6ZTogMS45cmVtO1xcbn1cXG5cXG4udG9wUm93U2Vjb25kIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5sZWZ0U2lkZVNlY3Rpb25JdGVtIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcblxcbi5taWRkbGVSb3cge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg0NTBweCwgMWZyKSk7XFxuICBnYXA6IDRweDtcXG5cXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuLm5vdGVBcmVhIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcblxcblxcbi5ib3R0b21Sb3cge1xcblxcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBib3R0b206IDIwcHg7XFxuICByaWdodDogMjBweDtcXG59XFxuXFxuLmFkZFRhc2tCdXR0b24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxuXFxuICBib3R0b206IDIwcHg7XFxuICByaWdodDogMjBweDtcXG59XFxuXFxuXFxuLyogSXRlbSBmb3JtKi9cXG5cXG4uaXRlbUZvcm0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICB0b3A6IDE5MHB4O1xcbiAgaGVpZ2h0OiA1MCU7XFxuICB3aWR0aDogNTAlO1xcblxcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbn1cXG5cXG4uaXRlbUZvcm06OmJhY2tkcm9wIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMTA1LCA1MyUsIDQ4JSwgMC4yNSlcXG59XFxuXFxuLmZvcm1Db250YWluZXJJdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgcGFkZGluZzogMWVtO1xcblxcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbn1cXG5cXG4uZm9ybUNvbnRhaW5lckl0ZW0+KiB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uZm9ybUxpc3RJdGVtIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5mb3JtTGlzdEl0ZW0gbGFiZWwge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4vKiAuZm9ybUNvbnRhaW5lckl0ZW0gaW5wdXQge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn0gKi9cXG5cXG4uZm9ybUxpc3RJdGVtIGlucHV0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLmZvcm1MaXN0SXRlbSB0ZXh0YXJlYSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5zZWNvbmRNaWRkbGVTZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLnNlY29uZE1pZGRsZVNlY3Rpb24+KiB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uYm90dG9tU2VjdGlvbkl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uYm90dG9tU2VjdGlvbkl0ZW0+YnV0dG9uIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi8qIENhcmQgSXRlbSovXFxuXFxuLmNhcmRJdGVtQ29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBlYWNoKTtcXG4gIGNvbG9yOiB2YXIoLS1Sb3lhbC1CbHVlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBtYXJnaW46IDIwcHg7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgYm9yZGVyOiBub25lO1xcblxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnByaW9yaXR5VGl0bGVTcGFuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMTUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1HaG9zdC1XaGl0ZSk7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbiAgcGFkZGluZy1yaWdodDogMjVweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4ubGVmdFNpZGVTZWN0aW9uSXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDAgMSAzMCU7XFxuICBwYWRkaW5nOiAyMHB4O1xcblxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVJveWFsLUJsdWUpO1xcbiAgY29sb3I6IHZhcigtLUdob3N0LVdoaXRlKTtcXG5cXG5cXG59XFxuXFxuLnRvcFNlY3Rpb25MZWZ0SXRlbSB7XFxuICBmbGV4OiAyO1xcbn1cXG5cXG4udGFza1NlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5taWRkbGVTZWN0aW9uTGVmdEl0ZW0ge1xcbiAgZmxleDogMTtcXG59XFxuXFxuLmJvdHRvbVNlY3Rpb25MZWZ0SXRlbSB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4ucmlnaHRTaWRlU2VjdGlvbkl0ZW0ge1xcbiAgZmxleDogMjtcXG59XFxuXFxuXFxuLmVkaXRJdGVtRm9ybSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIHRvcDogMjkwcHg7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIHdpZHRoOiA1MCU7XFxuICBsZWZ0OiA1MDBweDtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUVBOzs7RUFHRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFNBQVM7RUFDVCx3QkFBd0I7O0FBRTFCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZOzs7RUFHWixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7O0VBRW5CLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUNBQWlDO0VBQ2pDLG9DQUFvQztFQUNwQyx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlDQUFpQztFQUNqQyxvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLE9BQU87RUFDUCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlDQUFpQztFQUNqQyxvQ0FBb0M7QUFDdEM7O0FBRUEsV0FBVzs7O0FBR1gsU0FBUzs7QUFFVDtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsT0FBTztFQUNQLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7O0VBRXRCLE9BQU87QUFD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QUFPO0FBQ1Q7OztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFdBQVc7RUFDWCxVQUFVO0VBQ1YsV0FBVzs7RUFFWCxrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1MaWNvcmljZTogIzBEMDEwNjtcXG4gIC0tWmFmZnJlOiAjMzYyNkE3O1xcbiAgLS1HbGF1Y291czogIzY1N0VENDtcXG4gIC0tU2NhcmxldDogI0ZGMzMxRjtcXG4gIC0tR2hvc3QtV2hpdGU6ICNGQkZCRkY7XFxuICAtLVJveWFsLUJsdWU6ICMwMDUzOUM7XFxuICAtLVBlYWNoOiAjRUVBNDdGO1xcbn1cXG5cXG5ib2R5LFxcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKixcXG4qOmJlZm9yZSxcXG4qOmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIGdyZWVuO1xcblxcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcblxcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAyZnIgbWlubWF4KDIwMHB4LCAxZnIpO1xcbn1cXG5cXG4jaGVhZGVyQ29udGFpbmVyIHtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgZ3JpZC1jb2x1bW4tZW5kOiAtMTtcXG5cXG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgZ3JpZC1yb3ctZW5kOiAyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tTGljb3JpY2UpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tR2hvc3QtV2hpdGUpO1xcbiAgY29sb3I6IHZhcigtLUdob3N0LVdoaXRlKTtcXG59XFxuXFxuI3NpZGVDb250YWluZXIge1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICBncmlkLXJvdy1lbmQ6IDU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1MaWNvcmljZSk7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1HaG9zdC1XaGl0ZSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNkaXNwbGF5Q3VycmVudFBhZ2VDb250YWluZXIge1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICBncmlkLXJvdy1lbmQ6IDQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1MaWNvcmljZSk7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1HaG9zdC1XaGl0ZSk7XFxufVxcblxcbi8qIEhlYWRlciAqL1xcblxcblxcbi8qIFNpZGUgKi9cXG5cXG4uc2lkZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDE7XFxuICBjb2xvcjogdmFyKC0tR2hvc3QtV2hpdGUpO1xcbn1cXG5cXG4ucHJvamVjdHNUaXRsZSB7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi50b3BTZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgZmxleDogMTtcXG59XFxuXFxuLnRvZGF5Rm9sZGVyIHtcXG4gIGZsZXg6IDAgMSAxMCU7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1HaG9zdC1XaGl0ZSk7XFxuXFxufVxcblxcbi51cGNvbWluZ0ZvbGRlciB7XFxuICBmbGV4OiAwIDEgMTAlO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tR2hvc3QtV2hpdGUpO1xcblxcbn1cXG5cXG4uZm9sZGVyQ29udGFpbmVyIHtcXG4gIGZsZXg6IDE7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1HaG9zdC1XaGl0ZSk7XFxuXFxufVxcblxcbi5ib3R0b21TZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgZmxleDogMCAxIDEwJTtcXG59XFxuXFxuLmFkZFByb2plY3RDb250YWluZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uYWRkUHJvamVjdCB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLmxpRWxlbWVudCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICBjb2xvcjogdmFyKC0tR2hvc3QtV2hpdGUpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmxlZnRTaWRlRWxlbWVudFRhYiB7XFxuICBmbGV4OiAyO1xcbn1cXG5cXG4ucmlnaHRTaWRlRWxlbWVudFRhYiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZmxleDogMTtcXG59XFxuXFxuXFxuLmxpRWxlbWVudDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1TY2FybGV0KTtcXG59XFxuXFxuLyogTWFpbiAqL1xcblxcblxcbi5kaWFsb2dDb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICB0b3A6IDE5MHB4O1xcbiAgaGVpZ2h0OiA1MCU7XFxuICB3aWR0aDogNTAlO1xcblxcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcblxcbn1cXG5cXG4uZGlhbG9nQ29udGFpbmVyOjpiYWNrZHJvcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjUwLCAxMDAlLCA1MCUsIDAuMjUpXFxufVxcblxcbi5mb3JtQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgcGFkZGluZzogMWVtO1xcblxcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbn1cXG5cXG4uZm9ybUNvbnRhaW5lciAuZm9ybS1saXN0IHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5mb3JtQ29udGFpbmVyPioge1xcbiAgZmxleDogMTtcXG59XFxuXFxuLmZvcm1Db250YWluZXIgbGFiZWwge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4uZm9ybUNvbnRhaW5lciBpbnB1dCB7XFxuICBtYXJnaW4tdG9wOiAxZW07XFxuICBwYWRkaW5nOiAxZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGJvcmRlcjogNXB4IHNvbGlkIHJnYigxMSwgNDMsIDU0KTtcXG5cXG59XFxuXFxuLmZvcm1Db250YWluZXIgLmJ1dHRvbnNDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLmZvcm1Db250YWluZXIgLmJ1dHRvbnNDb250YWluZXI+KiB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uZm9ybUNvbnRhaW5lciAuY2FuY2VsQnV0dG9uLFxcbi5mb3JtQ29udGFpbmVyIC5zdWJtaXRCdXR0b24ge1xcbiAgcGFkZGluZzogMWVtO1xcbn1cXG5cXG4uZm9ybUNvbnRhaW5lciAuY2FuY2VsQnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbn1cXG5cXG4uZm9ybUNvbnRhaW5lciAuc3VibWl0QnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxufVxcblxcbi8qIE1haW4gcGFnZSovXFxuXFxuLnByb2plY3RDb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgY29sb3I6IHZhcigtLUdob3N0LVdoaXRlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgZmxleDogMTtcXG59XFxuXFxuLk9OTElORSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLk9GRkxJTkUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmN1cnJlbnRQYWdlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMC41ZW07XFxuXFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi50b3BSb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiAwIDEgMTAlO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLVNjYXJsZXQpO1xcblxcbn1cXG5cXG4ubWFpblRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uVGV4dCB7XFxuICBmb250LXNpemU6IDEuOXJlbTtcXG59XFxuXFxuLnRvcFJvd1NlY29uZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubGVmdFNpZGVTZWN0aW9uSXRlbSB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG5cXG4ubWlkZGxlUm93IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoNDUwcHgsIDFmcikpO1xcbiAgZ2FwOiA0cHg7XFxuXFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbi5ub3RlQXJlYSB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5cXG5cXG4uYm90dG9tUm93IHtcXG5cXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgYm90dG9tOiAyMHB4O1xcbiAgcmlnaHQ6IDIwcHg7XFxufVxcblxcbi5hZGRUYXNrQnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcblxcbiAgYm90dG9tOiAyMHB4O1xcbiAgcmlnaHQ6IDIwcHg7XFxufVxcblxcblxcbi8qIEl0ZW0gZm9ybSovXFxuXFxuLml0ZW1Gb3JtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgdG9wOiAxOTBweDtcXG4gIGhlaWdodDogNTAlO1xcbiAgd2lkdGg6IDUwJTtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG59XFxuXFxuLml0ZW1Gb3JtOjpiYWNrZHJvcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDEwNSwgNTMlLCA0OCUsIDAuMjUpXFxufVxcblxcbi5mb3JtQ29udGFpbmVySXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogMTAwJTtcXG5cXG4gIHBhZGRpbmc6IDFlbTtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG59XFxuXFxuLmZvcm1Db250YWluZXJJdGVtPioge1xcbiAgZmxleDogMTtcXG59XFxuXFxuLmZvcm1MaXN0SXRlbSB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uZm9ybUxpc3RJdGVtIGxhYmVsIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLyogLmZvcm1Db250YWluZXJJdGVtIGlucHV0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59ICovXFxuXFxuLmZvcm1MaXN0SXRlbSBpbnB1dCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5mb3JtTGlzdEl0ZW0gdGV4dGFyZWEge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4uc2Vjb25kTWlkZGxlU2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5zZWNvbmRNaWRkbGVTZWN0aW9uPioge1xcbiAgZmxleDogMTtcXG59XFxuXFxuLmJvdHRvbVNlY3Rpb25JdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmJvdHRvbVNlY3Rpb25JdGVtPmJ1dHRvbiB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4vKiBDYXJkIEl0ZW0qL1xcblxcbi5jYXJkSXRlbUNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QZWFjaCk7XFxuICBjb2xvcjogdmFyKC0tUm95YWwtQmx1ZSk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG5cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5wcmlvcml0eVRpdGxlU3BhbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDE1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tR2hvc3QtV2hpdGUpO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmctbGVmdDogMjVweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLmxlZnRTaWRlU2VjdGlvbkl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiAwIDEgMzAlO1xcbiAgcGFkZGluZzogMjBweDtcXG5cXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1Sb3lhbC1CbHVlKTtcXG4gIGNvbG9yOiB2YXIoLS1HaG9zdC1XaGl0ZSk7XFxuXFxuXFxufVxcblxcbi50b3BTZWN0aW9uTGVmdEl0ZW0ge1xcbiAgZmxleDogMjtcXG59XFxuXFxuLnRhc2tTZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubWlkZGxlU2VjdGlvbkxlZnRJdGVtIHtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5ib3R0b21TZWN0aW9uTGVmdEl0ZW0ge1xcbiAgZmxleDogMTtcXG59XFxuXFxuLnJpZ2h0U2lkZVNlY3Rpb25JdGVtIHtcXG4gIGZsZXg6IDI7XFxufVxcblxcblxcbi5lZGl0SXRlbUZvcm0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICB0b3A6IDI5MHB4O1xcbiAgaGVpZ2h0OiA1MCU7XFxuICB3aWR0aDogNTAlO1xcbiAgbGVmdDogNTAwcHg7XFxuXFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBjcmVhdGVQcm9qZWN0IH0gZnJvbSBcIi4uL01vZGVsL2NvbGxlY3Rpb25cIjtcbmltcG9ydCBjcmVhdGVQcm9qZWN0VGFiIGZyb20gXCIuLi9WaWV3L2NyZWF0ZVRhYlByb2plY3RcIjtcbmltcG9ydCBjcmVhdGVNYWluVGFiIGZyb20gXCIuLi9WaWV3L2NyZWF0ZU1haW5UYWJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkUHJvamVjdChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcblxuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKTtcbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIik7XG5cbiAgY29uc3QgaXRlbSA9IGNyZWF0ZVByb2plY3QodGl0bGVJbnB1dC52YWx1ZSwgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSk7XG5cbiAgY29uc29sZS5sb2coYEhFTExMTzogJHtpdGVtLnRpdGxlfWApO1xuXG4gIGNyZWF0ZVByb2plY3RUYWIoaXRlbS50aXRsZSwgaXRlbS5pZCk7XG4gIGNyZWF0ZU1haW5UYWIoaXRlbS50aXRsZSwgaXRlbS5kZXNjcmlwdGlvbiwgaXRlbS5pZCk7XG5cbiAgdGl0bGVJbnB1dC52YWx1ZSA9IFwiXCI7XG4gIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBcIlwiO1xufVxuIiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi4vTW9kZWwvY29sbGVjdGlvblwiO1xuaW1wb3J0IGNyZWF0ZUl0ZW1DYXJkIGZyb20gXCIuLi9WaWV3L2NyZWF0ZUNhcmRWaXN1YWxcIjtcbmltcG9ydCBvcGVuSXRlbUZvcm0gZnJvbSBcIi4vb3Blbkl0ZW1Gb3JtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZEl0ZW0oZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgb3Blbkl0ZW1Gb3JtKCk7XG5cbiAgLy8gV2Ugd2FudCB0byBnbyB0aHJvdWdoIGN1cnJlbnRQYWdlIGNoaWxkcmVuIGFuZCBmaW5kIHdoaWNoIElEIG1hdGNoZXMgd2l0aCBvdXIgZS50YXJnZXQuaWQsIGlmIHNvIHdlIGFwcGVuZCBjcmVhdGVWaXN1YWxJdGVtQ2FyZFxuXG4gIGNvbnN0IHRhc2tJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza1wiKTtcbiAgY29uc3Qgbm90ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub3RlXCIpO1xuICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIik7XG4gIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdFwiKTtcblxuICBjb25zdCBkaWFsb2dDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLml0ZW1Gb3JtXCIpO1xuXG4gIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaXRlbUNhbmNlbFwiKTtcblxuICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkaWFsb2dDb250YWluZXIuY2xvc2UoKTtcbiAgICBkaWFsb2dDb250YWluZXIucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaXRlbVN1Ym1pdFwiKTtcbiAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgbWFpblBhZ2VzMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdENvbnRhaW5lclwiKTtcblxuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGlmIChwcm9qZWN0LmlkID09PSBlLnRhcmdldC5pZCkge1xuICAgICAgICBjb25zdCBpdGVtTWFkZSA9IHByb2plY3QuY3JlYXRlVG9kb0l0ZW0oXG4gICAgICAgICAgdGFza0lucHV0LnZhbHVlLFxuICAgICAgICAgIGRhdGVJbnB1dC52YWx1ZSxcbiAgICAgICAgICBwcmlvcml0eUlucHV0LnZhbHVlLFxuICAgICAgICAgIG5vdGVJbnB1dC52YWx1ZVxuICAgICAgICApO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWFpblBhZ2VzMi5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGNvbnN0IHBhZ2VJRCA9IG1haW5QYWdlczJbaV0uZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0aWRcIik7XG5cbiAgICAgICAgICBpZiAocGFnZUlEID09PSBlLnRhcmdldC5pZCkge1xuICAgICAgICAgICAgbWFpblBhZ2VzMltpXVxuICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5taWRkbGVSb3dcIilcbiAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgICAgIGNyZWF0ZUl0ZW1DYXJkKFxuICAgICAgICAgICAgICAgICAgaXRlbU1hZGUudGFzayxcbiAgICAgICAgICAgICAgICAgIGl0ZW1NYWRlLm5vdGVzLFxuICAgICAgICAgICAgICAgICAgaXRlbU1hZGUucHJpb3JpdHksXG4gICAgICAgICAgICAgICAgICBpdGVtTWFkZS5kYXRlLFxuICAgICAgICAgICAgICAgICAgaXRlbU1hZGUuaWRcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBkaWFsb2dDb250YWluZXIuY2xvc2UoKTtcbiAgICBkaWFsb2dDb250YWluZXIucmVtb3ZlKCk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi4vTW9kZWwvY29sbGVjdGlvblwiO1xuaW1wb3J0IG9wZW5FZGl0Rm9ybSBmcm9tIFwiLi9vcGVuRWRpdEZvcm1cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZWRpdFRhc2soZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIG9wZW5FZGl0Rm9ybSgpO1xuXG4gIGNvbnNvbGUubG9nKHByb2plY3RzKTtcblxuICBjb25zdCBidXR0b25JRCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtZWRpdGlkXCIpO1xuICBjb25zb2xlLmxvZyhgRWRpdCBJRDogJHtidXR0b25JRH1gKTtcblxuICBjb25zdCBnZXRUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0VGFza1wiKTtcbiAgY29uc3QgZ2V0Tm90ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdE5vdGVcIik7XG4gIGNvbnN0IGdldERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXREYXRlXCIpO1xuICBjb25zdCBnZXRQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdFNlbGVjdFwiKTtcblxuICBjb25zdCBlZGl0RGlhbG9nQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0SXRlbUZvcm1cIik7XG5cbiAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0SXRlbUNhbmNlbFwiKTtcblxuICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXRJdGVtU3VibWl0XCIpO1xuXG4gIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGVkaXREaWFsb2dDb250YWluZXIuY2xvc2UoKTtcbiAgICBlZGl0RGlhbG9nQ29udGFpbmVyLnJlbW92ZSgpO1xuICB9KTtcblxuICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBwcm9qZWN0LnVwZGF0ZVRvZG9JdGVtKFxuICAgICAgICBidXR0b25JRCxcbiAgICAgICAgZ2V0VGFzay52YWx1ZSxcbiAgICAgICAgZ2V0RGF0ZS52YWx1ZSxcbiAgICAgICAgZ2V0UHJpb3JpdHkudmFsdWUsXG4gICAgICAgIGdldE5vdGUudmFsdWVcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICAvLyBOb3cgd2UgdXBkYXRlIHRoZSBjYXJkXG4gICAgY29uc3QgZ3JhYkFsbENhcmRWaXN1YWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXJkSXRlbUNvbnRhaW5lclwiKTtcbiAgICBjb25zb2xlLmxvZyhncmFiQWxsQ2FyZFZpc3VhbHMpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncmFiQWxsQ2FyZFZpc3VhbHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGNhcmRJRCA9IGdyYWJBbGxDYXJkVmlzdWFsc1tpXS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNhcmRpZFwiKTtcbiAgICAgIGNvbnNvbGUubG9nKGBDYXJkIElEOiAke2NhcmRJRH1gKTtcbiAgICAgIGlmIChjYXJkSUQgPT09IGJ1dHRvbklEKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGdyYWJBbGxDYXJkVmlzdWFsc1tpXSk7XG4gICAgICAgIGNvbnN0IGNoYW5nZVRhc2tUZXh0ID1cbiAgICAgICAgICBncmFiQWxsQ2FyZFZpc3VhbHNbaV0ucXVlcnlTZWxlY3RvcihcIi5sYWJlbFRhc2tcIik7XG4gICAgICAgIGNvbnN0IGNoYW5nZU5vdGVUZXh0ID0gZ3JhYkFsbENhcmRWaXN1YWxzW2ldLnF1ZXJ5U2VsZWN0b3IoXCIubm90ZUFyZWFcIik7XG4gICAgICAgIGNvbnN0IGNoYW5nZURhdGUgPSBncmFiQWxsQ2FyZFZpc3VhbHNbaV0ucXVlcnlTZWxlY3RvcihcIi5pbnB1dERhdGVcIik7XG4gICAgICAgIGNvbnN0IGNoYW5nZVByaW9yaXR5ID1cbiAgICAgICAgICBncmFiQWxsQ2FyZFZpc3VhbHNbaV0ucXVlcnlTZWxlY3RvcihcIi5wcmlvcml0eVRpdGxlU3BhblwiKTtcblxuICAgICAgICBjaGFuZ2VUYXNrVGV4dC50ZXh0Q29udGVudCA9IGAke2dldFRhc2sudmFsdWV9YDtcbiAgICAgICAgY2hhbmdlTm90ZVRleHQudGV4dENvbnRlbnQgPSBgJHtnZXROb3RlLnZhbHVlfWA7XG4gICAgICAgIGNoYW5nZURhdGUudGV4dENvbnRlbnQgPSBgJHtnZXREYXRlLnZhbHVlfWA7XG4gICAgICAgIGNoYW5nZVByaW9yaXR5LnRleHRDb250ZW50ID0gYCR7Z2V0UHJpb3JpdHkudmFsdWV9YDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlZGl0RGlhbG9nQ29udGFpbmVyLmNsb3NlKCk7XG4gICAgZWRpdERpYWxvZ0NvbnRhaW5lci5yZW1vdmUoKTtcbiAgfSk7XG5cbiAgLy8gaXRlcmF0ZSB0aHJvdWdoIGNhcmQgdmlzdWFsc1xuICAvLyBpZiBtYXRjaCwgdGhhdCdzIHRoZSBvbmUgd2Ugd2FudCBpbiBpZiBzdGF0ZW1lbnRcblxuICAvLyBHcmFiIHRoZSBpZCdzLCB0aGVuIHdlIHdpbGwgdXNlIHRoZWlyIHZhbHVlc1xuICAvLyBXZSBoYXZlIHRvIG1ha2Ugc3VyZSB0aGF0IHdlJ3JlIGVkaXRpbmcgdGhlIHJpZ2h0IG9iamVjdFxuICAvLyBNYXliZSB1c2VyIGZvciBsb29wIHByb2plY3RzLnRhc2s/P1xuXG4gIC8vIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PnsgPC0gV2lsbCBnbyBpbnNpZGUgYW4gaWYgc3RhdGVtZW50XG4gIC8vICAgcHJvamVjdC51cGRhdGVUb2RvSXRlbSgpO1xuICAvLyB9KVxufVxuIiwiaW1wb3J0IGNyZWF0ZUVkaXRGb3JtIGZyb20gXCIuLi9WaWV3L2NyZWF0ZUVkaXRGb3JtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9wZW5FZGl0Rm9ybSgpIHtcbiAgY3JlYXRlRWRpdEZvcm0oKTtcbiAgY29uc3QgZm9ybU9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXRJdGVtRm9ybVwiKTtcbiAgZm9ybU9wZW4uc2hvd01vZGFsKCk7XG59XG4iLCJpbXBvcnQgY3JlYXRlSXRlbUZvcm0gZnJvbSBcIi4uL1ZpZXcvY3JlYXRlSXRlbUZvcm1cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3Blbkl0ZW1Gb3JtKCkge1xuICBjcmVhdGVJdGVtRm9ybSgpO1xuICBjb25zdCBmb3JtT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaXRlbUZvcm1cIik7XG4gIGZvcm1PcGVuLnNob3dNb2RhbCgpO1xufVxuIiwiaW1wb3J0IGNyZWF0ZVByb2plY3RGb3JtIGZyb20gXCIuLi9WaWV3L2NyZWF0ZVByb2plY3RGb3JtXCI7XG5cbmNyZWF0ZVByb2plY3RGb3JtKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9wZW5Gb3JtKCkge1xuICBjb25zdCBmb3JtT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlhbG9nQ29udGFpbmVyXCIpO1xuICBmb3JtT3Blbi5zaG93TW9kYWwoKTtcbn1cbiIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4uL01vZGVsL2NvbGxlY3Rpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVtb3ZlVGFzayhlKSB7XG4gIC8vIFRoZSBwdXJwb3NlIGlzIHRvIHJlbW92ZSBpdGVtIGZyb20gdGhlaXIgb2JqZWN0IGFuZCBmcm9tIHRoZSBkaXNwbGF5IGl0ZW1zXG4gIC8vIFdlIGhhdmUgYSBtZXRob2QgY2FsbGVkIHJlbW92ZVRvZG9JdGVtKGl0ZW0pXG4gIC8vICBXaGljaCB3aWxsIG5lZWQgdGhlIGl0ZW0uaWQgb2YgdGhlIGl0ZW0gd2Ugc2VsZWN0XG5cbiAgLy8gU28sIGhvdyB3aWxsbCB0aGlzIHBsYXkgb3V0XG4gIC8vIDEuIFRoZSB1c2VyIHdpbGwgcHJlc3Mgb24gdGhlIGBkZWxldGVgIGJ1dHRvblxuICAvLyAyLiBXaGVuIGRvaW5nIHNvLCB3ZSB3aWxsIGdyYWIgdGhhdCBpdGVtIElEIHdoZXJlIHdlIHByZXNzZWQgYGRlbGV0ZWBcbiAgLy8gMmEuIFdlIG5lZWQgdG8gcmVtb3ZlIHRoZSB2aXN1YWwgY2FyZCBmaXJzdFxuICAvLyAzLiBOZXh0IHdlIHdpbGwgZ2V0IHRoYXQgcHJvamVjdCBvYmplY3QsIGNhbGwgaXQncyBtZXRob2QgYGByZW1vdmVUb2RvSXRlbWBcbiAgLy8gIDNhLiBXZSB3aWxsIGhhdmUgdG8gY2hlY2sgd2hpY2ggcHJvamVjdCB3ZSBhcmUgZGVhbGluZyB3aXRoXG4gIC8vICAzYi4gT25jZSB3ZSBnZXQgdGhlIGNvcnJlY3QgcHJvamVjdCwgd2Ugd2lsbCBuZWVkIHRvIGl0ZXJhdGUgdGhyb3VnaCBpdCdzIHRhc2sgaXRlbXNcbiAgLy8gIDNjLiBXZSBuZWVkIHRvIGNoZWNrIGlmIHRhc2tJdGVtIElEIGlzIGVxdWFsIHRvIG91ciBpdGVtSUQsIGlmIHNvLiB3ZSBjYWxsIHRoZSBtZXRob2QgdG8gcmVtb3ZlXG4gIC8vIDQuIEluc2V0IGl0ZW1JRCBpbnRvIGFyZ3VtZW50IGFuZCBob3BlIGZvciB0aGUgYmVzdFxuICAvLyA1LiBOZXh0LCB3ZSB0cnkgdG8gcmVtb3ZlIHRoZSB2aXN1YWwgY2FyZCBhcyB3ZWxsXG5cbiAgY29uc3QgYnV0dG9uSUQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWRlbGV0ZWlkXCIpO1xuXG4gIGNvbnN0IGdyYWJBbGxDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FyZEl0ZW1Db250YWluZXJcIik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBncmFiQWxsQ2FyZHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBjYXJkSUQgPSBncmFiQWxsQ2FyZHNbaV0uZ2V0QXR0cmlidXRlKFwiZGF0YS1jYXJkaWRcIik7XG4gICAgaWYgKGJ1dHRvbklEID09PSBjYXJkSUQpIHtcbiAgICAgIGdyYWJBbGxDYXJkc1tpXS5yZW1vdmUoKTtcblxuICAgICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICBwcm9qZWN0LnJlbW92ZVRvZG9JdGVtKGJ1dHRvbklEKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgbG9va0ZvckRhdGFJbkxTIH0gZnJvbSBcIi4uLy4uL2hlbHBmdWxfZnVuY3Rpb25zL2xvY2FsU3RvcmFnZVwiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFRlbXBsYXRlXCI7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzXG5sZXQgcHJvamVjdHMgPSBbXTtcblxuY29uc3QgY3JlYXRlUHJvamVjdCA9ICh0aXRsZSwgZGVzY3JpcHRpb24pID0+IHtcbiAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbik7XG4gIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG5cbiAgcmV0dXJuIG5ld1Byb2plY3Q7XG59O1xuXG5jb25zdCBkZWxldGVQcm9qZWN0ID0gKGl0ZW0pID0+IHtcbiAgY29uc29sZS5sb2coYENhbGxpbmcgUHJvamVjdHMgYmVmb3JlIGZpbHRlcjogJHtwcm9qZWN0c31gKTtcbiAgcHJvamVjdHMgPSBwcm9qZWN0cy5maWx0ZXIoKG9iamVjdCkgPT4gb2JqZWN0LmlkICE9PSBpdGVtLmlkKTtcbiAgY29uc29sZS5sb2coYENhbGxpbmcgUHJvamVjdHMgYWZ0ZXIgZmlsdGVyOiAke3Byb2plY3RzfWApO1xufTtcblxuY29uc3QgdXBkYXRlSW5mb3JtYXRpb24gPSAoaWQsIHRpdGxlLCBkZXNjcmlwdGlvbikgPT4ge1xuICBwcm9qZWN0cyA9IHByb2plY3RzLm1hcCgoaXRlbSkgPT5cbiAgICBpdGVtLmlkID09PSBpZCA/IG5ldyBQcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgaWQpIDogaXRlbVxuICApO1xufTtcblxuY29uc3QgcmVhZEluZm9ybWF0aW9uID0gKCkgPT4ge1xuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiBwcm9qZWN0KTtcbn07XG5cbi8vIFN0aWxsIHRoaW5raW5nIGFib3V0IGhvdyBJJ2xsIHVzZSBzZXRQcm9qZWN0c1xuY29uc3Qgc2V0UHJvamVjdHMgPSAodmFsdWUpID0+IHByb2plY3RzLnB1c2godmFsdWUpO1xuXG5jb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHByb2plY3RzO1xuXG5jb25zdCByZXRyaWV2ZUZyb21Mb2NhbFN0b3JhZ2UgPSAoa2V5TmFtZSkgPT4ge1xuICBjb25zdCBoZWxsbyA9IGxvb2tGb3JEYXRhSW5MUyhrZXlOYW1lKTtcbiAgLy8gZGF0YS5mb3JFYWNoKChpdGVtKSA9PlxuICAvLyAgIHNldFByb2plY3RzKE9iamVjdC5hc3NpZ24obmV3IFByb2plY3QoKSwgaXRlbSkpXG4gIGNvbnNvbGUubG9nKGhlbGxvKTtcbiAgcmV0dXJuIGhlbGxvLmZvckVhY2goKGl0ZW0pID0+XG4gICAgc2V0UHJvamVjdHMoT2JqZWN0LmFzc2lnbihuZXcgUHJvamVjdCgpLCBpdGVtKSlcbiAgKTtcbn07XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZVByb2plY3QsXG4gIGdldFByb2plY3RzLFxuICBwcm9qZWN0cyxcbiAgc2V0UHJvamVjdHMsXG4gIGRlbGV0ZVByb2plY3QsXG4gIHJldHJpZXZlRnJvbUxvY2FsU3RvcmFnZSxcbiAgdXBkYXRlSW5mb3JtYXRpb24sXG4gIHJlYWRJbmZvcm1hdGlvbixcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1kdXBlLWNsYXNzLW1lbWJlcnMgKi9cbi8vIEZvciBGb2xkZXIgTmFtZXNcbmltcG9ydCByYW5kb21TdHJpbmcgZnJvbSBcIi4uLy4uL2hlbHBmdWxfZnVuY3Rpb25zL2NyZWF0ZVJhbmRvbUlEXCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrVGVtcGxhdGVcIjtcblxuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgaWQgPSByYW5kb21TdHJpbmcoKSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMudGFza3MgPSBbXTtcbiAgfVxuXG4gIHNldCB0aXRsZSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZS5sZW5ndGggPCAzKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCwgbm90ZSBkZXNjcmlwdGlvbiBpcyB0b28gc2hvcnQuXCIpO1xuXG4gICAgdGhpcy5jdXJyZW50X3RpdGxlID0gdmFsdWU7XG4gIH1cblxuICBnZXQgdGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudF90aXRsZTtcbiAgfVxuXG4gIHNldCBkZXNjcmlwdGlvbih2YWx1ZSkge1xuICAgIGlmICh2YWx1ZS5sZW5ndGggPCAzKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCwgbm90ZSBkZXNjcmlwdGlvbiBpcyB0b28gc2hvcnQuXCIpO1xuXG4gICAgdGhpcy5jdXJyZW50X2Rlc2NyaXB0aW9uID0gdmFsdWU7XG4gIH1cblxuICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudF9kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIGdldCB0YXNrKCkge1xuICAgIHJldHVybiB0aGlzLnRhc2tzO1xuICB9XG5cbiAgY3JlYXRlVG9kb0l0ZW0odGFzaywgZGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBpZCA9IHJhbmRvbVN0cmluZygpKSB7XG4gICAgY29uc3QgdG9kb0l0ZW0gPSBuZXcgVGFzayh0YXNrLCBkYXRlLCBwcmlvcml0eSwgbm90ZXMsIGlkKTtcbiAgICB0aGlzLnRhc2tzLnB1c2godG9kb0l0ZW0pO1xuICAgIHJldHVybiB0b2RvSXRlbTtcbiAgfVxuXG4gIHJlbW92ZVRvZG9JdGVtKGl0ZW0pIHtcbiAgICB0aGlzLnRhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suaWQgIT09IGl0ZW0pO1xuICB9XG5cbiAgdXBkYXRlVG9kb0l0ZW0oaWQsIHRhc2ssIGRhdGUsIHByaW9yaXR5LCBub3Rlcykge1xuICAgIHRoaXMudGFza3MgPSB0aGlzLnRhc2subWFwKChpdGVtKSA9PlxuICAgICAgaXRlbS5pZCA9PT0gaWQgPyBuZXcgVGFzayh0YXNrLCBkYXRlLCBwcmlvcml0eSwgbm90ZXMsIGlkKSA6IGl0ZW1cbiAgICApO1xuICB9XG5cbiAgcmV0cmlldmVJdGVtc0luUHJvamVjdCgpIHtcbiAgICB0aGlzLnRhc2tzLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0pO1xuICB9XG5cbiAgYnlJRChpZCkge1xuICAgIHJldHVybiB0aGlzLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IGlkKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWR1cGUtY2xhc3MtbWVtYmVycyAqL1xuY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRhc2ssIGRhdGUsIHByaW9yaXR5LCBub3RlcywgaWQpIHtcbiAgICB0aGlzLnRhc2sgPSB0YXNrO1xuICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMubm90ZXMgPSBub3RlcztcblxuICAgIHRoaXMuaWQgPSBpZDtcbiAgfVxuXG4gIGdldCB0YXNrKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRfdGFzaztcbiAgfVxuXG4gIHNldCB0YXNrKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSBcIlwiIHx8IHZhbHVlLmxlbmd0aCA8IDMpIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgVGFza1wiKTtcblxuICAgIHRoaXMuY3VycmVudF90YXNrID0gdmFsdWU7XG4gIH1cblxuICBnZXQgcHJpb3JpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudF9wcmlvcml0eTtcbiAgfVxuXG4gIC8vIHNldCBwcmlvcml0eSh2YWx1ZSkge1xuICAvLyAgIGlmICghW1wiaGlnaFwiLCBcIm1lZGl1bVwiLCBcImxvd1wiXS5pbmNsdWRlcyh2YWx1ZS50b0xvd2VyQ2FzZSgpKSlcbiAgLy8gICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQsIG5vdCBvbmUgb2YgdGhlIGNob2ljZXNcIik7XG5cbiAgLy8gICB0aGlzLmN1cnJlbnRfcHJpb3JpdHkgPSB2YWx1ZTtcbiAgLy8gfVxuXG4gIHNldCBwcmlvcml0eSh2YWx1ZSkge1xuICAgIHRoaXMuY3VycmVudF9wcmlvcml0eSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IG5vdGVzKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRfbm90ZXM7XG4gIH1cblxuICBzZXQgbm90ZXModmFsdWUpIHtcbiAgICBpZiAodmFsdWUubGVuZ3RoIDwgMTApXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkLCBub3RlIGRlc2NyaXB0aW9uIGlzIHRvbyBzaG9ydC5cIik7XG5cbiAgICB0aGlzLmN1cnJlbnRfbm90ZXMgPSB2YWx1ZTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGFzazogdGhpcy50YXNrLFxuICAgICAgZGF0ZTogdGhpcy5kYXRlLFxuICAgICAgcHJpb3JpdHk6IHRoaXMucHJpb3JpdHksXG4gICAgICBub3RlczogdGhpcy5ub3RlcyxcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFzaztcbiIsImltcG9ydCByZW1vdmVUYXNrSXRlbSBmcm9tIFwiLi4vQ29udHJvbGxlci9yZW1vdmVUYXNrSXRlbVwiO1xuaW1wb3J0IGVkaXRUYXNrIGZyb20gXCIuLi9Db250cm9sbGVyL2VkaXRUYXNrXCI7XG5cbi8vIENyZWF0ZSBob3cgdGhlIGluaXRpYWwgY2FyZCB3aWxsIGxvb2tcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUl0ZW1DYXJkKHRhc2ssIG5vdGUsIHByaW9yaXR5LCBkYXRlLCBpZCkge1xuICAvLyBncmFiIGN1cnJlbnRQYWdlIG9yIG1haW4gcGFnZSB0byBhcHBlbmQgdG9cblxuICBjb25zdCBjYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIGNhcmRDb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjYXJkSXRlbUNvbnRhaW5lclwiKTtcbiAgY2FyZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNhcmRJRFwiLCBgJHtpZH1gKTtcblxuICBjb25zdCBwcmlvcml0eVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHByaW9yaXR5VGl0bGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcmlvcml0eVRpdGxlU3BhblwiKTtcbiAgcHJpb3JpdHlUaXRsZS50ZXh0Q29udGVudCA9IGAke3ByaW9yaXR5fWA7XG5cbiAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eVRpdGxlKTtcblxuICBjb25zdCBsZWZ0U2lkZVNlY3Rpb25JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIGxlZnRTaWRlU2VjdGlvbkl0ZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsZWZ0U2lkZVNlY3Rpb25JdGVtXCIpO1xuXG4gIGNvbnN0IHRvcFNlY3Rpb25MZWZ0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICB0b3BTZWN0aW9uTGVmdEl0ZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b3BTZWN0aW9uTGVmdEl0ZW1cIik7XG5cbiAgY29uc3QgdGFza1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgdGFza1NlY3Rpb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrU2VjdGlvblwiKTtcblxuICBjb25zdCBpbnB1dFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0VGFzay5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gIGNvbnN0IGxhYmVsVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWxUYXNrLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImNoZWNrYm94XCIpO1xuICBsYWJlbFRhc2suc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsYWJlbFRhc2tcIik7XG4gIGxhYmVsVGFzay50ZXh0Q29udGVudCA9IGAke3Rhc2t9YDtcblxuICB0YXNrU2VjdGlvbi5hcHBlbmRDaGlsZChpbnB1dFRhc2spO1xuICB0YXNrU2VjdGlvbi5hcHBlbmRDaGlsZChsYWJlbFRhc2spO1xuXG4gIHRvcFNlY3Rpb25MZWZ0SXRlbS5hcHBlbmRDaGlsZCh0YXNrU2VjdGlvbik7XG5cbiAgY29uc3QgbWlkZGxlU2VjdGlvbkxlZnRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIG1pZGRsZVNlY3Rpb25MZWZ0SXRlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1pZGRsZVNlY3Rpb25MZWZ0SXRlbVwiKTtcblxuICBjb25zdCBpbnB1dERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaW5wdXREYXRlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW5wdXREYXRlXCIpO1xuICBpbnB1dERhdGUudGV4dENvbnRlbnQgPSBgJHtkYXRlfWA7XG5cbiAgbWlkZGxlU2VjdGlvbkxlZnRJdGVtLmFwcGVuZENoaWxkKGlucHV0RGF0ZSk7XG5cbiAgY29uc3QgYm90dG9tU2VjdGlvbkxlZnRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIGJvdHRvbVNlY3Rpb25MZWZ0SXRlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJvdHRvbVNlY3Rpb25MZWZ0SXRlbVwiKTtcbiAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGVkaXRCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJlZGl0QnV0dG9uXCIpO1xuICBlZGl0QnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtZWRpdGlkXCIsIGAke2lkfWApO1xuICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlZGl0VGFzayk7XG4gIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcblxuICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBkZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkZWxldGVCdXR0b25JdGVtXCIpO1xuICBkZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS1kZWxldGVpZFwiLCBgJHtpZH1gKTtcbiAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVUYXNrSXRlbSk7XG4gIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG5cbiAgYm90dG9tU2VjdGlvbkxlZnRJdGVtLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuICBib3R0b21TZWN0aW9uTGVmdEl0ZW0uYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcblxuICBsZWZ0U2lkZVNlY3Rpb25JdGVtLmFwcGVuZENoaWxkKHRvcFNlY3Rpb25MZWZ0SXRlbSk7XG4gIGxlZnRTaWRlU2VjdGlvbkl0ZW0uYXBwZW5kQ2hpbGQobWlkZGxlU2VjdGlvbkxlZnRJdGVtKTtcbiAgbGVmdFNpZGVTZWN0aW9uSXRlbS5hcHBlbmRDaGlsZChib3R0b21TZWN0aW9uTGVmdEl0ZW0pO1xuXG4gIGNvbnN0IHJpZ2h0U2lkZVNlY3Rpb25JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIHJpZ2h0U2lkZVNlY3Rpb25JdGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicmlnaHRTaWRlU2VjdGlvbkl0ZW1cIik7XG5cbiAgY29uc3Qgbm90ZUFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbm90ZUFyZWEuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJub3RlQXJlYVwiKTtcbiAgbm90ZUFyZWEudGV4dENvbnRlbnQgPSBgJHtub3RlfWA7XG5cbiAgcmlnaHRTaWRlU2VjdGlvbkl0ZW0uYXBwZW5kQ2hpbGQobm90ZUFyZWEpO1xuXG4gIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQobGVmdFNpZGVTZWN0aW9uSXRlbSk7XG4gIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQocmlnaHRTaWRlU2VjdGlvbkl0ZW0pO1xuXG4gIHJldHVybiBjYXJkQ29udGFpbmVyO1xufVxuXG4vKiBcblxuW1xuICBbXVRBU0tcbiAgW05PVEVTIEhFUkVdXG5cblxuXVxuXG4qL1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRWRpdEZvcm0oKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgY29uc3QgZGlhbG9nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcbiAgZGlhbG9nQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZWRpdEl0ZW1Gb3JtXCIpO1xuXG4gIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9ybUNvbnRhaW5lckl0ZW1cIik7XG5cbiAgY29uc3QgdG9wU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICB0b3BTZWN0aW9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9wU2VjdGlvbkl0ZW0gZm9ybUxpc3RJdGVtXCIpO1xuXG4gIGNvbnN0IHRhc2tMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgdGFza0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImVkaXRUYXNrXCIpO1xuICB0YXNrTGFiZWwudGV4dENvbnRlbnQgPSBcIlRhc2s6XCI7XG5cbiAgY29uc3QgdGFza0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0YXNrSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlZGl0VGFza1wiKTtcbiAgdGFza0lucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuXG4gIHRvcFNlY3Rpb24uYXBwZW5kQ2hpbGQodGFza0xhYmVsKTtcbiAgdG9wU2VjdGlvbi5hcHBlbmRDaGlsZCh0YXNrSW5wdXQpO1xuXG4gIHRvcFNlY3Rpb24uYXBwZW5kQ2hpbGQodGFza0xhYmVsKTtcbiAgdG9wU2VjdGlvbi5hcHBlbmRDaGlsZCh0YXNrSW5wdXQpO1xuXG4gIGNvbnN0IG1pZGRsZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgbWlkZGxlU2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1pZGRsZVNlY3Rpb25JdGVtIGZvcm1MaXN0SXRlbVwiKTtcblxuICBjb25zdCB0ZXh0QXJlYUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICB0ZXh0QXJlYUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImVkaXROb3RlXCIpO1xuICB0ZXh0QXJlYUxhYmVsLnRleHRDb250ZW50ID0gXCJOb3RlOlwiO1xuXG4gIGNvbnN0IHRleHRBcmVhSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIHRleHRBcmVhSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIHRleHRBcmVhSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlZGl0Tm90ZVwiKTtcblxuICBtaWRkbGVTZWN0aW9uLmFwcGVuZENoaWxkKHRleHRBcmVhTGFiZWwpO1xuICBtaWRkbGVTZWN0aW9uLmFwcGVuZENoaWxkKHRleHRBcmVhSW5wdXQpO1xuXG4gIGNvbnN0IHNlY29uZE1pZGRsZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgc2Vjb25kTWlkZGxlU2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNlY29uZE1pZGRsZVNlY3Rpb24gZm9ybUxpc3RJdGVtXCIpO1xuXG4gIGNvbnN0IGNhbGVuZGFySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNhbGVuZGFySW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlZGl0RGF0ZVwiKTtcbiAgY2FsZW5kYXJJbnB1dC50eXBlID0gXCJkYXRlXCI7XG5cbiAgY29uc3Qgc2VsZWN0RHJvcERvd25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIHNlbGVjdERyb3BEb3duSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlZGl0U2VsZWN0XCIpO1xuICBjb25zdCBsb3dUaWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgbG93VGllci5zZXRBdHRyaWJ1dGUgPSAoXCJ2YWx1ZVwiLCBcImxvd1wiKTtcbiAgbG93VGllci50ZXh0Q29udGVudCA9IFwiTG93XCI7XG5cbiAgY29uc3QgbWVkaXVtVGllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIG1lZGl1bVRpZXIuc2V0QXR0cmlidXRlID0gKFwidmFsdWVcIiwgXCJtZWRpdW1cIik7XG4gIG1lZGl1bVRpZXIudGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiO1xuXG4gIGNvbnN0IGhpZ2hUaWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgaGlnaFRpZXIuc2V0QXR0cmlidXRlID0gKFwidmFsdWVcIiwgXCJoaWdoXCIpO1xuICBoaWdoVGllci50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xuXG4gIHNlbGVjdERyb3BEb3duSW5wdXQuYXBwZW5kQ2hpbGQobG93VGllcik7XG4gIHNlbGVjdERyb3BEb3duSW5wdXQuYXBwZW5kQ2hpbGQobWVkaXVtVGllcik7XG4gIHNlbGVjdERyb3BEb3duSW5wdXQuYXBwZW5kQ2hpbGQoaGlnaFRpZXIpO1xuXG4gIHNlY29uZE1pZGRsZVNlY3Rpb24uYXBwZW5kQ2hpbGQoY2FsZW5kYXJJbnB1dCk7XG4gIHNlY29uZE1pZGRsZVNlY3Rpb24uYXBwZW5kQ2hpbGQoc2VsZWN0RHJvcERvd25JbnB1dCk7XG5cbiAgY29uc3QgYm90dG9tU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBib3R0b21TZWN0aW9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYm90dG9tU2VjdGlvbkl0ZW0gZm9ybUxpc3RJdGVtXCIpO1xuXG4gIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNhbmNlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJmb3JtbWV0aG9kXCIsIFwiZGlhbG9nXCIpO1xuXG4gIGNhbmNlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImVkaXRJdGVtQ2FuY2VsXCIpO1xuICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuXG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJlZGl0SXRlbVN1Ym1pdFwiKTtcbiAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcblxuICBib3R0b21TZWN0aW9uLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG4gIGJvdHRvbVNlY3Rpb24uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcblxuICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvcFNlY3Rpb24pO1xuICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKG1pZGRsZVNlY3Rpb24pO1xuICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlY29uZE1pZGRsZVNlY3Rpb24pO1xuICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGJvdHRvbVNlY3Rpb24pO1xuXG4gIGRpYWxvZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGRpYWxvZ0NvbnRhaW5lcik7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbi8qIFxuXG5JbnB1dFxuXG5JbnB1dCBOb3RlXG5cbkRhdGUgSW5wdXQgfCBQcmlvcml0eSBJbnB1dFxuXG5DYW5jZWwgfCBTdWJtaXQgPC0gV2lsbCB1cGRhdGUgY2FyZCB2aXN1YWxzXG5cbiovXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVJdGVtRm9ybSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICBjb25zdCBkaWFsb2dDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xuICBkaWFsb2dDb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpdGVtRm9ybVwiKTtcblxuICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvcm1Db250YWluZXJJdGVtXCIpO1xuXG4gIGNvbnN0IHRvcFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgdG9wU2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvcFNlY3Rpb25JdGVtIGZvcm1MaXN0SXRlbVwiKTtcblxuICBjb25zdCB0YXNrTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIHRhc2tMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0YXNrXCIpO1xuICB0YXNrTGFiZWwudGV4dENvbnRlbnQgPSBcIlRhc2s6XCI7XG5cbiAgY29uc3QgdGFza0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0YXNrSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrXCIpO1xuICB0YXNrSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5cbiAgdG9wU2VjdGlvbi5hcHBlbmRDaGlsZCh0YXNrTGFiZWwpO1xuICB0b3BTZWN0aW9uLmFwcGVuZENoaWxkKHRhc2tJbnB1dCk7XG5cbiAgdG9wU2VjdGlvbi5hcHBlbmRDaGlsZCh0YXNrTGFiZWwpO1xuICB0b3BTZWN0aW9uLmFwcGVuZENoaWxkKHRhc2tJbnB1dCk7XG5cbiAgY29uc3QgbWlkZGxlU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBtaWRkbGVTZWN0aW9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWlkZGxlU2VjdGlvbkl0ZW0gZm9ybUxpc3RJdGVtXCIpO1xuXG4gIGNvbnN0IHRleHRBcmVhTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIHRleHRBcmVhTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibm90ZVwiKTtcbiAgdGV4dEFyZWFMYWJlbC50ZXh0Q29udGVudCA9IFwiTm90ZTpcIjtcblxuICBjb25zdCB0ZXh0QXJlYUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICB0ZXh0QXJlYUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICB0ZXh0QXJlYUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibm90ZVwiKTtcblxuICBtaWRkbGVTZWN0aW9uLmFwcGVuZENoaWxkKHRleHRBcmVhTGFiZWwpO1xuICBtaWRkbGVTZWN0aW9uLmFwcGVuZENoaWxkKHRleHRBcmVhSW5wdXQpO1xuXG4gIGNvbnN0IHNlY29uZE1pZGRsZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgc2Vjb25kTWlkZGxlU2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNlY29uZE1pZGRsZVNlY3Rpb24gZm9ybUxpc3RJdGVtXCIpO1xuXG4gIGNvbnN0IGNhbGVuZGFySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNhbGVuZGFySW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkYXRlXCIpO1xuICBjYWxlbmRhcklucHV0LnR5cGUgPSBcImRhdGVcIjtcblxuICBjb25zdCBzZWxlY3REcm9wRG93bklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgc2VsZWN0RHJvcERvd25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlbGVjdFwiKTtcbiAgY29uc3QgbG93VGllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIGxvd1RpZXIuc2V0QXR0cmlidXRlID0gKFwidmFsdWVcIiwgXCJsb3dcIik7XG4gIGxvd1RpZXIudGV4dENvbnRlbnQgPSBcIkxvd1wiO1xuXG4gIGNvbnN0IG1lZGl1bVRpZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBtZWRpdW1UaWVyLnNldEF0dHJpYnV0ZSA9IChcInZhbHVlXCIsIFwibWVkaXVtXCIpO1xuICBtZWRpdW1UaWVyLnRleHRDb250ZW50ID0gXCJNZWRpdW1cIjtcblxuICBjb25zdCBoaWdoVGllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIGhpZ2hUaWVyLnNldEF0dHJpYnV0ZSA9IChcInZhbHVlXCIsIFwiaGlnaFwiKTtcbiAgaGlnaFRpZXIudGV4dENvbnRlbnQgPSBcIkhpZ2hcIjtcblxuICBzZWxlY3REcm9wRG93bklucHV0LmFwcGVuZENoaWxkKGxvd1RpZXIpO1xuICBzZWxlY3REcm9wRG93bklucHV0LmFwcGVuZENoaWxkKG1lZGl1bVRpZXIpO1xuICBzZWxlY3REcm9wRG93bklucHV0LmFwcGVuZENoaWxkKGhpZ2hUaWVyKTtcblxuICBzZWNvbmRNaWRkbGVTZWN0aW9uLmFwcGVuZENoaWxkKGNhbGVuZGFySW5wdXQpO1xuICBzZWNvbmRNaWRkbGVTZWN0aW9uLmFwcGVuZENoaWxkKHNlbGVjdERyb3BEb3duSW5wdXQpO1xuXG4gIGNvbnN0IGJvdHRvbVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgYm90dG9tU2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJvdHRvbVNlY3Rpb25JdGVtIGZvcm1MaXN0SXRlbVwiKTtcblxuICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKFwiZm9ybW1ldGhvZFwiLCBcImRpYWxvZ1wiKTtcblxuICBjYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpdGVtQ2FuY2VsXCIpO1xuICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuXG5cbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIml0ZW1TdWJtaXRcIik7XG4gIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG5cbiAgYm90dG9tU2VjdGlvbi5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuICBib3R0b21TZWN0aW9uLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG5cbiAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b3BTZWN0aW9uKTtcbiAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChtaWRkbGVTZWN0aW9uKTtcbiAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWNvbmRNaWRkbGVTZWN0aW9uKTtcbiAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChib3R0b21TZWN0aW9uKTtcblxuICBkaWFsb2dDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChkaWFsb2dDb250YWluZXIpO1xuXG4gIHJldHVybiBjb250ZW50O1xufVxuIiwiaW1wb3J0IGFkZEl0ZW0gZnJvbSBcIi4uL0NvbnRyb2xsZXIvYWRkVGFza1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNYWluVGFiKHRpdGxlLCBkZXNjcmlwdGlvbiwgaWQpIHtcbiAgLy8gYXBwZW5kIHRvIHRoZSBtYWluY29udGFpbmVyXG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnRQYWdlXCIpO1xuXG4gIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgcHJvamVjdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2plY3RDb250YWluZXJcIik7XG4gIHByb2plY3RDb250YWluZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0aWRcIiwgYCR7aWR9YCk7XG5cbiAgY29uc3QgdG9wUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIHRvcFJvdy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvcFJvd1wiKTtcblxuICBjb25zdCBtYWluVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIG1haW5UaXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1haW5UaXRsZVwiKTtcbiAgbWFpblRpdGxlLnRleHRDb250ZW50ID0gYCR7dGl0bGV9YDtcblxuICBjb25zdCB0b3BSb3dTZWNvbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgdG9wUm93U2Vjb25kLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9wUm93U2Vjb25kXCIpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBkZXNjcmlwdGlvblRleHQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkZXNjcmlwdGlvblRleHRcIik7XG4gIGRlc2NyaXB0aW9uVGV4dC50ZXh0Q29udGVudCA9IGAke2Rlc2NyaXB0aW9ufWA7XG5cbiAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGVkaXRCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJlZGl0QnV0dG9uXCIpO1xuICBlZGl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG5cbiAgdG9wUm93LmFwcGVuZENoaWxkKG1haW5UaXRsZSk7XG4gIHRvcFJvdy5hcHBlbmRDaGlsZCh0b3BSb3dTZWNvbmQpO1xuXG4gIHRvcFJvd1NlY29uZC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblRleHQpO1xuICB0b3BSb3dTZWNvbmQuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG5cbiAgY29uc3QgbWlkZGxlUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIG1pZGRsZVJvdy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1pZGRsZVJvd1wiKTtcblxuICAvLyBNaWRkbGUgcm93IHdpbGwgYmUgd2hlcmUgYWxsIHRhc2sgaXRlbXMgd2lsbCBnb1xuXG4gIGNvbnN0IGJvdHRvbVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBib3R0b21Sb3cuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJib3R0b21Sb3dcIik7XG5cbiAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZFRhc2tCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhZGRUYXNrQnV0dG9uXCIpO1xuICBhZGRUYXNrQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgYWRkVGFza0J1dHRvbi50ZXh0Q29udGVudCA9IFwiK1wiO1xuXG4gIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZEl0ZW0pO1xuXG4gIGJvdHRvbVJvdy5hcHBlbmRDaGlsZChhZGRUYXNrQnV0dG9uKTtcblxuICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRvcFJvdyk7XG4gIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQobWlkZGxlUm93KTtcbiAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChib3R0b21Sb3cpO1xuXG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG5cbiAgcmV0dXJuIHByb2plY3RDb250YWluZXI7XG5cbiAgLy8gY3JlYXRlIHRvcCByb3dbdGl0bGUgYW5kIGRlc2NyaXB0aW9uIHdpbGwgYmVdXG5cbiAgLy8gdGhlbiBjcmVhdGUgW10gYmlnIHNpemUgd2hlcmUgYWxsIHRhc2tzIHdpbGwgZ29cbn1cbiIsIi8vIFRoaXMgd2lsbCBjcmVhdGUgYSBkaWFsb2cgZm9ybSB2aWV3XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RGb3JtKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gIGNvbnN0IGRpYWxvZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XG5cbiAgZGlhbG9nQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGlhbG9nQ29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGZvcm1Ib2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgZm9ybUhvbGRlci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZvcm1Db250YWluZXJcIik7XG4gIGZvcm1Ib2xkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0Rm9ybVwiKTtcblxuICBjb25zdCBkaXYxQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2MUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZvcm0tbGlzdFwiKTtcblxuICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRpdGxlXCIpO1xuICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZTpcIjtcblxuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGl0bGVcIik7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0aXRsZUlucHV0VmFsdWVcIik7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJFbnRlciBOYW1lXCIpO1xuXG4gIGRpdjFDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gIGRpdjFDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG5cbiAgY29uc3QgZGl2MkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdjJDb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmb3JtLWxpc3RcIik7XG5cbiAgY29uc3QgZGVzY3JpcHRpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgZGVzY3JpcHRpb25UaXRsZS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkZXNjcmlwdGlvblwiKTtcbiAgZGVzY3JpcHRpb25UaXRsZS50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246XCI7XG5cbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlc2NyaXB0aW9uXCIpO1xuICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkZXNjcmlwdGlvblwiKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkZXNjcmlwdGlvblwiKTtcblxuICBkaXYyQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVGl0bGUpO1xuICBkaXYyQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xuXG4gIGNvbnN0IGRpdjNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGRpdjNDb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidXR0b25zQ29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGJ1dHRvbkNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGJ1dHRvblN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgYnV0dG9uQ2FuY2VsLnNldEF0dHJpYnV0ZShcImZvcm1tZXRob2RcIiwgXCJkaWFsb2dcIik7XG4gIGJ1dHRvbkNhbmNlbC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhbmNlbEJ1dHRvblwiKTtcbiAgYnV0dG9uQ2FuY2VsLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgYnV0dG9uQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdGl0bGVJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgZGlhbG9nQ29udGFpbmVyLmNsb3NlKCk7XG4gIH0pO1xuXG4gIGJ1dHRvblN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInN1Ym1pdEJ1dHRvblwiKTtcbiAgYnV0dG9uU3VibWl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gIGJ1dHRvblN1Ym1pdC50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG5cbiAgYnV0dG9uU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZGlhbG9nQ29udGFpbmVyLmNsb3NlKCk7XG4gIH0pO1xuXG4gIGRpdjNDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uQ2FuY2VsKTtcbiAgZGl2M0NvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25TdWJtaXQpO1xuXG4gIGRpYWxvZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtSG9sZGVyKTtcblxuICBmb3JtSG9sZGVyLmFwcGVuZENoaWxkKGRpdjFDb250YWluZXIpO1xuICBmb3JtSG9sZGVyLmFwcGVuZENoaWxkKGRpdjJDb250YWluZXIpO1xuICBmb3JtSG9sZGVyLmFwcGVuZENoaWxkKGRpdjNDb250YWluZXIpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGlhbG9nQ29udGFpbmVyKTtcblxuICByZXR1cm4gY29udGVudDtcbn1cblxuLyogXG5cbltTUEVDSUFMIElDT05dXG5bSU5QVVQgRklFTERTXVxuW0NBTkNFTCBTVUJNSVQgQlVUVE9OU11cblxuXG5cblxuKi9cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RUYWIodGl0bGVJbnB1dCwgaXRlbUlEKSB7XG4gIC8vIEdyYWIgdGhlIHByb2plY3RzIGxpc3QgVUwgZWxlbWVudFxuICBjb25zdCBwcm9qZWN0VUwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzXCIpO1xuXG4gIGNvbnN0IGxpRWxlbWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgbGlFbGVtZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGlFbGVtZW50XCIpO1xuICBsaUVsZW1lbnRDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7aXRlbUlEfWApO1xuXG4gIGNvbnN0IGNyZWF0ZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg2XCIpO1xuICBjcmVhdGVUaXRsZS50ZXh0Q29udGVudCA9IGAke3RpdGxlSW5wdXR9YDtcblxuICBsaUVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVGl0bGUpO1xuXG4gIHByb2plY3RVTC5hcHBlbmRDaGlsZChsaUVsZW1lbnRDb250YWluZXIpO1xuXG4gIGxpRWxlbWVudENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBjb25zdCB0ZXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50UGFnZVwiKS5jaGlsZHJlbjtcblxuICAgIGNvbnNvbGUubG9nKGUuY3VycmVudFRhcmdldC5pZCk7XG4gICAgY29uc3QgY3VycmVudElEID0gZS5jdXJyZW50VGFyZ2V0LmlkO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0ZXN0W2ldLmdldEF0dHJpYnV0ZShcInByb2plY3QtaWRcIikpO1xuICAgICAgaWYgKGN1cnJlbnRJRCA9PT0gdGVzdFtpXS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RpZFwiKSkge1xuICAgICAgICB0ZXN0W2ldLmNsYXNzTGlzdC5hZGQoXCJPTkxJTkVcIik7XG4gICAgICAgIHRlc3RbaV0uY2xhc3NMaXN0LnJlbW92ZShcIk9GRkxJTkVcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ZXN0W2ldLmNsYXNzTGlzdC5hZGQoXCJPRkZMSU5FXCIpO1xuICAgICAgICB0ZXN0W2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJPTkxJTkVcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTm93LCBJIG5lZWQgdG8gbWFrZSB0aGlzIHNwZWNpZmljIElEIGZyb20gdGhlIG1haW5QYWdlIGJlIGFjdGl2ZSBvciBjbGFzcyBhY3RpdmVcbiAgfSk7XG5cbiAgcmV0dXJuIHByb2plY3RVTDtcbn1cbiIsImZ1bmN0aW9uIHJhbmRvbVN0cmluZygpIHtcbiAgcmV0dXJuIFN0cmluZyhEYXRlLm5vdygpLnRvU3RyaW5nKDMyKSArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpKS5yZXBsYWNlKFxuICAgIC9cXC4vZyxcbiAgICBcIlwiXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJhbmRvbVN0cmluZztcbiIsIi8vIFNhdmUgZXZlcnl0aGluZ1xuXG5mdW5jdGlvbiBzYXZlUHJvamVjdFNUb2RvTFMoa2V5TmFtZSwgYXJyYXkpIHtcbiAgY29uc3Qgc3RyaW5naWZ5ID0gSlNPTi5zdHJpbmdpZnkoYXJyYXkpO1xuICAvLyBhbGxvd3MgdXMgdG8gZ3JhYiBwcm9qZWN0c1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXlOYW1lLCBzdHJpbmdpZnkpO1xuXG4gIC8vIG5vdyB3ZSBuZWVkIG9uZSBmb3IgdG9kbyBpdGVtc1xuXG4gIC8vIHdlIG5lZWQgdG8gc2V0SXRlbSBmb3IgdG9kbyBpdGVtcywgaG93IGRvIHdlIGdyYWIgdGhhdD9cbn1cblxuZnVuY3Rpb24gbG9va0ZvckRhdGFJbkxTKGtleU5hbWUpIHtcbiAgLy8gV2UgbmVlZCB0byBsb29rIGZvciB0aGUgZGF0YSBpbiB0aGUgbG9jYWwgc3RvcmFnZVxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5TmFtZSkgPT09IG51bGwpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgY29uc3QgZ2V0SXRlbSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleU5hbWUpO1xuXG4gIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGdldEl0ZW0pO1xuXG4gIC8vIHJlbWVtYmVyIHBhcnNlIHJldHVybnMgYW4gb2JqZWN0IG5vdCBhbiBhcnJheVxuXG4gIHJldHVybiBkYXRhO1xufVxuXG5leHBvcnQgeyBzYXZlUHJvamVjdFNUb2RvTFMsIGxvb2tGb3JEYXRhSW5MUyB9O1xuIiwiaW1wb3J0IGFkZFByb2plY3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udHJvbGxlci9hZGRQcm9qZWN0XCI7XG5pbXBvcnQgb3BlbkZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udHJvbGxlci9vcGVuUHJvamVjdEZvcm1cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFnZUxvYWQoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkUHJvamVjdFwiKTtcbiAgY29uc3QgcHJvamVjdFN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0QnV0dG9uXCIpO1xuXG4gIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5Gb3JtKTtcblxuICBwcm9qZWN0U3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRQcm9qZWN0KTtcbiAgLy8gaXRlbVN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkVGFzayk7XG5cbiAgLy8gYWRkSXRlbUJ1dHRvblxuICAvLyBpdGVtU3VibWl0XG5cbiAgLy8gZXZlbnQgbGlzdGVuZXJcbiAgLy8gZXZlbnQgbGlzdGVuZXJcblxuICAvLyBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIC8vICAgY29uc3QgZ2V0VGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIikudmFsdWU7XG4gIC8vICAgY29uc29sZS5sb2coZ2V0VGl0bGVJbnB1dCk7XG5cbiAgLy8gfSk7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgcGFnZUxvYWQgZnJvbSBcIi4vcGFnZUxvYWQvcGFnZUxvYWRcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbnBhZ2VMb2FkKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=