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
/* harmony import */ var _scripts_board_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/board.js */ "./src/scripts/board.js");
/* harmony import */ var _scripts_board_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_board_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scripts_sudoku_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/sudoku.js */ "./src/scripts/sudoku.js");
/* harmony import */ var _scripts_sudoku_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_sudoku_js__WEBPACK_IMPORTED_MODULE_2__);
// import './styles/index.scss';


 // '/src/styles/index.scss'

/***/ }),

/***/ "./src/scripts/board.js":
/*!******************************!*\
  !*** ./src/scripts/board.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Board = /*#__PURE__*/function () {
  function Board(canvas, ctx) {
    _classCallCheck(this, Board);

    // this.boxes = {
    //   0: [],
    //   1: [],
    //   2: [],
    //   3: [],
    //   4: [],
    //   5: [],
    //   6: [],
    //   7: [],
    //   8: []
    // };  
    this.rows = {
      0: [],
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
      7: [],
      8: []
    };
    this.columns = {
      0: [],
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
      7: [],
      8: []
    };
    this.canvas = canvas;
    this.ctx = ctx;
    this.generateNum = this.generateNum.bind(this);
    this.drawBall = this.drawBall.bind(this);
    this.drawBoxes = this.drawBoxes.bind(this);
    this.placeNums = this.placeNums.bind(this);
  }

  _createClass(Board, [{
    key: "generateNum",
    value: function generateNum() {
      var num = Math.ceil(Math.random() * 9);
      console.log("num: ".concat(num));
      return num;
    }
  }, {
    key: "drawBall",
    value: function drawBall() {
      this.ctx.beginPath();
      this.ctx.arc(50, 50, 20, 0, Math.PI * 2);
      this.ctx.fillStyle = "#0095DD";
      this.ctx.stroke(); // this.ctx.fill();

      this.ctx.closePath();
    }
  }, {
    key: "drawOutline",
    value: function drawOutline() {
      this.ctx.beginPath();
      this.ctx.lineWidth = 4;

      for (var x = 0; x <= 540; x += 180) {
        this.ctx.moveTo(x, 0);
        this.ctx.lineTo(x, 540);
        this.ctx.moveTo(0, x);
        this.ctx.lineTo(540, x);
      } // for (let y = 0; y<=540; y+=180) {
      //   this.ctx.moveTo(0,y);
      //   this.ctx.lineTo(540, y);
      // }


      this.ctx.stroke();
      this.ctx.closePath();
    }
  }, {
    key: "drawBoxes",
    value: function drawBoxes() {
      this.ctx.beginPath();
      this.ctx.lineWidth = 0.5;

      for (var x = 0; x < 540; x += 60) {
        for (var y = 0; y < 540; y += 60) {
          this.ctx.rect(x, y, 60, 60);
        }
      }

      this.ctx.stroke();
      this.ctx.closePath();
    }
  }, {
    key: "placeNums",
    value: function placeNums(startX, startY) {
      this.ctx.beginPath(); // x is 180 -> count = 3 bc 540/9 = 60 and 180/60 = 3

      var box = [];
      var colIndex = startX / 60; // for (let x=180; x<360; x+=60) {

      for (var x = startX; x < startX + 180; x += 60) {
        colIndex++;
        var col = [];

        for (var y = startY; y < startY + 180; y += 60) {
          // this.ctx.rect(x,y,60,60);
          num = this.generateNum();

          if (!box.includes(num) && !this.columns[colIndex - 1].flat().flat().includes(num)) {
            box.push(num);
            col.push(num);
            this.ctx.fillText(num, x + 25, y + 45);
          } else {
            col.push("-");
          }
        }

        this.columns[colIndex - 1].push(col);
        this.columns[colIndex - 1].flat();
        console.log("box: [".concat(box, "]"));
        console.log("Columns: ", this.columns); // console.log(`Columns: ${this.columns}`);

        console.log("cols:", Object.values(this.columns).flat());
      } // this.ctx.rect(180, 180, 60, 60);
      // let num = this.generateNum();
      // this.ctx.fillText(num, 180 + 25, 180 + 45);


      this.ctx.closePath();
    }
  }]);

  return Board;
}();

; // let b = new Board; 
// console.log(b.generateNum()); 
// b.generateNum();

module.exports = Board; // let count = 1;
// let rows = { 1: row1 = [], 2: row2 = [], 3: row3 = [], 4: row4 = [], 5: row5 = [], 6: row6 = [], 7: row7 = [], 8: row8 = [], 9: row9 = [] };
// let columns = { 1: column1 = [], 2: column2 = [], 3: column3 = [], 4: column4 = [], 5: column5 = [], 6: column6 = [], 7: column7 = [], 8: column8 = [], 9: column9 = [] }
// // let cols = { 1: col1=[], 2: col2=[], 3: col3=[], 4: col4=[], 5: col5=[], 6: col6=[], 7: col7=[], 8: col8=[], 9: col9=[] };
// let c = 0;
// for (large = 0; large < 540; large += 180) {
//   console.log('W    T     F');
//   // this is the entire left side 3 boxes down: 
//   for (b = 0; b < 180; b += 180) {
//     ctx.stroke();
//     let box = [];
//     // this is one box: 
//     let checkpoint = 0;
//     for (x = b; x < b + 540; x += 60) {
//       console.log(`column ${count}`); count++;
//       let col = [];
//       // this goes across the x axis 3 (or 9 depending on the x limit) spaces and generates each little column in the smallbox. 
//       checkpoint++;
//       for (y = large; y < (large + 180); y += 60) {
//         // this goes down the y axis (one 3x3 box at a time) and adds little squares to canvas and nums to the col to be added to the smallbox. 
//         // I need to add the cols to a larger column and check every time I go to the next box if the col from the previous box has the nums. be careful about adding to column1, column2, or column3. 
//         ctx.rect(x, y, 60, 60);
//         ctx.stroke();
//         let num = generateNum();
//         let bool = false;
//         if (!columns[checkpoint].flat().includes(num)) {
//           bool = true;
//         };
//         if (!box.includes(num) && bool) {
//           col.push(num); box.push(num);
//           ctx.fillText(num, x + 25, y + 45);
//         } else {
//           col.push(""); box.push("");
//         }
//         ctx.closePath();
//       }
//       columns[checkpoint].push(col);
//     }
//     console.log(`Box: ${box}`);
//   }
// }
// let cols = { 1: col1 = [], 2: col2 = [], 3: col3 = [], 4: col4 = [], 5: col5 = [], 6: col6 = [], 7: col7 = [], 8: col8 = [], 9: col9 = [] };
// for (i = 1; i <= 9; i++) {
//   cols[i] = parsify(columns[i]);
// };
// for (i = 1; i <= 9; i++) {
//   // console.log(`col ${i}: ${cols[i]}`);
//   console.log(`column ${i}: ${columns[i]}`);
// }
// // let rows = { 1: row1, 2: row2, 3: row3, 4: row4, 5: row5, 6: row6, 7: row7, 8: row8, 9: row9 };
// for (i = 1; i <= 9; i++) {
//   for (j = 1; j <= 9; j++) {
//     rows[i].push(cols[j][i - 1]);
//   }
// };
// for (i = 1; i <= 9; i++) {
//   console.log(`row ${i}: ${rows[i]}`);
// }

