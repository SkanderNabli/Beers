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

eval("var App = {\n  data: function data() {\n    return {\n      textBackground: \"beers \",\n      limitBeers: 60,\n      loadDecal: 1500,\n      heightShowReturnTop: 2500,\n      beers: [],\n      modalCross: \"\",\n      currentId: 1,\n      itemShow: \"\",\n      loadBeer: false\n    };\n  },\n  watch: {\n    loadBeer: function loadBeer(_loadBeer) {\n      if (_loadBeer) {\n        this.addBeers();\n      }\n    }\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    this.modalCross = document.getElementById(\"cross\");\n    this.modalCross.addEventListener(\"click\", function () {\n      _this.hideModal();\n    });\n    window.addEventListener(\"scroll\", function () {\n      if (window.scrollY >= _this.heightShowReturnTop) {\n        _this.$refs.arrow.style.opacity = \"1\";\n      } else {\n        _this.$refs.arrow.style.opacity = \"0\";\n      }\n\n      _this.loadBeer = _this.bottom();\n\n      _this.addBackground();\n    });\n    window.addEventListener(\"resize\", function () {\n      _this.loadBeer = _this.bottom();\n\n      _this.addBackground();\n    });\n    this.$refs.content.setAttribute(\"data-text\", this.textBackground + this.textBackground);\n  },\n  created: function created() {\n    this.addBeers();\n  },\n  methods: {\n    showModal: function showModal(id) {\n      this.itemShow = this.beers.find(function (item) {\n        return item.id === id;\n      });\n      this.$refs.arrow.style.opacity = \"0\";\n      this.modalCross.style.opacity = \"1\";\n      this.$refs.content.style.transform = this.$refs.modal.style.transform = \"translateX(-99%)\";\n      document.body.style.overflow = \"hidden\";\n    },\n    hideModal: function hideModal() {\n      if (window.scrollY >= this.heightShowReturnTop) {\n        this.$refs.arrow.style.opacity = \"1\";\n      }\n\n      this.modalCross.style.opacity = \"0\";\n      this.$refs.content.style.transform = this.$refs.modal.style.transform = \"initial\";\n      document.body.style.overflow = \"inherit\";\n    },\n    scrollToTop: function scrollToTop() {\n      var cosParameter = document.scrollingElement.scrollTop / 2;\n      var scrollCount = 0,\n          oldTimestamp = null;\n\n      function step(newTimestamp) {\n        if (oldTimestamp !== null) {\n          scrollCount += Math.PI * (newTimestamp - oldTimestamp) / 1000;\n          if (scrollCount >= Math.PI) return document.scrollingElement.scrollTop = 0;\n          document.scrollingElement.scrollTop = cosParameter + cosParameter * Math.cos(scrollCount);\n        }\n\n        oldTimestamp = newTimestamp;\n        window.requestAnimationFrame(step);\n      }\n\n      window.requestAnimationFrame(step);\n    },\n    bottom: function bottom() {\n      return window.scrollY + this.loadDecal >= this.$refs.content.offsetHeight;\n    },\n    addBackground: function addBackground() {\n      var bodyBefor = window.getComputedStyle(this.$refs.content, \"before\");\n      var heightBody = bodyBefor.getPropertyValue(\"height\").match(/\\d+/)[0];\n\n      if (this.loadDecal + window.scrollY > parseInt(heightBody)) {\n        var contentBoby = this.$refs.content.getAttribute(\"data-text\");\n        this.$refs.content.setAttribute(\"data-text\", contentBoby + this.textBackground);\n      }\n    },\n    addBeers: function addBeers() {\n      var _this2 = this;\n\n      if (this.beers.length < this.limitBeers) {\n        axios.get(\"http://localhost:8000/endpoint.php?id=\" + this.currentId).then(function (response) {\n          var api = response.data;\n          api.forEach(function (item) {\n            _this2.beers.push(item);\n          });\n          _this2.currentId = api[api.length - 1].id;\n          _this2.$refs.content.style.left = \"0\";\n          _this2.$refs.content.style.opacity = \"1\";\n        });\n      }\n    }\n  }\n};\nVue.createApp(App).mount(\"#app\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXNzZXRzL2pzL2FwcC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvYXBwLmpzP2VjNzkiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQXBwID0ge1xuICBkYXRhKCkge1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHRCYWNrZ3JvdW5kOiBcImJlZXJzIFwiLFxuICAgICAgbGltaXRCZWVyczogNjAsXG4gICAgICBsb2FkRGVjYWw6IDE1MDAsXG4gICAgICBoZWlnaHRTaG93UmV0dXJuVG9wOiAyNTAwLFxuICAgICAgYmVlcnM6IFtdLFxuICAgICAgbW9kYWxDcm9zczogXCJcIixcbiAgICAgIGN1cnJlbnRJZDogMSxcbiAgICAgIGl0ZW1TaG93OiBcIlwiLFxuICAgICAgbG9hZEJlZXI6IGZhbHNlXG4gICAgfTtcblxuICB9LFxuICB3YXRjaDoge1xuICAgIGxvYWRCZWVyKGxvYWRCZWVyKSB7XG5cbiAgICAgIGlmIChsb2FkQmVlcikge1xuICAgICAgICB0aGlzLmFkZEJlZXJzKCk7XG4gICAgICB9XG5cbiAgICB9LFxuICB9LFxuICBtb3VudGVkKCkge1xuXG4gICAgdGhpcy5tb2RhbENyb3NzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcm9zc1wiKTtcbiAgICB0aGlzLm1vZGFsQ3Jvc3MuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuaGlkZU1vZGFsKCk7XG4gICAgfSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XG5cbiAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+PSB0aGlzLmhlaWdodFNob3dSZXR1cm5Ub3ApIHtcbiAgICAgICAgdGhpcy4kcmVmcy5hcnJvdy5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiRyZWZzLmFycm93LnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5sb2FkQmVlciA9IHRoaXMuYm90dG9tKCk7XG4gICAgICB0aGlzLmFkZEJhY2tncm91bmQoKTtcbiAgICB9KTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICAgIHRoaXMubG9hZEJlZXIgPSB0aGlzLmJvdHRvbSgpO1xuICAgICAgdGhpcy5hZGRCYWNrZ3JvdW5kKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLiRyZWZzLmNvbnRlbnQuc2V0QXR0cmlidXRlKFwiZGF0YS10ZXh0XCIsIHRoaXMudGV4dEJhY2tncm91bmQgKyB0aGlzLnRleHRCYWNrZ3JvdW5kKVxuXG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG5cbiAgICB0aGlzLmFkZEJlZXJzKCk7XG5cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHNob3dNb2RhbChpZCkge1xuXG4gICAgICB0aGlzLml0ZW1TaG93ID0gdGhpcy5iZWVycy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gaWQpO1xuXG4gICAgICB0aGlzLiRyZWZzLmFycm93LnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcblxuICAgICAgdGhpcy5tb2RhbENyb3NzLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICAgIHRoaXMuJHJlZnMuY29udGVudC5zdHlsZS50cmFuc2Zvcm0gPSB0aGlzLiRyZWZzLm1vZGFsLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgtOTklKVwiIDtcblxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdz0gXCJoaWRkZW5cIjtcblxuICAgIH0sXG4gICAgaGlkZU1vZGFsKCkge1xuXG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPj0gdGhpcy5oZWlnaHRTaG93UmV0dXJuVG9wKSB7XG4gICAgICAgIHRoaXMuJHJlZnMuYXJyb3cuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuICAgICAgfVxuICAgICAgdGhpcy5tb2RhbENyb3NzLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgICAgIHRoaXMuJHJlZnMuY29udGVudC5zdHlsZS50cmFuc2Zvcm0gPSB0aGlzLiRyZWZzLm1vZGFsLnN0eWxlLnRyYW5zZm9ybSA9IFwiaW5pdGlhbFwiIDtcblxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdz1cImluaGVyaXRcIjtcblxuICAgIH0sXG4gICAgc2Nyb2xsVG9Ub3AoKSB7XG5cbiAgICAgIGxldCBjb3NQYXJhbWV0ZXIgPSBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50LnNjcm9sbFRvcCAvIDI7XG4gICAgICBsZXQgc2Nyb2xsQ291bnQgPSAwLCBvbGRUaW1lc3RhbXAgPSBudWxsO1xuXG4gICAgICBmdW5jdGlvbiBzdGVwKG5ld1RpbWVzdGFtcCkge1xuICAgICAgICBpZiAob2xkVGltZXN0YW1wICE9PSBudWxsKSB7XG5cbiAgICAgICAgICBzY3JvbGxDb3VudCArPSBNYXRoLlBJICogKG5ld1RpbWVzdGFtcCAtIG9sZFRpbWVzdGFtcCkgLyAxMDAwO1xuICAgICAgICAgIGlmIChzY3JvbGxDb3VudCA+PSBNYXRoLlBJKSByZXR1cm4gZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxUb3AgPSAwO1xuICAgICAgICAgIGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQuc2Nyb2xsVG9wID0gY29zUGFyYW1ldGVyICsgY29zUGFyYW1ldGVyICogTWF0aC5jb3Moc2Nyb2xsQ291bnQpO1xuXG4gICAgICAgIH1cbiAgICAgICAgb2xkVGltZXN0YW1wID0gbmV3VGltZXN0YW1wO1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuXG4gICAgfSxcbiAgICBib3R0b20oKSB7XG5cbiAgICAgIHJldHVybiB3aW5kb3cuc2Nyb2xsWSArIHRoaXMubG9hZERlY2FsID49IHRoaXMuJHJlZnMuY29udGVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgICB9LFxuICAgIGFkZEJhY2tncm91bmQoKSB7XG5cbiAgICAgIGxldCBib2R5QmVmb3IgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLiRyZWZzLmNvbnRlbnQsIFwiYmVmb3JlXCIpO1xuICAgICAgbGV0IGhlaWdodEJvZHkgPSBib2R5QmVmb3IuZ2V0UHJvcGVydHlWYWx1ZShcImhlaWdodFwiKS5tYXRjaCgvXFxkKy8pWzBdXG5cblxuICAgICAgaWYgKCh0aGlzLmxvYWREZWNhbCArIHdpbmRvdy5zY3JvbGxZKSA+IHBhcnNlSW50KGhlaWdodEJvZHkpKSB7XG5cbiAgICAgICAgbGV0IGNvbnRlbnRCb2J5ID0gdGhpcy4kcmVmcy5jb250ZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdGV4dFwiKVxuICAgICAgICB0aGlzLiRyZWZzLmNvbnRlbnQuc2V0QXR0cmlidXRlKFwiZGF0YS10ZXh0XCIsIGNvbnRlbnRCb2J5ICsgdGhpcy50ZXh0QmFja2dyb3VuZClcblxuICAgICAgfVxuICAgIH0sXG4gICAgYWRkQmVlcnMoKSB7XG5cbiAgICAgIGlmICh0aGlzLmJlZXJzLmxlbmd0aCA8IHRoaXMubGltaXRCZWVycykge1xuXG4gICAgICAgIGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9lbmRwb2ludC5waHA/aWQ9XCIgKyB0aGlzLmN1cnJlbnRJZCkudGhlbihyZXNwb25zZSA9PiB7XG5cbiAgICAgICAgICBsZXQgYXBpID0gcmVzcG9uc2UuZGF0YTtcblxuICAgICAgICAgIGFwaS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5iZWVycy5wdXNoKGl0ZW0pO1xuICAgICAgICAgIH0pXG5cbiAgICAgICAgICB0aGlzLmN1cnJlbnRJZCA9IGFwaVthcGkubGVuZ3RoIC0gMV0uaWQ7XG5cbiAgICAgICAgICB0aGlzLiRyZWZzLmNvbnRlbnQuc3R5bGUubGVmdCA9IFwiMFwiO1xuICAgICAgICAgIHRoaXMuJHJlZnMuY29udGVudC5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG5cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICB9LFxuICB9XG59O1xuXG5WdWUuY3JlYXRlQXBwKEFwcCkubW91bnQoXCIjYXBwXCIpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBUEE7QUFTQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBbEZBO0FBekRBO0FBK0lBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/js/app.js\n");

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