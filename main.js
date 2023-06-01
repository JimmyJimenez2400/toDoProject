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
___CSS_LOADER_EXPORT___.push([module.id, "body,\nhtml {\n  height: 100%;\n  box-sizing: border-box;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n  padding: 0;\n  margin: 0;\n  outline: 2px solid black;\n}\n\nbody {\n  font-size: 16px;\n  background-color: lightblue;\n}\n\n#content {\n  height: 100%;\n\n\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  grid-template-rows: 100px 2fr minmax(200px, 1fr);\n}\n\n#headerContainer {\n  grid-column-start: 1;\n  grid-column-end: -1;\n\n  grid-row-start: 1;\n  grid-row-end: 2;\n  background-color: red;\n}\n\n#sideContainer {\n  grid-row-start: 2;\n  grid-row-end: 5;\n  background-color: blue;\n}\n\n#displayCurrentPageContainer {\n  grid-row-start: 2;\n  grid-row-end: 4;\n  background-color: grey;\n}\n\n/* Header */\n\n\n/* Side */\n\n/* Main */", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;EAEE,YAAY;EACZ,sBAAsB;AACxB;;AAEA;;;EAGE,mBAAmB;EACnB,UAAU;EACV,SAAS;EACT,wBAAwB;AAC1B;;AAEA;EACE,eAAe;EACf,2BAA2B;AAC7B;;AAEA;EACE,YAAY;;;EAGZ,aAAa;EACb,8BAA8B;EAC9B,gDAAgD;AAClD;;AAEA;EACE,oBAAoB;EACpB,mBAAmB;;EAEnB,iBAAiB;EACjB,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,sBAAsB;AACxB;;AAEA,WAAW;;;AAGX,SAAS;;AAET,SAAS","sourcesContent":["body,\nhtml {\n  height: 100%;\n  box-sizing: border-box;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n  padding: 0;\n  margin: 0;\n  outline: 2px solid black;\n}\n\nbody {\n  font-size: 16px;\n  background-color: lightblue;\n}\n\n#content {\n  height: 100%;\n\n\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  grid-template-rows: 100px 2fr minmax(200px, 1fr);\n}\n\n#headerContainer {\n  grid-column-start: 1;\n  grid-column-end: -1;\n\n  grid-row-start: 1;\n  grid-row-end: 2;\n  background-color: red;\n}\n\n#sideContainer {\n  grid-row-start: 2;\n  grid-row-end: 5;\n  background-color: blue;\n}\n\n#displayCurrentPageContainer {\n  grid-row-start: 2;\n  grid-row-end: 4;\n  background-color: grey;\n}\n\n/* Header */\n\n\n/* Side */\n\n/* Main */"],"sourceRoot":""}]);
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

/***/ "./src/components/Model/collection.js":
/*!********************************************!*\
  !*** ./src/components/Model/collection.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProjectToProjects": () => (/* binding */ addProjectToProjects),
/* harmony export */   "getProjects": () => (/* binding */ getProjects),
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "removeProjectFromProjects": () => (/* binding */ removeProjectFromProjects),
/* harmony export */   "setProjects": () => (/* binding */ setProjects)
/* harmony export */ });
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

  addTodoItem(task, date, priority, notes, id = (0,_helpful_functions_createRandomID__WEBPACK_IMPORTED_MODULE_0__["default"])()) {
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

  retrieveItemsInProject() {
    this.tasks.forEach((item) => console.log(item));
  }

  r;

  toJSON() {
    return {
      title: this.title,
      description: this.description,
      id: this.id,
      tasks: this.tasks,
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

  set priority(value) {
    if (!["high", "medium", "low"].includes(value.toLowerCase()))
      throw new Error("Invalid, not one of the choices");

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
/* harmony import */ var _components_Model_projectTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Model/projectTemplate */ "./src/components/Model/projectTemplate.js");
/* harmony import */ var _components_Model_collection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Model/collection */ "./src/components/Model/collection.js");
// Save everything



function saveProjectSTodoLS() {
  const stringify = JSON.stringify((0,_components_Model_collection__WEBPACK_IMPORTED_MODULE_1__.getProjects)());

  localStorage.setItem("projects", stringify);

  // we need to setItem for todo items, how do we grab that?
}

function lookForDataInLS() {
  // We need to look for the data in the local storage
  if (localStorage.getItem("projects") === null) {
    return [];
  }
  const getItem = localStorage.getItem("projects");

  const data = JSON.parse(getItem);

  return data.forEach((item) =>
    (0,_components_Model_collection__WEBPACK_IMPORTED_MODULE_1__.setProjects)(Object.assign(new _components_Model_projectTemplate__WEBPACK_IMPORTED_MODULE_0__["default"](), item))
  );
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





function pageLoad() {
  const content = document.querySelector("#content");

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
/* harmony import */ var _components_Model_projectTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Model/projectTemplate */ "./src/components/Model/projectTemplate.js");
/* harmony import */ var _components_Model_taskTemplate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Model/taskTemplate */ "./src/components/Model/taskTemplate.js");
/* harmony import */ var _helpful_functions_localStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpful_functions/localStorage */ "./src/helpful_functions/localStorage.js");
/* harmony import */ var _components_Model_collection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Model/collection */ "./src/components/Model/collection.js");










