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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var App = {\n  data: function data() {\n    return {\n      limitBeers: 60,\n      loadDecal: 1500,\n      loadBeer: false,\n      beers: [],\n      modal: {},\n      lastId: 1,\n      itemShow: \"\",\n      textBackground: \"beers \"\n    };\n  },\n  watch: {\n    loadBeer: function loadBeer(_loadBeer) {\n      if (_loadBeer) {\n        this.addBeers();\n      }\n    }\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    this.modal.cross = document.getElementById(\"cross\");\n    this.modal.cross.addEventListener(\"click\", function () {\n      _this.hideModal();\n    });\n    window.addEventListener(\"scroll\", function () {\n      _this.loadBeer = _this.bottom();\n\n      _this.addBackground();\n    });\n    window.addEventListener(\"resize\", function () {\n      _this.loadBeer = _this.bottom();\n\n      _this.addBackground();\n    });\n    this.$refs.content.setAttribute(\"data-text\", this.textBackground + this.textBackground);\n  },\n  created: function created() {\n    this.addBeers();\n  },\n  methods: {\n    resize: function resize() {// let divs = this.$refs.flexFont\n      // let relFontsize = divs.offsetWidth*0.05;\n      // divs.style.fontSize = relFontsize+'px';\n    },\n    showModal: function showModal(id) {\n      this.itemShow = this.beers.find(function (item) {\n        return item.id === id;\n      });\n      this.resize();\n      this.$refs.content.style.setProperty(\"transform\", \"translate(-100%, 0)\");\n      this.$refs.modal.style.setProperty(\"transform\", \"translate(-100%, 0)\");\n      this.modal.cross.style.setProperty(\"opacity\", \"1\");\n      var body = document.body;\n      body.style.setProperty(\"overflow\", \"hidden\");\n    },\n    hideModal: function hideModal() {\n      this.$refs.content.style.setProperty(\"transform\", \"translate(0, 0)\");\n      this.$refs.modal.style.setProperty(\"transform\", \"translate(0, 0)\");\n      this.modal.cross.style.setProperty(\"opacity\", \"0\");\n      document.body.style.setProperty(\"overflow\", \"inherit\");\n    },\n    bottom: function bottom() {\n      return window.scrollY + this.loadDecal >= this.$refs.content.offsetHeight;\n    },\n    addBackground: function addBackground() {\n      var bodyBefor = window.getComputedStyle(this.$refs.content, \"before\");\n      var heightBody = bodyBefor.getPropertyValue(\"height\").match(/\\d+/)[0];\n\n      if (this.loadDecal + window.scrollY > parseInt(heightBody)) {\n        var contentBoby = this.$refs.content.getAttribute(\"data-text\");\n        this.$refs.content.setAttribute(\"data-text\", contentBoby + this.textBackground);\n      }\n    },\n    addBeers: function addBeers() {\n      var _this2 = this;\n\n      if (this.beers.length < this.limitBeers) {\n        axios.get(\"http://localhost:8000/endpoint.php?id=\" + this.lastId).then(function (response) {\n          var api = response.data;\n          api.forEach(function (item) {\n            _this2.beers.push(item);\n          });\n          _this2.lastId = api[api.length - 1].id;\n        });\n      }\n    }\n  }\n};\nVue.createApp(App).mount(\"#app\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXNzZXRzL2pzL2FwcC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvYXBwLmpzP2VjNzkiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQXBwID0ge1xuICBkYXRhKCkge1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGxpbWl0QmVlcnM6IDYwLFxuICAgICAgbG9hZERlY2FsOiAxNTAwLFxuICAgICAgbG9hZEJlZXI6IGZhbHNlLFxuICAgICAgYmVlcnM6IFtdLFxuICAgICAgbW9kYWw6IHt9LFxuICAgICAgbGFzdElkOiAxLFxuICAgICAgaXRlbVNob3c6IFwiXCIsXG4gICAgICB0ZXh0QmFja2dyb3VuZDogXCJiZWVycyBcIlxuICAgIH07XG5cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBsb2FkQmVlcihsb2FkQmVlcikge1xuXG4gICAgICBpZiAobG9hZEJlZXIpIHtcbiAgICAgICAgdGhpcy5hZGRCZWVycygpO1xuICAgICAgfVxuXG4gICAgfSxcblxuICB9LFxuICBtb3VudGVkKCkge1xuXG4gICAgdGhpcy5tb2RhbC5jcm9zcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3Jvc3NcIik7XG5cbiAgICB0aGlzLm1vZGFsLmNyb3NzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLmhpZGVNb2RhbCgpO1xuICAgIH0pO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5sb2FkQmVlciA9IHRoaXMuYm90dG9tKCk7XG4gICAgICB0aGlzLmFkZEJhY2tncm91bmQoKTtcbiAgICB9KTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICAgIHRoaXMubG9hZEJlZXIgPSB0aGlzLmJvdHRvbSgpO1xuICAgICAgdGhpcy5hZGRCYWNrZ3JvdW5kKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLiRyZWZzLmNvbnRlbnQuc2V0QXR0cmlidXRlKFwiZGF0YS10ZXh0XCIsIHRoaXMudGV4dEJhY2tncm91bmQrdGhpcy50ZXh0QmFja2dyb3VuZClcblxuXG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG5cbiAgICB0aGlzLmFkZEJlZXJzKCk7XG5cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHJlc2l6ZSgpIHtcblxuICAgICAgLy8gbGV0IGRpdnMgPSB0aGlzLiRyZWZzLmZsZXhGb250XG4gICAgICAvLyBsZXQgcmVsRm9udHNpemUgPSBkaXZzLm9mZnNldFdpZHRoKjAuMDU7XG4gICAgICAvLyBkaXZzLnN0eWxlLmZvbnRTaXplID0gcmVsRm9udHNpemUrJ3B4JztcblxuICAgIH0sXG4gICAgc2hvd01vZGFsKGlkKSB7XG5cbiAgICAgIHRoaXMuaXRlbVNob3cgPSB0aGlzLmJlZXJzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBpZCk7XG5cbiAgICAgIHRoaXMucmVzaXplKClcblxuICAgICAgdGhpcy4kcmVmcy5jb250ZW50LnN0eWxlLnNldFByb3BlcnR5KFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKC0xMDAlLCAwKVwiKTtcbiAgICAgIHRoaXMuJHJlZnMubW9kYWwuc3R5bGUuc2V0UHJvcGVydHkoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoLTEwMCUsIDApXCIpO1xuICAgICAgdGhpcy5tb2RhbC5jcm9zcy5zdHlsZS5zZXRQcm9wZXJ0eShcIm9wYWNpdHlcIiwgXCIxXCIpO1xuXG4gICAgICBsZXQgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgICBib2R5LnN0eWxlLnNldFByb3BlcnR5KFwib3ZlcmZsb3dcIiwgXCJoaWRkZW5cIik7XG5cbiAgICB9LFxuICAgIGhpZGVNb2RhbCgpIHtcblxuICAgICAgdGhpcy4kcmVmcy5jb250ZW50LnN0eWxlLnNldFByb3BlcnR5KFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsIDApXCIpO1xuICAgICAgdGhpcy4kcmVmcy5tb2RhbC5zdHlsZS5zZXRQcm9wZXJ0eShcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLCAwKVwiKTtcbiAgICAgIHRoaXMubW9kYWwuY3Jvc3Muc3R5bGUuc2V0UHJvcGVydHkoXCJvcGFjaXR5XCIsIFwiMFwiKTtcblxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5zZXRQcm9wZXJ0eShcIm92ZXJmbG93XCIsIFwiaW5oZXJpdFwiKTtcblxuICAgIH0sXG4gICAgYm90dG9tKCkge1xuXG4gICAgICByZXR1cm4gd2luZG93LnNjcm9sbFkgKyB0aGlzLmxvYWREZWNhbCA+PSB0aGlzLiRyZWZzLmNvbnRlbnQub2Zmc2V0SGVpZ2h0O1xuXG4gICAgfSxcbiAgICBhZGRCYWNrZ3JvdW5kKCkge1xuXG4gICAgICBsZXQgYm9keUJlZm9yID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy4kcmVmcy5jb250ZW50LCBcImJlZm9yZVwiKTtcbiAgICAgIGxldCBoZWlnaHRCb2R5ID0gYm9keUJlZm9yLmdldFByb3BlcnR5VmFsdWUoXCJoZWlnaHRcIikubWF0Y2goL1xcZCsvKVswXVxuXG5cbiAgICAgIGlmICgodGhpcy5sb2FkRGVjYWwgKyB3aW5kb3cuc2Nyb2xsWSkgPiBwYXJzZUludChoZWlnaHRCb2R5KSkge1xuXG4gICAgICAgIGxldCBjb250ZW50Qm9ieSA9IHRoaXMuJHJlZnMuY29udGVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRleHRcIilcbiAgICAgICAgdGhpcy4kcmVmcy5jb250ZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdGV4dFwiLCBjb250ZW50Qm9ieSArIHRoaXMudGV4dEJhY2tncm91bmQpXG5cbiAgICAgIH1cbiAgICB9LFxuICAgIGFkZEJlZXJzKCkge1xuXG4gICAgICBpZiAodGhpcy5iZWVycy5sZW5ndGggPCB0aGlzLmxpbWl0QmVlcnMpIHtcblxuICAgICAgICBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvZW5kcG9pbnQucGhwP2lkPVwiICsgdGhpcy5sYXN0SWQpLnRoZW4ocmVzcG9uc2UgPT4ge1xuXG4gICAgICAgICAgbGV0IGFwaSA9IHJlc3BvbnNlLmRhdGE7XG5cbiAgICAgICAgICBhcGkuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIHRoaXMuYmVlcnMucHVzaChpdGVtKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIHRoaXMubGFzdElkID0gYXBpW2FwaS5sZW5ndGggLSAxXS5pZDtcblxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgIH0sXG4gIH1cbn07XG5cblxuVnVlLmNyZWF0ZUFwcChBcHApLm1vdW50KFwiI2FwcFwiKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFQQTtBQVVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQWpFQTtBQXBEQTtBQTBIQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/js/app.js\n");

/***/ }),

/***/ "./src/assets/scss/style.scss":
/*!************************************!*\
  !*** ./src/assets/scss/style.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3Njc3Mvc3R5bGUuc2Nzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2Nzcy9zdHlsZS5zY3NzP2ZkMjkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scss/style.scss\n");

/***/ }),

/***/ 0:
/*!*****************************************************************!*\
  !*** multi ./src/assets/scss/style.scss ./src/assets/js/app.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/assets/scss/style.scss */"./src/assets/scss/style.scss");
module.exports = __webpack_require__(/*! ./src/assets/js/app.js */"./src/assets/js/app.js");


/***/ })

/******/ });