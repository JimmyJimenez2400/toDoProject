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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --Licorice: #0D0106;\n  --Zaffre: #3626A7;\n  --Glaucous: #657ED4;\n  --Scarlet: #FF331F;\n  --Ghost-White: #FBFBFF;\n  --Royal-Blue: #00539C;\n  --Peach: #EEA47F;\n}\n\nbody,\nhtml {\n  height: 100%;\n  box-sizing: border-box;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n  padding: 0;\n  margin: 0;\n  /* outline: 2px solid green; */\n}\n\nbody {\n  font-size: 16px;\n  background-color: lightblue;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n#content {\n  height: 100%;\n\n\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  grid-template-rows: auto 2fr minmax(200px, 1fr);\n}\n\n#headerContainer {\n  grid-column-start: 1;\n  grid-column-end: -1;\n\n  grid-row-start: 1;\n  grid-row-end: 2;\n  background-color: var(--Licorice);\n  border: 2px solid var(--Ghost-White);\n  color: var(--Ghost-White);\n}\n\n#sideContainer {\n  grid-row-start: 2;\n  grid-row-end: 5;\n  background-color: var(--Licorice);\n  border: 2px solid var(--Ghost-White);\n  display: flex;\n  flex: 2;\n  flex-direction: column;\n}\n\n#displayCurrentPageContainer {\n  grid-row-start: 2;\n  grid-row-end: 4;\n  background-color: var(--Licorice);\n  border: 2px solid var(--Ghost-White);\n}\n\n/* Header */\n\n\n/* Side */\n\n.side {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  color: var(--Ghost-White);\n}\n\n.projectsTitle {\n  margin-bottom: 5px;\n}\n\n.topSection {\n  display: flex;\n  flex-direction: column;\n\n  flex: 1;\n}\n\n.todayFolder {\n  flex: 0 1 10%;\n  border: 2px solid var(--Ghost-White);\n\n}\n\n.upcomingFolder {\n  flex: 0 1 10%;\n  border: 2px solid var(--Ghost-White);\n\n}\n\n.folderContainer {\n  flex: 1;\n  border: 2px solid var(--Ghost-White);\n\n}\n\n.bottomSection {\n  display: inline-flex;\n  flex: 0 1 10%;\n}\n\n.addProjectContainer {\n  display: inline-flex;\n  flex: 1;\n}\n\n.addProject {\n  flex: 1;\n}\n\n.projects {\n  padding: 20px;\n}\n\n.liElement {\n  cursor: pointer;\n  padding: 10px;\n  font-size: 24px;\n  margin-bottom: 20px;\n  background-color: gray;\n  color: var(--Ghost-White);\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n\n.leftSideElementTab {\n  flex: 2;\n}\n\n.rightSideElementTab {\n  display: flex;\n  justify-content: space-between;\n  flex: 1;\n}\n\n\n.liElement:hover {\n  background-color: var(--Scarlet);\n}\n\n/* Main */\n\n\n.dialogContainer,\n.editItemForm {\n  position: absolute;\n  margin-right: auto;\n  margin-left: auto;\n  top: 190px;\n  height: 50%;\n  width: 50%;\n\n  border-radius: 1em;\n\n}\n\n.dialogContainer::backdrop {\n  background-color: hsl(250, 100%, 50%, 0.25)\n}\n\n.formContainer {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  height: 100%;\n\n  padding: 1em;\n\n  border-radius: 1em;\n}\n\n.formContainer .form-list {\n  margin-bottom: 20px;\n}\n\n.formContainer>* {\n  flex: 1;\n}\n\n.formContainer label {\n  display: inline-block;\n  width: 100%;\n  font-size: 24px;\n  font-weight: 900;\n}\n\n.formContainer input {\n  margin-top: 1em;\n  padding: 1em;\n  width: 100%;\n  font-size: 18px;\n\n  border-radius: 1em;\n  border: 5px solid rgb(11, 43, 54);\n\n}\n\n.formContainer .buttonsContainer {\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n}\n\n.formContainer .buttonsContainer>* {\n  flex: 1;\n}\n\n.formContainer .cancelButton,\n.formContainer .submitButton {\n  padding: 1em;\n}\n\n.formContainer .cancelButton {\n  background-color: red;\n  border: none;\n  text-transform: uppercase;\n  font-weight: 900;\n  border-radius: 1em;\n}\n\n.formContainer .submitButton {\n  background-color: green;\n  border: none;\n  text-transform: uppercase;\n  font-weight: 900;\n  border-radius: 1em;\n}\n\n/* Main page*/\n\n.projectContainer {\n  height: 100%;\n  color: var(--Ghost-White);\n  display: none;\n  flex-direction: column;\n\n  flex: 1;\n}\n\n.ONLINE {\n  display: flex;\n}\n\n.OFFLINE {\n  display: none;\n}\n\n.currentPage {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 0.5em;\n\n  height: 100%;\n}\n\n.topRow {\n  display: flex;\n  flex-direction: column;\n  flex: 0 1 10%;\n  border-bottom: 2px solid var(--Scarlet);\n\n}\n\n.mainTitle {\n  font-size: 3rem;\n}\n\n.descriptionText {\n  font-size: 1.9rem;\n}\n\n.topRowSecond {\n  display: flex;\n  justify-content: space-between;\n}\n\n.leftSideSectionItem {\n  padding: 20px;\n}\n\n\n.middleRow {\n  flex: 2;\n  display: grid;\n  grid-template-rows: repeat(2, 1fr);\n  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));\n  gap: 4px;\n\n  height: 100%;\n  overflow: scroll;\n  scroll-behavior: smooth;\n}\n\n.noteArea {\n  padding: 20px;\n  height: 100%;\n}\n\n\n\n.bottomRow {\n\n  margin-left: auto;\n  bottom: 20px;\n  right: 20px;\n}\n\n.addTaskButton {\n  position: absolute;\n  border: none;\n  border-radius: 50%;\n  height: 50px;\n  width: 50px;\n  font-size: 24px;\n\n  bottom: 20px;\n  right: 20px;\n}\n\n\n/* Item form*/\n\n.itemForm {\n  position: absolute;\n  margin-right: auto;\n  margin-left: auto;\n  top: 190px;\n  height: 50%;\n  width: 50%;\n\n  border-radius: 1em;\n}\n\n.itemForm::backdrop {\n  background-color: hsla(105, 53%, 48%, 0.25)\n}\n\n.formContainerItem {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n\n  padding: 1em;\n\n  border-radius: 1em;\n}\n\n.formContainerItem>* {\n  flex: 1;\n}\n\n.formListItem {\n  margin-bottom: 20px;\n}\n\n.formListItem label {\n  display: inline-block;\n  width: 100%;\n  font-size: 24px;\n  font-weight: 900;\n}\n\n/* .formContainerItem input {\n  display: inline-block;\n  width: 100%;\n  font-size: 24px;\n  font-weight: 900;\n} */\n\n.formListItem input {\n  display: inline-block;\n  width: 100%;\n  font-size: 24px;\n  font-weight: 900;\n}\n\n.formListItem textarea {\n  display: inline-block;\n  width: 100%;\n  font-size: 24px;\n  font-weight: 900;\n}\n\n.secondMiddleSection {\n  display: flex;\n  justify-content: space-around;\n}\n\n.secondMiddleSection>* {\n  flex: 1;\n}\n\n.bottomSectionItem {\n  display: flex;\n  justify-content: space-around;\n}\n\n.bottomSectionItem>button {\n  padding: 20px;\n}\n\n/* Card Item*/\n\n.cardItemContainer {\n  background-color: var(--Peach);\n  color: var(--Royal-Blue);\n  border-radius: 20px;\n  margin: 20px;\n  height: 150px;\n  border: none;\n\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n}\n\n.priorityTitleSpan {\n  position: absolute;\n  bottom: 150px;\n  background-color: var(--Ghost-White);\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  padding-left: 25px;\n  padding-right: 25px;\n  text-transform: uppercase;\n  font-weight: 900;\n  font-size: 16px;\n}\n\n.leftSideSectionItem {\n  display: flex;\n  flex-direction: column;\n  flex: 0 1 30%;\n  padding: 20px;\n\n  align-items: center;\n\n  background-color: var(--Royal-Blue);\n  color: var(--Ghost-White);\n\n\n}\n\n.topSectionLeftItem {\n  flex: 2;\n}\n\n.taskSection {\n  display: flex;\n  flex-direction: column;\n}\n\n.middleSectionLeftItem {\n  flex: 1;\n}\n\n.bottomSectionLeftItem {\n  flex: 1;\n}\n\n.rightSideSectionItem {\n  flex: 2;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --Licorice: #0D0106;\n  --Zaffre: #3626A7;\n  --Glaucous: #657ED4;\n  --Scarlet: #FF331F;\n  --Ghost-White: #FBFBFF;\n  --Royal-Blue: #00539C;\n  --Peach: #EEA47F;\n}\n\nbody,\nhtml {\n  height: 100%;\n  box-sizing: border-box;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n  padding: 0;\n  margin: 0;\n  /* outline: 2px solid green; */\n}\n\nbody {\n  font-size: 16px;\n  background-color: lightblue;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n#content {\n  height: 100%;\n\n\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  grid-template-rows: auto 2fr minmax(200px, 1fr);\n}\n\n#headerContainer {\n  grid-column-start: 1;\n  grid-column-end: -1;\n\n  grid-row-start: 1;\n  grid-row-end: 2;\n  background-color: var(--Licorice);\n  border: 2px solid var(--Ghost-White);\n  color: var(--Ghost-White);\n}\n\n#sideContainer {\n  grid-row-start: 2;\n  grid-row-end: 5;\n  background-color: var(--Licorice);\n  border: 2px solid var(--Ghost-White);\n  display: flex;\n  flex: 2;\n  flex-direction: column;\n}\n\n#displayCurrentPageContainer {\n  grid-row-start: 2;\n  grid-row-end: 4;\n  background-color: var(--Licorice);\n  border: 2px solid var(--Ghost-White);\n}\n\n/* Header */\n\n\n/* Side */\n\n.side {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  color: var(--Ghost-White);\n}\n\n.projectsTitle {\n  margin-bottom: 5px;\n}\n\n.topSection {\n  display: flex;\n  flex-direction: column;\n\n  flex: 1;\n}\n\n.todayFolder {\n  flex: 0 1 10%;\n  border: 2px solid var(--Ghost-White);\n\n}\n\n.upcomingFolder {\n  flex: 0 1 10%;\n  border: 2px solid var(--Ghost-White);\n\n}\n\n.folderContainer {\n  flex: 1;\n  border: 2px solid var(--Ghost-White);\n\n}\n\n.bottomSection {\n  display: inline-flex;\n  flex: 0 1 10%;\n}\n\n.addProjectContainer {\n  display: inline-flex;\n  flex: 1;\n}\n\n.addProject {\n  flex: 1;\n}\n\n.projects {\n  padding: 20px;\n}\n\n.liElement {\n  cursor: pointer;\n  padding: 10px;\n  font-size: 24px;\n  margin-bottom: 20px;\n  background-color: gray;\n  color: var(--Ghost-White);\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n\n.leftSideElementTab {\n  flex: 2;\n}\n\n.rightSideElementTab {\n  display: flex;\n  justify-content: space-between;\n  flex: 1;\n}\n\n\n.liElement:hover {\n  background-color: var(--Scarlet);\n}\n\n/* Main */\n\n\n.dialogContainer,\n.editItemForm {\n  position: absolute;\n  margin-right: auto;\n  margin-left: auto;\n  top: 190px;\n  height: 50%;\n  width: 50%;\n\n  border-radius: 1em;\n\n}\n\n.dialogContainer::backdrop {\n  background-color: hsl(250, 100%, 50%, 0.25)\n}\n\n.formContainer {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  height: 100%;\n\n  padding: 1em;\n\n  border-radius: 1em;\n}\n\n.formContainer .form-list {\n  margin-bottom: 20px;\n}\n\n.formContainer>* {\n  flex: 1;\n}\n\n.formContainer label {\n  display: inline-block;\n  width: 100%;\n  font-size: 24px;\n  font-weight: 900;\n}\n\n.formContainer input {\n  margin-top: 1em;\n  padding: 1em;\n  width: 100%;\n  font-size: 18px;\n\n  border-radius: 1em;\n  border: 5px solid rgb(11, 43, 54);\n\n}\n\n.formContainer .buttonsContainer {\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n}\n\n.formContainer .buttonsContainer>* {\n  flex: 1;\n}\n\n.formContainer .cancelButton,\n.formContainer .submitButton {\n  padding: 1em;\n}\n\n.formContainer .cancelButton {\n  background-color: red;\n  border: none;\n  text-transform: uppercase;\n  font-weight: 900;\n  border-radius: 1em;\n}\n\n.formContainer .submitButton {\n  background-color: green;\n  border: none;\n  text-transform: uppercase;\n  font-weight: 900;\n  border-radius: 1em;\n}\n\n/* Main page*/\n\n.projectContainer {\n  height: 100%;\n  color: var(--Ghost-White);\n  display: none;\n  flex-direction: column;\n\n  flex: 1;\n}\n\n.ONLINE {\n  display: flex;\n}\n\n.OFFLINE {\n  display: none;\n}\n\n.currentPage {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 0.5em;\n\n  height: 100%;\n}\n\n.topRow {\n  display: flex;\n  flex-direction: column;\n  flex: 0 1 10%;\n  border-bottom: 2px solid var(--Scarlet);\n\n}\n\n.mainTitle {\n  font-size: 3rem;\n}\n\n.descriptionText {\n  font-size: 1.9rem;\n}\n\n.topRowSecond {\n  display: flex;\n  justify-content: space-between;\n}\n\n.leftSideSectionItem {\n  padding: 20px;\n}\n\n\n.middleRow {\n  flex: 2;\n  display: grid;\n  grid-template-rows: repeat(2, 1fr);\n  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));\n  gap: 4px;\n\n  height: 100%;\n  overflow: scroll;\n  scroll-behavior: smooth;\n}\n\n.noteArea {\n  padding: 20px;\n  height: 100%;\n}\n\n\n\n.bottomRow {\n\n  margin-left: auto;\n  bottom: 20px;\n  right: 20px;\n}\n\n.addTaskButton {\n  position: absolute;\n  border: none;\n  border-radius: 50%;\n  height: 50px;\n  width: 50px;\n  font-size: 24px;\n\n  bottom: 20px;\n  right: 20px;\n}\n\n\n/* Item form*/\n\n.itemForm {\n  position: absolute;\n  margin-right: auto;\n  margin-left: auto;\n  top: 190px;\n  height: 50%;\n  width: 50%;\n\n  border-radius: 1em;\n}\n\n.itemForm::backdrop {\n  background-color: hsla(105, 53%, 48%, 0.25)\n}\n\n.formContainerItem {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n\n  padding: 1em;\n\n  border-radius: 1em;\n}\n\n.formContainerItem>* {\n  flex: 1;\n}\n\n.formListItem {\n  margin-bottom: 20px;\n}\n\n.formListItem label {\n  display: inline-block;\n  width: 100%;\n  font-size: 24px;\n  font-weight: 900;\n}\n\n/* .formContainerItem input {\n  display: inline-block;\n  width: 100%;\n  font-size: 24px;\n  font-weight: 900;\n} */\n\n.formListItem input {\n  display: inline-block;\n  width: 100%;\n  font-size: 24px;\n  font-weight: 900;\n}\n\n.formListItem textarea {\n  display: inline-block;\n  width: 100%;\n  font-size: 24px;\n  font-weight: 900;\n}\n\n.secondMiddleSection {\n  display: flex;\n  justify-content: space-around;\n}\n\n.secondMiddleSection>* {\n  flex: 1;\n}\n\n.bottomSectionItem {\n  display: flex;\n  justify-content: space-around;\n}\n\n.bottomSectionItem>button {\n  padding: 20px;\n}\n\n/* Card Item*/\n\n.cardItemContainer {\n  background-color: var(--Peach);\n  color: var(--Royal-Blue);\n  border-radius: 20px;\n  margin: 20px;\n  height: 150px;\n  border: none;\n\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n}\n\n.priorityTitleSpan {\n  position: absolute;\n  bottom: 150px;\n  background-color: var(--Ghost-White);\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  padding-left: 25px;\n  padding-right: 25px;\n  text-transform: uppercase;\n  font-weight: 900;\n  font-size: 16px;\n}\n\n.leftSideSectionItem {\n  display: flex;\n  flex-direction: column;\n  flex: 0 1 30%;\n  padding: 20px;\n\n  align-items: center;\n\n  background-color: var(--Royal-Blue);\n  color: var(--Ghost-White);\n\n\n}\n\n.topSectionLeftItem {\n  flex: 2;\n}\n\n.taskSection {\n  display: flex;\n  flex-direction: column;\n}\n\n.middleSectionLeftItem {\n  flex: 1;\n}\n\n.bottomSectionLeftItem {\n  flex: 1;\n}\n\n.rightSideSectionItem {\n  flex: 2;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _helpful_functions_localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpful_functions/localStorage */ "./src/helpful_functions/localStorage.js");





