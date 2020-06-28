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
    this.checkValues = this.checkValues.bind(this); // this.clearBoard = this.clearBoard.bind(this);
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
          num = this.generateNum(); //  Since I'm building a box one column at a time, the following boolean variable checks that the number isn't already in the row (whether added while building a different box or added while building this box)

          var bool = false;

          if (!this.rows[rowIndex].includes(num)) {
            bool = true;
          } // Roll a dice to limit the number placements to the board to reduce the risk of building an unsolvable board 


          var diceRoll = false;
          var coin = Math.ceil(Math.random() * 6);

          if (coin === 1) {
            diceRoll = true;
          }

          if (diceRoll && bool && !box.includes(num) && !this.columns[colIndex].flat().flat().includes(num)) {
            box.push(num);
            col.push(num);
            this.rows[rowIndex][colIndex] = num;
            this.ctx.fillText(num, x + 25, y + 45);
          } else {
            col.push(0);
            this.rows[rowIndex][colIndex] = 0;
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
      var box3 = [this.rows[6].slice(0, 3), this.rows[7].slice(0, 3), this.rows[8].slice(0, 3)];
      var box4 = [this.rows[0].slice(3, 6), this.rows[1].slice(3, 6), this.rows[2].slice(3, 6)];
      var box5 = [this.rows[3].slice(3, 6), this.rows[4].slice(3, 6), this.rows[5].slice(3, 6)];
      var box6 = [this.rows[6].slice(3, 6), this.rows[7].slice(3, 6), this.rows[8].slice(3, 6)];
      var box7 = [this.rows[0].slice(6, 9), this.rows[1].slice(6, 9), this.rows[2].slice(6, 9)];
      var box8 = [this.rows[3].slice(6, 9), this.rows[4].slice(6, 9), this.rows[5].slice(6, 9)];
      var box9 = [this.rows[6].slice(6, 9), this.rows[7].slice(6, 9), this.rows[8].slice(6, 9)];
      console.log("box1: ", box1);
      console.log("box2: ", box2);
      console.log("box3: ", box3);
      console.log("box4: ", box4);
      console.log("box5: ", box5);
      console.log("box6: ", box6);
      console.log("box7: ", box7);
      console.log("box8: ", box8);
      console.log("box9: ", box9);
    } // clearBoard() {
    //   clearRect(0, 0, 540, 540);
    // }

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
            col.push(0);
            box.push(0);
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


var sudoku = document.getElementById("resetBoard");
sudoku.onclick = launchSudoku; // clearBoard() {
//   clearRect(0, 0, 540, 540);
// }

