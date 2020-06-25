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

    this.boxes = {
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
    this.drawBoxes = this.drawBoxes.bind(this);
    this.placeNums = this.placeNums.bind(this);
    this.checkValues = this.checkValues.bind(this);
  }

  _createClass(Board, [{
    key: "generateNum",
    value: function generateNum() {
      var num = Math.ceil(Math.random() * 9);
      console.log("num: ".concat(num));
      return num;
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
      this.ctx.font = "20px Arial"; // x is 180 -> count = 3 bc 540/9 = 60 and 180/60 = 3

      var box = [];
      var colIndex = startX / 60 - 1;

      for (var x = startX; x < startX + 180; x += 60) {
        var rowIndex = startY / 60 - 1;
        colIndex++;
        var col = [];

        for (var y = startY; y < startY + 180; y += 60) {
          rowIndex++;
          num = this.generateNum();
          var bool = false;

          if (!this.rows[rowIndex].includes(num)) {
            bool = true;
          }

          if (bool && !box.includes(num) && !this.columns[colIndex].flat().flat().includes(num)) {
            box.push(num);
            col.push(num);
            this.rows[rowIndex][colIndex] = num;
            this.ctx.fillText(num, x + 25, y + 45);
          } else {
            col.push("-");
            this.rows[rowIndex][colIndex] = "-";
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
    key: "recursiveSolver",
    value: function recursiveSolver() {}
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
  }, {
    key: "checkValues",
    value: function checkValues() {
      console.log("Checking columns: ", this.columns);
      console.log("Checking rows: ", this.rows);
      var box1 = [this.rows[0].slice(0, 3), this.rows[1].slice(0, 3), this.rows[2].slice(0, 3)];
      var box2 = [this.rows[3].slice(0, 3), this.rows[4].slice(0, 3), this.rows[5].slice(0, 3)];
      console.log("box1: ", box1);
      console.log("box2: ", box2);
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
b.placeNums(360, 180);
b.checkValues(); // b.genRows();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2JvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3N1ZG9rdS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiQm9hcmQiLCJjYW52YXMiLCJjdHgiLCJib3hlcyIsInJvd3MiLCJjb2x1bW5zIiwiZ2VuZXJhdGVOdW0iLCJiaW5kIiwiZHJhd0JveGVzIiwicGxhY2VOdW1zIiwiY2hlY2tWYWx1ZXMiLCJudW0iLCJNYXRoIiwiY2VpbCIsInJhbmRvbSIsImNvbnNvbGUiLCJsb2ciLCJiZWdpblBhdGgiLCJsaW5lV2lkdGgiLCJ4IiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwiY2xvc2VQYXRoIiwieSIsInJlY3QiLCJzdGFydFgiLCJzdGFydFkiLCJmb250IiwiYm94IiwiY29sSW5kZXgiLCJyb3dJbmRleCIsImNvbCIsImJvb2wiLCJpbmNsdWRlcyIsImZsYXQiLCJwdXNoIiwiZmlsbFRleHQiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwicm93IiwiZWwiLCJib3gxIiwic2xpY2UiLCJib3gyIiwibW9kdWxlIiwiZXhwb3J0cyIsInJlcXVpcmUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29udGV4dCIsInBhcnNpZnkiLCJhcnIiLCJvYmoiLCJmb3JFYWNoIiwibmV3QXJyIiwia2V5Iiwic3BsaXQiLCJwYXJzZUludCIsImRyYXdSZWN0IiwiY291bnQiLCJyb3cxIiwicm93MiIsInJvdzMiLCJyb3c0Iiwicm93NSIsInJvdzYiLCJyb3c3Iiwicm93OCIsInJvdzkiLCJjb2x1bW4xIiwiY29sdW1uMiIsImNvbHVtbjMiLCJjb2x1bW40IiwiY29sdW1uNSIsImNvbHVtbjYiLCJjb2x1bW43IiwiY29sdW1uOCIsImNvbHVtbjkiLCJjIiwibGFyZ2UiLCJiIiwiY2hlY2twb2ludCIsImNvbHMiLCJjb2wxIiwiY29sMiIsImNvbDMiLCJjb2w0IiwiY29sNSIsImNvbDYiLCJjb2w3IiwiY29sOCIsImNvbDkiLCJpIiwiaiIsImRyYXdPdXRsaW5lIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0NBRUEsMkI7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDSk1BLEs7QUFDSixpQkFBWUMsTUFBWixFQUFvQkMsR0FBcEIsRUFBeUI7QUFBQTs7QUFDdkIsU0FBS0MsS0FBTCxHQUFhO0FBQ1gsU0FBRyxFQURRO0FBRVgsU0FBRyxFQUZRO0FBR1gsU0FBRyxFQUhRO0FBSVgsU0FBRyxFQUpRO0FBS1gsU0FBRyxFQUxRO0FBTVgsU0FBRyxFQU5RO0FBT1gsU0FBRyxFQVBRO0FBUVgsU0FBRyxFQVJRO0FBU1gsU0FB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RSxTQUFGLENBQVksQ0FBWixFQUFjLEdBQWQ7QUFDQXlFLENBQUMsQ0FBQ3pFLFNBQUYsQ0FBWSxHQUFaLEVBQWdCLENBQWhCO0FBR0F5RSxDQUFDLENBQUN6RSxTQUFGLENBQVksR0FBWixFQUFnQixHQUFoQjtBQUNBeUUsQ0FBQyxDQUFDekUsU0FBRixDQUFZLEdBQVosRUFBZ0IsR0FBaEI7QUFHQXlFLENBQUMsQ0FBQ3hFLFdBQUYsRyxDQUlBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQXdFLENBQUMsQ0FBQ2MsV0FBRixHOzs7Ozs7Ozs7OztBQ2pPQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBpbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCAnLi9zY3JpcHRzL2JvYXJkLmpzJztcbmltcG9ydCAnLi9zY3JpcHRzL3N1ZG9rdS5qcyc7XG4vLyAnL3NyYy9zdHlsZXMvaW5kZXguc2NzcyciLCJjbGFzcyBCb2FyZCB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4KSB7XG4gICAgdGhpcy5ib3hlcyA9IHtcbiAgICAgIDA6IFtdLFxuICAgICAgMTogW10sXG4gICAgICAyOiBbXSxcbiAgICAgIDM6IFtdLFxuICAgICAgNDogW10sXG4gICAgICA1OiBbXSxcbiAgICAgIDY6IFtdLFxuICAgICAgNzogW10sXG4gICAgICA4OiBbXVxuICAgIH07ICBcbiAgICB0aGlzLnJvd3MgPSB7XG4gICAgICAwOiBbXSxcbiAgICAgIDE6IFtdLFxuICAgICAgMjogW10sXG4gICAgICAzOiBbXSxcbiAgICAgIDQ6IFtdLFxuICAgICAgNTogW10sXG4gICAgICA2OiBbXSxcbiAgICAgIDc6IFtdLFxuICAgICAgODogW11cbiAgICB9OyBcbiAgICB0aGlzLmNvbHVtbnMgPSB7IFxuICAgICAgMDogW10sIFxuICAgICAgMTogW10sIFxuICAgICAgMjogW10sIFxuICAgICAgMzogW10sIFxuICAgICAgNDogW10sIFxuICAgICAgNTogW10sIFxuICAgICAgNjogW10sIFxuICAgICAgNzogW10sIFxuICAgICAgODogW11cbiAgICB9OyBcblxuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuXG4gICAgdGhpcy5nZW5lcmF0ZU51bSA9IHRoaXMuZ2VuZXJhdGVOdW0uYmluZCh0aGlzKTtcbiAgICB0aGlzLmRyYXdCb3hlcyA9IHRoaXMuZHJhd0JveGVzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5wbGFjZU51bXMgPSB0aGlzLnBsYWNlTnVtcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hlY2tWYWx1ZXMgPSB0aGlzLmNoZWNrVmFsdWVzLmJpbmQodGhpcyk7XG4gIH1cbiAgXG4gIGdlbmVyYXRlTnVtKCkge1xuICAgIGxldCBudW0gPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgIGNvbnNvbGUubG9nKGBudW06ICR7bnVtfWApO1xuICAgIHJldHVybiBudW07IFxuICB9XG5cbiAgZHJhd091dGxpbmUoKSB7XG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jdHgubGluZVdpZHRoID0gNDsgXG5cbiAgICBmb3IgKGxldCB4ID0gMDsgeDw9NTQwOyB4Kz0xODApIHtcbiAgICAgIHRoaXMuY3R4Lm1vdmVUbyh4LDApO1xuICAgICAgdGhpcy5jdHgubGluZVRvKHgsIDU0MCk7XG5cbiAgICAgIHRoaXMuY3R4Lm1vdmVUbygwLHgpO1xuICAgICAgdGhpcy5jdHgubGluZVRvKDU0MCwgeCk7XG4gICAgfVxuXG4gICAgLy8gZm9yIChsZXQgeSA9IDA7IHk8PTU0MDsgeSs9MTgwKSB7XG4gICAgLy8gICB0aGlzLmN0eC5tb3ZlVG8oMCx5KTtcbiAgICAvLyAgIHRoaXMuY3R4LmxpbmVUbyg1NDAsIHkpO1xuICAgIC8vIH1cblxuICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gIH1cblxuICBkcmF3Qm94ZXMoKSB7XG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jdHgubGluZVdpZHRoID0gMC41O1xuICAgIGZvciAobGV0IHg9MDsgeCA8IDU0MDsgeCs9NjApIHtcbiAgICAgIGZvciAobGV0IHk9MDsgeTw1NDA7IHkrPTYwKSB7XG4gICAgICAgIHRoaXMuY3R4LnJlY3QoeCx5LDYwLDYwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7IFxuICB9XG5cbiAgcGxhY2VOdW1zKHN0YXJ0WCxzdGFydFkpIHtcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmN0eC5mb250ID0gXCIyMHB4IEFyaWFsXCI7XG5cbiAgICAvLyB4IGlzIDE4MCAtPiBjb3VudCA9IDMgYmMgNTQwLzkgPSA2MCBhbmQgMTgwLzYwID0gM1xuXG4gICAgbGV0IGJveCA9IFtdO1xuICAgIGxldCBjb2xJbmRleCA9IChzdGFydFgvNjApIC0gMTsgXG4gICAgXG4gICAgZm9yIChsZXQgeD1zdGFydFg7IHg8IChzdGFydFgrMTgwKTsgeCs9NjApIHtcbiAgICAgIFxuICAgICAgbGV0IHJvd0luZGV4ID0gKHN0YXJ0WS82MCktMTtcbiAgICAgIGNvbEluZGV4ICsrOyBcbiAgICAgIGxldCBjb2wgPSBbXTsgXG5cbiAgICAgIGZvciAobGV0IHk9c3RhcnRZOyB5PChzdGFydFkrMTgwKTsgeSs9NjApIHtcbiAgICAgICAgcm93SW5kZXgrKzsgXG5cbiAgICAgICAgbnVtID0gdGhpcy5nZW5lcmF0ZU51bSgpO1xuICAgICAgICBsZXQgYm9vbD1mYWxzZTsgXG4gICAgICAgIGlmICghdGhpcy5yb3dzW3Jvd0luZGV4XS5pbmNsdWRlcyhudW0pKSB7XG4gICAgICAgICAgYm9vbD10cnVlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoYm9vbCAmJiAhYm94LmluY2x1ZGVzKG51bSkgJiYgIXRoaXMuY29sdW1uc1tjb2xJbmRleF0uZmxhdCgpLmZsYXQoKS5pbmNsdWRlcyhudW0pKSB7XG4gICAgICAgICAgYm94LnB1c2gobnVtKTsgXG4gICAgICAgICAgY29sLnB1c2gobnVtKTtcbiAgICAgICAgICB0aGlzLnJvd3Nbcm93SW5kZXhdW2NvbEluZGV4XT0obnVtKTtcbiAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChudW0sIHggKyAyNSwgeSArIDQ1KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb2wucHVzaChcIi1cIik7XG4gICAgICAgICAgdGhpcy5yb3dzW3Jvd0luZGV4XVtjb2xJbmRleF09KFwiLVwiKTtcbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuY29sdW1uc1tjb2xJbmRleF0ucHVzaChjb2wpO1xuICAgICAgdGhpcy5jb2x1bW5zW2NvbEluZGV4XSA9IHRoaXMuY29sdW1uc1tjb2xJbmRleF0uZmxhdCgpO1xuXG4gICAgICBjb25zb2xlLmxvZyhgYm94OiBbJHtib3h9XWApO1xuICAgICAgY29uc29sZS5sb2coXCJDb2x1bW5zOiBcIiwgdGhpcy5jb2x1bW5zKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiY29sczpcIiwgT2JqZWN0LnZhbHVlcyh0aGlzLmNvbHVtbnMpLmZsYXQoKSk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJSb3dzOiBcIiwgdGhpcy5yb3dzKTtcbiAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgfVxuXG4gIHJlY3Vyc2l2ZVNvbHZlcigpIHtcblxuICB9XG5cblxuICBnZW5Sb3dzKCkge1xuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IE9iamVjdC5rZXlzKHRoaXMuY29sdW1ucykubGVuZ3RoOyBjb2wrKykge1xuICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgT2JqZWN0LmtleXModGhpcy5jb2x1bW5zKS5sZW5ndGg7IHJvdysrKSB7XG4gICAgICAgIGxldCBlbCA9IHRoaXMuY29sdW1uc1tyb3ddLmZsYXQoKVtjb2xdO1xuICAgICAgICB0aGlzLnJvd3NbY29sXS5wdXNoKGVsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coJ1Jvd3M6ICcsIHRoaXMucm93cyk7IFxuICAgIHJldHVybiB0aGlzLnJvd3M7XG4gIH1cblxuICBjaGVja1ZhbHVlcygpIHtcbiAgICBjb25zb2xlLmxvZyhcIkNoZWNraW5nIGNvbHVtbnM6IFwiLCB0aGlzLmNvbHVtbnMpO1xuICAgIGNvbnNvbGUubG9nKFwiQ2hlY2tpbmcgcm93czogXCIsIHRoaXMucm93cyk7XG4gICAgbGV0IGJveDEgPSBbIHRoaXMucm93c1swXS5zbGljZSgwLCAzKSwgdGhpcy5yb3dzWzFdLnNsaWNlKDAsIDMpLCB0aGlzLnJvd3NbMl0uc2xpY2UoMCwgMykgXTtcbiAgICBsZXQgYm94MiA9IFsgdGhpcy5yb3dzWzNdLnNsaWNlKDAsIDMpLCB0aGlzLnJvd3NbNF0uc2xpY2UoMCwgMyksIHRoaXMucm93c1s1XS5zbGljZSgwLCAzKSBdO1xuICAgIGNvbnNvbGUubG9nKFwiYm94MTogXCIsIGJveDEpO1xuICAgIGNvbnNvbGUubG9nKFwiYm94MjogXCIsIGJveDIpO1xuICB9XG5cbn07XG5cbi8vIGxldCBiID0gbmV3IEJvYXJkOyBcbi8vIGNvbnNvbGUubG9nKGIuZ2VuZXJhdGVOdW0oKSk7IFxuLy8gYi5nZW5lcmF0ZU51bSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJvYXJkOyBcblxuXG5cbi8vIGxldCBjb3VudCA9IDE7XG4vLyBsZXQgcm93cyA9IHsgMTogcm93MSA9IFtdLCAyOiByb3cyID0gW10sIDM6IHJvdzMgPSBbXSwgNDogcm93NCA9IFtdLCA1OiByb3c1ID0gW10sIDY6IHJvdzYgPSBbXSwgNzogcm93NyA9IFtdLCA4OiByb3c4ID0gW10sIDk6IHJvdzkgPSBbXSB9O1xuLy8gbGV0IGNvbHVtbnMgPSB7IDE6IGNvbHVtbjEgPSBbXSwgMjogY29sdW1uMiA9IFtdLCAzOiBjb2x1bW4zID0gW10sIDQ6IGNvbHVtbjQgPSBbXSwgNTogY29sdW1uNSA9IFtdLCA2OiBjb2x1bW42ID0gW10sIDc6IGNvbHVtbjcgPSBbXSwgODogY29sdW1uOCA9IFtdLCA5OiBjb2x1bW45ID0gW10gfVxuLy8gLy8gbGV0IGNvbHMgPSB7IDE6IGNvbDE9W10sIDI6IGNvbDI9W10sIDM6IGNvbDM9W10sIDQ6IGNvbDQ9W10sIDU6IGNvbDU9W10sIDY6IGNvbDY9W10sIDc6IGNvbDc9W10sIDg6IGNvbDg9W10sIDk6IGNvbDk9W10gfTtcblxuLy8gbGV0IGMgPSAwO1xuXG5cbi8vIGZvciAobGFyZ2UgPSAwOyBsYXJnZSA8IDU0MDsgbGFyZ2UgKz0gMTgwKSB7XG4vLyAgIGNvbnNvbGUubG9nKCdXICAgIFQgICAgIEYnKTtcbi8vICAgLy8gdGhpcyBpcyB0aGUgZW50aXJlIGxlZnQgc2lkZSAzIGJveGVzIGRvd246IFxuXG5cbi8vICAgZm9yIChiID0gMDsgYiA8IDE4MDsgYiArPSAxODApIHtcbi8vICAgICBjdHguc3Ryb2tlKCk7XG4vLyAgICAgbGV0IGJveCA9IFtdO1xuXG4vLyAgICAgLy8gdGhpcyBpcyBvbmUgYm94OiBcblxuLy8gICAgIGxldCBjaGVja3BvaW50ID0gMDtcblxuLy8gICAgIGZvciAoeCA9IGI7IHggPCBiICsgNTQwOyB4ICs9IDYwKSB7XG4vLyAgICAgICBjb25zb2xlLmxvZyhgY29sdW1uICR7Y291bnR9YCk7IGNvdW50Kys7XG4vLyAgICAgICBsZXQgY29sID0gW107XG5cbi8vICAgICAgIC8vIHRoaXMgZ29lcyBhY3Jvc3MgdGhlIHggYXhpcyAzIChvciA5IGRlcGVuZGluZyBvbiB0aGUgeCBsaW1pdCkgc3BhY2VzIGFuZCBnZW5lcmF0ZXMgZWFjaCBsaXR0bGUgY29sdW1uIGluIHRoZSBzbWFsbGJveC4gXG4vLyAgICAgICBjaGVja3BvaW50Kys7XG5cbi8vICAgICAgIGZvciAoeSA9IGxhcmdlOyB5IDwgKGxhcmdlICsgMTgwKTsgeSArPSA2MCkge1xuXG4vLyAgICAgICAgIC8vIHRoaXMgZ29lcyBkb3duIHRoZSB5IGF4aXMgKG9uZSAzeDMgYm94IGF0IGEgdGltZSkgYW5kIGFkZHMgbGl0dGxlIHNxdWFyZXMgdG8gY2FudmFzIGFuZCBudW1zIHRvIHRoZSBjb2wgdG8gYmUgYWRkZWQgdG8gdGhlIHNtYWxsYm94LiBcblxuLy8gICAgICAgICAvLyBJIG5lZWQgdG8gYWRkIHRoZSBjb2xzIHRvIGEgbGFyZ2VyIGNvbHVtbiBhbmQgY2hlY2sgZXZlcnkgdGltZSBJIGdvIHRvIHRoZSBuZXh0IGJveCBpZiB0aGUgY29sIGZyb20gdGhlIHByZXZpb3VzIGJveCBoYXMgdGhlIG51bXMuIGJlIGNhcmVmdWwgYWJvdXQgYWRkaW5nIHRvIGNvbHVtbjEsIGNvbHVtbjIsIG9yIGNvbHVtbjMuIFxuXG4vLyAgICAgICAgIGN0eC5yZWN0KHgsIHksIDYwLCA2MCk7XG4vLyAgICAgICAgIGN0eC5zdHJva2UoKTtcblxuLy8gICAgICAgICBsZXQgbnVtID0gZ2VuZXJhdGVOdW0oKTtcbi8vICAgICAgICAgbGV0IGJvb2wgPSBmYWxzZTtcblxuXG4vLyAgICAgICAgIGlmICghY29sdW1uc1tjaGVja3BvaW50XS5mbGF0KCkuaW5jbHVkZXMobnVtKSkge1xuLy8gICAgICAgICAgIGJvb2wgPSB0cnVlO1xuLy8gICAgICAgICB9O1xuXG4vLyAgICAgICAgIGlmICghYm94LmluY2x1ZGVzKG51bSkgJiYgYm9vbCkge1xuLy8gICAgICAgICAgIGNvbC5wdXNoKG51bSk7IGJveC5wdXNoKG51bSk7XG4vLyAgICAgICAgICAgY3R4LmZpbGxUZXh0KG51bSwgeCArIDI1LCB5ICsgNDUpO1xuLy8gICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgIGNvbC5wdXNoKFwiXCIpOyBib3gucHVzaChcIlwiKTtcbi8vICAgICAgICAgfVxuXG5cbi8vICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuLy8gICAgICAgfVxuLy8gICAgICAgY29sdW1uc1tjaGVja3BvaW50XS5wdXNoKGNvbCk7XG4vLyAgICAgfVxuLy8gICAgIGNvbnNvbGUubG9nKGBCb3g6ICR7Ym94fWApO1xuLy8gICB9XG4vLyB9XG5cbi8vIGxldCBjb2xzID0geyAxOiBjb2wxID0gW10sIDI6IGNvbDIgPSBbXSwgMzogY29sMyA9IFtdLCA0OiBjb2w0ID0gW10sIDU6IGNvbDUgPSBbXSwgNjogY29sNiA9IFtdLCA3OiBjb2w3ID0gW10sIDg6IGNvbDggPSBbXSwgOTogY29sOSA9IFtdIH07XG5cbi8vIGZvciAoaSA9IDE7IGkgPD0gOTsgaSsrKSB7XG4vLyAgIGNvbHNbaV0gPSBwYXJzaWZ5KGNvbHVtbnNbaV0pO1xuLy8gfTtcblxuLy8gZm9yIChpID0gMTsgaSA8PSA5OyBpKyspIHtcbi8vICAgLy8gY29uc29sZS5sb2coYGNvbCAke2l9OiAke2NvbHNbaV19YCk7XG4vLyAgIGNvbnNvbGUubG9nKGBjb2x1bW4gJHtpfTogJHtjb2x1bW5zW2ldfWApO1xuLy8gfVxuXG4vLyAvLyBsZXQgcm93cyA9IHsgMTogcm93MSwgMjogcm93MiwgMzogcm93MywgNDogcm93NCwgNTogcm93NSwgNjogcm93NiwgNzogcm93NywgODogcm93OCwgOTogcm93OSB9O1xuXG4vLyBmb3IgKGkgPSAxOyBpIDw9IDk7IGkrKykge1xuLy8gICBmb3IgKGogPSAxOyBqIDw9IDk7IGorKykge1xuLy8gICAgIHJvd3NbaV0ucHVzaChjb2xzW2pdW2kgLSAxXSk7XG4vLyAgIH1cbi8vIH07XG5cbi8vIGZvciAoaSA9IDE7IGkgPD0gOTsgaSsrKSB7XG4vLyAgIGNvbnNvbGUubG9nKGByb3cgJHtpfTogJHtyb3dzW2ldfWApO1xuLy8gfVxuIiwiY29uc3QgQm9hcmQgPSByZXF1aXJlKFwiLi9ib2FyZFwiKTtcblxubGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlDYW52YXNcIik7XG5sZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVOdW0oKSB7XG4gIGxldCBudW0gPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDkpO1xuICBjb25zb2xlLmxvZyhudW0pO1xuICByZXR1cm4gbnVtO1xufVxuXG4vLyBmdW5jdGlvbiBkcmF3U21hbGxCb3gobGVmdCwgcmlnaHQsIHRvcCwgYm90dG9tKSB7XG4vLyAgIGxldCBjb3VudCA9IDE7XG4vLyAgIGN0eC5iZWdpblBhdGgoKTtcbi8vICAgLy8gY3R4LmxpbmVXaWR0aCA9IDEwO1xuXG4vLyAgIGxldCByb3cxID0gW107XG4vLyAgIGxldCByb3cyID0gW107XG4vLyAgIGxldCByb3czID0gW107XG5cbi8vICAgY3R4LmZvbnQgPSBcIjIwcHggQXJpYWxcIjtcbi8vICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2JhKDAsMCwyNTUsMC41KVwiO1xuLy8gICBmb3IgKGIgPSBsZWZ0OyBiIDwgcmlnaHQ7IGIgKz0gMTgwKSB7XG4vLyAgICAgY3R4LnN0cm9rZSgpO1xuLy8gICAgIGxldCBib3ggPSBbXTtcbi8vICAgICBmb3IgKHggPSBiOyB4IDwgYiArIDE4MDsgeCArPSA2MCkge1xuLy8gICAgICAgY29uc29sZS5sb2coYGNvbHVtbiAke2NvdW50fWApOyBjb3VudCsrO1xuLy8gICAgICAgbGV0IGNvbCA9IFtdO1xuLy8gICAgICAgZm9yICh5ID0gdG9wOyB5IDwgYm90dG9tOyB5ICs9IDYwKSB7XG4vLyAgICAgICAgIGN0eC5yZWN0KHgsIHksIDYwLCA2MCk7XG4vLyAgICAgICAgIGxldCBudW0gPSBnZW5lcmF0ZU51bSgpO1xuLy8gICAgICAgICBpZiAoIWNvbC5pbmNsdWRlcyhudW0pICYmICFib3guaW5jbHVkZXMobnVtKSkge1xuLy8gICAgICAgICAgIGNvbC5wdXNoKG51bSk7IGJveC5wdXNoKG51bSk7XG4vLyAgICAgICAgICAgY3R4LmZvbnQgPSBcIjE1MHB4IEFyaWFsXCI7XG4vLyAgICAgICAgICAgY3R4LmZpbGxUZXh0KG51bSwgeCArIDI1LCB5ICsgNDUpO1xuLy8gICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgIGNvbC5wdXNoKFwiXCIpOyBib3gucHVzaChcIlwiKTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBjdHguc3Ryb2tlKCk7XG4vLyAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbi8vICAgICAgIH1cblxuLy8gICAgICAgaWYgKCFyb3cxLmluY2x1ZGVzKGNvbFswXSkpIHtcbi8vICAgICAgICAgcm93MS5wdXNoKGNvbFswXSk7XG4vLyAgICAgICB9O1xuLy8gICAgICAgaWYgKCFyb3cyLmluY2x1ZGVzKGNvbFsxXSkpIHtcbi8vICAgICAgICAgcm93Mi5wdXNoKGNvbFsxXSk7XG4vLyAgICAgICB9O1xuLy8gICAgICAgaWYgKCFyb3czLmluY2x1ZGVzKGNvbFsyXSkpIHtcbi8vICAgICAgICAgcm93My5wdXNoKGNvbFsyXSk7XG4vLyAgICAgICB9O1xuLy8gICAgIH1cbi8vICAgICBjb25zb2xlLmxvZyhgUm93IDE6ICR7cm93MX1gKTtcbi8vICAgICBjb25zb2xlLmxvZyhgUm93IDI6ICR7cm93Mn1gKTtcbi8vICAgICBjb25zb2xlLmxvZyhgUm93IDM6ICR7cm93M31gKTtcbi8vICAgICAvLyBjb25zb2xlLmxvZyhgQm94OiAke2JveH1gKTtcbi8vICAgICBjb25zb2xlLmxvZyhgYm94IGJldHdlZW4gbGVmdCwgJHtsZWZ0fSwgYW5kIHJpZ2h0LCAke3JpZ2h0fSwgY29tcGxldGUhIHdpdGg6IFske2JveH1dYCk7XG4vLyAgIH1cbi8vIH1cbi8vIGZ1bmN0aW9uIGRyYXdMYXJnZUJveCgpIHtcbi8vICAgZm9yIChsZWZ0ID0gMDsgbGVmdCA8IDU0MDsgbGVmdCArPSAxODApIHtcbi8vICAgICBkcmF3U21hbGxCb3gobGVmdCwgbGVmdCArIDE4MCwgMCwgMTgwKTtcbi8vICAgICBkcmF3U21hbGxCb3gobGVmdCwgbGVmdCArIDE4MCwgMTgwLCAzNjApO1xuLy8gICAgIGRyYXdTbWFsbEJveChsZWZ0LCBsZWZ0ICsgMTgwLCAzNjAsIDU0MCk7XG4vLyAgICAgLy8gY29uc29sZS5sb2coZHJhd1NtYWxsQm94LnJvdzEpXG4vLyAgIH1cbi8vIH07XG5cblxuXG5mdW5jdGlvbiBwYXJzaWZ5KGFycikge1xuICBsZXQgb2JqID0ge307XG4gIGFyci5mb3JFYWNoKGVsID0+IHtcbiAgICBvYmpbZWxdID0gdHJ1ZTtcbiAgfSlcbiAgbmV3QXJyID0gW107XG4gIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChrZXkgPT4ge1xuICAgIGtleS5zcGxpdCgnLCcpLmZvckVhY2goZWwgPT4ge1xuICAgICAgbmV3QXJyLnB1c2gocGFyc2VJbnQoZWwpKTtcbiAgICB9KVxuICB9KVxuICByZXR1cm4gbmV3QXJyO1xufVxuXG5mdW5jdGlvbiBkcmF3UmVjdCgpIHtcblxuICBsZXQgY291bnQgPSAxO1xuICBsZXQgcm93cyA9IHsgMTogcm93MSA9IFtdLCAyOiByb3cyID0gW10sIDM6IHJvdzMgPSBbXSwgNDogcm93NCA9IFtdLCA1OiByb3c1ID0gW10sIDY6IHJvdzYgPSBbXSwgNzogcm93NyA9IFtdLCA4OiByb3c4ID0gW10sIDk6IHJvdzkgPSBbXSB9O1xuICBsZXQgY29sdW1ucyA9IHsgMTogY29sdW1uMSA9IFtdLCAyOiBjb2x1bW4yID0gW10sIDM6IGNvbHVtbjMgPSBbXSwgNDogY29sdW1uNCA9IFtdLCA1OiBjb2x1bW41ID0gW10sIDY6IGNvbHVtbjYgPSBbXSwgNzogY29sdW1uNyA9IFtdLCA4OiBjb2x1bW44ID0gW10sIDk6IGNvbHVtbjkgPSBbXSB9XG4gIC8vIGxldCBjb2xzID0geyAxOiBjb2wxPVtdLCAyOiBjb2wyPVtdLCAzOiBjb2wzPVtdLCA0OiBjb2w0PVtdLCA1OiBjb2w1PVtdLCA2OiBjb2w2PVtdLCA3OiBjb2w3PVtdLCA4OiBjb2w4PVtdLCA5OiBjb2w5PVtdIH07XG5cbiAgbGV0IGMgPSAwO1xuXG4gIGN0eC5iZWdpblBhdGgoKTtcblxuICBmb3IgKGxhcmdlID0gMDsgbGFyZ2UgPCA1NDA7IGxhcmdlICs9IDE4MCkge1xuICAgIGNvbnNvbGUubG9nKCdXICAgIFQgICAgIEYnKTtcbiAgICAvLyB0aGlzIGlzIHRoZSBlbnRpcmUgbGVmdCBzaWRlIDMgYm94ZXMgZG93bjogXG5cblxuICAgIGZvciAoYiA9IDA7IGIgPCAxODA7IGIgKz0gMTgwKSB7XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICBsZXQgYm94ID0gW107XG5cbiAgICAgIC8vIHRoaXMgaXMgb25lIGJveDogXG5cbiAgICAgIGxldCBjaGVja3BvaW50ID0gMDtcblxuICAgICAgZm9yICh4ID0gYjsgeCA8IGIgKyA1NDA7IHggKz0gNjApIHtcbiAgICAgICAgY29uc29sZS5sb2coYGNvbHVtbiAke2NvdW50fWApOyBjb3VudCsrO1xuICAgICAgICBsZXQgY29sID0gW107XG5cbiAgICAgICAgLy8gdGhpcyBnb2VzIGFjcm9zcyB0aGUgeCBheGlzIDMgKG9yIDkgZGVwZW5kaW5nIG9uIHRoZSB4IGxpbWl0KSBzcGFjZXMgYW5kIGdlbmVyYXRlcyBlYWNoIGxpdHRsZSBjb2x1bW4gaW4gdGhlIHNtYWxsYm94LiBcbiAgICAgICAgY2hlY2twb2ludCsrO1xuXG4gICAgICAgIGZvciAoeSA9IGxhcmdlOyB5IDwgKGxhcmdlICsgMTgwKTsgeSArPSA2MCkge1xuXG4gICAgICAgICAgLy8gdGhpcyBnb2VzIGRvd24gdGhlIHkgYXhpcyAob25lIDN4MyBib3ggYXQgYSB0aW1lKSBhbmQgYWRkcyBsaXR0bGUgc3F1YXJlcyB0byBjYW52YXMgYW5kIG51bXMgdG8gdGhlIGNvbCB0byBiZSBhZGRlZCB0byB0aGUgc21hbGxib3guIFxuXG4gICAgICAgICAgLy8gSSBuZWVkIHRvIGFkZCB0aGUgY29scyB0byBhIGxhcmdlciBjb2x1bW4gYW5kIGNoZWNrIGV2ZXJ5IHRpbWUgSSBnbyB0byB0aGUgbmV4dCBib3ggaWYgdGhlIGNvbCBmcm9tIHRoZSBwcmV2aW91cyBib3ggaGFzIHRoZSBudW1zLiBiZSBjYXJlZnVsIGFib3V0IGFkZGluZyB0byBjb2x1bW4xLCBjb2x1bW4yLCBvciBjb2x1bW4zLiBcblxuICAgICAgICAgIGN0eC5yZWN0KHgsIHksIDYwLCA2MCk7XG4gICAgICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgbGV0IG51bSA9IGdlbmVyYXRlTnVtKCk7XG4gICAgICAgICAgbGV0IGJvb2wgPSBmYWxzZTtcblxuXG4gICAgICAgICAgaWYgKCFjb2x1bW5zW2NoZWNrcG9pbnRdLmZsYXQoKS5pbmNsdWRlcyhudW0pKSB7XG4gICAgICAgICAgICBib29sID0gdHJ1ZTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKCFib3guaW5jbHVkZXMobnVtKSAmJiBib29sKSB7XG4gICAgICAgICAgICBjb2wucHVzaChudW0pOyBib3gucHVzaChudW0pO1xuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KG51bSwgeCArIDI1LCB5ICsgNDUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb2wucHVzaChcIlwiKTsgYm94LnB1c2goXCJcIik7XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29sdW1uc1tjaGVja3BvaW50XS5wdXNoKGNvbCk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhgQm94OiAke2JveH1gKTtcbiAgICB9XG4gIH1cblxuICBsZXQgY29scyA9IHsgMTogY29sMSA9IFtdLCAyOiBjb2wyID0gW10sIDM6IGNvbDMgPSBbXSwgNDogY29sNCA9IFtdLCA1OiBjb2w1ID0gW10sIDY6IGNvbDYgPSBbXSwgNzogY29sNyA9IFtdLCA4OiBjb2w4ID0gW10sIDk6IGNvbDkgPSBbXSB9O1xuXG4gIGZvciAoaSA9IDE7IGkgPD0gOTsgaSsrKSB7XG4gICAgY29sc1tpXSA9IHBhcnNpZnkoY29sdW1uc1tpXSk7XG4gIH07XG5cbiAgZm9yIChpID0gMTsgaSA8PSA5OyBpKyspIHtcbiAgICAvLyBjb25zb2xlLmxvZyhgY29sICR7aX06ICR7Y29sc1tpXX1gKTtcbiAgICBjb25zb2xlLmxvZyhgY29sdW1uICR7aX06ICR7Y29sdW1uc1tpXX1gKTtcbiAgfVxuXG4gIC8vIGxldCByb3dzID0geyAxOiByb3cxLCAyOiByb3cyLCAzOiByb3czLCA0OiByb3c0LCA1OiByb3c1LCA2OiByb3c2LCA3OiByb3c3LCA4OiByb3c4LCA5OiByb3c5IH07XG5cbiAgZm9yIChpID0gMTsgaSA8PSA5OyBpKyspIHtcbiAgICBmb3IgKGogPSAxOyBqIDw9IDk7IGorKykge1xuICAgICAgcm93c1tpXS5wdXNoKGNvbHNbal1baSAtIDFdKTtcbiAgICB9XG4gIH07XG5cbiAgZm9yIChpID0gMTsgaSA8PSA5OyBpKyspIHtcbiAgICBjb25zb2xlLmxvZyhgcm93ICR7aX06ICR7cm93c1tpXX1gKTtcbiAgfVxuXG59XG5cbi8vIGRyYXdSZWN0KCk7XG5cblxuICAgIC8vIGRyYXdMYXJnZUJveCgpO1xuXG4gICAgLy8gZHJhd1NtYWxsQm94KDAsIDE4MCwgMCwgMTgwKTtcblxuXG4gICAgLy8gZHJhd1NtYWxsQm94KCk7XG4gICAgLy8gU3Vkb2t1LmRyYXdMYXJnZUJveDtcbiAgICAvLyBzZXRJbnRlcnZhbChkcmF3UmVjdCwgNDApO1xuXG5cblxubGV0IGIgPSBuZXcgQm9hcmQoY2FudmFzLGN0eCk7XG5iLmdlbmVyYXRlTnVtKCk7XG5cblxuLy8gYi5kcmF3QmFsbCgpO1xuYi5kcmF3Qm94ZXMoKTtcbi8vIGIuZHJhd0JvYXJkKCk7XG5iLnBsYWNlTnVtcygxODAsMTgwKTtcblxuYi5wbGFjZU51bXMoMCwwKTtcbmIucGxhY2VOdW1zKDM2MCwzNjApO1xuXG5iLnBsYWNlTnVtcygwLDM2MCk7XG5iLnBsYWNlTnVtcygzNjAsMCk7XG5cblxuXG5iLnBsYWNlTnVtcygwLDE4MCk7XG5iLnBsYWNlTnVtcygxODAsMCk7XG5cblxuYi5wbGFjZU51bXMoMTgwLDM2MCk7XG5iLnBsYWNlTnVtcygzNjAsMTgwKTtcblxuXG5iLmNoZWNrVmFsdWVzKCk7XG5cblxuXG4vLyBiLmdlblJvd3MoKTtcblxuLy8gYi5wbGFjZU51bXMoMCwwKTtcblxuLy8gYi5wbGFjZU51bXMoMTgwLCAxODApO1xuLy8gYi5wbGFjZU51bXMoMCwgMTgwKTtcbi8vIGIucGxhY2VOdW1zKDAsIDM2MCk7XG4vLyBiLnBsYWNlTnVtcygxODAsIDApO1xuXG5iLmRyYXdPdXRsaW5lKCk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==