/***/ }),

/***/ "./src/scripts/sudoku.js":
/*!*******************************!*\
  !*** ./src/scripts/sudoku.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Board = __webpack_require__(/*! ./board */ "./src/scripts/board.js");

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function generateNum() {
  var num = Math.ceil(Math.random() * 9);
  console.log(num);
  return num;
} // function drawSmallBox(left, right, top, bottom) {
//   let count = 1;
//   ctx.beginPath();
//   // ctx.lineWidth = 10;
//   let row1 = [];
//   let row2 = [];
//   let row3 = [];
//   ctx.font = "20px Arial";
//   ctx.strokeStyle = "rgba(0,0,255,0.5)";
//   for (b = left; b < right; b += 180) {
//     ctx.stroke();
//     let box = [];
//     for (x = b; x < b + 180; x += 60) {
//       console.log(`column ${count}`); count++;
//       let col = [];
//       for (y = top; y < bottom; y += 60) {
//         ctx.rect(x, y, 60, 60);
//         let num = generateNum();
//         if (!col.includes(num) && !box.includes(num)) {
//           col.push(num); box.push(num);
//           ctx.font = "150px Arial";
//           ctx.fillText(num, x + 25, y + 45);
//         } else {
//           col.push(""); box.push("");
//         }
//         ctx.stroke();
//         ctx.closePath();
//       }
//       if (!row1.includes(col[0])) {
//         row1.push(col[0]);
//       };
//       if (!row2.includes(col[1])) {
//         row2.push(col[1]);
//       };
//       if (!row3.includes(col[2])) {
//         row3.push(col[2]);
//       };
//     }
//     console.log(`Row 1: ${row1}`);
//     console.log(`Row 2: ${row2}`);
//     console.log(`Row 3: ${row3}`);
//     // console.log(`Box: ${box}`);
//     console.log(`box between left, ${left}, and right, ${right}, complete! with: [${box}]`);
//   }
// }
// function drawLargeBox() {
//   for (left = 0; left < 540; left += 180) {
//     drawSmallBox(left, left + 180, 0, 180);
//     drawSmallBox(left, left + 180, 180, 360);
//     drawSmallBox(left, left + 180, 360, 540);
//     // console.log(drawSmallBox.row1)
//   }
// };


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
} // drawRect();
// drawLargeBox();
// drawSmallBox(0, 180, 0, 180);
// drawSmallBox();
// Sudoku.drawLargeBox;
// setInterval(drawRect, 40);


var b = new Board(canvas, ctx);
b.generateNum(); // b.drawBall();

b.drawBoxes(); // b.drawBoard();

b.placeNums(0, 0);
b.placeNums(0, 180);
b.placeNums(0, 360);
b.placeNums(180, 0);
b.placeNums(180, 180);
b.placeNums(180, 360);
b.placeNums(360, 0);
b.placeNums(360, 180);
b.placeNums(360, 360); // b.placeNums(0,0);
// b.placeNums(180, 180);
// b.placeNums(0, 180);
// b.placeNums(0, 360);
// b.placeNums(180, 0);

