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
___CSS_LOADER_EXPORT___.push([module.id, "body,\nhtml {\n  height: 100%;\n  box-sizing: border-box;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n  padding: 0;\n  margin: 0;\n  outline: 2px solid black;\n}\n\nbody {\n  font-size: 16px;\n  background-color: lightblue;\n}\n\n#content {\n  height: 100%;\n\n\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  grid-template-rows: 100px 2fr minmax(200px, 1fr);\n}\n\n#headerContainer {\n  grid-column-start: 1;\n  grid-column-end: -1;\n\n  grid-row-start: 1;\n  grid-row-end: 2;\n  background-color: red;\n}\n\n#sideContainer {\n  grid-row-start: 2;\n  grid-row-end: 5;\n  background-color: blue;\n  display: flex;\n  flex: 2;\n  flex-direction: column;\n}\n\n#displayCurrentPageContainer {\n  grid-row-start: 2;\n  grid-row-end: 4;\n  background-color: grey;\n}\n\n/* Header */\n\n\n/* Side */\n\n.side {\n  display: flex;\n  flex: 1;\n}\n\n.topSection {\n  display: flex;\n  flex-direction: column;\n\n  flex: 1;\n}\n\n.todayFolder {\n  flex: 0 1 10%;\n}\n\n.upcomingFolder {\n  flex: 0 1 10%;\n}\n\n.folderContainer {\n  flex: 1;\n}\n\n.bottomSection {\n  display: inline-flex;\n  flex: 0 1 10%;\n}\n\n.addProjectContainer {\n  display: inline-flex;\n  flex: 1;\n}\n\n.addProject {\n  flex: 1;\n}\n\n/* Main */", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;EAEE,YAAY;EACZ,sBAAsB;AACxB;;AAEA;;;EAGE,mBAAmB;EACnB,UAAU;EACV,SAAS;EACT,wBAAwB;AAC1B;;AAEA;EACE,eAAe;EACf,2BAA2B;AAC7B;;AAEA;EACE,YAAY;;;EAGZ,aAAa;EACb,8BAA8B;EAC9B,gDAAgD;AAClD;;AAEA;EACE,oBAAoB;EACpB,mBAAmB;;EAEnB,iBAAiB;EACjB,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,sBAAsB;EACtB,aAAa;EACb,OAAO;EACP,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,sBAAsB;AACxB;;AAEA,WAAW;;;AAGX,SAAS;;AAET;EACE,aAAa;EACb,OAAO;AACT;;AAEA;EACE,aAAa;EACb,sBAAsB;;EAEtB,OAAO;AACT;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,oBAAoB;EACpB,aAAa;AACf;;AAEA;EACE,oBAAoB;EACpB,OAAO;AACT;;AAEA;EACE,OAAO;AACT;;AAEA,SAAS","sourcesContent":["body,\nhtml {\n  height: 100%;\n  box-sizing: border-box;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n  padding: 0;\n  margin: 0;\n  outline: 2px solid black;\n}\n\nbody {\n  font-size: 16px;\n  background-color: lightblue;\n}\n\n#content {\n  height: 100%;\n\n\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  grid-template-rows: 100px 2fr minmax(200px, 1fr);\n}\n\n#headerContainer {\n  grid-column-start: 1;\n  grid-column-end: -1;\n\n  grid-row-start: 1;\n  grid-row-end: 2;\n  background-color: red;\n}\n\n#sideContainer {\n  grid-row-start: 2;\n  grid-row-end: 5;\n  background-color: blue;\n  display: flex;\n  flex: 2;\n  flex-direction: column;\n}\n\n#displayCurrentPageContainer {\n  grid-row-start: 2;\n  grid-row-end: 4;\n  background-color: grey;\n}\n\n/* Header */\n\n\n/* Side */\n\n.side {\n  display: flex;\n  flex: 1;\n}\n\n.topSection {\n  display: flex;\n  flex-direction: column;\n\n  flex: 1;\n}\n\n.todayFolder {\n  flex: 0 1 10%;\n}\n\n.upcomingFolder {\n  flex: 0 1 10%;\n}\n\n.folderContainer {\n  flex: 1;\n}\n\n.bottomSection {\n  display: inline-flex;\n  flex: 0 1 10%;\n}\n\n.addProjectContainer {\n  display: inline-flex;\n  flex: 1;\n}\n\n.addProject {\n  flex: 1;\n}\n\n/* Main */"],"sourceRoot":""}]);
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
    console.log(`Title:${project.title}, \nDescription: ${project.description}`)
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
    if (value.length < 10)
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

 
  // toJSON() {
  //   return {
  //     title: this.title,
  //     description: this.description,
  //     id: this.id,
  //     tasks: this.tasks,
  //   };
  // }
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

window.Project = _components_Model_projectTemplate__WEBPACK_IMPORTED_MODULE_2__["default"];
window.Task = _components_Model_taskTemplate__WEBPACK_IMPORTED_MODULE_3__["default"];
window.ProjectManager = {
  addProject: _components_Model_collection__WEBPACK_IMPORTED_MODULE_5__.createProject,
  removeProject: _components_Model_collection__WEBPACK_IMPORTED_MODULE_5__.deleteProject,
  retrieveLocalStorage: _components_Model_collection__WEBPACK_IMPORTED_MODULE_5__.retrieveFromLocalStorage,
  read: _components_Model_collection__WEBPACK_IMPORTED_MODULE_5__.readInformation,
  editInfo: _components_Model_collection__WEBPACK_IMPORTED_MODULE_5__.updateInformation,
  getProjects: _components_Model_collection__WEBPACK_IMPORTED_MODULE_5__.getProjects,
  save: _helpful_functions_localStorage__WEBPACK_IMPORTED_MODULE_4__.saveProjectSTodoLS,
  load: _helpful_functions_localStorage__WEBPACK_IMPORTED_MODULE_4__.lookForDataInLS,
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhO0FBQ2IsUUFBUSwrRUFBa0I7QUFDMUIsUUFBUSw0RUFBZTtBQUN2QiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLy4vc3JjL2NvbXBvbmVudHMvTW9kZWwvY29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL3NyYy9jb21wb25lbnRzL01vZGVsL3Byb2plY3RUZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL3NyYy9jb21wb25lbnRzL01vZGVsL3Rhc2tUZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL3NyYy9oZWxwZnVsX2Z1bmN0aW9ucy9jcmVhdGVSYW5kb21JRC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL3NyYy9oZWxwZnVsX2Z1bmN0aW9ucy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9zcmMvcGFnZUxvYWQvcGFnZUxvYWQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5LFxcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKixcXG4qOmJlZm9yZSxcXG4qOmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcblxcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMmZyIG1pbm1heCgyMDBweCwgMWZyKTtcXG59XFxuXFxuI2hlYWRlckNvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gIGdyaWQtY29sdW1uLWVuZDogLTE7XFxuXFxuICBncmlkLXJvdy1zdGFydDogMTtcXG4gIGdyaWQtcm93LWVuZDogMjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuI3NpZGVDb250YWluZXIge1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICBncmlkLXJvdy1lbmQ6IDU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jZGlzcGxheUN1cnJlbnRQYWdlQ29udGFpbmVyIHtcXG4gIGdyaWQtcm93LXN0YXJ0OiAyO1xcbiAgZ3JpZC1yb3ctZW5kOiA0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuXFxuXFxuLyogU2lkZSAqL1xcblxcbi5zaWRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4udG9wU2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIGZsZXg6IDE7XFxufVxcblxcbi50b2RheUZvbGRlciB7XFxuICBmbGV4OiAwIDEgMTAlO1xcbn1cXG5cXG4udXBjb21pbmdGb2xkZXIge1xcbiAgZmxleDogMCAxIDEwJTtcXG59XFxuXFxuLmZvbGRlckNvbnRhaW5lciB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uYm90dG9tU2VjdGlvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGZsZXg6IDAgMSAxMCU7XFxufVxcblxcbi5hZGRQcm9qZWN0Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgZmxleDogMTtcXG59XFxuXFxuLmFkZFByb2plY3Qge1xcbiAgZmxleDogMTtcXG59XFxuXFxuLyogTWFpbiAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0VBRUUsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFFQTs7O0VBR0UsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixTQUFTO0VBQ1Qsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFlBQVk7OztFQUdaLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZ0RBQWdEO0FBQ2xEOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjs7RUFFbkIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsT0FBTztFQUNQLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCOztBQUVBLFdBQVc7OztBQUdYLFNBQVM7O0FBRVQ7RUFDRSxhQUFhO0VBQ2IsT0FBTztBQUNUOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjs7RUFFdEIsT0FBTztBQUNUOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUEsU0FBU1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5LFxcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKixcXG4qOmJlZm9yZSxcXG4qOmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcblxcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMmZyIG1pbm1heCgyMDBweCwgMWZyKTtcXG59XFxuXFxuI2hlYWRlckNvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gIGdyaWQtY29sdW1uLWVuZDogLTE7XFxuXFxuICBncmlkLXJvdy1zdGFydDogMTtcXG4gIGdyaWQtcm93LWVuZDogMjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuI3NpZGVDb250YWluZXIge1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICBncmlkLXJvdy1lbmQ6IDU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jZGlzcGxheUN1cnJlbnRQYWdlQ29udGFpbmVyIHtcXG4gIGdyaWQtcm93LXN0YXJ0OiAyO1xcbiAgZ3JpZC1yb3ctZW5kOiA0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuXFxuXFxuLyogU2lkZSAqL1xcblxcbi5zaWRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4udG9wU2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIGZsZXg6IDE7XFxufVxcblxcbi50b2RheUZvbGRlciB7XFxuICBmbGV4OiAwIDEgMTAlO1xcbn1cXG5cXG4udXBjb21pbmdGb2xkZXIge1xcbiAgZmxleDogMCAxIDEwJTtcXG59XFxuXFxuLmZvbGRlckNvbnRhaW5lciB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uYm90dG9tU2VjdGlvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGZsZXg6IDAgMSAxMCU7XFxufVxcblxcbi5hZGRQcm9qZWN0Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgZmxleDogMTtcXG59XFxuXFxuLmFkZFByb2plY3Qge1xcbiAgZmxleDogMTtcXG59XFxuXFxuLyogTWFpbiAqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBsb29rRm9yRGF0YUluTFMgfSBmcm9tIFwiLi4vLi4vaGVscGZ1bF9mdW5jdGlvbnMvbG9jYWxTdG9yYWdlXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0VGVtcGxhdGVcIjtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1tdXRhYmxlLWV4cG9ydHNcbmxldCBwcm9qZWN0cyA9IFtdO1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gKHRpdGxlLCBkZXNjcmlwdGlvbikgPT4ge1xuICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGUsIGRlc2NyaXB0aW9uKTtcbiAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbn07XG5cbmNvbnN0IGRlbGV0ZVByb2plY3QgPSAoaXRlbSkgPT4ge1xuICBjb25zb2xlLmxvZyhgQ2FsbGluZyBQcm9qZWN0cyBiZWZvcmUgZmlsdGVyOiAke3Byb2plY3RzfWApO1xuICBwcm9qZWN0cyA9IHByb2plY3RzLmZpbHRlcigob2JqZWN0KSA9PiBvYmplY3QuaWQgIT09IGl0ZW0uaWQpO1xuICBjb25zb2xlLmxvZyhgQ2FsbGluZyBQcm9qZWN0cyBhZnRlciBmaWx0ZXI6ICR7cHJvamVjdHN9YCk7XG59O1xuXG5jb25zdCB1cGRhdGVJbmZvcm1hdGlvbiA9IChpZCwgdGl0bGUsIGRlc2NyaXB0aW9uKSA9PiB7XG4gIHByb2plY3RzID0gcHJvamVjdHMubWFwKChpdGVtKSA9PlxuICAgIGl0ZW0uaWQgPT09IGlkID8gbmV3IFByb2plY3QodGl0bGUsIGRlc2NyaXB0aW9uLCBpZCkgOiBpdGVtXG4gICk7XG59O1xuXG5jb25zdCByZWFkSW5mb3JtYXRpb24gPSAoKSA9PiB7XG4gIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+XG4gICAgY29uc29sZS5sb2coYFRpdGxlOiR7cHJvamVjdC50aXRsZX0sIFxcbkRlc2NyaXB0aW9uOiAke3Byb2plY3QuZGVzY3JpcHRpb259YClcbiAgKTtcbn07XG5cbi8vIFN0aWxsIHRoaW5raW5nIGFib3V0IGhvdyBJJ2xsIHVzZSBzZXRQcm9qZWN0c1xuY29uc3Qgc2V0UHJvamVjdHMgPSAodmFsdWUpID0+IHByb2plY3RzLnB1c2godmFsdWUpO1xuXG5jb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHByb2plY3RzO1xuXG5jb25zdCByZXRyaWV2ZUZyb21Mb2NhbFN0b3JhZ2UgPSAoa2V5TmFtZSkgPT4ge1xuICBjb25zdCBoZWxsbyA9IGxvb2tGb3JEYXRhSW5MUyhrZXlOYW1lKTtcbiAgLy8gZGF0YS5mb3JFYWNoKChpdGVtKSA9PlxuICAvLyAgIHNldFByb2plY3RzKE9iamVjdC5hc3NpZ24obmV3IFByb2plY3QoKSwgaXRlbSkpXG4gIGNvbnNvbGUubG9nKGhlbGxvKTtcbiAgcmV0dXJuIGhlbGxvLmZvckVhY2goKGl0ZW0pID0+XG4gICAgc2V0UHJvamVjdHMoT2JqZWN0LmFzc2lnbihuZXcgUHJvamVjdCgpLCBpdGVtKSlcbiAgKTtcbn07XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZVByb2plY3QsXG4gIGdldFByb2plY3RzLFxuICBwcm9qZWN0cyxcbiAgc2V0UHJvamVjdHMsXG4gIGRlbGV0ZVByb2plY3QsXG4gIHJldHJpZXZlRnJvbUxvY2FsU3RvcmFnZSxcbiAgdXBkYXRlSW5mb3JtYXRpb24sXG4gIHJlYWRJbmZvcm1hdGlvbixcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1kdXBlLWNsYXNzLW1lbWJlcnMgKi9cbi8vIEZvciBGb2xkZXIgTmFtZXNcbmltcG9ydCByYW5kb21TdHJpbmcgZnJvbSBcIi4uLy4uL2hlbHBmdWxfZnVuY3Rpb25zL2NyZWF0ZVJhbmRvbUlEXCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrVGVtcGxhdGVcIjtcblxuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgaWQgPSByYW5kb21TdHJpbmcoKSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMudGFza3MgPSBbXTtcbiAgfVxuXG4gIHNldCB0aXRsZSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZS5sZW5ndGggPCAzKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCwgbm90ZSBkZXNjcmlwdGlvbiBpcyB0b28gc2hvcnQuXCIpO1xuXG4gICAgdGhpcy5jdXJyZW50X3RpdGxlID0gdmFsdWU7XG4gIH1cblxuICBnZXQgdGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudF90aXRsZTtcbiAgfVxuXG4gIHNldCBkZXNjcmlwdGlvbih2YWx1ZSkge1xuICAgIGlmICh2YWx1ZS5sZW5ndGggPCAxMClcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQsIG5vdGUgZGVzY3JpcHRpb24gaXMgdG9vIHNob3J0LlwiKTtcblxuICAgIHRoaXMuY3VycmVudF9kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRfZGVzY3JpcHRpb247XG4gIH1cblxuICBjcmVhdGVUb2RvSXRlbSh0YXNrLCBkYXRlLCBwcmlvcml0eSwgbm90ZXMsIGlkID0gcmFuZG9tU3RyaW5nKCkpIHtcbiAgICBjb25zdCB0b2RvSXRlbSA9IG5ldyBUYXNrKHRhc2ssIGRhdGUsIHByaW9yaXR5LCBub3RlcywgaWQpO1xuICAgIHRoaXMudGFza3MucHVzaCh0b2RvSXRlbSk7XG4gIH1cblxuICByZW1vdmVUb2RvSXRlbShpdGVtKSB7XG4gICAgY29uc29sZS5sb2coaXRlbSk7XG4gICAgY29uc29sZS5sb2coaXRlbS5pZCk7XG4gICAgY29uc29sZS5sb2coYEJlZm9yZTogJHt0aGlzLnRhc2tzfWApO1xuICAgIHRoaXMudGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5pZCAhPT0gaXRlbS5pZCk7XG4gICAgY29uc29sZS5sb2coYEFmdGVyOiAke3RoaXMudGFza3N9YCk7XG4gICAgLy8gdGhpcy4jdGFza3MgPSB0aGlzLiN0YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2spO1xuICB9XG5cbiAgdXBkYXRlVG9kb0l0ZW0oaWQsIHRhc2ssIGRhdGUsIHByaW9yaXR5LCBub3Rlcykge1xuICAgIHRoaXMudGFza3MgPSB0aGlzLnRhc2subWFwKChpdGVtKSA9PlxuICAgICAgaXRlbS5pZCA9PT0gaWQgPyBuZXcgVGFzayh0YXNrLCBkYXRlLCBwcmlvcml0eSwgbm90ZXMsIGlkKSA6IGl0ZW1cbiAgICApO1xuICB9XG5cbiAgcmV0cmlldmVJdGVtc0luUHJvamVjdCgpIHtcbiAgICB0aGlzLnRhc2tzLmZvckVhY2goKGl0ZW0pID0+IGNvbnNvbGUubG9nKGl0ZW0pKTtcbiAgfVxuXG4gIGJ5SUQoaWQpIHtcbiAgICByZXR1cm4gdGhpcy50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmlkID09PSBpZCk7XG4gIH1cblxuIFxuICAvLyB0b0pTT04oKSB7XG4gIC8vICAgcmV0dXJuIHtcbiAgLy8gICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAvLyAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gIC8vICAgICBpZDogdGhpcy5pZCxcbiAgLy8gICAgIHRhc2tzOiB0aGlzLnRhc2tzLFxuICAvLyAgIH07XG4gIC8vIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1kdXBlLWNsYXNzLW1lbWJlcnMgKi9cbmNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcih0YXNrLCBkYXRlLCBwcmlvcml0eSwgbm90ZXMsIGlkKSB7XG4gICAgdGhpcy50YXNrID0gdGFzaztcbiAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLm5vdGVzID0gbm90ZXM7XG5cbiAgICB0aGlzLmlkID0gaWQ7XG4gIH1cblxuICBnZXQgdGFzaygpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50X3Rhc2s7XG4gIH1cblxuICBzZXQgdGFzayh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gXCJcIiB8fCB2YWx1ZS5sZW5ndGggPCAzKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIFRhc2tcIik7XG5cbiAgICB0aGlzLmN1cnJlbnRfdGFzayA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHByaW9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRfcHJpb3JpdHk7XG4gIH1cblxuICBzZXQgcHJpb3JpdHkodmFsdWUpIHtcbiAgICBpZiAoIVtcImhpZ2hcIiwgXCJtZWRpdW1cIiwgXCJsb3dcIl0uaW5jbHVkZXModmFsdWUudG9Mb3dlckNhc2UoKSkpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkLCBub3Qgb25lIG9mIHRoZSBjaG9pY2VzXCIpO1xuXG4gICAgdGhpcy5jdXJyZW50X3ByaW9yaXR5ID0gdmFsdWU7XG4gIH1cblxuICBnZXQgbm90ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudF9ub3RlcztcbiAgfVxuXG4gIHNldCBub3Rlcyh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZS5sZW5ndGggPCAxMClcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQsIG5vdGUgZGVzY3JpcHRpb24gaXMgdG9vIHNob3J0LlwiKTtcblxuICAgIHRoaXMuY3VycmVudF9ub3RlcyA9IHZhbHVlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0YXNrOiB0aGlzLnRhc2ssXG4gICAgICBkYXRlOiB0aGlzLmRhdGUsXG4gICAgICBwcmlvcml0eTogdGhpcy5wcmlvcml0eSxcbiAgICAgIG5vdGVzOiB0aGlzLm5vdGVzLFxuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrO1xuIiwiZnVuY3Rpb24gcmFuZG9tU3RyaW5nKCkge1xuICByZXR1cm4gU3RyaW5nKERhdGUubm93KCkudG9TdHJpbmcoMzIpICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygxNikpLnJlcGxhY2UoXG4gICAgL1xcLi9nLFxuICAgIFwiXCJcbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmFuZG9tU3RyaW5nO1xuIiwiLy8gU2F2ZSBldmVyeXRoaW5nXG5cbmZ1bmN0aW9uIHNhdmVQcm9qZWN0U1RvZG9MUyhrZXlOYW1lLCBhcnJheSkge1xuICBjb25zdCBzdHJpbmdpZnkgPSBKU09OLnN0cmluZ2lmeShhcnJheSk7XG4gIC8vIGFsbG93cyB1cyB0byBncmFiIHByb2plY3RzXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleU5hbWUsIHN0cmluZ2lmeSk7XG5cbiAgLy8gbm93IHdlIG5lZWQgb25lIGZvciB0b2RvIGl0ZW1zXG4gIFxuXG4gIC8vIHdlIG5lZWQgdG8gc2V0SXRlbSBmb3IgdG9kbyBpdGVtcywgaG93IGRvIHdlIGdyYWIgdGhhdD9cbn1cblxuZnVuY3Rpb24gbG9va0ZvckRhdGFJbkxTKGtleU5hbWUpIHtcbiAgLy8gV2UgbmVlZCB0byBsb29rIGZvciB0aGUgZGF0YSBpbiB0aGUgbG9jYWwgc3RvcmFnZVxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5TmFtZSkgPT09IG51bGwpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgY29uc3QgZ2V0SXRlbSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleU5hbWUpO1xuXG4gIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGdldEl0ZW0pO1xuXG4gIHJldHVybiBkYXRhO1xufVxuXG5leHBvcnQgeyBzYXZlUHJvamVjdFNUb2RvTFMsIGxvb2tGb3JEYXRhSW5MUyB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFnZUxvYWQoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cblxuICBcblxuICByZXR1cm4gY29udGVudDtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBwYWdlTG9hZCBmcm9tIFwiLi9wYWdlTG9hZC9wYWdlTG9hZFwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vY29tcG9uZW50cy9Nb2RlbC9wcm9qZWN0VGVtcGxhdGVcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL2NvbXBvbmVudHMvTW9kZWwvdGFza1RlbXBsYXRlXCI7XG5cbmltcG9ydCB7XG4gIHNhdmVQcm9qZWN0U1RvZG9MUyxcbiAgbG9va0ZvckRhdGFJbkxTLFxufSBmcm9tIFwiLi9oZWxwZnVsX2Z1bmN0aW9ucy9sb2NhbFN0b3JhZ2VcIjtcblxuaW1wb3J0IHtcbiAgY3JlYXRlUHJvamVjdCxcbiAgZ2V0UHJvamVjdHMsXG4gIGRlbGV0ZVByb2plY3QsXG4gIHJldHJpZXZlRnJvbUxvY2FsU3RvcmFnZSxcbiAgdXBkYXRlSW5mb3JtYXRpb24sXG4gIHJlYWRJbmZvcm1hdGlvbixcbn0gZnJvbSBcIi4vY29tcG9uZW50cy9Nb2RlbC9jb2xsZWN0aW9uXCI7XG5cbnBhZ2VMb2FkKCk7XG5cbndpbmRvdy5Qcm9qZWN0ID0gUHJvamVjdDtcbndpbmRvdy5UYXNrID0gVGFzaztcbndpbmRvdy5Qcm9qZWN0TWFuYWdlciA9IHtcbiAgYWRkUHJvamVjdDogY3JlYXRlUHJvamVjdCxcbiAgcmVtb3ZlUHJvamVjdDogZGVsZXRlUHJvamVjdCxcbiAgcmV0cmlldmVMb2NhbFN0b3JhZ2U6IHJldHJpZXZlRnJvbUxvY2FsU3RvcmFnZSxcbiAgcmVhZDogcmVhZEluZm9ybWF0aW9uLFxuICBlZGl0SW5mbzogdXBkYXRlSW5mb3JtYXRpb24sXG4gIGdldFByb2plY3RzLFxuICBzYXZlOiBzYXZlUHJvamVjdFNUb2RvTFMsXG4gIGxvYWQ6IGxvb2tGb3JEYXRhSW5MUyxcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=