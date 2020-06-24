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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_sudoku__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/sudoku */ "./src/scripts/sudoku.js");
/* harmony import */ var _scripts_sudoku__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_sudoku__WEBPACK_IMPORTED_MODULE_1__);
// import './styles/index.scss';

 // '/src/styles/index.scss'

/***/ }),

/***/ "./src/scripts/sudoku.js":
/*!*******************************!*\
  !*** ./src/scripts/sudoku.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function generateNum() {
  var num = Math.ceil(Math.random() * 9);
  console.log(num);
  return num;
}

function drawSmallBox(left, right, top, bottom) {
  var count = 1;
  ctx.beginPath(); // ctx.lineWidth = 10;

  var row1 = [];
  var row2 = [];
  var row3 = [];
  ctx.font = "20px Arial";
  ctx.strokeStyle = "rgba(0,0,255,0.5)";

  for (b = left; b < right; b += 180) {
    ctx.stroke();
    var box = [];

    for (x = b; x < b + 180; x += 60) {
      console.log("column ".concat(count));
      count++;
      var col = [];

      for (y = top; y < bottom; y += 60) {
        ctx.rect(x, y, 60, 60);
        var num = generateNum();

        if (!col.includes(num) && !box.includes(num)) {
          col.push(num);
          box.push(num);
          ctx.font = "150px Arial";
          ctx.fillText(num, x + 25, y + 45);
        } else {
          col.push("");
          box.push("");
        }

        ctx.stroke();
        ctx.closePath();
      }

      if (!row1.includes(col[0])) {
        row1.push(col[0]);
      }

      ;

      if (!row2.includes(col[1])) {
        row2.push(col[1]);
      }

      ;

      if (!row3.includes(col[2])) {
        row3.push(col[2]);
      }

      ;
    }

    console.log("Row 1: ".concat(row1));
    console.log("Row 2: ".concat(row2));
    console.log("Row 3: ".concat(row3)); // console.log(`Box: ${box}`);

    console.log("box between left, ".concat(left, ", and right, ").concat(right, ", complete! with: [").concat(box, "]"));
  }
}

function drawLargeBox() {
  for (left = 0; left < 540; left += 180) {
    drawSmallBox(left, left + 180, 0, 180);
    drawSmallBox(left, left + 180, 180, 360);
    drawSmallBox(left, left + 180, 360, 540); // console.log(drawSmallBox.row1)
  }
}

;

function parsify(arr) {
  var obj = {};
  arr.forEach(function (el) {
    obj[el] = true;
  });
  newArr = [];
  Object.keys(obj).forEach(function (key) {
    key.split(',').forEach(function (el) {
      newArr.push(parseInt(el));
    });
  });
  return newArr;
}

function drawRect() {
  var count = 1;
  var rows = {
    1: row1 = [],
    2: row2 = [],
    3: row3 = [],
    4: row4 = [],
    5: row5 = [],
    6: row6 = [],
    7: row7 = [],
    8: row8 = [],
    9: row9 = []
  };
  var columns = {
    1: column1 = [],
    2: column2 = [],
    3: column3 = [],
    4: column4 = [],
    5: column5 = [],
    6: column6 = [],
    7: column7 = [],
    8: column8 = [],
    9: column9 = []
  }; // let cols = { 1: col1=[], 2: col2=[], 3: col3=[], 4: col4=[], 5: col5=[], 6: col6=[], 7: col7=[], 8: col8=[], 9: col9=[] };

  var c = 0;
  ctx.beginPath();

  for (large = 0; large < 540; large += 180) {
    console.log('W    T     F'); // this is the entire left side 3 boxes down: 

    for (b = 0; b < 180; b += 180) {
      ctx.stroke();
      var box = []; // this is one box: 

      var checkpoint = 0;

      for (x = b; x < b + 540; x += 60) {
        console.log("column ".concat(count));
        count++;
        var col = []; // this goes across the x axis 3 (or 9 depending on the x limit) spaces and generates each little column in the smallbox. 

        checkpoint++;

        for (y = large; y < large + 180; y += 60) {
          // this goes down the y axis (one 3x3 box at a time) and adds little squares to canvas and nums to the col to be added to the smallbox. 
          // I need to add the cols to a larger column and check every time I go to the next box if the col from the previous box has the nums. be careful about adding to column1, column2, or column3. 
          ctx.rect(x, y, 60, 60);
          ctx.stroke();
          var num = generateNum();
          var bool = false;

          if (!columns[checkpoint].flat().includes(num)) {
            bool = true;
          }

          ;

          if (!box.includes(num) && bool) {
            col.push(num);
            box.push(num);
            ctx.fillText(num, x + 25, y + 45);
          } else {
            col.push("");
            box.push("");
          }

          ctx.closePath();
        }

        columns[checkpoint].push(col);
      }

      console.log("Box: ".concat(box));
    }
  }

  var cols = {
    1: col1 = [],
    2: col2 = [],
    3: col3 = [],
    4: col4 = [],
    5: col5 = [],
    6: col6 = [],
    7: col7 = [],
    8: col8 = [],
    9: col9 = []
  };

  for (i = 1; i <= 9; i++) {
    cols[i] = parsify(columns[i]);
  }

  ;

  for (i = 1; i <= 9; i++) {
    // console.log(`col ${i}: ${cols[i]}`);
    console.log("column ".concat(i, ": ").concat(columns[i]));
  } // let rows = { 1: row1, 2: row2, 3: row3, 4: row4, 5: row5, 6: row6, 7: row7, 8: row8, 9: row9 };


  for (i = 1; i <= 9; i++) {
    for (j = 1; j <= 9; j++) {
      rows[i].push(cols[j][i - 1]);
    }
  }

  ;

  for (i = 1; i <= 9; i++) {
    console.log("row ".concat(i, ": ").concat(rows[i]));
  }
}

drawRect(); // drawLargeBox();
// drawSmallBox(0, 180, 0, 180);
// drawSmallBox();
// Sudoku.drawLargeBox;
// setInterval(drawRect, 40);

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3N1ZG9rdS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/YzgwNyJdLCJuYW1lcyI6WyJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImdlbmVyYXRlTnVtIiwibnVtIiwiTWF0aCIsImNlaWwiLCJyYW5kb20iLCJjb25zb2xlIiwibG9nIiwiZHJhd1NtYWxsQm94IiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwiY291bnQiLCJiZWdpblBhdGgiLCJyb3cxIiwicm93MiIsInJvdzMiLCJmb250Iiwic3Ryb2tlU3R5bGUiLCJiIiwic3Ryb2tlIiwiYm94IiwieCIsImNvbCIsInkiLCJyZWN0IiwiaW5jbHVkZXMiLCJwdXNoIiwiZmlsbFRleHQiLCJjbG9zZVBhdGgiLCJkcmF3TGFyZ2VCb3giLCJwYXJzaWZ5IiwiYXJyIiwib2JqIiwiZm9yRWFjaCIsImVsIiwibmV3QXJyIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsInNwbGl0IiwicGFyc2VJbnQiLCJkcmF3UmVjdCIsInJvd3MiLCJyb3c0Iiwicm93NSIsInJvdzYiLCJyb3c3Iiwicm93OCIsInJvdzkiLCJjb2x1bW5zIiwiY29sdW1uMSIsImNvbHVtbjIiLCJjb2x1bW4zIiwiY29sdW1uNCIsImNvbHVtbjUiLCJjb2x1bW42IiwiY29sdW1uNyIsImNvbHVtbjgiLCJjb2x1bW45IiwiYyIsImxhcmdlIiwiY2hlY2twb2ludCIsImJvb2wiLCJmbGF0IiwiY29scyIsImNvbDEiLCJjb2wyIiwiY29sMyIsImNvbDQiLCJjb2w1IiwiY29sNiIsImNvbDciLCJjb2w4IiwiY29sOSIsImkiLCJqIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7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QUNnQyxDQUFELENBQTdCO0FBQ0Q7QUFFRjs7QUFFRGpDLFFBQVEsRyxDQUNKO0FBRUE7QUFHQTtBQUNBO0FBQ0EsNkI7Ozs7Ozs7Ozs7O0FDbkxKLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIGltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0ICcuL3NjcmlwdHMvc3Vkb2t1Jztcbi8vICcvc3JjL3N0eWxlcy9pbmRleC5zY3NzJyIsImxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FudmFzXCIpO1xubGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlTnVtKCkge1xuICBsZXQgbnVtID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgY29uc29sZS5sb2cobnVtKTtcbiAgcmV0dXJuIG51bTtcbn1cblxuZnVuY3Rpb24gZHJhd1NtYWxsQm94KGxlZnQsIHJpZ2h0LCB0b3AsIGJvdHRvbSkge1xuICBsZXQgY291bnQgPSAxO1xuICBjdHguYmVnaW5QYXRoKCk7XG4gIC8vIGN0eC5saW5lV2lkdGggPSAxMDtcblxuICBsZXQgcm93MSA9IFtdO1xuICBsZXQgcm93MiA9IFtdO1xuICBsZXQgcm93MyA9IFtdO1xuXG4gIGN0eC5mb250ID0gXCIyMHB4IEFyaWFsXCI7XG4gIGN0eC5zdHJva2VTdHlsZSA9IFwicmdiYSgwLDAsMjU1LDAuNSlcIjtcbiAgZm9yIChiID0gbGVmdDsgYiA8IHJpZ2h0OyBiICs9IDE4MCkge1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBsZXQgYm94ID0gW107XG4gICAgZm9yICh4ID0gYjsgeCA8IGIgKyAxODA7IHggKz0gNjApIHtcbiAgICAgIGNvbnNvbGUubG9nKGBjb2x1bW4gJHtjb3VudH1gKTsgY291bnQrKztcbiAgICAgIGxldCBjb2wgPSBbXTtcbiAgICAgIGZvciAoeSA9IHRvcDsgeSA8IGJvdHRvbTsgeSArPSA2MCkge1xuICAgICAgICBjdHgucmVjdCh4LCB5LCA2MCwgNjApO1xuICAgICAgICBsZXQgbnVtID0gZ2VuZXJhdGVOdW0oKTtcbiAgICAgICAgaWYgKCFjb2wuaW5jbHVkZXMobnVtKSAmJiAhYm94LmluY2x1ZGVzKG51bSkpIHtcbiAgICAgICAgICBjb2wucHVzaChudW0pOyBib3gucHVzaChudW0pO1xuICAgICAgICAgIGN0eC5mb250ID0gXCIxNTBweCBBcmlhbFwiO1xuICAgICAgICAgIGN0eC5maWxsVGV4dChudW0sIHggKyAyNSwgeSArIDQ1KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb2wucHVzaChcIlwiKTsgYm94LnB1c2goXCJcIik7XG4gICAgICAgIH1cbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICghcm93MS5pbmNsdWRlcyhjb2xbMF0pKSB7XG4gICAgICAgIHJvdzEucHVzaChjb2xbMF0pO1xuICAgICAgfTtcbiAgICAgIGlmICghcm93Mi5pbmNsdWRlcyhjb2xbMV0pKSB7XG4gICAgICAgIHJvdzIucHVzaChjb2xbMV0pO1xuICAgICAgfTtcbiAgICAgIGlmICghcm93My5pbmNsdWRlcyhjb2xbMl0pKSB7XG4gICAgICAgIHJvdzMucHVzaChjb2xbMl0pO1xuICAgICAgfTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coYFJvdyAxOiAke3JvdzF9YCk7XG4gICAgY29uc29sZS5sb2coYFJvdyAyOiAke3JvdzJ9YCk7XG4gICAgY29uc29sZS5sb2coYFJvdyAzOiAke3JvdzN9YCk7XG4gICAgLy8gY29uc29sZS5sb2coYEJveDogJHtib3h9YCk7XG4gICAgY29uc29sZS5sb2coYGJveCBiZXR3ZWVuIGxlZnQsICR7bGVmdH0sIGFuZCByaWdodCwgJHtyaWdodH0sIGNvbXBsZXRlISB3aXRoOiBbJHtib3h9XWApO1xuICB9XG59XG5mdW5jdGlvbiBkcmF3TGFyZ2VCb3goKSB7XG4gIGZvciAobGVmdCA9IDA7IGxlZnQgPCA1NDA7IGxlZnQgKz0gMTgwKSB7XG4gICAgZHJhd1NtYWxsQm94KGxlZnQsIGxlZnQgKyAxODAsIDAsIDE4MCk7XG4gICAgZHJhd1NtYWxsQm94KGxlZnQsIGxlZnQgKyAxODAsIDE4MCwgMzYwKTtcbiAgICBkcmF3U21hbGxCb3gobGVmdCwgbGVmdCArIDE4MCwgMzYwLCA1NDApO1xuICAgIC8vIGNvbnNvbGUubG9nKGRyYXdTbWFsbEJveC5yb3cxKVxuICB9XG59O1xuXG5cblxuZnVuY3Rpb24gcGFyc2lmeShhcnIpIHtcbiAgbGV0IG9iaiA9IHt9O1xuICBhcnIuZm9yRWFjaChlbCA9PiB7XG4gICAgb2JqW2VsXSA9IHRydWU7XG4gIH0pXG4gIG5ld0FyciA9IFtdO1xuICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goa2V5ID0+IHtcbiAgICBrZXkuc3BsaXQoJywnKS5mb3JFYWNoKGVsID0+IHtcbiAgICAgIG5ld0Fyci5wdXNoKHBhcnNlSW50KGVsKSk7XG4gICAgfSlcbiAgfSlcbiAgcmV0dXJuIG5ld0Fycjtcbn1cblxuZnVuY3Rpb24gZHJhd1JlY3QoKSB7XG5cbiAgbGV0IGNvdW50ID0gMTtcbiAgbGV0IHJvd3MgPSB7IDE6IHJvdzEgPSBbXSwgMjogcm93MiA9IFtdLCAzOiByb3czID0gW10sIDQ6IHJvdzQgPSBbXSwgNTogcm93NSA9IFtdLCA2OiByb3c2ID0gW10sIDc6IHJvdzcgPSBbXSwgODogcm93OCA9IFtdLCA5OiByb3c5ID0gW10gfTtcbiAgbGV0IGNvbHVtbnMgPSB7IDE6IGNvbHVtbjEgPSBbXSwgMjogY29sdW1uMiA9IFtdLCAzOiBjb2x1bW4zID0gW10sIDQ6IGNvbHVtbjQgPSBbXSwgNTogY29sdW1uNSA9IFtdLCA2OiBjb2x1bW42ID0gW10sIDc6IGNvbHVtbjcgPSBbXSwgODogY29sdW1uOCA9IFtdLCA5OiBjb2x1bW45ID0gW10gfVxuICAvLyBsZXQgY29scyA9IHsgMTogY29sMT1bXSwgMjogY29sMj1bXSwgMzogY29sMz1bXSwgNDogY29sND1bXSwgNTogY29sNT1bXSwgNjogY29sNj1bXSwgNzogY29sNz1bXSwgODogY29sOD1bXSwgOTogY29sOT1bXSB9O1xuXG4gIGxldCBjID0gMDtcblxuICBjdHguYmVnaW5QYXRoKCk7XG5cbiAgZm9yIChsYXJnZSA9IDA7IGxhcmdlIDwgNTQwOyBsYXJnZSArPSAxODApIHtcbiAgICBjb25zb2xlLmxvZygnVyAgICBUICAgICBGJyk7XG4gICAgLy8gdGhpcyBpcyB0aGUgZW50aXJlIGxlZnQgc2lkZSAzIGJveGVzIGRvd246IFxuXG5cbiAgICBmb3IgKGIgPSAwOyBiIDwgMTgwOyBiICs9IDE4MCkge1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgbGV0IGJveCA9IFtdO1xuXG4gICAgICAvLyB0aGlzIGlzIG9uZSBib3g6IFxuXG4gICAgICBsZXQgY2hlY2twb2ludCA9IDA7XG5cbiAgICAgIGZvciAoeCA9IGI7IHggPCBiICsgNTQwOyB4ICs9IDYwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBjb2x1bW4gJHtjb3VudH1gKTsgY291bnQrKztcbiAgICAgICAgbGV0IGNvbCA9IFtdO1xuXG4gICAgICAgIC8vIHRoaXMgZ29lcyBhY3Jvc3MgdGhlIHggYXhpcyAzIChvciA5IGRlcGVuZGluZyBvbiB0aGUgeCBsaW1pdCkgc3BhY2VzIGFuZCBnZW5lcmF0ZXMgZWFjaCBsaXR0bGUgY29sdW1uIGluIHRoZSBzbWFsbGJveC4gXG4gICAgICAgIGNoZWNrcG9pbnQrKztcblxuICAgICAgICBmb3IgKHkgPSBsYXJnZTsgeSA8IChsYXJnZSArIDE4MCk7IHkgKz0gNjApIHtcblxuICAgICAgICAgIC8vIHRoaXMgZ29lcyBkb3duIHRoZSB5IGF4aXMgKG9uZSAzeDMgYm94IGF0IGEgdGltZSkgYW5kIGFkZHMgbGl0dGxlIHNxdWFyZXMgdG8gY2FudmFzIGFuZCBudW1zIHRvIHRoZSBjb2wgdG8gYmUgYWRkZWQgdG8gdGhlIHNtYWxsYm94LiBcblxuICAgICAgICAgIC8vIEkgbmVlZCB0byBhZGQgdGhlIGNvbHMgdG8gYSBsYXJnZXIgY29sdW1uIGFuZCBjaGVjayBldmVyeSB0aW1lIEkgZ28gdG8gdGhlIG5leHQgYm94IGlmIHRoZSBjb2wgZnJvbSB0aGUgcHJldmlvdXMgYm94IGhhcyB0aGUgbnVtcy4gYmUgY2FyZWZ1bCBhYm91dCBhZGRpbmcgdG8gY29sdW1uMSwgY29sdW1uMiwgb3IgY29sdW1uMy4gXG5cbiAgICAgICAgICBjdHgucmVjdCh4LCB5LCA2MCwgNjApO1xuICAgICAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgICAgIGxldCBudW0gPSBnZW5lcmF0ZU51bSgpO1xuICAgICAgICAgIGxldCBib29sID0gZmFsc2U7XG5cblxuICAgICAgICAgIGlmICghY29sdW1uc1tjaGVja3BvaW50XS5mbGF0KCkuaW5jbHVkZXMobnVtKSkge1xuICAgICAgICAgICAgYm9vbCA9IHRydWU7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmICghYm94LmluY2x1ZGVzKG51bSkgJiYgYm9vbCkge1xuICAgICAgICAgICAgY29sLnB1c2gobnVtKTsgYm94LnB1c2gobnVtKTtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChudW0sIHggKyAyNSwgeSArIDQ1KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29sLnB1c2goXCJcIik7IGJveC5wdXNoKFwiXCIpO1xuICAgICAgICAgIH1cblxuXG4gICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbHVtbnNbY2hlY2twb2ludF0ucHVzaChjb2wpO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coYEJveDogJHtib3h9YCk7XG4gICAgfVxuICB9XG5cbiAgbGV0IGNvbHMgPSB7IDE6IGNvbDEgPSBbXSwgMjogY29sMiA9IFtdLCAzOiBjb2wzID0gW10sIDQ6IGNvbDQgPSBbXSwgNTogY29sNSA9IFtdLCA2OiBjb2w2ID0gW10sIDc6IGNvbDcgPSBbXSwgODogY29sOCA9IFtdLCA5OiBjb2w5ID0gW10gfTtcblxuICBmb3IgKGkgPSAxOyBpIDw9IDk7IGkrKykge1xuICAgIGNvbHNbaV0gPSBwYXJzaWZ5KGNvbHVtbnNbaV0pO1xuICB9O1xuXG4gIGZvciAoaSA9IDE7IGkgPD0gOTsgaSsrKSB7XG4gICAgLy8gY29uc29sZS5sb2coYGNvbCAke2l9OiAke2NvbHNbaV19YCk7XG4gICAgY29uc29sZS5sb2coYGNvbHVtbiAke2l9OiAke2NvbHVtbnNbaV19YCk7XG4gIH1cblxuICAvLyBsZXQgcm93cyA9IHsgMTogcm93MSwgMjogcm93MiwgMzogcm93MywgNDogcm93NCwgNTogcm93NSwgNjogcm93NiwgNzogcm93NywgODogcm93OCwgOTogcm93OSB9O1xuXG4gIGZvciAoaSA9IDE7IGkgPD0gOTsgaSsrKSB7XG4gICAgZm9yIChqID0gMTsgaiA8PSA5OyBqKyspIHtcbiAgICAgIHJvd3NbaV0ucHVzaChjb2xzW2pdW2kgLSAxXSk7XG4gICAgfVxuICB9O1xuXG4gIGZvciAoaSA9IDE7IGkgPD0gOTsgaSsrKSB7XG4gICAgY29uc29sZS5sb2coYHJvdyAke2l9OiAke3Jvd3NbaV19YCk7XG4gIH1cblxufVxuXG5kcmF3UmVjdCgpO1xuICAgIC8vIGRyYXdMYXJnZUJveCgpO1xuXG4gICAgLy8gZHJhd1NtYWxsQm94KDAsIDE4MCwgMCwgMTgwKTtcblxuXG4gICAgLy8gZHJhd1NtYWxsQm94KCk7XG4gICAgLy8gU3Vkb2t1LmRyYXdMYXJnZUJveDtcbiAgICAvLyBzZXRJbnRlcnZhbChkcmF3UmVjdCwgNDApOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=