function addProject(e) {
  e.preventDefault();

  const titleInput = document.getElementById("title");
  const descriptionInput = document.getElementById("description");

  const item = (0,_Model_collection__WEBPACK_IMPORTED_MODULE_0__.createProject)(titleInput.value, descriptionInput.value);

  (0,_View_createTabProject__WEBPACK_IMPORTED_MODULE_1__["default"])(item.title, item.id);
  const createMain = (0,_View_createMainTab__WEBPACK_IMPORTED_MODULE_2__["default"])(item.title, item.description, item.id);
  const createMainID = createMain.getAttribute("data-projectid");

  (0,_helpful_functions_localStorage__WEBPACK_IMPORTED_MODULE_3__.saveProjectSTodoLS)("projects", _Model_collection__WEBPACK_IMPORTED_MODULE_0__.projects);

  (0,_Model_collection__WEBPACK_IMPORTED_MODULE_0__.getProjects)();

  titleInput.value = "";
  descriptionInput.value = "";

  const grabAllProjectContainers =
    document.querySelectorAll(".projectContainer");

  for (let i = 0; i < grabAllProjectContainers.length; i += 1) {
    const currentProjectID =
      grabAllProjectContainers[i].getAttribute("data-projectid");

    if (currentProjectID === createMainID) {
      grabAllProjectContainers[i].classList.add("ONLINE");
    } else {
      grabAllProjectContainers[i].classList.add("OFFLINE");
    }
  }

  // First, give our new created projectTab a class of ONLINE
  // Next, we use a for loop to go through each project. IF class === true, console.log
  // Else, set all other projects class to OFFLINE

  // liElementContainer.addEventListener("click", (e) => {
  //   const test = document.querySelector(".currentPage").children;

  //   const currentID = e.currentTarget.id;

  //   for (let i = 0; i < test.length; i += 1) {
  //     if (currentID === test[i].getAttribute("data-projectid")) {
  //       test[i].classList.add("ONLINE");
  //       test[i].classList.remove("OFFLINE");
  //     } else {
  //       test[i].classList.add("OFFLINE");
  //       test[i].classList.remove("ONLINE");
  //     }
  //   }

  //   // Now, I need to make this specific ID from the mainPage be active or class active
  // });
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
/* harmony import */ var _helpful_functions_localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpful_functions/localStorage */ "./src/helpful_functions/localStorage.js");





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

    (0,_helpful_functions_localStorage__WEBPACK_IMPORTED_MODULE_3__.saveProjectSTodoLS)("projects", _Model_collection__WEBPACK_IMPORTED_MODULE_0__.projects);

    dialogContainer.close();
    dialogContainer.remove();
  });
}


/***/ }),

/***/ "./src/components/Controller/checkStatus.js":
/*!**************************************************!*\
  !*** ./src/components/Controller/checkStatus.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeItemStatus": () => (/* binding */ changeItemStatus),
/* harmony export */   "filterItemDependingOnStatus": () => (/* binding */ filterItemDependingOnStatus)
/* harmony export */ });
/* harmony import */ var _Model_collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Model/collection */ "./src/components/Model/collection.js");
/* harmony import */ var _helpful_functions_localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpful_functions/localStorage */ "./src/helpful_functions/localStorage.js");



function filterItemDependingOnStatus(id) {
  const grabAllCards = document.querySelectorAll(".cardItemContainer");

  _Model_collection__WEBPACK_IMPORTED_MODULE_0__.projects.forEach((project) => {
    const completeTasksArray = project.completeTasks;
    const taskArray = project.tasks;
    for (let i = 0; i < taskArray.length; i += 1) {
      const taskID = taskArray[i].id;

      if (id === taskID) {
        const itemStatus = taskArray[i].status;
        if (itemStatus === "complete") {
          completeTasksArray.push(taskArray[i]);
          project.removeTodoItem(id);

          for (let j = 0; j < grabAllCards.length; j += 1) {
            const cardID = grabAllCards[j].getAttribute("data-cardid");
            if (id === cardID) {
              grabAllCards[i].remove();

              (0,_helpful_functions_localStorage__WEBPACK_IMPORTED_MODULE_1__.saveProjectSTodoLS)("projects", _Model_collection__WEBPACK_IMPORTED_MODULE_0__.projects);
            }
          }
          // Now remove card
        }
      }
    }
  });

  // Then, we want to check if a condition is met if status is 'complete'. IF SO, we will move that specific item to an array called 'completed todos` for that specific project
}

function changeItemStatus(e) {
  const checkingStatus = e.target.checked;
  const checkboxID = e.target.getAttribute("data-statusid");

  if (checkingStatus === true) {
    _Model_collection__WEBPACK_IMPORTED_MODULE_0__.projects.forEach((project) => {
      const tasksArray = project.tasks;
      for (let i = 0; i < tasksArray.length; i += 1) {
        const taskID = tasksArray[i].id;
        if (taskID === checkboxID) {
          tasksArray[i].status = "complete";
        }
      }
    });
  }

  filterItemDependingOnStatus(checkboxID);
}



/* 

The main idea of this part of the project is to make `setting complete todos`

We need to figure out how we'll do that, so 

main purpose: switch the status from 'incomplete' to 'complete'
+ When pressing on the checkbox input, we will switch that specific item status to 'complete'


*/


/***/ }),

/***/ "./src/components/Controller/deleteProject.js":
/*!****************************************************!*\
  !*** ./src/components/Controller/deleteProject.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ delProject)
/* harmony export */ });
/* harmony import */ var _Model_collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Model/collection */ "./src/components/Model/collection.js");
/* harmony import */ var _helpful_functions_localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpful_functions/localStorage */ "./src/helpful_functions/localStorage.js");



function delProject(e) {
  // For deleting, we just need to remove the object
  // Remove the DOM elements related to that object

  const delID = e.target.getAttribute("data-deleteid");

  const projectTabs = document.querySelectorAll(".liElement");
  const projectContainers = document.querySelectorAll(".projectContainer");

  for (let i = 0; i < projectTabs.length; i += 1) {
    const projectID = projectTabs[i].id;
    for (let j = 0; j < projectContainers.length; j += 1) {
      const projectContainerID =
        projectContainers[j].getAttribute("data-projectid");

      if (delID === projectID && delID === projectContainerID) {
        (0,_Model_collection__WEBPACK_IMPORTED_MODULE_0__.deleteProject)(delID);
        (0,_helpful_functions_localStorage__WEBPACK_IMPORTED_MODULE_1__.saveProjectSTodoLS)("projects", _Model_collection__WEBPACK_IMPORTED_MODULE_0__.projects);

        projectTabs[i].remove();
        projectContainers[j].remove();
      }
    }
  }
}


/***/ }),

/***/ "./src/components/Controller/editProject.js":
/*!**************************************************!*\
  !*** ./src/components/Controller/editProject.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ editForm)
/* harmony export */ });
/* harmony import */ var _openEditProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./openEditProject */ "./src/components/Controller/openEditProject.js");
/* harmony import */ var _Model_collection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Model/collection */ "./src/components/Model/collection.js");
/* harmony import */ var _helpful_functions_localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpful_functions/localStorage */ "./src/helpful_functions/localStorage.js");




function editForm(e) {
  e.preventDefault();

  (0,_openEditProject__WEBPACK_IMPORTED_MODULE_0__["default"])();

  const editDialogContainer = document.querySelector(".editProject");

  const getNewTitle = document.getElementById("editTitle");

  const getNewDescription = document.getElementById("editDescription");

  const getCurrentID = e.target.getAttribute("data-editid");

  const cancelButton = document.querySelector("#editCancelButton");

  const submitButton = document.querySelector("#editSubmitButton");

  // We need to grab the tab, and main title and description

  const liElements = document.querySelectorAll(".liElement");

  const projectContainers = document.querySelectorAll(".projectContainer");

  cancelButton.addEventListener("click", () => {
    editDialogContainer.close();
    editDialogContainer.remove();
  });

  submitButton.addEventListener("click", () => {
    (0,_Model_collection__WEBPACK_IMPORTED_MODULE_1__.updateTitleAndDescription)(
      getNewTitle.value,
      getNewDescription.value,
      getCurrentID
    );

    const itemFound = (0,_Model_collection__WEBPACK_IMPORTED_MODULE_1__.findByID)(getCurrentID);

    for (let i = 0; i < liElements.length; i += 1) {
      const getCurrentLiElementID = liElements[i].id;

      for (let j = 0; j < projectContainers.length; j += 1) {
        const getCurrentProjectID =
          projectContainers[j].getAttribute("data-projectid");

        if (
          getCurrentID === getCurrentProjectID &&
          getCurrentID === getCurrentLiElementID
        ) {
          const titleTab = liElements[i].querySelector(".titleTab");
          titleTab.textContent = `${itemFound.title}`;

          const projectTitle = projectContainers[j].querySelector(".mainTitle");
          projectTitle.textContent = `${itemFound.title}`;

          const projectDescription =
            projectContainers[j].querySelector(".descriptionText");
          projectDescription.textContent = `${itemFound.description}`;
        }
      }
    }

    editDialogContainer.close();
    editDialogContainer.remove();
    (0,_helpful_functions_localStorage__WEBPACK_IMPORTED_MODULE_2__.saveProjectSTodoLS)("projects", _Model_collection__WEBPACK_IMPORTED_MODULE_1__.projects);
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
/* harmony import */ var _helpful_functions_localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpful_functions/localStorage */ "./src/helpful_functions/localStorage.js");




function editTask(e) {
  e.preventDefault();
  (0,_openEditForm__WEBPACK_IMPORTED_MODULE_1__["default"])();

  const buttonID = e.target.getAttribute("data-editid");

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

    for (let i = 0; i < grabAllCardVisuals.length; i += 1) {
      const cardID = grabAllCardVisuals[i].getAttribute("data-cardid");
      const changeTaskText = grabAllCardVisuals[i].querySelector(".labelTask");
      const changeNoteText = grabAllCardVisuals[i].querySelector(".noteArea");
      const changeDate = grabAllCardVisuals[i].querySelector(".inputDate");
      const changePriority =
        grabAllCardVisuals[i].querySelector(".priorityTitleSpan");
      if (cardID === buttonID) {
        _Model_collection__WEBPACK_IMPORTED_MODULE_0__.projects.forEach((project) => {
          const itemFound = project.byID(cardID);
          changeTaskText.textContent = `${itemFound.task}`;
          changeNoteText.textContent = `${itemFound.notes}`;
          changeDate.textContent = `${itemFound.date}`;
          changePriority.textContent = `${itemFound.priority}`;
        });
      }
    }

    editDialogContainer.close();
    editDialogContainer.remove();
    (0,_helpful_functions_localStorage__WEBPACK_IMPORTED_MODULE_2__.saveProjectSTodoLS)("projects", _Model_collection__WEBPACK_IMPORTED_MODULE_0__.projects);
  });

  // NEW PLAN
  /* 
  So we need to find the task object ID that matches with the card chosen
  Once we do, we save that value into a variable and use it's getters instead of the form values
 */
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

/***/ "./src/components/Controller/openEditProject.js":
/*!******************************************************!*\
  !*** ./src/components/Controller/openEditProject.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ openEditForm)
/* harmony export */ });
/* harmony import */ var _View_createEditProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../View/createEditProject */ "./src/components/View/createEditProject.js");


function openEditForm() {
  (0,_View_createEditProject__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const formOpen = document.querySelector(".editProject");
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
/* harmony import */ var _helpful_functions_localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpful_functions/localStorage */ "./src/helpful_functions/localStorage.js");



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
      (0,_helpful_functions_localStorage__WEBPACK_IMPORTED_MODULE_1__.saveProjectSTodoLS)("projects", _Model_collection__WEBPACK_IMPORTED_MODULE_0__.projects);
    }
  }
}


/***/ }),

/***/ "./src/components/Controller/togglingProjectView.js":
/*!**********************************************************!*\
  !*** ./src/components/Controller/togglingProjectView.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ togglingProjectView)
/* harmony export */ });
function togglingProjectView(e) {
  // We need to be able to click on a project to view it's contents, while the others are hidden

  const liElementID = e.currentTarget.id;

  // We click on "LiElement", when doing so. It will showcase the Maintab connected, (Id === id)
  // We have to grab all projectContainers., do an if statement if the liELement ID === projectContainersID, change it's class to ONLINE and the rest OFFLINE

  const grabAllProjectContainers =
    document.querySelectorAll(".projectContainer");

  for (let i = 0; i < grabAllProjectContainers.length; i += 1) {
    const projectContainerID =
      grabAllProjectContainers[i].getAttribute("data-projectid");
    if (projectContainerID === liElementID) {
      grabAllProjectContainers[i].classList.add("ONLINE");
      grabAllProjectContainers[i].classList.remove("OFFLINE");
    } else {
      grabAllProjectContainers[i].classList.add("OFFLINE");
      grabAllProjectContainers[i].classList.remove("ONLINE");
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
/* harmony export */   "findByID": () => (/* binding */ findByID),
/* harmony export */   "getProjects": () => (/* binding */ getProjects),
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "readInformation": () => (/* binding */ readInformation),
/* harmony export */   "retrieveFromLocalStorage": () => (/* binding */ retrieveFromLocalStorage),
/* harmony export */   "setProjects": () => (/* binding */ setProjects),
/* harmony export */   "updateTitleAndDescription": () => (/* binding */ updateTitleAndDescription)
/* harmony export */ });
/* harmony import */ var _helpful_functions_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpful_functions/localStorage */ "./src/helpful_functions/localStorage.js");
/* harmony import */ var _projectTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectTemplate */ "./src/components/Model/projectTemplate.js");
/* harmony import */ var _View_createMainTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../View/createMainTab */ "./src/components/View/createMainTab.js");
/* harmony import */ var _View_createTabProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../View/createTabProject */ "./src/components/View/createTabProject.js");
/* harmony import */ var _View_createCardVisual__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../View/createCardVisual */ "./src/components/View/createCardVisual.js");






// eslint-disable-next-line import/no-mutable-exports
let projects = [];

const createProject = (title, description) => {
  const newProject = new _projectTemplate__WEBPACK_IMPORTED_MODULE_1__["default"](title, description);
  projects.push(newProject);

  return newProject;
};

const deleteProject = (item) => {
  projects = projects.filter((object) => object.id !== item);
};

const findByID = (id) => projects.find((item) => item.id === id);

const updateTitleAndDescription = (title, description, id) => {
  const item = findByID(id);

  item.title = title;
  item.description = description;
};

const readInformation = () => {
  projects.forEach((project) => project);
};

// Still thinking about how I'll use setProjects
const setProjects = (value) => projects.push(value);

const getProjects = () => projects;

const retrieveFromLocalStorage = (keyName) => {
  const arrayWithObjects = (0,_helpful_functions_localStorage__WEBPACK_IMPORTED_MODULE_0__.lookForDataInLS)(keyName);

  for (let i = 0; i < arrayWithObjects.length; i += 1) {
    const item = new _projectTemplate__WEBPACK_IMPORTED_MODULE_1__["default"](
      arrayWithObjects[i].title,
      arrayWithObjects[i].description,
      arrayWithObjects[i].id
    );

    item.tasks = arrayWithObjects[i].task;

    setProjects(item);
  }

  const test = getProjects();

  for (let start = 0; start < test.length; start += 1) {
    (0,_View_createTabProject__WEBPACK_IMPORTED_MODULE_3__["default"])(test[start].title, test[start].id);
    (0,_View_createMainTab__WEBPACK_IMPORTED_MODULE_2__["default"])(test[start].title, test[start].description, test[start].id);
    for (let j = 0; j < test[start].tasks.length; j += 1) {
      const grabProjectContainer =
        document.querySelectorAll(".projectContainer");
      const projectID = test[start].id;

      for (
        let project = 0;
        project < grabProjectContainer.length;
        project += 1
      ) {
        const containerID =
          grabProjectContainer[project].getAttribute("data-projectid");
        if (containerID === projectID) {
          const middleRow =
            grabProjectContainer[project].querySelector(".middleRow");
          middleRow.appendChild(
            (0,_View_createCardVisual__WEBPACK_IMPORTED_MODULE_4__["default"])(
              test[start].task[j].task,
              test[start].task[j].notes,
              test[start].task[j].priority,
              test[start].task[j].date,
              test[start].task[j].id
            )
          );
        }
      }

      
    }
  }
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
    this.completeTasks = [];
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

  createTodoItem(
    task,
    date,
    priority,
    notes,
    status = "incomplete",
    id = (0,_helpful_functions_createRandomID__WEBPACK_IMPORTED_MODULE_0__["default"])()
  ) {
    const todoItem = new _taskTemplate__WEBPACK_IMPORTED_MODULE_1__["default"](task, date, priority, notes, status, id);
    this.tasks.push(todoItem);
    return todoItem;
  }

  removeTodoItem(item) {
    this.tasks = this.tasks.filter((task) => task.id !== item);
  }

  updateTodoItem(id, task, date, priority, notes, status) {
    this.tasks = this.task.map((item) =>
      item.id === id ? new _taskTemplate__WEBPACK_IMPORTED_MODULE_1__["default"](task, date, priority, notes, status, id) : item
    );
  }

  retrieveItemsInProject() {
    this.tasks.forEach((item) => item);
  }

  retrieveItemsInCompleteTasks() {
    this.completeTasks.forEach((item) => item);
  }

  byID(id) {
    return this.tasks.find((task) => task.id === id);
    // we can retrieve a specific task or item which can be used to `update cards`
  }

  toJSON() {
    return {
      title: this.current_title,
      description: this.current_description,
      task: this.tasks,
      completeTask: this.completeTasks,
      id: this.id,
    };
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
  constructor(task, date, priority, notes, status, id) {
    this.task = task;
    this.date = date;
    this.priority = priority;
    this.notes = notes;
    this.status = status;
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
    if (value.length < 5)
      throw new Error("Invalid, note description is too short.");

    this.current_notes = value;
  }

  toJSON() {
    return {
      task: this.task,
      date: this.date,
      priority: this.priority,
      notes: this.notes,
      status: this.status,
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
/* harmony import */ var _Controller_checkStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Controller/checkStatus */ "./src/components/Controller/checkStatus.js");





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

  const labelCheckBox = document.createElement("label");
  labelCheckBox.setAttribute("for", "status");
  labelCheckBox.textContent = "Status:";

  const inputTask = document.createElement("input");
  inputTask.setAttribute("type", "checkbox");
  inputTask.setAttribute("id", "status");
  inputTask.setAttribute("data-statusid", `${id}`);
  inputTask.addEventListener("click", _Controller_checkStatus__WEBPACK_IMPORTED_MODULE_2__.changeItemStatus);

  labelCheckBox.appendChild(inputTask);

  const labelTask = document.createElement("label");
  labelTask.setAttribute("for", "checkbox");
  labelTask.setAttribute("class", "labelTask");
  labelTask.textContent = `${task}`;

  taskSection.appendChild(labelCheckBox);
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

  const titleHeader = document.createElement("h2");
  titleHeader.textContent = "Editing Form";

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

  dialogContainer.appendChild(titleHeader);
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

/***/ "./src/components/View/createEditProject.js":
/*!**************************************************!*\
  !*** ./src/components/View/createEditProject.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createProjectForm)
/* harmony export */ });
function createProjectForm() {
  const content = document.querySelector("#content");

  const dialogContainer = document.createElement("dialog");

  dialogContainer.setAttribute("class", "editProject");

  const formHolder = document.createElement("form");
  formHolder.setAttribute("class", "formContainer");
  formHolder.setAttribute("id", "projectForm");

  const div1Container = document.createElement("div");
  div1Container.setAttribute("class", "form-list");

  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "title");
  titleLabel.textContent = "Title:";

  const titleInput = document.createElement("input");
  titleInput.setAttribute("id", "editTitle");
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
  descriptionInput.setAttribute("id", "editDescription");
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
  buttonCancel.setAttribute("id", "editCancelButton");
  buttonCancel.textContent = "Cancel";

  buttonSubmit.setAttribute("class", "submitButton");
  buttonSubmit.setAttribute("id", "editSubmitButton");
  buttonSubmit.setAttribute("type", "submit");
  buttonSubmit.textContent = "Submit";

  div3Container.appendChild(buttonCancel);
  div3Container.appendChild(buttonSubmit);

  dialogContainer.appendChild(formHolder);

  formHolder.appendChild(div1Container);
  formHolder.appendChild(div2Container);
  formHolder.appendChild(div3Container);

  content.appendChild(dialogContainer);

  return content;
}


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
/* harmony import */ var _Controller_editProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Controller/editProject */ "./src/components/Controller/editProject.js");
// eslint-disable-next-line import/no-cycle



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
  editButton.setAttribute("data-editid", id);
  editButton.textContent = "Edit";
  editButton.addEventListener("click", _Controller_editProject__WEBPACK_IMPORTED_MODULE_1__["default"]);

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
/* harmony import */ var _Controller_deleteProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Controller/deleteProject */ "./src/components/Controller/deleteProject.js");
/* harmony import */ var _Controller_togglingProjectView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Controller/togglingProjectView */ "./src/components/Controller/togglingProjectView.js");
// eslint-disable-next-line import/no-cycle



