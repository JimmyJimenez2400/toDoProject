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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --Licorice: #0D0106;\n  --Zaffre: #3626A7;\n  --Glaucous: #657ED4;\n  --Scarlet: #FF331F;\n  --Ghost-White: #FBFBFF;\n  --Royal-Blue: #00539C;\n  --Peach: #EEA47F;\n}\n\nbody,\nhtml {\n  height: 100%;\n  box-sizing: border-box;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n  padding: 0;\n  margin: 0;\n  outline: 2px solid green;\n\n}\n\nbody {\n  font-size: 16px;\n  background-color: lightblue;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n#content {\n  height: 100%;\n\n\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  grid-template-rows: auto 2fr minmax(200px, 1fr);\n}\n\n#headerContainer {\n  grid-column-start: 1;\n  grid-column-end: -1;\n\n  grid-row-start: 1;\n  grid-row-end: 2;\n  background-color: var(--Licorice);\n  border: 2px solid var(--Ghost-White);\n  color: var(--Ghost-White);\n}\n\n#sideContainer {\n  grid-row-start: 2;\n  grid-row-end: 5;\n  background-color: var(--Licorice);\n  border: 2px solid var(--Ghost-White);\n  display: flex;\n  flex: 2;\n  flex-direction: column;\n}\n\n#displayCurrentPageContainer {\n  grid-row-start: 2;\n  grid-row-end: 4;\n  background-color: var(--Licorice);\n  border: 2px solid var(--Ghost-White);\n}\n\n/* Header */\n\n\n/* Side */\n\n.side {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  color: var(--Ghost-White);\n}\n\n.projectsTitle {\n  margin-bottom: 5px;\n}\n\n.topSection {\n  display: flex;\n  flex-direction: column;\n\n  flex: 1;\n}\n\n.todayFolder {\n  flex: 0 1 10%;\n  border: 2px solid var(--Ghost-White);\n\n}\n\n.upcomingFolder {\n  flex: 0 1 10%;\n  border: 2px solid var(--Ghost-White);\n\n}\n\n.folderContainer {\n  flex: 1;\n  border: 2px solid var(--Ghost-White);\n\n}\n\n.bottomSection {\n  display: inline-flex;\n  flex: 0 1 10%;\n}\n\n.addProjectContainer {\n  display: inline-flex;\n  flex: 1;\n}\n\n.addProject {\n  flex: 1;\n}\n\n.projects {\n  padding: 20px;\n}\n\n.liElement {\n  cursor: pointer;\n  padding: 10px;\n  font-size: 24px;\n  margin-bottom: 20px;\n  background-color: gray;\n  color: var(--Ghost-White);\n\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.liElement>* {\n  flex: 1;\n}\n\n.liElement:hover {\n  background-color: var(--Scarlet);\n}\n\n/* Main */\n\n\n.dialogContainer {\n  position: absolute;\n  margin-right: auto;\n  margin-left: auto;\n  top: 190px;\n  height: 50%;\n  width: 50%;\n\n  border-radius: 1em;\n\n}\n\n.dialogContainer::backdrop {\n  background-color: hsl(250, 100%, 50%, 0.25)\n}\n\n.formContainer {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  height: 100%;\n\n  padding: 1em;\n\n  border-radius: 1em;\n}\n\n.formContainer .form-list {\n  margin-bottom: 20px;\n}\n\n.formContainer>* {\n  flex: 1;\n}\n\n.formContainer label {\n  display: inline-block;\n  width: 100%;\n  font-size: 24px;\n  font-weight: 900;\n}\n\n.formContainer input {\n  margin-top: 1em;\n  padding: 1em;\n  width: 100%;\n  font-size: 18px;\n\n  border-radius: 1em;\n  border: 5px solid rgb(11, 43, 54);\n\n}\n\n.formContainer .buttonsContainer {\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n}\n\n.formContainer .buttonsContainer>* {\n  flex: 1;\n}\n\n.formContainer .cancelButton,\n.formContainer .submitButton {\n  padding: 1em;\n}\n\n.formContainer .cancelButton {\n  background-color: red;\n  border: none;\n  text-transform: uppercase;\n  font-weight: 900;\n  border-radius: 1em;\n}\n\n.formContainer .submitButton {\n  background-color: green;\n  border: none;\n  text-transform: uppercase;\n  font-weight: 900;\n  border-radius: 1em;\n}\n\n/* Main page*/\n\n.projectContainer {\n  color: var(--Ghost-White);\n  display: flex;\n  flex-direction: column;\n  overflow: scroll;\n  flex: 1;\n}\n\n.ONLINE {\n  display: block;\n}\n\n.OFFLINE {\n  display: none;\n}\n\n.currentPage {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 0.5em;\n\n  height: 100%;\n}\n\n.topRow {\n  display: flex;\n  flex-direction: column;\n  flex: 0 1 10%;\n  border-bottom: 2px solid var(--Scarlet);\n\n}\n\n.mainTitle {\n  font-size: 3rem;\n}\n\n.descriptionText {\n  font-size: 1.9rem;\n}\n\n.topRowSecond {\n  display: flex;\n  justify-content: space-between;\n}\n\n.leftSideSectionItem {\n  padding: 20px;\n}\n\n\n.middleRow {\n  display: grid;\n  grid-template-rows: repeat(2, 1fr);\n  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));\n  gap: 4px;\n\n  height: 100%;\n}\n\n.noteArea {\n  padding: 20px;\n  height: 100%;\n}\n\n\n\n.bottomRow {\n\n  margin-left: auto;\n  bottom: 20px;\n  right: 20px;\n}\n\n.addTaskButton {\n  position: absolute;\n  border: none;\n  border-radius: 50%;\n  height: 50px;\n  width: 50px;\n  font-size: 24px;\n\n  bottom: 20px;\n  right: 20px;\n}\n\n\n/* Item form*/\n\n.itemForm {\n  position: absolute;\n  margin-right: auto;\n  margin-left: auto;\n  top: 190px;\n  height: 50%;\n  width: 50%;\n\n  border-radius: 1em;\n}\n\n.itemForm::backdrop {\n  background-color: hsla(105, 53%, 48%, 0.25)\n}\n\n.formContainerItem {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n\n  padding: 1em;\n\n  border-radius: 1em;\n}\n\n.formContainerItem>* {\n  flex: 1;\n}\n\n.formListItem {\n  margin-bottom: 20px;\n}\n\n.formListItem label {\n  display: inline-block;\n  width: 100%;\n  font-size: 24px;\n  font-weight: 900;\n}\n\n/* .formContainerItem input {\n  display: inline-block;\n  width: 100%;\n  font-size: 24px;\n  font-weight: 900;\n} */\n\n.formListItem input {\n  display: inline-block;\n  width: 100%;\n  font-size: 24px;\n  font-weight: 900;\n}\n\n.formListItem textarea {\n  display: inline-block;\n  width: 100%;\n  font-size: 24px;\n  font-weight: 900;\n}\n\n.secondMiddleSection {\n  display: flex;\n  justify-content: space-around;\n}\n\n.secondMiddleSection>* {\n  flex: 1;\n}\n\n.bottomSectionItem {\n  display: flex;\n  justify-content: space-around;\n}\n\n.bottomSectionItem>button {\n  padding: 20px;\n}\n\n/* Card Item*/\n\n.cardItemContainer {\n  background-color: var(--Peach);\n  color: var(--Royal-Blue);\n  border-radius: 20px;\n  margin: 20px;\n  height: 150px;\n  border: none;\n\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n}\n\n.priorityTitleSpan {\n  position: absolute;\n  bottom: 150px;\n  background-color: var(--Ghost-White);\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  padding-left: 25px;\n  padding-right: 25px;\n  text-transform: uppercase;\n  font-weight: 900;\n  font-size: 16px;\n}\n\n.leftSideSectionItem {\n  display: flex;\n  flex-direction: column;\n  flex: 0 1 30%;\n  padding: 20px;\n\n  align-items: center;\n\n  background-color: var(--Royal-Blue);\n  color: var(--Ghost-White);\n\n\n}\n\n.topSectionLeftItem {\n  flex: 2;\n}\n\n.taskSection {\n  display: flex;\n  flex-direction: column;\n}\n\n.middleSectionLeftItem {\n  flex: 1;\n}\n\n.bottomSectionLeftItem {\n  flex: 1;\n}\n\n.rightSideSectionItem {\n  flex: 2;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --Licorice: #0D0106;\n  --Zaffre: #3626A7;\n  --Glaucous: #657ED4;\n  --Scarlet: #FF331F;\n  --Ghost-White: #FBFBFF;\n  --Royal-Blue: #00539C;\n  --Peach: #EEA47F;\n}\n\nbody,\nhtml {\n  height: 100%;\n  box-sizing: border-box;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n  padding: 0;\n  margin: 0;\n  outline: 2px solid green;\n\n}\n\nbody {\n  font-size: 16px;\n  background-color: lightblue;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n#content {\n  height: 100%;\n\n\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  grid-template-rows: auto 2fr minmax(200px, 1fr);\n}\n\n#headerContainer {\n  grid-column-start: 1;\n  grid-column-end: -1;\n\n  grid-row-start: 1;\n  grid-row-end: 2;\n  background-color: var(--Licorice);\n  border: 2px solid var(--Ghost-White);\n  color: var(--Ghost-White);\n}\n\n#sideContainer {\n  grid-row-start: 2;\n  grid-row-end: 5;\n  background-color: var(--Licorice);\n  border: 2px solid var(--Ghost-White);\n  display: flex;\n  flex: 2;\n  flex-direction: column;\n}\n\n#displayCurrentPageContainer {\n  grid-row-start: 2;\n  grid-row-end: 4;\n  background-color: var(--Licorice);\n  border: 2px solid var(--Ghost-White);\n}\n\n/* Header */\n\n\n/* Side */\n\n.side {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  color: var(--Ghost-White);\n}\n\n.projectsTitle {\n  margin-bottom: 5px;\n}\n\n.topSection {\n  display: flex;\n  flex-direction: column;\n\n  flex: 1;\n}\n\n.todayFolder {\n  flex: 0 1 10%;\n  border: 2px solid var(--Ghost-White);\n\n}\n\n.upcomingFolder {\n  flex: 0 1 10%;\n  border: 2px solid var(--Ghost-White);\n\n}\n\n.folderContainer {\n  flex: 1;\n  border: 2px solid var(--Ghost-White);\n\n}\n\n.bottomSection {\n  display: inline-flex;\n  flex: 0 1 10%;\n}\n\n.addProjectContainer {\n  display: inline-flex;\n  flex: 1;\n}\n\n.addProject {\n  flex: 1;\n}\n\n.projects {\n  padding: 20px;\n}\n\n.liElement {\n  cursor: pointer;\n  padding: 10px;\n  font-size: 24px;\n  margin-bottom: 20px;\n  background-color: gray;\n  color: var(--Ghost-White);\n\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.liElement>* {\n  flex: 1;\n}\n\n.liElement:hover {\n  background-color: var(--Scarlet);\n}\n\n/* Main */\n\n\n.dialogContainer {\n  position: absolute;\n  margin-right: auto;\n  margin-left: auto;\n  top: 190px;\n  height: 50%;\n  width: 50%;\n\n  border-radius: 1em;\n\n}\n\n.dialogContainer::backdrop {\n  background-color: hsl(250, 100%, 50%, 0.25)\n}\n\n.formContainer {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  height: 100%;\n\n  padding: 1em;\n\n  border-radius: 1em;\n}\n\n.formContainer .form-list {\n  margin-bottom: 20px;\n}\n\n.formContainer>* {\n  flex: 1;\n}\n\n.formContainer label {\n  display: inline-block;\n  width: 100%;\n  font-size: 24px;\n  font-weight: 900;\n}\n\n.formContainer input {\n  margin-top: 1em;\n  padding: 1em;\n  width: 100%;\n  font-size: 18px;\n\n  border-radius: 1em;\n  border: 5px solid rgb(11, 43, 54);\n\n}\n\n.formContainer .buttonsContainer {\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n}\n\n.formContainer .buttonsContainer>* {\n  flex: 1;\n}\n\n.formContainer .cancelButton,\n.formContainer .submitButton {\n  padding: 1em;\n}\n\n.formContainer .cancelButton {\n  background-color: red;\n  border: none;\n  text-transform: uppercase;\n  font-weight: 900;\n  border-radius: 1em;\n}\n\n.formContainer .submitButton {\n  background-color: green;\n  border: none;\n  text-transform: uppercase;\n  font-weight: 900;\n  border-radius: 1em;\n}\n\n/* Main page*/\n\n.projectContainer {\n  color: var(--Ghost-White);\n  display: flex;\n  flex-direction: column;\n  overflow: scroll;\n  flex: 1;\n}\n\n.ONLINE {\n  display: block;\n}\n\n.OFFLINE {\n  display: none;\n}\n\n.currentPage {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 0.5em;\n\n  height: 100%;\n}\n\n.topRow {\n  display: flex;\n  flex-direction: column;\n  flex: 0 1 10%;\n  border-bottom: 2px solid var(--Scarlet);\n\n}\n\n.mainTitle {\n  font-size: 3rem;\n}\n\n.descriptionText {\n  font-size: 1.9rem;\n}\n\n.topRowSecond {\n  display: flex;\n  justify-content: space-between;\n}\n\n.leftSideSectionItem {\n  padding: 20px;\n}\n\n\n.middleRow {\n  display: grid;\n  grid-template-rows: repeat(2, 1fr);\n  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));\n  gap: 4px;\n\n  height: 100%;\n}\n\n.noteArea {\n  padding: 20px;\n  height: 100%;\n}\n\n\n\n.bottomRow {\n\n  margin-left: auto;\n  bottom: 20px;\n  right: 20px;\n}\n\n.addTaskButton {\n  position: absolute;\n  border: none;\n  border-radius: 50%;\n  height: 50px;\n  width: 50px;\n  font-size: 24px;\n\n  bottom: 20px;\n  right: 20px;\n}\n\n\n/* Item form*/\n\n.itemForm {\n  position: absolute;\n  margin-right: auto;\n  margin-left: auto;\n  top: 190px;\n  height: 50%;\n  width: 50%;\n\n  border-radius: 1em;\n}\n\n.itemForm::backdrop {\n  background-color: hsla(105, 53%, 48%, 0.25)\n}\n\n.formContainerItem {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n\n  padding: 1em;\n\n  border-radius: 1em;\n}\n\n.formContainerItem>* {\n  flex: 1;\n}\n\n.formListItem {\n  margin-bottom: 20px;\n}\n\n.formListItem label {\n  display: inline-block;\n  width: 100%;\n  font-size: 24px;\n  font-weight: 900;\n}\n\n/* .formContainerItem input {\n  display: inline-block;\n  width: 100%;\n  font-size: 24px;\n  font-weight: 900;\n} */\n\n.formListItem input {\n  display: inline-block;\n  width: 100%;\n  font-size: 24px;\n  font-weight: 900;\n}\n\n.formListItem textarea {\n  display: inline-block;\n  width: 100%;\n  font-size: 24px;\n  font-weight: 900;\n}\n\n.secondMiddleSection {\n  display: flex;\n  justify-content: space-around;\n}\n\n.secondMiddleSection>* {\n  flex: 1;\n}\n\n.bottomSectionItem {\n  display: flex;\n  justify-content: space-around;\n}\n\n.bottomSectionItem>button {\n  padding: 20px;\n}\n\n/* Card Item*/\n\n.cardItemContainer {\n  background-color: var(--Peach);\n  color: var(--Royal-Blue);\n  border-radius: 20px;\n  margin: 20px;\n  height: 150px;\n  border: none;\n\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n}\n\n.priorityTitleSpan {\n  position: absolute;\n  bottom: 150px;\n  background-color: var(--Ghost-White);\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  padding-left: 25px;\n  padding-right: 25px;\n  text-transform: uppercase;\n  font-weight: 900;\n  font-size: 16px;\n}\n\n.leftSideSectionItem {\n  display: flex;\n  flex-direction: column;\n  flex: 0 1 30%;\n  padding: 20px;\n\n  align-items: center;\n\n  background-color: var(--Royal-Blue);\n  color: var(--Ghost-White);\n\n\n}\n\n.topSectionLeftItem {\n  flex: 2;\n}\n\n.taskSection {\n  display: flex;\n  flex-direction: column;\n}\n\n.middleSectionLeftItem {\n  flex: 1;\n}\n\n.bottomSectionLeftItem {\n  flex: 1;\n}\n\n.rightSideSectionItem {\n  flex: 2;\n}"],"sourceRoot":""}]);
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

  (0,_View_createTabProject__WEBPACK_IMPORTED_MODULE_1__["default"])(titleInput.value, item.id);
  const stuff = (0,_View_createMainTab__WEBPACK_IMPORTED_MODULE_2__["default"])(
    titleInput.value,
    descriptionInput.value,
    item.id
  );

  titleInput.value = "";
  descriptionInput.value = "";

  return item;
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
  const mainPages = document.querySelector(".projectContainer");

  console.log(mainPages.dataset.projectid);

  (0,_openItemForm__WEBPACK_IMPORTED_MODULE_2__["default"])();

  const currentPage = document.querySelector(".currentPage");

  console.log(currentPage);

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
      console.log(project);

      if (project.id === e.target.id) {
        console.log(
          `${project.current_title} matches with ${e.target.id} being clicked on`
        );
        project.createTodoItem(
          taskInput.value,
          dateInput.value,
          priorityInput.value,
          noteInput.value
        );

        for (let i = 0; i < mainPages2.length; i += 1) {
          const pageID = mainPages2[i].getAttribute("data-projectid");
          console.log(`current pageID: ${pageID}`);

          // const middleRowTarget = pageID.querySelector(".middleRow");
          // console.log(middleRowTarget);

          if (pageID === e.target.id) {
            console.log(`${pageID} matches with ${e.target.id}`);
            mainPages2[i]
              .querySelector(".middleRow")
              .appendChild(
                (0,_View_createCardVisual__WEBPACK_IMPORTED_MODULE_1__["default"])(
                  taskInput.value,
                  noteInput.value,
                  priorityInput.value,
                  dateInput.value
                )
              );
          }
        }
      }
    });

    dialogContainer.close();
    dialogContainer.remove();
  });

  // getTaskInput.value = "";
  // getNoteInput.value = "";
  // getDateInput.value = "";
  // getPriorityInput.value = "";
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
  projects.forEach((project) =>
    console.log(
      `Title:${project.title}, \nDescription: ${project.description}, Project ID:${project.id}`
    )
  );
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
    if (value.length < 5)
      throw new Error("Invalid, note description is too short.");

    this.current_description = value;
  }

  get description() {
    return this.current_description;
  }

  createTodoItem(task, date, priority, notes, id = (0,_helpful_functions_createRandomID__WEBPACK_IMPORTED_MODULE_0__["default"])()) {
    const todoItem = new _taskTemplate__WEBPACK_IMPORTED_MODULE_1__["default"](task, date, priority, notes, id);
    this.tasks.push(todoItem);
  }

  removeTodoItem(item) {
    console.log(item);
    console.log(item.id);
    console.log(`Before: ${this.tasks}`);
    this.tasks = this.tasks.filter((task) => task.id !== item.id);
    console.log(`After: ${this.tasks}`);
    // this.#tasks = this.#tasks.filter((task) => task);
  }

  updateTodoItem(id, task, date, priority, notes) {
    this.tasks = this.task.map((item) =>
      item.id === id ? new _taskTemplate__WEBPACK_IMPORTED_MODULE_1__["default"](task, date, priority, notes, id) : item
    );
  }

  retrieveItemsInProject() {
    this.tasks.forEach((item) => console.log(item));
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
// Create how the initial card will look
function createItemCard(task, note, priority, date) {
  // grab currentPage or main page to append to

  const cardContainer = document.createElement("section");
  cardContainer.setAttribute("class", "cardItemContainer");

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
  labelTask.textContent = `${task}`;

  taskSection.appendChild(inputTask);
  taskSection.appendChild(labelTask);

  topSectionLeftItem.appendChild(taskSection);

  const middleSectionLeftItem = document.createElement("section");
  middleSectionLeftItem.setAttribute("class", "middleSectionLeftItem");

  const inputDate = document.createElement("p");
  inputDate.textContent = `${date}`;

  middleSectionLeftItem.appendChild(inputDate);

  const bottomSectionLeftItem = document.createElement("section");
  bottomSectionLeftItem.setAttribute("class", "bottomSectionLeftItem");
  const threeDotMenu = document.createElement("img");
  threeDotMenu.setAttribute("alt", "...");

  bottomSectionLeftItem.appendChild(threeDotMenu);

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

  const editButton = document.createElement("img");
  editButton.setAttribute("alt", "EDIT IMAGE");

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

  const editImageBtn = document.createElement("img");
  editImageBtn.alt = "Edit Btn";

  liElementContainer.appendChild(createTitle);
  liElementContainer.appendChild(editImageBtn);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxhQUFhLE9BQU8sS0FBSyxVQUFVLGFBQWEsT0FBTyxLQUFLLFVBQVUsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxjQUFjLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLFlBQVksS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsV0FBVyxhQUFhLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksY0FBYyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLFdBQVcsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFlBQVksVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxZQUFZLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxRQUFRLE1BQU0sWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcs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O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUMzRWU7QUFDZjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hHNEM7O0FBRTdCO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscURBQXFELEdBQUc7O0FBRXhEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QixNQUFNOztBQUVuQztBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsWUFBWTs7QUFFL0M7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBDQUEwQywyREFBTzs7QUFFakQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTs7QUFFZTtBQUNmOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7O0FDNUZlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkNBQTJDLE9BQU87O0FBRWxEO0FBQ0EsK0JBQStCLFdBQVc7O0FBRTFDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFK0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJjO0FBQ0c7O0FBRWpEO0FBQ2Y7O0FBRUE7QUFDQTs7QUFFQSw2Q0FBNkMsOEVBQVE7O0FBRXJELDBDQUEwQyx5RUFBVTtBQUNwRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLE1BQU07O0FBRU47QUFDQTs7Ozs7OztVQzNCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0EyQztBQUN0Qjs7QUFFckIsOERBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL3NyYy9jb21wb25lbnRzL0NvbnRyb2xsZXIvYWRkUHJvamVjdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL3NyYy9jb21wb25lbnRzL0NvbnRyb2xsZXIvYWRkVGFzay5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL3NyYy9jb21wb25lbnRzL0NvbnRyb2xsZXIvb3Blbkl0ZW1Gb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLy4vc3JjL2NvbXBvbmVudHMvQ29udHJvbGxlci9vcGVuUHJvamVjdEZvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9zcmMvY29tcG9uZW50cy9Nb2RlbC9jb2xsZWN0aW9uLmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLy4vc3JjL2NvbXBvbmVudHMvTW9kZWwvcHJvamVjdFRlbXBsYXRlLmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLy4vc3JjL2NvbXBvbmVudHMvTW9kZWwvdGFza1RlbXBsYXRlLmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLy4vc3JjL2NvbXBvbmVudHMvVmlldy9jcmVhdGVDYXJkVmlzdWFsLmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLy4vc3JjL2NvbXBvbmVudHMvVmlldy9jcmVhdGVJdGVtRm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL3NyYy9jb21wb25lbnRzL1ZpZXcvY3JlYXRlTWFpblRhYi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL3NyYy9jb21wb25lbnRzL1ZpZXcvY3JlYXRlUHJvamVjdEZvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9zcmMvY29tcG9uZW50cy9WaWV3L2NyZWF0ZVRhYlByb2plY3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9zcmMvaGVscGZ1bF9mdW5jdGlvbnMvY3JlYXRlUmFuZG9tSUQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9zcmMvaGVscGZ1bF9mdW5jdGlvbnMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLy4vc3JjL3BhZ2VMb2FkL3BhZ2VMb2FkLmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1MaWNvcmljZTogIzBEMDEwNjtcXG4gIC0tWmFmZnJlOiAjMzYyNkE3O1xcbiAgLS1HbGF1Y291czogIzY1N0VENDtcXG4gIC0tU2NhcmxldDogI0ZGMzMxRjtcXG4gIC0tR2hvc3QtV2hpdGU6ICNGQkZCRkY7XFxuICAtLVJveWFsLUJsdWU6ICMwMDUzOUM7XFxuICAtLVBlYWNoOiAjRUVBNDdGO1xcbn1cXG5cXG5ib2R5LFxcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKixcXG4qOmJlZm9yZSxcXG4qOmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIGdyZWVuO1xcblxcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcblxcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAyZnIgbWlubWF4KDIwMHB4LCAxZnIpO1xcbn1cXG5cXG4jaGVhZGVyQ29udGFpbmVyIHtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgZ3JpZC1jb2x1bW4tZW5kOiAtMTtcXG5cXG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgZ3JpZC1yb3ctZW5kOiAyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tTGljb3JpY2UpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tR2hvc3QtV2hpdGUpO1xcbiAgY29sb3I6IHZhcigtLUdob3N0LVdoaXRlKTtcXG59XFxuXFxuI3NpZGVDb250YWluZXIge1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICBncmlkLXJvdy1lbmQ6IDU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1MaWNvcmljZSk7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1HaG9zdC1XaGl0ZSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNkaXNwbGF5Q3VycmVudFBhZ2VDb250YWluZXIge1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICBncmlkLXJvdy1lbmQ6IDQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1MaWNvcmljZSk7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1HaG9zdC1XaGl0ZSk7XFxufVxcblxcbi8qIEhlYWRlciAqL1xcblxcblxcbi8qIFNpZGUgKi9cXG5cXG4uc2lkZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDE7XFxuICBjb2xvcjogdmFyKC0tR2hvc3QtV2hpdGUpO1xcbn1cXG5cXG4ucHJvamVjdHNUaXRsZSB7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi50b3BTZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgZmxleDogMTtcXG59XFxuXFxuLnRvZGF5Rm9sZGVyIHtcXG4gIGZsZXg6IDAgMSAxMCU7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1HaG9zdC1XaGl0ZSk7XFxuXFxufVxcblxcbi51cGNvbWluZ0ZvbGRlciB7XFxuICBmbGV4OiAwIDEgMTAlO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tR2hvc3QtV2hpdGUpO1xcblxcbn1cXG5cXG4uZm9sZGVyQ29udGFpbmVyIHtcXG4gIGZsZXg6IDE7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1HaG9zdC1XaGl0ZSk7XFxuXFxufVxcblxcbi5ib3R0b21TZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgZmxleDogMCAxIDEwJTtcXG59XFxuXFxuLmFkZFByb2plY3RDb250YWluZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uYWRkUHJvamVjdCB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLmxpRWxlbWVudCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICBjb2xvcjogdmFyKC0tR2hvc3QtV2hpdGUpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmxpRWxlbWVudD4qIHtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5saUVsZW1lbnQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tU2NhcmxldCk7XFxufVxcblxcbi8qIE1haW4gKi9cXG5cXG5cXG4uZGlhbG9nQ29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgdG9wOiAxOTBweDtcXG4gIGhlaWdodDogNTAlO1xcbiAgd2lkdGg6IDUwJTtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG5cXG59XFxuXFxuLmRpYWxvZ0NvbnRhaW5lcjo6YmFja2Ryb3Age1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI1MCwgMTAwJSwgNTAlLCAwLjI1KVxcbn1cXG5cXG4uZm9ybUNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gIGhlaWdodDogMTAwJTtcXG5cXG4gIHBhZGRpbmc6IDFlbTtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG59XFxuXFxuLmZvcm1Db250YWluZXIgLmZvcm0tbGlzdCB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uZm9ybUNvbnRhaW5lcj4qIHtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5mb3JtQ29udGFpbmVyIGxhYmVsIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLmZvcm1Db250YWluZXIgaW5wdXQge1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDE4cHg7XFxuXFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBib3JkZXI6IDVweCBzb2xpZCByZ2IoMTEsIDQzLCA1NCk7XFxuXFxufVxcblxcbi5mb3JtQ29udGFpbmVyIC5idXR0b25zQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5mb3JtQ29udGFpbmVyIC5idXR0b25zQ29udGFpbmVyPioge1xcbiAgZmxleDogMTtcXG59XFxuXFxuLmZvcm1Db250YWluZXIgLmNhbmNlbEJ1dHRvbixcXG4uZm9ybUNvbnRhaW5lciAuc3VibWl0QnV0dG9uIHtcXG4gIHBhZGRpbmc6IDFlbTtcXG59XFxuXFxuLmZvcm1Db250YWluZXIgLmNhbmNlbEJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG59XFxuXFxuLmZvcm1Db250YWluZXIgLnN1Ym1pdEJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbn1cXG5cXG4vKiBNYWluIHBhZ2UqL1xcblxcbi5wcm9qZWN0Q29udGFpbmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1HaG9zdC1XaGl0ZSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uT05MSU5FIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uT0ZGTElORSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY3VycmVudFBhZ2Uge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAwLjVlbTtcXG5cXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnRvcFJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDAgMSAxMCU7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tU2NhcmxldCk7XFxuXFxufVxcblxcbi5tYWluVGl0bGUge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4uZGVzY3JpcHRpb25UZXh0IHtcXG4gIGZvbnQtc2l6ZTogMS45cmVtO1xcbn1cXG5cXG4udG9wUm93U2Vjb25kIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5sZWZ0U2lkZVNlY3Rpb25JdGVtIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcblxcbi5taWRkbGVSb3cge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg0NTBweCwgMWZyKSk7XFxuICBnYXA6IDRweDtcXG5cXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm5vdGVBcmVhIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcblxcblxcbi5ib3R0b21Sb3cge1xcblxcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBib3R0b206IDIwcHg7XFxuICByaWdodDogMjBweDtcXG59XFxuXFxuLmFkZFRhc2tCdXR0b24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxuXFxuICBib3R0b206IDIwcHg7XFxuICByaWdodDogMjBweDtcXG59XFxuXFxuXFxuLyogSXRlbSBmb3JtKi9cXG5cXG4uaXRlbUZvcm0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICB0b3A6IDE5MHB4O1xcbiAgaGVpZ2h0OiA1MCU7XFxuICB3aWR0aDogNTAlO1xcblxcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbn1cXG5cXG4uaXRlbUZvcm06OmJhY2tkcm9wIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMTA1LCA1MyUsIDQ4JSwgMC4yNSlcXG59XFxuXFxuLmZvcm1Db250YWluZXJJdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgcGFkZGluZzogMWVtO1xcblxcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbn1cXG5cXG4uZm9ybUNvbnRhaW5lckl0ZW0+KiB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uZm9ybUxpc3RJdGVtIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5mb3JtTGlzdEl0ZW0gbGFiZWwge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4vKiAuZm9ybUNvbnRhaW5lckl0ZW0gaW5wdXQge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn0gKi9cXG5cXG4uZm9ybUxpc3RJdGVtIGlucHV0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLmZvcm1MaXN0SXRlbSB0ZXh0YXJlYSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5zZWNvbmRNaWRkbGVTZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLnNlY29uZE1pZGRsZVNlY3Rpb24+KiB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uYm90dG9tU2VjdGlvbkl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uYm90dG9tU2VjdGlvbkl0ZW0+YnV0dG9uIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi8qIENhcmQgSXRlbSovXFxuXFxuLmNhcmRJdGVtQ29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBlYWNoKTtcXG4gIGNvbG9yOiB2YXIoLS1Sb3lhbC1CbHVlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBtYXJnaW46IDIwcHg7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgYm9yZGVyOiBub25lO1xcblxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnByaW9yaXR5VGl0bGVTcGFuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMTUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1HaG9zdC1XaGl0ZSk7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbiAgcGFkZGluZy1yaWdodDogMjVweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4ubGVmdFNpZGVTZWN0aW9uSXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDAgMSAzMCU7XFxuICBwYWRkaW5nOiAyMHB4O1xcblxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVJveWFsLUJsdWUpO1xcbiAgY29sb3I6IHZhcigtLUdob3N0LVdoaXRlKTtcXG5cXG5cXG59XFxuXFxuLnRvcFNlY3Rpb25MZWZ0SXRlbSB7XFxuICBmbGV4OiAyO1xcbn1cXG5cXG4udGFza1NlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5taWRkbGVTZWN0aW9uTGVmdEl0ZW0ge1xcbiAgZmxleDogMTtcXG59XFxuXFxuLmJvdHRvbVNlY3Rpb25MZWZ0SXRlbSB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4ucmlnaHRTaWRlU2VjdGlvbkl0ZW0ge1xcbiAgZmxleDogMjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUVBOzs7RUFHRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFNBQVM7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O0VBQ3hCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7O0VBRVosa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG9DQUFvQztFQUNwQywyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsYUFBYTs7RUFFYixtQkFBbUI7O0VBRW5CLG1DQUFtQztFQUNuQyx5QkFBeUI7OztBQUczQjs7QUFFQTtFQUNFLE9BQU87QUFDVDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxPQUFPO0FBQ1RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1MaWNvcmljZTogIzBEMDEwNjtcXG4gIC0tWmFmZnJlOiAjMzYyNkE3O1xcbiAgLS1HbGF1Y291czogIzY1N0VENDtcXG4gIC0tU2NhcmxldDogI0ZGMzMxRjtcXG4gIC0tR2hvc3QtV2hpdGU6ICNGQkZCRkY7XFxuICAtLVJveWFsLUJsdWU6ICMwMDUzOUM7XFxuICAtLVBlYWNoOiAjRUVBNDdGO1xcbn1cXG5cXG5ib2R5LFxcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKixcXG4qOmJlZm9yZSxcXG4qOmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIGdyZWVuO1xcblxcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcblxcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAyZnIgbWlubWF4KDIwMHB4LCAxZnIpO1xcbn1cXG5cXG4jaGVhZGVyQ29udGFpbmVyIHtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgZ3JpZC1jb2x1bW4tZW5kOiAtMTtcXG5cXG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgZ3JpZC1yb3ctZW5kOiAyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tTGljb3JpY2UpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tR2hvc3QtV2hpdGUpO1xcbiAgY29sb3I6IHZhcigtLUdob3N0LVdoaXRlKTtcXG59XFxuXFxuI3NpZGVDb250YWluZXIge1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICBncmlkLXJvdy1lbmQ6IDU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1MaWNvcmljZSk7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1HaG9zdC1XaGl0ZSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNkaXNwbGF5Q3VycmVudFBhZ2VDb250YWluZXIge1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICBncmlkLXJvdy1lbmQ6IDQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1MaWNvcmljZSk7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1HaG9zdC1XaGl0ZSk7XFxufVxcblxcbi8qIEhlYWRlciAqL1xcblxcblxcbi8qIFNpZGUgKi9cXG5cXG4uc2lkZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDE7XFxuICBjb2xvcjogdmFyKC0tR2hvc3QtV2hpdGUpO1xcbn1cXG5cXG4ucHJvamVjdHNUaXRsZSB7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi50b3BTZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgZmxleDogMTtcXG59XFxuXFxuLnRvZGF5Rm9sZGVyIHtcXG4gIGZsZXg6IDAgMSAxMCU7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1HaG9zdC1XaGl0ZSk7XFxuXFxufVxcblxcbi51cGNvbWluZ0ZvbGRlciB7XFxuICBmbGV4OiAwIDEgMTAlO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tR2hvc3QtV2hpdGUpO1xcblxcbn1cXG5cXG4uZm9sZGVyQ29udGFpbmVyIHtcXG4gIGZsZXg6IDE7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1HaG9zdC1XaGl0ZSk7XFxuXFxufVxcblxcbi5ib3R0b21TZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgZmxleDogMCAxIDEwJTtcXG59XFxuXFxuLmFkZFByb2plY3RDb250YWluZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uYWRkUHJvamVjdCB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLmxpRWxlbWVudCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICBjb2xvcjogdmFyKC0tR2hvc3QtV2hpdGUpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmxpRWxlbWVudD4qIHtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5saUVsZW1lbnQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tU2NhcmxldCk7XFxufVxcblxcbi8qIE1haW4gKi9cXG5cXG5cXG4uZGlhbG9nQ29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgdG9wOiAxOTBweDtcXG4gIGhlaWdodDogNTAlO1xcbiAgd2lkdGg6IDUwJTtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG5cXG59XFxuXFxuLmRpYWxvZ0NvbnRhaW5lcjo6YmFja2Ryb3Age1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI1MCwgMTAwJSwgNTAlLCAwLjI1KVxcbn1cXG5cXG4uZm9ybUNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gIGhlaWdodDogMTAwJTtcXG5cXG4gIHBhZGRpbmc6IDFlbTtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG59XFxuXFxuLmZvcm1Db250YWluZXIgLmZvcm0tbGlzdCB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uZm9ybUNvbnRhaW5lcj4qIHtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5mb3JtQ29udGFpbmVyIGxhYmVsIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLmZvcm1Db250YWluZXIgaW5wdXQge1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDE4cHg7XFxuXFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBib3JkZXI6IDVweCBzb2xpZCByZ2IoMTEsIDQzLCA1NCk7XFxuXFxufVxcblxcbi5mb3JtQ29udGFpbmVyIC5idXR0b25zQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5mb3JtQ29udGFpbmVyIC5idXR0b25zQ29udGFpbmVyPioge1xcbiAgZmxleDogMTtcXG59XFxuXFxuLmZvcm1Db250YWluZXIgLmNhbmNlbEJ1dHRvbixcXG4uZm9ybUNvbnRhaW5lciAuc3VibWl0QnV0dG9uIHtcXG4gIHBhZGRpbmc6IDFlbTtcXG59XFxuXFxuLmZvcm1Db250YWluZXIgLmNhbmNlbEJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG59XFxuXFxuLmZvcm1Db250YWluZXIgLnN1Ym1pdEJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbn1cXG5cXG4vKiBNYWluIHBhZ2UqL1xcblxcbi5wcm9qZWN0Q29udGFpbmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1HaG9zdC1XaGl0ZSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uT05MSU5FIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uT0ZGTElORSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY3VycmVudFBhZ2Uge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAwLjVlbTtcXG5cXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnRvcFJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDAgMSAxMCU7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tU2NhcmxldCk7XFxuXFxufVxcblxcbi5tYWluVGl0bGUge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4uZGVzY3JpcHRpb25UZXh0IHtcXG4gIGZvbnQtc2l6ZTogMS45cmVtO1xcbn1cXG5cXG4udG9wUm93U2Vjb25kIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5sZWZ0U2lkZVNlY3Rpb25JdGVtIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcblxcbi5taWRkbGVSb3cge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg0NTBweCwgMWZyKSk7XFxuICBnYXA6IDRweDtcXG5cXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm5vdGVBcmVhIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcblxcblxcbi5ib3R0b21Sb3cge1xcblxcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBib3R0b206IDIwcHg7XFxuICByaWdodDogMjBweDtcXG59XFxuXFxuLmFkZFRhc2tCdXR0b24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxuXFxuICBib3R0b206IDIwcHg7XFxuICByaWdodDogMjBweDtcXG59XFxuXFxuXFxuLyogSXRlbSBmb3JtKi9cXG5cXG4uaXRlbUZvcm0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICB0b3A6IDE5MHB4O1xcbiAgaGVpZ2h0OiA1MCU7XFxuICB3aWR0aDogNTAlO1xcblxcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbn1cXG5cXG4uaXRlbUZvcm06OmJhY2tkcm9wIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMTA1LCA1MyUsIDQ4JSwgMC4yNSlcXG59XFxuXFxuLmZvcm1Db250YWluZXJJdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgcGFkZGluZzogMWVtO1xcblxcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbn1cXG5cXG4uZm9ybUNvbnRhaW5lckl0ZW0+KiB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uZm9ybUxpc3RJdGVtIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5mb3JtTGlzdEl0ZW0gbGFiZWwge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4vKiAuZm9ybUNvbnRhaW5lckl0ZW0gaW5wdXQge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn0gKi9cXG5cXG4uZm9ybUxpc3RJdGVtIGlucHV0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLmZvcm1MaXN0SXRlbSB0ZXh0YXJlYSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5zZWNvbmRNaWRkbGVTZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLnNlY29uZE1pZGRsZVNlY3Rpb24+KiB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uYm90dG9tU2VjdGlvbkl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uYm90dG9tU2VjdGlvbkl0ZW0+YnV0dG9uIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi8qIENhcmQgSXRlbSovXFxuXFxuLmNhcmRJdGVtQ29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBlYWNoKTtcXG4gIGNvbG9yOiB2YXIoLS1Sb3lhbC1CbHVlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBtYXJnaW46IDIwcHg7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgYm9yZGVyOiBub25lO1xcblxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnByaW9yaXR5VGl0bGVTcGFuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMTUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1HaG9zdC1XaGl0ZSk7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbiAgcGFkZGluZy1yaWdodDogMjVweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4ubGVmdFNpZGVTZWN0aW9uSXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDAgMSAzMCU7XFxuICBwYWRkaW5nOiAyMHB4O1xcblxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVJveWFsLUJsdWUpO1xcbiAgY29sb3I6IHZhcigtLUdob3N0LVdoaXRlKTtcXG5cXG5cXG59XFxuXFxuLnRvcFNlY3Rpb25MZWZ0SXRlbSB7XFxuICBmbGV4OiAyO1xcbn1cXG5cXG4udGFza1NlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5taWRkbGVTZWN0aW9uTGVmdEl0ZW0ge1xcbiAgZmxleDogMTtcXG59XFxuXFxuLmJvdHRvbVNlY3Rpb25MZWZ0SXRlbSB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4ucmlnaHRTaWRlU2VjdGlvbkl0ZW0ge1xcbiAgZmxleDogMjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNyZWF0ZVByb2plY3QgfSBmcm9tIFwiLi4vTW9kZWwvY29sbGVjdGlvblwiO1xuaW1wb3J0IGNyZWF0ZVByb2plY3RUYWIgZnJvbSBcIi4uL1ZpZXcvY3JlYXRlVGFiUHJvamVjdFwiO1xuaW1wb3J0IGNyZWF0ZU1haW5UYWIgZnJvbSBcIi4uL1ZpZXcvY3JlYXRlTWFpblRhYlwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRQcm9qZWN0KGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpO1xuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKTtcblxuICBjb25zdCBpdGVtID0gY3JlYXRlUHJvamVjdCh0aXRsZUlucHV0LnZhbHVlLCBkZXNjcmlwdGlvbklucHV0LnZhbHVlKTtcblxuICBjcmVhdGVQcm9qZWN0VGFiKHRpdGxlSW5wdXQudmFsdWUsIGl0ZW0uaWQpO1xuICBjb25zdCBzdHVmZiA9IGNyZWF0ZU1haW5UYWIoXG4gICAgdGl0bGVJbnB1dC52YWx1ZSxcbiAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlLFxuICAgIGl0ZW0uaWRcbiAgKTtcblxuICB0aXRsZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IFwiXCI7XG5cbiAgcmV0dXJuIGl0ZW07XG59XG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuLi9Nb2RlbC9jb2xsZWN0aW9uXCI7XG5pbXBvcnQgY3JlYXRlSXRlbUNhcmQgZnJvbSBcIi4uL1ZpZXcvY3JlYXRlQ2FyZFZpc3VhbFwiO1xuaW1wb3J0IG9wZW5JdGVtRm9ybSBmcm9tIFwiLi9vcGVuSXRlbUZvcm1cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkSXRlbShlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgbWFpblBhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0Q29udGFpbmVyXCIpO1xuXG4gIGNvbnNvbGUubG9nKG1haW5QYWdlcy5kYXRhc2V0LnByb2plY3RpZCk7XG5cbiAgb3Blbkl0ZW1Gb3JtKCk7XG5cbiAgY29uc3QgY3VycmVudFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnRQYWdlXCIpO1xuXG4gIGNvbnNvbGUubG9nKGN1cnJlbnRQYWdlKTtcblxuICAvLyBXZSB3YW50IHRvIGdvIHRocm91Z2ggY3VycmVudFBhZ2UgY2hpbGRyZW4gYW5kIGZpbmQgd2hpY2ggSUQgbWF0Y2hlcyB3aXRoIG91ciBlLnRhcmdldC5pZCwgaWYgc28gd2UgYXBwZW5kIGNyZWF0ZVZpc3VhbEl0ZW1DYXJkXG5cbiAgY29uc3QgdGFza0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrXCIpO1xuICBjb25zdCBub3RlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGVcIik7XG4gIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVwiKTtcbiAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0XCIpO1xuXG4gIGNvbnN0IGRpYWxvZ0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaXRlbUZvcm1cIik7XG5cbiAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pdGVtQ2FuY2VsXCIpO1xuXG4gIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRpYWxvZ0NvbnRhaW5lci5jbG9zZSgpO1xuICAgIGRpYWxvZ0NvbnRhaW5lci5yZW1vdmUoKTtcbiAgfSk7XG5cbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pdGVtU3VibWl0XCIpO1xuICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBtYWluUGFnZXMyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0Q29udGFpbmVyXCIpO1xuXG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgY29uc29sZS5sb2cocHJvamVjdCk7XG5cbiAgICAgIGlmIChwcm9qZWN0LmlkID09PSBlLnRhcmdldC5pZCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICBgJHtwcm9qZWN0LmN1cnJlbnRfdGl0bGV9IG1hdGNoZXMgd2l0aCAke2UudGFyZ2V0LmlkfSBiZWluZyBjbGlja2VkIG9uYFxuICAgICAgICApO1xuICAgICAgICBwcm9qZWN0LmNyZWF0ZVRvZG9JdGVtKFxuICAgICAgICAgIHRhc2tJbnB1dC52YWx1ZSxcbiAgICAgICAgICBkYXRlSW5wdXQudmFsdWUsXG4gICAgICAgICAgcHJpb3JpdHlJbnB1dC52YWx1ZSxcbiAgICAgICAgICBub3RlSW5wdXQudmFsdWVcbiAgICAgICAgKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1haW5QYWdlczIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBjb25zdCBwYWdlSUQgPSBtYWluUGFnZXMyW2ldLmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdGlkXCIpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBjdXJyZW50IHBhZ2VJRDogJHtwYWdlSUR9YCk7XG5cbiAgICAgICAgICAvLyBjb25zdCBtaWRkbGVSb3dUYXJnZXQgPSBwYWdlSUQucXVlcnlTZWxlY3RvcihcIi5taWRkbGVSb3dcIik7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2cobWlkZGxlUm93VGFyZ2V0KTtcblxuICAgICAgICAgIGlmIChwYWdlSUQgPT09IGUudGFyZ2V0LmlkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtwYWdlSUR9IG1hdGNoZXMgd2l0aCAke2UudGFyZ2V0LmlkfWApO1xuICAgICAgICAgICAgbWFpblBhZ2VzMltpXVxuICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5taWRkbGVSb3dcIilcbiAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgICAgIGNyZWF0ZUl0ZW1DYXJkKFxuICAgICAgICAgICAgICAgICAgdGFza0lucHV0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgbm90ZUlucHV0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgcHJpb3JpdHlJbnB1dC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgIGRhdGVJbnB1dC52YWx1ZVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGRpYWxvZ0NvbnRhaW5lci5jbG9zZSgpO1xuICAgIGRpYWxvZ0NvbnRhaW5lci5yZW1vdmUoKTtcbiAgfSk7XG5cbiAgLy8gZ2V0VGFza0lucHV0LnZhbHVlID0gXCJcIjtcbiAgLy8gZ2V0Tm90ZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgLy8gZ2V0RGF0ZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgLy8gZ2V0UHJpb3JpdHlJbnB1dC52YWx1ZSA9IFwiXCI7XG59XG4iLCJpbXBvcnQgY3JlYXRlSXRlbUZvcm0gZnJvbSBcIi4uL1ZpZXcvY3JlYXRlSXRlbUZvcm1cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3Blbkl0ZW1Gb3JtKCkge1xuICBjcmVhdGVJdGVtRm9ybSgpO1xuICBjb25zdCBmb3JtT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaXRlbUZvcm1cIik7XG4gIGZvcm1PcGVuLnNob3dNb2RhbCgpO1xufVxuIiwiaW1wb3J0IGNyZWF0ZVByb2plY3RGb3JtIGZyb20gXCIuLi9WaWV3L2NyZWF0ZVByb2plY3RGb3JtXCI7XG5cbmNyZWF0ZVByb2plY3RGb3JtKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9wZW5Gb3JtKCkge1xuICBjb25zdCBmb3JtT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlhbG9nQ29udGFpbmVyXCIpO1xuICBmb3JtT3Blbi5zaG93TW9kYWwoKTtcbn1cbiIsImltcG9ydCB7IGxvb2tGb3JEYXRhSW5MUyB9IGZyb20gXCIuLi8uLi9oZWxwZnVsX2Z1bmN0aW9ucy9sb2NhbFN0b3JhZ2VcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RUZW1wbGF0ZVwiO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLW11dGFibGUtZXhwb3J0c1xubGV0IHByb2plY3RzID0gW107XG5cbmNvbnN0IGNyZWF0ZVByb2plY3QgPSAodGl0bGUsIGRlc2NyaXB0aW9uKSA9PiB7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24pO1xuICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuXG4gIHJldHVybiBuZXdQcm9qZWN0O1xufTtcblxuY29uc3QgZGVsZXRlUHJvamVjdCA9IChpdGVtKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBDYWxsaW5nIFByb2plY3RzIGJlZm9yZSBmaWx0ZXI6ICR7cHJvamVjdHN9YCk7XG4gIHByb2plY3RzID0gcHJvamVjdHMuZmlsdGVyKChvYmplY3QpID0+IG9iamVjdC5pZCAhPT0gaXRlbS5pZCk7XG4gIGNvbnNvbGUubG9nKGBDYWxsaW5nIFByb2plY3RzIGFmdGVyIGZpbHRlcjogJHtwcm9qZWN0c31gKTtcbn07XG5cbmNvbnN0IHVwZGF0ZUluZm9ybWF0aW9uID0gKGlkLCB0aXRsZSwgZGVzY3JpcHRpb24pID0+IHtcbiAgcHJvamVjdHMgPSBwcm9qZWN0cy5tYXAoKGl0ZW0pID0+XG4gICAgaXRlbS5pZCA9PT0gaWQgPyBuZXcgUHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24sIGlkKSA6IGl0ZW1cbiAgKTtcbn07XG5cbmNvbnN0IHJlYWRJbmZvcm1hdGlvbiA9ICgpID0+IHtcbiAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT5cbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIGBUaXRsZToke3Byb2plY3QudGl0bGV9LCBcXG5EZXNjcmlwdGlvbjogJHtwcm9qZWN0LmRlc2NyaXB0aW9ufSwgUHJvamVjdCBJRDoke3Byb2plY3QuaWR9YFxuICAgIClcbiAgKTtcbn07XG5cbi8vIFN0aWxsIHRoaW5raW5nIGFib3V0IGhvdyBJJ2xsIHVzZSBzZXRQcm9qZWN0c1xuY29uc3Qgc2V0UHJvamVjdHMgPSAodmFsdWUpID0+IHByb2plY3RzLnB1c2godmFsdWUpO1xuXG5jb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHByb2plY3RzO1xuXG5jb25zdCByZXRyaWV2ZUZyb21Mb2NhbFN0b3JhZ2UgPSAoa2V5TmFtZSkgPT4ge1xuICBjb25zdCBoZWxsbyA9IGxvb2tGb3JEYXRhSW5MUyhrZXlOYW1lKTtcbiAgLy8gZGF0YS5mb3JFYWNoKChpdGVtKSA9PlxuICAvLyAgIHNldFByb2plY3RzKE9iamVjdC5hc3NpZ24obmV3IFByb2plY3QoKSwgaXRlbSkpXG4gIGNvbnNvbGUubG9nKGhlbGxvKTtcbiAgcmV0dXJuIGhlbGxvLmZvckVhY2goKGl0ZW0pID0+XG4gICAgc2V0UHJvamVjdHMoT2JqZWN0LmFzc2lnbihuZXcgUHJvamVjdCgpLCBpdGVtKSlcbiAgKTtcbn07XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZVByb2plY3QsXG4gIGdldFByb2plY3RzLFxuICBwcm9qZWN0cyxcbiAgc2V0UHJvamVjdHMsXG4gIGRlbGV0ZVByb2plY3QsXG4gIHJldHJpZXZlRnJvbUxvY2FsU3RvcmFnZSxcbiAgdXBkYXRlSW5mb3JtYXRpb24sXG4gIHJlYWRJbmZvcm1hdGlvbixcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1kdXBlLWNsYXNzLW1lbWJlcnMgKi9cbi8vIEZvciBGb2xkZXIgTmFtZXNcbmltcG9ydCByYW5kb21TdHJpbmcgZnJvbSBcIi4uLy4uL2hlbHBmdWxfZnVuY3Rpb25zL2NyZWF0ZVJhbmRvbUlEXCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrVGVtcGxhdGVcIjtcblxuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgaWQgPSByYW5kb21TdHJpbmcoKSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMudGFza3MgPSBbXTtcbiAgfVxuXG4gIHNldCB0aXRsZSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZS5sZW5ndGggPCAzKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCwgbm90ZSBkZXNjcmlwdGlvbiBpcyB0b28gc2hvcnQuXCIpO1xuXG4gICAgdGhpcy5jdXJyZW50X3RpdGxlID0gdmFsdWU7XG4gIH1cblxuICBnZXQgdGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudF90aXRsZTtcbiAgfVxuXG4gIHNldCBkZXNjcmlwdGlvbih2YWx1ZSkge1xuICAgIGlmICh2YWx1ZS5sZW5ndGggPCA1KVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCwgbm90ZSBkZXNjcmlwdGlvbiBpcyB0b28gc2hvcnQuXCIpO1xuXG4gICAgdGhpcy5jdXJyZW50X2Rlc2NyaXB0aW9uID0gdmFsdWU7XG4gIH1cblxuICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudF9kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIGNyZWF0ZVRvZG9JdGVtKHRhc2ssIGRhdGUsIHByaW9yaXR5LCBub3RlcywgaWQgPSByYW5kb21TdHJpbmcoKSkge1xuICAgIGNvbnN0IHRvZG9JdGVtID0gbmV3IFRhc2sodGFzaywgZGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBpZCk7XG4gICAgdGhpcy50YXNrcy5wdXNoKHRvZG9JdGVtKTtcbiAgfVxuXG4gIHJlbW92ZVRvZG9JdGVtKGl0ZW0pIHtcbiAgICBjb25zb2xlLmxvZyhpdGVtKTtcbiAgICBjb25zb2xlLmxvZyhpdGVtLmlkKTtcbiAgICBjb25zb2xlLmxvZyhgQmVmb3JlOiAke3RoaXMudGFza3N9YCk7XG4gICAgdGhpcy50YXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmlkICE9PSBpdGVtLmlkKTtcbiAgICBjb25zb2xlLmxvZyhgQWZ0ZXI6ICR7dGhpcy50YXNrc31gKTtcbiAgICAvLyB0aGlzLiN0YXNrcyA9IHRoaXMuI3Rhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzayk7XG4gIH1cblxuICB1cGRhdGVUb2RvSXRlbShpZCwgdGFzaywgZGF0ZSwgcHJpb3JpdHksIG5vdGVzKSB7XG4gICAgdGhpcy50YXNrcyA9IHRoaXMudGFzay5tYXAoKGl0ZW0pID0+XG4gICAgICBpdGVtLmlkID09PSBpZCA/IG5ldyBUYXNrKHRhc2ssIGRhdGUsIHByaW9yaXR5LCBub3RlcywgaWQpIDogaXRlbVxuICAgICk7XG4gIH1cblxuICByZXRyaWV2ZUl0ZW1zSW5Qcm9qZWN0KCkge1xuICAgIHRoaXMudGFza3MuZm9yRWFjaCgoaXRlbSkgPT4gY29uc29sZS5sb2coaXRlbSkpO1xuICB9XG5cbiAgYnlJRChpZCkge1xuICAgIHJldHVybiB0aGlzLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IGlkKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWR1cGUtY2xhc3MtbWVtYmVycyAqL1xuY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRhc2ssIGRhdGUsIHByaW9yaXR5LCBub3RlcywgaWQpIHtcbiAgICB0aGlzLnRhc2sgPSB0YXNrO1xuICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMubm90ZXMgPSBub3RlcztcblxuICAgIHRoaXMuaWQgPSBpZDtcbiAgfVxuXG4gIGdldCB0YXNrKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRfdGFzaztcbiAgfVxuXG4gIHNldCB0YXNrKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSBcIlwiIHx8IHZhbHVlLmxlbmd0aCA8IDMpIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgVGFza1wiKTtcblxuICAgIHRoaXMuY3VycmVudF90YXNrID0gdmFsdWU7XG4gIH1cblxuICBnZXQgcHJpb3JpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudF9wcmlvcml0eTtcbiAgfVxuXG4gIC8vIHNldCBwcmlvcml0eSh2YWx1ZSkge1xuICAvLyAgIGlmICghW1wiaGlnaFwiLCBcIm1lZGl1bVwiLCBcImxvd1wiXS5pbmNsdWRlcyh2YWx1ZS50b0xvd2VyQ2FzZSgpKSlcbiAgLy8gICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQsIG5vdCBvbmUgb2YgdGhlIGNob2ljZXNcIik7XG5cbiAgLy8gICB0aGlzLmN1cnJlbnRfcHJpb3JpdHkgPSB2YWx1ZTtcbiAgLy8gfVxuXG4gIHNldCBwcmlvcml0eSh2YWx1ZSkge1xuICAgIHRoaXMuY3VycmVudF9wcmlvcml0eSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IG5vdGVzKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRfbm90ZXM7XG4gIH1cblxuICBzZXQgbm90ZXModmFsdWUpIHtcbiAgICBpZiAodmFsdWUubGVuZ3RoIDwgMTApXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkLCBub3RlIGRlc2NyaXB0aW9uIGlzIHRvbyBzaG9ydC5cIik7XG5cbiAgICB0aGlzLmN1cnJlbnRfbm90ZXMgPSB2YWx1ZTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGFzazogdGhpcy50YXNrLFxuICAgICAgZGF0ZTogdGhpcy5kYXRlLFxuICAgICAgcHJpb3JpdHk6IHRoaXMucHJpb3JpdHksXG4gICAgICBub3RlczogdGhpcy5ub3RlcyxcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFzaztcbiIsIi8vIENyZWF0ZSBob3cgdGhlIGluaXRpYWwgY2FyZCB3aWxsIGxvb2tcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUl0ZW1DYXJkKHRhc2ssIG5vdGUsIHByaW9yaXR5LCBkYXRlKSB7XG4gIC8vIGdyYWIgY3VycmVudFBhZ2Ugb3IgbWFpbiBwYWdlIHRvIGFwcGVuZCB0b1xuXG4gIGNvbnN0IGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgY2FyZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhcmRJdGVtQ29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IHByaW9yaXR5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgcHJpb3JpdHlUaXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByaW9yaXR5VGl0bGVTcGFuXCIpO1xuICBwcmlvcml0eVRpdGxlLnRleHRDb250ZW50ID0gYCR7cHJpb3JpdHl9YDtcblxuICBjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5VGl0bGUpO1xuXG4gIGNvbnN0IGxlZnRTaWRlU2VjdGlvbkl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgbGVmdFNpZGVTZWN0aW9uSXRlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxlZnRTaWRlU2VjdGlvbkl0ZW1cIik7XG5cbiAgY29uc3QgdG9wU2VjdGlvbkxlZnRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIHRvcFNlY3Rpb25MZWZ0SXRlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvcFNlY3Rpb25MZWZ0SXRlbVwiKTtcblxuICBjb25zdCB0YXNrU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICB0YXNrU2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2tTZWN0aW9uXCIpO1xuXG4gIGNvbnN0IGlucHV0VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXRUYXNrLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgY29uc3QgbGFiZWxUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbFRhc2sudGV4dENvbnRlbnQgPSBgJHt0YXNrfWA7XG5cbiAgdGFza1NlY3Rpb24uYXBwZW5kQ2hpbGQoaW5wdXRUYXNrKTtcbiAgdGFza1NlY3Rpb24uYXBwZW5kQ2hpbGQobGFiZWxUYXNrKTtcblxuICB0b3BTZWN0aW9uTGVmdEl0ZW0uYXBwZW5kQ2hpbGQodGFza1NlY3Rpb24pO1xuXG4gIGNvbnN0IG1pZGRsZVNlY3Rpb25MZWZ0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBtaWRkbGVTZWN0aW9uTGVmdEl0ZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtaWRkbGVTZWN0aW9uTGVmdEl0ZW1cIik7XG5cbiAgY29uc3QgaW5wdXREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGlucHV0RGF0ZS50ZXh0Q29udGVudCA9IGAke2RhdGV9YDtcblxuICBtaWRkbGVTZWN0aW9uTGVmdEl0ZW0uYXBwZW5kQ2hpbGQoaW5wdXREYXRlKTtcblxuICBjb25zdCBib3R0b21TZWN0aW9uTGVmdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgYm90dG9tU2VjdGlvbkxlZnRJdGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYm90dG9tU2VjdGlvbkxlZnRJdGVtXCIpO1xuICBjb25zdCB0aHJlZURvdE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICB0aHJlZURvdE1lbnUuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiLi4uXCIpO1xuXG4gIGJvdHRvbVNlY3Rpb25MZWZ0SXRlbS5hcHBlbmRDaGlsZCh0aHJlZURvdE1lbnUpO1xuXG4gIGxlZnRTaWRlU2VjdGlvbkl0ZW0uYXBwZW5kQ2hpbGQodG9wU2VjdGlvbkxlZnRJdGVtKTtcbiAgbGVmdFNpZGVTZWN0aW9uSXRlbS5hcHBlbmRDaGlsZChtaWRkbGVTZWN0aW9uTGVmdEl0ZW0pO1xuICBsZWZ0U2lkZVNlY3Rpb25JdGVtLmFwcGVuZENoaWxkKGJvdHRvbVNlY3Rpb25MZWZ0SXRlbSk7XG5cbiAgY29uc3QgcmlnaHRTaWRlU2VjdGlvbkl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgcmlnaHRTaWRlU2VjdGlvbkl0ZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJyaWdodFNpZGVTZWN0aW9uSXRlbVwiKTtcblxuICBjb25zdCBub3RlQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBub3RlQXJlYS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5vdGVBcmVhXCIpO1xuICBub3RlQXJlYS50ZXh0Q29udGVudCA9IGAke25vdGV9YDtcblxuICByaWdodFNpZGVTZWN0aW9uSXRlbS5hcHBlbmRDaGlsZChub3RlQXJlYSk7XG5cbiAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChsZWZ0U2lkZVNlY3Rpb25JdGVtKTtcbiAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChyaWdodFNpZGVTZWN0aW9uSXRlbSk7XG5cbiAgcmV0dXJuIGNhcmRDb250YWluZXI7XG59XG5cbi8qIFxuXG5bXG4gIFtdVEFTS1xuICBbTk9URVMgSEVSRV1cblxuXG5dXG5cbiovXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVJdGVtRm9ybSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICBjb25zdCBkaWFsb2dDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xuICBkaWFsb2dDb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpdGVtRm9ybVwiKTtcblxuICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvcm1Db250YWluZXJJdGVtXCIpO1xuXG4gIGNvbnN0IHRvcFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgdG9wU2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvcFNlY3Rpb25JdGVtIGZvcm1MaXN0SXRlbVwiKTtcblxuICBjb25zdCB0YXNrTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIHRhc2tMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0YXNrXCIpO1xuICB0YXNrTGFiZWwudGV4dENvbnRlbnQgPSBcIlRhc2s6XCI7XG5cbiAgY29uc3QgdGFza0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0YXNrSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrXCIpO1xuICB0YXNrSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5cbiAgdG9wU2VjdGlvbi5hcHBlbmRDaGlsZCh0YXNrTGFiZWwpO1xuICB0b3BTZWN0aW9uLmFwcGVuZENoaWxkKHRhc2tJbnB1dCk7XG5cbiAgdG9wU2VjdGlvbi5hcHBlbmRDaGlsZCh0YXNrTGFiZWwpO1xuICB0b3BTZWN0aW9uLmFwcGVuZENoaWxkKHRhc2tJbnB1dCk7XG5cbiAgY29uc3QgbWlkZGxlU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBtaWRkbGVTZWN0aW9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWlkZGxlU2VjdGlvbkl0ZW0gZm9ybUxpc3RJdGVtXCIpO1xuXG4gIGNvbnN0IHRleHRBcmVhTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIHRleHRBcmVhTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibm90ZVwiKTtcbiAgdGV4dEFyZWFMYWJlbC50ZXh0Q29udGVudCA9IFwiTm90ZTpcIjtcblxuICBjb25zdCB0ZXh0QXJlYUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICB0ZXh0QXJlYUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICB0ZXh0QXJlYUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibm90ZVwiKTtcblxuICBtaWRkbGVTZWN0aW9uLmFwcGVuZENoaWxkKHRleHRBcmVhTGFiZWwpO1xuICBtaWRkbGVTZWN0aW9uLmFwcGVuZENoaWxkKHRleHRBcmVhSW5wdXQpO1xuXG4gIGNvbnN0IHNlY29uZE1pZGRsZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgc2Vjb25kTWlkZGxlU2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNlY29uZE1pZGRsZVNlY3Rpb24gZm9ybUxpc3RJdGVtXCIpO1xuXG4gIGNvbnN0IGNhbGVuZGFySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNhbGVuZGFySW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkYXRlXCIpO1xuICBjYWxlbmRhcklucHV0LnR5cGUgPSBcImRhdGVcIjtcblxuICBjb25zdCBzZWxlY3REcm9wRG93bklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgc2VsZWN0RHJvcERvd25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlbGVjdFwiKTtcbiAgY29uc3QgbG93VGllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIGxvd1RpZXIuc2V0QXR0cmlidXRlID0gKFwidmFsdWVcIiwgXCJsb3dcIik7XG4gIGxvd1RpZXIudGV4dENvbnRlbnQgPSBcIkxvd1wiO1xuXG4gIGNvbnN0IG1lZGl1bVRpZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBtZWRpdW1UaWVyLnNldEF0dHJpYnV0ZSA9IChcInZhbHVlXCIsIFwibWVkaXVtXCIpO1xuICBtZWRpdW1UaWVyLnRleHRDb250ZW50ID0gXCJNZWRpdW1cIjtcblxuICBjb25zdCBoaWdoVGllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIGhpZ2hUaWVyLnNldEF0dHJpYnV0ZSA9IChcInZhbHVlXCIsIFwiaGlnaFwiKTtcbiAgaGlnaFRpZXIudGV4dENvbnRlbnQgPSBcIkhpZ2hcIjtcblxuICBzZWxlY3REcm9wRG93bklucHV0LmFwcGVuZENoaWxkKGxvd1RpZXIpO1xuICBzZWxlY3REcm9wRG93bklucHV0LmFwcGVuZENoaWxkKG1lZGl1bVRpZXIpO1xuICBzZWxlY3REcm9wRG93bklucHV0LmFwcGVuZENoaWxkKGhpZ2hUaWVyKTtcblxuICBzZWNvbmRNaWRkbGVTZWN0aW9uLmFwcGVuZENoaWxkKGNhbGVuZGFySW5wdXQpO1xuICBzZWNvbmRNaWRkbGVTZWN0aW9uLmFwcGVuZENoaWxkKHNlbGVjdERyb3BEb3duSW5wdXQpO1xuXG4gIGNvbnN0IGJvdHRvbVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgYm90dG9tU2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJvdHRvbVNlY3Rpb25JdGVtIGZvcm1MaXN0SXRlbVwiKTtcblxuICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKFwiZm9ybW1ldGhvZFwiLCBcImRpYWxvZ1wiKTtcblxuICBjYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpdGVtQ2FuY2VsXCIpO1xuICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuXG5cbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIml0ZW1TdWJtaXRcIik7XG4gIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG5cbiAgYm90dG9tU2VjdGlvbi5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuICBib3R0b21TZWN0aW9uLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG5cbiAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b3BTZWN0aW9uKTtcbiAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChtaWRkbGVTZWN0aW9uKTtcbiAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWNvbmRNaWRkbGVTZWN0aW9uKTtcbiAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChib3R0b21TZWN0aW9uKTtcblxuICBkaWFsb2dDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChkaWFsb2dDb250YWluZXIpO1xuXG4gIHJldHVybiBjb250ZW50O1xufVxuIiwiaW1wb3J0IGFkZEl0ZW0gZnJvbSBcIi4uL0NvbnRyb2xsZXIvYWRkVGFza1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNYWluVGFiKHRpdGxlLCBkZXNjcmlwdGlvbiwgaWQpIHtcbiAgLy8gYXBwZW5kIHRvIHRoZSBtYWluY29udGFpbmVyXG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnRQYWdlXCIpO1xuXG4gIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgcHJvamVjdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2plY3RDb250YWluZXJcIik7XG4gIHByb2plY3RDb250YWluZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0aWRcIiwgYCR7aWR9YCk7XG5cbiAgY29uc3QgdG9wUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIHRvcFJvdy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvcFJvd1wiKTtcblxuICBjb25zdCBtYWluVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIG1haW5UaXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1haW5UaXRsZVwiKTtcbiAgbWFpblRpdGxlLnRleHRDb250ZW50ID0gYCR7dGl0bGV9YDtcblxuICBjb25zdCB0b3BSb3dTZWNvbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgdG9wUm93U2Vjb25kLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9wUm93U2Vjb25kXCIpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBkZXNjcmlwdGlvblRleHQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkZXNjcmlwdGlvblRleHRcIik7XG4gIGRlc2NyaXB0aW9uVGV4dC50ZXh0Q29udGVudCA9IGAke2Rlc2NyaXB0aW9ufWA7XG5cbiAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGVkaXRCdXR0b24uc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiRURJVCBJTUFHRVwiKTtcblxuICB0b3BSb3cuYXBwZW5kQ2hpbGQobWFpblRpdGxlKTtcbiAgdG9wUm93LmFwcGVuZENoaWxkKHRvcFJvd1NlY29uZCk7XG5cbiAgdG9wUm93U2Vjb25kLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVGV4dCk7XG4gIHRvcFJvd1NlY29uZC5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcblxuICBjb25zdCBtaWRkbGVSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgbWlkZGxlUm93LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWlkZGxlUm93XCIpO1xuXG4gIC8vIE1pZGRsZSByb3cgd2lsbCBiZSB3aGVyZSBhbGwgdGFzayBpdGVtcyB3aWxsIGdvXG5cbiAgY29uc3QgYm90dG9tUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIGJvdHRvbVJvdy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJvdHRvbVJvd1wiKTtcblxuICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkVGFza0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFkZFRhc2tCdXR0b25cIik7XG4gIGFkZFRhc2tCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICBhZGRUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gXCIrXCI7XG5cbiAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkSXRlbSk7XG5cbiAgYm90dG9tUm93LmFwcGVuZENoaWxkKGFkZFRhc2tCdXR0b24pO1xuXG4gIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQodG9wUm93KTtcbiAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChtaWRkbGVSb3cpO1xuICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGJvdHRvbVJvdyk7XG5cbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKTtcblxuICByZXR1cm4gcHJvamVjdENvbnRhaW5lcjtcblxuICAvLyBjcmVhdGUgdG9wIHJvd1t0aXRsZSBhbmQgZGVzY3JpcHRpb24gd2lsbCBiZV1cblxuICAvLyB0aGVuIGNyZWF0ZSBbXSBiaWcgc2l6ZSB3aGVyZSBhbGwgdGFza3Mgd2lsbCBnb1xufVxuIiwiLy8gVGhpcyB3aWxsIGNyZWF0ZSBhIGRpYWxvZyBmb3JtIHZpZXdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdEZvcm0oKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgY29uc3QgZGlhbG9nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcblxuICBkaWFsb2dDb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkaWFsb2dDb250YWluZXJcIik7XG5cbiAgY29uc3QgZm9ybUhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBmb3JtSG9sZGVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZm9ybUNvbnRhaW5lclwiKTtcbiAgZm9ybUhvbGRlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RGb3JtXCIpO1xuXG4gIGNvbnN0IGRpdjFDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYxQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZm9ybS1saXN0XCIpO1xuXG4gIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGl0bGVcIik7XG4gIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBcIlRpdGxlOlwiO1xuXG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0aXRsZVwiKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRpdGxlSW5wdXRWYWx1ZVwiKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkVudGVyIE5hbWVcIik7XG5cbiAgZGl2MUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgZGl2MUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcblxuICBjb25zdCBkaXYyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2MkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZvcm0tbGlzdFwiKTtcblxuICBjb25zdCBkZXNjcmlwdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBkZXNjcmlwdGlvblRpdGxlLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImRlc2NyaXB0aW9uXCIpO1xuICBkZXNjcmlwdGlvblRpdGxlLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvbjpcIjtcblxuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVzY3JpcHRpb25cIik7XG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImRlc2NyaXB0aW9uXCIpO1xuICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcImZvclwiLCBcImRlc2NyaXB0aW9uXCIpO1xuXG4gIGRpdjJDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25UaXRsZSk7XG4gIGRpdjJDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG5cbiAgY29uc3QgZGl2M0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgZGl2M0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJ1dHRvbnNDb250YWluZXJcIik7XG5cbiAgY29uc3QgYnV0dG9uQ2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgYnV0dG9uU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICBidXR0b25DYW5jZWwuc2V0QXR0cmlidXRlKFwiZm9ybW1ldGhvZFwiLCBcImRpYWxvZ1wiKTtcbiAgYnV0dG9uQ2FuY2VsLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2FuY2VsQnV0dG9uXCIpO1xuICBidXR0b25DYW5jZWwudGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICBidXR0b25DYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0aXRsZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gXCJcIjtcbiAgICBkaWFsb2dDb250YWluZXIuY2xvc2UoKTtcbiAgfSk7XG5cbiAgYnV0dG9uU3VibWl0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic3VibWl0QnV0dG9uXCIpO1xuICBidXR0b25TdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgYnV0dG9uU3VibWl0LnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcblxuICBidXR0b25TdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkaWFsb2dDb250YWluZXIuY2xvc2UoKTtcbiAgfSk7XG5cbiAgZGl2M0NvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25DYW5jZWwpO1xuICBkaXYzQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvblN1Ym1pdCk7XG5cbiAgZGlhbG9nQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Ib2xkZXIpO1xuXG4gIGZvcm1Ib2xkZXIuYXBwZW5kQ2hpbGQoZGl2MUNvbnRhaW5lcik7XG4gIGZvcm1Ib2xkZXIuYXBwZW5kQ2hpbGQoZGl2MkNvbnRhaW5lcik7XG4gIGZvcm1Ib2xkZXIuYXBwZW5kQ2hpbGQoZGl2M0NvbnRhaW5lcik7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChkaWFsb2dDb250YWluZXIpO1xuXG4gIHJldHVybiBjb250ZW50O1xufVxuXG4vKiBcblxuW1NQRUNJQUwgSUNPTl1cbltJTlBVVCBGSUVMRFNdXG5bQ0FOQ0VMIFNVQk1JVCBCVVRUT05TXVxuXG5cblxuXG4qL1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdFRhYih0aXRsZUlucHV0LCBpdGVtSUQpIHtcbiAgLy8gR3JhYiB0aGUgcHJvamVjdHMgbGlzdCBVTCBlbGVtZW50XG4gIGNvbnN0IHByb2plY3RVTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNcIik7XG5cbiAgY29uc3QgbGlFbGVtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBsaUVsZW1lbnRDb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsaUVsZW1lbnRcIik7XG4gIGxpRWxlbWVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtpdGVtSUR9YCk7XG5cbiAgY29uc3QgY3JlYXRlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDZcIik7XG4gIGNyZWF0ZVRpdGxlLnRleHRDb250ZW50ID0gYCR7dGl0bGVJbnB1dH1gO1xuXG4gIGNvbnN0IGVkaXRJbWFnZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGVkaXRJbWFnZUJ0bi5hbHQgPSBcIkVkaXQgQnRuXCI7XG5cbiAgbGlFbGVtZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVRpdGxlKTtcbiAgbGlFbGVtZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRJbWFnZUJ0bik7XG5cbiAgcHJvamVjdFVMLmFwcGVuZENoaWxkKGxpRWxlbWVudENvbnRhaW5lcik7XG5cbiAgbGlFbGVtZW50Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGNvbnN0IHRlc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnRQYWdlXCIpLmNoaWxkcmVuO1xuXG4gICAgY29uc29sZS5sb2coZS5jdXJyZW50VGFyZ2V0LmlkKTtcbiAgICBjb25zdCBjdXJyZW50SUQgPSBlLmN1cnJlbnRUYXJnZXQuaWQ7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRlc3QubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRlc3RbaV0uZ2V0QXR0cmlidXRlKFwicHJvamVjdC1pZFwiKSk7XG4gICAgICBpZiAoY3VycmVudElEID09PSB0ZXN0W2ldLmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdGlkXCIpKSB7XG4gICAgICAgIHRlc3RbaV0uY2xhc3NMaXN0LmFkZChcIk9OTElORVwiKTtcbiAgICAgICAgdGVzdFtpXS5jbGFzc0xpc3QucmVtb3ZlKFwiT0ZGTElORVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRlc3RbaV0uY2xhc3NMaXN0LmFkZChcIk9GRkxJTkVcIik7XG4gICAgICAgIHRlc3RbaV0uY2xhc3NMaXN0LnJlbW92ZShcIk9OTElORVwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBOb3csIEkgbmVlZCB0byBtYWtlIHRoaXMgc3BlY2lmaWMgSUQgZnJvbSB0aGUgbWFpblBhZ2UgYmUgYWN0aXZlIG9yIGNsYXNzIGFjdGl2ZVxuICB9KTtcblxuICByZXR1cm4gcHJvamVjdFVMO1xufVxuIiwiZnVuY3Rpb24gcmFuZG9tU3RyaW5nKCkge1xuICByZXR1cm4gU3RyaW5nKERhdGUubm93KCkudG9TdHJpbmcoMzIpICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygxNikpLnJlcGxhY2UoXG4gICAgL1xcLi9nLFxuICAgIFwiXCJcbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmFuZG9tU3RyaW5nO1xuIiwiLy8gU2F2ZSBldmVyeXRoaW5nXG5cbmZ1bmN0aW9uIHNhdmVQcm9qZWN0U1RvZG9MUyhrZXlOYW1lLCBhcnJheSkge1xuICBjb25zdCBzdHJpbmdpZnkgPSBKU09OLnN0cmluZ2lmeShhcnJheSk7XG4gIC8vIGFsbG93cyB1cyB0byBncmFiIHByb2plY3RzXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleU5hbWUsIHN0cmluZ2lmeSk7XG5cbiAgLy8gbm93IHdlIG5lZWQgb25lIGZvciB0b2RvIGl0ZW1zXG5cbiAgLy8gd2UgbmVlZCB0byBzZXRJdGVtIGZvciB0b2RvIGl0ZW1zLCBob3cgZG8gd2UgZ3JhYiB0aGF0P1xufVxuXG5mdW5jdGlvbiBsb29rRm9yRGF0YUluTFMoa2V5TmFtZSkge1xuICAvLyBXZSBuZWVkIHRvIGxvb2sgZm9yIHRoZSBkYXRhIGluIHRoZSBsb2NhbCBzdG9yYWdlXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXlOYW1lKSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBjb25zdCBnZXRJdGVtID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5TmFtZSk7XG5cbiAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZ2V0SXRlbSk7XG5cbiAgLy8gcmVtZW1iZXIgcGFyc2UgcmV0dXJucyBhbiBvYmplY3Qgbm90IGFuIGFycmF5XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmV4cG9ydCB7IHNhdmVQcm9qZWN0U1RvZG9MUywgbG9va0ZvckRhdGFJbkxTIH07XG4iLCJpbXBvcnQgYWRkUHJvamVjdCBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250cm9sbGVyL2FkZFByb2plY3RcIjtcbmltcG9ydCBvcGVuRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250cm9sbGVyL29wZW5Qcm9qZWN0Rm9ybVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdlTG9hZCgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRQcm9qZWN0XCIpO1xuICBjb25zdCBwcm9qZWN0U3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXRCdXR0b25cIik7XG5cbiAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlbkZvcm0pO1xuXG4gIHByb2plY3RTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFByb2plY3QpO1xuICAvLyBpdGVtU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRUYXNrKTtcblxuICAvLyBhZGRJdGVtQnV0dG9uXG4gIC8vIGl0ZW1TdWJtaXRcblxuICAvLyBldmVudCBsaXN0ZW5lclxuICAvLyBldmVudCBsaXN0ZW5lclxuXG4gIC8vIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgLy8gICBjb25zdCBnZXRUaXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKS52YWx1ZTtcbiAgLy8gICBjb25zb2xlLmxvZyhnZXRUaXRsZUlucHV0KTtcblxuICAvLyB9KTtcblxuICByZXR1cm4gY29udGVudDtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBwYWdlTG9hZCBmcm9tIFwiLi9wYWdlTG9hZC9wYWdlTG9hZFwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxucGFnZUxvYWQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==