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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(3)
}
var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(1),
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
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_assets_selectlist_png__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_assets_selectlist_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_assets_selectlist_png__);
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
 * mt-list
 * @module components/list
 * @desc 单元格
 * @param {string|Object} [to] - 跳转链接，使用 vue-router 的情况下 to 会传递给 router.push，否则作为 a 标签的 href 属性处理
 * @param {string} [icon] - 图标，提供 more, back，或者自定义的图标（传入不带前缀的图标类名，最后拼接成 .mkdui-xxx）
 * @param {string} [title] - 标题
 * @param {string} [label] - 备注信息
 * @param {boolean} [is-link=false] - 可点击的链接
 * @param {string} [value] - 右侧显示文字
 * @param {slot} - 同 value, 会覆盖 value 属性
 * @param {slot} [title] - 同 title, 会覆盖 title 属性
 * @param {slot} [icon] - 同 icon, 会覆盖 icon 属性，例如可以传入图片
 *
 * @example
 * <mt-list title="标题文字" icon="back" is-link value="描述文字"></mt-list>
 * <mt-list title="标题文字" icon="back">
 *   <div slot="value">描述文字啊哈</div>
 * </mt-list>
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'mkd-list',
  data: function data() {
    return {
      selectedImgUrl: __WEBPACK_IMPORTED_MODULE_0__src_assets_selectlist_png___default.a,
      selected: false
    };
  },

  props: {
    to: [String, Object],
    icon: String,
    title: String,
    isLink: Boolean,
    selectValue: Boolean,
    isSelect: Boolean,
    value: {}
  },
  computed: {
    href: function href() {
      var _this = this;

      if (this.to && !this.added && this.$router) {
        var resolved = this.$router.match(this.to);
        if (!resolved.matched.length) return this.to;

        this.$nextTick(function () {
          _this.added = true;
          _this.$el.addEventListener('click', _this.handleClick);
        });
        return resolved.path;
      }
      return this.to;
    }
  },

  methods: {
    handleClick: function handleClick($event) {
      $event.stopPropagation();
      $event.preventDefault();
      this.$router.push(this.href);
    },
    listSelectHandler: function listSelectHandler($event) {
      $event.stopPropagation();
      this.selected = !this.selected;
      this.$emit('selectchange', this.selected);
    }
  },
  mounted: function mounted() {
    if (this.isSelect) {
      this.selected = this.selectValue;
      this.$el.addEventListener('click', this.listSelectHandler);
    }
  }
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_list_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_list_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__src_list_vue___default.a; });


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAWCAYAAAChWZ5EAAAAAXNSR0IArs4c6QAAAi9JREFUSA29lctyElEQhrtPAF8iK58DMFWCLjTmYrBMULBKN64sHyWVjZtcFgkhIVlY5cIKZAO8iA/hRsN0/j4w1JkZZoZA4Cw4M0Of/v6+zTAteRXa8lKI9pmI2dBX7MtbgG8A3iKhrKUy/THLwkfgQ3B2KRkodGRThC7HkQ/hHrb3mUVnIA6O+td7JW4ttATPbmVrUuQj+KkGv7ASKHzg0YWbdsAGCu+W+MzP/EIEFNuyjQI30+AqIrPWlrU7okMWypGh76jLla9ull3hGDWNfNxfNnKmGiJvhH0awH/A+CkOrQpSBge1sNG09xi1twpH3aPwchSufg3UuWUwntDxLCIUDn/NMByCPnZj4FaAMH2DhP96M1pDER2p+w/SdozaDmwmwvsv+DzpvOmX+DdSUImI8OioOIUICxc6D0eOfvqQBldh9j3QK/NPI6RR/HPUGg8iCrfyyXkWuMzfSAX9MxGOZm4GjGNu3PpT8UbeYHxasM059h6v0Ofecz5xnpHCmakRjhxzXkW3X7i2SdcBAWqIF8j6YEA6igERKNGXfpmP1QZN+g7NdTYvXH1FBOjDJBGo2d8InOkOjqro9ks9/5A1UYA6yHfkNXl0jctAJnAAgdOKD0EZZoarj1gB+meMCP3LLoVDzR66XftmppX4NcSI/gJkG57d6bCgx4Cro8QMWBJ+8JZ7hXG7Ruqf2EOIHCd35/1uWF8+JG1HOUroiQMozgg+WpqdtDPT/H8PgVDzwlfocssAAAAASUVORK5CYII="

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
    staticClass: "mkd-list",
    attrs: {
      "href": _vm.href
    }
  }, [_c('div', {
    staticClass: "mkd-list-wrapper"
  }, [_c('div', {
    staticClass: "mkd-list-title"
  }, [_vm._t("icon"), _vm._v(" "), _vm._t("title", [_c('span', {
    staticClass: "mkd-list-text",
    domProps: {
      "textContent": _vm._s(_vm.title)
    }
  })])], 2), _vm._v(" "), _c('div', {
    staticClass: "mkd-list-value",
    class: {
      'is-link': _vm.isLink
    }
  }, [(_vm.selected) ? _c('img', {
    staticStyle: {
      "width": "16px"
    },
    attrs: {
      "src": _vm.selectedImgUrl
    }
  }) : _vm._t("default", [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.value)
    }
  })])], 2)]), _vm._v(" "), (_vm.isLink) ? _c('i', {
    staticClass: "mkd-list-allow-right"
  }) : _vm._e()])
},staticRenderFns: []}

/***/ })
/******/ ]);