function createProjectTab(titleInput, itemID) {
  // Grab the projects list UL element
  const projectUL = document.querySelector(".projects");

  const liElementContainer = document.createElement("li");
  liElementContainer.setAttribute("class", "liElement");
  liElementContainer.setAttribute("id", `${itemID}`);
  liElementContainer.addEventListener("click", _Controller_togglingProjectView__WEBPACK_IMPORTED_MODULE_1__["default"]);

  const createTitle = document.createElement("h6");
  createTitle.classList.add("titleTab");
  createTitle.textContent = `${titleInput}`;

  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "deleteBtn");

  const imgIcon = document.createElement("img");
  imgIcon.setAttribute("alt", "garbage");
  imgIcon.setAttribute("class", "delICON");
  imgIcon.setAttribute("data-deleteid", itemID);

  imgIcon.addEventListener("click", _Controller_deleteProject__WEBPACK_IMPORTED_MODULE_0__["default"]);

  deleteButton.appendChild(imgIcon);

  liElementContainer.appendChild(createTitle);
  liElementContainer.appendChild(deleteButton);

  projectUL.appendChild(liElementContainer);

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

  localStorage.setItem(keyName, stringify);
}

function lookForDataInLS(keyName) {
  // We need to look for the data in the local storage
  if (localStorage.getItem(keyName) === null) {
    return [];
  }
  const getItem = localStorage.getItem(keyName);

  const data = JSON.parse(getItem);

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
/* harmony import */ var _components_Model_collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Model/collection */ "./src/components/Model/collection.js");




