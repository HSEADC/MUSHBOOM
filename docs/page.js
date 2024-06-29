/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 408:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return"function"===typeof a?a:null}
var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}E.prototype.isReactComponent={};
E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}var H=G.prototype=new F;
H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return{$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
function N(a,b){return{$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c)}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b});-1===a._status&&(a._status=0,a._result=b)}if(1===a._status)return a._result.default;throw a._result;}
var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};function X(){throw Error("act(...) is not supported in production builds of React.");}
__webpack_unused_export__={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments)},e)},count:function(a){var b=0;S(a,function(){b++});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};__webpack_unused_export__=E;__webpack_unused_export__=p;__webpack_unused_export__=r;__webpack_unused_export__=G;__webpack_unused_export__=q;__webpack_unused_export__=w;
__webpack_unused_export__=W;__webpack_unused_export__=X;
__webpack_unused_export__=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g}return{$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};__webpack_unused_export__=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};__webpack_unused_export__=M;__webpack_unused_export__=function(a){var b=M.bind(null,a);b.type=a;return b};__webpack_unused_export__=function(){return{current:null}};
__webpack_unused_export__=function(a){return{$$typeof:v,render:a}};__webpack_unused_export__=O;__webpack_unused_export__=function(a){return{$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};__webpack_unused_export__=function(a,b){return{$$typeof:x,type:a,compare:void 0===b?null:b}};__webpack_unused_export__=function(a){var b=V.transition;V.transition={};try{a()}finally{V.transition=b}};__webpack_unused_export__=X;__webpack_unused_export__=function(a,b){return U.current.useCallback(a,b)};__webpack_unused_export__=function(a){return U.current.useContext(a)};
__webpack_unused_export__=function(){};__webpack_unused_export__=function(a){return U.current.useDeferredValue(a)};__webpack_unused_export__=function(a,b){return U.current.useEffect(a,b)};__webpack_unused_export__=function(){return U.current.useId()};__webpack_unused_export__=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};__webpack_unused_export__=function(a,b){return U.current.useInsertionEffect(a,b)};__webpack_unused_export__=function(a,b){return U.current.useLayoutEffect(a,b)};
__webpack_unused_export__=function(a,b){return U.current.useMemo(a,b)};__webpack_unused_export__=function(a,b,e){return U.current.useReducer(a,b,e)};__webpack_unused_export__=function(a){return U.current.useRef(a)};__webpack_unused_export__=function(a){return U.current.useState(a)};__webpack_unused_export__=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};__webpack_unused_export__=function(){return U.current.useTransition()};__webpack_unused_export__="18.3.1";


/***/ }),

/***/ 294:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  /* unused reexport */ __webpack_require__(408);
} else {}


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
/******/ 			// no module.id needed
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(294);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

 // import React from 'react'
// import { createRoot } from 'react-dom/client'
// import ComponentExample from './javascript/ComponentExample.jsx'
// document.addEventListener('DOMContentLoaded', () => {
//   const container = document.getElementById('reactComponentRoot')
//   const root = createRoot(container)
//   root.render(<ComponentExample />)
// })



var SearchModule = function SearchModule() {
  var _useState = useState(""),
      _useState2 = _slicedToArray(_useState, 2),
      searchTerm = _useState2[0],
      setSearchTerm = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      results = _useState4[0],
      setResults = _useState4[1];

  var searchOptions = ["Angels Wings — самые лучшие леса для правильного поиска | Статья", "Белый гриб | ГрибВики", "Бледная поганка | ГрибВики", "Волнушка | ГрибВики", "Галерина окаймлённая | ГрибВики", "Голубцы | Рецепт", "Грибная безопасность | Тест", "Грибной отвар | Рецепт", "Грибной страх | Памятка", "Грибы в искусстве: влияние на литературу, живопись и музыку | Статья", "Груздь | ГрибВики", "Жареные шампиньоны | Рецепт", "Жульен | Рецепт", "Как выбрать экипировку? | Статья", "Как привить детям любовь к грибным походам? | Статья", "Календарь грибной охоты | Тест", "Китайские брокколи | Рецепт", "Лазанья | Рецепт", "Лисичка | ГрибВики", "Ложная лисичка | ГрибВики", "Ложный боровик | ГрибВики", "Ложный подберёзовик | ГрибВики", "Ложный подосиновик | ГрибВики", "Ложный опёнок | ГрибВики", "Маслёнок | ГрибВики", "Мухомор | ГрибВики", "Наборы для выращивания Pink Oyster | Статья", "Овощное рагу | Рецепт", "Одежда грибника | Памятка", "Опёнок | ГрибВики", "Палента | Рецепт", "Подберёзовик | ГрибВики", "Подосиновик | ГрибВики", "Путь грибника | Памятка", "Рыжик | ГрибВики", "Самые практичные дождевики для грибных походов | Статья", "Свинушка | ГрибВики", "Скумбрия | Рецепт", "Сморчок | ГрибВики", "Съедобный или ядовитый | Тест", "Тихая охота (Топ-5 правил) | Статья", "Timberland x Nina Chanel — свежий выбор для грибников? | Статья", "Toxic Mush | Памятка", "Феттучини | Рецепт", "Хумус | Рецепт", "Шампиньон | ГрибВики"];

  var handleSearch = function handleSearch(event) {
    setSearchTerm(event.target.value.toLowerCase());
    var filteredOptions = searchOptions.filter(function (option) {
      return option.trim().toLowerCase().startsWith(searchTerm);
    });
    setResults(filteredOptions);
  };

  var handleClick = function handleClick(event) {
    if (!results.includes(event.target)) {
      setResults([]);
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    onClick: handleClick
  }, /*#__PURE__*/React.createElement("input", {
    className: "Q_SearchField",
    type: "text",
    placeholder: "\u041F\u043E\u0438\u0441\u043A",
    onChange: handleSearch
  }), /*#__PURE__*/React.createElement("div", {
    className: "C_SearchResults"
  }, results.map(function (result, index) {
    return /*#__PURE__*/React.createElement("a", {
      key: index,
      href: getPageUrl(result)
    }, result);
  })));
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (SearchModule)));
})();

/******/ })()
;