function launchSudoku() {
  // let canvas = document.getElementById("myCanvas");
  // let ctx = canvas.getContext("2d");
  // ctx.clearBoard();
  // ctx.beginPath();
  ctx.clearRect(0, 0, 540, 540); // ctx.closePath();

  alert("New Board! ");
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
} // document.getElementById("resetBoard").onclick = launchSudoku();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2JvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3N1ZG9rdS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiQm9hcmQiLCJjYW52YXMiLCJjdHgiLCJib3hlcyIsInJvd3MiLCJjb2x1bW5zIiwiZ2VuZXJhdGVOdW0iLCJiaW5kIiwiZHJhd0JveGVzIiwicGxhY2VOdW1zIiwiY2hlY2tWYWx1ZXMiLCJudW0iLCJNYXRoIiwiY2VpbCIsInJhbmRvbSIsImNvbnNvbGUiLCJsb2ciLCJiZWdpblBhdGgiLCJsaW5lV2lkdGgiLCJ4IiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwiY2xvc2VQYXRoIiwieSIsInJlY3QiLCJzdGFydFgiLCJzdGFydFkiLCJmb250IiwiYm94IiwiY29sSW5kZXgiLCJyb3dJbmRleCIsImNvbCIsImJvb2wiLCJpbmNsdWRlcyIsImRpY2VSb2xsIiwiY29pbiIsImZsYXQiLCJwdXNoIiwiZmlsbFRleHQiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwicm93IiwiZWwiLCJib3gxIiwic2xpY2UiLCJib3gyIiwiYm94MyIsImJveDQiLCJib3g1IiwiYm94NiIsImJveDciLCJib3g4IiwiYm94OSIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZXF1aXJlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJwYXJzaWZ5IiwiYXJyIiwib2JqIiwiZm9yRWFjaCIsIm5ld0FyciIsImtleSIsInNwbGl0IiwicGFyc2VJbnQiLCJkcmF3UmVjdCIsImNvdW50Iiwicm93MSIsInJvdzIiLCJyb3czIiwicm93NCIsInJvdzUiLCJyb3c2Iiwicm93NyIsInJvdzgiLCJyb3c5IiwiY29sdW1uMSIsImNvbHVtbjIiLCJjb2x1bW4zIiwiY29sdW1uNCIsImNvbHVtbjUiLCJjb2x1bW42IiwiY29sdW1uNyIsImNvbHVtbjgiLCJjb2x1bW45IiwiYyIsImxhcmdlIiwiYiIsImNoZWNrcG9pbnQiLCJjb2xzIiwiY29sMSIsImNvbDIiLCJjb2wzIiwiY29sNCIsImNvbDUiLCJjb2w2IiwiY29sNyIsImNvbDgiLCJjb2w5IiwiaSIsImoiLCJzdWRva3UiLCJvbmNsaWNrIiwibGF1bmNoU3Vkb2t1IiwiY2xlYXJSZWN0IiwiYWxlcnQiLCJkcmF3T3V0bGluZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtDQUVBLDJCOzs7Ozs7Ozs7Ozs7Ozs7OztJQ0pNQSxLO0FBQ0osaUJBQVlDLE1BQVosRUFBb0JDLEdBQXBCLEVBQXlCO0FBQUE7O0FBQ3ZCLFNBQUtDLEtBQUwsR0FBYTtBQUNYLFNB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QUFMLENBQVUsQ0FBVixFQUFhMEMsS0FBYixDQUFtQixDQUFuQixFQUFzQixDQUF0QixDQUFGLEVBQTRCLEtBQUsxQyxJQUFMLENBQVUsQ0FBVixFQUFhMEMsS0FBYixDQUFtQixDQUFuQixFQUFzQixDQUF0QixDQUE1QixFQUFzRCxLQUFLMUMsSUFBTCxDQUFVLENBQVYsRUFBYTBDLEtBQWIsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsQ0FBdEQsQ0FBWDtBQUVBLFVBQUlHLElBQUksR0FBRyxDQUFFLEtBQUs3QyxJQUFMLENBQVUsQ0FBVixFQUFhMEMsS0FBYixDQUFtQixDQUFuQixFQUFzQixDQUF0QixDQUFGLEVBQTRCLEtBQUsxQyxJQUFMLENBQVUsQ0FBVixFQUFhMEMsS0FBYixDQUFtQixDQUFuQixFQUFzQixDQUF0QixDQUE1QixFQUFzRCxLQUFLMUMsSUFBTCxDQUFVLENBQVYsRUFBYTBDLEtBQWIsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsQ0FBdEQsQ0FBWDtBQUNBLFVBQUlJLElBQUksR0FBRyxDQUFFLEtBQUs5QyxJQUFMLENBQVUsQ0FBVixFQUFhMEMsS0FBYixDQUFtQixDQUFuQixFQUFzQixDQUF0QixDQUFGLEVBQTRCLEtBQUsxQyxJQUFMLENBQVUsQ0FBVixFQUFhMEMsS0FBYixDQUFtQixDQUFuQixFQUFzQixDQUF0QixDQUE1QixFQUFzRCxLQUFLMUMsSUFBTCxDQUFVLENBQVYsRUFBYTBDLEtBQWIsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsQ0FBdEQsQ0FBWDtBQUNBLFVBQUlLLElBQUksR0FBRyxDQUFFLEtBQUsvQyxJQUFMLENBQVUsQ0FBVixFQUFhMEMsS0FBYixDQUFtQixDQUFuQixFQUFzQixDQUF0QixDQUFGLEVBQTRCLEtBQUsxQyxJQUFMLENBQVUsQ0FBVixFQUFhMEMsS0FBYixDQUFtQixDQUFuQixFQUFzQixDQUF0QixDQUE1QixFQUFzRCxLQUFLMUMsSUFBTCxDQUFVLENBQVYsRUFBYTBDLEtBQWIsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsQ0FBdEQsQ0FB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LENBQVksR0FBWixFQUFnQixHQUFoQjtBQUNBa0YsR0FBQyxDQUFDbEYsU0FBRixDQUFZLEdBQVosRUFBZ0IsR0FBaEI7QUFHQWtGLEdBQUMsQ0FBQ2pGLFdBQUYsR0FsQ3VCLENBc0N2QjtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUFpRixHQUFDLENBQUNtQixXQUFGO0FBRUQsQyxDQUdELGtFOzs7Ozs7Ozs7OztBQ3ZQQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBpbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCAnLi9zY3JpcHRzL2JvYXJkLmpzJztcbmltcG9ydCAnLi9zY3JpcHRzL3N1ZG9rdS5qcyc7XG4vLyAnL3NyYy9zdHlsZXMvaW5kZXguc2NzcyciLCJjbGFzcyBCb2FyZCB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4KSB7XG4gICAgdGhpcy5ib3hlcyA9IHtcbiAgICAgIDA6IFtdLFxuICAgICAgMTogW10sXG4gICAgICAyOiBbXSxcbiAgICAgIDM6IFtdLFxuICAgICAgNDogW10sXG4gICAgICA1OiBbXSxcbiAgICAgIDY6IFtdLFxuICAgICAgNzogW10sXG4gICAgICA4OiBbXVxuICAgIH07ICBcbiAgICB0aGlzLnJvd3MgPSB7XG4gICAgICAwOiBbXSxcbiAgICAgIDE6IFtdLFxuICAgICAgMjogW10sXG4gICAgICAzOiBbXSxcbiAgICAgIDQ6IFtdLFxuICAgICAgNTogW10sXG4gICAgICA2OiBbXSxcbiAgICAgIDc6IFtdLFxuICAgICAgODogW11cbiAgICB9OyBcbiAgICB0aGlzLmNvbHVtbnMgPSB7IFxuICAgICAgMDogW10sIFxuICAgICAgMTogW10sIFxuICAgICAgMjogW10sIFxuICAgICAgMzogW10sIFxuICAgICAgNDogW10sIFxuICAgICAgNTogW10sIFxuICAgICAgNjogW10sIFxuICAgICAgNzogW10sIFxuICAgICAgODogW11cbiAgICB9OyBcblxuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuXG4gICAgdGhpcy5nZW5lcmF0ZU51bSA9IHRoaXMuZ2VuZXJhdGVOdW0uYmluZCh0aGlzKTtcbiAgICB0aGlzLmRyYXdCb3hlcyA9IHRoaXMuZHJhd0JveGVzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5wbGFjZU51bXMgPSB0aGlzLnBsYWNlTnVtcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hlY2tWYWx1ZXMgPSB0aGlzLmNoZWNrVmFsdWVzLmJpbmQodGhpcyk7XG4gICAgLy8gdGhpcy5jbGVhckJvYXJkID0gdGhpcy5jbGVhckJvYXJkLmJpbmQodGhpcyk7XG4gIH1cbiAgXG4gIGdlbmVyYXRlTnVtKCkge1xuICAgIGxldCBudW0gPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgIGNvbnNvbGUubG9nKGBudW06ICR7bnVtfWApO1xuICAgIHJldHVybiBudW07IFxuICB9XG5cbiAgZHJhd091dGxpbmUoKSB7XG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jdHgubGluZVdpZHRoID0gNDsgXG5cbiAgICBmb3IgKGxldCB4ID0gMDsgeDw9NTQwOyB4Kz0xODApIHtcbiAgICAgIHRoaXMuY3R4Lm1vdmVUbyh4LDApO1xuICAgICAgdGhpcy5jdHgubGluZVRvKHgsIDU0MCk7XG5cbiAgICAgIHRoaXMuY3R4Lm1vdmVUbygwLHgpO1xuICAgICAgdGhpcy5jdHgubGluZVRvKDU0MCwgeCk7XG4gICAgfVxuXG4gICAgLy8gZm9yIChsZXQgeSA9IDA7IHk8PTU0MDsgeSs9MTgwKSB7XG4gICAgLy8gICB0aGlzLmN0eC5tb3ZlVG8oMCx5KTtcbiAgICAvLyAgIHRoaXMuY3R4LmxpbmVUbyg1NDAsIHkpO1xuICAgIC8vIH1cblxuICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gIH1cblxuICBkcmF3Qm94ZXMoKSB7XG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jdHgubGluZVdpZHRoID0gMC41O1xuICAgIGZvciAobGV0IHg9MDsgeCA8IDU0MDsgeCs9NjApIHtcbiAgICAgIGZvciAobGV0IHk9MDsgeTw1NDA7IHkrPTYwKSB7XG4gICAgICAgIHRoaXMuY3R4LnJlY3QoeCx5LDYwLDYwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7IFxuICB9XG5cbiAgcGxhY2VOdW1zKHN0YXJ0WCxzdGFydFkpIHtcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmN0eC5mb250ID0gXCIyMHB4IEFyaWFsXCI7XG5cbiAgICAvLyB4IGlzIDE4MCAtPiBjb3VudCA9IDMgYmMgNTQwLzkgPSA2MCBhbmQgMTgwLzYwID0gM1xuXG4gICAgbGV0IGJveCA9IFtdO1xuICAgIGxldCBjb2xJbmRleCA9IChzdGFydFgvNjApIC0gMTsgXG4gICAgXG4gICAgZm9yIChsZXQgeD1zdGFydFg7IHg8IChzdGFydFgrMTgwKTsgeCs9NjApIHtcbiAgICAgIFxuICAgICAgbGV0IHJvd0luZGV4ID0gKHN0YXJ0WS82MCktMTtcbiAgICAgIGNvbEluZGV4ICsrOyBcbiAgICAgIGxldCBjb2wgPSBbXTsgXG5cbiAgICAgIGZvciAobGV0IHk9c3RhcnRZOyB5PChzdGFydFkrMTgwKTsgeSs9NjApIHtcbiAgICAgICAgcm93SW5kZXgrKzsgXG5cbiAgICAgICAgbnVtID0gdGhpcy5nZW5lcmF0ZU51bSgpO1xuXG4gICAgICAgIC8vICBTaW5jZSBJJ20gYnVpbGRpbmcgYSBib3ggb25lIGNvbHVtbiBhdCBhIHRpbWUsIHRoZSBmb2xsb3dpbmcgYm9vbGVhbiB2YXJpYWJsZSBjaGVja3MgdGhhdCB0aGUgbnVtYmVyIGlzbid0IGFscmVhZHkgaW4gdGhlIHJvdyAod2hldGhlciBhZGRlZCB3aGlsZSBidWlsZGluZyBhIGRpZmZlcmVudCBib3ggb3IgYWRkZWQgd2hpbGUgYnVpbGRpbmcgdGhpcyBib3gpXG5cbiAgICAgICAgbGV0IGJvb2w9ZmFsc2U7IFxuICAgICAgICBpZiAoIXRoaXMucm93c1tyb3dJbmRleF0uaW5jbHVkZXMobnVtKSkge1xuICAgICAgICAgIGJvb2w9dHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJvbGwgYSBkaWNlIHRvIGxpbWl0IHRoZSBudW1iZXIgcGxhY2VtZW50cyB0byB0aGUgYm9hcmQgdG8gcmVkdWNlIHRoZSByaXNrIG9mIGJ1aWxkaW5nIGFuIHVuc29sdmFibGUgYm9hcmQgXG5cbiAgICAgICAgbGV0IGRpY2VSb2xsID0gZmFsc2U7IFxuICAgICAgICBsZXQgY29pbiA9IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpKjYpO1xuICAgICAgICBpZiAoY29pbiA9PT0xKSB7XG4gICAgICAgICAgZGljZVJvbGwgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoZGljZVJvbGwgJiYgYm9vbCAmJiAhYm94LmluY2x1ZGVzKG51bSkgJiYgIXRoaXMuY29sdW1uc1tjb2xJbmRleF0uZmxhdCgpLmZsYXQoKS5pbmNsdWRlcyhudW0pKSB7XG4gICAgICAgICAgYm94LnB1c2gobnVtKTsgXG4gICAgICAgICAgY29sLnB1c2gobnVtKTtcbiAgICAgICAgICB0aGlzLnJvd3Nbcm93SW5kZXhdW2NvbEluZGV4XT0gbnVtIDtcbiAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChudW0sIHggKyAyNSwgeSArIDQ1KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb2wucHVzaCgwKTtcbiAgICAgICAgICB0aGlzLnJvd3Nbcm93SW5kZXhdW2NvbEluZGV4XT0gMCA7XG4gICAgICAgIH1cblxuICAgICAgfVxuXG4gICAgICB0aGlzLmNvbHVtbnNbY29sSW5kZXhdLnB1c2goY29sKTtcbiAgICAgIHRoaXMuY29sdW1uc1tjb2xJbmRleF0gPSB0aGlzLmNvbHVtbnNbY29sSW5kZXhdLmZsYXQoKTtcblxuICAgICAgY29uc29sZS5sb2coYGJveDogWyR7Ym94fV1gKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29sdW1uczogXCIsIHRoaXMuY29sdW1ucyk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImNvbHM6XCIsIE9iamVjdC52YWx1ZXModGhpcy5jb2x1bW5zKS5mbGF0KCkpO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKFwiUm93czogXCIsIHRoaXMucm93cyk7XG4gICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gIH1cblxuICByZWN1cnNpdmVTb2x2ZXIoKSB7XG5cbiAgfVxuXG5cbiAgZ2VuUm93cygpIHtcbiAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBPYmplY3Qua2V5cyh0aGlzLmNvbHVtbnMpLmxlbmd0aDsgY29sKyspIHtcbiAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IE9iamVjdC5rZXlzKHRoaXMuY29sdW1ucykubGVuZ3RoOyByb3crKykge1xuICAgICAgICBsZXQgZWwgPSB0aGlzLmNvbHVtbnNbcm93XS5mbGF0KClbY29sXTtcbiAgICAgICAgdGhpcy5yb3dzW2NvbF0ucHVzaChlbCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKCdSb3dzOiAnLCB0aGlzLnJvd3MpOyBcbiAgICByZXR1cm4gdGhpcy5yb3dzO1xuICB9XG5cbiAgY2hlY2tWYWx1ZXMoKSB7XG4gICAgY29uc29sZS5sb2coXCJDaGVja2luZyBjb2x1bW5zOiBcIiwgdGhpcy5jb2x1bW5zKTtcbiAgICBjb25zb2xlLmxvZyhcIkNoZWNraW5nIHJvd3M6IFwiLCB0aGlzLnJvd3MpO1xuICAgIGxldCBib3gxID0gWyB0aGlzLnJvd3NbMF0uc2xpY2UoMCwgMyksIHRoaXMucm93c1sxXS5zbGljZSgwLCAzKSwgdGhpcy5yb3dzWzJdLnNsaWNlKDAsIDMpIF07XG4gICAgbGV0IGJveDIgPSBbIHRoaXMucm93c1szXS5zbGljZSgwLCAzKSwgdGhpcy5yb3dzWzRdLnNsaWNlKDAsIDMpLCB0aGlzLnJvd3NbNV0uc2xpY2UoMCwgMykgXTtcbiAgICBsZXQgYm94MyA9IFsgdGhpcy5yb3dzWzZdLnNsaWNlKDAsIDMpLCB0aGlzLnJvd3NbN10uc2xpY2UoMCwgMyksIHRoaXMucm93c1s4XS5zbGljZSgwLCAzKSBdO1xuICAgIFxuICAgIGxldCBib3g0ID0gWyB0aGlzLnJvd3NbMF0uc2xpY2UoMywgNiksIHRoaXMucm93c1sxXS5zbGljZSgzLCA2KSwgdGhpcy5yb3dzWzJdLnNsaWNlKDMsIDYpIF07XG4gICAgbGV0IGJveDUgPSBbIHRoaXMucm93c1szXS5zbGljZSgzLCA2KSwgdGhpcy5yb3dzWzRdLnNsaWNlKDMsIDYpLCB0aGlzLnJvd3NbNV0uc2xpY2UoMywgNikgXTtcbiAgICBsZXQgYm94NiA9IFsgdGhpcy5yb3dzWzZdLnNsaWNlKDMsIDYpLCB0aGlzLnJvd3NbN10uc2xpY2UoMywgNiksIHRoaXMucm93c1s4XS5zbGljZSgzLCA2KSBdO1xuXG4gICAgbGV0IGJveDcgPSBbIHRoaXMucm93c1swXS5zbGljZSg2LCA5KSwgdGhpcy5yb3dzWzFdLnNsaWNlKDYsIDkpLCB0aGlzLnJvd3NbMl0uc2xpY2UoNiwgOSkgXTtcbiAgICBsZXQgYm94OCA9IFsgdGhpcy5yb3dzWzNdLnNsaWNlKDYsIDkpLCB0aGlzLnJvd3NbNF0uc2xpY2UoNiwgOSksIHRoaXMucm93c1s1XS5zbGljZSg2LCA5KSBdO1xuICAgIGxldCBib3g5ID0gWyB0aGlzLnJvd3NbNl0uc2xpY2UoNiwgOSksIHRoaXMucm93c1s3XS5zbGljZSg2LCA5KSwgdGhpcy5yb3dzWzhdLnNsaWNlKDYsIDkpIF07XG5cbiAgICBjb25zb2xlLmxvZyhcImJveDE6IFwiLCBib3gxKTtcbiAgICBjb25zb2xlLmxvZyhcImJveDI6IFwiLCBib3gyKTtcbiAgICBjb25zb2xlLmxvZyhcImJveDM6IFwiLCBib3gzKTtcblxuICAgIGNvbnNvbGUubG9nKFwiYm94NDogXCIsIGJveDQpO1xuICAgIGNvbnNvbGUubG9nKFwiYm94NTogXCIsIGJveDUpO1xuICAgIGNvbnNvbGUubG9nKFwiYm94NjogXCIsIGJveDYpO1xuXG4gICAgY29uc29sZS5sb2coXCJib3g3OiBcIiwgYm94Nyk7XG4gICAgY29uc29sZS5sb2coXCJib3g4OiBcIiwgYm94OCk7XG4gICAgY29uc29sZS5sb2coXCJib3g5OiBcIiwgYm94OSk7XG5cbiAgfVxuXG4gIC8vIGNsZWFyQm9hcmQoKSB7XG4gIC8vICAgY2xlYXJSZWN0KDAsIDAsIDU0MCwgNTQwKTtcbiAgLy8gfVxuXG59O1xuXG4vLyBsZXQgYiA9IG5ldyBCb2FyZDsgXG4vLyBjb25zb2xlLmxvZyhiLmdlbmVyYXRlTnVtKCkpOyBcbi8vIGIuZ2VuZXJhdGVOdW0oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBCb2FyZDsgXG5cblxuXG4vLyBsZXQgY291bnQgPSAxO1xuLy8gbGV0IHJvd3MgPSB7IDE6IHJvdzEgPSBbXSwgMjogcm93MiA9IFtdLCAzOiByb3czID0gW10sIDQ6IHJvdzQgPSBbXSwgNTogcm93NSA9IFtdLCA2OiByb3c2ID0gW10sIDc6IHJvdzcgPSBbXSwgODogcm93OCA9IFtdLCA5OiByb3c5ID0gW10gfTtcbi8vIGxldCBjb2x1bW5zID0geyAxOiBjb2x1bW4xID0gW10sIDI6IGNvbHVtbjIgPSBbXSwgMzogY29sdW1uMyA9IFtdLCA0OiBjb2x1bW40ID0gW10sIDU6IGNvbHVtbjUgPSBbXSwgNjogY29sdW1uNiA9IFtdLCA3OiBjb2x1bW43ID0gW10sIDg6IGNvbHVtbjggPSBbXSwgOTogY29sdW1uOSA9IFtdIH1cbi8vIC8vIGxldCBjb2xzID0geyAxOiBjb2wxPVtdLCAyOiBjb2wyPVtdLCAzOiBjb2wzPVtdLCA0OiBjb2w0PVtdLCA1OiBjb2w1PVtdLCA2OiBjb2w2PVtdLCA3OiBjb2w3PVtdLCA4OiBjb2w4PVtdLCA5OiBjb2w5PVtdIH07XG5cbi8vIGxldCBjID0gMDtcblxuXG4vLyBmb3IgKGxhcmdlID0gMDsgbGFyZ2UgPCA1NDA7IGxhcmdlICs9IDE4MCkge1xuLy8gICBjb25zb2xlLmxvZygnVyAgICBUICAgICBGJyk7XG4vLyAgIC8vIHRoaXMgaXMgdGhlIGVudGlyZSBsZWZ0IHNpZGUgMyBib3hlcyBkb3duOiBcblxuXG4vLyAgIGZvciAoYiA9IDA7IGIgPCAxODA7IGIgKz0gMTgwKSB7XG4vLyAgICAgY3R4LnN0cm9rZSgpO1xuLy8gICAgIGxldCBib3ggPSBbXTtcblxuLy8gICAgIC8vIHRoaXMgaXMgb25lIGJveDogXG5cbi8vICAgICBsZXQgY2hlY2twb2ludCA9IDA7XG5cbi8vICAgICBmb3IgKHggPSBiOyB4IDwgYiArIDU0MDsgeCArPSA2MCkge1xuLy8gICAgICAgY29uc29sZS5sb2coYGNvbHVtbiAke2NvdW50fWApOyBjb3VudCsrO1xuLy8gICAgICAgbGV0IGNvbCA9IFtdO1xuXG4vLyAgICAgICAvLyB0aGlzIGdvZXMgYWNyb3NzIHRoZSB4IGF4aXMgMyAob3IgOSBkZXBlbmRpbmcgb24gdGhlIHggbGltaXQpIHNwYWNlcyBhbmQgZ2VuZXJhdGVzIGVhY2ggbGl0dGxlIGNvbHVtbiBpbiB0aGUgc21hbGxib3guIFxuLy8gICAgICAgY2hlY2twb2ludCsrO1xuXG4vLyAgICAgICBmb3IgKHkgPSBsYXJnZTsgeSA8IChsYXJnZSArIDE4MCk7IHkgKz0gNjApIHtcblxuLy8gICAgICAgICAvLyB0aGlzIGdvZXMgZG93biB0aGUgeSBheGlzIChvbmUgM3gzIGJveCBhdCBhIHRpbWUpIGFuZCBhZGRzIGxpdHRsZSBzcXVhcmVzIHRvIGNhbnZhcyBhbmQgbnVtcyB0byB0aGUgY29sIHRvIGJlIGFkZGVkIHRvIHRoZSBzbWFsbGJveC4gXG5cbi8vICAgICAgICAgLy8gSSBuZWVkIHRvIGFkZCB0aGUgY29scyB0byBhIGxhcmdlciBjb2x1bW4gYW5kIGNoZWNrIGV2ZXJ5IHRpbWUgSSBnbyB0byB0aGUgbmV4dCBib3ggaWYgdGhlIGNvbCBmcm9tIHRoZSBwcmV2aW91cyBib3ggaGFzIHRoZSBudW1zLiBiZSBjYXJlZnVsIGFib3V0IGFkZGluZyB0byBjb2x1bW4xLCBjb2x1bW4yLCBvciBjb2x1bW4zLiBcblxuLy8gICAgICAgICBjdHgucmVjdCh4LCB5LCA2MCwgNjApO1xuLy8gICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbi8vICAgICAgICAgbGV0IG51bSA9IGdlbmVyYXRlTnVtKCk7XG4vLyAgICAgICAgIGxldCBib29sID0gZmFsc2U7XG5cblxuLy8gICAgICAgICBpZiAoIWNvbHVtbnNbY2hlY2twb2ludF0uZmxhdCgpLmluY2x1ZGVzKG51bSkpIHtcbi8vICAgICAgICAgICBib29sID0gdHJ1ZTtcbi8vICAgICAgICAgfTtcblxuLy8gICAgICAgICBpZiAoIWJveC5pbmNsdWRlcyhudW0pICYmIGJvb2wpIHtcbi8vICAgICAgICAgICBjb2wucHVzaChudW0pOyBib3gucHVzaChudW0pO1xuLy8gICAgICAgICAgIGN0eC5maWxsVGV4dChudW0sIHggKyAyNSwgeSArIDQ1KTtcbi8vICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICBjb2wucHVzaChcIlwiKTsgYm94LnB1c2goXCJcIik7XG4vLyAgICAgICAgIH1cblxuXG4vLyAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbi8vICAgICAgIH1cbi8vICAgICAgIGNvbHVtbnNbY2hlY2twb2ludF0ucHVzaChjb2wpO1xuLy8gICAgIH1cbi8vICAgICBjb25zb2xlLmxvZyhgQm94OiAke2JveH1gKTtcbi8vICAgfVxuLy8gfVxuXG4vLyBsZXQgY29scyA9IHsgMTogY29sMSA9IFtdLCAyOiBjb2wyID0gW10sIDM6IGNvbDMgPSBbXSwgNDogY29sNCA9IFtdLCA1OiBjb2w1ID0gW10sIDY6IGNvbDYgPSBbXSwgNzogY29sNyA9IFtdLCA4OiBjb2w4ID0gW10sIDk6IGNvbDkgPSBbXSB9O1xuXG4vLyBmb3IgKGkgPSAxOyBpIDw9IDk7IGkrKykge1xuLy8gICBjb2xzW2ldID0gcGFyc2lmeShjb2x1bW5zW2ldKTtcbi8vIH07XG5cbi8vIGZvciAoaSA9IDE7IGkgPD0gOTsgaSsrKSB7XG4vLyAgIC8vIGNvbnNvbGUubG9nKGBjb2wgJHtpfTogJHtjb2xzW2ldfWApO1xuLy8gICBjb25zb2xlLmxvZyhgY29sdW1uICR7aX06ICR7Y29sdW1uc1tpXX1gKTtcbi8vIH1cblxuLy8gLy8gbGV0IHJvd3MgPSB7IDE6IHJvdzEsIDI6IHJvdzIsIDM6IHJvdzMsIDQ6IHJvdzQsIDU6IHJvdzUsIDY6IHJvdzYsIDc6IHJvdzcsIDg6IHJvdzgsIDk6IHJvdzkgfTtcblxuLy8gZm9yIChpID0gMTsgaSA8PSA5OyBpKyspIHtcbi8vICAgZm9yIChqID0gMTsgaiA8PSA5OyBqKyspIHtcbi8vICAgICByb3dzW2ldLnB1c2goY29sc1tqXVtpIC0gMV0pO1xuLy8gICB9XG4vLyB9O1xuXG4vLyBmb3IgKGkgPSAxOyBpIDw9IDk7IGkrKykge1xuLy8gICBjb25zb2xlLmxvZyhgcm93ICR7aX06ICR7cm93c1tpXX1gKTtcbi8vIH1cbiIsImNvbnN0IEJvYXJkID0gcmVxdWlyZShcIi4vYm9hcmRcIik7XG5cbmxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FudmFzXCIpO1xubGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlTnVtKCkge1xuICBsZXQgbnVtID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgY29uc29sZS5sb2cobnVtKTtcbiAgcmV0dXJuIG51bTtcbn1cblxuLy8gZnVuY3Rpb24gZHJhd1NtYWxsQm94KGxlZnQsIHJpZ2h0LCB0b3AsIGJvdHRvbSkge1xuLy8gICBsZXQgY291bnQgPSAxO1xuLy8gICBjdHguYmVnaW5QYXRoKCk7XG4vLyAgIC8vIGN0eC5saW5lV2lkdGggPSAxMDtcblxuLy8gICBsZXQgcm93MSA9IFtdO1xuLy8gICBsZXQgcm93MiA9IFtdO1xuLy8gICBsZXQgcm93MyA9IFtdO1xuXG4vLyAgIGN0eC5mb250ID0gXCIyMHB4IEFyaWFsXCI7XG4vLyAgIGN0eC5zdHJva2VTdHlsZSA9IFwicmdiYSgwLDAsMjU1LDAuNSlcIjtcbi8vICAgZm9yIChiID0gbGVmdDsgYiA8IHJpZ2h0OyBiICs9IDE4MCkge1xuLy8gICAgIGN0eC5zdHJva2UoKTtcbi8vICAgICBsZXQgYm94ID0gW107XG4vLyAgICAgZm9yICh4ID0gYjsgeCA8IGIgKyAxODA7IHggKz0gNjApIHtcbi8vICAgICAgIGNvbnNvbGUubG9nKGBjb2x1bW4gJHtjb3VudH1gKTsgY291bnQrKztcbi8vICAgICAgIGxldCBjb2wgPSBbXTtcbi8vICAgICAgIGZvciAoeSA9IHRvcDsgeSA8IGJvdHRvbTsgeSArPSA2MCkge1xuLy8gICAgICAgICBjdHgucmVjdCh4LCB5LCA2MCwgNjApO1xuLy8gICAgICAgICBsZXQgbnVtID0gZ2VuZXJhdGVOdW0oKTtcbi8vICAgICAgICAgaWYgKCFjb2wuaW5jbHVkZXMobnVtKSAmJiAhYm94LmluY2x1ZGVzKG51bSkpIHtcbi8vICAgICAgICAgICBjb2wucHVzaChudW0pOyBib3gucHVzaChudW0pO1xuLy8gICAgICAgICAgIGN0eC5mb250ID0gXCIxNTBweCBBcmlhbFwiO1xuLy8gICAgICAgICAgIGN0eC5maWxsVGV4dChudW0sIHggKyAyNSwgeSArIDQ1KTtcbi8vICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICBjb2wucHVzaChcIlwiKTsgYm94LnB1c2goXCJcIik7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgY3R4LnN0cm9rZSgpO1xuLy8gICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4vLyAgICAgICB9XG5cbi8vICAgICAgIGlmICghcm93MS5pbmNsdWRlcyhjb2xbMF0pKSB7XG4vLyAgICAgICAgIHJvdzEucHVzaChjb2xbMF0pO1xuLy8gICAgICAgfTtcbi8vICAgICAgIGlmICghcm93Mi5pbmNsdWRlcyhjb2xbMV0pKSB7XG4vLyAgICAgICAgIHJvdzIucHVzaChjb2xbMV0pO1xuLy8gICAgICAgfTtcbi8vICAgICAgIGlmICghcm93My5pbmNsdWRlcyhjb2xbMl0pKSB7XG4vLyAgICAgICAgIHJvdzMucHVzaChjb2xbMl0pO1xuLy8gICAgICAgfTtcbi8vICAgICB9XG4vLyAgICAgY29uc29sZS5sb2coYFJvdyAxOiAke3JvdzF9YCk7XG4vLyAgICAgY29uc29sZS5sb2coYFJvdyAyOiAke3JvdzJ9YCk7XG4vLyAgICAgY29uc29sZS5sb2coYFJvdyAzOiAke3JvdzN9YCk7XG4vLyAgICAgLy8gY29uc29sZS5sb2coYEJveDogJHtib3h9YCk7XG4vLyAgICAgY29uc29sZS5sb2coYGJveCBiZXR3ZWVuIGxlZnQsICR7bGVmdH0sIGFuZCByaWdodCwgJHtyaWdodH0sIGNvbXBsZXRlISB3aXRoOiBbJHtib3h9XWApO1xuLy8gICB9XG4vLyB9XG4vLyBmdW5jdGlvbiBkcmF3TGFyZ2VCb3goKSB7XG4vLyAgIGZvciAobGVmdCA9IDA7IGxlZnQgPCA1NDA7IGxlZnQgKz0gMTgwKSB7XG4vLyAgICAgZHJhd1NtYWxsQm94KGxlZnQsIGxlZnQgKyAxODAsIDAsIDE4MCk7XG4vLyAgICAgZHJhd1NtYWxsQm94KGxlZnQsIGxlZnQgKyAxODAsIDE4MCwgMzYwKTtcbi8vICAgICBkcmF3U21hbGxCb3gobGVmdCwgbGVmdCArIDE4MCwgMzYwLCA1NDApO1xuLy8gICAgIC8vIGNvbnNvbGUubG9nKGRyYXdTbWFsbEJveC5yb3cxKVxuLy8gICB9XG4vLyB9O1xuXG5cblxuZnVuY3Rpb24gcGFyc2lmeShhcnIpIHtcbiAgbGV0IG9iaiA9IHt9O1xuICBhcnIuZm9yRWFjaChlbCA9PiB7XG4gICAgb2JqW2VsXSA9IHRydWU7XG4gIH0pXG4gIG5ld0FyciA9IFtdO1xuICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goa2V5ID0+IHtcbiAgICBrZXkuc3BsaXQoJywnKS5mb3JFYWNoKGVsID0+IHtcbiAgICAgIG5ld0Fyci5wdXNoKHBhcnNlSW50KGVsKSk7XG4gICAgfSlcbiAgfSlcbiAgcmV0dXJuIG5ld0Fycjtcbn1cblxuZnVuY3Rpb24gZHJhd1JlY3QoKSB7XG5cbiAgbGV0IGNvdW50ID0gMTtcbiAgbGV0IHJvd3MgPSB7IDE6IHJvdzEgPSBbXSwgMjogcm93MiA9IFtdLCAzOiByb3czID0gW10sIDQ6IHJvdzQgPSBbXSwgNTogcm93NSA9IFtdLCA2OiByb3c2ID0gW10sIDc6IHJvdzcgPSBbXSwgODogcm93OCA9IFtdLCA5OiByb3c5ID0gW10gfTtcbiAgbGV0IGNvbHVtbnMgPSB7IDE6IGNvbHVtbjEgPSBbXSwgMjogY29sdW1uMiA9IFtdLCAzOiBjb2x1bW4zID0gW10sIDQ6IGNvbHVtbjQgPSBbXSwgNTogY29sdW1uNSA9IFtdLCA2OiBjb2x1bW42ID0gW10sIDc6IGNvbHVtbjcgPSBbXSwgODogY29sdW1uOCA9IFtdLCA5OiBjb2x1bW45ID0gW10gfVxuICAvLyBsZXQgY29scyA9IHsgMTogY29sMT1bXSwgMjogY29sMj1bXSwgMzogY29sMz1bXSwgNDogY29sND1bXSwgNTogY29sNT1bXSwgNjogY29sNj1bXSwgNzogY29sNz1bXSwgODogY29sOD1bXSwgOTogY29sOT1bXSB9O1xuXG4gIGxldCBjID0gMDtcblxuICBjdHguYmVnaW5QYXRoKCk7XG5cbiAgZm9yIChsYXJnZSA9IDA7IGxhcmdlIDwgNTQwOyBsYXJnZSArPSAxODApIHtcbiAgICBjb25zb2xlLmxvZygnVyAgICBUICAgICBGJyk7XG4gICAgLy8gdGhpcyBpcyB0aGUgZW50aXJlIGxlZnQgc2lkZSAzIGJveGVzIGRvd246IFxuXG5cbiAgICBmb3IgKGIgPSAwOyBiIDwgMTgwOyBiICs9IDE4MCkge1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgbGV0IGJveCA9IFtdO1xuXG4gICAgICAvLyB0aGlzIGlzIG9uZSBib3g6IFxuXG4gICAgICBsZXQgY2hlY2twb2ludCA9IDA7XG5cbiAgICAgIGZvciAoeCA9IGI7IHggPCBiICsgNTQwOyB4ICs9IDYwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBjb2x1bW4gJHtjb3VudH1gKTsgY291bnQrKztcbiAgICAgICAgbGV0IGNvbCA9IFtdO1xuXG4gICAgICAgIC8vIHRoaXMgZ29lcyBhY3Jvc3MgdGhlIHggYXhpcyAzIChvciA5IGRlcGVuZGluZyBvbiB0aGUgeCBsaW1pdCkgc3BhY2VzIGFuZCBnZW5lcmF0ZXMgZWFjaCBsaXR0bGUgY29sdW1uIGluIHRoZSBzbWFsbGJveC4gXG4gICAgICAgIGNoZWNrcG9pbnQrKztcblxuICAgICAgICBmb3IgKHkgPSBsYXJnZTsgeSA8IChsYXJnZSArIDE4MCk7IHkgKz0gNjApIHtcblxuICAgICAgICAgIC8vIHRoaXMgZ29lcyBkb3duIHRoZSB5IGF4aXMgKG9uZSAzeDMgYm94IGF0IGEgdGltZSkgYW5kIGFkZHMgbGl0dGxlIHNxdWFyZXMgdG8gY2FudmFzIGFuZCBudW1zIHRvIHRoZSBjb2wgdG8gYmUgYWRkZWQgdG8gdGhlIHNtYWxsYm94LiBcblxuICAgICAgICAgIC8vIEkgbmVlZCB0byBhZGQgdGhlIGNvbHMgdG8gYSBsYXJnZXIgY29sdW1uIGFuZCBjaGVjayBldmVyeSB0aW1lIEkgZ28gdG8gdGhlIG5leHQgYm94IGlmIHRoZSBjb2wgZnJvbSB0aGUgcHJldmlvdXMgYm94IGhhcyB0aGUgbnVtcy4gYmUgY2FyZWZ1bCBhYm91dCBhZGRpbmcgdG8gY29sdW1uMSwgY29sdW1uMiwgb3IgY29sdW1uMy4gXG5cbiAgICAgICAgICBjdHgucmVjdCh4LCB5LCA2MCwgNjApO1xuICAgICAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgICAgIGxldCBudW0gPSBnZW5lcmF0ZU51bSgpO1xuICAgICAgICAgIGxldCBib29sID0gZmFsc2U7XG5cblxuICAgICAgICAgIGlmICghY29sdW1uc1tjaGVja3BvaW50XS5mbGF0KCkuaW5jbHVkZXMobnVtKSkge1xuICAgICAgICAgICAgYm9vbCA9IHRydWU7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmICghYm94LmluY2x1ZGVzKG51bSkgJiYgYm9vbCkge1xuICAgICAgICAgICAgY29sLnB1c2gobnVtKTsgYm94LnB1c2gobnVtKTtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChudW0sIHggKyAyNSwgeSArIDQ1KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29sLnB1c2goMCk7IGJveC5wdXNoKDApO1xuICAgICAgICAgIH1cblxuXG4gICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbHVtbnNbY2hlY2twb2ludF0ucHVzaChjb2wpO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coYEJveDogJHtib3h9YCk7XG4gICAgfVxuICB9XG5cbiAgbGV0IGNvbHMgPSB7IDE6IGNvbDEgPSBbXSwgMjogY29sMiA9IFtdLCAzOiBjb2wzID0gW10sIDQ6IGNvbDQgPSBbXSwgNTogY29sNSA9IFtdLCA2OiBjb2w2ID0gW10sIDc6IGNvbDcgPSBbXSwgODogY29sOCA9IFtdLCA5OiBjb2w5ID0gW10gfTtcblxuICBmb3IgKGkgPSAxOyBpIDw9IDk7IGkrKykge1xuICAgIGNvbHNbaV0gPSBwYXJzaWZ5KGNvbHVtbnNbaV0pO1xuICB9O1xuXG4gIGZvciAoaSA9IDE7IGkgPD0gOTsgaSsrKSB7XG4gICAgLy8gY29uc29sZS5sb2coYGNvbCAke2l9OiAke2NvbHNbaV19YCk7XG4gICAgY29uc29sZS5sb2coYGNvbHVtbiAke2l9OiAke2NvbHVtbnNbaV19YCk7XG4gIH1cblxuICAvLyBsZXQgcm93cyA9IHsgMTogcm93MSwgMjogcm93MiwgMzogcm93MywgNDogcm93NCwgNTogcm93NSwgNjogcm93NiwgNzogcm93NywgODogcm93OCwgOTogcm93OSB9O1xuXG4gIGZvciAoaSA9IDE7IGkgPD0gOTsgaSsrKSB7XG4gICAgZm9yIChqID0gMTsgaiA8PSA5OyBqKyspIHtcbiAgICAgIHJvd3NbaV0ucHVzaChjb2xzW2pdW2kgLSAxXSk7XG4gICAgfVxuICB9O1xuXG4gIGZvciAoaSA9IDE7IGkgPD0gOTsgaSsrKSB7XG4gICAgY29uc29sZS5sb2coYHJvdyAke2l9OiAke3Jvd3NbaV19YCk7XG4gIH1cblxufVxuXG4vLyBkcmF3UmVjdCgpO1xuXG5cbiAgICAvLyBkcmF3TGFyZ2VCb3goKTtcblxuICAgIC8vIGRyYXdTbWFsbEJveCgwLCAxODAsIDAsIDE4MCk7XG5cblxuICAgIC8vIGRyYXdTbWFsbEJveCgpO1xuICAgIC8vIFN1ZG9rdS5kcmF3TGFyZ2VCb3g7XG4gICAgLy8gc2V0SW50ZXJ2YWwoZHJhd1JlY3QsIDQwKTtcblxubGV0IHN1ZG9rdSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZXRCb2FyZFwiKTsgXG5zdWRva3Uub25jbGljayA9IGxhdW5jaFN1ZG9rdTsgXG4gICAgXG5cblxuXG4vLyBjbGVhckJvYXJkKCkge1xuLy8gICBjbGVhclJlY3QoMCwgMCwgNTQwLCA1NDApO1xuLy8gfVxuXG5mdW5jdGlvbiBsYXVuY2hTdWRva3UgKCkge1xuICAvLyBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhc1wiKTtcbiAgLy8gbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIC8vIGN0eC5jbGVhckJvYXJkKCk7XG4gIC8vIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCA1NDAsIDU0MCk7XG4gIC8vIGN0eC5jbG9zZVBhdGgoKTtcblxuICBhbGVydChcIk5ldyBCb2FyZCEgXCIpO1xuICBsZXQgYiA9IG5ldyBCb2FyZChjYW52YXMsY3R4KTtcbiAgYi5nZW5lcmF0ZU51bSgpO1xuICBcbiAgXG4gIC8vIGIuZHJhd0JhbGwoKTtcbiAgYi5kcmF3Qm94ZXMoKTtcbiAgLy8gYi5kcmF3Qm9hcmQoKTtcbiAgYi5wbGFjZU51bXMoMTgwLDE4MCk7XG4gIFxuICBiLnBsYWNlTnVtcygwLDApO1xuICBiLnBsYWNlTnVtcygzNjAsMzYwKTtcbiAgXG4gIGIucGxhY2VOdW1zKDAsMzYwKTtcbiAgYi5wbGFjZU51bXMoMzYwLDApO1xuICBcbiAgXG4gIFxuICBiLnBsYWNlTnVtcygwLDE4MCk7XG4gIGIucGxhY2VOdW1zKDE4MCwwKTtcbiAgXG4gIFxuICBiLnBsYWNlTnVtcygxODAsMzYwKTtcbiAgYi5wbGFjZU51bXMoMzYwLDE4MCk7XG4gIFxuICBcbiAgYi5jaGVja1ZhbHVlcygpO1xuICBcbiAgXG4gIFxuICAvLyBiLmdlblJvd3MoKTtcbiAgXG4gIC8vIGIucGxhY2VOdW1zKDAsMCk7XG4gIFxuICAvLyBiLnBsYWNlTnVtcygxODAsIDE4MCk7XG4gIC8vIGIucGxhY2VOdW1zKDAsIDE4MCk7XG4gIC8vIGIucGxhY2VOdW1zKDAsIDM2MCk7XG4gIC8vIGIucGxhY2VOdW1zKDE4MCwgMCk7XG4gIFxuICBiLmRyYXdPdXRsaW5lKCk7XG5cbn1cblxuXG4vLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2V0Qm9hcmRcIikub25jbGljayA9IGxhdW5jaFN1ZG9rdSgpOyBcbiAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9