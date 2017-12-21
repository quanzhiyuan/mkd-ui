/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(4)
}
var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(2),
  /* template */
  __webpack_require__(6),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function setArrayLocalStorage(array, value) {
  var localarray = localStorage.getItem(array);
  var localString = localarray ? localarray + ',' + value : value;
  localStorage.setItem(array, localString);
}
function getArrayLocalStorage(array) {
  var localArray = localStorage.getItem(array);

  return localArray ? localArray.split(',') : [];
}
function clearLocalStorage(value) {
  localStorage.clear(value);
}

function siblings(elem) {
  // 获取兄弟节点
  var children = Array.prototype.slice.call(elem.parentNode.children);
  return children.filter(function (child) {
    return child !== elem;
  });
}
/* harmony default export */ __webpack_exports__["a"] = ({
  setArrayLocalStorage: setArrayLocalStorage,
  getArrayLocalStorage: getArrayLocalStorage,
  clearLocalStorage: clearLocalStorage,
  siblings: siblings
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_utils_common__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * mkd-tab-item
 * @module components/tab-item
 * @desc 搭配 tabbar 或 navbar 使用
 * @param {*} id - 选中后的返回值，任意类型
 * @param {slot} [icon] - icon 图标
 * @param {slot} - 文字
 *
 * @example
 * <mkd-tab-item>
 *   <img slot="icon" src="http://placehold.it/100x100">
 *   订单
 * </mkd-tab-item>
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'mkd-tab-item',

  data: function data() {
    return {
      isSelected: 'is-selected'
    };
  },


  props: ['id'],

  methods: {
    tabClick: function tabClick() {
      this.$parent.$emit('input', this.id);
      this.removeClass();
      this.addClass();
    },
    addClass: function addClass() {
      var _this = this;

      var elems = []; // 添加is-selected 类
      var children = Array.prototype.slice.call(this.$el.children);
      children.forEach(function (elem) {
        //
        elems.push(elem);
        var children = Array.prototype.slice.call(elem.children);
        children.forEach(function (elem) {
          elems.push(elem);
        });
      });
      elems.forEach(function (elem) {
        var elemClass = elem.getAttribute && elem.getAttribute("class") || "";
        var elemClassArray = elemClass && elemClass.split(' ') || [];
        if (!elemClassArray.find(function (element) {
          return element === _this.isSelected;
        })) {
          elemClassArray.push(_this.isSelected);
          elem.setAttribute('class', elemClassArray.join(' '));
        }
      });
    },
    removeClass: function removeClass() {
      var _this2 = this;

      var elems = [];
      var siblingelems = Array.prototype.slice.call(__WEBPACK_IMPORTED_MODULE_0__src_utils_common__["a" /* default */].siblings(this.$el));
      siblingelems.forEach(function (elem) {
        var children = Array.prototype.slice.call(elem.children);
        children.forEach(function (elem) {
          elems.push(elem);
          var children = Array.prototype.slice.call(elem.children);
          children.forEach(function (elem) {
            elems.push(elem);
          });
        });
      });
      elems.forEach(function (elem) {
        var currentClass = [];
        var elemClass = elem.getAttribute && elem.getAttribute("class") || "";
        var elemClassArray = elemClass && elemClass.split(' ') || [];
        elemClassArray.forEach(function (elclass) {
          if (elclass !== _this2.isSelected) currentClass.push(elclass);
        });
        elem.setAttribute('class', currentClass.join(' '));
      });
    }
  }
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_tab_item_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_tab_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_tab_item_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__src_tab_item_vue___default.a; });


/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    staticClass: "mkd-tab-item",
    class: {
      'is-selected': _vm.$parent.value === _vm.id
    },
    on: {
      "click": function($event) {
        _vm.tabClick(this)
      }
    }
  }, [_c('div', {
    staticClass: "mkd-tab-item-icon"
  }, [_vm._t("icon"), _vm._v(" "), _c('span', {
    staticClass: "mkd-tab-item-badge"
  }, [_vm._t("badge")], 2)], 2), _vm._v(" "), _c('span', {
    staticClass: "mkd-tab-item-label"
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}

/***/ })
/******/ ]);