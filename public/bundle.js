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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/App.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/App.jsx":
/*!************************!*\
  !*** ./client/App.jsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/SbG/hackreactor/hrr-pt15/frontend-capstone/abraham-related/client/App.jsx: Unexpected token (10:6)\\n\\n\\u001b[0m \\u001b[90m  8 | \\u001b[39m  render() {\\u001b[0m\\n\\u001b[0m \\u001b[90m  9 | \\u001b[39m    \\u001b[36mreturn\\u001b[39m (\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 10 | \\u001b[39m      \\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m      \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 11 | \\u001b[39m        \\u001b[33m<\\u001b[39m\\u001b[33mh1\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33mHello\\u001b[39m \\u001b[33mWorld\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mh1\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 12 | \\u001b[39m      \\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 13 | \\u001b[39m    )\\u001b[0m\\n    at Parser.raise (/Users/SbG/hackreactor/hrr-pt15/frontend-capstone/abraham-related/node_modules/@babel/parser/lib/index.js:6325:17)\\n    at Parser.unexpected (/Users/SbG/hackreactor/hrr-pt15/frontend-capstone/abraham-related/node_modules/@babel/parser/lib/index.js:7642:16)\\n    at Parser.parseExprAtom (/Users/SbG/hackreactor/hrr-pt15/frontend-capstone/abraham-related/node_modules/@babel/parser/lib/index.js:8841:20)\\n    at Parser.parseExprSubscripts (/Users/SbG/hackreactor/hrr-pt15/frontend-capstone/abraham-related/node_modules/@babel/parser/lib/index.js:8412:23)\\n    at Parser.parseMaybeUnary (/Users/SbG/hackreactor/hrr-pt15/frontend-capstone/abraham-related/node_modules/@babel/parser/lib/index.js:8392:21)\\n    at Parser.parseExprOps (/Users/SbG/hackreactor/hrr-pt15/frontend-capstone/abraham-related/node_modules/@babel/parser/lib/index.js:8267:23)\\n    at Parser.parseMaybeConditional (/Users/SbG/hackreactor/hrr-pt15/frontend-capstone/abraham-related/node_modules/@babel/parser/lib/index.js:8240:23)\\n    at Parser.parseMaybeAssign (/Users/SbG/hackreactor/hrr-pt15/frontend-capstone/abraham-related/node_modules/@babel/parser/lib/index.js:8187:21)\\n    at Parser.parseParenAndDistinguishExpression (/Users/SbG/hackreactor/hrr-pt15/frontend-capstone/abraham-related/node_modules/@babel/parser/lib/index.js:8978:28)\\n    at Parser.parseExprAtom (/Users/SbG/hackreactor/hrr-pt15/frontend-capstone/abraham-related/node_modules/@babel/parser/lib/index.js:8762:21)\\n    at Parser.parseExprSubscripts (/Users/SbG/hackreactor/hrr-pt15/frontend-capstone/abraham-related/node_modules/@babel/parser/lib/index.js:8412:23)\\n    at Parser.parseMaybeUnary (/Users/SbG/hackreactor/hrr-pt15/frontend-capstone/abraham-related/node_modules/@babel/parser/lib/index.js:8392:21)\\n    at Parser.parseExprOps (/Users/SbG/hackreactor/hrr-pt15/frontend-capstone/abraham-related/node_modules/@babel/parser/lib/index.js:8267:23)\\n    at Parser.parseMaybeConditional (/Users/SbG/hackreactor/hrr-pt15/frontend-capstone/abraham-related/node_modules/@babel/parser/lib/index.js:8240:23)\\n    at Parser.parseMaybeAssign (/Users/SbG/hackreactor/hrr-pt15/frontend-capstone/abraham-related/node_modules/@babel/parser/lib/index.js:8187:21)\\n    at Parser.parseExpression (/Users/SbG/hackreactor/hrr-pt15/frontend-capstone/abraham-related/node_modules/@babel/parser/lib/index.js:8135:23)\\n    at Parser.parseReturnStatement (/Users/SbG/hackreactor/hrr-pt15/frontend-capstone/abraham-related/node_modules/@babel/parser/lib/index.js:10198:28)\\n    at Parser.parseStatementContent (/Users/SbG/hackreactor/hrr-pt15/frontend-capstone/abraham-related/node_modules/@babel/parser/lib/index.js:9877:21)\\n    at Parser.parseStatement (/Users/SbG/hackreactor/hrr-pt15/frontend-capstone/abraham-related/node_modules/@babel/parser/lib/index.js:9829:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Users/SbG/hackreactor/hrr-pt15/frontend-capstone/abraham-related/node_modules/@babel/parser/lib/index.js:10405:25)\\n    at Parser.parseBlockBody (/Users/SbG/hackreactor/hrr-pt15/frontend-capstone/abraham-related/node_modules/@babel/parser/lib/index.js:10392:10)\\n    at Parser.parseBlock (/Users/SbG/hackreactor/hrr-pt15/frontend-capstone/abraham-related/node_modules/@babel/parser/lib/index.js:10376:10)\\n    at Parser.parseFunctionBody (/Users/SbG/hackreactor/hrr-pt15/frontend-capstone/abraham-related/node_modules/@babel/parser/lib/index.js:9424:24)\\n    at Parser.parseFunctionBodyAndFinish (/Users/SbG/hackreactor/hrr-pt15/frontend-capstone/abraham-related/node_modules/@babel/parser/lib/index.js:9394:10)\\n    at Parser.parseMethod (/Users/SbG/hackreactor/hrr-pt15/frontend-capstone/abraham-related/node_modules/@babel/parser/lib/index.js:9348:10)\\n    at Parser.pushClassMethod (/Users/SbG/hackreactor/hrr-pt15/frontend-capstone/abraham-related/node_modules/@babel/parser/lib/index.js:10804:30)\\n    at Parser.parseClassMemberWithIsStatic (/Users/SbG/hackreactor/hrr-pt15/frontend-capstone/abraham-related/node_modules/@babel/parser/lib/index.js:10729:12)\\n    at Parser.parseClassMember (/Users/SbG/hackreactor/hrr-pt15/frontend-capstone/abraham-related/node_modules/@babel/parser/lib/index.js:10668:10)\\n    at withTopicForbiddingContext (/Users/SbG/hackreactor/hrr-pt15/frontend-capstone/abraham-related/node_modules/@babel/parser/lib/index.js:10623:14)\\n    at Parser.withTopicForbiddingContext (/Users/SbG/hackreactor/hrr-pt15/frontend-capstone/abraham-related/node_modules/@babel/parser/lib/index.js:9702:14)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvQXBwLmpzeC5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/App.jsx\n");

/***/ })

/******/ });