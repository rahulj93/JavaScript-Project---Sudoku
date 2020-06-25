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
    this.genRows = this.genRows.bind(this);
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
      var colIndex = startX / 60 - 1;

      for (var x = startX; x < startX + 180; x += 60) {
        var rowIndex = startY / 60 - 1;
        colIndex++;
        var col = [];

        for (var y = startY; y < startY + 180; y += 60) {
          rowIndex++; // console.log("HUHHGHGHG", rowIndex, this.rows);

          num = this.generateNum();
          var bool = false;

          if (!this.rows[rowIndex].includes(num)) {
            bool = true;
          }

          if (bool && !box.includes(num) && !this.columns[colIndex].flat().flat().includes(num)) {
            box.push(num);
            col.push(num);
            this.rows[rowIndex].push(num);
            this.ctx.fillText(num, x + 25, y + 45);
          } else {
            col.push("-");
            this.rows[rowIndex].push("-");
          }
        }

        this.columns[colIndex].push(col);
        this.columns[colIndex] = this.columns[colIndex].flat();
        console.log("box: [".concat(box, "]"));
        console.log("Columns: ", this.columns); // console.log("cols:", Object.values(this.columns).flat());
      }

      console.log("Rows: ", this.rows);
      this.ctx.closePath();
    }
  }, {
    key: "genRows",
    value: function genRows() {
      for (var col = 0; col < Object.keys(this.columns).length; col++) {
        for (var row = 0; row < Object.keys(this.columns).length; row++) {
          var el = this.columns[row].flat()[col];
          this.rows[col].push(el);
        }
      } // console.log('Rows: ', this.rows); 


      return this.rows;
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

b.placeNums(180, 180);
b.placeNums(0, 0);
b.placeNums(360, 360);
b.placeNums(0, 360);
b.placeNums(360, 0);
b.placeNums(0, 180);
b.placeNums(180, 0);
b.placeNums(180, 360);
b.placeNums(360, 180); // b.genRows();
// b.placeNums(0,0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2JvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3N1ZG9rdS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiQm9hcmQiLCJjYW52YXMiLCJjdHgiLCJyb3dzIiwiY29sdW1ucyIsImdlbmVyYXRlTnVtIiwiYmluZCIsImRyYXdCYWxsIiwiZHJhd0JveGVzIiwicGxhY2VOdW1zIiwiZ2VuUm93cyIsIm51bSIsIk1hdGgiLCJjZWlsIiwicmFuZG9tIiwiY29uc29sZSIsImxvZyIsImJlZ2luUGF0aCIsImFyYyIsIlBJIiwiZmlsbFN0eWxlIiwic3Ryb2tlIiwiY2xvc2VQYXRoIiwibGluZVdpZHRoIiwieCIsIm1vdmVUbyIsImxpbmVUbyIsInkiLCJyZWN0Iiwic3RhcnRYIiwic3RhcnRZIiwiYm94IiwiY29sSW5kZXgiLCJyb3dJbmRleCIsImNvbCIsImJvb2wiLCJpbmNsdWRlcyIsImZsYXQiLCJwdXNoIiwiZmlsbFRleHQiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwicm93IiwiZWwiLCJtb2R1bGUiLCJleHBvcnRzIiwicmVxdWlyZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwicGFyc2lmeSIsImFyciIsIm9iaiIsImZvckVhY2giLCJuZXdBcnIiLCJrZXkiLCJzcGxpdCIsInBhcnNlSW50IiwiZHJhd1JlY3QiLCJjb3VudCIsInJvdzEiLCJyb3cyIiwicm93MyIsInJvdzQiLCJyb3c1Iiwicm93NiIsInJvdzciLCJyb3c4Iiwicm93OSIsImNvbHVtbjEiLCJjb2x1bW4yIiwiY29sdW1uMyIsImNvbHVtbjQiLCJjb2x1bW41IiwiY29sdW1uNiIsImNvbHVtbjciLCJjb2x1bW44IiwiY29sdW1uOSIsImMiLCJsYXJnZSIsImIiLCJjaGVja3BvaW50IiwiY29scyIsImNvbDEiLCJjb2wyIiwiY29sMyIsImNvbDQiLCJjb2w1IiwiY29sNiIsImNvbDciLCJjb2w4IiwiY29sOSIsImkiLCJqIiwiZHJhd091dGxpbmUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Q0FFQSwyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNKTUEsSztBQUNKLGlCQUFZQyxNQUFaLEVBQW9CQyxHQUFwQixFQUF5QjtBQUFBOztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBS0MsSUFBTCxHQUFZO0FBQ1YsU0FBRyxFQURPO0FBRVYsU0FBRyxFQUZPO0FBR1YsU0FBRyxFQUhPO0FBSVYsU0FBRyxFQUpPO0FBS1YsU0FBRyxFQUxPO0FBTVYs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R0E7QUFDQTtBQUNBOzs7QUFJSixJQUFJWixDQUFDLEdBQUcsSUFBSWpGLEtBQUosQ0FBVUMsTUFBVixFQUFpQkMsR0FBakIsQ0FBUjtBQUNBK0UsQ0FBQyxDQUFDNUUsV0FBRixHLENBR0E7O0FBQ0E0RSxDQUFDLENBQUN6RSxTQUFGLEcsQ0FDQTs7QUFDQXlFLENBQUMsQ0FBQ3hFLFNBQUYsQ0FBWSxHQUFaLEVBQWdCLEdBQWhCO0FBRUF3RSxDQUFDLENBQUN4RSxTQUFGLENBQVksQ0FBWixFQUFjLENBQWQ7QUFDQXdFLENBQUMsQ0FBQ3hFLFNBQUYsQ0FBWSxHQUFaLEVBQWdCLEdBQWhCO0FBRUF3RSxDQUFDLENBQUN4RSxTQUFGLENBQVksQ0FBWixFQUFjLEdBQWQ7QUFDQXdFLENBQUMsQ0FBQ3hFLFNBQUYsQ0FBWSxHQUFaLEVBQWdCLENBQWhCO0FBSUF3RSxDQUFDLENBQUN4RSxTQUFGLENBQVksQ0FBWixFQUFjLEdBQWQ7QUFDQXdFLENBQUMsQ0FBQ3hFLFNBQUYsQ0FBWSxHQUFaLEVBQWdCLENBQWhCO0FBR0F3RSxDQUFDLENBQUN4RSxTQUFGLENBQVksR0FBWixFQUFnQixHQUFoQjtBQUNBd0UsQ0FBQyxDQUFDeEUsU0FBRixDQUFZLEdBQVosRUFBZ0IsR0FBaEIsRSxDQUtBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQXdFLENBQUMsQ0FBQ2MsV0FBRixHOzs7Ozs7Ozs7OztBQy9OQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBpbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCAnLi9zY3JpcHRzL2JvYXJkLmpzJztcbmltcG9ydCAnLi9zY3JpcHRzL3N1ZG9rdS5qcyc7XG4vLyAnL3NyYy9zdHlsZXMvaW5kZXguc2NzcyciLCJjbGFzcyBCb2FyZCB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4KSB7XG4gICAgLy8gdGhpcy5ib3hlcyA9IHtcbiAgICAvLyAgIDA6IFtdLFxuICAgIC8vICAgMTogW10sXG4gICAgLy8gICAyOiBbXSxcbiAgICAvLyAgIDM6IFtdLFxuICAgIC8vICAgNDogW10sXG4gICAgLy8gICA1OiBbXSxcbiAgICAvLyAgIDY6IFtdLFxuICAgIC8vICAgNzogW10sXG4gICAgLy8gICA4OiBbXVxuICAgIC8vIH07ICBcbiAgICB0aGlzLnJvd3MgPSB7XG4gICAgICAwOiBbXSxcbiAgICAgIDE6IFtdLFxuICAgICAgMjogW10sXG4gICAgICAzOiBbXSxcbiAgICAgIDQ6IFtdLFxuICAgICAgNTogW10sXG4gICAgICA2OiBbXSxcbiAgICAgIDc6IFtdLFxuICAgICAgODogW11cbiAgICB9OyBcbiAgICB0aGlzLmNvbHVtbnMgPSB7IFxuICAgICAgMDogW10sIFxuICAgICAgMTogW10sIFxuICAgICAgMjogW10sIFxuICAgICAgMzogW10sIFxuICAgICAgNDogW10sIFxuICAgICAgNTogW10sIFxuICAgICAgNjogW10sIFxuICAgICAgNzogW10sIFxuICAgICAgODogW11cbiAgICB9OyBcblxuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuXG4gICAgdGhpcy5nZW5lcmF0ZU51bSA9IHRoaXMuZ2VuZXJhdGVOdW0uYmluZCh0aGlzKTtcbiAgICB0aGlzLmRyYXdCYWxsID0gdGhpcy5kcmF3QmFsbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZHJhd0JveGVzID0gdGhpcy5kcmF3Qm94ZXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLnBsYWNlTnVtcyA9IHRoaXMucGxhY2VOdW1zLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZW5Sb3dzID0gdGhpcy5nZW5Sb3dzLmJpbmQodGhpcyk7XG4gIH1cbiAgXG4gIGdlbmVyYXRlTnVtKCkge1xuICAgIGxldCBudW0gPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgIGNvbnNvbGUubG9nKGBudW06ICR7bnVtfWApO1xuICAgIHJldHVybiBudW07IFxuICB9XG5cbiAgZHJhd0JhbGwoKSB7XG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG5cbiAgICB0aGlzLmN0eC5hcmMoNTAsIDUwLCAyMCwgMCwgTWF0aC5QSSAqIDIpO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzAwOTVERFwiO1xuICAgIHRoaXMuY3R4LnN0cm9rZSgpOyBcbiAgICAvLyB0aGlzLmN0eC5maWxsKCk7XG4gICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gIH1cblxuICBkcmF3T3V0bGluZSgpIHtcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA0OyBcblxuICAgIGZvciAobGV0IHggPSAwOyB4PD01NDA7IHgrPTE4MCkge1xuICAgICAgdGhpcy5jdHgubW92ZVRvKHgsMCk7XG4gICAgICB0aGlzLmN0eC5saW5lVG8oeCwgNTQwKTtcblxuICAgICAgdGhpcy5jdHgubW92ZVRvKDAseCk7XG4gICAgICB0aGlzLmN0eC5saW5lVG8oNTQwLCB4KTtcbiAgICB9XG5cbiAgICAvLyBmb3IgKGxldCB5ID0gMDsgeTw9NTQwOyB5Kz0xODApIHtcbiAgICAvLyAgIHRoaXMuY3R4Lm1vdmVUbygwLHkpO1xuICAgIC8vICAgdGhpcy5jdHgubGluZVRvKDU0MCwgeSk7XG4gICAgLy8gfVxuXG4gICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgfVxuXG4gIGRyYXdCb3hlcygpIHtcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmN0eC5saW5lV2lkdGggPSAwLjU7XG4gICAgZm9yIChsZXQgeD0wOyB4IDwgNTQwOyB4Kz02MCkge1xuICAgICAgZm9yIChsZXQgeT0wOyB5PDU0MDsgeSs9NjApIHtcbiAgICAgICAgdGhpcy5jdHgucmVjdCh4LHksNjAsNjApO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTsgXG4gIH1cblxuICBwbGFjZU51bXMoc3RhcnRYLHN0YXJ0WSkge1xuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIC8vIHggaXMgMTgwIC0+IGNvdW50ID0gMyBiYyA1NDAvOSA9IDYwIGFuZCAxODAvNjAgPSAzXG5cbiAgICBsZXQgYm94ID0gW107XG4gICAgbGV0IGNvbEluZGV4ID0gKHN0YXJ0WC82MCkgLSAxOyBcbiAgICBcbiAgICBmb3IgKGxldCB4PXN0YXJ0WDsgeDwgKHN0YXJ0WCsxODApOyB4Kz02MCkge1xuICAgICAgXG4gICAgICBsZXQgcm93SW5kZXggPSAoc3RhcnRZLzYwKS0xO1xuICAgICAgY29sSW5kZXggKys7IFxuICAgICAgbGV0IGNvbCA9IFtdOyBcblxuICAgICAgZm9yIChsZXQgeT1zdGFydFk7IHk8KHN0YXJ0WSsxODApOyB5Kz02MCkge1xuICAgICAgICByb3dJbmRleCsrOyBcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkhVSEhHSEdIR1wiLCByb3dJbmRleCwgdGhpcy5yb3dzKTtcblxuICAgICAgICBudW0gPSB0aGlzLmdlbmVyYXRlTnVtKCk7XG4gICAgICAgIGxldCBib29sPWZhbHNlOyBcbiAgICAgICAgaWYgKCF0aGlzLnJvd3Nbcm93SW5kZXhdLmluY2x1ZGVzKG51bSkpIHtcbiAgICAgICAgICBib29sPXRydWU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChib29sICYmICFib3guaW5jbHVkZXMobnVtKSAmJiAhdGhpcy5jb2x1bW5zW2NvbEluZGV4XS5mbGF0KCkuZmxhdCgpLmluY2x1ZGVzKG51bSkpIHtcbiAgICAgICAgICBib3gucHVzaChudW0pOyBcbiAgICAgICAgICBjb2wucHVzaChudW0pO1xuICAgICAgICAgIHRoaXMucm93c1tyb3dJbmRleF0ucHVzaChudW0pO1xuICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KG51bSwgeCArIDI1LCB5ICsgNDUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbC5wdXNoKFwiLVwiKTtcbiAgICAgICAgICB0aGlzLnJvd3Nbcm93SW5kZXhdLnB1c2goXCItXCIpO1xuICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgICAgdGhpcy5jb2x1bW5zW2NvbEluZGV4XS5wdXNoKGNvbCk7XG4gICAgICB0aGlzLmNvbHVtbnNbY29sSW5kZXhdID0gdGhpcy5jb2x1bW5zW2NvbEluZGV4XS5mbGF0KCk7XG5cbiAgICAgIGNvbnNvbGUubG9nKGBib3g6IFske2JveH1dYCk7XG4gICAgICBjb25zb2xlLmxvZyhcIkNvbHVtbnM6IFwiLCB0aGlzLmNvbHVtbnMpO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJjb2xzOlwiLCBPYmplY3QudmFsdWVzKHRoaXMuY29sdW1ucykuZmxhdCgpKTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcIlJvd3M6IFwiLCB0aGlzLnJvd3MpO1xuICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICB9XG5cbiAgZ2VuUm93cygpIHtcbiAgICBmb3IgKGxldCBjb2w9MDsgY29sPE9iamVjdC5rZXlzKHRoaXMuY29sdW1ucykubGVuZ3RoOyBjb2wrKykge1xuICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgT2JqZWN0LmtleXModGhpcy5jb2x1bW5zKS5sZW5ndGg7IHJvdysrKSB7XG4gICAgICAgIGxldCBlbCA9IHRoaXMuY29sdW1uc1tyb3ddLmZsYXQoKVtjb2xdO1xuICAgICAgICB0aGlzLnJvd3NbY29sXS5wdXNoKGVsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coJ1Jvd3M6ICcsIHRoaXMucm93cyk7IFxuICAgIHJldHVybiB0aGlzLnJvd3M7XG4gIH1cblxufTtcblxuLy8gbGV0IGIgPSBuZXcgQm9hcmQ7IFxuLy8gY29uc29sZS5sb2coYi5nZW5lcmF0ZU51bSgpKTsgXG4vLyBiLmdlbmVyYXRlTnVtKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gQm9hcmQ7IFxuXG5cblxuLy8gbGV0IGNvdW50ID0gMTtcbi8vIGxldCByb3dzID0geyAxOiByb3cxID0gW10sIDI6IHJvdzIgPSBbXSwgMzogcm93MyA9IFtdLCA0OiByb3c0ID0gW10sIDU6IHJvdzUgPSBbXSwgNjogcm93NiA9IFtdLCA3OiByb3c3ID0gW10sIDg6IHJvdzggPSBbXSwgOTogcm93OSA9IFtdIH07XG4vLyBsZXQgY29sdW1ucyA9IHsgMTogY29sdW1uMSA9IFtdLCAyOiBjb2x1bW4yID0gW10sIDM6IGNvbHVtbjMgPSBbXSwgNDogY29sdW1uNCA9IFtdLCA1OiBjb2x1bW41ID0gW10sIDY6IGNvbHVtbjYgPSBbXSwgNzogY29sdW1uNyA9IFtdLCA4OiBjb2x1bW44ID0gW10sIDk6IGNvbHVtbjkgPSBbXSB9XG4vLyAvLyBsZXQgY29scyA9IHsgMTogY29sMT1bXSwgMjogY29sMj1bXSwgMzogY29sMz1bXSwgNDogY29sND1bXSwgNTogY29sNT1bXSwgNjogY29sNj1bXSwgNzogY29sNz1bXSwgODogY29sOD1bXSwgOTogY29sOT1bXSB9O1xuXG4vLyBsZXQgYyA9IDA7XG5cblxuLy8gZm9yIChsYXJnZSA9IDA7IGxhcmdlIDwgNTQwOyBsYXJnZSArPSAxODApIHtcbi8vICAgY29uc29sZS5sb2coJ1cgICAgVCAgICAgRicpO1xuLy8gICAvLyB0aGlzIGlzIHRoZSBlbnRpcmUgbGVmdCBzaWRlIDMgYm94ZXMgZG93bjogXG5cblxuLy8gICBmb3IgKGIgPSAwOyBiIDwgMTgwOyBiICs9IDE4MCkge1xuLy8gICAgIGN0eC5zdHJva2UoKTtcbi8vICAgICBsZXQgYm94ID0gW107XG5cbi8vICAgICAvLyB0aGlzIGlzIG9uZSBib3g6IFxuXG4vLyAgICAgbGV0IGNoZWNrcG9pbnQgPSAwO1xuXG4vLyAgICAgZm9yICh4ID0gYjsgeCA8IGIgKyA1NDA7IHggKz0gNjApIHtcbi8vICAgICAgIGNvbnNvbGUubG9nKGBjb2x1bW4gJHtjb3VudH1gKTsgY291bnQrKztcbi8vICAgICAgIGxldCBjb2wgPSBbXTtcblxuLy8gICAgICAgLy8gdGhpcyBnb2VzIGFjcm9zcyB0aGUgeCBheGlzIDMgKG9yIDkgZGVwZW5kaW5nIG9uIHRoZSB4IGxpbWl0KSBzcGFjZXMgYW5kIGdlbmVyYXRlcyBlYWNoIGxpdHRsZSBjb2x1bW4gaW4gdGhlIHNtYWxsYm94LiBcbi8vICAgICAgIGNoZWNrcG9pbnQrKztcblxuLy8gICAgICAgZm9yICh5ID0gbGFyZ2U7IHkgPCAobGFyZ2UgKyAxODApOyB5ICs9IDYwKSB7XG5cbi8vICAgICAgICAgLy8gdGhpcyBnb2VzIGRvd24gdGhlIHkgYXhpcyAob25lIDN4MyBib3ggYXQgYSB0aW1lKSBhbmQgYWRkcyBsaXR0bGUgc3F1YXJlcyB0byBjYW52YXMgYW5kIG51bXMgdG8gdGhlIGNvbCB0byBiZSBhZGRlZCB0byB0aGUgc21hbGxib3guIFxuXG4vLyAgICAgICAgIC8vIEkgbmVlZCB0byBhZGQgdGhlIGNvbHMgdG8gYSBsYXJnZXIgY29sdW1uIGFuZCBjaGVjayBldmVyeSB0aW1lIEkgZ28gdG8gdGhlIG5leHQgYm94IGlmIHRoZSBjb2wgZnJvbSB0aGUgcHJldmlvdXMgYm94IGhhcyB0aGUgbnVtcy4gYmUgY2FyZWZ1bCBhYm91dCBhZGRpbmcgdG8gY29sdW1uMSwgY29sdW1uMiwgb3IgY29sdW1uMy4gXG5cbi8vICAgICAgICAgY3R4LnJlY3QoeCwgeSwgNjAsIDYwKTtcbi8vICAgICAgICAgY3R4LnN0cm9rZSgpO1xuXG4vLyAgICAgICAgIGxldCBudW0gPSBnZW5lcmF0ZU51bSgpO1xuLy8gICAgICAgICBsZXQgYm9vbCA9IGZhbHNlO1xuXG5cbi8vICAgICAgICAgaWYgKCFjb2x1bW5zW2NoZWNrcG9pbnRdLmZsYXQoKS5pbmNsdWRlcyhudW0pKSB7XG4vLyAgICAgICAgICAgYm9vbCA9IHRydWU7XG4vLyAgICAgICAgIH07XG5cbi8vICAgICAgICAgaWYgKCFib3guaW5jbHVkZXMobnVtKSAmJiBib29sKSB7XG4vLyAgICAgICAgICAgY29sLnB1c2gobnVtKTsgYm94LnB1c2gobnVtKTtcbi8vICAgICAgICAgICBjdHguZmlsbFRleHQobnVtLCB4ICsgMjUsIHkgKyA0NSk7XG4vLyAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgY29sLnB1c2goXCJcIik7IGJveC5wdXNoKFwiXCIpO1xuLy8gICAgICAgICB9XG5cblxuLy8gICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4vLyAgICAgICB9XG4vLyAgICAgICBjb2x1bW5zW2NoZWNrcG9pbnRdLnB1c2goY29sKTtcbi8vICAgICB9XG4vLyAgICAgY29uc29sZS5sb2coYEJveDogJHtib3h9YCk7XG4vLyAgIH1cbi8vIH1cblxuLy8gbGV0IGNvbHMgPSB7IDE6IGNvbDEgPSBbXSwgMjogY29sMiA9IFtdLCAzOiBjb2wzID0gW10sIDQ6IGNvbDQgPSBbXSwgNTogY29sNSA9IFtdLCA2OiBjb2w2ID0gW10sIDc6IGNvbDcgPSBbXSwgODogY29sOCA9IFtdLCA5OiBjb2w5ID0gW10gfTtcblxuLy8gZm9yIChpID0gMTsgaSA8PSA5OyBpKyspIHtcbi8vICAgY29sc1tpXSA9IHBhcnNpZnkoY29sdW1uc1tpXSk7XG4vLyB9O1xuXG4vLyBmb3IgKGkgPSAxOyBpIDw9IDk7IGkrKykge1xuLy8gICAvLyBjb25zb2xlLmxvZyhgY29sICR7aX06ICR7Y29sc1tpXX1gKTtcbi8vICAgY29uc29sZS5sb2coYGNvbHVtbiAke2l9OiAke2NvbHVtbnNbaV19YCk7XG4vLyB9XG5cbi8vIC8vIGxldCByb3dzID0geyAxOiByb3cxLCAyOiByb3cyLCAzOiByb3czLCA0OiByb3c0LCA1OiByb3c1LCA2OiByb3c2LCA3OiByb3c3LCA4OiByb3c4LCA5OiByb3c5IH07XG5cbi8vIGZvciAoaSA9IDE7IGkgPD0gOTsgaSsrKSB7XG4vLyAgIGZvciAoaiA9IDE7IGogPD0gOTsgaisrKSB7XG4vLyAgICAgcm93c1tpXS5wdXNoKGNvbHNbal1baSAtIDFdKTtcbi8vICAgfVxuLy8gfTtcblxuLy8gZm9yIChpID0gMTsgaSA8PSA5OyBpKyspIHtcbi8vICAgY29uc29sZS5sb2coYHJvdyAke2l9OiAke3Jvd3NbaV19YCk7XG4vLyB9XG4iLCJjb25zdCBCb2FyZCA9IHJlcXVpcmUoXCIuL2JvYXJkXCIpO1xuXG5sZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhc1wiKTtcbmxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZU51bSgpIHtcbiAgbGV0IG51bSA9IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogOSk7XG4gIGNvbnNvbGUubG9nKG51bSk7XG4gIHJldHVybiBudW07XG59XG5cbi8vIGZ1bmN0aW9uIGRyYXdTbWFsbEJveChsZWZ0LCByaWdodCwgdG9wLCBib3R0b20pIHtcbi8vICAgbGV0IGNvdW50ID0gMTtcbi8vICAgY3R4LmJlZ2luUGF0aCgpO1xuLy8gICAvLyBjdHgubGluZVdpZHRoID0gMTA7XG5cbi8vICAgbGV0IHJvdzEgPSBbXTtcbi8vICAgbGV0IHJvdzIgPSBbXTtcbi8vICAgbGV0IHJvdzMgPSBbXTtcblxuLy8gICBjdHguZm9udCA9IFwiMjBweCBBcmlhbFwiO1xuLy8gICBjdHguc3Ryb2tlU3R5bGUgPSBcInJnYmEoMCwwLDI1NSwwLjUpXCI7XG4vLyAgIGZvciAoYiA9IGxlZnQ7IGIgPCByaWdodDsgYiArPSAxODApIHtcbi8vICAgICBjdHguc3Ryb2tlKCk7XG4vLyAgICAgbGV0IGJveCA9IFtdO1xuLy8gICAgIGZvciAoeCA9IGI7IHggPCBiICsgMTgwOyB4ICs9IDYwKSB7XG4vLyAgICAgICBjb25zb2xlLmxvZyhgY29sdW1uICR7Y291bnR9YCk7IGNvdW50Kys7XG4vLyAgICAgICBsZXQgY29sID0gW107XG4vLyAgICAgICBmb3IgKHkgPSB0b3A7IHkgPCBib3R0b207IHkgKz0gNjApIHtcbi8vICAgICAgICAgY3R4LnJlY3QoeCwgeSwgNjAsIDYwKTtcbi8vICAgICAgICAgbGV0IG51bSA9IGdlbmVyYXRlTnVtKCk7XG4vLyAgICAgICAgIGlmICghY29sLmluY2x1ZGVzKG51bSkgJiYgIWJveC5pbmNsdWRlcyhudW0pKSB7XG4vLyAgICAgICAgICAgY29sLnB1c2gobnVtKTsgYm94LnB1c2gobnVtKTtcbi8vICAgICAgICAgICBjdHguZm9udCA9IFwiMTUwcHggQXJpYWxcIjtcbi8vICAgICAgICAgICBjdHguZmlsbFRleHQobnVtLCB4ICsgMjUsIHkgKyA0NSk7XG4vLyAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgY29sLnB1c2goXCJcIik7IGJveC5wdXNoKFwiXCIpO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGN0eC5zdHJva2UoKTtcbi8vICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuLy8gICAgICAgfVxuXG4vLyAgICAgICBpZiAoIXJvdzEuaW5jbHVkZXMoY29sWzBdKSkge1xuLy8gICAgICAgICByb3cxLnB1c2goY29sWzBdKTtcbi8vICAgICAgIH07XG4vLyAgICAgICBpZiAoIXJvdzIuaW5jbHVkZXMoY29sWzFdKSkge1xuLy8gICAgICAgICByb3cyLnB1c2goY29sWzFdKTtcbi8vICAgICAgIH07XG4vLyAgICAgICBpZiAoIXJvdzMuaW5jbHVkZXMoY29sWzJdKSkge1xuLy8gICAgICAgICByb3czLnB1c2goY29sWzJdKTtcbi8vICAgICAgIH07XG4vLyAgICAgfVxuLy8gICAgIGNvbnNvbGUubG9nKGBSb3cgMTogJHtyb3cxfWApO1xuLy8gICAgIGNvbnNvbGUubG9nKGBSb3cgMjogJHtyb3cyfWApO1xuLy8gICAgIGNvbnNvbGUubG9nKGBSb3cgMzogJHtyb3czfWApO1xuLy8gICAgIC8vIGNvbnNvbGUubG9nKGBCb3g6ICR7Ym94fWApO1xuLy8gICAgIGNvbnNvbGUubG9nKGBib3ggYmV0d2VlbiBsZWZ0LCAke2xlZnR9LCBhbmQgcmlnaHQsICR7cmlnaHR9LCBjb21wbGV0ZSEgd2l0aDogWyR7Ym94fV1gKTtcbi8vICAgfVxuLy8gfVxuLy8gZnVuY3Rpb24gZHJhd0xhcmdlQm94KCkge1xuLy8gICBmb3IgKGxlZnQgPSAwOyBsZWZ0IDwgNTQwOyBsZWZ0ICs9IDE4MCkge1xuLy8gICAgIGRyYXdTbWFsbEJveChsZWZ0LCBsZWZ0ICsgMTgwLCAwLCAxODApO1xuLy8gICAgIGRyYXdTbWFsbEJveChsZWZ0LCBsZWZ0ICsgMTgwLCAxODAsIDM2MCk7XG4vLyAgICAgZHJhd1NtYWxsQm94KGxlZnQsIGxlZnQgKyAxODAsIDM2MCwgNTQwKTtcbi8vICAgICAvLyBjb25zb2xlLmxvZyhkcmF3U21hbGxCb3gucm93MSlcbi8vICAgfVxuLy8gfTtcblxuXG5cbmZ1bmN0aW9uIHBhcnNpZnkoYXJyKSB7XG4gIGxldCBvYmogPSB7fTtcbiAgYXJyLmZvckVhY2goZWwgPT4ge1xuICAgIG9ialtlbF0gPSB0cnVlO1xuICB9KVxuICBuZXdBcnIgPSBbXTtcbiAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGtleSA9PiB7XG4gICAga2V5LnNwbGl0KCcsJykuZm9yRWFjaChlbCA9PiB7XG4gICAgICBuZXdBcnIucHVzaChwYXJzZUludChlbCkpO1xuICAgIH0pXG4gIH0pXG4gIHJldHVybiBuZXdBcnI7XG59XG5cbmZ1bmN0aW9uIGRyYXdSZWN0KCkge1xuXG4gIGxldCBjb3VudCA9IDE7XG4gIGxldCByb3dzID0geyAxOiByb3cxID0gW10sIDI6IHJvdzIgPSBbXSwgMzogcm93MyA9IFtdLCA0OiByb3c0ID0gW10sIDU6IHJvdzUgPSBbXSwgNjogcm93NiA9IFtdLCA3OiByb3c3ID0gW10sIDg6IHJvdzggPSBbXSwgOTogcm93OSA9IFtdIH07XG4gIGxldCBjb2x1bW5zID0geyAxOiBjb2x1bW4xID0gW10sIDI6IGNvbHVtbjIgPSBbXSwgMzogY29sdW1uMyA9IFtdLCA0OiBjb2x1bW40ID0gW10sIDU6IGNvbHVtbjUgPSBbXSwgNjogY29sdW1uNiA9IFtdLCA3OiBjb2x1bW43ID0gW10sIDg6IGNvbHVtbjggPSBbXSwgOTogY29sdW1uOSA9IFtdIH1cbiAgLy8gbGV0IGNvbHMgPSB7IDE6IGNvbDE9W10sIDI6IGNvbDI9W10sIDM6IGNvbDM9W10sIDQ6IGNvbDQ9W10sIDU6IGNvbDU9W10sIDY6IGNvbDY9W10sIDc6IGNvbDc9W10sIDg6IGNvbDg9W10sIDk6IGNvbDk9W10gfTtcblxuICBsZXQgYyA9IDA7XG5cbiAgY3R4LmJlZ2luUGF0aCgpO1xuXG4gIGZvciAobGFyZ2UgPSAwOyBsYXJnZSA8IDU0MDsgbGFyZ2UgKz0gMTgwKSB7XG4gICAgY29uc29sZS5sb2coJ1cgICAgVCAgICAgRicpO1xuICAgIC8vIHRoaXMgaXMgdGhlIGVudGlyZSBsZWZ0IHNpZGUgMyBib3hlcyBkb3duOiBcblxuXG4gICAgZm9yIChiID0gMDsgYiA8IDE4MDsgYiArPSAxODApIHtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgIGxldCBib3ggPSBbXTtcblxuICAgICAgLy8gdGhpcyBpcyBvbmUgYm94OiBcblxuICAgICAgbGV0IGNoZWNrcG9pbnQgPSAwO1xuXG4gICAgICBmb3IgKHggPSBiOyB4IDwgYiArIDU0MDsgeCArPSA2MCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgY29sdW1uICR7Y291bnR9YCk7IGNvdW50Kys7XG4gICAgICAgIGxldCBjb2wgPSBbXTtcblxuICAgICAgICAvLyB0aGlzIGdvZXMgYWNyb3NzIHRoZSB4IGF4aXMgMyAob3IgOSBkZXBlbmRpbmcgb24gdGhlIHggbGltaXQpIHNwYWNlcyBhbmQgZ2VuZXJhdGVzIGVhY2ggbGl0dGxlIGNvbHVtbiBpbiB0aGUgc21hbGxib3guIFxuICAgICAgICBjaGVja3BvaW50Kys7XG5cbiAgICAgICAgZm9yICh5ID0gbGFyZ2U7IHkgPCAobGFyZ2UgKyAxODApOyB5ICs9IDYwKSB7XG5cbiAgICAgICAgICAvLyB0aGlzIGdvZXMgZG93biB0aGUgeSBheGlzIChvbmUgM3gzIGJveCBhdCBhIHRpbWUpIGFuZCBhZGRzIGxpdHRsZSBzcXVhcmVzIHRvIGNhbnZhcyBhbmQgbnVtcyB0byB0aGUgY29sIHRvIGJlIGFkZGVkIHRvIHRoZSBzbWFsbGJveC4gXG5cbiAgICAgICAgICAvLyBJIG5lZWQgdG8gYWRkIHRoZSBjb2xzIHRvIGEgbGFyZ2VyIGNvbHVtbiBhbmQgY2hlY2sgZXZlcnkgdGltZSBJIGdvIHRvIHRoZSBuZXh0IGJveCBpZiB0aGUgY29sIGZyb20gdGhlIHByZXZpb3VzIGJveCBoYXMgdGhlIG51bXMuIGJlIGNhcmVmdWwgYWJvdXQgYWRkaW5nIHRvIGNvbHVtbjEsIGNvbHVtbjIsIG9yIGNvbHVtbjMuIFxuXG4gICAgICAgICAgY3R4LnJlY3QoeCwgeSwgNjAsIDYwKTtcbiAgICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICBsZXQgbnVtID0gZ2VuZXJhdGVOdW0oKTtcbiAgICAgICAgICBsZXQgYm9vbCA9IGZhbHNlO1xuXG5cbiAgICAgICAgICBpZiAoIWNvbHVtbnNbY2hlY2twb2ludF0uZmxhdCgpLmluY2x1ZGVzKG51bSkpIHtcbiAgICAgICAgICAgIGJvb2wgPSB0cnVlO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAoIWJveC5pbmNsdWRlcyhudW0pICYmIGJvb2wpIHtcbiAgICAgICAgICAgIGNvbC5wdXNoKG51bSk7IGJveC5wdXNoKG51bSk7XG4gICAgICAgICAgICBjdHguZmlsbFRleHQobnVtLCB4ICsgMjUsIHkgKyA0NSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbC5wdXNoKFwiXCIpOyBib3gucHVzaChcIlwiKTtcbiAgICAgICAgICB9XG5cblxuICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgfVxuICAgICAgICBjb2x1bW5zW2NoZWNrcG9pbnRdLnB1c2goY29sKTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKGBCb3g6ICR7Ym94fWApO1xuICAgIH1cbiAgfVxuXG4gIGxldCBjb2xzID0geyAxOiBjb2wxID0gW10sIDI6IGNvbDIgPSBbXSwgMzogY29sMyA9IFtdLCA0OiBjb2w0ID0gW10sIDU6IGNvbDUgPSBbXSwgNjogY29sNiA9IFtdLCA3OiBjb2w3ID0gW10sIDg6IGNvbDggPSBbXSwgOTogY29sOSA9IFtdIH07XG5cbiAgZm9yIChpID0gMTsgaSA8PSA5OyBpKyspIHtcbiAgICBjb2xzW2ldID0gcGFyc2lmeShjb2x1bW5zW2ldKTtcbiAgfTtcblxuICBmb3IgKGkgPSAxOyBpIDw9IDk7IGkrKykge1xuICAgIC8vIGNvbnNvbGUubG9nKGBjb2wgJHtpfTogJHtjb2xzW2ldfWApO1xuICAgIGNvbnNvbGUubG9nKGBjb2x1bW4gJHtpfTogJHtjb2x1bW5zW2ldfWApO1xuICB9XG5cbiAgLy8gbGV0IHJvd3MgPSB7IDE6IHJvdzEsIDI6IHJvdzIsIDM6IHJvdzMsIDQ6IHJvdzQsIDU6IHJvdzUsIDY6IHJvdzYsIDc6IHJvdzcsIDg6IHJvdzgsIDk6IHJvdzkgfTtcblxuICBmb3IgKGkgPSAxOyBpIDw9IDk7IGkrKykge1xuICAgIGZvciAoaiA9IDE7IGogPD0gOTsgaisrKSB7XG4gICAgICByb3dzW2ldLnB1c2goY29sc1tqXVtpIC0gMV0pO1xuICAgIH1cbiAgfTtcblxuICBmb3IgKGkgPSAxOyBpIDw9IDk7IGkrKykge1xuICAgIGNvbnNvbGUubG9nKGByb3cgJHtpfTogJHtyb3dzW2ldfWApO1xuICB9XG5cbn1cblxuLy8gZHJhd1JlY3QoKTtcblxuXG4gICAgLy8gZHJhd0xhcmdlQm94KCk7XG5cbiAgICAvLyBkcmF3U21hbGxCb3goMCwgMTgwLCAwLCAxODApO1xuXG5cbiAgICAvLyBkcmF3U21hbGxCb3goKTtcbiAgICAvLyBTdWRva3UuZHJhd0xhcmdlQm94O1xuICAgIC8vIHNldEludGVydmFsKGRyYXdSZWN0LCA0MCk7XG5cblxuXG5sZXQgYiA9IG5ldyBCb2FyZChjYW52YXMsY3R4KTtcbmIuZ2VuZXJhdGVOdW0oKTtcblxuXG4vLyBiLmRyYXdCYWxsKCk7XG5iLmRyYXdCb3hlcygpO1xuLy8gYi5kcmF3Qm9hcmQoKTtcbmIucGxhY2VOdW1zKDE4MCwxODApO1xuXG5iLnBsYWNlTnVtcygwLDApO1xuYi5wbGFjZU51bXMoMzYwLDM2MCk7XG5cbmIucGxhY2VOdW1zKDAsMzYwKTtcbmIucGxhY2VOdW1zKDM2MCwwKTtcblxuXG5cbmIucGxhY2VOdW1zKDAsMTgwKTtcbmIucGxhY2VOdW1zKDE4MCwwKTtcblxuXG5iLnBsYWNlTnVtcygxODAsMzYwKTtcbmIucGxhY2VOdW1zKDM2MCwxODApO1xuXG5cblxuXG4vLyBiLmdlblJvd3MoKTtcblxuLy8gYi5wbGFjZU51bXMoMCwwKTtcblxuLy8gYi5wbGFjZU51bXMoMTgwLCAxODApO1xuLy8gYi5wbGFjZU51bXMoMCwgMTgwKTtcbi8vIGIucGxhY2VOdW1zKDAsIDM2MCk7XG4vLyBiLnBsYWNlTnVtcygxODAsIDApO1xuXG5iLmRyYXdPdXRsaW5lKCk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==