b.drawOutline();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2JvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3N1ZG9rdS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiQm9hcmQiLCJjYW52YXMiLCJjdHgiLCJyb3dzIiwiY29sdW1ucyIsImdlbmVyYXRlTnVtIiwiYmluZCIsImRyYXdCYWxsIiwiZHJhd0JveGVzIiwicGxhY2VOdW1zIiwibnVtIiwiTWF0aCIsImNlaWwiLCJyYW5kb20iLCJjb25zb2xlIiwibG9nIiwiYmVnaW5QYXRoIiwiYXJjIiwiUEkiLCJmaWxsU3R5bGUiLCJzdHJva2UiLCJjbG9zZVBhdGgiLCJsaW5lV2lkdGgiLCJ4IiwibW92ZVRvIiwibGluZVRvIiwieSIsInJlY3QiLCJzdGFydFgiLCJzdGFydFkiLCJib3giLCJjb2xJbmRleCIsImNvbCIsImluY2x1ZGVzIiwiZmxhdCIsInB1c2giLCJmaWxsVGV4dCIsIk9iamVjdCIsInZhbHVlcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZXF1aXJlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJwYXJzaWZ5IiwiYXJyIiwib2JqIiwiZm9yRWFjaCIsImVsIiwibmV3QXJyIiwia2V5cyIsImtleSIsInNwbGl0IiwicGFyc2VJbnQiLCJkcmF3UmVjdCIsImNvdW50Iiwicm93MSIsInJvdzIiLCJyb3czIiwicm93NCIsInJvdzUiLCJyb3c2Iiwicm93NyIsInJvdzgiLCJyb3c5IiwiY29sdW1uMSIsImNvbHVtbjIiLCJjb2x1bW4zIiwiY29sdW1uNCIsImNvbHVtbjUiLCJjb2x1bW42IiwiY29sdW1uNyIsImNvbHVtbjgiLCJjb2x1bW45IiwiYyIsImxhcmdlIiwiYiIsImNoZWNrcG9pbnQiLCJib29sIiwiY29scyIsImNvbDEiLCJjb2wyIiwiY29sMyIsImNvbDQiLCJjb2w1IiwiY29sNiIsImNvbDciLCJjb2w4IiwiY29sOSIsImkiLCJqIiwiZHJhd091dGxpbmUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Q0FFQSwyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNKTUEsSztBQUNKLGlCQUFZQyxNQUFaLEVBQW9CQyxHQUFwQixFQUF5QjtBQUFBOztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBS0MsSUFBTCxHQUFZO0FBQ1YsU0FBRyxFQURPO0FBRVYsU0FBRyxFQUZPO0FBR1YsU0FBRyxFQUhPO0FBSVYsU0FBRyxFQUpPO0FBS1YsU0FBRyxFQUxPO0FBTVYsU0FBRyxFQU5PO0FBT1YsU0FBRyxFQVBPO0FB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SSxDQUFqQixFQUFvQkEsQ0FBQyxFQUFyQixFQUF5QjtBQUN2QjVFLFdBQU8sQ0FBQ0MsR0FBUixlQUFtQjJFLENBQW5CLGVBQXlCdkYsSUFBSSxDQUFDdUYsQ0FBRCxDQUE3QjtBQUNEO0FBRUYsQyxDQUVEO0FBR0k7QUFFQTtBQUdBO0FBQ0E7QUFDQTs7O0FBSUosSUFBSWIsQ0FBQyxHQUFHLElBQUk3RSxLQUFKLENBQVVDLE1BQVYsRUFBaUJDLEdBQWpCLENBQVI7QUFDQTJFLENBQUMsQ0FBQ3hFLFdBQUYsRyxDQUdBOztBQUNBd0UsQ0FBQyxDQUFDckUsU0FBRixHLENBQ0E7O0FBQ0FxRSxDQUFDLENBQUNwRSxTQUFGLENBQVksQ0FBWixFQUFjLENBQWQ7QUFDQW9FLENBQUMsQ0FBQ3BFLFNBQUYsQ0FBWSxDQUFaLEVBQWMsR0FBZDtBQUNBb0UsQ0FBQyxDQUFDcEUsU0FBRixDQUFZLENBQVosRUFBYyxHQUFkO0FBR0FvRSxDQUFDLENBQUNwRSxTQUFGLENBQVksR0FBWixFQUFnQixDQUFoQjtBQUNBb0UsQ0FBQyxDQUFDcEUsU0FBRixDQUFZLEdBQVosRUFBZ0IsR0FBaEI7QUFDQW9FLENBQUMsQ0FBQ3BFLFNBQUYsQ0FBWSxHQUFaLEVBQWdCLEdBQWhCO0FBR0FvRSxDQUFDLENBQUNwRSxTQUFGLENBQVksR0FBWixFQUFnQixDQUFoQjtBQUNBb0UsQ0FBQyxDQUFDcEUsU0FBRixDQUFZLEdBQVosRUFBZ0IsR0FBaEI7QUFDQW9FLENBQUMsQ0FBQ3BFLFNBQUYsQ0FBWSxHQUFaLEVBQWdCLEdBQWhCLEUsQ0FJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBb0UsQ0FBQyxDQUFDZSxXQUFGLEc7Ozs7Ozs7Ozs7O0FDek5BLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIGltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0ICcuL3NjcmlwdHMvYm9hcmQuanMnO1xuaW1wb3J0ICcuL3NjcmlwdHMvc3Vkb2t1LmpzJztcbi8vICcvc3JjL3N0eWxlcy9pbmRleC5zY3NzJyIsImNsYXNzIEJvYXJkIHtcbiAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgpIHtcbiAgICAvLyB0aGlzLmJveGVzID0ge1xuICAgIC8vICAgMDogW10sXG4gICAgLy8gICAxOiBbXSxcbiAgICAvLyAgIDI6IFtdLFxuICAgIC8vICAgMzogW10sXG4gICAgLy8gICA0OiBbXSxcbiAgICAvLyAgIDU6IFtdLFxuICAgIC8vICAgNjogW10sXG4gICAgLy8gICA3OiBbXSxcbiAgICAvLyAgIDg6IFtdXG4gICAgLy8gfTsgIFxuICAgIHRoaXMucm93cyA9IHtcbiAgICAgIDA6IFtdLFxuICAgICAgMTogW10sXG4gICAgICAyOiBbXSxcbiAgICAgIDM6IFtdLFxuICAgICAgNDogW10sXG4gICAgICA1OiBbXSxcbiAgICAgIDY6IFtdLFxuICAgICAgNzogW10sXG4gICAgICA4OiBbXVxuICAgIH07IFxuICAgIHRoaXMuY29sdW1ucyA9IHsgXG4gICAgICAwOiBbXSwgXG4gICAgICAxOiBbXSwgXG4gICAgICAyOiBbXSwgXG4gICAgICAzOiBbXSwgXG4gICAgICA0OiBbXSwgXG4gICAgICA1OiBbXSwgXG4gICAgICA2OiBbXSwgXG4gICAgICA3OiBbXSwgXG4gICAgICA4OiBbXVxuICAgIH07IFxuXG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5jdHggPSBjdHg7XG5cbiAgICB0aGlzLmdlbmVyYXRlTnVtID0gdGhpcy5nZW5lcmF0ZU51bS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZHJhd0JhbGwgPSB0aGlzLmRyYXdCYWxsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kcmF3Qm94ZXMgPSB0aGlzLmRyYXdCb3hlcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMucGxhY2VOdW1zID0gdGhpcy5wbGFjZU51bXMuYmluZCh0aGlzKTtcbiAgfVxuICBcbiAgZ2VuZXJhdGVOdW0oKSB7XG4gICAgbGV0IG51bSA9IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogOSk7XG4gICAgY29uc29sZS5sb2coYG51bTogJHtudW19YCk7XG4gICAgcmV0dXJuIG51bTsgXG4gIH1cblxuICBkcmF3QmFsbCgpIHtcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcblxuICAgIHRoaXMuY3R4LmFyYyg1MCwgNTAsIDIwLCAwLCBNYXRoLlBJICogMik7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjMDA5NUREXCI7XG4gICAgdGhpcy5jdHguc3Ryb2tlKCk7IFxuICAgIC8vIHRoaXMuY3R4LmZpbGwoKTtcbiAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgfVxuXG4gIGRyYXdPdXRsaW5lKCkge1xuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDQ7IFxuXG4gICAgZm9yIChsZXQgeCA9IDA7IHg8PTU0MDsgeCs9MTgwKSB7XG4gICAgICB0aGlzLmN0eC5tb3ZlVG8oeCwwKTtcbiAgICAgIHRoaXMuY3R4LmxpbmVUbyh4LCA1NDApO1xuXG4gICAgICB0aGlzLmN0eC5tb3ZlVG8oMCx4KTtcbiAgICAgIHRoaXMuY3R4LmxpbmVUbyg1NDAsIHgpO1xuICAgIH1cblxuICAgIC8vIGZvciAobGV0IHkgPSAwOyB5PD01NDA7IHkrPTE4MCkge1xuICAgIC8vICAgdGhpcy5jdHgubW92ZVRvKDAseSk7XG4gICAgLy8gICB0aGlzLmN0eC5saW5lVG8oNTQwLCB5KTtcbiAgICAvLyB9XG5cbiAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICB9XG5cbiAgZHJhd0JveGVzKCkge1xuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDAuNTtcbiAgICBmb3IgKGxldCB4PTA7IHggPCA1NDA7IHgrPTYwKSB7XG4gICAgICBmb3IgKGxldCB5PTA7IHk8NTQwOyB5Kz02MCkge1xuICAgICAgICB0aGlzLmN0eC5yZWN0KHgseSw2MCw2MCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpOyBcbiAgfVxuXG4gIHBsYWNlTnVtcyhzdGFydFgsc3RhcnRZKSB7XG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG5cbiAgICAvLyB4IGlzIDE4MCAtPiBjb3VudCA9IDMgYmMgNTQwLzkgPSA2MCBhbmQgMTgwLzYwID0gM1xuXG4gICAgbGV0IGJveCA9IFtdO1xuICAgIGxldCBjb2xJbmRleCA9IHN0YXJ0WC82MDsgXG5cbiAgICAvLyBmb3IgKGxldCB4PTE4MDsgeDwzNjA7IHgrPTYwKSB7XG4gICAgZm9yIChsZXQgeD1zdGFydFg7IHg8IChzdGFydFgrMTgwKTsgeCs9NjApIHtcbiAgICAgIGNvbEluZGV4ICsrOyBcbiAgICAgIGxldCBjb2wgPSBbXTsgXG4gICAgICBmb3IgKGxldCB5PXN0YXJ0WTsgeTwoc3RhcnRZKzE4MCk7IHkrPTYwKSB7XG4gICAgICAgIC8vIHRoaXMuY3R4LnJlY3QoeCx5LDYwLDYwKTtcbiAgICAgICAgbnVtID0gdGhpcy5nZW5lcmF0ZU51bSgpO1xuICAgICAgICBpZiAoIWJveC5pbmNsdWRlcyhudW0pICYmICF0aGlzLmNvbHVtbnNbY29sSW5kZXgtMV0uZmxhdCgpLmZsYXQoKS5pbmNsdWRlcyhudW0pKSB7XG4gICAgICAgICAgYm94LnB1c2gobnVtKTsgXG4gICAgICAgICAgY29sLnB1c2gobnVtKTtcbiAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChudW0sIHggKyAyNSwgeSArIDQ1KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb2wucHVzaChcIi1cIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuY29sdW1uc1tjb2xJbmRleC0xXS5wdXNoKGNvbCk7XG4gICAgICB0aGlzLmNvbHVtbnNbY29sSW5kZXgtMV0uZmxhdCgpO1xuICAgICAgY29uc29sZS5sb2coYGJveDogWyR7Ym94fV1gKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29sdW1uczogXCIsIHRoaXMuY29sdW1ucyk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhgQ29sdW1uczogJHt0aGlzLmNvbHVtbnN9YCk7XG4gICAgICBjb25zb2xlLmxvZyhcImNvbHM6XCIsIE9iamVjdC52YWx1ZXModGhpcy5jb2x1bW5zKS5mbGF0KCkpO1xuICAgIH1cblxuICAgIC8vIHRoaXMuY3R4LnJlY3QoMTgwLCAxODAsIDYwLCA2MCk7XG4gICAgLy8gbGV0IG51bSA9IHRoaXMuZ2VuZXJhdGVOdW0oKTtcbiAgICAvLyB0aGlzLmN0eC5maWxsVGV4dChudW0sIDE4MCArIDI1LCAxODAgKyA0NSk7XG5cbiAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgfVxuXG59O1xuXG4vLyBsZXQgYiA9IG5ldyBCb2FyZDsgXG4vLyBjb25zb2xlLmxvZyhiLmdlbmVyYXRlTnVtKCkpOyBcbi8vIGIuZ2VuZXJhdGVOdW0oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBCb2FyZDsgXG5cblxuXG4vLyBsZXQgY291bnQgPSAxO1xuLy8gbGV0IHJvd3MgPSB7IDE6IHJvdzEgPSBbXSwgMjogcm93MiA9IFtdLCAzOiByb3czID0gW10sIDQ6IHJvdzQgPSBbXSwgNTogcm93NSA9IFtdLCA2OiByb3c2ID0gW10sIDc6IHJvdzcgPSBbXSwgODogcm93OCA9IFtdLCA5OiByb3c5ID0gW10gfTtcbi8vIGxldCBjb2x1bW5zID0geyAxOiBjb2x1bW4xID0gW10sIDI6IGNvbHVtbjIgPSBbXSwgMzogY29sdW1uMyA9IFtdLCA0OiBjb2x1bW40ID0gW10sIDU6IGNvbHVtbjUgPSBbXSwgNjogY29sdW1uNiA9IFtdLCA3OiBjb2x1bW43ID0gW10sIDg6IGNvbHVtbjggPSBbXSwgOTogY29sdW1uOSA9IFtdIH1cbi8vIC8vIGxldCBjb2xzID0geyAxOiBjb2wxPVtdLCAyOiBjb2wyPVtdLCAzOiBjb2wzPVtdLCA0OiBjb2w0PVtdLCA1OiBjb2w1PVtdLCA2OiBjb2w2PVtdLCA3OiBjb2w3PVtdLCA4OiBjb2w4PVtdLCA5OiBjb2w5PVtdIH07XG5cbi8vIGxldCBjID0gMDtcblxuXG4vLyBmb3IgKGxhcmdlID0gMDsgbGFyZ2UgPCA1NDA7IGxhcmdlICs9IDE4MCkge1xuLy8gICBjb25zb2xlLmxvZygnVyAgICBUICAgICBGJyk7XG4vLyAgIC8vIHRoaXMgaXMgdGhlIGVudGlyZSBsZWZ0IHNpZGUgMyBib3hlcyBkb3duOiBcblxuXG4vLyAgIGZvciAoYiA9IDA7IGIgPCAxODA7IGIgKz0gMTgwKSB7XG4vLyAgICAgY3R4LnN0cm9rZSgpO1xuLy8gICAgIGxldCBib3ggPSBbXTtcblxuLy8gICAgIC8vIHRoaXMgaXMgb25lIGJveDogXG5cbi8vICAgICBsZXQgY2hlY2twb2ludCA9IDA7XG5cbi8vICAgICBmb3IgKHggPSBiOyB4IDwgYiArIDU0MDsgeCArPSA2MCkge1xuLy8gICAgICAgY29uc29sZS5sb2coYGNvbHVtbiAke2NvdW50fWApOyBjb3VudCsrO1xuLy8gICAgICAgbGV0IGNvbCA9IFtdO1xuXG4vLyAgICAgICAvLyB0aGlzIGdvZXMgYWNyb3NzIHRoZSB4IGF4aXMgMyAob3IgOSBkZXBlbmRpbmcgb24gdGhlIHggbGltaXQpIHNwYWNlcyBhbmQgZ2VuZXJhdGVzIGVhY2ggbGl0dGxlIGNvbHVtbiBpbiB0aGUgc21hbGxib3guIFxuLy8gICAgICAgY2hlY2twb2ludCsrO1xuXG4vLyAgICAgICBmb3IgKHkgPSBsYXJnZTsgeSA8IChsYXJnZSArIDE4MCk7IHkgKz0gNjApIHtcblxuLy8gICAgICAgICAvLyB0aGlzIGdvZXMgZG93biB0aGUgeSBheGlzIChvbmUgM3gzIGJveCBhdCBhIHRpbWUpIGFuZCBhZGRzIGxpdHRsZSBzcXVhcmVzIHRvIGNhbnZhcyBhbmQgbnVtcyB0byB0aGUgY29sIHRvIGJlIGFkZGVkIHRvIHRoZSBzbWFsbGJveC4gXG5cbi8vICAgICAgICAgLy8gSSBuZWVkIHRvIGFkZCB0aGUgY29scyB0byBhIGxhcmdlciBjb2x1bW4gYW5kIGNoZWNrIGV2ZXJ5IHRpbWUgSSBnbyB0byB0aGUgbmV4dCBib3ggaWYgdGhlIGNvbCBmcm9tIHRoZSBwcmV2aW91cyBib3ggaGFzIHRoZSBudW1zLiBiZSBjYXJlZnVsIGFib3V0IGFkZGluZyB0byBjb2x1bW4xLCBjb2x1bW4yLCBvciBjb2x1bW4zLiBcblxuLy8gICAgICAgICBjdHgucmVjdCh4LCB5LCA2MCwgNjApO1xuLy8gICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbi8vICAgICAgICAgbGV0IG51bSA9IGdlbmVyYXRlTnVtKCk7XG4vLyAgICAgICAgIGxldCBib29sID0gZmFsc2U7XG5cblxuLy8gICAgICAgICBpZiAoIWNvbHVtbnNbY2hlY2twb2ludF0uZmxhdCgpLmluY2x1ZGVzKG51bSkpIHtcbi8vICAgICAgICAgICBib29sID0gdHJ1ZTtcbi8vICAgICAgICAgfTtcblxuLy8gICAgICAgICBpZiAoIWJveC5pbmNsdWRlcyhudW0pICYmIGJvb2wpIHtcbi8vICAgICAgICAgICBjb2wucHVzaChudW0pOyBib3gucHVzaChudW0pO1xuLy8gICAgICAgICAgIGN0eC5maWxsVGV4dChudW0sIHggKyAyNSwgeSArIDQ1KTtcbi8vICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICBjb2wucHVzaChcIlwiKTsgYm94LnB1c2goXCJcIik7XG4vLyAgICAgICAgIH1cblxuXG4vLyAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbi8vICAgICAgIH1cbi8vICAgICAgIGNvbHVtbnNbY2hlY2twb2ludF0ucHVzaChjb2wpO1xuLy8gICAgIH1cbi8vICAgICBjb25zb2xlLmxvZyhgQm94OiAke2JveH1gKTtcbi8vICAgfVxuLy8gfVxuXG4vLyBsZXQgY29scyA9IHsgMTogY29sMSA9IFtdLCAyOiBjb2wyID0gW10sIDM6IGNvbDMgPSBbXSwgNDogY29sNCA9IFtdLCA1OiBjb2w1ID0gW10sIDY6IGNvbDYgPSBbXSwgNzogY29sNyA9IFtdLCA4OiBjb2w4ID0gW10sIDk6IGNvbDkgPSBbXSB9O1xuXG4vLyBmb3IgKGkgPSAxOyBpIDw9IDk7IGkrKykge1xuLy8gICBjb2xzW2ldID0gcGFyc2lmeShjb2x1bW5zW2ldKTtcbi8vIH07XG5cbi8vIGZvciAoaSA9IDE7IGkgPD0gOTsgaSsrKSB7XG4vLyAgIC8vIGNvbnNvbGUubG9nKGBjb2wgJHtpfTogJHtjb2xzW2ldfWApO1xuLy8gICBjb25zb2xlLmxvZyhgY29sdW1uICR7aX06ICR7Y29sdW1uc1tpXX1gKTtcbi8vIH1cblxuLy8gLy8gbGV0IHJvd3MgPSB7IDE6IHJvdzEsIDI6IHJvdzIsIDM6IHJvdzMsIDQ6IHJvdzQsIDU6IHJvdzUsIDY6IHJvdzYsIDc6IHJvdzcsIDg6IHJvdzgsIDk6IHJvdzkgfTtcblxuLy8gZm9yIChpID0gMTsgaSA8PSA5OyBpKyspIHtcbi8vICAgZm9yIChqID0gMTsgaiA8PSA5OyBqKyspIHtcbi8vICAgICByb3dzW2ldLnB1c2goY29sc1tqXVtpIC0gMV0pO1xuLy8gICB9XG4vLyB9O1xuXG4vLyBmb3IgKGkgPSAxOyBpIDw9IDk7IGkrKykge1xuLy8gICBjb25zb2xlLmxvZyhgcm93ICR7aX06ICR7cm93c1tpXX1gKTtcbi8vIH1cbiIsImNvbnN0IEJvYXJkID0gcmVxdWlyZShcIi4vYm9hcmRcIik7XG5cbmxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FudmFzXCIpO1xubGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlTnVtKCkge1xuICBsZXQgbnVtID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgY29uc29sZS5sb2cobnVtKTtcbiAgcmV0dXJuIG51bTtcbn1cblxuLy8gZnVuY3Rpb24gZHJhd1NtYWxsQm94KGxlZnQsIHJpZ2h0LCB0b3AsIGJvdHRvbSkge1xuLy8gICBsZXQgY291bnQgPSAxO1xuLy8gICBjdHguYmVnaW5QYXRoKCk7XG4vLyAgIC8vIGN0eC5saW5lV2lkdGggPSAxMDtcblxuLy8gICBsZXQgcm93MSA9IFtdO1xuLy8gICBsZXQgcm93MiA9IFtdO1xuLy8gICBsZXQgcm93MyA9IFtdO1xuXG4vLyAgIGN0eC5mb250ID0gXCIyMHB4IEFyaWFsXCI7XG4vLyAgIGN0eC5zdHJva2VTdHlsZSA9IFwicmdiYSgwLDAsMjU1LDAuNSlcIjtcbi8vICAgZm9yIChiID0gbGVmdDsgYiA8IHJpZ2h0OyBiICs9IDE4MCkge1xuLy8gICAgIGN0eC5zdHJva2UoKTtcbi8vICAgICBsZXQgYm94ID0gW107XG4vLyAgICAgZm9yICh4ID0gYjsgeCA8IGIgKyAxODA7IHggKz0gNjApIHtcbi8vICAgICAgIGNvbnNvbGUubG9nKGBjb2x1bW4gJHtjb3VudH1gKTsgY291bnQrKztcbi8vICAgICAgIGxldCBjb2wgPSBbXTtcbi8vICAgICAgIGZvciAoeSA9IHRvcDsgeSA8IGJvdHRvbTsgeSArPSA2MCkge1xuLy8gICAgICAgICBjdHgucmVjdCh4LCB5LCA2MCwgNjApO1xuLy8gICAgICAgICBsZXQgbnVtID0gZ2VuZXJhdGVOdW0oKTtcbi8vICAgICAgICAgaWYgKCFjb2wuaW5jbHVkZXMobnVtKSAmJiAhYm94LmluY2x1ZGVzKG51bSkpIHtcbi8vICAgICAgICAgICBjb2wucHVzaChudW0pOyBib3gucHVzaChudW0pO1xuLy8gICAgICAgICAgIGN0eC5mb250ID0gXCIxNTBweCBBcmlhbFwiO1xuLy8gICAgICAgICAgIGN0eC5maWxsVGV4dChudW0sIHggKyAyNSwgeSArIDQ1KTtcbi8vICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICBjb2wucHVzaChcIlwiKTsgYm94LnB1c2goXCJcIik7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgY3R4LnN0cm9rZSgpO1xuLy8gICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4vLyAgICAgICB9XG5cbi8vICAgICAgIGlmICghcm93MS5pbmNsdWRlcyhjb2xbMF0pKSB7XG4vLyAgICAgICAgIHJvdzEucHVzaChjb2xbMF0pO1xuLy8gICAgICAgfTtcbi8vICAgICAgIGlmICghcm93Mi5pbmNsdWRlcyhjb2xbMV0pKSB7XG4vLyAgICAgICAgIHJvdzIucHVzaChjb2xbMV0pO1xuLy8gICAgICAgfTtcbi8vICAgICAgIGlmICghcm93My5pbmNsdWRlcyhjb2xbMl0pKSB7XG4vLyAgICAgICAgIHJvdzMucHVzaChjb2xbMl0pO1xuLy8gICAgICAgfTtcbi8vICAgICB9XG4vLyAgICAgY29uc29sZS5sb2coYFJvdyAxOiAke3JvdzF9YCk7XG4vLyAgICAgY29uc29sZS5sb2coYFJvdyAyOiAke3JvdzJ9YCk7XG4vLyAgICAgY29uc29sZS5sb2coYFJvdyAzOiAke3JvdzN9YCk7XG4vLyAgICAgLy8gY29uc29sZS5sb2coYEJveDogJHtib3h9YCk7XG4vLyAgICAgY29uc29sZS5sb2coYGJveCBiZXR3ZWVuIGxlZnQsICR7bGVmdH0sIGFuZCByaWdodCwgJHtyaWdodH0sIGNvbXBsZXRlISB3aXRoOiBbJHtib3h9XWApO1xuLy8gICB9XG4vLyB9XG4vLyBmdW5jdGlvbiBkcmF3TGFyZ2VCb3goKSB7XG4vLyAgIGZvciAobGVmdCA9IDA7IGxlZnQgPCA1NDA7IGxlZnQgKz0gMTgwKSB7XG4vLyAgICAgZHJhd1NtYWxsQm94KGxlZnQsIGxlZnQgKyAxODAsIDAsIDE4MCk7XG4vLyAgICAgZHJhd1NtYWxsQm94KGxlZnQsIGxlZnQgKyAxODAsIDE4MCwgMzYwKTtcbi8vICAgICBkcmF3U21hbGxCb3gobGVmdCwgbGVmdCArIDE4MCwgMzYwLCA1NDApO1xuLy8gICAgIC8vIGNvbnNvbGUubG9nKGRyYXdTbWFsbEJveC5yb3cxKVxuLy8gICB9XG4vLyB9O1xuXG5cblxuZnVuY3Rpb24gcGFyc2lmeShhcnIpIHtcbiAgbGV0IG9iaiA9IHt9O1xuICBhcnIuZm9yRWFjaChlbCA9PiB7XG4gICAgb2JqW2VsXSA9IHRydWU7XG4gIH0pXG4gIG5ld0FyciA9IFtdO1xuICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goa2V5ID0+IHtcbiAgICBrZXkuc3BsaXQoJywnKS5mb3JFYWNoKGVsID0+IHtcbiAgICAgIG5ld0Fyci5wdXNoKHBhcnNlSW50KGVsKSk7XG4gICAgfSlcbiAgfSlcbiAgcmV0dXJuIG5ld0Fycjtcbn1cblxuZnVuY3Rpb24gZHJhd1JlY3QoKSB7XG5cbiAgbGV0IGNvdW50ID0gMTtcbiAgbGV0IHJvd3MgPSB7IDE6IHJvdzEgPSBbXSwgMjogcm93MiA9IFtdLCAzOiByb3czID0gW10sIDQ6IHJvdzQgPSBbXSwgNTogcm93NSA9IFtdLCA2OiByb3c2ID0gW10sIDc6IHJvdzcgPSBbXSwgODogcm93OCA9IFtdLCA5OiByb3c5ID0gW10gfTtcbiAgbGV0IGNvbHVtbnMgPSB7IDE6IGNvbHVtbjEgPSBbXSwgMjogY29sdW1uMiA9IFtdLCAzOiBjb2x1bW4zID0gW10sIDQ6IGNvbHVtbjQgPSBbXSwgNTogY29sdW1uNSA9IFtdLCA2OiBjb2x1bW42ID0gW10sIDc6IGNvbHVtbjcgPSBbXSwgODogY29sdW1uOCA9IFtdLCA5OiBjb2x1bW45ID0gW10gfVxuICAvLyBsZXQgY29scyA9IHsgMTogY29sMT1bXSwgMjogY29sMj1bXSwgMzogY29sMz1bXSwgNDogY29sND1bXSwgNTogY29sNT1bXSwgNjogY29sNj1bXSwgNzogY29sNz1bXSwgODogY29sOD1bXSwgOTogY29sOT1bXSB9O1xuXG4gIGxldCBjID0gMDtcblxuICBjdHguYmVnaW5QYXRoKCk7XG5cbiAgZm9yIChsYXJnZSA9IDA7IGxhcmdlIDwgNTQwOyBsYXJnZSArPSAxODApIHtcbiAgICBjb25zb2xlLmxvZygnVyAgICBUICAgICBGJyk7XG4gICAgLy8gdGhpcyBpcyB0aGUgZW50aXJlIGxlZnQgc2lkZSAzIGJveGVzIGRvd246IFxuXG5cbiAgICBmb3IgKGIgPSAwOyBiIDwgMTgwOyBiICs9IDE4MCkge1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgbGV0IGJveCA9IFtdO1xuXG4gICAgICAvLyB0aGlzIGlzIG9uZSBib3g6IFxuXG4gICAgICBsZXQgY2hlY2twb2ludCA9IDA7XG5cbiAgICAgIGZvciAoeCA9IGI7IHggPCBiICsgNTQwOyB4ICs9IDYwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBjb2x1bW4gJHtjb3VudH1gKTsgY291bnQrKztcbiAgICAgICAgbGV0IGNvbCA9IFtdO1xuXG4gICAgICAgIC8vIHRoaXMgZ29lcyBhY3Jvc3MgdGhlIHggYXhpcyAzIChvciA5IGRlcGVuZGluZyBvbiB0aGUgeCBsaW1pdCkgc3BhY2VzIGFuZCBnZW5lcmF0ZXMgZWFjaCBsaXR0bGUgY29sdW1uIGluIHRoZSBzbWFsbGJveC4gXG4gICAgICAgIGNoZWNrcG9pbnQrKztcblxuICAgICAgICBmb3IgKHkgPSBsYXJnZTsgeSA8IChsYXJnZSArIDE4MCk7IHkgKz0gNjApIHtcblxuICAgICAgICAgIC8vIHRoaXMgZ29lcyBkb3duIHRoZSB5IGF4aXMgKG9uZSAzeDMgYm94IGF0IGEgdGltZSkgYW5kIGFkZHMgbGl0dGxlIHNxdWFyZXMgdG8gY2FudmFzIGFuZCBudW1zIHRvIHRoZSBjb2wgdG8gYmUgYWRkZWQgdG8gdGhlIHNtYWxsYm94LiBcblxuICAgICAgICAgIC8vIEkgbmVlZCB0byBhZGQgdGhlIGNvbHMgdG8gYSBsYXJnZXIgY29sdW1uIGFuZCBjaGVjayBldmVyeSB0aW1lIEkgZ28gdG8gdGhlIG5leHQgYm94IGlmIHRoZSBjb2wgZnJvbSB0aGUgcHJldmlvdXMgYm94IGhhcyB0aGUgbnVtcy4gYmUgY2FyZWZ1bCBhYm91dCBhZGRpbmcgdG8gY29sdW1uMSwgY29sdW1uMiwgb3IgY29sdW1uMy4gXG5cbiAgICAgICAgICBjdHgucmVjdCh4LCB5LCA2MCwgNjApO1xuICAgICAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgICAgIGxldCBudW0gPSBnZW5lcmF0ZU51bSgpO1xuICAgICAgICAgIGxldCBib29sID0gZmFsc2U7XG5cblxuICAgICAgICAgIGlmICghY29sdW1uc1tjaGVja3BvaW50XS5mbGF0KCkuaW5jbHVkZXMobnVtKSkge1xuICAgICAgICAgICAgYm9vbCA9IHRydWU7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmICghYm94LmluY2x1ZGVzKG51bSkgJiYgYm9vbCkge1xuICAgICAgICAgICAgY29sLnB1c2gobnVtKTsgYm94LnB1c2gobnVtKTtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChudW0sIHggKyAyNSwgeSArIDQ1KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29sLnB1c2goXCJcIik7IGJveC5wdXNoKFwiXCIpO1xuICAgICAgICAgIH1cblxuXG4gICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbHVtbnNbY2hlY2twb2ludF0ucHVzaChjb2wpO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coYEJveDogJHtib3h9YCk7XG4gICAgfVxuICB9XG5cbiAgbGV0IGNvbHMgPSB7IDE6IGNvbDEgPSBbXSwgMjogY29sMiA9IFtdLCAzOiBjb2wzID0gW10sIDQ6IGNvbDQgPSBbXSwgNTogY29sNSA9IFtdLCA2OiBjb2w2ID0gW10sIDc6IGNvbDcgPSBbXSwgODogY29sOCA9IFtdLCA5OiBjb2w5ID0gW10gfTtcblxuICBmb3IgKGkgPSAxOyBpIDw9IDk7IGkrKykge1xuICAgIGNvbHNbaV0gPSBwYXJzaWZ5KGNvbHVtbnNbaV0pO1xuICB9O1xuXG4gIGZvciAoaSA9IDE7IGkgPD0gOTsgaSsrKSB7XG4gICAgLy8gY29uc29sZS5sb2coYGNvbCAke2l9OiAke2NvbHNbaV19YCk7XG4gICAgY29uc29sZS5sb2coYGNvbHVtbiAke2l9OiAke2NvbHVtbnNbaV19YCk7XG4gIH1cblxuICAvLyBsZXQgcm93cyA9IHsgMTogcm93MSwgMjogcm93MiwgMzogcm93MywgNDogcm93NCwgNTogcm93NSwgNjogcm93NiwgNzogcm93NywgODogcm93OCwgOTogcm93OSB9O1xuXG4gIGZvciAoaSA9IDE7IGkgPD0gOTsgaSsrKSB7XG4gICAgZm9yIChqID0gMTsgaiA8PSA5OyBqKyspIHtcbiAgICAgIHJvd3NbaV0ucHVzaChjb2xzW2pdW2kgLSAxXSk7XG4gICAgfVxuICB9O1xuXG4gIGZvciAoaSA9IDE7IGkgPD0gOTsgaSsrKSB7XG4gICAgY29uc29sZS5sb2coYHJvdyAke2l9OiAke3Jvd3NbaV19YCk7XG4gIH1cblxufVxuXG4vLyBkcmF3UmVjdCgpO1xuXG5cbiAgICAvLyBkcmF3TGFyZ2VCb3goKTtcblxuICAgIC8vIGRyYXdTbWFsbEJveCgwLCAxODAsIDAsIDE4MCk7XG5cblxuICAgIC8vIGRyYXdTbWFsbEJveCgpO1xuICAgIC8vIFN1ZG9rdS5kcmF3TGFyZ2VCb3g7XG4gICAgLy8gc2V0SW50ZXJ2YWwoZHJhd1JlY3QsIDQwKTtcblxuXG5cbmxldCBiID0gbmV3IEJvYXJkKGNhbnZhcyxjdHgpO1xuYi5nZW5lcmF0ZU51bSgpO1xuXG5cbi8vIGIuZHJhd0JhbGwoKTtcbmIuZHJhd0JveGVzKCk7XG4vLyBiLmRyYXdCb2FyZCgpO1xuYi5wbGFjZU51bXMoMCwwKTtcbmIucGxhY2VOdW1zKDAsMTgwKTtcbmIucGxhY2VOdW1zKDAsMzYwKTtcblxuXG5iLnBsYWNlTnVtcygxODAsMCk7XG5iLnBsYWNlTnVtcygxODAsMTgwKTtcbmIucGxhY2VOdW1zKDE4MCwzNjApO1xuXG5cbmIucGxhY2VOdW1zKDM2MCwwKTtcbmIucGxhY2VOdW1zKDM2MCwxODApO1xuYi5wbGFjZU51bXMoMzYwLDM2MCk7XG5cblxuXG4vLyBiLnBsYWNlTnVtcygwLDApO1xuXG4vLyBiLnBsYWNlTnVtcygxODAsIDE4MCk7XG4vLyBiLnBsYWNlTnVtcygwLCAxODApO1xuLy8gYi5wbGFjZU51bXMoMCwgMzYwKTtcbi8vIGIucGxhY2VOdW1zKDE4MCwgMCk7XG5cbmIuZHJhd091dGxpbmUoKTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9