function pageLoad() {
  const content = document.querySelector("#content");

  const addProjectButton = document.querySelector(".addProject");
  const projectSubmit = document.querySelector(".submitButton");

  addProjectButton.addEventListener("click", _components_Controller_openProjectForm__WEBPACK_IMPORTED_MODULE_1__["default"]);

  projectSubmit.addEventListener("click", _components_Controller_addProject__WEBPACK_IMPORTED_MODULE_0__["default"]);

  // In here we're going to probably save the array `projects` into the local storage
  // Or we can retrieve it from here

  // Remember, we have to set up a complete or incomplete status for each `todo` item, inside project template

  (0,_components_Model_collection__WEBPACK_IMPORTED_MODULE_2__.retrieveFromLocalStorage)("projects");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxZQUFZLFdBQVcsS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxhQUFhLE9BQU8sS0FBSyxVQUFVLGFBQWEsT0FBTyxLQUFLLFVBQVUsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxjQUFjLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFdBQVcsYUFBYSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssVUFBVSxZQUFZLGNBQWMsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLFdBQVcsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxZQUFZLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxP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QyxrRUFBYztBQUN2RDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsS0FBSzs7QUFFakM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3hHZTtBQUNmOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUMvR2U7QUFDZjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3hFZTtB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LHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0EyQztBQUN0Qjs7QUFFckIsOERBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL3NyYy9jb21wb25lbnRzL0NvbnRyb2xsZXIvYWRkUHJvamVjdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL3NyYy9jb21wb25lbnRzL0NvbnRyb2xsZXIvYWRkVGFzay5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL3NyYy9jb21wb25lbnRzL0NvbnRyb2xsZXIvY2hlY2tTdGF0dXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9zcmMvY29tcG9uZW50cy9Db250cm9sbGVyL2RlbGV0ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9zcmMvY29tcG9uZW50cy9Db250cm9sbGVyL2VkaXRQcm9qZWN0LmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLy4vc3JjL2NvbXBvbmVudHMvQ29udHJvbGxlci9lZGl0VGFzay5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL3NyYy9jb21wb25lbnRzL0NvbnRyb2xsZXIvb3BlbkVkaXRGb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLy4vc3JjL2NvbXBvbmVudHMvQ29udHJvbGxlci9vcGVuRWRpdFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9zcmMvY29tcG9uZW50cy9Db250cm9sbGVyL29wZW5JdGVtRm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL3NyYy9jb21wb25lbnRzL0NvbnRyb2xsZXIvb3BlblByb2plY3RGb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLy4vc3JjL2NvbXBvbmVudHMvQ29udHJvbGxlci9yZW1vdmVUYXNrSXRlbS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL3NyYy9jb21wb25lbnRzL0NvbnRyb2xsZXIvdG9nZ2xpbmdQcm9qZWN0Vmlldy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL3NyYy9jb21wb25lbnRzL01vZGVsL2NvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9zcmMvY29tcG9uZW50cy9Nb2RlbC9wcm9qZWN0VGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9zcmMvY29tcG9uZW50cy9Nb2RlbC90YXNrVGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9zcmMvY29tcG9uZW50cy9WaWV3L2NyZWF0ZUNhcmRWaXN1YWwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9zcmMvY29tcG9uZW50cy9WaWV3L2NyZWF0ZUVkaXRGb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLy4vc3JjL2NvbXBvbmVudHMvVmlldy9jcmVhdGVFZGl0UHJvamVjdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL3NyYy9jb21wb25lbnRzL1ZpZXcvY3JlYXRlSXRlbUZvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9zcmMvY29tcG9uZW50cy9WaWV3L2NyZWF0ZU1haW5UYWIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9zcmMvY29tcG9uZW50cy9WaWV3L2NyZWF0ZVByb2plY3RGb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLy4vc3JjL2NvbXBvbmVudHMvVmlldy9jcmVhdGVUYWJQcm9qZWN0LmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLy4vc3JjL2hlbHBmdWxfZnVuY3Rpb25zL2NyZWF0ZVJhbmRvbUlELmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLy4vc3JjL2hlbHBmdWxfZnVuY3Rpb25zL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL3NyYy9wYWdlTG9hZC9wYWdlTG9hZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tTGljb3JpY2U6ICMwRDAxMDY7XFxuICAtLVphZmZyZTogIzM2MjZBNztcXG4gIC0tR2xhdWNvdXM6ICM2NTdFRDQ7XFxuICAtLVNjYXJsZXQ6ICNGRjMzMUY7XFxuICAtLUdob3N0LVdoaXRlOiAjRkJGQkZGO1xcbiAgLS1Sb3lhbC1CbHVlOiAjMDA1MzlDO1xcbiAgLS1QZWFjaDogI0VFQTQ3RjtcXG59XFxuXFxuYm9keSxcXG5odG1sIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiosXFxuKjpiZWZvcmUsXFxuKjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIC8qIG91dGxpbmU6IDJweCBzb2xpZCBncmVlbjsgKi9cXG59XFxuXFxuYm9keSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGhlaWdodDogMTAwJTtcXG5cXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMmZyIG1pbm1heCgyMDBweCwgMWZyKTtcXG59XFxuXFxuI2hlYWRlckNvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gIGdyaWQtY29sdW1uLWVuZDogLTE7XFxuXFxuICBncmlkLXJvdy1zdGFydDogMTtcXG4gIGdyaWQtcm93LWVuZDogMjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUxpY29yaWNlKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLUdob3N0LVdoaXRlKTtcXG4gIGNvbG9yOiB2YXIoLS1HaG9zdC1XaGl0ZSk7XFxufVxcblxcbiNzaWRlQ29udGFpbmVyIHtcXG4gIGdyaWQtcm93LXN0YXJ0OiAyO1xcbiAgZ3JpZC1yb3ctZW5kOiA1O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tTGljb3JpY2UpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tR2hvc3QtV2hpdGUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jZGlzcGxheUN1cnJlbnRQYWdlQ29udGFpbmVyIHtcXG4gIGdyaWQtcm93LXN0YXJ0OiAyO1xcbiAgZ3JpZC1yb3ctZW5kOiA0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tTGljb3JpY2UpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tR2hvc3QtV2hpdGUpO1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG5cXG5cXG4vKiBTaWRlICovXFxuXFxuLnNpZGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiAxO1xcbiAgY29sb3I6IHZhcigtLUdob3N0LVdoaXRlKTtcXG59XFxuXFxuLnByb2plY3RzVGl0bGUge1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4udG9wU2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIGZsZXg6IDE7XFxufVxcblxcbi50b2RheUZvbGRlciB7XFxuICBmbGV4OiAwIDEgMTAlO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tR2hvc3QtV2hpdGUpO1xcblxcbn1cXG5cXG4udXBjb21pbmdGb2xkZXIge1xcbiAgZmxleDogMCAxIDEwJTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLUdob3N0LVdoaXRlKTtcXG5cXG59XFxuXFxuLmZvbGRlckNvbnRhaW5lciB7XFxuICBmbGV4OiAxO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tR2hvc3QtV2hpdGUpO1xcblxcbn1cXG5cXG4uYm90dG9tU2VjdGlvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGZsZXg6IDAgMSAxMCU7XFxufVxcblxcbi5hZGRQcm9qZWN0Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgZmxleDogMTtcXG59XFxuXFxuLmFkZFByb2plY3Qge1xcbiAgZmxleDogMTtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5saUVsZW1lbnQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgY29sb3I6IHZhcigtLUdob3N0LVdoaXRlKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5sZWZ0U2lkZUVsZW1lbnRUYWIge1xcbiAgZmxleDogMjtcXG59XFxuXFxuLnJpZ2h0U2lkZUVsZW1lbnRUYWIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZsZXg6IDE7XFxufVxcblxcblxcbi5saUVsZW1lbnQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tU2NhcmxldCk7XFxufVxcblxcbi8qIE1haW4gKi9cXG5cXG5cXG4uZGlhbG9nQ29udGFpbmVyLFxcbi5lZGl0SXRlbUZvcm0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICB0b3A6IDE5MHB4O1xcbiAgaGVpZ2h0OiA1MCU7XFxuICB3aWR0aDogNTAlO1xcblxcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcblxcbn1cXG5cXG4uZGlhbG9nQ29udGFpbmVyOjpiYWNrZHJvcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjUwLCAxMDAlLCA1MCUsIDAuMjUpXFxufVxcblxcbi5mb3JtQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgcGFkZGluZzogMWVtO1xcblxcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbn1cXG5cXG4uZm9ybUNvbnRhaW5lciAuZm9ybS1saXN0IHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5mb3JtQ29udGFpbmVyPioge1xcbiAgZmxleDogMTtcXG59XFxuXFxuLmZvcm1Db250YWluZXIgbGFiZWwge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4uZm9ybUNvbnRhaW5lciBpbnB1dCB7XFxuICBtYXJnaW4tdG9wOiAxZW07XFxuICBwYWRkaW5nOiAxZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGJvcmRlcjogNXB4IHNvbGlkIHJnYigxMSwgNDMsIDU0KTtcXG5cXG59XFxuXFxuLmZvcm1Db250YWluZXIgLmJ1dHRvbnNDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLmZvcm1Db250YWluZXIgLmJ1dHRvbnNDb250YWluZXI+KiB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uZm9ybUNvbnRhaW5lciAuY2FuY2VsQnV0dG9uLFxcbi5mb3JtQ29udGFpbmVyIC5zdWJtaXRCdXR0b24ge1xcbiAgcGFkZGluZzogMWVtO1xcbn1cXG5cXG4uZm9ybUNvbnRhaW5lciAuY2FuY2VsQnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbn1cXG5cXG4uZm9ybUNvbnRhaW5lciAuc3VibWl0QnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxufVxcblxcbi8qIE1haW4gcGFnZSovXFxuXFxuLnByb2plY3RDb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgY29sb3I6IHZhcigtLUdob3N0LVdoaXRlKTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgZmxleDogMTtcXG59XFxuXFxuLk9OTElORSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uT0ZGTElORSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY3VycmVudFBhZ2Uge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAwLjVlbTtcXG5cXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnRvcFJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDAgMSAxMCU7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tU2NhcmxldCk7XFxuXFxufVxcblxcbi5tYWluVGl0bGUge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4uZGVzY3JpcHRpb25UZXh0IHtcXG4gIGZvbnQtc2l6ZTogMS45cmVtO1xcbn1cXG5cXG4udG9wUm93U2Vjb25kIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5sZWZ0U2lkZVNlY3Rpb25JdGVtIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcblxcbi5taWRkbGVSb3cge1xcbiAgZmxleDogMjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoNDUwcHgsIDFmcikpO1xcbiAgZ2FwOiA0cHg7XFxuXFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbi5ub3RlQXJlYSB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5cXG5cXG4uYm90dG9tUm93IHtcXG5cXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgYm90dG9tOiAyMHB4O1xcbiAgcmlnaHQ6IDIwcHg7XFxufVxcblxcbi5hZGRUYXNrQnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcblxcbiAgYm90dG9tOiAyMHB4O1xcbiAgcmlnaHQ6IDIwcHg7XFxufVxcblxcblxcbi8qIEl0ZW0gZm9ybSovXFxuXFxuLml0ZW1Gb3JtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgdG9wOiAxOTBweDtcXG4gIGhlaWdodDogNTAlO1xcbiAgd2lkdGg6IDUwJTtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG59XFxuXFxuLml0ZW1Gb3JtOjpiYWNrZHJvcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDEwNSwgNTMlLCA0OCUsIDAuMjUpXFxufVxcblxcbi5mb3JtQ29udGFpbmVySXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogMTAwJTtcXG5cXG4gIHBhZGRpbmc6IDFlbTtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG59XFxuXFxuLmZvcm1Db250YWluZXJJdGVtPioge1xcbiAgZmxleDogMTtcXG59XFxuXFxuLmZvcm1MaXN0SXRlbSB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uZm9ybUxpc3RJdGVtIGxhYmVsIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLyogLmZvcm1Db250YWluZXJJdGVtIGlucHV0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59ICovXFxuXFxuLmZvcm1MaXN0SXRlbSBpbnB1dCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5mb3JtTGlzdEl0ZW0gdGV4dGFyZWEge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4uc2Vjb25kTWlkZGxlU2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5zZWNvbmRNaWRkbGVTZWN0aW9uPioge1xcbiAgZmxleDogMTtcXG59XFxuXFxuLmJvdHRvbVNlY3Rpb25JdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmJvdHRvbVNlY3Rpb25JdGVtPmJ1dHRvbiB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4vKiBDYXJkIEl0ZW0qL1xcblxcbi5jYXJkSXRlbUNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QZWFjaCk7XFxuICBjb2xvcjogdmFyKC0tUm95YWwtQmx1ZSk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG5cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5wcmlvcml0eVRpdGxlU3BhbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDE1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tR2hvc3QtV2hpdGUpO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmctbGVmdDogMjVweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLmxlZnRTaWRlU2VjdGlvbkl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiAwIDEgMzAlO1xcbiAgcGFkZGluZzogMjBweDtcXG5cXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1Sb3lhbC1CbHVlKTtcXG4gIGNvbG9yOiB2YXIoLS1HaG9zdC1XaGl0ZSk7XFxuXFxuXFxufVxcblxcbi50b3BTZWN0aW9uTGVmdEl0ZW0ge1xcbiAgZmxleDogMjtcXG59XFxuXFxuLnRhc2tTZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubWlkZGxlU2VjdGlvbkxlZnRJdGVtIHtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5ib3R0b21TZWN0aW9uTGVmdEl0ZW0ge1xcbiAgZmxleDogMTtcXG59XFxuXFxuLnJpZ2h0U2lkZVNlY3Rpb25JdGVtIHtcXG4gIGZsZXg6IDI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixnQkFB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RSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQSxhQUFhOztBQUViO0VBQ0UsOEJBQThCO0VBQzlCLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZOztFQUVaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGFBQWE7O0VBRWIsbUJBQW1COztFQUVuQixtQ0FBbUM7RUFDbkMseUJBQXlCOzs7QUFHM0I7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsT0FBTztBQUNUXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tTGljb3JpY2U6ICMwRDAxMDY7XFxuICAtLVphZmZyZTogIzM2MjZBNztcXG4gIC0tR2xhdWNvdXM6ICM2NTdFRDQ7XFxuICAtLVNjYXJsZXQ6ICNGRjMzMUY7XFxuICAtLUdob3N0LVdoaXRlOiAjRkJGQkZGO1xcbiAgLS1Sb3lhbC1CbHVlOiAjMDA1MzlDO1xcbiAgLS1QZWFjaDogI0VFQTQ3RjtcXG59XFxuXFxuYm9keSxcXG5odG1sIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiosXFxuKjpiZWZvcmUsXFxuKjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIC8qIG91dGxpbmU6IDJweCBzb2xpZCBncmVlbjsgKi9cXG59XFxuXFxuYm9keSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGhlaWdodDogMTAwJTtcXG5cXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMmZyIG1pbm1heCgyMDBweCwgMWZyKTtcXG59XFxuXFxuI2hlYWRlckNvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gIGdyaWQtY29sdW1uLWVuZDogLTE7XFxuXFxuICBncmlkLXJvdy1zdGFydDogMTtcXG4gIGdyaWQtcm93LWVuZDogMjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUxpY29yaWNlKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLUdob3N0LVdoaXRlKTtcXG4gIGNvbG9yOiB2YXIoLS1HaG9zdC1XaGl0ZSk7XFxufVxcblxcbiNzaWRlQ29udGFpbmVyIHtcXG4gIGdyaWQtcm93LXN0YXJ0OiAyO1xcbiAgZ3JpZC1yb3ctZW5kOiA1O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tTGljb3JpY2UpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tR2hvc3QtV2hpdGUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jZGlzcGxheUN1cnJlbnRQYWdlQ29udGFpbmVyIHtcXG4gIGdyaWQtcm93LXN0YXJ0OiAyO1xcbiAgZ3JpZC1yb3ctZW5kOiA0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tTGljb3JpY2UpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tR2hvc3QtV2hpdGUpO1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG5cXG5cXG4vKiBTaWRlICovXFxuXFxuLnNpZGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiAxO1xcbiAgY29sb3I6IHZhcigtLUdob3N0LVdoaXRlKTtcXG59XFxuXFxuLnByb2plY3RzVGl0bGUge1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4udG9wU2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIGZsZXg6IDE7XFxufVxcblxcbi50b2RheUZvbGRlciB7XFxuICBmbGV4OiAwIDEgMTAlO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tR2hvc3QtV2hpdGUpO1xcblxcbn1cXG5cXG4udXBjb21pbmdGb2xkZXIge1xcbiAgZmxleDogMCAxIDEwJTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLUdob3N0LVdoaXRlKTtcXG5cXG59XFxuXFxuLmZvbGRlckNvbnRhaW5lciB7XFxuICBmbGV4OiAxO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tR2hvc3QtV2hpdGUpO1xcblxcbn1cXG5cXG4uYm90dG9tU2VjdGlvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGZsZXg6IDAgMSAxMCU7XFxufVxcblxcbi5hZGRQcm9qZWN0Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgZmxleDogMTtcXG59XFxuXFxuLmFkZFByb2plY3Qge1xcbiAgZmxleDogMTtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5saUVsZW1lbnQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgY29sb3I6IHZhcigtLUdob3N0LVdoaXRlKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5sZWZ0U2lkZUVsZW1lbnRUYWIge1xcbiAgZmxleDogMjtcXG59XFxuXFxuLnJpZ2h0U2lkZUVsZW1lbnRUYWIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZsZXg6IDE7XFxufVxcblxcblxcbi5saUVsZW1lbnQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tU2NhcmxldCk7XFxufVxcblxcbi8qIE1haW4gKi9cXG5cXG5cXG4uZGlhbG9nQ29udGFpbmVyLFxcbi5lZGl0SXRlbUZvcm0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICB0b3A6IDE5MHB4O1xcbiAgaGVpZ2h0OiA1MCU7XFxuICB3aWR0aDogNTAlO1xcblxcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcblxcbn1cXG5cXG4uZGlhbG9nQ29udGFpbmVyOjpiYWNrZHJvcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjUwLCAxMDAlLCA1MCUsIDAuMjUpXFxufVxcblxcbi5mb3JtQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgcGFkZGluZzogMWVtO1xcblxcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbn1cXG5cXG4uZm9ybUNvbnRhaW5lciAuZm9ybS1saXN0IHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5mb3JtQ29udGFpbmVyPioge1xcbiAgZmxleDogMTtcXG59XFxuXFxuLmZvcm1Db250YWluZXIgbGFiZWwge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4uZm9ybUNvbnRhaW5lciBpbnB1dCB7XFxuICBtYXJnaW4tdG9wOiAxZW07XFxuICBwYWRkaW5nOiAxZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGJvcmRlcjogNXB4IHNvbGlkIHJnYigxMSwgNDMsIDU0KTtcXG5cXG59XFxuXFxuLmZvcm1Db250YWluZXIgLmJ1dHRvbnNDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLmZvcm1Db250YWluZXIgLmJ1dHRvbnNDb250YWluZXI+KiB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uZm9ybUNvbnRhaW5lciAuY2FuY2VsQnV0dG9uLFxcbi5mb3JtQ29udGFpbmVyIC5zdWJtaXRCdXR0b24ge1xcbiAgcGFkZGluZzogMWVtO1xcbn1cXG5cXG4uZm9ybUNvbnRhaW5lciAuY2FuY2VsQnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbn1cXG5cXG4uZm9ybUNvbnRhaW5lciAuc3VibWl0QnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxufVxcblxcbi8qIE1haW4gcGFnZSovXFxuXFxuLnByb2plY3RDb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgY29sb3I6IHZhcigtLUdob3N0LVdoaXRlKTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgZmxleDogMTtcXG59XFxuXFxuLk9OTElORSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uT0ZGTElORSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY3VycmVudFBhZ2Uge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAwLjVlbTtcXG5cXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnRvcFJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDAgMSAxMCU7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tU2NhcmxldCk7XFxuXFxufVxcblxcbi5tYWluVGl0bGUge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4uZGVzY3JpcHRpb25UZXh0IHtcXG4gIGZvbnQtc2l6ZTogMS45cmVtO1xcbn1cXG5cXG4udG9wUm93U2Vjb25kIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5sZWZ0U2lkZVNlY3Rpb25JdGVtIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcblxcbi5taWRkbGVSb3cge1xcbiAgZmxleDogMjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoNDUwcHgsIDFmcikpO1xcbiAgZ2FwOiA0cHg7XFxuXFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbi5ub3RlQXJlYSB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5cXG5cXG4uYm90dG9tUm93IHtcXG5cXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgYm90dG9tOiAyMHB4O1xcbiAgcmlnaHQ6IDIwcHg7XFxufVxcblxcbi5hZGRUYXNrQnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcblxcbiAgYm90dG9tOiAyMHB4O1xcbiAgcmlnaHQ6IDIwcHg7XFxufVxcblxcblxcbi8qIEl0ZW0gZm9ybSovXFxuXFxuLml0ZW1Gb3JtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgdG9wOiAxOTBweDtcXG4gIGhlaWdodDogNTAlO1xcbiAgd2lkdGg6IDUwJTtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG59XFxuXFxuLml0ZW1Gb3JtOjpiYWNrZHJvcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDEwNSwgNTMlLCA0OCUsIDAuMjUpXFxufVxcblxcbi5mb3JtQ29udGFpbmVySXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogMTAwJTtcXG5cXG4gIHBhZGRpbmc6IDFlbTtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG59XFxuXFxuLmZvcm1Db250YWluZXJJdGVtPioge1xcbiAgZmxleDogMTtcXG59XFxuXFxuLmZvcm1MaXN0SXRlbSB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uZm9ybUxpc3RJdGVtIGxhYmVsIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLyogLmZvcm1Db250YWluZXJJdGVtIGlucHV0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59ICovXFxuXFxuLmZvcm1MaXN0SXRlbSBpbnB1dCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5mb3JtTGlzdEl0ZW0gdGV4dGFyZWEge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4uc2Vjb25kTWlkZGxlU2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5zZWNvbmRNaWRkbGVTZWN0aW9uPioge1xcbiAgZmxleDogMTtcXG59XFxuXFxuLmJvdHRvbVNlY3Rpb25JdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmJvdHRvbVNlY3Rpb25JdGVtPmJ1dHRvbiB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4vKiBDYXJkIEl0ZW0qL1xcblxcbi5jYXJkSXRlbUNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QZWFjaCk7XFxuICBjb2xvcjogdmFyKC0tUm95YWwtQmx1ZSk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG5cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5wcmlvcml0eVRpdGxlU3BhbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDE1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tR2hvc3QtV2hpdGUpO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmctbGVmdDogMjVweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLmxlZnRTaWRlU2VjdGlvbkl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiAwIDEgMzAlO1xcbiAgcGFkZGluZzogMjBweDtcXG5cXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1Sb3lhbC1CbHVlKTtcXG4gIGNvbG9yOiB2YXIoLS1HaG9zdC1XaGl0ZSk7XFxuXFxuXFxufVxcblxcbi50b3BTZWN0aW9uTGVmdEl0ZW0ge1xcbiAgZmxleDogMjtcXG59XFxuXFxuLnRhc2tTZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubWlkZGxlU2VjdGlvbkxlZnRJdGVtIHtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5ib3R0b21TZWN0aW9uTGVmdEl0ZW0ge1xcbiAgZmxleDogMTtcXG59XFxuXFxuLnJpZ2h0U2lkZVNlY3Rpb25JdGVtIHtcXG4gIGZsZXg6IDI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBwcm9qZWN0cywgY3JlYXRlUHJvamVjdCwgZ2V0UHJvamVjdHMgfSBmcm9tIFwiLi4vTW9kZWwvY29sbGVjdGlvblwiO1xuaW1wb3J0IGNyZWF0ZVByb2plY3RUYWIgZnJvbSBcIi4uL1ZpZXcvY3JlYXRlVGFiUHJvamVjdFwiO1xuaW1wb3J0IGNyZWF0ZU1haW5UYWIgZnJvbSBcIi4uL1ZpZXcvY3JlYXRlTWFpblRhYlwiO1xuaW1wb3J0IHsgc2F2ZVByb2plY3RTVG9kb0xTIH0gZnJvbSBcIi4uLy4uL2hlbHBmdWxfZnVuY3Rpb25zL2xvY2FsU3RvcmFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRQcm9qZWN0KGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpO1xuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKTtcblxuICBjb25zdCBpdGVtID0gY3JlYXRlUHJvamVjdCh0aXRsZUlucHV0LnZhbHVlLCBkZXNjcmlwdGlvbklucHV0LnZhbHVlKTtcblxuICBjcmVhdGVQcm9qZWN0VGFiKGl0ZW0udGl0bGUsIGl0ZW0uaWQpO1xuICBjb25zdCBjcmVhdGVNYWluID0gY3JlYXRlTWFpblRhYihpdGVtLnRpdGxlLCBpdGVtLmRlc2NyaXB0aW9uLCBpdGVtLmlkKTtcbiAgY29uc3QgY3JlYXRlTWFpbklEID0gY3JlYXRlTWFpbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RpZFwiKTtcblxuICBzYXZlUHJvamVjdFNUb2RvTFMoXCJwcm9qZWN0c1wiLCBwcm9qZWN0cyk7XG5cbiAgZ2V0UHJvamVjdHMoKTtcblxuICB0aXRsZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IFwiXCI7XG5cbiAgY29uc3QgZ3JhYkFsbFByb2plY3RDb250YWluZXJzID1cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RDb250YWluZXJcIik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBncmFiQWxsUHJvamVjdENvbnRhaW5lcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdElEID1cbiAgICAgIGdyYWJBbGxQcm9qZWN0Q29udGFpbmVyc1tpXS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RpZFwiKTtcblxuICAgIGlmIChjdXJyZW50UHJvamVjdElEID09PSBjcmVhdGVNYWluSUQpIHtcbiAgICAgIGdyYWJBbGxQcm9qZWN0Q29udGFpbmVyc1tpXS5jbGFzc0xpc3QuYWRkKFwiT05MSU5FXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBncmFiQWxsUHJvamVjdENvbnRhaW5lcnNbaV0uY2xhc3NMaXN0LmFkZChcIk9GRkxJTkVcIik7XG4gICAgfVxuICB9XG5cbiAgLy8gRmlyc3QsIGdpdmUgb3VyIG5ldyBjcmVhdGVkIHByb2plY3RUYWIgYSBjbGFzcyBvZiBPTkxJTkVcbiAgLy8gTmV4dCwgd2UgdXNlIGEgZm9yIGxvb3AgdG8gZ28gdGhyb3VnaCBlYWNoIHByb2plY3QuIElGIGNsYXNzID09PSB0cnVlLCBjb25zb2xlLmxvZ1xuICAvLyBFbHNlLCBzZXQgYWxsIG90aGVyIHByb2plY3RzIGNsYXNzIHRvIE9GRkxJTkVcblxuICAvLyBsaUVsZW1lbnRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIC8vICAgY29uc3QgdGVzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudFBhZ2VcIikuY2hpbGRyZW47XG5cbiAgLy8gICBjb25zdCBjdXJyZW50SUQgPSBlLmN1cnJlbnRUYXJnZXQuaWQ7XG5cbiAgLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IHRlc3QubGVuZ3RoOyBpICs9IDEpIHtcbiAgLy8gICAgIGlmIChjdXJyZW50SUQgPT09IHRlc3RbaV0uZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0aWRcIikpIHtcbiAgLy8gICAgICAgdGVzdFtpXS5jbGFzc0xpc3QuYWRkKFwiT05MSU5FXCIpO1xuICAvLyAgICAgICB0ZXN0W2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJPRkZMSU5FXCIpO1xuICAvLyAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgdGVzdFtpXS5jbGFzc0xpc3QuYWRkKFwiT0ZGTElORVwiKTtcbiAgLy8gICAgICAgdGVzdFtpXS5jbGFzc0xpc3QucmVtb3ZlKFwiT05MSU5FXCIpO1xuICAvLyAgICAgfVxuICAvLyAgIH1cblxuICAvLyAgIC8vIE5vdywgSSBuZWVkIHRvIG1ha2UgdGhpcyBzcGVjaWZpYyBJRCBmcm9tIHRoZSBtYWluUGFnZSBiZSBhY3RpdmUgb3IgY2xhc3MgYWN0aXZlXG4gIC8vIH0pO1xufVxuIiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi4vTW9kZWwvY29sbGVjdGlvblwiO1xuaW1wb3J0IGNyZWF0ZUl0ZW1DYXJkIGZyb20gXCIuLi9WaWV3L2NyZWF0ZUNhcmRWaXN1YWxcIjtcbmltcG9ydCBvcGVuSXRlbUZvcm0gZnJvbSBcIi4vb3Blbkl0ZW1Gb3JtXCI7XG5pbXBvcnQgeyBzYXZlUHJvamVjdFNUb2RvTFMgfSBmcm9tIFwiLi4vLi4vaGVscGZ1bF9mdW5jdGlvbnMvbG9jYWxTdG9yYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZEl0ZW0oZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgb3Blbkl0ZW1Gb3JtKCk7XG5cbiAgLy8gV2Ugd2FudCB0byBnbyB0aHJvdWdoIGN1cnJlbnRQYWdlIGNoaWxkcmVuIGFuZCBmaW5kIHdoaWNoIElEIG1hdGNoZXMgd2l0aCBvdXIgZS50YXJnZXQuaWQsIGlmIHNvIHdlIGFwcGVuZCBjcmVhdGVWaXN1YWxJdGVtQ2FyZFxuXG4gIGNvbnN0IHRhc2tJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza1wiKTtcbiAgY29uc3Qgbm90ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub3RlXCIpO1xuICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIik7XG4gIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdFwiKTtcblxuICBjb25zdCBkaWFsb2dDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLml0ZW1Gb3JtXCIpO1xuXG4gIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaXRlbUNhbmNlbFwiKTtcblxuICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkaWFsb2dDb250YWluZXIuY2xvc2UoKTtcbiAgICBkaWFsb2dDb250YWluZXIucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaXRlbVN1Ym1pdFwiKTtcbiAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgbWFpblBhZ2VzMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdENvbnRhaW5lclwiKTtcblxuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGlmIChwcm9qZWN0LmlkID09PSBlLnRhcmdldC5pZCkge1xuICAgICAgICBjb25zdCBpdGVtTWFkZSA9IHByb2plY3QuY3JlYXRlVG9kb0l0ZW0oXG4gICAgICAgICAgdGFza0lucHV0LnZhbHVlLFxuICAgICAgICAgIGRhdGVJbnB1dC52YWx1ZSxcbiAgICAgICAgICBwcmlvcml0eUlucHV0LnZhbHVlLFxuICAgICAgICAgIG5vdGVJbnB1dC52YWx1ZVxuICAgICAgICApO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWFpblBhZ2VzMi5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGNvbnN0IHBhZ2VJRCA9IG1haW5QYWdlczJbaV0uZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0aWRcIik7XG5cbiAgICAgICAgICBpZiAocGFnZUlEID09PSBlLnRhcmdldC5pZCkge1xuICAgICAgICAgICAgbWFpblBhZ2VzMltpXVxuICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5taWRkbGVSb3dcIilcbiAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgICAgIGNyZWF0ZUl0ZW1DYXJkKFxuICAgICAgICAgICAgICAgICAgaXRlbU1hZGUudGFzayxcbiAgICAgICAgICAgICAgICAgIGl0ZW1NYWRlLm5vdGVzLFxuICAgICAgICAgICAgICAgICAgaXRlbU1hZGUucHJpb3JpdHksXG4gICAgICAgICAgICAgICAgICBpdGVtTWFkZS5kYXRlLFxuICAgICAgICAgICAgICAgICAgaXRlbU1hZGUuaWRcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBzYXZlUHJvamVjdFNUb2RvTFMoXCJwcm9qZWN0c1wiLCBwcm9qZWN0cyk7XG5cbiAgICBkaWFsb2dDb250YWluZXIuY2xvc2UoKTtcbiAgICBkaWFsb2dDb250YWluZXIucmVtb3ZlKCk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi4vTW9kZWwvY29sbGVjdGlvblwiO1xuaW1wb3J0IHsgc2F2ZVByb2plY3RTVG9kb0xTIH0gZnJvbSBcIi4uLy4uL2hlbHBmdWxfZnVuY3Rpb25zL2xvY2FsU3RvcmFnZVwiO1xuXG5mdW5jdGlvbiBmaWx0ZXJJdGVtRGVwZW5kaW5nT25TdGF0dXMoaWQpIHtcbiAgY29uc3QgZ3JhYkFsbENhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXJkSXRlbUNvbnRhaW5lclwiKTtcblxuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgY29tcGxldGVUYXNrc0FycmF5ID0gcHJvamVjdC5jb21wbGV0ZVRhc2tzO1xuICAgIGNvbnN0IHRhc2tBcnJheSA9IHByb2plY3QudGFza3M7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrQXJyYXkubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHRhc2tJRCA9IHRhc2tBcnJheVtpXS5pZDtcblxuICAgICAgaWYgKGlkID09PSB0YXNrSUQpIHtcbiAgICAgICAgY29uc3QgaXRlbVN0YXR1cyA9IHRhc2tBcnJheVtpXS5zdGF0dXM7XG4gICAgICAgIGlmIChpdGVtU3RhdHVzID09PSBcImNvbXBsZXRlXCIpIHtcbiAgICAgICAgICBjb21wbGV0ZVRhc2tzQXJyYXkucHVzaCh0YXNrQXJyYXlbaV0pO1xuICAgICAgICAgIHByb2plY3QucmVtb3ZlVG9kb0l0ZW0oaWQpO1xuXG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBncmFiQWxsQ2FyZHMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhcmRJRCA9IGdyYWJBbGxDYXJkc1tqXS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNhcmRpZFwiKTtcbiAgICAgICAgICAgIGlmIChpZCA9PT0gY2FyZElEKSB7XG4gICAgICAgICAgICAgIGdyYWJBbGxDYXJkc1tpXS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgICBzYXZlUHJvamVjdFNUb2RvTFMoXCJwcm9qZWN0c1wiLCBwcm9qZWN0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIE5vdyByZW1vdmUgY2FyZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAvLyBUaGVuLCB3ZSB3YW50IHRvIGNoZWNrIGlmIGEgY29uZGl0aW9uIGlzIG1ldCBpZiBzdGF0dXMgaXMgJ2NvbXBsZXRlJy4gSUYgU08sIHdlIHdpbGwgbW92ZSB0aGF0IHNwZWNpZmljIGl0ZW0gdG8gYW4gYXJyYXkgY2FsbGVkICdjb21wbGV0ZWQgdG9kb3NgIGZvciB0aGF0IHNwZWNpZmljIHByb2plY3Rcbn1cblxuZnVuY3Rpb24gY2hhbmdlSXRlbVN0YXR1cyhlKSB7XG4gIGNvbnN0IGNoZWNraW5nU3RhdHVzID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgY29uc3QgY2hlY2tib3hJRCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtc3RhdHVzaWRcIik7XG5cbiAgaWYgKGNoZWNraW5nU3RhdHVzID09PSB0cnVlKSB7XG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgY29uc3QgdGFza3NBcnJheSA9IHByb2plY3QudGFza3M7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzQXJyYXkubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgdGFza0lEID0gdGFza3NBcnJheVtpXS5pZDtcbiAgICAgICAgaWYgKHRhc2tJRCA9PT0gY2hlY2tib3hJRCkge1xuICAgICAgICAgIHRhc2tzQXJyYXlbaV0uc3RhdHVzID0gXCJjb21wbGV0ZVwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmaWx0ZXJJdGVtRGVwZW5kaW5nT25TdGF0dXMoY2hlY2tib3hJRCk7XG59XG5cbmV4cG9ydCB7IGNoYW5nZUl0ZW1TdGF0dXMsIGZpbHRlckl0ZW1EZXBlbmRpbmdPblN0YXR1cyB9O1xuXG4vKiBcblxuVGhlIG1haW4gaWRlYSBvZiB0aGlzIHBhcnQgb2YgdGhlIHByb2plY3QgaXMgdG8gbWFrZSBgc2V0dGluZyBjb21wbGV0ZSB0b2Rvc2BcblxuV2UgbmVlZCB0byBmaWd1cmUgb3V0IGhvdyB3ZSdsbCBkbyB0aGF0LCBzbyBcblxubWFpbiBwdXJwb3NlOiBzd2l0Y2ggdGhlIHN0YXR1cyBmcm9tICdpbmNvbXBsZXRlJyB0byAnY29tcGxldGUnXG4rIFdoZW4gcHJlc3Npbmcgb24gdGhlIGNoZWNrYm94IGlucHV0LCB3ZSB3aWxsIHN3aXRjaCB0aGF0IHNwZWNpZmljIGl0ZW0gc3RhdHVzIHRvICdjb21wbGV0ZSdcblxuXG4qL1xuIiwiaW1wb3J0IHsgZGVsZXRlUHJvamVjdCwgcHJvamVjdHMgfSBmcm9tIFwiLi4vTW9kZWwvY29sbGVjdGlvblwiO1xuaW1wb3J0IHsgc2F2ZVByb2plY3RTVG9kb0xTIH0gZnJvbSBcIi4uLy4uL2hlbHBmdWxfZnVuY3Rpb25zL2xvY2FsU3RvcmFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWxQcm9qZWN0KGUpIHtcbiAgLy8gRm9yIGRlbGV0aW5nLCB3ZSBqdXN0IG5lZWQgdG8gcmVtb3ZlIHRoZSBvYmplY3RcbiAgLy8gUmVtb3ZlIHRoZSBET00gZWxlbWVudHMgcmVsYXRlZCB0byB0aGF0IG9iamVjdFxuXG4gIGNvbnN0IGRlbElEID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1kZWxldGVpZFwiKTtcblxuICBjb25zdCBwcm9qZWN0VGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlFbGVtZW50XCIpO1xuICBjb25zdCBwcm9qZWN0Q29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdENvbnRhaW5lclwiKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RUYWJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgcHJvamVjdElEID0gcHJvamVjdFRhYnNbaV0uaWQ7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBwcm9qZWN0Q29udGFpbmVycy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgY29uc3QgcHJvamVjdENvbnRhaW5lcklEID1cbiAgICAgICAgcHJvamVjdENvbnRhaW5lcnNbal0uZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0aWRcIik7XG5cbiAgICAgIGlmIChkZWxJRCA9PT0gcHJvamVjdElEICYmIGRlbElEID09PSBwcm9qZWN0Q29udGFpbmVySUQpIHtcbiAgICAgICAgZGVsZXRlUHJvamVjdChkZWxJRCk7XG4gICAgICAgIHNhdmVQcm9qZWN0U1RvZG9MUyhcInByb2plY3RzXCIsIHByb2plY3RzKTtcblxuICAgICAgICBwcm9qZWN0VGFic1tpXS5yZW1vdmUoKTtcbiAgICAgICAgcHJvamVjdENvbnRhaW5lcnNbal0ucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgb3BlbkVkaXRGb3JtIGZyb20gXCIuL29wZW5FZGl0UHJvamVjdFwiO1xuaW1wb3J0IHtcbiAgdXBkYXRlVGl0bGVBbmREZXNjcmlwdGlvbixcbiAgZmluZEJ5SUQsXG4gIHByb2plY3RzLFxufSBmcm9tIFwiLi4vTW9kZWwvY29sbGVjdGlvblwiO1xuaW1wb3J0IHsgc2F2ZVByb2plY3RTVG9kb0xTIH0gZnJvbSBcIi4uLy4uL2hlbHBmdWxfZnVuY3Rpb25zL2xvY2FsU3RvcmFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlZGl0Rm9ybShlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcblxuICBvcGVuRWRpdEZvcm0oKTtcblxuICBjb25zdCBlZGl0RGlhbG9nQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0UHJvamVjdFwiKTtcblxuICBjb25zdCBnZXROZXdUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdFRpdGxlXCIpO1xuXG4gIGNvbnN0IGdldE5ld0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0RGVzY3JpcHRpb25cIik7XG5cbiAgY29uc3QgZ2V0Q3VycmVudElEID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1lZGl0aWRcIik7XG5cbiAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0Q2FuY2VsQnV0dG9uXCIpO1xuXG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdFN1Ym1pdEJ1dHRvblwiKTtcblxuICAvLyBXZSBuZWVkIHRvIGdyYWIgdGhlIHRhYiwgYW5kIG1haW4gdGl0bGUgYW5kIGRlc2NyaXB0aW9uXG5cbiAgY29uc3QgbGlFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlFbGVtZW50XCIpO1xuXG4gIGNvbnN0IHByb2plY3RDb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0Q29udGFpbmVyXCIpO1xuXG4gIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGVkaXREaWFsb2dDb250YWluZXIuY2xvc2UoKTtcbiAgICBlZGl0RGlhbG9nQ29udGFpbmVyLnJlbW92ZSgpO1xuICB9KTtcblxuICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB1cGRhdGVUaXRsZUFuZERlc2NyaXB0aW9uKFxuICAgICAgZ2V0TmV3VGl0bGUudmFsdWUsXG4gICAgICBnZXROZXdEZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgIGdldEN1cnJlbnRJRFxuICAgICk7XG5cbiAgICBjb25zdCBpdGVtRm91bmQgPSBmaW5kQnlJRChnZXRDdXJyZW50SUQpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaUVsZW1lbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBnZXRDdXJyZW50TGlFbGVtZW50SUQgPSBsaUVsZW1lbnRzW2ldLmlkO1xuXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHByb2plY3RDb250YWluZXJzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIGNvbnN0IGdldEN1cnJlbnRQcm9qZWN0SUQgPVxuICAgICAgICAgIHByb2plY3RDb250YWluZXJzW2pdLmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdGlkXCIpO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBnZXRDdXJyZW50SUQgPT09IGdldEN1cnJlbnRQcm9qZWN0SUQgJiZcbiAgICAgICAgICBnZXRDdXJyZW50SUQgPT09IGdldEN1cnJlbnRMaUVsZW1lbnRJRFxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCB0aXRsZVRhYiA9IGxpRWxlbWVudHNbaV0ucXVlcnlTZWxlY3RvcihcIi50aXRsZVRhYlwiKTtcbiAgICAgICAgICB0aXRsZVRhYi50ZXh0Q29udGVudCA9IGAke2l0ZW1Gb3VuZC50aXRsZX1gO1xuXG4gICAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gcHJvamVjdENvbnRhaW5lcnNbal0ucXVlcnlTZWxlY3RvcihcIi5tYWluVGl0bGVcIik7XG4gICAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gYCR7aXRlbUZvdW5kLnRpdGxlfWA7XG5cbiAgICAgICAgICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb24gPVxuICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lcnNbal0ucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvblRleHRcIik7XG4gICAgICAgICAgcHJvamVjdERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYCR7aXRlbUZvdW5kLmRlc2NyaXB0aW9ufWA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBlZGl0RGlhbG9nQ29udGFpbmVyLmNsb3NlKCk7XG4gICAgZWRpdERpYWxvZ0NvbnRhaW5lci5yZW1vdmUoKTtcbiAgICBzYXZlUHJvamVjdFNUb2RvTFMoXCJwcm9qZWN0c1wiLCBwcm9qZWN0cyk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi4vTW9kZWwvY29sbGVjdGlvblwiO1xuaW1wb3J0IG9wZW5FZGl0Rm9ybSBmcm9tIFwiLi9vcGVuRWRpdEZvcm1cIjtcbmltcG9ydCB7IHNhdmVQcm9qZWN0U1RvZG9MUyB9IGZyb20gXCIuLi8uLi9oZWxwZnVsX2Z1bmN0aW9ucy9sb2NhbFN0b3JhZ2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZWRpdFRhc2soZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIG9wZW5FZGl0Rm9ybSgpO1xuXG4gIGNvbnN0IGJ1dHRvbklEID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1lZGl0aWRcIik7XG5cbiAgY29uc3QgZ2V0VGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdFRhc2tcIik7XG4gIGNvbnN0IGdldE5vdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXROb3RlXCIpO1xuICBjb25zdCBnZXREYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0RGF0ZVwiKTtcbiAgY29uc3QgZ2V0UHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRTZWxlY3RcIik7XG5cbiAgY29uc3QgZWRpdERpYWxvZ0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdEl0ZW1Gb3JtXCIpO1xuXG4gIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdEl0ZW1DYW5jZWxcIik7XG5cbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0SXRlbVN1Ym1pdFwiKTtcblxuICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBlZGl0RGlhbG9nQ29udGFpbmVyLmNsb3NlKCk7XG4gICAgZWRpdERpYWxvZ0NvbnRhaW5lci5yZW1vdmUoKTtcbiAgfSk7XG5cbiAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgcHJvamVjdC51cGRhdGVUb2RvSXRlbShcbiAgICAgICAgYnV0dG9uSUQsXG4gICAgICAgIGdldFRhc2sudmFsdWUsXG4gICAgICAgIGdldERhdGUudmFsdWUsXG4gICAgICAgIGdldFByaW9yaXR5LnZhbHVlLFxuICAgICAgICBnZXROb3RlLnZhbHVlXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgLy8gTm93IHdlIHVwZGF0ZSB0aGUgY2FyZFxuICAgIGNvbnN0IGdyYWJBbGxDYXJkVmlzdWFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FyZEl0ZW1Db250YWluZXJcIik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdyYWJBbGxDYXJkVmlzdWFscy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgY2FyZElEID0gZ3JhYkFsbENhcmRWaXN1YWxzW2ldLmdldEF0dHJpYnV0ZShcImRhdGEtY2FyZGlkXCIpO1xuICAgICAgY29uc3QgY2hhbmdlVGFza1RleHQgPSBncmFiQWxsQ2FyZFZpc3VhbHNbaV0ucXVlcnlTZWxlY3RvcihcIi5sYWJlbFRhc2tcIik7XG4gICAgICBjb25zdCBjaGFuZ2VOb3RlVGV4dCA9IGdyYWJBbGxDYXJkVmlzdWFsc1tpXS5xdWVyeVNlbGVjdG9yKFwiLm5vdGVBcmVhXCIpO1xuICAgICAgY29uc3QgY2hhbmdlRGF0ZSA9IGdyYWJBbGxDYXJkVmlzdWFsc1tpXS5xdWVyeVNlbGVjdG9yKFwiLmlucHV0RGF0ZVwiKTtcbiAgICAgIGNvbnN0IGNoYW5nZVByaW9yaXR5ID1cbiAgICAgICAgZ3JhYkFsbENhcmRWaXN1YWxzW2ldLnF1ZXJ5U2VsZWN0b3IoXCIucHJpb3JpdHlUaXRsZVNwYW5cIik7XG4gICAgICBpZiAoY2FyZElEID09PSBidXR0b25JRCkge1xuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgY29uc3QgaXRlbUZvdW5kID0gcHJvamVjdC5ieUlEKGNhcmRJRCk7XG4gICAgICAgICAgY2hhbmdlVGFza1RleHQudGV4dENvbnRlbnQgPSBgJHtpdGVtRm91bmQudGFza31gO1xuICAgICAgICAgIGNoYW5nZU5vdGVUZXh0LnRleHRDb250ZW50ID0gYCR7aXRlbUZvdW5kLm5vdGVzfWA7XG4gICAgICAgICAgY2hhbmdlRGF0ZS50ZXh0Q29udGVudCA9IGAke2l0ZW1Gb3VuZC5kYXRlfWA7XG4gICAgICAgICAgY2hhbmdlUHJpb3JpdHkudGV4dENvbnRlbnQgPSBgJHtpdGVtRm91bmQucHJpb3JpdHl9YDtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZWRpdERpYWxvZ0NvbnRhaW5lci5jbG9zZSgpO1xuICAgIGVkaXREaWFsb2dDb250YWluZXIucmVtb3ZlKCk7XG4gICAgc2F2ZVByb2plY3RTVG9kb0xTKFwicHJvamVjdHNcIiwgcHJvamVjdHMpO1xuICB9KTtcblxuICAvLyBORVcgUExBTlxuICAvKiBcbiAgU28gd2UgbmVlZCB0byBmaW5kIHRoZSB0YXNrIG9iamVjdCBJRCB0aGF0IG1hdGNoZXMgd2l0aCB0aGUgY2FyZCBjaG9zZW5cbiAgT25jZSB3ZSBkbywgd2Ugc2F2ZSB0aGF0IHZhbHVlIGludG8gYSB2YXJpYWJsZSBhbmQgdXNlIGl0J3MgZ2V0dGVycyBpbnN0ZWFkIG9mIHRoZSBmb3JtIHZhbHVlc1xuICovXG59XG4iLCJpbXBvcnQgY3JlYXRlRWRpdEZvcm0gZnJvbSBcIi4uL1ZpZXcvY3JlYXRlRWRpdEZvcm1cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3BlbkVkaXRGb3JtKCkge1xuICBjcmVhdGVFZGl0Rm9ybSgpO1xuICBjb25zdCBmb3JtT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdEl0ZW1Gb3JtXCIpO1xuICBmb3JtT3Blbi5zaG93TW9kYWwoKTtcbn1cbiIsImltcG9ydCBjcmVhdGVQcm9qZWN0Rm9ybSBmcm9tIFwiLi4vVmlldy9jcmVhdGVFZGl0UHJvamVjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvcGVuRWRpdEZvcm0oKSB7XG4gIGNyZWF0ZVByb2plY3RGb3JtKCk7XG4gIGNvbnN0IGZvcm1PcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0UHJvamVjdFwiKTtcbiAgZm9ybU9wZW4uc2hvd01vZGFsKCk7XG59XG4iLCJpbXBvcnQgY3JlYXRlSXRlbUZvcm0gZnJvbSBcIi4uL1ZpZXcvY3JlYXRlSXRlbUZvcm1cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3Blbkl0ZW1Gb3JtKCkge1xuICBjcmVhdGVJdGVtRm9ybSgpO1xuICBjb25zdCBmb3JtT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaXRlbUZvcm1cIik7XG4gIGZvcm1PcGVuLnNob3dNb2RhbCgpO1xufVxuIiwiaW1wb3J0IGNyZWF0ZVByb2plY3RGb3JtIGZyb20gXCIuLi9WaWV3L2NyZWF0ZVByb2plY3RGb3JtXCI7XG5cbmNyZWF0ZVByb2plY3RGb3JtKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9wZW5Gb3JtKCkge1xuICBjb25zdCBmb3JtT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlhbG9nQ29udGFpbmVyXCIpO1xuICBmb3JtT3Blbi5zaG93TW9kYWwoKTtcbn1cbiIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4uL01vZGVsL2NvbGxlY3Rpb25cIjtcbmltcG9ydCB7IHNhdmVQcm9qZWN0U1RvZG9MUyB9IGZyb20gXCIuLi8uLi9oZWxwZnVsX2Z1bmN0aW9ucy9sb2NhbFN0b3JhZ2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVtb3ZlVGFzayhlKSB7XG4gIC8vIFRoZSBwdXJwb3NlIGlzIHRvIHJlbW92ZSBpdGVtIGZyb20gdGhlaXIgb2JqZWN0IGFuZCBmcm9tIHRoZSBkaXNwbGF5IGl0ZW1zXG4gIC8vIFdlIGhhdmUgYSBtZXRob2QgY2FsbGVkIHJlbW92ZVRvZG9JdGVtKGl0ZW0pXG4gIC8vICBXaGljaCB3aWxsIG5lZWQgdGhlIGl0ZW0uaWQgb2YgdGhlIGl0ZW0gd2Ugc2VsZWN0XG5cbiAgLy8gU28sIGhvdyB3aWxsbCB0aGlzIHBsYXkgb3V0XG4gIC8vIDEuIFRoZSB1c2VyIHdpbGwgcHJlc3Mgb24gdGhlIGBkZWxldGVgIGJ1dHRvblxuICAvLyAyLiBXaGVuIGRvaW5nIHNvLCB3ZSB3aWxsIGdyYWIgdGhhdCBpdGVtIElEIHdoZXJlIHdlIHByZXNzZWQgYGRlbGV0ZWBcbiAgLy8gMmEuIFdlIG5lZWQgdG8gcmVtb3ZlIHRoZSB2aXN1YWwgY2FyZCBmaXJzdFxuICAvLyAzLiBOZXh0IHdlIHdpbGwgZ2V0IHRoYXQgcHJvamVjdCBvYmplY3QsIGNhbGwgaXQncyBtZXRob2QgYGByZW1vdmVUb2RvSXRlbWBcbiAgLy8gIDNhLiBXZSB3aWxsIGhhdmUgdG8gY2hlY2sgd2hpY2ggcHJvamVjdCB3ZSBhcmUgZGVhbGluZyB3aXRoXG4gIC8vICAzYi4gT25jZSB3ZSBnZXQgdGhlIGNvcnJlY3QgcHJvamVjdCwgd2Ugd2lsbCBuZWVkIHRvIGl0ZXJhdGUgdGhyb3VnaCBpdCdzIHRhc2sgaXRlbXNcbiAgLy8gIDNjLiBXZSBuZWVkIHRvIGNoZWNrIGlmIHRhc2tJdGVtIElEIGlzIGVxdWFsIHRvIG91ciBpdGVtSUQsIGlmIHNvLiB3ZSBjYWxsIHRoZSBtZXRob2QgdG8gcmVtb3ZlXG4gIC8vIDQuIEluc2V0IGl0ZW1JRCBpbnRvIGFyZ3VtZW50IGFuZCBob3BlIGZvciB0aGUgYmVzdFxuICAvLyA1LiBOZXh0LCB3ZSB0cnkgdG8gcmVtb3ZlIHRoZSB2aXN1YWwgY2FyZCBhcyB3ZWxsXG5cbiAgY29uc3QgYnV0dG9uSUQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWRlbGV0ZWlkXCIpO1xuXG4gIGNvbnN0IGdyYWJBbGxDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FyZEl0ZW1Db250YWluZXJcIik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBncmFiQWxsQ2FyZHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBjYXJkSUQgPSBncmFiQWxsQ2FyZHNbaV0uZ2V0QXR0cmlidXRlKFwiZGF0YS1jYXJkaWRcIik7XG4gICAgaWYgKGJ1dHRvbklEID09PSBjYXJkSUQpIHtcbiAgICAgIGdyYWJBbGxDYXJkc1tpXS5yZW1vdmUoKTtcblxuICAgICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICBwcm9qZWN0LnJlbW92ZVRvZG9JdGVtKGJ1dHRvbklEKTtcbiAgICAgIH0pO1xuICAgICAgc2F2ZVByb2plY3RTVG9kb0xTKFwicHJvamVjdHNcIiwgcHJvamVjdHMpO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9nZ2xpbmdQcm9qZWN0VmlldyhlKSB7XG4gIC8vIFdlIG5lZWQgdG8gYmUgYWJsZSB0byBjbGljayBvbiBhIHByb2plY3QgdG8gdmlldyBpdCdzIGNvbnRlbnRzLCB3aGlsZSB0aGUgb3RoZXJzIGFyZSBoaWRkZW5cblxuICBjb25zdCBsaUVsZW1lbnRJRCA9IGUuY3VycmVudFRhcmdldC5pZDtcblxuICAvLyBXZSBjbGljayBvbiBcIkxpRWxlbWVudFwiLCB3aGVuIGRvaW5nIHNvLiBJdCB3aWxsIHNob3djYXNlIHRoZSBNYWludGFiIGNvbm5lY3RlZCwgKElkID09PSBpZClcbiAgLy8gV2UgaGF2ZSB0byBncmFiIGFsbCBwcm9qZWN0Q29udGFpbmVycy4sIGRvIGFuIGlmIHN0YXRlbWVudCBpZiB0aGUgbGlFTGVtZW50IElEID09PSBwcm9qZWN0Q29udGFpbmVyc0lELCBjaGFuZ2UgaXQncyBjbGFzcyB0byBPTkxJTkUgYW5kIHRoZSByZXN0IE9GRkxJTkVcblxuICBjb25zdCBncmFiQWxsUHJvamVjdENvbnRhaW5lcnMgPVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdENvbnRhaW5lclwiKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGdyYWJBbGxQcm9qZWN0Q29udGFpbmVycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXJJRCA9XG4gICAgICBncmFiQWxsUHJvamVjdENvbnRhaW5lcnNbaV0uZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0aWRcIik7XG4gICAgaWYgKHByb2plY3RDb250YWluZXJJRCA9PT0gbGlFbGVtZW50SUQpIHtcbiAgICAgIGdyYWJBbGxQcm9qZWN0Q29udGFpbmVyc1tpXS5jbGFzc0xpc3QuYWRkKFwiT05MSU5FXCIpO1xuICAgICAgZ3JhYkFsbFByb2plY3RDb250YWluZXJzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJPRkZMSU5FXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBncmFiQWxsUHJvamVjdENvbnRhaW5lcnNbaV0uY2xhc3NMaXN0LmFkZChcIk9GRkxJTkVcIik7XG4gICAgICBncmFiQWxsUHJvamVjdENvbnRhaW5lcnNbaV0uY2xhc3NMaXN0LnJlbW92ZShcIk9OTElORVwiKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IGxvb2tGb3JEYXRhSW5MUyB9IGZyb20gXCIuLi8uLi9oZWxwZnVsX2Z1bmN0aW9ucy9sb2NhbFN0b3JhZ2VcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RUZW1wbGF0ZVwiO1xuaW1wb3J0IGNyZWF0ZU1haW5UYWIgZnJvbSBcIi4uL1ZpZXcvY3JlYXRlTWFpblRhYlwiO1xuaW1wb3J0IGNyZWF0ZVByb2plY3RUYWIgZnJvbSBcIi4uL1ZpZXcvY3JlYXRlVGFiUHJvamVjdFwiO1xuaW1wb3J0IGNyZWF0ZUl0ZW1DYXJkIGZyb20gXCIuLi9WaWV3L2NyZWF0ZUNhcmRWaXN1YWxcIjtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1tdXRhYmxlLWV4cG9ydHNcbmxldCBwcm9qZWN0cyA9IFtdO1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gKHRpdGxlLCBkZXNjcmlwdGlvbikgPT4ge1xuICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGUsIGRlc2NyaXB0aW9uKTtcbiAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcblxuICByZXR1cm4gbmV3UHJvamVjdDtcbn07XG5cbmNvbnN0IGRlbGV0ZVByb2plY3QgPSAoaXRlbSkgPT4ge1xuICBwcm9qZWN0cyA9IHByb2plY3RzLmZpbHRlcigob2JqZWN0KSA9PiBvYmplY3QuaWQgIT09IGl0ZW0pO1xufTtcblxuY29uc3QgZmluZEJ5SUQgPSAoaWQpID0+IHByb2plY3RzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGlkKTtcblxuY29uc3QgdXBkYXRlVGl0bGVBbmREZXNjcmlwdGlvbiA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGlkKSA9PiB7XG4gIGNvbnN0IGl0ZW0gPSBmaW5kQnlJRChpZCk7XG5cbiAgaXRlbS50aXRsZSA9IHRpdGxlO1xuICBpdGVtLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG59O1xuXG5jb25zdCByZWFkSW5mb3JtYXRpb24gPSAoKSA9PiB7XG4gIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHByb2plY3QpO1xufTtcblxuLy8gU3RpbGwgdGhpbmtpbmcgYWJvdXQgaG93IEknbGwgdXNlIHNldFByb2plY3RzXG5jb25zdCBzZXRQcm9qZWN0cyA9ICh2YWx1ZSkgPT4gcHJvamVjdHMucHVzaCh2YWx1ZSk7XG5cbmNvbnN0IGdldFByb2plY3RzID0gKCkgPT4gcHJvamVjdHM7XG5cbmNvbnN0IHJldHJpZXZlRnJvbUxvY2FsU3RvcmFnZSA9IChrZXlOYW1lKSA9PiB7XG4gIGNvbnN0IGFycmF5V2l0aE9iamVjdHMgPSBsb29rRm9yRGF0YUluTFMoa2V5TmFtZSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheVdpdGhPYmplY3RzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgaXRlbSA9IG5ldyBQcm9qZWN0KFxuICAgICAgYXJyYXlXaXRoT2JqZWN0c1tpXS50aXRsZSxcbiAgICAgIGFycmF5V2l0aE9iamVjdHNbaV0uZGVzY3JpcHRpb24sXG4gICAgICBhcnJheVdpdGhPYmplY3RzW2ldLmlkXG4gICAgKTtcblxuICAgIGl0ZW0udGFza3MgPSBhcnJheVdpdGhPYmplY3RzW2ldLnRhc2s7XG5cbiAgICBzZXRQcm9qZWN0cyhpdGVtKTtcbiAgfVxuXG4gIGNvbnN0IHRlc3QgPSBnZXRQcm9qZWN0cygpO1xuXG4gIGZvciAobGV0IHN0YXJ0ID0gMDsgc3RhcnQgPCB0ZXN0Lmxlbmd0aDsgc3RhcnQgKz0gMSkge1xuICAgIGNyZWF0ZVByb2plY3RUYWIodGVzdFtzdGFydF0udGl0bGUsIHRlc3Rbc3RhcnRdLmlkKTtcbiAgICBjcmVhdGVNYWluVGFiKHRlc3Rbc3RhcnRdLnRpdGxlLCB0ZXN0W3N0YXJ0XS5kZXNjcmlwdGlvbiwgdGVzdFtzdGFydF0uaWQpO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGVzdFtzdGFydF0udGFza3MubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgIGNvbnN0IGdyYWJQcm9qZWN0Q29udGFpbmVyID1cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0Q29udGFpbmVyXCIpO1xuICAgICAgY29uc3QgcHJvamVjdElEID0gdGVzdFtzdGFydF0uaWQ7XG5cbiAgICAgIGZvciAoXG4gICAgICAgIGxldCBwcm9qZWN0ID0gMDtcbiAgICAgICAgcHJvamVjdCA8IGdyYWJQcm9qZWN0Q29udGFpbmVyLmxlbmd0aDtcbiAgICAgICAgcHJvamVjdCArPSAxXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVySUQgPVxuICAgICAgICAgIGdyYWJQcm9qZWN0Q29udGFpbmVyW3Byb2plY3RdLmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdGlkXCIpO1xuICAgICAgICBpZiAoY29udGFpbmVySUQgPT09IHByb2plY3RJRCkge1xuICAgICAgICAgIGNvbnN0IG1pZGRsZVJvdyA9XG4gICAgICAgICAgICBncmFiUHJvamVjdENvbnRhaW5lcltwcm9qZWN0XS5xdWVyeVNlbGVjdG9yKFwiLm1pZGRsZVJvd1wiKTtcbiAgICAgICAgICBtaWRkbGVSb3cuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICBjcmVhdGVJdGVtQ2FyZChcbiAgICAgICAgICAgICAgdGVzdFtzdGFydF0udGFza1tqXS50YXNrLFxuICAgICAgICAgICAgICB0ZXN0W3N0YXJ0XS50YXNrW2pdLm5vdGVzLFxuICAgICAgICAgICAgICB0ZXN0W3N0YXJ0XS50YXNrW2pdLnByaW9yaXR5LFxuICAgICAgICAgICAgICB0ZXN0W3N0YXJ0XS50YXNrW2pdLmRhdGUsXG4gICAgICAgICAgICAgIHRlc3Rbc3RhcnRdLnRhc2tbal0uaWRcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IHtcbiAgY3JlYXRlUHJvamVjdCxcbiAgZ2V0UHJvamVjdHMsXG4gIHByb2plY3RzLFxuICBzZXRQcm9qZWN0cyxcbiAgZGVsZXRlUHJvamVjdCxcbiAgcmV0cmlldmVGcm9tTG9jYWxTdG9yYWdlLFxuICByZWFkSW5mb3JtYXRpb24sXG4gIGZpbmRCeUlELFxuICB1cGRhdGVUaXRsZUFuZERlc2NyaXB0aW9uLFxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWR1cGUtY2xhc3MtbWVtYmVycyAqL1xuLy8gRm9yIEZvbGRlciBOYW1lc1xuaW1wb3J0IHJhbmRvbVN0cmluZyBmcm9tIFwiLi4vLi4vaGVscGZ1bF9mdW5jdGlvbnMvY3JlYXRlUmFuZG9tSURcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tUZW1wbGF0ZVwiO1xuXG5jbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBpZCA9IHJhbmRvbVN0cmluZygpKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy50YXNrcyA9IFtdO1xuICAgIHRoaXMuY29tcGxldGVUYXNrcyA9IFtdO1xuICB9XG5cbiAgc2V0IHRpdGxlKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlLmxlbmd0aCA8IDMpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkLCBub3RlIGRlc2NyaXB0aW9uIGlzIHRvbyBzaG9ydC5cIik7XG5cbiAgICB0aGlzLmN1cnJlbnRfdGl0bGUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCB0aXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50X3RpdGxlO1xuICB9XG5cbiAgc2V0IGRlc2NyaXB0aW9uKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlLmxlbmd0aCA8IDMpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkLCBub3RlIGRlc2NyaXB0aW9uIGlzIHRvbyBzaG9ydC5cIik7XG5cbiAgICB0aGlzLmN1cnJlbnRfZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50X2Rlc2NyaXB0aW9uO1xuICB9XG5cbiAgZ2V0IHRhc2soKSB7XG4gICAgcmV0dXJuIHRoaXMudGFza3M7XG4gIH1cblxuICBjcmVhdGVUb2RvSXRlbShcbiAgICB0YXNrLFxuICAgIGRhdGUsXG4gICAgcHJpb3JpdHksXG4gICAgbm90ZXMsXG4gICAgc3RhdHVzID0gXCJpbmNvbXBsZXRlXCIsXG4gICAgaWQgPSByYW5kb21TdHJpbmcoKVxuICApIHtcbiAgICBjb25zdCB0b2RvSXRlbSA9IG5ldyBUYXNrKHRhc2ssIGRhdGUsIHByaW9yaXR5LCBub3Rlcywgc3RhdHVzLCBpZCk7XG4gICAgdGhpcy50YXNrcy5wdXNoKHRvZG9JdGVtKTtcbiAgICByZXR1cm4gdG9kb0l0ZW07XG4gIH1cblxuICByZW1vdmVUb2RvSXRlbShpdGVtKSB7XG4gICAgdGhpcy50YXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmlkICE9PSBpdGVtKTtcbiAgfVxuXG4gIHVwZGF0ZVRvZG9JdGVtKGlkLCB0YXNrLCBkYXRlLCBwcmlvcml0eSwgbm90ZXMsIHN0YXR1cykge1xuICAgIHRoaXMudGFza3MgPSB0aGlzLnRhc2subWFwKChpdGVtKSA9PlxuICAgICAgaXRlbS5pZCA9PT0gaWQgPyBuZXcgVGFzayh0YXNrLCBkYXRlLCBwcmlvcml0eSwgbm90ZXMsIHN0YXR1cywgaWQpIDogaXRlbVxuICAgICk7XG4gIH1cblxuICByZXRyaWV2ZUl0ZW1zSW5Qcm9qZWN0KCkge1xuICAgIHRoaXMudGFza3MuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbSk7XG4gIH1cblxuICByZXRyaWV2ZUl0ZW1zSW5Db21wbGV0ZVRhc2tzKCkge1xuICAgIHRoaXMuY29tcGxldGVUYXNrcy5mb3JFYWNoKChpdGVtKSA9PiBpdGVtKTtcbiAgfVxuXG4gIGJ5SUQoaWQpIHtcbiAgICByZXR1cm4gdGhpcy50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmlkID09PSBpZCk7XG4gICAgLy8gd2UgY2FuIHJldHJpZXZlIGEgc3BlY2lmaWMgdGFzayBvciBpdGVtIHdoaWNoIGNhbiBiZSB1c2VkIHRvIGB1cGRhdGUgY2FyZHNgXG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiB0aGlzLmN1cnJlbnRfdGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5jdXJyZW50X2Rlc2NyaXB0aW9uLFxuICAgICAgdGFzazogdGhpcy50YXNrcyxcbiAgICAgIGNvbXBsZXRlVGFzazogdGhpcy5jb21wbGV0ZVRhc2tzLFxuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWR1cGUtY2xhc3MtbWVtYmVycyAqL1xuY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRhc2ssIGRhdGUsIHByaW9yaXR5LCBub3Rlcywgc3RhdHVzLCBpZCkge1xuICAgIHRoaXMudGFzayA9IHRhc2s7XG4gICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgfVxuXG4gIGdldCB0YXNrKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRfdGFzaztcbiAgfVxuXG4gIHNldCB0YXNrKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSBcIlwiIHx8IHZhbHVlLmxlbmd0aCA8IDMpIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgVGFza1wiKTtcblxuICAgIHRoaXMuY3VycmVudF90YXNrID0gdmFsdWU7XG4gIH1cblxuICBnZXQgcHJpb3JpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudF9wcmlvcml0eTtcbiAgfVxuXG4gIC8vIHNldCBwcmlvcml0eSh2YWx1ZSkge1xuICAvLyAgIGlmICghW1wiaGlnaFwiLCBcIm1lZGl1bVwiLCBcImxvd1wiXS5pbmNsdWRlcyh2YWx1ZS50b0xvd2VyQ2FzZSgpKSlcbiAgLy8gICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQsIG5vdCBvbmUgb2YgdGhlIGNob2ljZXNcIik7XG5cbiAgLy8gICB0aGlzLmN1cnJlbnRfcHJpb3JpdHkgPSB2YWx1ZTtcbiAgLy8gfVxuXG4gIHNldCBwcmlvcml0eSh2YWx1ZSkge1xuICAgIHRoaXMuY3VycmVudF9wcmlvcml0eSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IG5vdGVzKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRfbm90ZXM7XG4gIH1cblxuICBzZXQgbm90ZXModmFsdWUpIHtcbiAgICBpZiAodmFsdWUubGVuZ3RoIDwgNSlcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQsIG5vdGUgZGVzY3JpcHRpb24gaXMgdG9vIHNob3J0LlwiKTtcblxuICAgIHRoaXMuY3VycmVudF9ub3RlcyA9IHZhbHVlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0YXNrOiB0aGlzLnRhc2ssXG4gICAgICBkYXRlOiB0aGlzLmRhdGUsXG4gICAgICBwcmlvcml0eTogdGhpcy5wcmlvcml0eSxcbiAgICAgIG5vdGVzOiB0aGlzLm5vdGVzLFxuICAgICAgc3RhdHVzOiB0aGlzLnN0YXR1cyxcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFzaztcbiIsImltcG9ydCByZW1vdmVUYXNrSXRlbSBmcm9tIFwiLi4vQ29udHJvbGxlci9yZW1vdmVUYXNrSXRlbVwiO1xuaW1wb3J0IGVkaXRUYXNrIGZyb20gXCIuLi9Db250cm9sbGVyL2VkaXRUYXNrXCI7XG5cbmltcG9ydCB7IGNoYW5nZUl0ZW1TdGF0dXMgfSBmcm9tIFwiLi4vQ29udHJvbGxlci9jaGVja1N0YXR1c1wiO1xuXG4vLyBDcmVhdGUgaG93IHRoZSBpbml0aWFsIGNhcmQgd2lsbCBsb29rXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVJdGVtQ2FyZCh0YXNrLCBub3RlLCBwcmlvcml0eSwgZGF0ZSwgaWQpIHtcbiAgLy8gZ3JhYiBjdXJyZW50UGFnZSBvciBtYWluIHBhZ2UgdG8gYXBwZW5kIHRvXG5cbiAgY29uc3QgY2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBjYXJkQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2FyZEl0ZW1Db250YWluZXJcIik7XG4gIGNhcmRDb250YWluZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1jYXJkSURcIiwgYCR7aWR9YCk7XG5cbiAgY29uc3QgcHJpb3JpdHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBwcmlvcml0eVRpdGxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJpb3JpdHlUaXRsZVNwYW5cIik7XG4gIHByaW9yaXR5VGl0bGUudGV4dENvbnRlbnQgPSBgJHtwcmlvcml0eX1gO1xuXG4gIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlUaXRsZSk7XG5cbiAgY29uc3QgbGVmdFNpZGVTZWN0aW9uSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBsZWZ0U2lkZVNlY3Rpb25JdGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGVmdFNpZGVTZWN0aW9uSXRlbVwiKTtcblxuICBjb25zdCB0b3BTZWN0aW9uTGVmdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgdG9wU2VjdGlvbkxlZnRJdGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9wU2VjdGlvbkxlZnRJdGVtXCIpO1xuXG4gIGNvbnN0IHRhc2tTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIHRhc2tTZWN0aW9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFza1NlY3Rpb25cIik7XG5cbiAgY29uc3QgbGFiZWxDaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWxDaGVja0JveC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJzdGF0dXNcIik7XG4gIGxhYmVsQ2hlY2tCb3gudGV4dENvbnRlbnQgPSBcIlN0YXR1czpcIjtcblxuICBjb25zdCBpbnB1dFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0VGFzay5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gIGlucHV0VGFzay5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN0YXR1c1wiKTtcbiAgaW5wdXRUYXNrLnNldEF0dHJpYnV0ZShcImRhdGEtc3RhdHVzaWRcIiwgYCR7aWR9YCk7XG4gIGlucHV0VGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hhbmdlSXRlbVN0YXR1cyk7XG5cbiAgbGFiZWxDaGVja0JveC5hcHBlbmRDaGlsZChpbnB1dFRhc2spO1xuXG4gIGNvbnN0IGxhYmVsVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWxUYXNrLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImNoZWNrYm94XCIpO1xuICBsYWJlbFRhc2suc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsYWJlbFRhc2tcIik7XG4gIGxhYmVsVGFzay50ZXh0Q29udGVudCA9IGAke3Rhc2t9YDtcblxuICB0YXNrU2VjdGlvbi5hcHBlbmRDaGlsZChsYWJlbENoZWNrQm94KTtcbiAgdGFza1NlY3Rpb24uYXBwZW5kQ2hpbGQobGFiZWxUYXNrKTtcblxuICB0b3BTZWN0aW9uTGVmdEl0ZW0uYXBwZW5kQ2hpbGQodGFza1NlY3Rpb24pO1xuXG4gIGNvbnN0IG1pZGRsZVNlY3Rpb25MZWZ0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBtaWRkbGVTZWN0aW9uTGVmdEl0ZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtaWRkbGVTZWN0aW9uTGVmdEl0ZW1cIik7XG5cbiAgY29uc3QgaW5wdXREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGlucHV0RGF0ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImlucHV0RGF0ZVwiKTtcbiAgaW5wdXREYXRlLnRleHRDb250ZW50ID0gYCR7ZGF0ZX1gO1xuXG4gIG1pZGRsZVNlY3Rpb25MZWZ0SXRlbS5hcHBlbmRDaGlsZChpbnB1dERhdGUpO1xuXG4gIGNvbnN0IGJvdHRvbVNlY3Rpb25MZWZ0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBib3R0b21TZWN0aW9uTGVmdEl0ZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJib3R0b21TZWN0aW9uTGVmdEl0ZW1cIik7XG4gIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBlZGl0QnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZWRpdEJ1dHRvblwiKTtcbiAgZWRpdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWVkaXRpZFwiLCBgJHtpZH1gKTtcbiAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdFRhc2spO1xuICBlZGl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG5cbiAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGVsZXRlQnV0dG9uSXRlbVwiKTtcbiAgZGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtZGVsZXRlaWRcIiwgYCR7aWR9YCk7XG4gIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVtb3ZlVGFza0l0ZW0pO1xuICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuXG4gIGJvdHRvbVNlY3Rpb25MZWZ0SXRlbS5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcbiAgYm90dG9tU2VjdGlvbkxlZnRJdGVtLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG5cbiAgbGVmdFNpZGVTZWN0aW9uSXRlbS5hcHBlbmRDaGlsZCh0b3BTZWN0aW9uTGVmdEl0ZW0pO1xuICBsZWZ0U2lkZVNlY3Rpb25JdGVtLmFwcGVuZENoaWxkKG1pZGRsZVNlY3Rpb25MZWZ0SXRlbSk7XG4gIGxlZnRTaWRlU2VjdGlvbkl0ZW0uYXBwZW5kQ2hpbGQoYm90dG9tU2VjdGlvbkxlZnRJdGVtKTtcblxuICBjb25zdCByaWdodFNpZGVTZWN0aW9uSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICByaWdodFNpZGVTZWN0aW9uSXRlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInJpZ2h0U2lkZVNlY3Rpb25JdGVtXCIpO1xuXG4gIGNvbnN0IG5vdGVBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIG5vdGVBcmVhLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibm90ZUFyZWFcIik7XG4gIG5vdGVBcmVhLnRleHRDb250ZW50ID0gYCR7bm90ZX1gO1xuXG4gIHJpZ2h0U2lkZVNlY3Rpb25JdGVtLmFwcGVuZENoaWxkKG5vdGVBcmVhKTtcblxuICBjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGxlZnRTaWRlU2VjdGlvbkl0ZW0pO1xuICBjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHJpZ2h0U2lkZVNlY3Rpb25JdGVtKTtcblxuICByZXR1cm4gY2FyZENvbnRhaW5lcjtcbn1cblxuLyogXG5cbltcbiAgW11UQVNLXG4gIFtOT1RFUyBIRVJFXVxuXG5cbl1cblxuKi9cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUVkaXRGb3JtKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gIGNvbnN0IGRpYWxvZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XG4gIGRpYWxvZ0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImVkaXRJdGVtRm9ybVwiKTtcblxuICBjb25zdCB0aXRsZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgdGl0bGVIZWFkZXIudGV4dENvbnRlbnQgPSBcIkVkaXRpbmcgRm9ybVwiO1xuXG4gIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9ybUNvbnRhaW5lckl0ZW1cIik7XG5cbiAgY29uc3QgdG9wU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICB0b3BTZWN0aW9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9wU2VjdGlvbkl0ZW0gZm9ybUxpc3RJdGVtXCIpO1xuXG4gIGNvbnN0IHRhc2tMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgdGFza0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImVkaXRUYXNrXCIpO1xuICB0YXNrTGFiZWwudGV4dENvbnRlbnQgPSBcIlRhc2s6XCI7XG5cbiAgY29uc3QgdGFza0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0YXNrSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlZGl0VGFza1wiKTtcbiAgdGFza0lucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuXG4gIHRvcFNlY3Rpb24uYXBwZW5kQ2hpbGQodGFza0xhYmVsKTtcbiAgdG9wU2VjdGlvbi5hcHBlbmRDaGlsZCh0YXNrSW5wdXQpO1xuXG4gIHRvcFNlY3Rpb24uYXBwZW5kQ2hpbGQodGFza0xhYmVsKTtcbiAgdG9wU2VjdGlvbi5hcHBlbmRDaGlsZCh0YXNrSW5wdXQpO1xuXG4gIGNvbnN0IG1pZGRsZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgbWlkZGxlU2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1pZGRsZVNlY3Rpb25JdGVtIGZvcm1MaXN0SXRlbVwiKTtcblxuICBjb25zdCB0ZXh0QXJlYUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICB0ZXh0QXJlYUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImVkaXROb3RlXCIpO1xuICB0ZXh0QXJlYUxhYmVsLnRleHRDb250ZW50ID0gXCJOb3RlOlwiO1xuXG4gIGNvbnN0IHRleHRBcmVhSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIHRleHRBcmVhSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIHRleHRBcmVhSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlZGl0Tm90ZVwiKTtcblxuICBtaWRkbGVTZWN0aW9uLmFwcGVuZENoaWxkKHRleHRBcmVhTGFiZWwpO1xuICBtaWRkbGVTZWN0aW9uLmFwcGVuZENoaWxkKHRleHRBcmVhSW5wdXQpO1xuXG4gIGNvbnN0IHNlY29uZE1pZGRsZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgc2Vjb25kTWlkZGxlU2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNlY29uZE1pZGRsZVNlY3Rpb24gZm9ybUxpc3RJdGVtXCIpO1xuXG4gIGNvbnN0IGNhbGVuZGFySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNhbGVuZGFySW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlZGl0RGF0ZVwiKTtcbiAgY2FsZW5kYXJJbnB1dC50eXBlID0gXCJkYXRlXCI7XG5cbiAgY29uc3Qgc2VsZWN0RHJvcERvd25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIHNlbGVjdERyb3BEb3duSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlZGl0U2VsZWN0XCIpO1xuICBjb25zdCBsb3dUaWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgbG93VGllci5zZXRBdHRyaWJ1dGUgPSAoXCJ2YWx1ZVwiLCBcImxvd1wiKTtcbiAgbG93VGllci50ZXh0Q29udGVudCA9IFwiTG93XCI7XG5cbiAgY29uc3QgbWVkaXVtVGllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIG1lZGl1bVRpZXIuc2V0QXR0cmlidXRlID0gKFwidmFsdWVcIiwgXCJtZWRpdW1cIik7XG4gIG1lZGl1bVRpZXIudGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiO1xuXG4gIGNvbnN0IGhpZ2hUaWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgaGlnaFRpZXIuc2V0QXR0cmlidXRlID0gKFwidmFsdWVcIiwgXCJoaWdoXCIpO1xuICBoaWdoVGllci50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xuXG4gIHNlbGVjdERyb3BEb3duSW5wdXQuYXBwZW5kQ2hpbGQobG93VGllcik7XG4gIHNlbGVjdERyb3BEb3duSW5wdXQuYXBwZW5kQ2hpbGQobWVkaXVtVGllcik7XG4gIHNlbGVjdERyb3BEb3duSW5wdXQuYXBwZW5kQ2hpbGQoaGlnaFRpZXIpO1xuXG4gIHNlY29uZE1pZGRsZVNlY3Rpb24uYXBwZW5kQ2hpbGQoY2FsZW5kYXJJbnB1dCk7XG4gIHNlY29uZE1pZGRsZVNlY3Rpb24uYXBwZW5kQ2hpbGQoc2VsZWN0RHJvcERvd25JbnB1dCk7XG5cbiAgY29uc3QgYm90dG9tU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBib3R0b21TZWN0aW9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYm90dG9tU2VjdGlvbkl0ZW0gZm9ybUxpc3RJdGVtXCIpO1xuXG4gIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNhbmNlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJmb3JtbWV0aG9kXCIsIFwiZGlhbG9nXCIpO1xuXG4gIGNhbmNlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImVkaXRJdGVtQ2FuY2VsXCIpO1xuICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuXG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJlZGl0SXRlbVN1Ym1pdFwiKTtcbiAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcblxuICBib3R0b21TZWN0aW9uLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG4gIGJvdHRvbVNlY3Rpb24uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcblxuICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvcFNlY3Rpb24pO1xuICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKG1pZGRsZVNlY3Rpb24pO1xuICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlY29uZE1pZGRsZVNlY3Rpb24pO1xuICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGJvdHRvbVNlY3Rpb24pO1xuXG4gIGRpYWxvZ0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUhlYWRlcik7XG4gIGRpYWxvZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGRpYWxvZ0NvbnRhaW5lcik7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbi8qIFxuXG5JbnB1dFxuXG5JbnB1dCBOb3RlXG5cbkRhdGUgSW5wdXQgfCBQcmlvcml0eSBJbnB1dFxuXG5DYW5jZWwgfCBTdWJtaXQgPC0gV2lsbCB1cGRhdGUgY2FyZCB2aXN1YWxzXG5cbiovXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0Rm9ybSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICBjb25zdCBkaWFsb2dDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xuXG4gIGRpYWxvZ0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImVkaXRQcm9qZWN0XCIpO1xuXG4gIGNvbnN0IGZvcm1Ib2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgZm9ybUhvbGRlci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZvcm1Db250YWluZXJcIik7XG4gIGZvcm1Ib2xkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0Rm9ybVwiKTtcblxuICBjb25zdCBkaXYxQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2MUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZvcm0tbGlzdFwiKTtcblxuICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRpdGxlXCIpO1xuICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZTpcIjtcblxuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWRpdFRpdGxlXCIpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGl0bGVJbnB1dFZhbHVlXCIpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRW50ZXIgTmFtZVwiKTtcblxuICBkaXYxQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICBkaXYxQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuXG4gIGNvbnN0IGRpdjJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYyQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZm9ybS1saXN0XCIpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGRlc2NyaXB0aW9uVGl0bGUuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZGVzY3JpcHRpb25cIik7XG4gIGRlc2NyaXB0aW9uVGl0bGUudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uOlwiO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlZGl0RGVzY3JpcHRpb25cIik7XG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImRlc2NyaXB0aW9uXCIpO1xuICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcImZvclwiLCBcImRlc2NyaXB0aW9uXCIpO1xuXG4gIGRpdjJDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25UaXRsZSk7XG4gIGRpdjJDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG5cbiAgY29uc3QgZGl2M0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgZGl2M0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJ1dHRvbnNDb250YWluZXJcIik7XG5cbiAgY29uc3QgYnV0dG9uQ2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgYnV0dG9uU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICBidXR0b25DYW5jZWwuc2V0QXR0cmlidXRlKFwiZm9ybW1ldGhvZFwiLCBcImRpYWxvZ1wiKTtcbiAgYnV0dG9uQ2FuY2VsLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2FuY2VsQnV0dG9uXCIpO1xuICBidXR0b25DYW5jZWwuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlZGl0Q2FuY2VsQnV0dG9uXCIpO1xuICBidXR0b25DYW5jZWwudGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuXG4gIGJ1dHRvblN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInN1Ym1pdEJ1dHRvblwiKTtcbiAgYnV0dG9uU3VibWl0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWRpdFN1Ym1pdEJ1dHRvblwiKTtcbiAgYnV0dG9uU3VibWl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gIGJ1dHRvblN1Ym1pdC50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG5cbiAgZGl2M0NvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25DYW5jZWwpO1xuICBkaXYzQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvblN1Ym1pdCk7XG5cbiAgZGlhbG9nQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Ib2xkZXIpO1xuXG4gIGZvcm1Ib2xkZXIuYXBwZW5kQ2hpbGQoZGl2MUNvbnRhaW5lcik7XG4gIGZvcm1Ib2xkZXIuYXBwZW5kQ2hpbGQoZGl2MkNvbnRhaW5lcik7XG4gIGZvcm1Ib2xkZXIuYXBwZW5kQ2hpbGQoZGl2M0NvbnRhaW5lcik7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChkaWFsb2dDb250YWluZXIpO1xuXG4gIHJldHVybiBjb250ZW50O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSXRlbUZvcm0oKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgY29uc3QgZGlhbG9nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcbiAgZGlhbG9nQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaXRlbUZvcm1cIik7XG5cbiAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtQ29udGFpbmVySXRlbVwiKTtcblxuICBjb25zdCB0b3BTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIHRvcFNlY3Rpb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b3BTZWN0aW9uSXRlbSBmb3JtTGlzdEl0ZW1cIik7XG5cbiAgY29uc3QgdGFza0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICB0YXNrTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGFza1wiKTtcbiAgdGFza0xhYmVsLnRleHRDb250ZW50ID0gXCJUYXNrOlwiO1xuXG4gIGNvbnN0IHRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgdGFza0lucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFza1wiKTtcbiAgdGFza0lucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuXG4gIHRvcFNlY3Rpb24uYXBwZW5kQ2hpbGQodGFza0xhYmVsKTtcbiAgdG9wU2VjdGlvbi5hcHBlbmRDaGlsZCh0YXNrSW5wdXQpO1xuXG4gIHRvcFNlY3Rpb24uYXBwZW5kQ2hpbGQodGFza0xhYmVsKTtcbiAgdG9wU2VjdGlvbi5hcHBlbmRDaGlsZCh0YXNrSW5wdXQpO1xuXG4gIGNvbnN0IG1pZGRsZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgbWlkZGxlU2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1pZGRsZVNlY3Rpb25JdGVtIGZvcm1MaXN0SXRlbVwiKTtcblxuICBjb25zdCB0ZXh0QXJlYUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICB0ZXh0QXJlYUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm5vdGVcIik7XG4gIHRleHRBcmVhTGFiZWwudGV4dENvbnRlbnQgPSBcIk5vdGU6XCI7XG5cbiAgY29uc3QgdGV4dEFyZWFJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgdGV4dEFyZWFJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgdGV4dEFyZWFJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5vdGVcIik7XG5cbiAgbWlkZGxlU2VjdGlvbi5hcHBlbmRDaGlsZCh0ZXh0QXJlYUxhYmVsKTtcbiAgbWlkZGxlU2VjdGlvbi5hcHBlbmRDaGlsZCh0ZXh0QXJlYUlucHV0KTtcblxuICBjb25zdCBzZWNvbmRNaWRkbGVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIHNlY29uZE1pZGRsZVNlY3Rpb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzZWNvbmRNaWRkbGVTZWN0aW9uIGZvcm1MaXN0SXRlbVwiKTtcblxuICBjb25zdCBjYWxlbmRhcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjYWxlbmRhcklucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGF0ZVwiKTtcbiAgY2FsZW5kYXJJbnB1dC50eXBlID0gXCJkYXRlXCI7XG5cbiAgY29uc3Qgc2VsZWN0RHJvcERvd25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIHNlbGVjdERyb3BEb3duSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzZWxlY3RcIik7XG4gIGNvbnN0IGxvd1RpZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBsb3dUaWVyLnNldEF0dHJpYnV0ZSA9IChcInZhbHVlXCIsIFwibG93XCIpO1xuICBsb3dUaWVyLnRleHRDb250ZW50ID0gXCJMb3dcIjtcblxuICBjb25zdCBtZWRpdW1UaWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgbWVkaXVtVGllci5zZXRBdHRyaWJ1dGUgPSAoXCJ2YWx1ZVwiLCBcIm1lZGl1bVwiKTtcbiAgbWVkaXVtVGllci50ZXh0Q29udGVudCA9IFwiTWVkaXVtXCI7XG5cbiAgY29uc3QgaGlnaFRpZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBoaWdoVGllci5zZXRBdHRyaWJ1dGUgPSAoXCJ2YWx1ZVwiLCBcImhpZ2hcIik7XG4gIGhpZ2hUaWVyLnRleHRDb250ZW50ID0gXCJIaWdoXCI7XG5cbiAgc2VsZWN0RHJvcERvd25JbnB1dC5hcHBlbmRDaGlsZChsb3dUaWVyKTtcbiAgc2VsZWN0RHJvcERvd25JbnB1dC5hcHBlbmRDaGlsZChtZWRpdW1UaWVyKTtcbiAgc2VsZWN0RHJvcERvd25JbnB1dC5hcHBlbmRDaGlsZChoaWdoVGllcik7XG5cbiAgc2Vjb25kTWlkZGxlU2VjdGlvbi5hcHBlbmRDaGlsZChjYWxlbmRhcklucHV0KTtcbiAgc2Vjb25kTWlkZGxlU2VjdGlvbi5hcHBlbmRDaGlsZChzZWxlY3REcm9wRG93bklucHV0KTtcblxuICBjb25zdCBib3R0b21TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIGJvdHRvbVNlY3Rpb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJib3R0b21TZWN0aW9uSXRlbSBmb3JtTGlzdEl0ZW1cIik7XG5cbiAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY2FuY2VsQnV0dG9uLnNldEF0dHJpYnV0ZShcImZvcm1tZXRob2RcIiwgXCJkaWFsb2dcIik7XG5cbiAgY2FuY2VsQnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaXRlbUNhbmNlbFwiKTtcbiAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcblxuXG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpdGVtU3VibWl0XCIpO1xuICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuXG4gIGJvdHRvbVNlY3Rpb24uYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcbiAgYm90dG9tU2VjdGlvbi5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuXG4gIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodG9wU2VjdGlvbik7XG4gIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQobWlkZGxlU2VjdGlvbik7XG4gIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoc2Vjb25kTWlkZGxlU2VjdGlvbik7XG4gIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoYm90dG9tU2VjdGlvbik7XG5cbiAgZGlhbG9nQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGlhbG9nQ29udGFpbmVyKTtcblxuICByZXR1cm4gY29udGVudDtcbn1cbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tY3ljbGVcbmltcG9ydCBhZGRJdGVtIGZyb20gXCIuLi9Db250cm9sbGVyL2FkZFRhc2tcIjtcbmltcG9ydCBlZGl0Rm9ybSBmcm9tIFwiLi4vQ29udHJvbGxlci9lZGl0UHJvamVjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNYWluVGFiKHRpdGxlLCBkZXNjcmlwdGlvbiwgaWQpIHtcbiAgLy8gYXBwZW5kIHRvIHRoZSBtYWluY29udGFpbmVyXG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnRQYWdlXCIpO1xuXG4gIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgcHJvamVjdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2plY3RDb250YWluZXJcIik7XG4gIHByb2plY3RDb250YWluZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0aWRcIiwgYCR7aWR9YCk7XG5cbiAgY29uc3QgdG9wUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIHRvcFJvdy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvcFJvd1wiKTtcblxuICBjb25zdCBtYWluVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIG1haW5UaXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1haW5UaXRsZVwiKTtcbiAgbWFpblRpdGxlLnRleHRDb250ZW50ID0gYCR7dGl0bGV9YDtcblxuICBjb25zdCB0b3BSb3dTZWNvbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgdG9wUm93U2Vjb25kLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9wUm93U2Vjb25kXCIpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBkZXNjcmlwdGlvblRleHQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkZXNjcmlwdGlvblRleHRcIik7XG4gIGRlc2NyaXB0aW9uVGV4dC50ZXh0Q29udGVudCA9IGAke2Rlc2NyaXB0aW9ufWA7XG5cbiAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGVkaXRCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJlZGl0QnV0dG9uXCIpO1xuICBlZGl0QnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtZWRpdGlkXCIsIGlkKTtcbiAgZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlZGl0Rm9ybSk7XG5cbiAgdG9wUm93LmFwcGVuZENoaWxkKG1haW5UaXRsZSk7XG4gIHRvcFJvdy5hcHBlbmRDaGlsZCh0b3BSb3dTZWNvbmQpO1xuXG4gIHRvcFJvd1NlY29uZC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblRleHQpO1xuICB0b3BSb3dTZWNvbmQuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG5cbiAgY29uc3QgbWlkZGxlUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIG1pZGRsZVJvdy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1pZGRsZVJvd1wiKTtcblxuICAvLyBNaWRkbGUgcm93IHdpbGwgYmUgd2hlcmUgYWxsIHRhc2sgaXRlbXMgd2lsbCBnb1xuXG4gIGNvbnN0IGJvdHRvbVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBib3R0b21Sb3cuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJib3R0b21Sb3dcIik7XG5cbiAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZFRhc2tCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhZGRUYXNrQnV0dG9uXCIpO1xuICBhZGRUYXNrQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgYWRkVGFza0J1dHRvbi50ZXh0Q29udGVudCA9IFwiK1wiO1xuXG4gIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZEl0ZW0pO1xuXG4gIGJvdHRvbVJvdy5hcHBlbmRDaGlsZChhZGRUYXNrQnV0dG9uKTtcblxuICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRvcFJvdyk7XG4gIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQobWlkZGxlUm93KTtcbiAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChib3R0b21Sb3cpO1xuXG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG5cbiAgcmV0dXJuIHByb2plY3RDb250YWluZXI7XG5cbiAgLy8gY3JlYXRlIHRvcCByb3dbdGl0bGUgYW5kIGRlc2NyaXB0aW9uIHdpbGwgYmVdXG5cbiAgLy8gdGhlbiBjcmVhdGUgW10gYmlnIHNpemUgd2hlcmUgYWxsIHRhc2tzIHdpbGwgZ29cbn1cbiIsIi8vIFRoaXMgd2lsbCBjcmVhdGUgYSBkaWFsb2cgZm9ybSB2aWV3XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RGb3JtKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gIGNvbnN0IGRpYWxvZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XG5cbiAgZGlhbG9nQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGlhbG9nQ29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGZvcm1Ib2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgZm9ybUhvbGRlci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZvcm1Db250YWluZXJcIik7XG4gIGZvcm1Ib2xkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0Rm9ybVwiKTtcblxuICBjb25zdCBkaXYxQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2MUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZvcm0tbGlzdFwiKTtcblxuICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRpdGxlXCIpO1xuICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZTpcIjtcblxuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGl0bGVcIik7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0aXRsZUlucHV0VmFsdWVcIik7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJFbnRlciBOYW1lXCIpO1xuXG4gIGRpdjFDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gIGRpdjFDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG5cbiAgY29uc3QgZGl2MkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdjJDb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmb3JtLWxpc3RcIik7XG5cbiAgY29uc3QgZGVzY3JpcHRpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgZGVzY3JpcHRpb25UaXRsZS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkZXNjcmlwdGlvblwiKTtcbiAgZGVzY3JpcHRpb25UaXRsZS50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246XCI7XG5cbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlc2NyaXB0aW9uXCIpO1xuICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkZXNjcmlwdGlvblwiKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkZXNjcmlwdGlvblwiKTtcblxuICBkaXYyQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVGl0bGUpO1xuICBkaXYyQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xuXG4gIGNvbnN0IGRpdjNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGRpdjNDb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidXR0b25zQ29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGJ1dHRvbkNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGJ1dHRvblN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgYnV0dG9uQ2FuY2VsLnNldEF0dHJpYnV0ZShcImZvcm1tZXRob2RcIiwgXCJkaWFsb2dcIik7XG4gIGJ1dHRvbkNhbmNlbC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhbmNlbEJ1dHRvblwiKTtcbiAgYnV0dG9uQ2FuY2VsLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgYnV0dG9uQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdGl0bGVJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgZGlhbG9nQ29udGFpbmVyLmNsb3NlKCk7XG4gIH0pO1xuXG4gIGJ1dHRvblN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInN1Ym1pdEJ1dHRvblwiKTtcbiAgYnV0dG9uU3VibWl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gIGJ1dHRvblN1Ym1pdC50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG5cbiAgYnV0dG9uU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZGlhbG9nQ29udGFpbmVyLmNsb3NlKCk7XG4gIH0pO1xuXG4gIGRpdjNDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uQ2FuY2VsKTtcbiAgZGl2M0NvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25TdWJtaXQpO1xuXG4gIGRpYWxvZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtSG9sZGVyKTtcblxuICBmb3JtSG9sZGVyLmFwcGVuZENoaWxkKGRpdjFDb250YWluZXIpO1xuICBmb3JtSG9sZGVyLmFwcGVuZENoaWxkKGRpdjJDb250YWluZXIpO1xuICBmb3JtSG9sZGVyLmFwcGVuZENoaWxkKGRpdjNDb250YWluZXIpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGlhbG9nQ29udGFpbmVyKTtcblxuICByZXR1cm4gY29udGVudDtcbn1cblxuLyogXG5cbltTUEVDSUFMIElDT05dXG5bSU5QVVQgRklFTERTXVxuW0NBTkNFTCBTVUJNSVQgQlVUVE9OU11cblxuXG5cblxuKi9cbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tY3ljbGVcbmltcG9ydCBkZWxQcm9qZWN0IGZyb20gXCIuLi9Db250cm9sbGVyL2RlbGV0ZVByb2plY3RcIjtcbmltcG9ydCB0b2dnbGluZ1Byb2plY3RWaWV3IGZyb20gXCIuLi9Db250cm9sbGVyL3RvZ2dsaW5nUHJvamVjdFZpZXdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdFRhYih0aXRsZUlucHV0LCBpdGVtSUQpIHtcbiAgLy8gR3JhYiB0aGUgcHJvamVjdHMgbGlzdCBVTCBlbGVtZW50XG4gIGNvbnN0IHByb2plY3RVTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNcIik7XG5cbiAgY29uc3QgbGlFbGVtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBsaUVsZW1lbnRDb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsaUVsZW1lbnRcIik7XG4gIGxpRWxlbWVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtpdGVtSUR9YCk7XG4gIGxpRWxlbWVudENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xpbmdQcm9qZWN0Vmlldyk7XG5cbiAgY29uc3QgY3JlYXRlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDZcIik7XG4gIGNyZWF0ZVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVRhYlwiKTtcbiAgY3JlYXRlVGl0bGUudGV4dENvbnRlbnQgPSBgJHt0aXRsZUlucHV0fWA7XG5cbiAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGVsZXRlQnRuXCIpO1xuXG4gIGNvbnN0IGltZ0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWdJY29uLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcImdhcmJhZ2VcIik7XG4gIGltZ0ljb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkZWxJQ09OXCIpO1xuICBpbWdJY29uLnNldEF0dHJpYnV0ZShcImRhdGEtZGVsZXRlaWRcIiwgaXRlbUlEKTtcblxuICBpbWdJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxQcm9qZWN0KTtcblxuICBkZWxldGVCdXR0b24uYXBwZW5kQ2hpbGQoaW1nSWNvbik7XG5cbiAgbGlFbGVtZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVRpdGxlKTtcbiAgbGlFbGVtZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG5cbiAgcHJvamVjdFVMLmFwcGVuZENoaWxkKGxpRWxlbWVudENvbnRhaW5lcik7XG5cbiAgcmV0dXJuIHByb2plY3RVTDtcbn1cbiIsImZ1bmN0aW9uIHJhbmRvbVN0cmluZygpIHtcbiAgcmV0dXJuIFN0cmluZyhEYXRlLm5vdygpLnRvU3RyaW5nKDMyKSArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpKS5yZXBsYWNlKFxuICAgIC9cXC4vZyxcbiAgICBcIlwiXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJhbmRvbVN0cmluZztcbiIsIi8vIFNhdmUgZXZlcnl0aGluZ1xuXG5mdW5jdGlvbiBzYXZlUHJvamVjdFNUb2RvTFMoa2V5TmFtZSwgYXJyYXkpIHtcbiAgY29uc3Qgc3RyaW5naWZ5ID0gSlNPTi5zdHJpbmdpZnkoYXJyYXkpO1xuXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleU5hbWUsIHN0cmluZ2lmeSk7XG59XG5cbmZ1bmN0aW9uIGxvb2tGb3JEYXRhSW5MUyhrZXlOYW1lKSB7XG4gIC8vIFdlIG5lZWQgdG8gbG9vayBmb3IgdGhlIGRhdGEgaW4gdGhlIGxvY2FsIHN0b3JhZ2VcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleU5hbWUpID09PSBudWxsKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIGNvbnN0IGdldEl0ZW0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXlOYW1lKTtcblxuICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShnZXRJdGVtKTtcblxuICByZXR1cm4gZGF0YTtcbn1cblxuZXhwb3J0IHsgc2F2ZVByb2plY3RTVG9kb0xTLCBsb29rRm9yRGF0YUluTFMgfTtcbiIsImltcG9ydCBhZGRQcm9qZWN0IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRyb2xsZXIvYWRkUHJvamVjdFwiO1xuaW1wb3J0IG9wZW5Gb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRyb2xsZXIvb3BlblByb2plY3RGb3JtXCI7XG5pbXBvcnQgeyByZXRyaWV2ZUZyb21Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Nb2RlbC9jb2xsZWN0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2VMb2FkKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFByb2plY3RcIik7XG4gIGNvbnN0IHByb2plY3RTdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdEJ1dHRvblwiKTtcblxuICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuRm9ybSk7XG5cbiAgcHJvamVjdFN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkUHJvamVjdCk7XG5cbiAgLy8gSW4gaGVyZSB3ZSdyZSBnb2luZyB0byBwcm9iYWJseSBzYXZlIHRoZSBhcnJheSBgcHJvamVjdHNgIGludG8gdGhlIGxvY2FsIHN0b3JhZ2VcbiAgLy8gT3Igd2UgY2FuIHJldHJpZXZlIGl0IGZyb20gaGVyZVxuXG4gIC8vIFJlbWVtYmVyLCB3ZSBoYXZlIHRvIHNldCB1cCBhIGNvbXBsZXRlIG9yIGluY29tcGxldGUgc3RhdHVzIGZvciBlYWNoIGB0b2RvYCBpdGVtLCBpbnNpZGUgcHJvamVjdCB0ZW1wbGF0ZVxuXG4gIHJldHJpZXZlRnJvbUxvY2FsU3RvcmFnZShcInByb2plY3RzXCIpO1xuXG4gIHJldHVybiBjb250ZW50O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHBhZ2VMb2FkIGZyb20gXCIuL3BhZ2VMb2FkL3BhZ2VMb2FkXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5wYWdlTG9hZCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9