(0,_pageLoad_pageLoad__WEBPACK_IMPORTED_MODULE_0__["default"])();

// const test = new Project("Test");

// addProjectToProjects(test);

// saveProjectSTodoLS();
// lookForDataInLS();

window.Project = _components_Model_projectTemplate__WEBPACK_IMPORTED_MODULE_2__["default"];
window.Task = _components_Model_taskTemplate__WEBPACK_IMPORTED_MODULE_3__["default"];
window.ProjectManager = {
  addProject: _components_Model_collection__WEBPACK_IMPORTED_MODULE_5__.addProjectToProjects,
  removeProject: _components_Model_collection__WEBPACK_IMPORTED_MODULE_5__.removeProjectFromProjects,
  getProjects: _components_Model_collection__WEBPACK_IMPORTED_MODULE_5__.getProjects,
  save: _helpful_functions_localStorage__WEBPACK_IMPORTED_MODULE_4__.saveProjectSTodoLS,
  load: _helpful_functions_localStorage__WEBPACK_IMPORTED_MODULE_4__.lookForDataInLS,
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bUZBQXlCO0FBQzFDLGFBQWE7QUFDYixRQUFRLCtFQUFrQjtBQUMxQixRQUFRLDRFQUFlO0FBQ3ZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9zcmMvY29tcG9uZW50cy9Nb2RlbC9jb2xsZWN0aW9uLmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLy4vc3JjL2NvbXBvbmVudHMvTW9kZWwvcHJvamVjdFRlbXBsYXRlLmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLy4vc3JjL2NvbXBvbmVudHMvTW9kZWwvdGFza1RlbXBsYXRlLmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLy4vc3JjL2hlbHBmdWxfZnVuY3Rpb25zL2NyZWF0ZVJhbmRvbUlELmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLy4vc3JjL2hlbHBmdWxfZnVuY3Rpb25zL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL3NyYy9wYWdlTG9hZC9wYWdlTG9hZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHksXFxuaHRtbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qLFxcbio6YmVmb3JlLFxcbio6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBvdXRsaW5lOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuXFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAyZnIgbWlubWF4KDIwMHB4LCAxZnIpO1xcbn1cXG5cXG4jaGVhZGVyQ29udGFpbmVyIHtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgZ3JpZC1jb2x1bW4tZW5kOiAtMTtcXG5cXG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgZ3JpZC1yb3ctZW5kOiAyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4jc2lkZUNvbnRhaW5lciB7XFxuICBncmlkLXJvdy1zdGFydDogMjtcXG4gIGdyaWQtcm93LWVuZDogNTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbiNkaXNwbGF5Q3VycmVudFBhZ2VDb250YWluZXIge1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICBncmlkLXJvdy1lbmQ6IDQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG5cXG5cXG4vKiBTaWRlICovXFxuXFxuLyogTWFpbiAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0VBRUUsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFFQTs7O0VBR0UsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixTQUFTO0VBQ1Qsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFlBQVk7OztFQUdaLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZ0RBQWdEO0FBQ2xEOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjs7RUFFbkIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCOztBQUVBLFdBQVc7OztBQUdYLFNBQVM7O0FBRVQsU0FBU1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5LFxcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKixcXG4qOmJlZm9yZSxcXG4qOmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcblxcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMmZyIG1pbm1heCgyMDBweCwgMWZyKTtcXG59XFxuXFxuI2hlYWRlckNvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gIGdyaWQtY29sdW1uLWVuZDogLTE7XFxuXFxuICBncmlkLXJvdy1zdGFydDogMTtcXG4gIGdyaWQtcm93LWVuZDogMjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuI3NpZGVDb250YWluZXIge1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICBncmlkLXJvdy1lbmQ6IDU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4jZGlzcGxheUN1cnJlbnRQYWdlQ29udGFpbmVyIHtcXG4gIGdyaWQtcm93LXN0YXJ0OiAyO1xcbiAgZ3JpZC1yb3ctZW5kOiA0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuXFxuXFxuLyogU2lkZSAqL1xcblxcbi8qIE1haW4gKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwibGV0IHByb2plY3RzID0gW107XG5cbmNvbnN0IGFkZFByb2plY3RUb1Byb2plY3RzID0gKGl0ZW0pID0+IHtcbiAgLy8gcHVzaCB0byBwcm9qZWN0cyBhcnJheVxuICBwcm9qZWN0cy5wdXNoKGl0ZW0pO1xufTtcblxuY29uc3QgcmVtb3ZlUHJvamVjdEZyb21Qcm9qZWN0cyA9IChpdGVtKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBDYWxsaW5nIFByb2plY3RzIGJlZm9yZSBmaWx0ZXI6ICR7cHJvamVjdHN9YCk7XG4gIHByb2plY3RzID0gcHJvamVjdHMuZmlsdGVyKChvYmplY3QpID0+IG9iamVjdC5pZCAhPT0gaXRlbS5pZCk7XG4gIGNvbnNvbGUubG9nKGBDYWxsaW5nIFByb2plY3RzIGFmdGVyIGZpbHRlcjogJHtwcm9qZWN0c31gKTtcbn07XG5cbmNvbnN0IHNldFByb2plY3RzID0gKHZhbHVlKSA9PiBwcm9qZWN0cy5wdXNoKHZhbHVlKTtcblxuY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiBwcm9qZWN0cztcblxuZXhwb3J0IHtcbiAgYWRkUHJvamVjdFRvUHJvamVjdHMsXG4gIGdldFByb2plY3RzLFxuICBwcm9qZWN0cyxcbiAgc2V0UHJvamVjdHMsXG4gIHJlbW92ZVByb2plY3RGcm9tUHJvamVjdHMsXG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tZHVwZS1jbGFzcy1tZW1iZXJzICovXG4vLyBGb3IgRm9sZGVyIE5hbWVzXG5pbXBvcnQgcmFuZG9tU3RyaW5nIGZyb20gXCIuLi8uLi9oZWxwZnVsX2Z1bmN0aW9ucy9jcmVhdGVSYW5kb21JRFwiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1RlbXBsYXRlXCI7XG5cbmNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGlkID0gcmFuZG9tU3RyaW5nKCkpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLnRhc2tzID0gW107XG4gIH1cblxuICBhZGRUb2RvSXRlbSh0YXNrLCBkYXRlLCBwcmlvcml0eSwgbm90ZXMsIGlkID0gcmFuZG9tU3RyaW5nKCkpIHtcbiAgICBjb25zdCB0b2RvSXRlbSA9IG5ldyBUYXNrKHRhc2ssIGRhdGUsIHByaW9yaXR5LCBub3RlcywgaWQpO1xuICAgIHRoaXMudGFza3MucHVzaCh0b2RvSXRlbSk7XG4gIH1cblxuICByZW1vdmVUb2RvSXRlbShpdGVtKSB7XG4gICAgY29uc29sZS5sb2coaXRlbSk7XG4gICAgY29uc29sZS5sb2coaXRlbS5pZCk7XG4gICAgY29uc29sZS5sb2coYEJlZm9yZTogJHt0aGlzLnRhc2tzfWApO1xuICAgIHRoaXMudGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5pZCAhPT0gaXRlbS5pZCk7XG4gICAgY29uc29sZS5sb2coYEFmdGVyOiAke3RoaXMudGFza3N9YCk7XG4gICAgLy8gdGhpcy4jdGFza3MgPSB0aGlzLiN0YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2spO1xuICB9XG5cbiAgcmV0cmlldmVJdGVtc0luUHJvamVjdCgpIHtcbiAgICB0aGlzLnRhc2tzLmZvckVhY2goKGl0ZW0pID0+IGNvbnNvbGUubG9nKGl0ZW0pKTtcbiAgfVxuXG4gIHI7XG5cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICB0YXNrczogdGhpcy50YXNrcyxcbiAgICB9O1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tZHVwZS1jbGFzcy1tZW1iZXJzICovXG5jbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IodGFzaywgZGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBpZCkge1xuICAgIHRoaXMudGFzayA9IHRhc2s7XG4gICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuXG4gICAgdGhpcy5pZCA9IGlkO1xuICB9XG5cbiAgZ2V0IHRhc2soKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudF90YXNrO1xuICB9XG5cbiAgc2V0IHRhc2sodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09IFwiXCIgfHwgdmFsdWUubGVuZ3RoIDwgMykgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBUYXNrXCIpO1xuXG4gICAgdGhpcy5jdXJyZW50X3Rhc2sgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBwcmlvcml0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50X3ByaW9yaXR5O1xuICB9XG5cbiAgc2V0IHByaW9yaXR5KHZhbHVlKSB7XG4gICAgaWYgKCFbXCJoaWdoXCIsIFwibWVkaXVtXCIsIFwibG93XCJdLmluY2x1ZGVzKHZhbHVlLnRvTG93ZXJDYXNlKCkpKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCwgbm90IG9uZSBvZiB0aGUgY2hvaWNlc1wiKTtcblxuICAgIHRoaXMuY3VycmVudF9wcmlvcml0eSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IG5vdGVzKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRfbm90ZXM7XG4gIH1cblxuICBzZXQgbm90ZXModmFsdWUpIHtcbiAgICBpZiAodmFsdWUubGVuZ3RoIDwgMTApXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkLCBub3RlIGRlc2NyaXB0aW9uIGlzIHRvbyBzaG9ydC5cIik7XG5cbiAgICB0aGlzLmN1cnJlbnRfbm90ZXMgPSB2YWx1ZTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGFzazogdGhpcy50YXNrLFxuICAgICAgZGF0ZTogdGhpcy5kYXRlLFxuICAgICAgcHJpb3JpdHk6IHRoaXMucHJpb3JpdHksXG4gICAgICBub3RlczogdGhpcy5ub3RlcyxcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFzaztcbiIsImZ1bmN0aW9uIHJhbmRvbVN0cmluZygpIHtcbiAgcmV0dXJuIFN0cmluZyhEYXRlLm5vdygpLnRvU3RyaW5nKDMyKSArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpKS5yZXBsYWNlKFxuICAgIC9cXC4vZyxcbiAgICBcIlwiXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJhbmRvbVN0cmluZztcbiIsIi8vIFNhdmUgZXZlcnl0aGluZ1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvTW9kZWwvcHJvamVjdFRlbXBsYXRlXCI7XG5pbXBvcnQgeyBzZXRQcm9qZWN0cywgZ2V0UHJvamVjdHMgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Nb2RlbC9jb2xsZWN0aW9uXCI7XG5cbmZ1bmN0aW9uIHNhdmVQcm9qZWN0U1RvZG9MUygpIHtcbiAgY29uc3Qgc3RyaW5naWZ5ID0gSlNPTi5zdHJpbmdpZnkoZ2V0UHJvamVjdHMoKSk7XG5cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBzdHJpbmdpZnkpO1xuXG4gIC8vIHdlIG5lZWQgdG8gc2V0SXRlbSBmb3IgdG9kbyBpdGVtcywgaG93IGRvIHdlIGdyYWIgdGhhdD9cbn1cblxuZnVuY3Rpb24gbG9va0ZvckRhdGFJbkxTKCkge1xuICAvLyBXZSBuZWVkIHRvIGxvb2sgZm9yIHRoZSBkYXRhIGluIHRoZSBsb2NhbCBzdG9yYWdlXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpID09PSBudWxsKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIGNvbnN0IGdldEl0ZW0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpO1xuXG4gIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGdldEl0ZW0pO1xuXG4gIHJldHVybiBkYXRhLmZvckVhY2goKGl0ZW0pID0+XG4gICAgc2V0UHJvamVjdHMoT2JqZWN0LmFzc2lnbihuZXcgUHJvamVjdCgpLCBpdGVtKSlcbiAgKTtcbn1cblxuZXhwb3J0IHsgc2F2ZVByb2plY3RTVG9kb0xTLCBsb29rRm9yRGF0YUluTFMgfTtcbiIsIlxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdlTG9hZCgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICByZXR1cm4gY29udGVudDtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBwYWdlTG9hZCBmcm9tIFwiLi9wYWdlTG9hZC9wYWdlTG9hZFwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vY29tcG9uZW50cy9Nb2RlbC9wcm9qZWN0VGVtcGxhdGVcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL2NvbXBvbmVudHMvTW9kZWwvdGFza1RlbXBsYXRlXCI7XG5cbmltcG9ydCB7XG4gIHNhdmVQcm9qZWN0U1RvZG9MUyxcbiAgbG9va0ZvckRhdGFJbkxTLFxufSBmcm9tIFwiLi9oZWxwZnVsX2Z1bmN0aW9ucy9sb2NhbFN0b3JhZ2VcIjtcblxuaW1wb3J0IHtcbiAgYWRkUHJvamVjdFRvUHJvamVjdHMsXG4gIGdldFByb2plY3RzLFxuICByZW1vdmVQcm9qZWN0RnJvbVByb2plY3RzLFxufSBmcm9tIFwiLi9jb21wb25lbnRzL01vZGVsL2NvbGxlY3Rpb25cIjtcblxucGFnZUxvYWQoKTtcblxuLy8gY29uc3QgdGVzdCA9IG5ldyBQcm9qZWN0KFwiVGVzdFwiKTtcblxuLy8gYWRkUHJvamVjdFRvUHJvamVjdHModGVzdCk7XG5cbi8vIHNhdmVQcm9qZWN0U1RvZG9MUygpO1xuLy8gbG9va0ZvckRhdGFJbkxTKCk7XG5cbndpbmRvdy5Qcm9qZWN0ID0gUHJvamVjdDtcbndpbmRvdy5UYXNrID0gVGFzaztcbndpbmRvdy5Qcm9qZWN0TWFuYWdlciA9IHtcbiAgYWRkUHJvamVjdDogYWRkUHJvamVjdFRvUHJvamVjdHMsXG4gIHJlbW92ZVByb2plY3Q6IHJlbW92ZVByb2plY3RGcm9tUHJvamVjdHMsXG4gIGdldFByb2plY3RzLFxuICBzYXZlOiBzYXZlUHJvamVjdFNUb2RvTFMsXG4gIGxvYWQ6IGxvb2tGb3JEYXRhSW5MUyxcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=