/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/Functions.js":
/*!******************************!*\
  !*** ./modules/Functions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst MarkCompleted = (todo) => {\r\n  todo.completed = !todo.completed;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MarkCompleted);\r\n\n\n//# sourceURL=webpack://to-do-list/./modules/Functions.js?");

/***/ }),

/***/ "./modules/Todo.js":
/*!*************************!*\
  !*** ./modules/Todo.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Todos\": () => (/* binding */ Todos),\n/* harmony export */   \"updateTodoIndex\": () => (/* binding */ updateTodoIndex)\n/* harmony export */ });\n/* harmony import */ var _Functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Functions.js */ \"./modules/Functions.js\");\n/* harmony import */ var _src_img_vertical_menu_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/img/vertical-menu.png */ \"./src/img/vertical-menu.png\");\n/* harmony import */ var _src_img_trash_can_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/img/trash-can.png */ \"./src/img/trash-can.png\");\n\r\n\r\n\r\n\r\n\r\nlet todos;\r\n\r\nif (localStorage.getItem('todos')) {\r\n  todos = JSON.parse(localStorage.getItem('todos'));\r\n} else {\r\n  todos = [];\r\n}\r\n\r\nconst updateTodoIndex = () => {\r\n  todos.forEach((todo, i) => {\r\n    todo.index = i + 1;\r\n  });\r\n  localStorage.setItem('todos', JSON.stringify(todos));\r\n};\r\n\r\nconst editTodo = (todo, editedDescription) => {\r\n  todo.description = editedDescription;\r\n  updateTodoIndex();\r\n};\r\n\r\nclass Todos {\r\n  constructor(description, completed, index) {\r\n    this.description = description;\r\n    this.completed = completed;\r\n    this.index = index;\r\n  }\r\n\r\n  addTodo(description) {\r\n    const newTodo = { description, completed: false, index: todos.length };\r\n    todos.push(newTodo);\r\n\r\n    updateTodoIndex();\r\n\r\n    this.displayTodo();\r\n  }\r\n\r\n  removeTodo(index) {\r\n    todos.splice(index, 1);\r\n\r\n    updateTodoIndex();\r\n    this.displayTodo();\r\n  }\r\n\r\n  displayTodo() {\r\n    const footerParagraph = document.querySelector('.footer-paragraph');\r\n    const todoElements = document.querySelector('.todos');\r\n    todoElements.innerHTML = '';\r\n\r\n    todos.forEach((todo, index) => {\r\n      const todoItem = document.createElement('div');\r\n      todoItem.className = 'todo-item';\r\n\r\n      // CREATE CHECKBOX\r\n      const todoCheckerButton = document.createElement('input');\r\n      todoCheckerButton.setAttribute('type', 'checkbox');\r\n      todoCheckerButton.className = 'checkbox';\r\n      todoCheckerButton.checked = todo.completed;\r\n\r\n      const todoDescription = document.createElement('input');\r\n      todoDescription.setAttribute('readonly', 'readonly');\r\n      todoDescription.type = 'text';\r\n      todoDescription.className = `${\r\n        !todo.completed\r\n          ? 'todo-description'\r\n          : 'todo-description mark-description'\r\n      }`;\r\n      todoDescription.value = `${todo.description}`;\r\n\r\n      const menuDiv = document.createElement('div');\r\n      menuDiv.className = 'menu';\r\n\r\n      const todoVerticalMenu = document.createElement('img');\r\n      todoVerticalMenu.setAttribute('src', `${_src_img_vertical_menu_png__WEBPACK_IMPORTED_MODULE_1__}`);\r\n      todoVerticalMenu.setAttribute('alt', 'vertical-menu');\r\n      todoVerticalMenu.className = 'vertical-menu';\r\n\r\n      const todoTrash = document.createElement('img');\r\n      todoTrash.setAttribute('src', `${_src_img_trash_can_png__WEBPACK_IMPORTED_MODULE_2__}`);\r\n      todoTrash.setAttribute('alt', 'todo-trash');\r\n      todoTrash.className = 'todo-trash';\r\n\r\n      menuDiv.appendChild(todoTrash);\r\n      menuDiv.appendChild(todoVerticalMenu);\r\n\r\n      todoItem.appendChild(todoCheckerButton);\r\n      todoItem.appendChild(todoDescription);\r\n      todoItem.appendChild(menuDiv);\r\n\r\n      todoItem.addEventListener('mouseenter', (e) => {\r\n        e.preventDefault();\r\n        todoItem.classList.add('active');\r\n        todoDescription.classList.add('active');\r\n        todoVerticalMenu.classList.add('active');\r\n        todoTrash.classList.add('active');\r\n\r\n        // Edit to-do description\r\n        todoDescription.removeAttribute('readonly');\r\n        todoDescription.focus();\r\n        todoDescription.addEventListener('change', (e) => {\r\n          const editedDescription = e.target.value;\r\n          editTodo(todo, editedDescription);\r\n          updateTodoIndex();\r\n        });\r\n\r\n        todoTrash.addEventListener('click', (e) => {\r\n          e.preventDefault();\r\n          this.removeTodo(index);\r\n        });\r\n      });\r\n\r\n      todoItem.addEventListener('mouseleave', (e) => {\r\n        e.preventDefault();\r\n        todoItem.classList.remove('active');\r\n        todoDescription.classList.remove('active');\r\n        todoVerticalMenu.classList.remove('active');\r\n        todoTrash.classList.remove('active');\r\n\r\n        todoDescription.setAttribute('readonly', 'readonly');\r\n      });\r\n\r\n      todoElements.appendChild(todoItem);\r\n\r\n      // CHECK BOX INTERACTIVITY\r\n      todoCheckerButton.addEventListener('click', () => {\r\n        (0,_Functions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(todo);\r\n        updateTodoIndex();\r\n\r\n        todoDescription.className = `${\r\n          !todo.completed\r\n            ? 'todo-description'\r\n            : 'todo-description mark-description'\r\n        }`;\r\n\r\n        todoDescription.classList.add('active');\r\n      });\r\n    });\r\n\r\n    footerParagraph.addEventListener('click', () => {\r\n      this.filteredTodos(todos);\r\n    });\r\n  }\r\n\r\n  filteredTodos() {\r\n    todos = todos.filter((todo) => !todo.completed);\r\n    updateTodoIndex();\r\n    this.displayTodo();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://to-do-list/./modules/Todo.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  background-color: #ccc;\\r\\n}\\r\\n\\r\\n.todo-container {\\r\\n  background-color: #ccc;\\r\\n  max-width: 800px;\\r\\n  margin: 50px auto;\\r\\n  box-shadow: -1px 2px 14px 4px rgba(0, 0, 0, 0.75);\\r\\n}\\r\\n\\r\\n.todo-header {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 2px 20px;\\r\\n  background-color: white;\\r\\n  margin-bottom: 3px;\\r\\n}\\r\\n\\r\\n.todo-header h1 {\\r\\n  color: #555;\\r\\n}\\r\\n\\r\\n.todo-header i {\\r\\n  color: #888;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.todo-input {\\r\\n  padding: 8px 20px;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  background-color: white;\\r\\n  margin-bottom: 3px;\\r\\n}\\r\\n\\r\\n.todo-input input {\\r\\n  border: none;\\r\\n  font-size: 30px;\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n.todo-input input:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.todo-input img {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.todos {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.todo-item {\\r\\n  background-color: white;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  list-style: none;\\r\\n  padding-top: 20px;\\r\\n  padding-bottom: 20px;\\r\\n  padding-left: 20px;\\r\\n  margin-bottom: 3px;\\r\\n  position: relative;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.todo-description {\\r\\n  font-size: 30px;\\r\\n  border: none;\\r\\n  color: #555;\\r\\n  margin-left: 20px;\\r\\n  width: 80%;\\r\\n}\\r\\n\\r\\n.todo-description.active {\\r\\n  background-color: rgb(246, 200, 116);\\r\\n}\\r\\n\\r\\n.mark-description {\\r\\n  text-decoration: line-through;\\r\\n}\\r\\n\\r\\n.todo-description:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.todo-item.active {\\r\\n  background-color: rgb(246, 200, 116);\\r\\n}\\r\\n\\r\\n.vertical-menu {\\r\\n  visibility: visible;\\r\\n}\\r\\n\\r\\n.vertical-menu.active {\\r\\n  visibility: hidden;\\r\\n}\\r\\n\\r\\n.todo-trash {\\r\\n  visibility: hidden;\\r\\n}\\r\\n\\r\\n.todo-trash.active {\\r\\n  visibility: visible;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.todos .menu {\\r\\n  display: flex;\\r\\n  position: absolute;\\r\\n  right: 2%;\\r\\n  cursor: move;\\r\\n}\\r\\n\\r\\n.todos hr {\\r\\n  margin-bottom: 0;\\r\\n  padding-bottom: 0;\\r\\n}\\r\\n\\r\\n.todo-action p {\\r\\n  margin-top: 0;\\r\\n  margin-bottom: 0;\\r\\n  padding-top: 30px;\\r\\n  padding-bottom: 30px;\\r\\n  color: #555;\\r\\n}\\r\\n\\r\\n.todos button p {\\r\\n  margin-top: 0;\\r\\n  margin-bottom: 0;\\r\\n  font-size: 30px;\\r\\n  margin-left: 10px;\\r\\n}\\r\\n\\r\\n.todo-footer {\\r\\n  background-color: #ccc;\\r\\n}\\r\\n\\r\\n.footer-paragraph {\\r\\n  cursor: pointer;\\r\\n  text-align: center;\\r\\n  font-size: 30px;\\r\\n  margin-top: 0;\\r\\n  margin-bottom: 0;\\r\\n  padding-top: 20px;\\r\\n  padding-bottom: 20px;\\r\\n  color: #555;\\r\\n}\\r\\n\\r\\n.checkbox {\\r\\n  width: 30px;\\r\\n  height: 30px;\\r\\n  border: 2px solid red;\\r\\n  background-color: red;\\r\\n}\\r\\n\\r\\n.checkbox.active {\\r\\n  background-color: rgb(246, 200, 116);\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/Todo.js */ \"./modules/Todo.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _img_turn_left_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/turn-left.png */ \"./src/img/turn-left.png\");\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const todoInput = document.querySelector('.todo-input');\n  const newTodoInput = document.querySelector('.new-todo-input');\n\n  const img = document.createElement('img');\n  img.src = `${_img_turn_left_png__WEBPACK_IMPORTED_MODULE_2__}`;\n  img.alt = 'turn left';\n  todoInput.appendChild(img);\n\n  const todo = new _modules_Todo_js__WEBPACK_IMPORTED_MODULE_0__.Todos();\n  const description = newTodoInput.value;\n  if (description) {\n    todo.addTodo(description);\n    description.value = '';\n  }\n  todo.displayTodo();\n  (0,_modules_Todo_js__WEBPACK_IMPORTED_MODULE_0__.updateTodoIndex)();\n\n  newTodoInput.addEventListener('change', (e) => {\n    e.preventDefault();\n\n    const description = e.target.value;\n    const todo = new _modules_Todo_js__WEBPACK_IMPORTED_MODULE_0__.Todos();\n    todo.addTodo(description);\n    newTodoInput.value = '';\n  });\n});\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/img/trash-can.png":
/*!*******************************!*\
  !*** ./src/img/trash-can.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"52ed85a4ef0e92f2d531.png\";\n\n//# sourceURL=webpack://to-do-list/./src/img/trash-can.png?");

/***/ }),

/***/ "./src/img/turn-left.png":
/*!*******************************!*\
  !*** ./src/img/turn-left.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1e8b2048df123e8e9bc8.png\";\n\n//# sourceURL=webpack://to-do-list/./src/img/turn-left.png?");

/***/ }),

/***/ "./src/img/vertical-menu.png":
/*!***********************************!*\
  !*** ./src/img/vertical-menu.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"abb6afec0fa817cafd83.png\";\n\n//# sourceURL=webpack://to-do-list/./src/img/vertical-menu.png?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;