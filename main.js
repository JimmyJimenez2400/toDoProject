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
    console.log(itemFound);

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
        // projects.forEach((project) => {
        //   const itemFound = project.byID(cardID);
        //   if (itemFound === undefined) {
        //     console.log("IT RETURNED UNDEFINED");
        //     continue;
        //   }
        // changeTaskText.textContent = `${itemFound.task}`;
        // changeNoteText.textContent = `${itemFound.notes}`;
        // changeDate.textContent = `${itemFound.date}`;
        // changePriority.textContent = `${itemFound.priority}`;
        // });
        // eslint-disable-next-line no-restricted-syntax
        for (const project of _Model_collection__WEBPACK_IMPORTED_MODULE_0__.projects) {
          const itemFound = project.byID(cardID);
          if (itemFound === undefined) {
            // eslint-disable-next-line no-continue
            continue;
          }
          changeTaskText.textContent = `${itemFound.task}`;
          changeNoteText.textContent = `${itemFound.notes}`;
          changeDate.textContent = `${itemFound.date}`;
          changePriority.textContent = `${itemFound.priority}`;
        }
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

  updateTodoItem(id, task, date, priority, notes, status = "incomplete") {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxZQUFZLFdBQVcsS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxhQUFhLE9BQU8sS0FBSyxVQUFVLGFBQWEsT0FBTyxLQUFLLFVBQVUsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxjQUFjLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFdBQVcsYUFBYSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssVUFBVSxZQUFZLGNBQWMsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLFdBQVcsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxZQUFZLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxP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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQTJDO0FBQ3RCOztBQUVyQiw4REFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLy4vc3JjL2NvbXBvbmVudHMvQ29udHJvbGxlci9hZGRQcm9qZWN0LmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLy4vc3JjL2NvbXBvbmVudHMvQ29udHJvbGxlci9hZGRUYXNrLmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLy4vc3JjL2NvbXBvbmVudHMvQ29udHJvbGxlci9jaGVja1N0YXR1cy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL3NyYy9jb21wb25lbnRzL0NvbnRyb2xsZXIvZGVsZXRlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL3NyYy9jb21wb25lbnRzL0NvbnRyb2xsZXIvZWRpdFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9zcmMvY29tcG9uZW50cy9Db250cm9sbGVyL2VkaXRUYXNrLmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLy4vc3JjL2NvbXBvbmVudHMvQ29udHJvbGxlci9vcGVuRWRpdEZvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9zcmMvY29tcG9uZW50cy9Db250cm9sbGVyL29wZW5FZGl0UHJvamVjdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL3NyYy9jb21wb25lbnRzL0NvbnRyb2xsZXIvb3Blbkl0ZW1Gb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLy4vc3JjL2NvbXBvbmVudHMvQ29udHJvbGxlci9vcGVuUHJvamVjdEZvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9zcmMvY29tcG9uZW50cy9Db250cm9sbGVyL3JlbW92ZVRhc2tJdGVtLmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLy4vc3JjL2NvbXBvbmVudHMvQ29udHJvbGxlci90b2dnbGluZ1Byb2plY3RWaWV3LmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLy4vc3JjL2NvbXBvbmVudHMvTW9kZWwvY29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL3NyYy9jb21wb25lbnRzL01vZGVsL3Byb2plY3RUZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL3NyYy9jb21wb25lbnRzL01vZGVsL3Rhc2tUZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL3NyYy9jb21wb25lbnRzL1ZpZXcvY3JlYXRlQ2FyZFZpc3VhbC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL3NyYy9jb21wb25lbnRzL1ZpZXcvY3JlYXRlRWRpdEZvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9zcmMvY29tcG9uZW50cy9WaWV3L2NyZWF0ZUVkaXRQcm9qZWN0LmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLy4vc3JjL2NvbXBvbmVudHMvVmlldy9jcmVhdGVJdGVtRm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL3NyYy9jb21wb25lbnRzL1ZpZXcvY3JlYXRlTWFpblRhYi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL3NyYy9jb21wb25lbnRzL1ZpZXcvY3JlYXRlUHJvamVjdEZvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9zcmMvY29tcG9uZW50cy9WaWV3L2NyZWF0ZVRhYlByb2plY3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9zcmMvaGVscGZ1bF9mdW5jdGlvbnMvY3JlYXRlUmFuZG9tSUQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9zcmMvaGVscGZ1bF9mdW5jdGlvbnMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLy4vc3JjL3BhZ2VMb2FkL3BhZ2VMb2FkLmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1MaWNvcmljZTogIzBEMDEwNjtcXG4gIC0tWmFmZnJlOiAjMzYyNkE3O1xcbiAgLS1HbGF1Y291czogIzY1N0VENDtcXG4gIC0tU2NhcmxldDogI0ZGMzMxRjtcXG4gIC0tR2hvc3QtV2hpdGU6ICNGQkZCRkY7XFxuICAtLVJveWFsLUJsdWU6ICMwMDUzOUM7XFxuICAtLVBlYWNoOiAjRUVBNDdGO1xcbn1cXG5cXG5ib2R5LFxcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKixcXG4qOmJlZm9yZSxcXG4qOmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgLyogb3V0bGluZTogMnB4IHNvbGlkIGdyZWVuOyAqL1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcblxcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAyZnIgbWlubWF4KDIwMHB4LCAxZnIpO1xcbn1cXG5cXG4jaGVhZGVyQ29udGFpbmVyIHtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgZ3JpZC1jb2x1bW4tZW5kOiAtMTtcXG5cXG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgZ3JpZC1yb3ctZW5kOiAyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tTGljb3JpY2UpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tR2hvc3QtV2hpdGUpO1xcbiAgY29sb3I6IHZhcigtLUdob3N0LVdoaXRlKTtcXG59XFxuXFxuI3NpZGVDb250YWluZXIge1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICBncmlkLXJvdy1lbmQ6IDU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1MaWNvcmljZSk7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1HaG9zdC1XaGl0ZSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNkaXNwbGF5Q3VycmVudFBhZ2VDb250YWluZXIge1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICBncmlkLXJvdy1lbmQ6IDQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1MaWNvcmljZSk7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1HaG9zdC1XaGl0ZSk7XFxufVxcblxcbi8qIEhlYWRlciAqL1xcblxcblxcbi8qIFNpZGUgKi9cXG5cXG4uc2lkZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDE7XFxuICBjb2xvcjogdmFyKC0tR2hvc3QtV2hpdGUpO1xcbn1cXG5cXG4ucHJvamVjdHNUaXRsZSB7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi50b3BTZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgZmxleDogMTtcXG59XFxuXFxuLnRvZGF5Rm9sZGVyIHtcXG4gIGZsZXg6IDAgMSAxMCU7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1HaG9zdC1XaGl0ZSk7XFxuXFxufVxcblxcbi51cGNvbWluZ0ZvbGRlciB7XFxuICBmbGV4OiAwIDEgMTAlO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tR2hvc3QtV2hpdGUpO1xcblxcbn1cXG5cXG4uZm9sZGVyQ29udGFpbmVyIHtcXG4gIGZsZXg6IDE7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1HaG9zdC1XaGl0ZSk7XFxuXFxufVxcblxcbi5ib3R0b21TZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgZmxleDogMCAxIDEwJTtcXG59XFxuXFxuLmFkZFByb2plY3RDb250YWluZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uYWRkUHJvamVjdCB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLmxpRWxlbWVudCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICBjb2xvcjogdmFyKC0tR2hvc3QtV2hpdGUpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmxlZnRTaWRlRWxlbWVudFRhYiB7XFxuICBmbGV4OiAyO1xcbn1cXG5cXG4ucmlnaHRTaWRlRWxlbWVudFRhYiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZmxleDogMTtcXG59XFxuXFxuXFxuLmxpRWxlbWVudDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1TY2FybGV0KTtcXG59XFxuXFxuLyogTWFpbiAqL1xcblxcblxcbi5kaWFsb2dDb250YWluZXIsXFxuLmVkaXRJdGVtRm9ybSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIHRvcDogMTkwcHg7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIHdpZHRoOiA1MCU7XFxuXFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuXFxufVxcblxcbi5kaWFsb2dDb250YWluZXI6OmJhY2tkcm9wIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyNTAsIDEwMCUsIDUwJSwgMC4yNSlcXG59XFxuXFxuLmZvcm1Db250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICBoZWlnaHQ6IDEwMCU7XFxuXFxuICBwYWRkaW5nOiAxZW07XFxuXFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxufVxcblxcbi5mb3JtQ29udGFpbmVyIC5mb3JtLWxpc3Qge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmZvcm1Db250YWluZXI+KiB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uZm9ybUNvbnRhaW5lciBsYWJlbCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5mb3JtQ29udGFpbmVyIGlucHV0IHtcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcblxcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgYm9yZGVyOiA1cHggc29saWQgcmdiKDExLCA0MywgNTQpO1xcblxcbn1cXG5cXG4uZm9ybUNvbnRhaW5lciAuYnV0dG9uc0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uZm9ybUNvbnRhaW5lciAuYnV0dG9uc0NvbnRhaW5lcj4qIHtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5mb3JtQ29udGFpbmVyIC5jYW5jZWxCdXR0b24sXFxuLmZvcm1Db250YWluZXIgLnN1Ym1pdEJ1dHRvbiB7XFxuICBwYWRkaW5nOiAxZW07XFxufVxcblxcbi5mb3JtQ29udGFpbmVyIC5jYW5jZWxCdXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxufVxcblxcbi5mb3JtQ29udGFpbmVyIC5zdWJtaXRCdXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICBib3JkZXI6IG5vbmU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG59XFxuXFxuLyogTWFpbiBwYWdlKi9cXG5cXG4ucHJvamVjdENvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBjb2xvcjogdmFyKC0tR2hvc3QtV2hpdGUpO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uT05MSU5FIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5PRkZMSU5FIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jdXJyZW50UGFnZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcblxcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4udG9wUm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogMCAxIDEwJTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1TY2FybGV0KTtcXG5cXG59XFxuXFxuLm1haW5UaXRsZSB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5kZXNjcmlwdGlvblRleHQge1xcbiAgZm9udC1zaXplOiAxLjlyZW07XFxufVxcblxcbi50b3BSb3dTZWNvbmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmxlZnRTaWRlU2VjdGlvbkl0ZW0ge1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuXFxuLm1pZGRsZVJvdyB7XFxuICBmbGV4OiAyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg0NTBweCwgMWZyKSk7XFxuICBnYXA6IDRweDtcXG5cXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuLm5vdGVBcmVhIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcblxcblxcbi5ib3R0b21Sb3cge1xcblxcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBib3R0b206IDIwcHg7XFxuICByaWdodDogMjBweDtcXG59XFxuXFxuLmFkZFRhc2tCdXR0b24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxuXFxuICBib3R0b206IDIwcHg7XFxuICByaWdodDogMjBweDtcXG59XFxuXFxuXFxuLyogSXRlbSBmb3JtKi9cXG5cXG4uaXRlbUZvcm0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICB0b3A6IDE5MHB4O1xcbiAgaGVpZ2h0OiA1MCU7XFxuICB3aWR0aDogNTAlO1xcblxcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbn1cXG5cXG4uaXRlbUZvcm06OmJhY2tkcm9wIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMTA1LCA1MyUsIDQ4JSwgMC4yNSlcXG59XFxuXFxuLmZvcm1Db250YWluZXJJdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgcGFkZGluZzogMWVtO1xcblxcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbn1cXG5cXG4uZm9ybUNvbnRhaW5lckl0ZW0+KiB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uZm9ybUxpc3RJdGVtIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5mb3JtTGlzdEl0ZW0gbGFiZWwge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4vKiAuZm9ybUNvbnRhaW5lckl0ZW0gaW5wdXQge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn0gKi9cXG5cXG4uZm9ybUxpc3RJdGVtIGlucHV0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLmZvcm1MaXN0SXRlbSB0ZXh0YXJlYSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5zZWNvbmRNaWRkbGVTZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLnNlY29uZE1pZGRsZVNlY3Rpb24+KiB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uYm90dG9tU2VjdGlvbkl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uYm90dG9tU2VjdGlvbkl0ZW0+YnV0dG9uIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi8qIENhcmQgSXRlbSovXFxuXFxuLmNhcmRJdGVtQ29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBlYWNoKTtcXG4gIGNvbG9yOiB2YXIoLS1Sb3lhbC1CbHVlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBtYXJnaW46IDIwcHg7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgYm9yZGVyOiBub25lO1xcblxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnByaW9yaXR5VGl0bGVTcGFuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMTUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1HaG9zdC1XaGl0ZSk7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbiAgcGFkZGluZy1yaWdodDogMjVweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4ubGVmdFNpZGVTZWN0aW9uSXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDAgMSAzMCU7XFxuICBwYWRkaW5nOiAyMHB4O1xcblxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVJveWFsLUJsdWUpO1xcbiAgY29sb3I6IHZhcigtLUdob3N0LVdoaXRlKTtcXG5cXG5cXG59XFxuXFxuLnRvcFNlY3Rpb25MZWZ0SXRlbSB7XFxuICBmbGV4OiAyO1xcbn1cXG5cXG4udGFza1NlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5taWRkbGVTZWN0aW9uTGVmdEl0ZW0ge1xcbiAgZmxleDogMTtcXG59XFxuXFxuLmJvdHRvbVNlY3Rpb25MZWZ0SXRlbSB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4ucmlnaHRTaWRlU2VjdGlvbkl0ZW0ge1xcbiAgZmxleDogMjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFj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QUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTs7Ozs7R0FLRzs7QUFFSDtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBLGFBQWE7O0FBRWI7RUFDRSw4QkFBOEI7RUFDOUIsd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7O0VBRVosa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG9DQUFvQztFQUNwQywyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsYUFBYTs7RUFFYixtQkFBbUI7O0VBRW5CLG1DQUFtQztFQUNuQyx5QkFBeUI7OztBQUczQjs7QUFFQTtFQUNFLE9BQU87QUFDVDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxPQUFPO0FBQ1RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1MaWNvcmljZTogIzBEMDEwNjtcXG4gIC0tWmFmZnJlOiAjMzYyNkE3O1xcbiAgLS1HbGF1Y291czogIzY1N0VENDtcXG4gIC0tU2NhcmxldDogI0ZGMzMxRjtcXG4gIC0tR2hvc3QtV2hpdGU6ICNGQkZCRkY7XFxuICAtLVJveWFsLUJsdWU6ICMwMDUzOUM7XFxuICAtLVBlYWNoOiAjRUVBNDdGO1xcbn1cXG5cXG5ib2R5LFxcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKixcXG4qOmJlZm9yZSxcXG4qOmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgLyogb3V0bGluZTogMnB4IHNvbGlkIGdyZWVuOyAqL1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcblxcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAyZnIgbWlubWF4KDIwMHB4LCAxZnIpO1xcbn1cXG5cXG4jaGVhZGVyQ29udGFpbmVyIHtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgZ3JpZC1jb2x1bW4tZW5kOiAtMTtcXG5cXG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgZ3JpZC1yb3ctZW5kOiAyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tTGljb3JpY2UpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tR2hvc3QtV2hpdGUpO1xcbiAgY29sb3I6IHZhcigtLUdob3N0LVdoaXRlKTtcXG59XFxuXFxuI3NpZGVDb250YWluZXIge1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICBncmlkLXJvdy1lbmQ6IDU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1MaWNvcmljZSk7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1HaG9zdC1XaGl0ZSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNkaXNwbGF5Q3VycmVudFBhZ2VDb250YWluZXIge1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICBncmlkLXJvdy1lbmQ6IDQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1MaWNvcmljZSk7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1HaG9zdC1XaGl0ZSk7XFxufVxcblxcbi8qIEhlYWRlciAqL1xcblxcblxcbi8qIFNpZGUgKi9cXG5cXG4uc2lkZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDE7XFxuICBjb2xvcjogdmFyKC0tR2hvc3QtV2hpdGUpO1xcbn1cXG5cXG4ucHJvamVjdHNUaXRsZSB7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi50b3BTZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgZmxleDogMTtcXG59XFxuXFxuLnRvZGF5Rm9sZGVyIHtcXG4gIGZsZXg6IDAgMSAxMCU7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1HaG9zdC1XaGl0ZSk7XFxuXFxufVxcblxcbi51cGNvbWluZ0ZvbGRlciB7XFxuICBmbGV4OiAwIDEgMTAlO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tR2hvc3QtV2hpdGUpO1xcblxcbn1cXG5cXG4uZm9sZGVyQ29udGFpbmVyIHtcXG4gIGZsZXg6IDE7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1HaG9zdC1XaGl0ZSk7XFxuXFxufVxcblxcbi5ib3R0b21TZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgZmxleDogMCAxIDEwJTtcXG59XFxuXFxuLmFkZFByb2plY3RDb250YWluZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uYWRkUHJvamVjdCB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLmxpRWxlbWVudCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICBjb2xvcjogdmFyKC0tR2hvc3QtV2hpdGUpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmxlZnRTaWRlRWxlbWVudFRhYiB7XFxuICBmbGV4OiAyO1xcbn1cXG5cXG4ucmlnaHRTaWRlRWxlbWVudFRhYiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZmxleDogMTtcXG59XFxuXFxuXFxuLmxpRWxlbWVudDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1TY2FybGV0KTtcXG59XFxuXFxuLyogTWFpbiAqL1xcblxcblxcbi5kaWFsb2dDb250YWluZXIsXFxuLmVkaXRJdGVtRm9ybSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIHRvcDogMTkwcHg7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIHdpZHRoOiA1MCU7XFxuXFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuXFxufVxcblxcbi5kaWFsb2dDb250YWluZXI6OmJhY2tkcm9wIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyNTAsIDEwMCUsIDUwJSwgMC4yNSlcXG59XFxuXFxuLmZvcm1Db250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICBoZWlnaHQ6IDEwMCU7XFxuXFxuICBwYWRkaW5nOiAxZW07XFxuXFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxufVxcblxcbi5mb3JtQ29udGFpbmVyIC5mb3JtLWxpc3Qge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmZvcm1Db250YWluZXI+KiB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uZm9ybUNvbnRhaW5lciBsYWJlbCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5mb3JtQ29udGFpbmVyIGlucHV0IHtcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcblxcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgYm9yZGVyOiA1cHggc29saWQgcmdiKDExLCA0MywgNTQpO1xcblxcbn1cXG5cXG4uZm9ybUNvbnRhaW5lciAuYnV0dG9uc0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uZm9ybUNvbnRhaW5lciAuYnV0dG9uc0NvbnRhaW5lcj4qIHtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5mb3JtQ29udGFpbmVyIC5jYW5jZWxCdXR0b24sXFxuLmZvcm1Db250YWluZXIgLnN1Ym1pdEJ1dHRvbiB7XFxuICBwYWRkaW5nOiAxZW07XFxufVxcblxcbi5mb3JtQ29udGFpbmVyIC5jYW5jZWxCdXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxufVxcblxcbi5mb3JtQ29udGFpbmVyIC5zdWJtaXRCdXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICBib3JkZXI6IG5vbmU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG59XFxuXFxuLyogTWFpbiBwYWdlKi9cXG5cXG4ucHJvamVjdENvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBjb2xvcjogdmFyKC0tR2hvc3QtV2hpdGUpO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uT05MSU5FIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5PRkZMSU5FIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jdXJyZW50UGFnZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcblxcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4udG9wUm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogMCAxIDEwJTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1TY2FybGV0KTtcXG5cXG59XFxuXFxuLm1haW5UaXRsZSB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5kZXNjcmlwdGlvblRleHQge1xcbiAgZm9udC1zaXplOiAxLjlyZW07XFxufVxcblxcbi50b3BSb3dTZWNvbmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmxlZnRTaWRlU2VjdGlvbkl0ZW0ge1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuXFxuLm1pZGRsZVJvdyB7XFxuICBmbGV4OiAyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg0NTBweCwgMWZyKSk7XFxuICBnYXA6IDRweDtcXG5cXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuLm5vdGVBcmVhIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcblxcblxcbi5ib3R0b21Sb3cge1xcblxcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBib3R0b206IDIwcHg7XFxuICByaWdodDogMjBweDtcXG59XFxuXFxuLmFkZFRhc2tCdXR0b24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxuXFxuICBib3R0b206IDIwcHg7XFxuICByaWdodDogMjBweDtcXG59XFxuXFxuXFxuLyogSXRlbSBmb3JtKi9cXG5cXG4uaXRlbUZvcm0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICB0b3A6IDE5MHB4O1xcbiAgaGVpZ2h0OiA1MCU7XFxuICB3aWR0aDogNTAlO1xcblxcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbn1cXG5cXG4uaXRlbUZvcm06OmJhY2tkcm9wIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMTA1LCA1MyUsIDQ4JSwgMC4yNSlcXG59XFxuXFxuLmZvcm1Db250YWluZXJJdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgcGFkZGluZzogMWVtO1xcblxcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbn1cXG5cXG4uZm9ybUNvbnRhaW5lckl0ZW0+KiB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uZm9ybUxpc3RJdGVtIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5mb3JtTGlzdEl0ZW0gbGFiZWwge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4vKiAuZm9ybUNvbnRhaW5lckl0ZW0gaW5wdXQge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn0gKi9cXG5cXG4uZm9ybUxpc3RJdGVtIGlucHV0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLmZvcm1MaXN0SXRlbSB0ZXh0YXJlYSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5zZWNvbmRNaWRkbGVTZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLnNlY29uZE1pZGRsZVNlY3Rpb24+KiB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uYm90dG9tU2VjdGlvbkl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uYm90dG9tU2VjdGlvbkl0ZW0+YnV0dG9uIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi8qIENhcmQgSXRlbSovXFxuXFxuLmNhcmRJdGVtQ29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBlYWNoKTtcXG4gIGNvbG9yOiB2YXIoLS1Sb3lhbC1CbHVlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBtYXJnaW46IDIwcHg7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgYm9yZGVyOiBub25lO1xcblxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnByaW9yaXR5VGl0bGVTcGFuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMTUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1HaG9zdC1XaGl0ZSk7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbiAgcGFkZGluZy1yaWdodDogMjVweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4ubGVmdFNpZGVTZWN0aW9uSXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDAgMSAzMCU7XFxuICBwYWRkaW5nOiAyMHB4O1xcblxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVJveWFsLUJsdWUpO1xcbiAgY29sb3I6IHZhcigtLUdob3N0LVdoaXRlKTtcXG5cXG5cXG59XFxuXFxuLnRvcFNlY3Rpb25MZWZ0SXRlbSB7XFxuICBmbGV4OiAyO1xcbn1cXG5cXG4udGFza1NlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5taWRkbGVTZWN0aW9uTGVmdEl0ZW0ge1xcbiAgZmxleDogMTtcXG59XFxuXFxuLmJvdHRvbVNlY3Rpb25MZWZ0SXRlbSB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4ucmlnaHRTaWRlU2VjdGlvbkl0ZW0ge1xcbiAgZmxleDogMjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHByb2plY3RzLCBjcmVhdGVQcm9qZWN0LCBnZXRQcm9qZWN0cyB9IGZyb20gXCIuLi9Nb2RlbC9jb2xsZWN0aW9uXCI7XG5pbXBvcnQgY3JlYXRlUHJvamVjdFRhYiBmcm9tIFwiLi4vVmlldy9jcmVhdGVUYWJQcm9qZWN0XCI7XG5pbXBvcnQgY3JlYXRlTWFpblRhYiBmcm9tIFwiLi4vVmlldy9jcmVhdGVNYWluVGFiXCI7XG5pbXBvcnQgeyBzYXZlUHJvamVjdFNUb2RvTFMgfSBmcm9tIFwiLi4vLi4vaGVscGZ1bF9mdW5jdGlvbnMvbG9jYWxTdG9yYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFByb2plY3QoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpO1xuXG4gIGNvbnN0IGl0ZW0gPSBjcmVhdGVQcm9qZWN0KHRpdGxlSW5wdXQudmFsdWUsIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUpO1xuXG4gIGNyZWF0ZVByb2plY3RUYWIoaXRlbS50aXRsZSwgaXRlbS5pZCk7XG4gIGNvbnN0IGNyZWF0ZU1haW4gPSBjcmVhdGVNYWluVGFiKGl0ZW0udGl0bGUsIGl0ZW0uZGVzY3JpcHRpb24sIGl0ZW0uaWQpO1xuICBjb25zdCBjcmVhdGVNYWluSUQgPSBjcmVhdGVNYWluLmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdGlkXCIpO1xuXG4gIHNhdmVQcm9qZWN0U1RvZG9MUyhcInByb2plY3RzXCIsIHByb2plY3RzKTtcblxuICBnZXRQcm9qZWN0cygpO1xuXG4gIHRpdGxlSW5wdXQudmFsdWUgPSBcIlwiO1xuICBkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gXCJcIjtcblxuICBjb25zdCBncmFiQWxsUHJvamVjdENvbnRhaW5lcnMgPVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdENvbnRhaW5lclwiKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGdyYWJBbGxQcm9qZWN0Q29udGFpbmVycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0SUQgPVxuICAgICAgZ3JhYkFsbFByb2plY3RDb250YWluZXJzW2ldLmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdGlkXCIpO1xuXG4gICAgaWYgKGN1cnJlbnRQcm9qZWN0SUQgPT09IGNyZWF0ZU1haW5JRCkge1xuICAgICAgZ3JhYkFsbFByb2plY3RDb250YWluZXJzW2ldLmNsYXNzTGlzdC5hZGQoXCJPTkxJTkVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdyYWJBbGxQcm9qZWN0Q29udGFpbmVyc1tpXS5jbGFzc0xpc3QuYWRkKFwiT0ZGTElORVwiKTtcbiAgICB9XG4gIH1cblxuICAvLyBGaXJzdCwgZ2l2ZSBvdXIgbmV3IGNyZWF0ZWQgcHJvamVjdFRhYiBhIGNsYXNzIG9mIE9OTElORVxuICAvLyBOZXh0LCB3ZSB1c2UgYSBmb3IgbG9vcCB0byBnbyB0aHJvdWdoIGVhY2ggcHJvamVjdC4gSUYgY2xhc3MgPT09IHRydWUsIGNvbnNvbGUubG9nXG4gIC8vIEVsc2UsIHNldCBhbGwgb3RoZXIgcHJvamVjdHMgY2xhc3MgdG8gT0ZGTElORVxuXG4gIC8vIGxpRWxlbWVudENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgLy8gICBjb25zdCB0ZXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50UGFnZVwiKS5jaGlsZHJlbjtcblxuICAvLyAgIGNvbnN0IGN1cnJlbnRJRCA9IGUuY3VycmVudFRhcmdldC5pZDtcblxuICAvLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGVzdC5sZW5ndGg7IGkgKz0gMSkge1xuICAvLyAgICAgaWYgKGN1cnJlbnRJRCA9PT0gdGVzdFtpXS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RpZFwiKSkge1xuICAvLyAgICAgICB0ZXN0W2ldLmNsYXNzTGlzdC5hZGQoXCJPTkxJTkVcIik7XG4gIC8vICAgICAgIHRlc3RbaV0uY2xhc3NMaXN0LnJlbW92ZShcIk9GRkxJTkVcIik7XG4gIC8vICAgICB9IGVsc2Uge1xuICAvLyAgICAgICB0ZXN0W2ldLmNsYXNzTGlzdC5hZGQoXCJPRkZMSU5FXCIpO1xuICAvLyAgICAgICB0ZXN0W2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJPTkxJTkVcIik7XG4gIC8vICAgICB9XG4gIC8vICAgfVxuXG4gIC8vICAgLy8gTm93LCBJIG5lZWQgdG8gbWFrZSB0aGlzIHNwZWNpZmljIElEIGZyb20gdGhlIG1haW5QYWdlIGJlIGFjdGl2ZSBvciBjbGFzcyBhY3RpdmVcbiAgLy8gfSk7XG59XG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuLi9Nb2RlbC9jb2xsZWN0aW9uXCI7XG5pbXBvcnQgY3JlYXRlSXRlbUNhcmQgZnJvbSBcIi4uL1ZpZXcvY3JlYXRlQ2FyZFZpc3VhbFwiO1xuaW1wb3J0IG9wZW5JdGVtRm9ybSBmcm9tIFwiLi9vcGVuSXRlbUZvcm1cIjtcbmltcG9ydCB7IHNhdmVQcm9qZWN0U1RvZG9MUyB9IGZyb20gXCIuLi8uLi9oZWxwZnVsX2Z1bmN0aW9ucy9sb2NhbFN0b3JhZ2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkSXRlbShlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcblxuICBvcGVuSXRlbUZvcm0oKTtcblxuICAvLyBXZSB3YW50IHRvIGdvIHRocm91Z2ggY3VycmVudFBhZ2UgY2hpbGRyZW4gYW5kIGZpbmQgd2hpY2ggSUQgbWF0Y2hlcyB3aXRoIG91ciBlLnRhcmdldC5pZCwgaWYgc28gd2UgYXBwZW5kIGNyZWF0ZVZpc3VhbEl0ZW1DYXJkXG5cbiAgY29uc3QgdGFza0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrXCIpO1xuICBjb25zdCBub3RlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGVcIik7XG4gIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVwiKTtcbiAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0XCIpO1xuXG4gIGNvbnN0IGRpYWxvZ0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaXRlbUZvcm1cIik7XG5cbiAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pdGVtQ2FuY2VsXCIpO1xuXG4gIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRpYWxvZ0NvbnRhaW5lci5jbG9zZSgpO1xuICAgIGRpYWxvZ0NvbnRhaW5lci5yZW1vdmUoKTtcbiAgfSk7XG5cbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pdGVtU3VibWl0XCIpO1xuICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBtYWluUGFnZXMyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0Q29udGFpbmVyXCIpO1xuXG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgaWYgKHByb2plY3QuaWQgPT09IGUudGFyZ2V0LmlkKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1NYWRlID0gcHJvamVjdC5jcmVhdGVUb2RvSXRlbShcbiAgICAgICAgICB0YXNrSW5wdXQudmFsdWUsXG4gICAgICAgICAgZGF0ZUlucHV0LnZhbHVlLFxuICAgICAgICAgIHByaW9yaXR5SW5wdXQudmFsdWUsXG4gICAgICAgICAgbm90ZUlucHV0LnZhbHVlXG4gICAgICAgICk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYWluUGFnZXMyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgY29uc3QgcGFnZUlEID0gbWFpblBhZ2VzMltpXS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RpZFwiKTtcblxuICAgICAgICAgIGlmIChwYWdlSUQgPT09IGUudGFyZ2V0LmlkKSB7XG4gICAgICAgICAgICBtYWluUGFnZXMyW2ldXG4gICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLm1pZGRsZVJvd1wiKVxuICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgICAgY3JlYXRlSXRlbUNhcmQoXG4gICAgICAgICAgICAgICAgICBpdGVtTWFkZS50YXNrLFxuICAgICAgICAgICAgICAgICAgaXRlbU1hZGUubm90ZXMsXG4gICAgICAgICAgICAgICAgICBpdGVtTWFkZS5wcmlvcml0eSxcbiAgICAgICAgICAgICAgICAgIGl0ZW1NYWRlLmRhdGUsXG4gICAgICAgICAgICAgICAgICBpdGVtTWFkZS5pZFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHNhdmVQcm9qZWN0U1RvZG9MUyhcInByb2plY3RzXCIsIHByb2plY3RzKTtcblxuICAgIGRpYWxvZ0NvbnRhaW5lci5jbG9zZSgpO1xuICAgIGRpYWxvZ0NvbnRhaW5lci5yZW1vdmUoKTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuLi9Nb2RlbC9jb2xsZWN0aW9uXCI7XG5pbXBvcnQgeyBzYXZlUHJvamVjdFNUb2RvTFMgfSBmcm9tIFwiLi4vLi4vaGVscGZ1bF9mdW5jdGlvbnMvbG9jYWxTdG9yYWdlXCI7XG5cbmZ1bmN0aW9uIGZpbHRlckl0ZW1EZXBlbmRpbmdPblN0YXR1cyhpZCkge1xuICBjb25zdCBncmFiQWxsQ2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmRJdGVtQ29udGFpbmVyXCIpO1xuXG4gIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBjb21wbGV0ZVRhc2tzQXJyYXkgPSBwcm9qZWN0LmNvbXBsZXRlVGFza3M7XG4gICAgY29uc3QgdGFza0FycmF5ID0gcHJvamVjdC50YXNrcztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tBcnJheS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgdGFza0lEID0gdGFza0FycmF5W2ldLmlkO1xuXG4gICAgICBpZiAoaWQgPT09IHRhc2tJRCkge1xuICAgICAgICBjb25zdCBpdGVtU3RhdHVzID0gdGFza0FycmF5W2ldLnN0YXR1cztcbiAgICAgICAgaWYgKGl0ZW1TdGF0dXMgPT09IFwiY29tcGxldGVcIikge1xuICAgICAgICAgIGNvbXBsZXRlVGFza3NBcnJheS5wdXNoKHRhc2tBcnJheVtpXSk7XG4gICAgICAgICAgcHJvamVjdC5yZW1vdmVUb2RvSXRlbShpZCk7XG5cbiAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdyYWJBbGxDYXJkcy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgICAgY29uc3QgY2FyZElEID0gZ3JhYkFsbENhcmRzW2pdLmdldEF0dHJpYnV0ZShcImRhdGEtY2FyZGlkXCIpO1xuICAgICAgICAgICAgaWYgKGlkID09PSBjYXJkSUQpIHtcbiAgICAgICAgICAgICAgZ3JhYkFsbENhcmRzW2ldLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICAgIHNhdmVQcm9qZWN0U1RvZG9MUyhcInByb2plY3RzXCIsIHByb2plY3RzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gTm93IHJlbW92ZSBjYXJkXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIC8vIFRoZW4sIHdlIHdhbnQgdG8gY2hlY2sgaWYgYSBjb25kaXRpb24gaXMgbWV0IGlmIHN0YXR1cyBpcyAnY29tcGxldGUnLiBJRiBTTywgd2Ugd2lsbCBtb3ZlIHRoYXQgc3BlY2lmaWMgaXRlbSB0byBhbiBhcnJheSBjYWxsZWQgJ2NvbXBsZXRlZCB0b2Rvc2AgZm9yIHRoYXQgc3BlY2lmaWMgcHJvamVjdFxufVxuXG5mdW5jdGlvbiBjaGFuZ2VJdGVtU3RhdHVzKGUpIHtcbiAgY29uc3QgY2hlY2tpbmdTdGF0dXMgPSBlLnRhcmdldC5jaGVja2VkO1xuICBjb25zdCBjaGVja2JveElEID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zdGF0dXNpZFwiKTtcblxuICBpZiAoY2hlY2tpbmdTdGF0dXMgPT09IHRydWUpIHtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBjb25zdCB0YXNrc0FycmF5ID0gcHJvamVjdC50YXNrcztcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3NBcnJheS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCB0YXNrSUQgPSB0YXNrc0FycmF5W2ldLmlkO1xuICAgICAgICBpZiAodGFza0lEID09PSBjaGVja2JveElEKSB7XG4gICAgICAgICAgdGFza3NBcnJheVtpXS5zdGF0dXMgPSBcImNvbXBsZXRlXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZpbHRlckl0ZW1EZXBlbmRpbmdPblN0YXR1cyhjaGVja2JveElEKTtcbn1cblxuZXhwb3J0IHsgY2hhbmdlSXRlbVN0YXR1cywgZmlsdGVySXRlbURlcGVuZGluZ09uU3RhdHVzIH07XG5cbi8qIFxuXG5UaGUgbWFpbiBpZGVhIG9mIHRoaXMgcGFydCBvZiB0aGUgcHJvamVjdCBpcyB0byBtYWtlIGBzZXR0aW5nIGNvbXBsZXRlIHRvZG9zYFxuXG5XZSBuZWVkIHRvIGZpZ3VyZSBvdXQgaG93IHdlJ2xsIGRvIHRoYXQsIHNvIFxuXG5tYWluIHB1cnBvc2U6IHN3aXRjaCB0aGUgc3RhdHVzIGZyb20gJ2luY29tcGxldGUnIHRvICdjb21wbGV0ZSdcbisgV2hlbiBwcmVzc2luZyBvbiB0aGUgY2hlY2tib3ggaW5wdXQsIHdlIHdpbGwgc3dpdGNoIHRoYXQgc3BlY2lmaWMgaXRlbSBzdGF0dXMgdG8gJ2NvbXBsZXRlJ1xuXG5cbiovXG4iLCJpbXBvcnQgeyBkZWxldGVQcm9qZWN0LCBwcm9qZWN0cyB9IGZyb20gXCIuLi9Nb2RlbC9jb2xsZWN0aW9uXCI7XG5pbXBvcnQgeyBzYXZlUHJvamVjdFNUb2RvTFMgfSBmcm9tIFwiLi4vLi4vaGVscGZ1bF9mdW5jdGlvbnMvbG9jYWxTdG9yYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlbFByb2plY3QoZSkge1xuICAvLyBGb3IgZGVsZXRpbmcsIHdlIGp1c3QgbmVlZCB0byByZW1vdmUgdGhlIG9iamVjdFxuICAvLyBSZW1vdmUgdGhlIERPTSBlbGVtZW50cyByZWxhdGVkIHRvIHRoYXQgb2JqZWN0XG5cbiAgY29uc3QgZGVsSUQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWRlbGV0ZWlkXCIpO1xuXG4gIGNvbnN0IHByb2plY3RUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saUVsZW1lbnRcIik7XG4gIGNvbnN0IHByb2plY3RDb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0Q29udGFpbmVyXCIpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdFRhYnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBwcm9qZWN0SUQgPSBwcm9qZWN0VGFic1tpXS5pZDtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHByb2plY3RDb250YWluZXJzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVySUQgPVxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyc1tqXS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RpZFwiKTtcblxuICAgICAgaWYgKGRlbElEID09PSBwcm9qZWN0SUQgJiYgZGVsSUQgPT09IHByb2plY3RDb250YWluZXJJRCkge1xuICAgICAgICBkZWxldGVQcm9qZWN0KGRlbElEKTtcbiAgICAgICAgc2F2ZVByb2plY3RTVG9kb0xTKFwicHJvamVjdHNcIiwgcHJvamVjdHMpO1xuXG4gICAgICAgIHByb2plY3RUYWJzW2ldLnJlbW92ZSgpO1xuICAgICAgICBwcm9qZWN0Q29udGFpbmVyc1tqXS5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBvcGVuRWRpdEZvcm0gZnJvbSBcIi4vb3BlbkVkaXRQcm9qZWN0XCI7XG5pbXBvcnQge1xuICB1cGRhdGVUaXRsZUFuZERlc2NyaXB0aW9uLFxuICBmaW5kQnlJRCxcbiAgcHJvamVjdHMsXG59IGZyb20gXCIuLi9Nb2RlbC9jb2xsZWN0aW9uXCI7XG5pbXBvcnQgeyBzYXZlUHJvamVjdFNUb2RvTFMgfSBmcm9tIFwiLi4vLi4vaGVscGZ1bF9mdW5jdGlvbnMvbG9jYWxTdG9yYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVkaXRGb3JtKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIG9wZW5FZGl0Rm9ybSgpO1xuXG4gIGNvbnN0IGVkaXREaWFsb2dDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXRQcm9qZWN0XCIpO1xuXG4gIGNvbnN0IGdldE5ld1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0VGl0bGVcIik7XG5cbiAgY29uc3QgZ2V0TmV3RGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXREZXNjcmlwdGlvblwiKTtcblxuICBjb25zdCBnZXRDdXJyZW50SUQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWVkaXRpZFwiKTtcblxuICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXRDYW5jZWxCdXR0b25cIik7XG5cbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0U3VibWl0QnV0dG9uXCIpO1xuXG4gIC8vIFdlIG5lZWQgdG8gZ3JhYiB0aGUgdGFiLCBhbmQgbWFpbiB0aXRsZSBhbmQgZGVzY3JpcHRpb25cblxuICBjb25zdCBsaUVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saUVsZW1lbnRcIik7XG5cbiAgY29uc3QgcHJvamVjdENvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RDb250YWluZXJcIik7XG5cbiAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZWRpdERpYWxvZ0NvbnRhaW5lci5jbG9zZSgpO1xuICAgIGVkaXREaWFsb2dDb250YWluZXIucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHVwZGF0ZVRpdGxlQW5kRGVzY3JpcHRpb24oXG4gICAgICBnZXROZXdUaXRsZS52YWx1ZSxcbiAgICAgIGdldE5ld0Rlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgZ2V0Q3VycmVudElEXG4gICAgKTtcblxuICAgIGNvbnN0IGl0ZW1Gb3VuZCA9IGZpbmRCeUlEKGdldEN1cnJlbnRJRCk7XG4gICAgY29uc29sZS5sb2coaXRlbUZvdW5kKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlFbGVtZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgZ2V0Q3VycmVudExpRWxlbWVudElEID0gbGlFbGVtZW50c1tpXS5pZDtcblxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBwcm9qZWN0Q29udGFpbmVycy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBjb25zdCBnZXRDdXJyZW50UHJvamVjdElEID1cbiAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyc1tqXS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RpZFwiKTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgZ2V0Q3VycmVudElEID09PSBnZXRDdXJyZW50UHJvamVjdElEICYmXG4gICAgICAgICAgZ2V0Q3VycmVudElEID09PSBnZXRDdXJyZW50TGlFbGVtZW50SURcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgdGl0bGVUYWIgPSBsaUVsZW1lbnRzW2ldLnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGVUYWJcIik7XG4gICAgICAgICAgdGl0bGVUYWIudGV4dENvbnRlbnQgPSBgJHtpdGVtRm91bmQudGl0bGV9YDtcblxuICAgICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IHByb2plY3RDb250YWluZXJzW2pdLnF1ZXJ5U2VsZWN0b3IoXCIubWFpblRpdGxlXCIpO1xuICAgICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IGAke2l0ZW1Gb3VuZC50aXRsZX1gO1xuXG4gICAgICAgICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uID1cbiAgICAgICAgICAgIHByb2plY3RDb250YWluZXJzW2pdLnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY3JpcHRpb25UZXh0XCIpO1xuICAgICAgICAgIHByb2plY3REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGAke2l0ZW1Gb3VuZC5kZXNjcmlwdGlvbn1gO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZWRpdERpYWxvZ0NvbnRhaW5lci5jbG9zZSgpO1xuICAgIGVkaXREaWFsb2dDb250YWluZXIucmVtb3ZlKCk7XG4gICAgc2F2ZVByb2plY3RTVG9kb0xTKFwicHJvamVjdHNcIiwgcHJvamVjdHMpO1xuICB9KTtcbn1cbiIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4uL01vZGVsL2NvbGxlY3Rpb25cIjtcbmltcG9ydCBvcGVuRWRpdEZvcm0gZnJvbSBcIi4vb3BlbkVkaXRGb3JtXCI7XG5pbXBvcnQgeyBzYXZlUHJvamVjdFNUb2RvTFMgfSBmcm9tIFwiLi4vLi4vaGVscGZ1bF9mdW5jdGlvbnMvbG9jYWxTdG9yYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVkaXRUYXNrKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBvcGVuRWRpdEZvcm0oKTtcblxuICBjb25zdCBidXR0b25JRCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtZWRpdGlkXCIpO1xuXG4gIGNvbnN0IGdldFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRUYXNrXCIpO1xuICBjb25zdCBnZXROb3RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0Tm90ZVwiKTtcbiAgY29uc3QgZ2V0RGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdERhdGVcIik7XG4gIGNvbnN0IGdldFByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0U2VsZWN0XCIpO1xuXG4gIGNvbnN0IGVkaXREaWFsb2dDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXRJdGVtRm9ybVwiKTtcblxuICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXRJdGVtQ2FuY2VsXCIpO1xuXG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdEl0ZW1TdWJtaXRcIik7XG5cbiAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZWRpdERpYWxvZ0NvbnRhaW5lci5jbG9zZSgpO1xuICAgIGVkaXREaWFsb2dDb250YWluZXIucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIHByb2plY3QudXBkYXRlVG9kb0l0ZW0oXG4gICAgICAgIGJ1dHRvbklELFxuICAgICAgICBnZXRUYXNrLnZhbHVlLFxuICAgICAgICBnZXREYXRlLnZhbHVlLFxuICAgICAgICBnZXRQcmlvcml0eS52YWx1ZSxcbiAgICAgICAgZ2V0Tm90ZS52YWx1ZVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIC8vIE5vdyB3ZSB1cGRhdGUgdGhlIGNhcmRcbiAgICBjb25zdCBncmFiQWxsQ2FyZFZpc3VhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmRJdGVtQ29udGFpbmVyXCIpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncmFiQWxsQ2FyZFZpc3VhbHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGNhcmRJRCA9IGdyYWJBbGxDYXJkVmlzdWFsc1tpXS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNhcmRpZFwiKTtcbiAgICAgIGNvbnN0IGNoYW5nZVRhc2tUZXh0ID0gZ3JhYkFsbENhcmRWaXN1YWxzW2ldLnF1ZXJ5U2VsZWN0b3IoXCIubGFiZWxUYXNrXCIpO1xuICAgICAgY29uc3QgY2hhbmdlTm90ZVRleHQgPSBncmFiQWxsQ2FyZFZpc3VhbHNbaV0ucXVlcnlTZWxlY3RvcihcIi5ub3RlQXJlYVwiKTtcbiAgICAgIGNvbnN0IGNoYW5nZURhdGUgPSBncmFiQWxsQ2FyZFZpc3VhbHNbaV0ucXVlcnlTZWxlY3RvcihcIi5pbnB1dERhdGVcIik7XG4gICAgICBjb25zdCBjaGFuZ2VQcmlvcml0eSA9XG4gICAgICAgIGdyYWJBbGxDYXJkVmlzdWFsc1tpXS5xdWVyeVNlbGVjdG9yKFwiLnByaW9yaXR5VGl0bGVTcGFuXCIpO1xuXG4gICAgICBpZiAoY2FyZElEID09PSBidXR0b25JRCkge1xuICAgICAgICAvLyBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIC8vICAgY29uc3QgaXRlbUZvdW5kID0gcHJvamVjdC5ieUlEKGNhcmRJRCk7XG4gICAgICAgIC8vICAgaWYgKGl0ZW1Gb3VuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIklUIFJFVFVSTkVEIFVOREVGSU5FRFwiKTtcbiAgICAgICAgLy8gICAgIGNvbnRpbnVlO1xuICAgICAgICAvLyAgIH1cbiAgICAgICAgLy8gY2hhbmdlVGFza1RleHQudGV4dENvbnRlbnQgPSBgJHtpdGVtRm91bmQudGFza31gO1xuICAgICAgICAvLyBjaGFuZ2VOb3RlVGV4dC50ZXh0Q29udGVudCA9IGAke2l0ZW1Gb3VuZC5ub3Rlc31gO1xuICAgICAgICAvLyBjaGFuZ2VEYXRlLnRleHRDb250ZW50ID0gYCR7aXRlbUZvdW5kLmRhdGV9YDtcbiAgICAgICAgLy8gY2hhbmdlUHJpb3JpdHkudGV4dENvbnRlbnQgPSBgJHtpdGVtRm91bmQucHJpb3JpdHl9YDtcbiAgICAgICAgLy8gfSk7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgcHJvamVjdHMpIHtcbiAgICAgICAgICBjb25zdCBpdGVtRm91bmQgPSBwcm9qZWN0LmJ5SUQoY2FyZElEKTtcbiAgICAgICAgICBpZiAoaXRlbUZvdW5kID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNoYW5nZVRhc2tUZXh0LnRleHRDb250ZW50ID0gYCR7aXRlbUZvdW5kLnRhc2t9YDtcbiAgICAgICAgICBjaGFuZ2VOb3RlVGV4dC50ZXh0Q29udGVudCA9IGAke2l0ZW1Gb3VuZC5ub3Rlc31gO1xuICAgICAgICAgIGNoYW5nZURhdGUudGV4dENvbnRlbnQgPSBgJHtpdGVtRm91bmQuZGF0ZX1gO1xuICAgICAgICAgIGNoYW5nZVByaW9yaXR5LnRleHRDb250ZW50ID0gYCR7aXRlbUZvdW5kLnByaW9yaXR5fWA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBlZGl0RGlhbG9nQ29udGFpbmVyLmNsb3NlKCk7XG4gICAgZWRpdERpYWxvZ0NvbnRhaW5lci5yZW1vdmUoKTtcbiAgICBzYXZlUHJvamVjdFNUb2RvTFMoXCJwcm9qZWN0c1wiLCBwcm9qZWN0cyk7XG4gIH0pO1xuXG4gIC8vIE5FVyBQTEFOXG4gIC8qIFxuICBTbyB3ZSBuZWVkIHRvIGZpbmQgdGhlIHRhc2sgb2JqZWN0IElEIHRoYXQgbWF0Y2hlcyB3aXRoIHRoZSBjYXJkIGNob3NlblxuICBPbmNlIHdlIGRvLCB3ZSBzYXZlIHRoYXQgdmFsdWUgaW50byBhIHZhcmlhYmxlIGFuZCB1c2UgaXQncyBnZXR0ZXJzIGluc3RlYWQgb2YgdGhlIGZvcm0gdmFsdWVzXG4gKi9cbn1cbiIsImltcG9ydCBjcmVhdGVFZGl0Rm9ybSBmcm9tIFwiLi4vVmlldy9jcmVhdGVFZGl0Rm9ybVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvcGVuRWRpdEZvcm0oKSB7XG4gIGNyZWF0ZUVkaXRGb3JtKCk7XG4gIGNvbnN0IGZvcm1PcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0SXRlbUZvcm1cIik7XG4gIGZvcm1PcGVuLnNob3dNb2RhbCgpO1xufVxuIiwiaW1wb3J0IGNyZWF0ZVByb2plY3RGb3JtIGZyb20gXCIuLi9WaWV3L2NyZWF0ZUVkaXRQcm9qZWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9wZW5FZGl0Rm9ybSgpIHtcbiAgY3JlYXRlUHJvamVjdEZvcm0oKTtcbiAgY29uc3QgZm9ybU9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXRQcm9qZWN0XCIpO1xuICBmb3JtT3Blbi5zaG93TW9kYWwoKTtcbn1cbiIsImltcG9ydCBjcmVhdGVJdGVtRm9ybSBmcm9tIFwiLi4vVmlldy9jcmVhdGVJdGVtRm9ybVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvcGVuSXRlbUZvcm0oKSB7XG4gIGNyZWF0ZUl0ZW1Gb3JtKCk7XG4gIGNvbnN0IGZvcm1PcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pdGVtRm9ybVwiKTtcbiAgZm9ybU9wZW4uc2hvd01vZGFsKCk7XG59XG4iLCJpbXBvcnQgY3JlYXRlUHJvamVjdEZvcm0gZnJvbSBcIi4uL1ZpZXcvY3JlYXRlUHJvamVjdEZvcm1cIjtcblxuY3JlYXRlUHJvamVjdEZvcm0oKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3BlbkZvcm0oKSB7XG4gIGNvbnN0IGZvcm1PcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaWFsb2dDb250YWluZXJcIik7XG4gIGZvcm1PcGVuLnNob3dNb2RhbCgpO1xufVxuIiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi4vTW9kZWwvY29sbGVjdGlvblwiO1xuaW1wb3J0IHsgc2F2ZVByb2plY3RTVG9kb0xTIH0gZnJvbSBcIi4uLy4uL2hlbHBmdWxfZnVuY3Rpb25zL2xvY2FsU3RvcmFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW1vdmVUYXNrKGUpIHtcbiAgLy8gVGhlIHB1cnBvc2UgaXMgdG8gcmVtb3ZlIGl0ZW0gZnJvbSB0aGVpciBvYmplY3QgYW5kIGZyb20gdGhlIGRpc3BsYXkgaXRlbXNcbiAgLy8gV2UgaGF2ZSBhIG1ldGhvZCBjYWxsZWQgcmVtb3ZlVG9kb0l0ZW0oaXRlbSlcbiAgLy8gIFdoaWNoIHdpbGwgbmVlZCB0aGUgaXRlbS5pZCBvZiB0aGUgaXRlbSB3ZSBzZWxlY3RcblxuICAvLyBTbywgaG93IHdpbGxsIHRoaXMgcGxheSBvdXRcbiAgLy8gMS4gVGhlIHVzZXIgd2lsbCBwcmVzcyBvbiB0aGUgYGRlbGV0ZWAgYnV0dG9uXG4gIC8vIDIuIFdoZW4gZG9pbmcgc28sIHdlIHdpbGwgZ3JhYiB0aGF0IGl0ZW0gSUQgd2hlcmUgd2UgcHJlc3NlZCBgZGVsZXRlYFxuICAvLyAyYS4gV2UgbmVlZCB0byByZW1vdmUgdGhlIHZpc3VhbCBjYXJkIGZpcnN0XG4gIC8vIDMuIE5leHQgd2Ugd2lsbCBnZXQgdGhhdCBwcm9qZWN0IG9iamVjdCwgY2FsbCBpdCdzIG1ldGhvZCBgYHJlbW92ZVRvZG9JdGVtYFxuICAvLyAgM2EuIFdlIHdpbGwgaGF2ZSB0byBjaGVjayB3aGljaCBwcm9qZWN0IHdlIGFyZSBkZWFsaW5nIHdpdGhcbiAgLy8gIDNiLiBPbmNlIHdlIGdldCB0aGUgY29ycmVjdCBwcm9qZWN0LCB3ZSB3aWxsIG5lZWQgdG8gaXRlcmF0ZSB0aHJvdWdoIGl0J3MgdGFzayBpdGVtc1xuICAvLyAgM2MuIFdlIG5lZWQgdG8gY2hlY2sgaWYgdGFza0l0ZW0gSUQgaXMgZXF1YWwgdG8gb3VyIGl0ZW1JRCwgaWYgc28uIHdlIGNhbGwgdGhlIG1ldGhvZCB0byByZW1vdmVcbiAgLy8gNC4gSW5zZXQgaXRlbUlEIGludG8gYXJndW1lbnQgYW5kIGhvcGUgZm9yIHRoZSBiZXN0XG4gIC8vIDUuIE5leHQsIHdlIHRyeSB0byByZW1vdmUgdGhlIHZpc3VhbCBjYXJkIGFzIHdlbGxcblxuICBjb25zdCBidXR0b25JRCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtZGVsZXRlaWRcIik7XG5cbiAgY29uc3QgZ3JhYkFsbENhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXJkSXRlbUNvbnRhaW5lclwiKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGdyYWJBbGxDYXJkcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGNhcmRJRCA9IGdyYWJBbGxDYXJkc1tpXS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNhcmRpZFwiKTtcbiAgICBpZiAoYnV0dG9uSUQgPT09IGNhcmRJRCkge1xuICAgICAgZ3JhYkFsbENhcmRzW2ldLnJlbW92ZSgpO1xuXG4gICAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIHByb2plY3QucmVtb3ZlVG9kb0l0ZW0oYnV0dG9uSUQpO1xuICAgICAgfSk7XG4gICAgICBzYXZlUHJvamVjdFNUb2RvTFMoXCJwcm9qZWN0c1wiLCBwcm9qZWN0cyk7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2dnbGluZ1Byb2plY3RWaWV3KGUpIHtcbiAgLy8gV2UgbmVlZCB0byBiZSBhYmxlIHRvIGNsaWNrIG9uIGEgcHJvamVjdCB0byB2aWV3IGl0J3MgY29udGVudHMsIHdoaWxlIHRoZSBvdGhlcnMgYXJlIGhpZGRlblxuXG4gIGNvbnN0IGxpRWxlbWVudElEID0gZS5jdXJyZW50VGFyZ2V0LmlkO1xuXG4gIC8vIFdlIGNsaWNrIG9uIFwiTGlFbGVtZW50XCIsIHdoZW4gZG9pbmcgc28uIEl0IHdpbGwgc2hvd2Nhc2UgdGhlIE1haW50YWIgY29ubmVjdGVkLCAoSWQgPT09IGlkKVxuICAvLyBXZSBoYXZlIHRvIGdyYWIgYWxsIHByb2plY3RDb250YWluZXJzLiwgZG8gYW4gaWYgc3RhdGVtZW50IGlmIHRoZSBsaUVMZW1lbnQgSUQgPT09IHByb2plY3RDb250YWluZXJzSUQsIGNoYW5nZSBpdCdzIGNsYXNzIHRvIE9OTElORSBhbmQgdGhlIHJlc3QgT0ZGTElORVxuXG4gIGNvbnN0IGdyYWJBbGxQcm9qZWN0Q29udGFpbmVycyA9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0Q29udGFpbmVyXCIpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JhYkFsbFByb2plY3RDb250YWluZXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lcklEID1cbiAgICAgIGdyYWJBbGxQcm9qZWN0Q29udGFpbmVyc1tpXS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RpZFwiKTtcbiAgICBpZiAocHJvamVjdENvbnRhaW5lcklEID09PSBsaUVsZW1lbnRJRCkge1xuICAgICAgZ3JhYkFsbFByb2plY3RDb250YWluZXJzW2ldLmNsYXNzTGlzdC5hZGQoXCJPTkxJTkVcIik7XG4gICAgICBncmFiQWxsUHJvamVjdENvbnRhaW5lcnNbaV0uY2xhc3NMaXN0LnJlbW92ZShcIk9GRkxJTkVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdyYWJBbGxQcm9qZWN0Q29udGFpbmVyc1tpXS5jbGFzc0xpc3QuYWRkKFwiT0ZGTElORVwiKTtcbiAgICAgIGdyYWJBbGxQcm9qZWN0Q29udGFpbmVyc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwiT05MSU5FXCIpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgbG9va0ZvckRhdGFJbkxTIH0gZnJvbSBcIi4uLy4uL2hlbHBmdWxfZnVuY3Rpb25zL2xvY2FsU3RvcmFnZVwiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFRlbXBsYXRlXCI7XG5pbXBvcnQgY3JlYXRlTWFpblRhYiBmcm9tIFwiLi4vVmlldy9jcmVhdGVNYWluVGFiXCI7XG5pbXBvcnQgY3JlYXRlUHJvamVjdFRhYiBmcm9tIFwiLi4vVmlldy9jcmVhdGVUYWJQcm9qZWN0XCI7XG5pbXBvcnQgY3JlYXRlSXRlbUNhcmQgZnJvbSBcIi4uL1ZpZXcvY3JlYXRlQ2FyZFZpc3VhbFwiO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLW11dGFibGUtZXhwb3J0c1xubGV0IHByb2plY3RzID0gW107XG5cbmNvbnN0IGNyZWF0ZVByb2plY3QgPSAodGl0bGUsIGRlc2NyaXB0aW9uKSA9PiB7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24pO1xuICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuXG4gIHJldHVybiBuZXdQcm9qZWN0O1xufTtcblxuY29uc3QgZGVsZXRlUHJvamVjdCA9IChpdGVtKSA9PiB7XG4gIHByb2plY3RzID0gcHJvamVjdHMuZmlsdGVyKChvYmplY3QpID0+IG9iamVjdC5pZCAhPT0gaXRlbSk7XG59O1xuXG5jb25zdCBmaW5kQnlJRCA9IChpZCkgPT4gcHJvamVjdHMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gaWQpO1xuXG5jb25zdCB1cGRhdGVUaXRsZUFuZERlc2NyaXB0aW9uID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgaWQpID0+IHtcbiAgY29uc3QgaXRlbSA9IGZpbmRCeUlEKGlkKTtcblxuICBpdGVtLnRpdGxlID0gdGl0bGU7XG4gIGl0ZW0uZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbn07XG5cbmNvbnN0IHJlYWRJbmZvcm1hdGlvbiA9ICgpID0+IHtcbiAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4gcHJvamVjdCk7XG59O1xuXG4vLyBTdGlsbCB0aGlua2luZyBhYm91dCBob3cgSSdsbCB1c2Ugc2V0UHJvamVjdHNcbmNvbnN0IHNldFByb2plY3RzID0gKHZhbHVlKSA9PiBwcm9qZWN0cy5wdXNoKHZhbHVlKTtcblxuY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiBwcm9qZWN0cztcblxuY29uc3QgcmV0cmlldmVGcm9tTG9jYWxTdG9yYWdlID0gKGtleU5hbWUpID0+IHtcbiAgY29uc3QgYXJyYXlXaXRoT2JqZWN0cyA9IGxvb2tGb3JEYXRhSW5MUyhrZXlOYW1lKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5V2l0aE9iamVjdHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBpdGVtID0gbmV3IFByb2plY3QoXG4gICAgICBhcnJheVdpdGhPYmplY3RzW2ldLnRpdGxlLFxuICAgICAgYXJyYXlXaXRoT2JqZWN0c1tpXS5kZXNjcmlwdGlvbixcbiAgICAgIGFycmF5V2l0aE9iamVjdHNbaV0uaWRcbiAgICApO1xuXG4gICAgaXRlbS50YXNrcyA9IGFycmF5V2l0aE9iamVjdHNbaV0udGFzaztcblxuICAgIHNldFByb2plY3RzKGl0ZW0pO1xuICB9XG5cbiAgY29uc3QgdGVzdCA9IGdldFByb2plY3RzKCk7XG5cbiAgZm9yIChsZXQgc3RhcnQgPSAwOyBzdGFydCA8IHRlc3QubGVuZ3RoOyBzdGFydCArPSAxKSB7XG4gICAgY3JlYXRlUHJvamVjdFRhYih0ZXN0W3N0YXJ0XS50aXRsZSwgdGVzdFtzdGFydF0uaWQpO1xuICAgIGNyZWF0ZU1haW5UYWIodGVzdFtzdGFydF0udGl0bGUsIHRlc3Rbc3RhcnRdLmRlc2NyaXB0aW9uLCB0ZXN0W3N0YXJ0XS5pZCk7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCB0ZXN0W3N0YXJ0XS50YXNrcy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgY29uc3QgZ3JhYlByb2plY3RDb250YWluZXIgPVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RDb250YWluZXJcIik7XG4gICAgICBjb25zdCBwcm9qZWN0SUQgPSB0ZXN0W3N0YXJ0XS5pZDtcblxuICAgICAgZm9yIChcbiAgICAgICAgbGV0IHByb2plY3QgPSAwO1xuICAgICAgICBwcm9qZWN0IDwgZ3JhYlByb2plY3RDb250YWluZXIubGVuZ3RoO1xuICAgICAgICBwcm9qZWN0ICs9IDFcbiAgICAgICkge1xuICAgICAgICBjb25zdCBjb250YWluZXJJRCA9XG4gICAgICAgICAgZ3JhYlByb2plY3RDb250YWluZXJbcHJvamVjdF0uZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0aWRcIik7XG4gICAgICAgIGlmIChjb250YWluZXJJRCA9PT0gcHJvamVjdElEKSB7XG4gICAgICAgICAgY29uc3QgbWlkZGxlUm93ID1cbiAgICAgICAgICAgIGdyYWJQcm9qZWN0Q29udGFpbmVyW3Byb2plY3RdLnF1ZXJ5U2VsZWN0b3IoXCIubWlkZGxlUm93XCIpO1xuICAgICAgICAgIG1pZGRsZVJvdy5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgIGNyZWF0ZUl0ZW1DYXJkKFxuICAgICAgICAgICAgICB0ZXN0W3N0YXJ0XS50YXNrW2pdLnRhc2ssXG4gICAgICAgICAgICAgIHRlc3Rbc3RhcnRdLnRhc2tbal0ubm90ZXMsXG4gICAgICAgICAgICAgIHRlc3Rbc3RhcnRdLnRhc2tbal0ucHJpb3JpdHksXG4gICAgICAgICAgICAgIHRlc3Rbc3RhcnRdLnRhc2tbal0uZGF0ZSxcbiAgICAgICAgICAgICAgdGVzdFtzdGFydF0udGFza1tqXS5pZFxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgXG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQge1xuICBjcmVhdGVQcm9qZWN0LFxuICBnZXRQcm9qZWN0cyxcbiAgcHJvamVjdHMsXG4gIHNldFByb2plY3RzLFxuICBkZWxldGVQcm9qZWN0LFxuICByZXRyaWV2ZUZyb21Mb2NhbFN0b3JhZ2UsXG4gIHJlYWRJbmZvcm1hdGlvbixcbiAgZmluZEJ5SUQsXG4gIHVwZGF0ZVRpdGxlQW5kRGVzY3JpcHRpb24sXG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tZHVwZS1jbGFzcy1tZW1iZXJzICovXG4vLyBGb3IgRm9sZGVyIE5hbWVzXG5pbXBvcnQgcmFuZG9tU3RyaW5nIGZyb20gXCIuLi8uLi9oZWxwZnVsX2Z1bmN0aW9ucy9jcmVhdGVSYW5kb21JRFwiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1RlbXBsYXRlXCI7XG5cbmNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGlkID0gcmFuZG9tU3RyaW5nKCkpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLnRhc2tzID0gW107XG4gICAgdGhpcy5jb21wbGV0ZVRhc2tzID0gW107XG4gIH1cblxuICBzZXQgdGl0bGUodmFsdWUpIHtcbiAgICBpZiAodmFsdWUubGVuZ3RoIDwgMylcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQsIG5vdGUgZGVzY3JpcHRpb24gaXMgdG9vIHNob3J0LlwiKTtcblxuICAgIHRoaXMuY3VycmVudF90aXRsZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRfdGl0bGU7XG4gIH1cblxuICBzZXQgZGVzY3JpcHRpb24odmFsdWUpIHtcbiAgICBpZiAodmFsdWUubGVuZ3RoIDwgMylcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQsIG5vdGUgZGVzY3JpcHRpb24gaXMgdG9vIHNob3J0LlwiKTtcblxuICAgIHRoaXMuY3VycmVudF9kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRfZGVzY3JpcHRpb247XG4gIH1cblxuICBnZXQgdGFzaygpIHtcbiAgICByZXR1cm4gdGhpcy50YXNrcztcbiAgfVxuXG4gIGNyZWF0ZVRvZG9JdGVtKFxuICAgIHRhc2ssXG4gICAgZGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgICBub3RlcyxcbiAgICBzdGF0dXMgPSBcImluY29tcGxldGVcIixcbiAgICBpZCA9IHJhbmRvbVN0cmluZygpXG4gICkge1xuICAgIGNvbnN0IHRvZG9JdGVtID0gbmV3IFRhc2sodGFzaywgZGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBzdGF0dXMsIGlkKTtcbiAgICB0aGlzLnRhc2tzLnB1c2godG9kb0l0ZW0pO1xuICAgIHJldHVybiB0b2RvSXRlbTtcbiAgfVxuXG4gIHJlbW92ZVRvZG9JdGVtKGl0ZW0pIHtcbiAgICB0aGlzLnRhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suaWQgIT09IGl0ZW0pO1xuICB9XG5cbiAgdXBkYXRlVG9kb0l0ZW0oaWQsIHRhc2ssIGRhdGUsIHByaW9yaXR5LCBub3Rlcywgc3RhdHVzID0gXCJpbmNvbXBsZXRlXCIpIHtcbiAgICB0aGlzLnRhc2tzID0gdGhpcy50YXNrLm1hcCgoaXRlbSkgPT5cbiAgICAgIGl0ZW0uaWQgPT09IGlkID8gbmV3IFRhc2sodGFzaywgZGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBzdGF0dXMsIGlkKSA6IGl0ZW1cbiAgICApO1xuICB9XG5cbiAgcmV0cmlldmVJdGVtc0luUHJvamVjdCgpIHtcbiAgICB0aGlzLnRhc2tzLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0pO1xuICB9XG5cbiAgcmV0cmlldmVJdGVtc0luQ29tcGxldGVUYXNrcygpIHtcbiAgICB0aGlzLmNvbXBsZXRlVGFza3MuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbSk7XG4gIH1cblxuICBieUlEKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5pZCA9PT0gaWQpO1xuICAgIC8vIHdlIGNhbiByZXRyaWV2ZSBhIHNwZWNpZmljIHRhc2sgb3IgaXRlbSB3aGljaCBjYW4gYmUgdXNlZCB0byBgdXBkYXRlIGNhcmRzYFxuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogdGhpcy5jdXJyZW50X3RpdGxlLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuY3VycmVudF9kZXNjcmlwdGlvbixcbiAgICAgIHRhc2s6IHRoaXMudGFza3MsXG4gICAgICBjb21wbGV0ZVRhc2s6IHRoaXMuY29tcGxldGVUYXNrcyxcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1kdXBlLWNsYXNzLW1lbWJlcnMgKi9cbmNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcih0YXNrLCBkYXRlLCBwcmlvcml0eSwgbm90ZXMsIHN0YXR1cywgaWQpIHtcbiAgICB0aGlzLnRhc2sgPSB0YXNrO1xuICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgICB0aGlzLmlkID0gaWQ7XG4gIH1cblxuICBnZXQgdGFzaygpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50X3Rhc2s7XG4gIH1cblxuICBzZXQgdGFzayh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gXCJcIiB8fCB2YWx1ZS5sZW5ndGggPCAzKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIFRhc2tcIik7XG5cbiAgICB0aGlzLmN1cnJlbnRfdGFzayA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHByaW9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRfcHJpb3JpdHk7XG4gIH1cblxuICAvLyBzZXQgcHJpb3JpdHkodmFsdWUpIHtcbiAgLy8gICBpZiAoIVtcImhpZ2hcIiwgXCJtZWRpdW1cIiwgXCJsb3dcIl0uaW5jbHVkZXModmFsdWUudG9Mb3dlckNhc2UoKSkpXG4gIC8vICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkLCBub3Qgb25lIG9mIHRoZSBjaG9pY2VzXCIpO1xuXG4gIC8vICAgdGhpcy5jdXJyZW50X3ByaW9yaXR5ID0gdmFsdWU7XG4gIC8vIH1cblxuICBzZXQgcHJpb3JpdHkodmFsdWUpIHtcbiAgICB0aGlzLmN1cnJlbnRfcHJpb3JpdHkgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBub3RlcygpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50X25vdGVzO1xuICB9XG5cbiAgc2V0IG5vdGVzKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlLmxlbmd0aCA8IDUpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkLCBub3RlIGRlc2NyaXB0aW9uIGlzIHRvbyBzaG9ydC5cIik7XG5cbiAgICB0aGlzLmN1cnJlbnRfbm90ZXMgPSB2YWx1ZTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGFzazogdGhpcy50YXNrLFxuICAgICAgZGF0ZTogdGhpcy5kYXRlLFxuICAgICAgcHJpb3JpdHk6IHRoaXMucHJpb3JpdHksXG4gICAgICBub3RlczogdGhpcy5ub3RlcyxcbiAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgICBpZDogdGhpcy5pZCxcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2s7XG4iLCJpbXBvcnQgcmVtb3ZlVGFza0l0ZW0gZnJvbSBcIi4uL0NvbnRyb2xsZXIvcmVtb3ZlVGFza0l0ZW1cIjtcbmltcG9ydCBlZGl0VGFzayBmcm9tIFwiLi4vQ29udHJvbGxlci9lZGl0VGFza1wiO1xuXG5pbXBvcnQgeyBjaGFuZ2VJdGVtU3RhdHVzIH0gZnJvbSBcIi4uL0NvbnRyb2xsZXIvY2hlY2tTdGF0dXNcIjtcblxuLy8gQ3JlYXRlIGhvdyB0aGUgaW5pdGlhbCBjYXJkIHdpbGwgbG9va1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSXRlbUNhcmQodGFzaywgbm90ZSwgcHJpb3JpdHksIGRhdGUsIGlkKSB7XG4gIC8vIGdyYWIgY3VycmVudFBhZ2Ugb3IgbWFpbiBwYWdlIHRvIGFwcGVuZCB0b1xuXG4gIGNvbnN0IGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgY2FyZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhcmRJdGVtQ29udGFpbmVyXCIpO1xuICBjYXJkQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImRhdGEtY2FyZElEXCIsIGAke2lkfWApO1xuXG4gIGNvbnN0IHByaW9yaXR5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgcHJpb3JpdHlUaXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByaW9yaXR5VGl0bGVTcGFuXCIpO1xuICBwcmlvcml0eVRpdGxlLnRleHRDb250ZW50ID0gYCR7cHJpb3JpdHl9YDtcblxuICBjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5VGl0bGUpO1xuXG4gIGNvbnN0IGxlZnRTaWRlU2VjdGlvbkl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgbGVmdFNpZGVTZWN0aW9uSXRlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxlZnRTaWRlU2VjdGlvbkl0ZW1cIik7XG5cbiAgY29uc3QgdG9wU2VjdGlvbkxlZnRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIHRvcFNlY3Rpb25MZWZ0SXRlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvcFNlY3Rpb25MZWZ0SXRlbVwiKTtcblxuICBjb25zdCB0YXNrU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICB0YXNrU2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2tTZWN0aW9uXCIpO1xuXG4gIGNvbnN0IGxhYmVsQ2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsQ2hlY2tCb3guc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwic3RhdHVzXCIpO1xuICBsYWJlbENoZWNrQm94LnRleHRDb250ZW50ID0gXCJTdGF0dXM6XCI7XG5cbiAgY29uc3QgaW5wdXRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dFRhc2suc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICBpbnB1dFRhc2suc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdGF0dXNcIik7XG4gIGlucHV0VGFzay5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXR1c2lkXCIsIGAke2lkfWApO1xuICBpbnB1dFRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZUl0ZW1TdGF0dXMpO1xuXG4gIGxhYmVsQ2hlY2tCb3guYXBwZW5kQ2hpbGQoaW5wdXRUYXNrKTtcblxuICBjb25zdCBsYWJlbFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsVGFzay5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJjaGVja2JveFwiKTtcbiAgbGFiZWxUYXNrLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGFiZWxUYXNrXCIpO1xuICBsYWJlbFRhc2sudGV4dENvbnRlbnQgPSBgJHt0YXNrfWA7XG5cbiAgdGFza1NlY3Rpb24uYXBwZW5kQ2hpbGQobGFiZWxDaGVja0JveCk7XG4gIHRhc2tTZWN0aW9uLmFwcGVuZENoaWxkKGxhYmVsVGFzayk7XG5cbiAgdG9wU2VjdGlvbkxlZnRJdGVtLmFwcGVuZENoaWxkKHRhc2tTZWN0aW9uKTtcblxuICBjb25zdCBtaWRkbGVTZWN0aW9uTGVmdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgbWlkZGxlU2VjdGlvbkxlZnRJdGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWlkZGxlU2VjdGlvbkxlZnRJdGVtXCIpO1xuXG4gIGNvbnN0IGlucHV0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBpbnB1dERhdGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpbnB1dERhdGVcIik7XG4gIGlucHV0RGF0ZS50ZXh0Q29udGVudCA9IGAke2RhdGV9YDtcblxuICBtaWRkbGVTZWN0aW9uTGVmdEl0ZW0uYXBwZW5kQ2hpbGQoaW5wdXREYXRlKTtcblxuICBjb25zdCBib3R0b21TZWN0aW9uTGVmdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgYm90dG9tU2VjdGlvbkxlZnRJdGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYm90dG9tU2VjdGlvbkxlZnRJdGVtXCIpO1xuICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZWRpdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImVkaXRCdXR0b25cIik7XG4gIGVkaXRCdXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS1lZGl0aWRcIiwgYCR7aWR9YCk7XG4gIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVkaXRUYXNrKTtcbiAgZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuXG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRlbGV0ZUJ1dHRvbkl0ZW1cIik7XG4gIGRlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWRlbGV0ZWlkXCIsIGAke2lkfWApO1xuICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZVRhc2tJdGVtKTtcbiAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcblxuICBib3R0b21TZWN0aW9uTGVmdEl0ZW0uYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG4gIGJvdHRvbVNlY3Rpb25MZWZ0SXRlbS5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuXG4gIGxlZnRTaWRlU2VjdGlvbkl0ZW0uYXBwZW5kQ2hpbGQodG9wU2VjdGlvbkxlZnRJdGVtKTtcbiAgbGVmdFNpZGVTZWN0aW9uSXRlbS5hcHBlbmRDaGlsZChtaWRkbGVTZWN0aW9uTGVmdEl0ZW0pO1xuICBsZWZ0U2lkZVNlY3Rpb25JdGVtLmFwcGVuZENoaWxkKGJvdHRvbVNlY3Rpb25MZWZ0SXRlbSk7XG5cbiAgY29uc3QgcmlnaHRTaWRlU2VjdGlvbkl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgcmlnaHRTaWRlU2VjdGlvbkl0ZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJyaWdodFNpZGVTZWN0aW9uSXRlbVwiKTtcblxuICBjb25zdCBub3RlQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBub3RlQXJlYS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5vdGVBcmVhXCIpO1xuICBub3RlQXJlYS50ZXh0Q29udGVudCA9IGAke25vdGV9YDtcblxuICByaWdodFNpZGVTZWN0aW9uSXRlbS5hcHBlbmRDaGlsZChub3RlQXJlYSk7XG5cbiAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChsZWZ0U2lkZVNlY3Rpb25JdGVtKTtcbiAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChyaWdodFNpZGVTZWN0aW9uSXRlbSk7XG5cbiAgcmV0dXJuIGNhcmRDb250YWluZXI7XG59XG5cbi8qIFxuXG5bXG4gIFtdVEFTS1xuICBbTk9URVMgSEVSRV1cblxuXG5dXG5cbiovXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFZGl0Rm9ybSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICBjb25zdCBkaWFsb2dDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xuICBkaWFsb2dDb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJlZGl0SXRlbUZvcm1cIik7XG5cbiAgY29uc3QgdGl0bGVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIHRpdGxlSGVhZGVyLnRleHRDb250ZW50ID0gXCJFZGl0aW5nIEZvcm1cIjtcblxuICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvcm1Db250YWluZXJJdGVtXCIpO1xuXG4gIGNvbnN0IHRvcFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgdG9wU2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvcFNlY3Rpb25JdGVtIGZvcm1MaXN0SXRlbVwiKTtcblxuICBjb25zdCB0YXNrTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIHRhc2tMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJlZGl0VGFza1wiKTtcbiAgdGFza0xhYmVsLnRleHRDb250ZW50ID0gXCJUYXNrOlwiO1xuXG4gIGNvbnN0IHRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgdGFza0lucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWRpdFRhc2tcIik7XG4gIHRhc2tJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcblxuICB0b3BTZWN0aW9uLmFwcGVuZENoaWxkKHRhc2tMYWJlbCk7XG4gIHRvcFNlY3Rpb24uYXBwZW5kQ2hpbGQodGFza0lucHV0KTtcblxuICB0b3BTZWN0aW9uLmFwcGVuZENoaWxkKHRhc2tMYWJlbCk7XG4gIHRvcFNlY3Rpb24uYXBwZW5kQ2hpbGQodGFza0lucHV0KTtcblxuICBjb25zdCBtaWRkbGVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIG1pZGRsZVNlY3Rpb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtaWRkbGVTZWN0aW9uSXRlbSBmb3JtTGlzdEl0ZW1cIik7XG5cbiAgY29uc3QgdGV4dEFyZWFMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgdGV4dEFyZWFMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJlZGl0Tm90ZVwiKTtcbiAgdGV4dEFyZWFMYWJlbC50ZXh0Q29udGVudCA9IFwiTm90ZTpcIjtcblxuICBjb25zdCB0ZXh0QXJlYUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICB0ZXh0QXJlYUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICB0ZXh0QXJlYUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWRpdE5vdGVcIik7XG5cbiAgbWlkZGxlU2VjdGlvbi5hcHBlbmRDaGlsZCh0ZXh0QXJlYUxhYmVsKTtcbiAgbWlkZGxlU2VjdGlvbi5hcHBlbmRDaGlsZCh0ZXh0QXJlYUlucHV0KTtcblxuICBjb25zdCBzZWNvbmRNaWRkbGVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIHNlY29uZE1pZGRsZVNlY3Rpb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzZWNvbmRNaWRkbGVTZWN0aW9uIGZvcm1MaXN0SXRlbVwiKTtcblxuICBjb25zdCBjYWxlbmRhcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjYWxlbmRhcklucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWRpdERhdGVcIik7XG4gIGNhbGVuZGFySW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xuXG4gIGNvbnN0IHNlbGVjdERyb3BEb3duSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBzZWxlY3REcm9wRG93bklucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWRpdFNlbGVjdFwiKTtcbiAgY29uc3QgbG93VGllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIGxvd1RpZXIuc2V0QXR0cmlidXRlID0gKFwidmFsdWVcIiwgXCJsb3dcIik7XG4gIGxvd1RpZXIudGV4dENvbnRlbnQgPSBcIkxvd1wiO1xuXG4gIGNvbnN0IG1lZGl1bVRpZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBtZWRpdW1UaWVyLnNldEF0dHJpYnV0ZSA9IChcInZhbHVlXCIsIFwibWVkaXVtXCIpO1xuICBtZWRpdW1UaWVyLnRleHRDb250ZW50ID0gXCJNZWRpdW1cIjtcblxuICBjb25zdCBoaWdoVGllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIGhpZ2hUaWVyLnNldEF0dHJpYnV0ZSA9IChcInZhbHVlXCIsIFwiaGlnaFwiKTtcbiAgaGlnaFRpZXIudGV4dENvbnRlbnQgPSBcIkhpZ2hcIjtcblxuICBzZWxlY3REcm9wRG93bklucHV0LmFwcGVuZENoaWxkKGxvd1RpZXIpO1xuICBzZWxlY3REcm9wRG93bklucHV0LmFwcGVuZENoaWxkKG1lZGl1bVRpZXIpO1xuICBzZWxlY3REcm9wRG93bklucHV0LmFwcGVuZENoaWxkKGhpZ2hUaWVyKTtcblxuICBzZWNvbmRNaWRkbGVTZWN0aW9uLmFwcGVuZENoaWxkKGNhbGVuZGFySW5wdXQpO1xuICBzZWNvbmRNaWRkbGVTZWN0aW9uLmFwcGVuZENoaWxkKHNlbGVjdERyb3BEb3duSW5wdXQpO1xuXG4gIGNvbnN0IGJvdHRvbVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgYm90dG9tU2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJvdHRvbVNlY3Rpb25JdGVtIGZvcm1MaXN0SXRlbVwiKTtcblxuICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKFwiZm9ybW1ldGhvZFwiLCBcImRpYWxvZ1wiKTtcblxuICBjYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJlZGl0SXRlbUNhbmNlbFwiKTtcbiAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcblxuICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZWRpdEl0ZW1TdWJtaXRcIik7XG4gIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG5cbiAgYm90dG9tU2VjdGlvbi5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuICBib3R0b21TZWN0aW9uLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG5cbiAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b3BTZWN0aW9uKTtcbiAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChtaWRkbGVTZWN0aW9uKTtcbiAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWNvbmRNaWRkbGVTZWN0aW9uKTtcbiAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChib3R0b21TZWN0aW9uKTtcblxuICBkaWFsb2dDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVIZWFkZXIpO1xuICBkaWFsb2dDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChkaWFsb2dDb250YWluZXIpO1xuXG4gIHJldHVybiBjb250ZW50O1xufVxuXG4vKiBcblxuSW5wdXRcblxuSW5wdXQgTm90ZVxuXG5EYXRlIElucHV0IHwgUHJpb3JpdHkgSW5wdXRcblxuQ2FuY2VsIHwgU3VibWl0IDwtIFdpbGwgdXBkYXRlIGNhcmQgdmlzdWFsc1xuXG4qL1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdEZvcm0oKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgY29uc3QgZGlhbG9nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcblxuICBkaWFsb2dDb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJlZGl0UHJvamVjdFwiKTtcblxuICBjb25zdCBmb3JtSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGZvcm1Ib2xkZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmb3JtQ29udGFpbmVyXCIpO1xuICBmb3JtSG9sZGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdEZvcm1cIik7XG5cbiAgY29uc3QgZGl2MUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdjFDb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmb3JtLWxpc3RcIik7XG5cbiAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0aXRsZVwiKTtcbiAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IFwiVGl0bGU6XCI7XG5cbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVkaXRUaXRsZVwiKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRpdGxlSW5wdXRWYWx1ZVwiKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkVudGVyIE5hbWVcIik7XG5cbiAgZGl2MUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgZGl2MUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcblxuICBjb25zdCBkaXYyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2MkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZvcm0tbGlzdFwiKTtcblxuICBjb25zdCBkZXNjcmlwdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBkZXNjcmlwdGlvblRpdGxlLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImRlc2NyaXB0aW9uXCIpO1xuICBkZXNjcmlwdGlvblRpdGxlLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvbjpcIjtcblxuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWRpdERlc2NyaXB0aW9uXCIpO1xuICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkZXNjcmlwdGlvblwiKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkZXNjcmlwdGlvblwiKTtcblxuICBkaXYyQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVGl0bGUpO1xuICBkaXYyQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xuXG4gIGNvbnN0IGRpdjNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGRpdjNDb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidXR0b25zQ29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGJ1dHRvbkNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGJ1dHRvblN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgYnV0dG9uQ2FuY2VsLnNldEF0dHJpYnV0ZShcImZvcm1tZXRob2RcIiwgXCJkaWFsb2dcIik7XG4gIGJ1dHRvbkNhbmNlbC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhbmNlbEJ1dHRvblwiKTtcbiAgYnV0dG9uQ2FuY2VsLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWRpdENhbmNlbEJ1dHRvblwiKTtcbiAgYnV0dG9uQ2FuY2VsLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcblxuICBidXR0b25TdWJtaXQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzdWJtaXRCdXR0b25cIik7XG4gIGJ1dHRvblN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVkaXRTdWJtaXRCdXR0b25cIik7XG4gIGJ1dHRvblN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBidXR0b25TdWJtaXQudGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuXG4gIGRpdjNDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uQ2FuY2VsKTtcbiAgZGl2M0NvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25TdWJtaXQpO1xuXG4gIGRpYWxvZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtSG9sZGVyKTtcblxuICBmb3JtSG9sZGVyLmFwcGVuZENoaWxkKGRpdjFDb250YWluZXIpO1xuICBmb3JtSG9sZGVyLmFwcGVuZENoaWxkKGRpdjJDb250YWluZXIpO1xuICBmb3JtSG9sZGVyLmFwcGVuZENoaWxkKGRpdjNDb250YWluZXIpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGlhbG9nQ29udGFpbmVyKTtcblxuICByZXR1cm4gY29udGVudDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUl0ZW1Gb3JtKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gIGNvbnN0IGRpYWxvZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XG4gIGRpYWxvZ0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIml0ZW1Gb3JtXCIpO1xuXG4gIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9ybUNvbnRhaW5lckl0ZW1cIik7XG5cbiAgY29uc3QgdG9wU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICB0b3BTZWN0aW9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9wU2VjdGlvbkl0ZW0gZm9ybUxpc3RJdGVtXCIpO1xuXG4gIGNvbnN0IHRhc2tMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgdGFza0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRhc2tcIik7XG4gIHRhc2tMYWJlbC50ZXh0Q29udGVudCA9IFwiVGFzazpcIjtcblxuICBjb25zdCB0YXNrSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRhc2tJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2tcIik7XG4gIHRhc2tJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcblxuICB0b3BTZWN0aW9uLmFwcGVuZENoaWxkKHRhc2tMYWJlbCk7XG4gIHRvcFNlY3Rpb24uYXBwZW5kQ2hpbGQodGFza0lucHV0KTtcblxuICB0b3BTZWN0aW9uLmFwcGVuZENoaWxkKHRhc2tMYWJlbCk7XG4gIHRvcFNlY3Rpb24uYXBwZW5kQ2hpbGQodGFza0lucHV0KTtcblxuICBjb25zdCBtaWRkbGVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIG1pZGRsZVNlY3Rpb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtaWRkbGVTZWN0aW9uSXRlbSBmb3JtTGlzdEl0ZW1cIik7XG5cbiAgY29uc3QgdGV4dEFyZWFMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgdGV4dEFyZWFMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJub3RlXCIpO1xuICB0ZXh0QXJlYUxhYmVsLnRleHRDb250ZW50ID0gXCJOb3RlOlwiO1xuXG4gIGNvbnN0IHRleHRBcmVhSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIHRleHRBcmVhSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIHRleHRBcmVhSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJub3RlXCIpO1xuXG4gIG1pZGRsZVNlY3Rpb24uYXBwZW5kQ2hpbGQodGV4dEFyZWFMYWJlbCk7XG4gIG1pZGRsZVNlY3Rpb24uYXBwZW5kQ2hpbGQodGV4dEFyZWFJbnB1dCk7XG5cbiAgY29uc3Qgc2Vjb25kTWlkZGxlU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBzZWNvbmRNaWRkbGVTZWN0aW9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2Vjb25kTWlkZGxlU2VjdGlvbiBmb3JtTGlzdEl0ZW1cIik7XG5cbiAgY29uc3QgY2FsZW5kYXJJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY2FsZW5kYXJJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRhdGVcIik7XG4gIGNhbGVuZGFySW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xuXG4gIGNvbnN0IHNlbGVjdERyb3BEb3duSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBzZWxlY3REcm9wRG93bklucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2VsZWN0XCIpO1xuICBjb25zdCBsb3dUaWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgbG93VGllci5zZXRBdHRyaWJ1dGUgPSAoXCJ2YWx1ZVwiLCBcImxvd1wiKTtcbiAgbG93VGllci50ZXh0Q29udGVudCA9IFwiTG93XCI7XG5cbiAgY29uc3QgbWVkaXVtVGllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIG1lZGl1bVRpZXIuc2V0QXR0cmlidXRlID0gKFwidmFsdWVcIiwgXCJtZWRpdW1cIik7XG4gIG1lZGl1bVRpZXIudGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiO1xuXG4gIGNvbnN0IGhpZ2hUaWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgaGlnaFRpZXIuc2V0QXR0cmlidXRlID0gKFwidmFsdWVcIiwgXCJoaWdoXCIpO1xuICBoaWdoVGllci50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xuXG4gIHNlbGVjdERyb3BEb3duSW5wdXQuYXBwZW5kQ2hpbGQobG93VGllcik7XG4gIHNlbGVjdERyb3BEb3duSW5wdXQuYXBwZW5kQ2hpbGQobWVkaXVtVGllcik7XG4gIHNlbGVjdERyb3BEb3duSW5wdXQuYXBwZW5kQ2hpbGQoaGlnaFRpZXIpO1xuXG4gIHNlY29uZE1pZGRsZVNlY3Rpb24uYXBwZW5kQ2hpbGQoY2FsZW5kYXJJbnB1dCk7XG4gIHNlY29uZE1pZGRsZVNlY3Rpb24uYXBwZW5kQ2hpbGQoc2VsZWN0RHJvcERvd25JbnB1dCk7XG5cbiAgY29uc3QgYm90dG9tU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBib3R0b21TZWN0aW9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYm90dG9tU2VjdGlvbkl0ZW0gZm9ybUxpc3RJdGVtXCIpO1xuXG4gIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNhbmNlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJmb3JtbWV0aG9kXCIsIFwiZGlhbG9nXCIpO1xuXG4gIGNhbmNlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIml0ZW1DYW5jZWxcIik7XG4gIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG5cblxuICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaXRlbVN1Ym1pdFwiKTtcbiAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcblxuICBib3R0b21TZWN0aW9uLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG4gIGJvdHRvbVNlY3Rpb24uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcblxuICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvcFNlY3Rpb24pO1xuICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKG1pZGRsZVNlY3Rpb24pO1xuICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlY29uZE1pZGRsZVNlY3Rpb24pO1xuICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGJvdHRvbVNlY3Rpb24pO1xuXG4gIGRpYWxvZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGRpYWxvZ0NvbnRhaW5lcik7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXG5pbXBvcnQgYWRkSXRlbSBmcm9tIFwiLi4vQ29udHJvbGxlci9hZGRUYXNrXCI7XG5pbXBvcnQgZWRpdEZvcm0gZnJvbSBcIi4uL0NvbnRyb2xsZXIvZWRpdFByb2plY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWFpblRhYih0aXRsZSwgZGVzY3JpcHRpb24sIGlkKSB7XG4gIC8vIGFwcGVuZCB0byB0aGUgbWFpbmNvbnRhaW5lclxuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50UGFnZVwiKTtcblxuICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIHByb2plY3RDb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9qZWN0Q29udGFpbmVyXCIpO1xuICBwcm9qZWN0Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdGlkXCIsIGAke2lkfWApO1xuXG4gIGNvbnN0IHRvcFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICB0b3BSb3cuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b3BSb3dcIik7XG5cbiAgY29uc3QgbWFpblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBtYWluVGl0bGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYWluVGl0bGVcIik7XG4gIG1haW5UaXRsZS50ZXh0Q29udGVudCA9IGAke3RpdGxlfWA7XG5cbiAgY29uc3QgdG9wUm93U2Vjb25kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIHRvcFJvd1NlY29uZC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvcFJvd1NlY29uZFwiKTtcblxuICBjb25zdCBkZXNjcmlwdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZGVzY3JpcHRpb25UZXh0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGVzY3JpcHRpb25UZXh0XCIpO1xuICBkZXNjcmlwdGlvblRleHQudGV4dENvbnRlbnQgPSBgJHtkZXNjcmlwdGlvbn1gO1xuXG4gIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBlZGl0QnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZWRpdEJ1dHRvblwiKTtcbiAgZWRpdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWVkaXRpZFwiLCBpZCk7XG4gIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcbiAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdEZvcm0pO1xuXG4gIHRvcFJvdy5hcHBlbmRDaGlsZChtYWluVGl0bGUpO1xuICB0b3BSb3cuYXBwZW5kQ2hpbGQodG9wUm93U2Vjb25kKTtcblxuICB0b3BSb3dTZWNvbmQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25UZXh0KTtcbiAgdG9wUm93U2Vjb25kLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuXG4gIGNvbnN0IG1pZGRsZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBtaWRkbGVSb3cuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtaWRkbGVSb3dcIik7XG5cbiAgLy8gTWlkZGxlIHJvdyB3aWxsIGJlIHdoZXJlIGFsbCB0YXNrIGl0ZW1zIHdpbGwgZ29cblxuICBjb25zdCBib3R0b21Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgYm90dG9tUm93LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYm90dG9tUm93XCIpO1xuXG4gIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGRUYXNrQnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYWRkVGFza0J1dHRvblwiKTtcbiAgYWRkVGFza0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG4gIGFkZFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSBcIitcIjtcblxuICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRJdGVtKTtcblxuICBib3R0b21Sb3cuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbik7XG5cbiAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b3BSb3cpO1xuICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKG1pZGRsZVJvdyk7XG4gIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoYm90dG9tUm93KTtcblxuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpO1xuXG4gIHJldHVybiBwcm9qZWN0Q29udGFpbmVyO1xuXG4gIC8vIGNyZWF0ZSB0b3Agcm93W3RpdGxlIGFuZCBkZXNjcmlwdGlvbiB3aWxsIGJlXVxuXG4gIC8vIHRoZW4gY3JlYXRlIFtdIGJpZyBzaXplIHdoZXJlIGFsbCB0YXNrcyB3aWxsIGdvXG59XG4iLCIvLyBUaGlzIHdpbGwgY3JlYXRlIGEgZGlhbG9nIGZvcm0gdmlld1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0Rm9ybSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICBjb25zdCBkaWFsb2dDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xuXG4gIGRpYWxvZ0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRpYWxvZ0NvbnRhaW5lclwiKTtcblxuICBjb25zdCBmb3JtSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGZvcm1Ib2xkZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmb3JtQ29udGFpbmVyXCIpO1xuICBmb3JtSG9sZGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdEZvcm1cIik7XG5cbiAgY29uc3QgZGl2MUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdjFDb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmb3JtLWxpc3RcIik7XG5cbiAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0aXRsZVwiKTtcbiAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IFwiVGl0bGU6XCI7XG5cbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRpdGxlXCIpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGl0bGVJbnB1dFZhbHVlXCIpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRW50ZXIgTmFtZVwiKTtcblxuICBkaXYxQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICBkaXYxQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuXG4gIGNvbnN0IGRpdjJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYyQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZm9ybS1saXN0XCIpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGRlc2NyaXB0aW9uVGl0bGUuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZGVzY3JpcHRpb25cIik7XG4gIGRlc2NyaXB0aW9uVGl0bGUudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uOlwiO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZXNjcmlwdGlvblwiKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZGVzY3JpcHRpb25cIik7XG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZGVzY3JpcHRpb25cIik7XG5cbiAgZGl2MkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblRpdGxlKTtcbiAgZGl2MkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcblxuICBjb25zdCBkaXYzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBkaXYzQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYnV0dG9uc0NvbnRhaW5lclwiKTtcblxuICBjb25zdCBidXR0b25DYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBidXR0b25TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gIGJ1dHRvbkNhbmNlbC5zZXRBdHRyaWJ1dGUoXCJmb3JtbWV0aG9kXCIsIFwiZGlhbG9nXCIpO1xuICBidXR0b25DYW5jZWwuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjYW5jZWxCdXR0b25cIik7XG4gIGJ1dHRvbkNhbmNlbC50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gIGJ1dHRvbkNhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRpdGxlSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIGRpYWxvZ0NvbnRhaW5lci5jbG9zZSgpO1xuICB9KTtcblxuICBidXR0b25TdWJtaXQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzdWJtaXRCdXR0b25cIik7XG4gIGJ1dHRvblN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBidXR0b25TdWJtaXQudGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuXG4gIGJ1dHRvblN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRpYWxvZ0NvbnRhaW5lci5jbG9zZSgpO1xuICB9KTtcblxuICBkaXYzQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkNhbmNlbCk7XG4gIGRpdjNDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uU3VibWl0KTtcblxuICBkaWFsb2dDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUhvbGRlcik7XG5cbiAgZm9ybUhvbGRlci5hcHBlbmRDaGlsZChkaXYxQ29udGFpbmVyKTtcbiAgZm9ybUhvbGRlci5hcHBlbmRDaGlsZChkaXYyQ29udGFpbmVyKTtcbiAgZm9ybUhvbGRlci5hcHBlbmRDaGlsZChkaXYzQ29udGFpbmVyKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGRpYWxvZ0NvbnRhaW5lcik7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbi8qIFxuXG5bU1BFQ0lBTCBJQ09OXVxuW0lOUFVUIEZJRUxEU11cbltDQU5DRUwgU1VCTUlUIEJVVFRPTlNdXG5cblxuXG5cbiovXG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXG5pbXBvcnQgZGVsUHJvamVjdCBmcm9tIFwiLi4vQ29udHJvbGxlci9kZWxldGVQcm9qZWN0XCI7XG5pbXBvcnQgdG9nZ2xpbmdQcm9qZWN0VmlldyBmcm9tIFwiLi4vQ29udHJvbGxlci90b2dnbGluZ1Byb2plY3RWaWV3XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RUYWIodGl0bGVJbnB1dCwgaXRlbUlEKSB7XG4gIC8vIEdyYWIgdGhlIHByb2plY3RzIGxpc3QgVUwgZWxlbWVudFxuICBjb25zdCBwcm9qZWN0VUwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzXCIpO1xuXG4gIGNvbnN0IGxpRWxlbWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgbGlFbGVtZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGlFbGVtZW50XCIpO1xuICBsaUVsZW1lbnRDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7aXRlbUlEfWApO1xuICBsaUVsZW1lbnRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsaW5nUHJvamVjdFZpZXcpO1xuXG4gIGNvbnN0IGNyZWF0ZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg2XCIpO1xuICBjcmVhdGVUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVUYWJcIik7XG4gIGNyZWF0ZVRpdGxlLnRleHRDb250ZW50ID0gYCR7dGl0bGVJbnB1dH1gO1xuXG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRlbGV0ZUJ0blwiKTtcblxuICBjb25zdCBpbWdJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW1nSWNvbi5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJnYXJiYWdlXCIpO1xuICBpbWdJY29uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGVsSUNPTlwiKTtcbiAgaW1nSWNvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWRlbGV0ZWlkXCIsIGl0ZW1JRCk7XG5cbiAgaW1nSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGVsUHJvamVjdCk7XG5cbiAgZGVsZXRlQnV0dG9uLmFwcGVuZENoaWxkKGltZ0ljb24pO1xuXG4gIGxpRWxlbWVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVUaXRsZSk7XG4gIGxpRWxlbWVudENvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuXG4gIHByb2plY3RVTC5hcHBlbmRDaGlsZChsaUVsZW1lbnRDb250YWluZXIpO1xuXG4gIHJldHVybiBwcm9qZWN0VUw7XG59XG4iLCJmdW5jdGlvbiByYW5kb21TdHJpbmcoKSB7XG4gIHJldHVybiBTdHJpbmcoRGF0ZS5ub3coKS50b1N0cmluZygzMikgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE2KSkucmVwbGFjZShcbiAgICAvXFwuL2csXG4gICAgXCJcIlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCByYW5kb21TdHJpbmc7XG4iLCIvLyBTYXZlIGV2ZXJ5dGhpbmdcblxuZnVuY3Rpb24gc2F2ZVByb2plY3RTVG9kb0xTKGtleU5hbWUsIGFycmF5KSB7XG4gIGNvbnN0IHN0cmluZ2lmeSA9IEpTT04uc3RyaW5naWZ5KGFycmF5KTtcblxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXlOYW1lLCBzdHJpbmdpZnkpO1xufVxuXG5mdW5jdGlvbiBsb29rRm9yRGF0YUluTFMoa2V5TmFtZSkge1xuICAvLyBXZSBuZWVkIHRvIGxvb2sgZm9yIHRoZSBkYXRhIGluIHRoZSBsb2NhbCBzdG9yYWdlXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXlOYW1lKSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBjb25zdCBnZXRJdGVtID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5TmFtZSk7XG5cbiAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZ2V0SXRlbSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmV4cG9ydCB7IHNhdmVQcm9qZWN0U1RvZG9MUywgbG9va0ZvckRhdGFJbkxTIH07XG4iLCJpbXBvcnQgYWRkUHJvamVjdCBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250cm9sbGVyL2FkZFByb2plY3RcIjtcbmltcG9ydCBvcGVuRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250cm9sbGVyL29wZW5Qcm9qZWN0Rm9ybVwiO1xuaW1wb3J0IHsgcmV0cmlldmVGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTW9kZWwvY29sbGVjdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdlTG9hZCgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRQcm9qZWN0XCIpO1xuICBjb25zdCBwcm9qZWN0U3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXRCdXR0b25cIik7XG5cbiAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlbkZvcm0pO1xuXG4gIHByb2plY3RTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFByb2plY3QpO1xuXG4gIC8vIEluIGhlcmUgd2UncmUgZ29pbmcgdG8gcHJvYmFibHkgc2F2ZSB0aGUgYXJyYXkgYHByb2plY3RzYCBpbnRvIHRoZSBsb2NhbCBzdG9yYWdlXG4gIC8vIE9yIHdlIGNhbiByZXRyaWV2ZSBpdCBmcm9tIGhlcmVcblxuICAvLyBSZW1lbWJlciwgd2UgaGF2ZSB0byBzZXQgdXAgYSBjb21wbGV0ZSBvciBpbmNvbXBsZXRlIHN0YXR1cyBmb3IgZWFjaCBgdG9kb2AgaXRlbSwgaW5zaWRlIHByb2plY3QgdGVtcGxhdGVcblxuICByZXRyaWV2ZUZyb21Mb2NhbFN0b3JhZ2UoXCJwcm9qZWN0c1wiKTtcblxuICByZXR1cm4gY29udGVudDtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBwYWdlTG9hZCBmcm9tIFwiLi9wYWdlTG9hZC9wYWdlTG9hZFwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxucGFnZUxvYWQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==