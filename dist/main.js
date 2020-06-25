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
      this.ctx.beginPath();
      this.ctx.font = "30px Arial"; // x is 180 -> count = 3 bc 540/9 = 60 and 180/60 = 3

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2JvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3N1ZG9rdS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiQm9hcmQiLCJjYW52YXMiLCJjdHgiLCJyb3dzIiwiY29sdW1ucyIsImdlbmVyYXRlTnVtIiwiYmluZCIsImRyYXdCYWxsIiwiZHJhd0JveGVzIiwicGxhY2VOdW1zIiwiZ2VuUm93cyIsIm51bSIsIk1hdGgiLCJjZWlsIiwicmFuZG9tIiwiY29uc29sZSIsImxvZyIsImJlZ2luUGF0aCIsImFyYyIsIlBJIiwiZmlsbFN0eWxlIiwic3Ryb2tlIiwiY2xvc2VQYXRoIiwibGluZVdpZHRoIiwieCIsIm1vdmVUbyIsImxpbmVUbyIsInkiLCJyZWN0Iiwic3RhcnRYIiwic3RhcnRZIiwiZm9udCIsImJveCIsImNvbEluZGV4Iiwicm93SW5kZXgiLCJjb2wiLCJib29sIiwiaW5jbHVkZXMiLCJmbGF0IiwicHVzaCIsImZpbGxUZXh0IiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInJvdyIsImVsIiwibW9kdWxlIiwiZXhwb3J0cyIsInJlcXVpcmUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29udGV4dCIsInBhcnNpZnkiLCJhcnIiLCJvYmoiLCJmb3JFYWNoIiwibmV3QXJyIiwia2V5Iiwic3BsaXQiLCJwYXJzZUludCIsImRyYXdSZWN0IiwiY291bnQiLCJyb3cxIiwicm93MiIsInJvdzMiLCJyb3c0Iiwicm93NSIsInJvdzYiLCJyb3c3Iiwicm93OCIsInJvdzkiLCJjb2x1bW4xIiwiY29sdW1uMiIsImNvbHVtbjMiLCJjb2x1bW40IiwiY29sdW1uNSIsImNvbHVtbjYiLCJjb2x1bW43IiwiY29sdW1uOCIsImNvbHVtbjkiLCJjIiwibGFyZ2UiLCJiIiwiY2hlY2twb2ludCIsImNvbHMiLCJjb2wxIiwiY29sMiIsImNvbDMiLCJjb2w0IiwiY29sNSIsImNvbDYiLCJjb2w3IiwiY29sOCIsImNvbDkiLCJpIiwiaiIsImRyYXdPdXRsaW5lIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0NBRUEsMkI7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDSk1BLEs7QUFDSixpQkFBWUMsTUFBWixFQUFvQkMsR0FBcEIsRUFBeUI7QUFBQTs7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQUtDLElBQUwsR0FBWTtBQUNWLFNBQUcsRUFETztBQUVWLFNBQUcsRUFGTztBQUdWLFNBQUcsRUFITztBQUlWLFNBQUcsRUFKTztBQUtWLFNBQUcsRUFM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SSxDQUFDMkYsQ0FBRCxDQUE3QjtBQUNEO0FBRUYsQyxDQUVEO0FBR0k7QUFFQTtBQUdBO0FBQ0E7QUFDQTs7O0FBSUosSUFBSVosQ0FBQyxHQUFHLElBQUlsRixLQUFKLENBQVVDLE1BQVYsRUFBaUJDLEdBQWpCLENBQVI7QUFDQWdGLENBQUMsQ0FBQzdFLFdBQUYsRyxDQUdBOztBQUNBNkUsQ0FBQyxDQUFDMUUsU0FBRixHLENBQ0E7O0FBQ0EwRSxDQUFDLENBQUN6RSxTQUFGLENBQVksR0FBWixFQUFnQixHQUFoQjtBQUVBeUUsQ0FBQyxDQUFDekUsU0FBRixDQUFZLENBQVosRUFBYyxDQUFkO0FBQ0F5RSxDQUFDLENBQUN6RSxTQUFGLENBQVksR0FBWixFQUFnQixHQUFoQjtBQUVBeUUsQ0FBQyxDQUFDekUsU0FBRixDQUFZLENBQVosRUFBYyxHQUFkO0FBQ0F5RSxDQUFDLENBQUN6RSxTQUFGLENBQVksR0FBWixFQUFnQixDQUFoQjtBQUlBeUUsQ0FBQyxDQUFDekUsU0FBRixDQUFZLENBQVosRUFBYyxHQUFkO0FBQ0F5RSxDQUFDLENBQUN6RSxTQUFGLENBQVksR0FBWixFQUFnQixDQUFoQjtBQUdBeUUsQ0FBQyxDQUFDekUsU0FBRixDQUFZLEdBQVosRUFBZ0IsR0FBaEI7QUFDQXlFLENBQUMsQ0FBQ3pFLFNBQUYsQ0FBWSxHQUFaLEVBQWdCLEdBQWhCLEUsQ0FLQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUF5RSxDQUFDLENBQUNjLFdBQUYsRzs7Ozs7Ozs7Ozs7QUMvTkEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5pbXBvcnQgJy4vc2NyaXB0cy9ib2FyZC5qcyc7XG5pbXBvcnQgJy4vc2NyaXB0cy9zdWRva3UuanMnO1xuLy8gJy9zcmMvc3R5bGVzL2luZGV4LnNjc3MnIiwiY2xhc3MgQm9hcmQge1xuICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCkge1xuICAgIC8vIHRoaXMuYm94ZXMgPSB7XG4gICAgLy8gICAwOiBbXSxcbiAgICAvLyAgIDE6IFtdLFxuICAgIC8vICAgMjogW10sXG4gICAgLy8gICAzOiBbXSxcbiAgICAvLyAgIDQ6IFtdLFxuICAgIC8vICAgNTogW10sXG4gICAgLy8gICA2OiBbXSxcbiAgICAvLyAgIDc6IFtdLFxuICAgIC8vICAgODogW11cbiAgICAvLyB9OyAgXG4gICAgdGhpcy5yb3dzID0ge1xuICAgICAgMDogW10sXG4gICAgICAxOiBbXSxcbiAgICAgIDI6IFtdLFxuICAgICAgMzogW10sXG4gICAgICA0OiBbXSxcbiAgICAgIDU6IFtdLFxuICAgICAgNjogW10sXG4gICAgICA3OiBbXSxcbiAgICAgIDg6IFtdXG4gICAgfTsgXG4gICAgdGhpcy5jb2x1bW5zID0geyBcbiAgICAgIDA6IFtdLCBcbiAgICAgIDE6IFtdLCBcbiAgICAgIDI6IFtdLCBcbiAgICAgIDM6IFtdLCBcbiAgICAgIDQ6IFtdLCBcbiAgICAgIDU6IFtdLCBcbiAgICAgIDY6IFtdLCBcbiAgICAgIDc6IFtdLCBcbiAgICAgIDg6IFtdXG4gICAgfTsgXG5cbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmN0eCA9IGN0eDtcblxuICAgIHRoaXMuZ2VuZXJhdGVOdW0gPSB0aGlzLmdlbmVyYXRlTnVtLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kcmF3QmFsbCA9IHRoaXMuZHJhd0JhbGwuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRyYXdCb3hlcyA9IHRoaXMuZHJhd0JveGVzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5wbGFjZU51bXMgPSB0aGlzLnBsYWNlTnVtcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2VuUm93cyA9IHRoaXMuZ2VuUm93cy5iaW5kKHRoaXMpO1xuICB9XG4gIFxuICBnZW5lcmF0ZU51bSgpIHtcbiAgICBsZXQgbnVtID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICBjb25zb2xlLmxvZyhgbnVtOiAke251bX1gKTtcbiAgICByZXR1cm4gbnVtOyBcbiAgfVxuXG4gIGRyYXdCYWxsKCkge1xuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuXG4gICAgdGhpcy5jdHguYXJjKDUwLCA1MCwgMjAsIDAsIE1hdGguUEkgKiAyKTtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiMwMDk1RERcIjtcbiAgICB0aGlzLmN0eC5zdHJva2UoKTsgXG4gICAgLy8gdGhpcy5jdHguZmlsbCgpO1xuICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICB9XG5cbiAgZHJhd091dGxpbmUoKSB7XG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jdHgubGluZVdpZHRoID0gNDsgXG5cbiAgICBmb3IgKGxldCB4ID0gMDsgeDw9NTQwOyB4Kz0xODApIHtcbiAgICAgIHRoaXMuY3R4Lm1vdmVUbyh4LDApO1xuICAgICAgdGhpcy5jdHgubGluZVRvKHgsIDU0MCk7XG5cbiAgICAgIHRoaXMuY3R4Lm1vdmVUbygwLHgpO1xuICAgICAgdGhpcy5jdHgubGluZVRvKDU0MCwgeCk7XG4gICAgfVxuXG4gICAgLy8gZm9yIChsZXQgeSA9IDA7IHk8PTU0MDsgeSs9MTgwKSB7XG4gICAgLy8gICB0aGlzLmN0eC5tb3ZlVG8oMCx5KTtcbiAgICAvLyAgIHRoaXMuY3R4LmxpbmVUbyg1NDAsIHkpO1xuICAgIC8vIH1cblxuICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gIH1cblxuICBkcmF3Qm94ZXMoKSB7XG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jdHgubGluZVdpZHRoID0gMC41O1xuICAgIGZvciAobGV0IHg9MDsgeCA8IDU0MDsgeCs9NjApIHtcbiAgICAgIGZvciAobGV0IHk9MDsgeTw1NDA7IHkrPTYwKSB7XG4gICAgICAgIHRoaXMuY3R4LnJlY3QoeCx5LDYwLDYwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7IFxuICB9XG5cbiAgcGxhY2VOdW1zKHN0YXJ0WCxzdGFydFkpIHtcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG5cbiAgICAvLyB4IGlzIDE4MCAtPiBjb3VudCA9IDMgYmMgNTQwLzkgPSA2MCBhbmQgMTgwLzYwID0gM1xuXG4gICAgbGV0IGJveCA9IFtdO1xuICAgIGxldCBjb2xJbmRleCA9IChzdGFydFgvNjApIC0gMTsgXG4gICAgXG4gICAgZm9yIChsZXQgeD1zdGFydFg7IHg8IChzdGFydFgrMTgwKTsgeCs9NjApIHtcbiAgICAgIFxuICAgICAgbGV0IHJvd0luZGV4ID0gKHN0YXJ0WS82MCktMTtcbiAgICAgIGNvbEluZGV4ICsrOyBcbiAgICAgIGxldCBjb2wgPSBbXTsgXG5cbiAgICAgIGZvciAobGV0IHk9c3RhcnRZOyB5PChzdGFydFkrMTgwKTsgeSs9NjApIHtcbiAgICAgICAgcm93SW5kZXgrKzsgXG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJIVUhIR0hHSEdcIiwgcm93SW5kZXgsIHRoaXMucm93cyk7XG5cbiAgICAgICAgbnVtID0gdGhpcy5nZW5lcmF0ZU51bSgpO1xuICAgICAgICBsZXQgYm9vbD1mYWxzZTsgXG4gICAgICAgIGlmICghdGhpcy5yb3dzW3Jvd0luZGV4XS5pbmNsdWRlcyhudW0pKSB7XG4gICAgICAgICAgYm9vbD10cnVlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoYm9vbCAmJiAhYm94LmluY2x1ZGVzKG51bSkgJiYgIXRoaXMuY29sdW1uc1tjb2xJbmRleF0uZmxhdCgpLmZsYXQoKS5pbmNsdWRlcyhudW0pKSB7XG4gICAgICAgICAgYm94LnB1c2gobnVtKTsgXG4gICAgICAgICAgY29sLnB1c2gobnVtKTtcbiAgICAgICAgICB0aGlzLnJvd3Nbcm93SW5kZXhdLnB1c2gobnVtKTtcbiAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChudW0sIHggKyAyNSwgeSArIDQ1KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb2wucHVzaChcIi1cIik7XG4gICAgICAgICAgdGhpcy5yb3dzW3Jvd0luZGV4XS5wdXNoKFwiLVwiKTtcbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuY29sdW1uc1tjb2xJbmRleF0ucHVzaChjb2wpO1xuICAgICAgdGhpcy5jb2x1bW5zW2NvbEluZGV4XSA9IHRoaXMuY29sdW1uc1tjb2xJbmRleF0uZmxhdCgpO1xuXG4gICAgICBjb25zb2xlLmxvZyhgYm94OiBbJHtib3h9XWApO1xuICAgICAgY29uc29sZS5sb2coXCJDb2x1bW5zOiBcIiwgdGhpcy5jb2x1bW5zKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiY29sczpcIiwgT2JqZWN0LnZhbHVlcyh0aGlzLmNvbHVtbnMpLmZsYXQoKSk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJSb3dzOiBcIiwgdGhpcy5yb3dzKTtcbiAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgfVxuXG4gIGdlblJvd3MoKSB7XG4gICAgZm9yIChsZXQgY29sPTA7IGNvbDxPYmplY3Qua2V5cyh0aGlzLmNvbHVtbnMpLmxlbmd0aDsgY29sKyspIHtcbiAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IE9iamVjdC5rZXlzKHRoaXMuY29sdW1ucykubGVuZ3RoOyByb3crKykge1xuICAgICAgICBsZXQgZWwgPSB0aGlzLmNvbHVtbnNbcm93XS5mbGF0KClbY29sXTtcbiAgICAgICAgdGhpcy5yb3dzW2NvbF0ucHVzaChlbCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKCdSb3dzOiAnLCB0aGlzLnJvd3MpOyBcbiAgICByZXR1cm4gdGhpcy5yb3dzO1xuICB9XG5cbn07XG5cbi8vIGxldCBiID0gbmV3IEJvYXJkOyBcbi8vIGNvbnNvbGUubG9nKGIuZ2VuZXJhdGVOdW0oKSk7IFxuLy8gYi5nZW5lcmF0ZU51bSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJvYXJkOyBcblxuXG5cbi8vIGxldCBjb3VudCA9IDE7XG4vLyBsZXQgcm93cyA9IHsgMTogcm93MSA9IFtdLCAyOiByb3cyID0gW10sIDM6IHJvdzMgPSBbXSwgNDogcm93NCA9IFtdLCA1OiByb3c1ID0gW10sIDY6IHJvdzYgPSBbXSwgNzogcm93NyA9IFtdLCA4OiByb3c4ID0gW10sIDk6IHJvdzkgPSBbXSB9O1xuLy8gbGV0IGNvbHVtbnMgPSB7IDE6IGNvbHVtbjEgPSBbXSwgMjogY29sdW1uMiA9IFtdLCAzOiBjb2x1bW4zID0gW10sIDQ6IGNvbHVtbjQgPSBbXSwgNTogY29sdW1uNSA9IFtdLCA2OiBjb2x1bW42ID0gW10sIDc6IGNvbHVtbjcgPSBbXSwgODogY29sdW1uOCA9IFtdLCA5OiBjb2x1bW45ID0gW10gfVxuLy8gLy8gbGV0IGNvbHMgPSB7IDE6IGNvbDE9W10sIDI6IGNvbDI9W10sIDM6IGNvbDM9W10sIDQ6IGNvbDQ9W10sIDU6IGNvbDU9W10sIDY6IGNvbDY9W10sIDc6IGNvbDc9W10sIDg6IGNvbDg9W10sIDk6IGNvbDk9W10gfTtcblxuLy8gbGV0IGMgPSAwO1xuXG5cbi8vIGZvciAobGFyZ2UgPSAwOyBsYXJnZSA8IDU0MDsgbGFyZ2UgKz0gMTgwKSB7XG4vLyAgIGNvbnNvbGUubG9nKCdXICAgIFQgICAgIEYnKTtcbi8vICAgLy8gdGhpcyBpcyB0aGUgZW50aXJlIGxlZnQgc2lkZSAzIGJveGVzIGRvd246IFxuXG5cbi8vICAgZm9yIChiID0gMDsgYiA8IDE4MDsgYiArPSAxODApIHtcbi8vICAgICBjdHguc3Ryb2tlKCk7XG4vLyAgICAgbGV0IGJveCA9IFtdO1xuXG4vLyAgICAgLy8gdGhpcyBpcyBvbmUgYm94OiBcblxuLy8gICAgIGxldCBjaGVja3BvaW50ID0gMDtcblxuLy8gICAgIGZvciAoeCA9IGI7IHggPCBiICsgNTQwOyB4ICs9IDYwKSB7XG4vLyAgICAgICBjb25zb2xlLmxvZyhgY29sdW1uICR7Y291bnR9YCk7IGNvdW50Kys7XG4vLyAgICAgICBsZXQgY29sID0gW107XG5cbi8vICAgICAgIC8vIHRoaXMgZ29lcyBhY3Jvc3MgdGhlIHggYXhpcyAzIChvciA5IGRlcGVuZGluZyBvbiB0aGUgeCBsaW1pdCkgc3BhY2VzIGFuZCBnZW5lcmF0ZXMgZWFjaCBsaXR0bGUgY29sdW1uIGluIHRoZSBzbWFsbGJveC4gXG4vLyAgICAgICBjaGVja3BvaW50Kys7XG5cbi8vICAgICAgIGZvciAoeSA9IGxhcmdlOyB5IDwgKGxhcmdlICsgMTgwKTsgeSArPSA2MCkge1xuXG4vLyAgICAgICAgIC8vIHRoaXMgZ29lcyBkb3duIHRoZSB5IGF4aXMgKG9uZSAzeDMgYm94IGF0IGEgdGltZSkgYW5kIGFkZHMgbGl0dGxlIHNxdWFyZXMgdG8gY2FudmFzIGFuZCBudW1zIHRvIHRoZSBjb2wgdG8gYmUgYWRkZWQgdG8gdGhlIHNtYWxsYm94LiBcblxuLy8gICAgICAgICAvLyBJIG5lZWQgdG8gYWRkIHRoZSBjb2xzIHRvIGEgbGFyZ2VyIGNvbHVtbiBhbmQgY2hlY2sgZXZlcnkgdGltZSBJIGdvIHRvIHRoZSBuZXh0IGJveCBpZiB0aGUgY29sIGZyb20gdGhlIHByZXZpb3VzIGJveCBoYXMgdGhlIG51bXMuIGJlIGNhcmVmdWwgYWJvdXQgYWRkaW5nIHRvIGNvbHVtbjEsIGNvbHVtbjIsIG9yIGNvbHVtbjMuIFxuXG4vLyAgICAgICAgIGN0eC5yZWN0KHgsIHksIDYwLCA2MCk7XG4vLyAgICAgICAgIGN0eC5zdHJva2UoKTtcblxuLy8gICAgICAgICBsZXQgbnVtID0gZ2VuZXJhdGVOdW0oKTtcbi8vICAgICAgICAgbGV0IGJvb2wgPSBmYWxzZTtcblxuXG4vLyAgICAgICAgIGlmICghY29sdW1uc1tjaGVja3BvaW50XS5mbGF0KCkuaW5jbHVkZXMobnVtKSkge1xuLy8gICAgICAgICAgIGJvb2wgPSB0cnVlO1xuLy8gICAgICAgICB9O1xuXG4vLyAgICAgICAgIGlmICghYm94LmluY2x1ZGVzKG51bSkgJiYgYm9vbCkge1xuLy8gICAgICAgICAgIGNvbC5wdXNoKG51bSk7IGJveC5wdXNoKG51bSk7XG4vLyAgICAgICAgICAgY3R4LmZpbGxUZXh0KG51bSwgeCArIDI1LCB5ICsgNDUpO1xuLy8gICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgIGNvbC5wdXNoKFwiXCIpOyBib3gucHVzaChcIlwiKTtcbi8vICAgICAgICAgfVxuXG5cbi8vICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuLy8gICAgICAgfVxuLy8gICAgICAgY29sdW1uc1tjaGVja3BvaW50XS5wdXNoKGNvbCk7XG4vLyAgICAgfVxuLy8gICAgIGNvbnNvbGUubG9nKGBCb3g6ICR7Ym94fWApO1xuLy8gICB9XG4vLyB9XG5cbi8vIGxldCBjb2xzID0geyAxOiBjb2wxID0gW10sIDI6IGNvbDIgPSBbXSwgMzogY29sMyA9IFtdLCA0OiBjb2w0ID0gW10sIDU6IGNvbDUgPSBbXSwgNjogY29sNiA9IFtdLCA3OiBjb2w3ID0gW10sIDg6IGNvbDggPSBbXSwgOTogY29sOSA9IFtdIH07XG5cbi8vIGZvciAoaSA9IDE7IGkgPD0gOTsgaSsrKSB7XG4vLyAgIGNvbHNbaV0gPSBwYXJzaWZ5KGNvbHVtbnNbaV0pO1xuLy8gfTtcblxuLy8gZm9yIChpID0gMTsgaSA8PSA5OyBpKyspIHtcbi8vICAgLy8gY29uc29sZS5sb2coYGNvbCAke2l9OiAke2NvbHNbaV19YCk7XG4vLyAgIGNvbnNvbGUubG9nKGBjb2x1bW4gJHtpfTogJHtjb2x1bW5zW2ldfWApO1xuLy8gfVxuXG4vLyAvLyBsZXQgcm93cyA9IHsgMTogcm93MSwgMjogcm93MiwgMzogcm93MywgNDogcm93NCwgNTogcm93NSwgNjogcm93NiwgNzogcm93NywgODogcm93OCwgOTogcm93OSB9O1xuXG4vLyBmb3IgKGkgPSAxOyBpIDw9IDk7IGkrKykge1xuLy8gICBmb3IgKGogPSAxOyBqIDw9IDk7IGorKykge1xuLy8gICAgIHJvd3NbaV0ucHVzaChjb2xzW2pdW2kgLSAxXSk7XG4vLyAgIH1cbi8vIH07XG5cbi8vIGZvciAoaSA9IDE7IGkgPD0gOTsgaSsrKSB7XG4vLyAgIGNvbnNvbGUubG9nKGByb3cgJHtpfTogJHtyb3dzW2ldfWApO1xuLy8gfVxuIiwiY29uc3QgQm9hcmQgPSByZXF1aXJlKFwiLi9ib2FyZFwiKTtcblxubGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlDYW52YXNcIik7XG5sZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVOdW0oKSB7XG4gIGxldCBudW0gPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDkpO1xuICBjb25zb2xlLmxvZyhudW0pO1xuICByZXR1cm4gbnVtO1xufVxuXG4vLyBmdW5jdGlvbiBkcmF3U21hbGxCb3gobGVmdCwgcmlnaHQsIHRvcCwgYm90dG9tKSB7XG4vLyAgIGxldCBjb3VudCA9IDE7XG4vLyAgIGN0eC5iZWdpblBhdGgoKTtcbi8vICAgLy8gY3R4LmxpbmVXaWR0aCA9IDEwO1xuXG4vLyAgIGxldCByb3cxID0gW107XG4vLyAgIGxldCByb3cyID0gW107XG4vLyAgIGxldCByb3czID0gW107XG5cbi8vICAgY3R4LmZvbnQgPSBcIjIwcHggQXJpYWxcIjtcbi8vICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2JhKDAsMCwyNTUsMC41KVwiO1xuLy8gICBmb3IgKGIgPSBsZWZ0OyBiIDwgcmlnaHQ7IGIgKz0gMTgwKSB7XG4vLyAgICAgY3R4LnN0cm9rZSgpO1xuLy8gICAgIGxldCBib3ggPSBbXTtcbi8vICAgICBmb3IgKHggPSBiOyB4IDwgYiArIDE4MDsgeCArPSA2MCkge1xuLy8gICAgICAgY29uc29sZS5sb2coYGNvbHVtbiAke2NvdW50fWApOyBjb3VudCsrO1xuLy8gICAgICAgbGV0IGNvbCA9IFtdO1xuLy8gICAgICAgZm9yICh5ID0gdG9wOyB5IDwgYm90dG9tOyB5ICs9IDYwKSB7XG4vLyAgICAgICAgIGN0eC5yZWN0KHgsIHksIDYwLCA2MCk7XG4vLyAgICAgICAgIGxldCBudW0gPSBnZW5lcmF0ZU51bSgpO1xuLy8gICAgICAgICBpZiAoIWNvbC5pbmNsdWRlcyhudW0pICYmICFib3guaW5jbHVkZXMobnVtKSkge1xuLy8gICAgICAgICAgIGNvbC5wdXNoKG51bSk7IGJveC5wdXNoKG51bSk7XG4vLyAgICAgICAgICAgY3R4LmZvbnQgPSBcIjE1MHB4IEFyaWFsXCI7XG4vLyAgICAgICAgICAgY3R4LmZpbGxUZXh0KG51bSwgeCArIDI1LCB5ICsgNDUpO1xuLy8gICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgIGNvbC5wdXNoKFwiXCIpOyBib3gucHVzaChcIlwiKTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBjdHguc3Ryb2tlKCk7XG4vLyAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbi8vICAgICAgIH1cblxuLy8gICAgICAgaWYgKCFyb3cxLmluY2x1ZGVzKGNvbFswXSkpIHtcbi8vICAgICAgICAgcm93MS5wdXNoKGNvbFswXSk7XG4vLyAgICAgICB9O1xuLy8gICAgICAgaWYgKCFyb3cyLmluY2x1ZGVzKGNvbFsxXSkpIHtcbi8vICAgICAgICAgcm93Mi5wdXNoKGNvbFsxXSk7XG4vLyAgICAgICB9O1xuLy8gICAgICAgaWYgKCFyb3czLmluY2x1ZGVzKGNvbFsyXSkpIHtcbi8vICAgICAgICAgcm93My5wdXNoKGNvbFsyXSk7XG4vLyAgICAgICB9O1xuLy8gICAgIH1cbi8vICAgICBjb25zb2xlLmxvZyhgUm93IDE6ICR7cm93MX1gKTtcbi8vICAgICBjb25zb2xlLmxvZyhgUm93IDI6ICR7cm93Mn1gKTtcbi8vICAgICBjb25zb2xlLmxvZyhgUm93IDM6ICR7cm93M31gKTtcbi8vICAgICAvLyBjb25zb2xlLmxvZyhgQm94OiAke2JveH1gKTtcbi8vICAgICBjb25zb2xlLmxvZyhgYm94IGJldHdlZW4gbGVmdCwgJHtsZWZ0fSwgYW5kIHJpZ2h0LCAke3JpZ2h0fSwgY29tcGxldGUhIHdpdGg6IFske2JveH1dYCk7XG4vLyAgIH1cbi8vIH1cbi8vIGZ1bmN0aW9uIGRyYXdMYXJnZUJveCgpIHtcbi8vICAgZm9yIChsZWZ0ID0gMDsgbGVmdCA8IDU0MDsgbGVmdCArPSAxODApIHtcbi8vICAgICBkcmF3U21hbGxCb3gobGVmdCwgbGVmdCArIDE4MCwgMCwgMTgwKTtcbi8vICAgICBkcmF3U21hbGxCb3gobGVmdCwgbGVmdCArIDE4MCwgMTgwLCAzNjApO1xuLy8gICAgIGRyYXdTbWFsbEJveChsZWZ0LCBsZWZ0ICsgMTgwLCAzNjAsIDU0MCk7XG4vLyAgICAgLy8gY29uc29sZS5sb2coZHJhd1NtYWxsQm94LnJvdzEpXG4vLyAgIH1cbi8vIH07XG5cblxuXG5mdW5jdGlvbiBwYXJzaWZ5KGFycikge1xuICBsZXQgb2JqID0ge307XG4gIGFyci5mb3JFYWNoKGVsID0+IHtcbiAgICBvYmpbZWxdID0gdHJ1ZTtcbiAgfSlcbiAgbmV3QXJyID0gW107XG4gIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChrZXkgPT4ge1xuICAgIGtleS5zcGxpdCgnLCcpLmZvckVhY2goZWwgPT4ge1xuICAgICAgbmV3QXJyLnB1c2gocGFyc2VJbnQoZWwpKTtcbiAgICB9KVxuICB9KVxuICByZXR1cm4gbmV3QXJyO1xufVxuXG5mdW5jdGlvbiBkcmF3UmVjdCgpIHtcblxuICBsZXQgY291bnQgPSAxO1xuICBsZXQgcm93cyA9IHsgMTogcm93MSA9IFtdLCAyOiByb3cyID0gW10sIDM6IHJvdzMgPSBbXSwgNDogcm93NCA9IFtdLCA1OiByb3c1ID0gW10sIDY6IHJvdzYgPSBbXSwgNzogcm93NyA9IFtdLCA4OiByb3c4ID0gW10sIDk6IHJvdzkgPSBbXSB9O1xuICBsZXQgY29sdW1ucyA9IHsgMTogY29sdW1uMSA9IFtdLCAyOiBjb2x1bW4yID0gW10sIDM6IGNvbHVtbjMgPSBbXSwgNDogY29sdW1uNCA9IFtdLCA1OiBjb2x1bW41ID0gW10sIDY6IGNvbHVtbjYgPSBbXSwgNzogY29sdW1uNyA9IFtdLCA4OiBjb2x1bW44ID0gW10sIDk6IGNvbHVtbjkgPSBbXSB9XG4gIC8vIGxldCBjb2xzID0geyAxOiBjb2wxPVtdLCAyOiBjb2wyPVtdLCAzOiBjb2wzPVtdLCA0OiBjb2w0PVtdLCA1OiBjb2w1PVtdLCA2OiBjb2w2PVtdLCA3OiBjb2w3PVtdLCA4OiBjb2w4PVtdLCA5OiBjb2w5PVtdIH07XG5cbiAgbGV0IGMgPSAwO1xuXG4gIGN0eC5iZWdpblBhdGgoKTtcblxuICBmb3IgKGxhcmdlID0gMDsgbGFyZ2UgPCA1NDA7IGxhcmdlICs9IDE4MCkge1xuICAgIGNvbnNvbGUubG9nKCdXICAgIFQgICAgIEYnKTtcbiAgICAvLyB0aGlzIGlzIHRoZSBlbnRpcmUgbGVmdCBzaWRlIDMgYm94ZXMgZG93bjogXG5cblxuICAgIGZvciAoYiA9IDA7IGIgPCAxODA7IGIgKz0gMTgwKSB7XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICBsZXQgYm94ID0gW107XG5cbiAgICAgIC8vIHRoaXMgaXMgb25lIGJveDogXG5cbiAgICAgIGxldCBjaGVja3BvaW50ID0gMDtcblxuICAgICAgZm9yICh4ID0gYjsgeCA8IGIgKyA1NDA7IHggKz0gNjApIHtcbiAgICAgICAgY29uc29sZS5sb2coYGNvbHVtbiAke2NvdW50fWApOyBjb3VudCsrO1xuICAgICAgICBsZXQgY29sID0gW107XG5cbiAgICAgICAgLy8gdGhpcyBnb2VzIGFjcm9zcyB0aGUgeCBheGlzIDMgKG9yIDkgZGVwZW5kaW5nIG9uIHRoZSB4IGxpbWl0KSBzcGFjZXMgYW5kIGdlbmVyYXRlcyBlYWNoIGxpdHRsZSBjb2x1bW4gaW4gdGhlIHNtYWxsYm94LiBcbiAgICAgICAgY2hlY2twb2ludCsrO1xuXG4gICAgICAgIGZvciAoeSA9IGxhcmdlOyB5IDwgKGxhcmdlICsgMTgwKTsgeSArPSA2MCkge1xuXG4gICAgICAgICAgLy8gdGhpcyBnb2VzIGRvd24gdGhlIHkgYXhpcyAob25lIDN4MyBib3ggYXQgYSB0aW1lKSBhbmQgYWRkcyBsaXR0bGUgc3F1YXJlcyB0byBjYW52YXMgYW5kIG51bXMgdG8gdGhlIGNvbCB0byBiZSBhZGRlZCB0byB0aGUgc21hbGxib3guIFxuXG4gICAgICAgICAgLy8gSSBuZWVkIHRvIGFkZCB0aGUgY29scyB0byBhIGxhcmdlciBjb2x1bW4gYW5kIGNoZWNrIGV2ZXJ5IHRpbWUgSSBnbyB0byB0aGUgbmV4dCBib3ggaWYgdGhlIGNvbCBmcm9tIHRoZSBwcmV2aW91cyBib3ggaGFzIHRoZSBudW1zLiBiZSBjYXJlZnVsIGFib3V0IGFkZGluZyB0byBjb2x1bW4xLCBjb2x1bW4yLCBvciBjb2x1bW4zLiBcblxuICAgICAgICAgIGN0eC5yZWN0KHgsIHksIDYwLCA2MCk7XG4gICAgICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgbGV0IG51bSA9IGdlbmVyYXRlTnVtKCk7XG4gICAgICAgICAgbGV0IGJvb2wgPSBmYWxzZTtcblxuXG4gICAgICAgICAgaWYgKCFjb2x1bW5zW2NoZWNrcG9pbnRdLmZsYXQoKS5pbmNsdWRlcyhudW0pKSB7XG4gICAgICAgICAgICBib29sID0gdHJ1ZTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKCFib3guaW5jbHVkZXMobnVtKSAmJiBib29sKSB7XG4gICAgICAgICAgICBjb2wucHVzaChudW0pOyBib3gucHVzaChudW0pO1xuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KG51bSwgeCArIDI1LCB5ICsgNDUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb2wucHVzaChcIlwiKTsgYm94LnB1c2goXCJcIik7XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29sdW1uc1tjaGVja3BvaW50XS5wdXNoKGNvbCk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhgQm94OiAke2JveH1gKTtcbiAgICB9XG4gIH1cblxuICBsZXQgY29scyA9IHsgMTogY29sMSA9IFtdLCAyOiBjb2wyID0gW10sIDM6IGNvbDMgPSBbXSwgNDogY29sNCA9IFtdLCA1OiBjb2w1ID0gW10sIDY6IGNvbDYgPSBbXSwgNzogY29sNyA9IFtdLCA4OiBjb2w4ID0gW10sIDk6IGNvbDkgPSBbXSB9O1xuXG4gIGZvciAoaSA9IDE7IGkgPD0gOTsgaSsrKSB7XG4gICAgY29sc1tpXSA9IHBhcnNpZnkoY29sdW1uc1tpXSk7XG4gIH07XG5cbiAgZm9yIChpID0gMTsgaSA8PSA5OyBpKyspIHtcbiAgICAvLyBjb25zb2xlLmxvZyhgY29sICR7aX06ICR7Y29sc1tpXX1gKTtcbiAgICBjb25zb2xlLmxvZyhgY29sdW1uICR7aX06ICR7Y29sdW1uc1tpXX1gKTtcbiAgfVxuXG4gIC8vIGxldCByb3dzID0geyAxOiByb3cxLCAyOiByb3cyLCAzOiByb3czLCA0OiByb3c0LCA1OiByb3c1LCA2OiByb3c2LCA3OiByb3c3LCA4OiByb3c4LCA5OiByb3c5IH07XG5cbiAgZm9yIChpID0gMTsgaSA8PSA5OyBpKyspIHtcbiAgICBmb3IgKGogPSAxOyBqIDw9IDk7IGorKykge1xuICAgICAgcm93c1tpXS5wdXNoKGNvbHNbal1baSAtIDFdKTtcbiAgICB9XG4gIH07XG5cbiAgZm9yIChpID0gMTsgaSA8PSA5OyBpKyspIHtcbiAgICBjb25zb2xlLmxvZyhgcm93ICR7aX06ICR7cm93c1tpXX1gKTtcbiAgfVxuXG59XG5cbi8vIGRyYXdSZWN0KCk7XG5cblxuICAgIC8vIGRyYXdMYXJnZUJveCgpO1xuXG4gICAgLy8gZHJhd1NtYWxsQm94KDAsIDE4MCwgMCwgMTgwKTtcblxuXG4gICAgLy8gZHJhd1NtYWxsQm94KCk7XG4gICAgLy8gU3Vkb2t1LmRyYXdMYXJnZUJveDtcbiAgICAvLyBzZXRJbnRlcnZhbChkcmF3UmVjdCwgNDApO1xuXG5cblxubGV0IGIgPSBuZXcgQm9hcmQoY2FudmFzLGN0eCk7XG5iLmdlbmVyYXRlTnVtKCk7XG5cblxuLy8gYi5kcmF3QmFsbCgpO1xuYi5kcmF3Qm94ZXMoKTtcbi8vIGIuZHJhd0JvYXJkKCk7XG5iLnBsYWNlTnVtcygxODAsMTgwKTtcblxuYi5wbGFjZU51bXMoMCwwKTtcbmIucGxhY2VOdW1zKDM2MCwzNjApO1xuXG5iLnBsYWNlTnVtcygwLDM2MCk7XG5iLnBsYWNlTnVtcygzNjAsMCk7XG5cblxuXG5iLnBsYWNlTnVtcygwLDE4MCk7XG5iLnBsYWNlTnVtcygxODAsMCk7XG5cblxuYi5wbGFjZU51bXMoMTgwLDM2MCk7XG5iLnBsYWNlTnVtcygzNjAsMTgwKTtcblxuXG5cblxuLy8gYi5nZW5Sb3dzKCk7XG5cbi8vIGIucGxhY2VOdW1zKDAsMCk7XG5cbi8vIGIucGxhY2VOdW1zKDE4MCwgMTgwKTtcbi8vIGIucGxhY2VOdW1zKDAsIDE4MCk7XG4vLyBiLnBsYWNlTnVtcygwLCAzNjApO1xuLy8gYi5wbGFjZU51bXMoMTgwLCAwKTtcblxuYi5kcmF3T3V0bGluZSgpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=