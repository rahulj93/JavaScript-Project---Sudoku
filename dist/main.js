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
      var rowIndex = startY / 60 - 1; // for (let x=180; x<360; x+=60) {

      for (var x = startX; x < startX + 180; x += 60) {
        colIndex++;
        var col = [];

        for (var y = startY; y < startY + 180; y += 60) {
          // this.ctx.rect(x,y,60,60);
          num = this.generateNum();

          if (!box.includes(num) && !this.columns[colIndex].flat().flat().includes(num)) {
            box.push(num);
            col.push(num);
            this.ctx.fillText(num, x + 25, y + 45);
          } else {
            col.push("-");
          }
        }

        this.columns[colIndex].push(col);
        this.columns[colIndex].flat();
        console.log("box: [".concat(box, "]"));
        console.log("Columns: ", this.columns); // console.log(`Columns: ${this.columns}`);

        console.log("cols:", Object.values(this.columns).flat());
      } // this.ctx.rect(180, 180, 60, 60);
      // let num = this.generateNum();
      // this.ctx.fillText(num, 180 + 25, 180 + 45);


      this.ctx.closePath();
    }
  }, {
    key: "genRows",
    value: function genRows() {
      for (var col = 0; col < 9; col++) {
        for (var row = 0; row < 9; row++) {
          var el = this.columns[row].flat()[col];
          this.rows[col].push(el);
        }

        console.log('Rows: ', this.rows);
      }
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
b.placeNums(360, 360);
b.genRows(); // b.placeNums(0,0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2JvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3N1ZG9rdS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiQm9hcmQiLCJjYW52YXMiLCJjdHgiLCJyb3dzIiwiY29sdW1ucyIsImdlbmVyYXRlTnVtIiwiYmluZCIsImRyYXdCYWxsIiwiZHJhd0JveGVzIiwicGxhY2VOdW1zIiwiZ2VuUm93cyIsIm51bSIsIk1hdGgiLCJjZWlsIiwicmFuZG9tIiwiY29uc29sZSIsImxvZyIsImJlZ2luUGF0aCIsImFyYyIsIlBJIiwiZmlsbFN0eWxlIiwic3Ryb2tlIiwiY2xvc2VQYXRoIiwibGluZVdpZHRoIiwieCIsIm1vdmVUbyIsImxpbmVUbyIsInkiLCJyZWN0Iiwic3RhcnRYIiwic3RhcnRZIiwiYm94IiwiY29sSW5kZXgiLCJyb3dJbmRleCIsImNvbCIsImluY2x1ZGVzIiwiZmxhdCIsInB1c2giLCJmaWxsVGV4dCIsIk9iamVjdCIsInZhbHVlcyIsInJvdyIsImVsIiwibW9kdWxlIiwiZXhwb3J0cyIsInJlcXVpcmUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29udGV4dCIsInBhcnNpZnkiLCJhcnIiLCJvYmoiLCJmb3JFYWNoIiwibmV3QXJyIiwia2V5cyIsImtleSIsInNwbGl0IiwicGFyc2VJbnQiLCJkcmF3UmVjdCIsImNvdW50Iiwicm93MSIsInJvdzIiLCJyb3czIiwicm93NCIsInJvdzUiLCJyb3c2Iiwicm93NyIsInJvdzgiLCJyb3c5IiwiY29sdW1uMSIsImNvbHVtbjIiLCJjb2x1bW4zIiwiY29sdW1uNCIsImNvbHVtbjUiLCJjb2x1bW42IiwiY29sdW1uNyIsImNvbHVtbjgiLCJjb2x1bW45IiwiYyIsImxhcmdlIiwiYiIsImNoZWNrcG9pbnQiLCJib29sIiwiY29scyIsImNvbDEiLCJjb2wyIiwiY29sMyIsImNvbDQiLCJjb2w1IiwiY29sNiIsImNvbDciLCJjb2w4IiwiY29sOSIsImkiLCJqIiwiZHJhd091dGxpbmUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Q0FFQSwyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNKTUEsSztBQUNKLGlCQUFZQyxNQUFaLEVBQW9CQyxHQUFwQixFQUF5QjtBQUFBOztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBS0MsSUFBTCxHQUFZO0FBQ1YsU0FBRyxFQURPO0FBRVYsU0FBRyxFQUZPO0FBR1YsU0FBRyxFQUhPO0FBSVYsU0FBRyxFQUpPO0FBS1YsU0FBRyxFQUxPO0FBTVYs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QUYsQ0FBWSxHQUFaLEVBQWdCLENBQWhCO0FBQ0F1RSxDQUFDLENBQUN2RSxTQUFGLENBQVksR0FBWixFQUFnQixHQUFoQjtBQUNBdUUsQ0FBQyxDQUFDdkUsU0FBRixDQUFZLEdBQVosRUFBZ0IsR0FBaEI7QUFHQXVFLENBQUMsQ0FBQ3ZFLFNBQUYsQ0FBWSxHQUFaLEVBQWdCLENBQWhCO0FBQ0F1RSxDQUFDLENBQUN2RSxTQUFGLENBQVksR0FBWixFQUFnQixHQUFoQjtBQUNBdUUsQ0FBQyxDQUFDdkUsU0FBRixDQUFZLEdBQVosRUFBZ0IsR0FBaEI7QUFHQXVFLENBQUMsQ0FBQ3RFLE9BQUYsRyxDQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUFzRSxDQUFDLENBQUNlLFdBQUYsRzs7Ozs7Ozs7Ozs7QUMxTkEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5pbXBvcnQgJy4vc2NyaXB0cy9ib2FyZC5qcyc7XG5pbXBvcnQgJy4vc2NyaXB0cy9zdWRva3UuanMnO1xuLy8gJy9zcmMvc3R5bGVzL2luZGV4LnNjc3MnIiwiY2xhc3MgQm9hcmQge1xuICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCkge1xuICAgIC8vIHRoaXMuYm94ZXMgPSB7XG4gICAgLy8gICAwOiBbXSxcbiAgICAvLyAgIDE6IFtdLFxuICAgIC8vICAgMjogW10sXG4gICAgLy8gICAzOiBbXSxcbiAgICAvLyAgIDQ6IFtdLFxuICAgIC8vICAgNTogW10sXG4gICAgLy8gICA2OiBbXSxcbiAgICAvLyAgIDc6IFtdLFxuICAgIC8vICAgODogW11cbiAgICAvLyB9OyAgXG4gICAgdGhpcy5yb3dzID0ge1xuICAgICAgMDogW10sXG4gICAgICAxOiBbXSxcbiAgICAgIDI6IFtdLFxuICAgICAgMzogW10sXG4gICAgICA0OiBbXSxcbiAgICAgIDU6IFtdLFxuICAgICAgNjogW10sXG4gICAgICA3OiBbXSxcbiAgICAgIDg6IFtdXG4gICAgfTsgXG4gICAgdGhpcy5jb2x1bW5zID0geyBcbiAgICAgIDA6IFtdLCBcbiAgICAgIDE6IFtdLCBcbiAgICAgIDI6IFtdLCBcbiAgICAgIDM6IFtdLCBcbiAgICAgIDQ6IFtdLCBcbiAgICAgIDU6IFtdLCBcbiAgICAgIDY6IFtdLCBcbiAgICAgIDc6IFtdLCBcbiAgICAgIDg6IFtdXG4gICAgfTsgXG5cbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmN0eCA9IGN0eDtcblxuICAgIHRoaXMuZ2VuZXJhdGVOdW0gPSB0aGlzLmdlbmVyYXRlTnVtLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kcmF3QmFsbCA9IHRoaXMuZHJhd0JhbGwuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRyYXdCb3hlcyA9IHRoaXMuZHJhd0JveGVzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5wbGFjZU51bXMgPSB0aGlzLnBsYWNlTnVtcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2VuUm93cyA9IHRoaXMuZ2VuUm93cy5iaW5kKHRoaXMpO1xuICB9XG4gIFxuICBnZW5lcmF0ZU51bSgpIHtcbiAgICBsZXQgbnVtID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICBjb25zb2xlLmxvZyhgbnVtOiAke251bX1gKTtcbiAgICByZXR1cm4gbnVtOyBcbiAgfVxuXG4gIGRyYXdCYWxsKCkge1xuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuXG4gICAgdGhpcy5jdHguYXJjKDUwLCA1MCwgMjAsIDAsIE1hdGguUEkgKiAyKTtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiMwMDk1RERcIjtcbiAgICB0aGlzLmN0eC5zdHJva2UoKTsgXG4gICAgLy8gdGhpcy5jdHguZmlsbCgpO1xuICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICB9XG5cbiAgZHJhd091dGxpbmUoKSB7XG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jdHgubGluZVdpZHRoID0gNDsgXG5cbiAgICBmb3IgKGxldCB4ID0gMDsgeDw9NTQwOyB4Kz0xODApIHtcbiAgICAgIHRoaXMuY3R4Lm1vdmVUbyh4LDApO1xuICAgICAgdGhpcy5jdHgubGluZVRvKHgsIDU0MCk7XG5cbiAgICAgIHRoaXMuY3R4Lm1vdmVUbygwLHgpO1xuICAgICAgdGhpcy5jdHgubGluZVRvKDU0MCwgeCk7XG4gICAgfVxuXG4gICAgLy8gZm9yIChsZXQgeSA9IDA7IHk8PTU0MDsgeSs9MTgwKSB7XG4gICAgLy8gICB0aGlzLmN0eC5tb3ZlVG8oMCx5KTtcbiAgICAvLyAgIHRoaXMuY3R4LmxpbmVUbyg1NDAsIHkpO1xuICAgIC8vIH1cblxuICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gIH1cblxuICBkcmF3Qm94ZXMoKSB7XG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jdHgubGluZVdpZHRoID0gMC41O1xuICAgIGZvciAobGV0IHg9MDsgeCA8IDU0MDsgeCs9NjApIHtcbiAgICAgIGZvciAobGV0IHk9MDsgeTw1NDA7IHkrPTYwKSB7XG4gICAgICAgIHRoaXMuY3R4LnJlY3QoeCx5LDYwLDYwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7IFxuICB9XG5cbiAgcGxhY2VOdW1zKHN0YXJ0WCxzdGFydFkpIHtcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcblxuICAgIC8vIHggaXMgMTgwIC0+IGNvdW50ID0gMyBiYyA1NDAvOSA9IDYwIGFuZCAxODAvNjAgPSAzXG5cbiAgICBsZXQgYm94ID0gW107XG4gICAgbGV0IGNvbEluZGV4ID0gKHN0YXJ0WC82MCkgLSAxOyBcbiAgICBsZXQgcm93SW5kZXggPSAoc3RhcnRZLzYwKSAtMTtcblxuICAgIC8vIGZvciAobGV0IHg9MTgwOyB4PDM2MDsgeCs9NjApIHtcbiAgICBmb3IgKGxldCB4PXN0YXJ0WDsgeDwgKHN0YXJ0WCsxODApOyB4Kz02MCkge1xuICAgICAgY29sSW5kZXggKys7IFxuICAgICAgbGV0IGNvbCA9IFtdOyBcbiAgICAgIGZvciAobGV0IHk9c3RhcnRZOyB5PChzdGFydFkrMTgwKTsgeSs9NjApIHtcbiAgICAgICAgLy8gdGhpcy5jdHgucmVjdCh4LHksNjAsNjApO1xuICAgICAgICBudW0gPSB0aGlzLmdlbmVyYXRlTnVtKCk7XG4gICAgICAgIGlmICghYm94LmluY2x1ZGVzKG51bSkgJiYgIXRoaXMuY29sdW1uc1tjb2xJbmRleF0uZmxhdCgpLmZsYXQoKS5pbmNsdWRlcyhudW0pKSB7XG4gICAgICAgICAgYm94LnB1c2gobnVtKTsgXG4gICAgICAgICAgY29sLnB1c2gobnVtKTtcbiAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChudW0sIHggKyAyNSwgeSArIDQ1KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb2wucHVzaChcIi1cIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuY29sdW1uc1tjb2xJbmRleF0ucHVzaChjb2wpO1xuICAgICAgdGhpcy5jb2x1bW5zW2NvbEluZGV4XS5mbGF0KCk7XG4gICAgICBjb25zb2xlLmxvZyhgYm94OiBbJHtib3h9XWApO1xuICAgICAgY29uc29sZS5sb2coXCJDb2x1bW5zOiBcIiwgdGhpcy5jb2x1bW5zKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGBDb2x1bW5zOiAke3RoaXMuY29sdW1uc31gKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiY29sczpcIiwgT2JqZWN0LnZhbHVlcyh0aGlzLmNvbHVtbnMpLmZsYXQoKSk7XG4gICAgfVxuXG4gICAgLy8gdGhpcy5jdHgucmVjdCgxODAsIDE4MCwgNjAsIDYwKTtcbiAgICAvLyBsZXQgbnVtID0gdGhpcy5nZW5lcmF0ZU51bSgpO1xuICAgIC8vIHRoaXMuY3R4LmZpbGxUZXh0KG51bSwgMTgwICsgMjUsIDE4MCArIDQ1KTtcblxuICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICB9XG5cbiAgZ2VuUm93cygpIHtcbiAgICBmb3IgKGxldCBjb2w9MDsgY29sPDk7IGNvbCsrKSB7XG4gICAgICBmb3IgKGxldCByb3c9MDsgcm93PDk7IHJvdysrKSB7XG4gICAgICAgIGxldCBlbCA9IHRoaXMuY29sdW1uc1tyb3ddLmZsYXQoKVtjb2xdO1xuICAgICAgICB0aGlzLnJvd3NbY29sXS5wdXNoKGVsKTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKCdSb3dzOiAnLCB0aGlzLnJvd3MpOyBcbiAgICB9XG4gIH1cblxufTtcblxuLy8gbGV0IGIgPSBuZXcgQm9hcmQ7IFxuLy8gY29uc29sZS5sb2coYi5nZW5lcmF0ZU51bSgpKTsgXG4vLyBiLmdlbmVyYXRlTnVtKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gQm9hcmQ7IFxuXG5cblxuLy8gbGV0IGNvdW50ID0gMTtcbi8vIGxldCByb3dzID0geyAxOiByb3cxID0gW10sIDI6IHJvdzIgPSBbXSwgMzogcm93MyA9IFtdLCA0OiByb3c0ID0gW10sIDU6IHJvdzUgPSBbXSwgNjogcm93NiA9IFtdLCA3OiByb3c3ID0gW10sIDg6IHJvdzggPSBbXSwgOTogcm93OSA9IFtdIH07XG4vLyBsZXQgY29sdW1ucyA9IHsgMTogY29sdW1uMSA9IFtdLCAyOiBjb2x1bW4yID0gW10sIDM6IGNvbHVtbjMgPSBbXSwgNDogY29sdW1uNCA9IFtdLCA1OiBjb2x1bW41ID0gW10sIDY6IGNvbHVtbjYgPSBbXSwgNzogY29sdW1uNyA9IFtdLCA4OiBjb2x1bW44ID0gW10sIDk6IGNvbHVtbjkgPSBbXSB9XG4vLyAvLyBsZXQgY29scyA9IHsgMTogY29sMT1bXSwgMjogY29sMj1bXSwgMzogY29sMz1bXSwgNDogY29sND1bXSwgNTogY29sNT1bXSwgNjogY29sNj1bXSwgNzogY29sNz1bXSwgODogY29sOD1bXSwgOTogY29sOT1bXSB9O1xuXG4vLyBsZXQgYyA9IDA7XG5cblxuLy8gZm9yIChsYXJnZSA9IDA7IGxhcmdlIDwgNTQwOyBsYXJnZSArPSAxODApIHtcbi8vICAgY29uc29sZS5sb2coJ1cgICAgVCAgICAgRicpO1xuLy8gICAvLyB0aGlzIGlzIHRoZSBlbnRpcmUgbGVmdCBzaWRlIDMgYm94ZXMgZG93bjogXG5cblxuLy8gICBmb3IgKGIgPSAwOyBiIDwgMTgwOyBiICs9IDE4MCkge1xuLy8gICAgIGN0eC5zdHJva2UoKTtcbi8vICAgICBsZXQgYm94ID0gW107XG5cbi8vICAgICAvLyB0aGlzIGlzIG9uZSBib3g6IFxuXG4vLyAgICAgbGV0IGNoZWNrcG9pbnQgPSAwO1xuXG4vLyAgICAgZm9yICh4ID0gYjsgeCA8IGIgKyA1NDA7IHggKz0gNjApIHtcbi8vICAgICAgIGNvbnNvbGUubG9nKGBjb2x1bW4gJHtjb3VudH1gKTsgY291bnQrKztcbi8vICAgICAgIGxldCBjb2wgPSBbXTtcblxuLy8gICAgICAgLy8gdGhpcyBnb2VzIGFjcm9zcyB0aGUgeCBheGlzIDMgKG9yIDkgZGVwZW5kaW5nIG9uIHRoZSB4IGxpbWl0KSBzcGFjZXMgYW5kIGdlbmVyYXRlcyBlYWNoIGxpdHRsZSBjb2x1bW4gaW4gdGhlIHNtYWxsYm94LiBcbi8vICAgICAgIGNoZWNrcG9pbnQrKztcblxuLy8gICAgICAgZm9yICh5ID0gbGFyZ2U7IHkgPCAobGFyZ2UgKyAxODApOyB5ICs9IDYwKSB7XG5cbi8vICAgICAgICAgLy8gdGhpcyBnb2VzIGRvd24gdGhlIHkgYXhpcyAob25lIDN4MyBib3ggYXQgYSB0aW1lKSBhbmQgYWRkcyBsaXR0bGUgc3F1YXJlcyB0byBjYW52YXMgYW5kIG51bXMgdG8gdGhlIGNvbCB0byBiZSBhZGRlZCB0byB0aGUgc21hbGxib3guIFxuXG4vLyAgICAgICAgIC8vIEkgbmVlZCB0byBhZGQgdGhlIGNvbHMgdG8gYSBsYXJnZXIgY29sdW1uIGFuZCBjaGVjayBldmVyeSB0aW1lIEkgZ28gdG8gdGhlIG5leHQgYm94IGlmIHRoZSBjb2wgZnJvbSB0aGUgcHJldmlvdXMgYm94IGhhcyB0aGUgbnVtcy4gYmUgY2FyZWZ1bCBhYm91dCBhZGRpbmcgdG8gY29sdW1uMSwgY29sdW1uMiwgb3IgY29sdW1uMy4gXG5cbi8vICAgICAgICAgY3R4LnJlY3QoeCwgeSwgNjAsIDYwKTtcbi8vICAgICAgICAgY3R4LnN0cm9rZSgpO1xuXG4vLyAgICAgICAgIGxldCBudW0gPSBnZW5lcmF0ZU51bSgpO1xuLy8gICAgICAgICBsZXQgYm9vbCA9IGZhbHNlO1xuXG5cbi8vICAgICAgICAgaWYgKCFjb2x1bW5zW2NoZWNrcG9pbnRdLmZsYXQoKS5pbmNsdWRlcyhudW0pKSB7XG4vLyAgICAgICAgICAgYm9vbCA9IHRydWU7XG4vLyAgICAgICAgIH07XG5cbi8vICAgICAgICAgaWYgKCFib3guaW5jbHVkZXMobnVtKSAmJiBib29sKSB7XG4vLyAgICAgICAgICAgY29sLnB1c2gobnVtKTsgYm94LnB1c2gobnVtKTtcbi8vICAgICAgICAgICBjdHguZmlsbFRleHQobnVtLCB4ICsgMjUsIHkgKyA0NSk7XG4vLyAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgY29sLnB1c2goXCJcIik7IGJveC5wdXNoKFwiXCIpO1xuLy8gICAgICAgICB9XG5cblxuLy8gICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4vLyAgICAgICB9XG4vLyAgICAgICBjb2x1bW5zW2NoZWNrcG9pbnRdLnB1c2goY29sKTtcbi8vICAgICB9XG4vLyAgICAgY29uc29sZS5sb2coYEJveDogJHtib3h9YCk7XG4vLyAgIH1cbi8vIH1cblxuLy8gbGV0IGNvbHMgPSB7IDE6IGNvbDEgPSBbXSwgMjogY29sMiA9IFtdLCAzOiBjb2wzID0gW10sIDQ6IGNvbDQgPSBbXSwgNTogY29sNSA9IFtdLCA2OiBjb2w2ID0gW10sIDc6IGNvbDcgPSBbXSwgODogY29sOCA9IFtdLCA5OiBjb2w5ID0gW10gfTtcblxuLy8gZm9yIChpID0gMTsgaSA8PSA5OyBpKyspIHtcbi8vICAgY29sc1tpXSA9IHBhcnNpZnkoY29sdW1uc1tpXSk7XG4vLyB9O1xuXG4vLyBmb3IgKGkgPSAxOyBpIDw9IDk7IGkrKykge1xuLy8gICAvLyBjb25zb2xlLmxvZyhgY29sICR7aX06ICR7Y29sc1tpXX1gKTtcbi8vICAgY29uc29sZS5sb2coYGNvbHVtbiAke2l9OiAke2NvbHVtbnNbaV19YCk7XG4vLyB9XG5cbi8vIC8vIGxldCByb3dzID0geyAxOiByb3cxLCAyOiByb3cyLCAzOiByb3czLCA0OiByb3c0LCA1OiByb3c1LCA2OiByb3c2LCA3OiByb3c3LCA4OiByb3c4LCA5OiByb3c5IH07XG5cbi8vIGZvciAoaSA9IDE7IGkgPD0gOTsgaSsrKSB7XG4vLyAgIGZvciAoaiA9IDE7IGogPD0gOTsgaisrKSB7XG4vLyAgICAgcm93c1tpXS5wdXNoKGNvbHNbal1baSAtIDFdKTtcbi8vICAgfVxuLy8gfTtcblxuLy8gZm9yIChpID0gMTsgaSA8PSA5OyBpKyspIHtcbi8vICAgY29uc29sZS5sb2coYHJvdyAke2l9OiAke3Jvd3NbaV19YCk7XG4vLyB9XG4iLCJjb25zdCBCb2FyZCA9IHJlcXVpcmUoXCIuL2JvYXJkXCIpO1xuXG5sZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhc1wiKTtcbmxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZU51bSgpIHtcbiAgbGV0IG51bSA9IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogOSk7XG4gIGNvbnNvbGUubG9nKG51bSk7XG4gIHJldHVybiBudW07XG59XG5cbi8vIGZ1bmN0aW9uIGRyYXdTbWFsbEJveChsZWZ0LCByaWdodCwgdG9wLCBib3R0b20pIHtcbi8vICAgbGV0IGNvdW50ID0gMTtcbi8vICAgY3R4LmJlZ2luUGF0aCgpO1xuLy8gICAvLyBjdHgubGluZVdpZHRoID0gMTA7XG5cbi8vICAgbGV0IHJvdzEgPSBbXTtcbi8vICAgbGV0IHJvdzIgPSBbXTtcbi8vICAgbGV0IHJvdzMgPSBbXTtcblxuLy8gICBjdHguZm9udCA9IFwiMjBweCBBcmlhbFwiO1xuLy8gICBjdHguc3Ryb2tlU3R5bGUgPSBcInJnYmEoMCwwLDI1NSwwLjUpXCI7XG4vLyAgIGZvciAoYiA9IGxlZnQ7IGIgPCByaWdodDsgYiArPSAxODApIHtcbi8vICAgICBjdHguc3Ryb2tlKCk7XG4vLyAgICAgbGV0IGJveCA9IFtdO1xuLy8gICAgIGZvciAoeCA9IGI7IHggPCBiICsgMTgwOyB4ICs9IDYwKSB7XG4vLyAgICAgICBjb25zb2xlLmxvZyhgY29sdW1uICR7Y291bnR9YCk7IGNvdW50Kys7XG4vLyAgICAgICBsZXQgY29sID0gW107XG4vLyAgICAgICBmb3IgKHkgPSB0b3A7IHkgPCBib3R0b207IHkgKz0gNjApIHtcbi8vICAgICAgICAgY3R4LnJlY3QoeCwgeSwgNjAsIDYwKTtcbi8vICAgICAgICAgbGV0IG51bSA9IGdlbmVyYXRlTnVtKCk7XG4vLyAgICAgICAgIGlmICghY29sLmluY2x1ZGVzKG51bSkgJiYgIWJveC5pbmNsdWRlcyhudW0pKSB7XG4vLyAgICAgICAgICAgY29sLnB1c2gobnVtKTsgYm94LnB1c2gobnVtKTtcbi8vICAgICAgICAgICBjdHguZm9udCA9IFwiMTUwcHggQXJpYWxcIjtcbi8vICAgICAgICAgICBjdHguZmlsbFRleHQobnVtLCB4ICsgMjUsIHkgKyA0NSk7XG4vLyAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgY29sLnB1c2goXCJcIik7IGJveC5wdXNoKFwiXCIpO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGN0eC5zdHJva2UoKTtcbi8vICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuLy8gICAgICAgfVxuXG4vLyAgICAgICBpZiAoIXJvdzEuaW5jbHVkZXMoY29sWzBdKSkge1xuLy8gICAgICAgICByb3cxLnB1c2goY29sWzBdKTtcbi8vICAgICAgIH07XG4vLyAgICAgICBpZiAoIXJvdzIuaW5jbHVkZXMoY29sWzFdKSkge1xuLy8gICAgICAgICByb3cyLnB1c2goY29sWzFdKTtcbi8vICAgICAgIH07XG4vLyAgICAgICBpZiAoIXJvdzMuaW5jbHVkZXMoY29sWzJdKSkge1xuLy8gICAgICAgICByb3czLnB1c2goY29sWzJdKTtcbi8vICAgICAgIH07XG4vLyAgICAgfVxuLy8gICAgIGNvbnNvbGUubG9nKGBSb3cgMTogJHtyb3cxfWApO1xuLy8gICAgIGNvbnNvbGUubG9nKGBSb3cgMjogJHtyb3cyfWApO1xuLy8gICAgIGNvbnNvbGUubG9nKGBSb3cgMzogJHtyb3czfWApO1xuLy8gICAgIC8vIGNvbnNvbGUubG9nKGBCb3g6ICR7Ym94fWApO1xuLy8gICAgIGNvbnNvbGUubG9nKGBib3ggYmV0d2VlbiBsZWZ0LCAke2xlZnR9LCBhbmQgcmlnaHQsICR7cmlnaHR9LCBjb21wbGV0ZSEgd2l0aDogWyR7Ym94fV1gKTtcbi8vICAgfVxuLy8gfVxuLy8gZnVuY3Rpb24gZHJhd0xhcmdlQm94KCkge1xuLy8gICBmb3IgKGxlZnQgPSAwOyBsZWZ0IDwgNTQwOyBsZWZ0ICs9IDE4MCkge1xuLy8gICAgIGRyYXdTbWFsbEJveChsZWZ0LCBsZWZ0ICsgMTgwLCAwLCAxODApO1xuLy8gICAgIGRyYXdTbWFsbEJveChsZWZ0LCBsZWZ0ICsgMTgwLCAxODAsIDM2MCk7XG4vLyAgICAgZHJhd1NtYWxsQm94KGxlZnQsIGxlZnQgKyAxODAsIDM2MCwgNTQwKTtcbi8vICAgICAvLyBjb25zb2xlLmxvZyhkcmF3U21hbGxCb3gucm93MSlcbi8vICAgfVxuLy8gfTtcblxuXG5cbmZ1bmN0aW9uIHBhcnNpZnkoYXJyKSB7XG4gIGxldCBvYmogPSB7fTtcbiAgYXJyLmZvckVhY2goZWwgPT4ge1xuICAgIG9ialtlbF0gPSB0cnVlO1xuICB9KVxuICBuZXdBcnIgPSBbXTtcbiAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGtleSA9PiB7XG4gICAga2V5LnNwbGl0KCcsJykuZm9yRWFjaChlbCA9PiB7XG4gICAgICBuZXdBcnIucHVzaChwYXJzZUludChlbCkpO1xuICAgIH0pXG4gIH0pXG4gIHJldHVybiBuZXdBcnI7XG59XG5cbmZ1bmN0aW9uIGRyYXdSZWN0KCkge1xuXG4gIGxldCBjb3VudCA9IDE7XG4gIGxldCByb3dzID0geyAxOiByb3cxID0gW10sIDI6IHJvdzIgPSBbXSwgMzogcm93MyA9IFtdLCA0OiByb3c0ID0gW10sIDU6IHJvdzUgPSBbXSwgNjogcm93NiA9IFtdLCA3OiByb3c3ID0gW10sIDg6IHJvdzggPSBbXSwgOTogcm93OSA9IFtdIH07XG4gIGxldCBjb2x1bW5zID0geyAxOiBjb2x1bW4xID0gW10sIDI6IGNvbHVtbjIgPSBbXSwgMzogY29sdW1uMyA9IFtdLCA0OiBjb2x1bW40ID0gW10sIDU6IGNvbHVtbjUgPSBbXSwgNjogY29sdW1uNiA9IFtdLCA3OiBjb2x1bW43ID0gW10sIDg6IGNvbHVtbjggPSBbXSwgOTogY29sdW1uOSA9IFtdIH1cbiAgLy8gbGV0IGNvbHMgPSB7IDE6IGNvbDE9W10sIDI6IGNvbDI9W10sIDM6IGNvbDM9W10sIDQ6IGNvbDQ9W10sIDU6IGNvbDU9W10sIDY6IGNvbDY9W10sIDc6IGNvbDc9W10sIDg6IGNvbDg9W10sIDk6IGNvbDk9W10gfTtcblxuICBsZXQgYyA9IDA7XG5cbiAgY3R4LmJlZ2luUGF0aCgpO1xuXG4gIGZvciAobGFyZ2UgPSAwOyBsYXJnZSA8IDU0MDsgbGFyZ2UgKz0gMTgwKSB7XG4gICAgY29uc29sZS5sb2coJ1cgICAgVCAgICAgRicpO1xuICAgIC8vIHRoaXMgaXMgdGhlIGVudGlyZSBsZWZ0IHNpZGUgMyBib3hlcyBkb3duOiBcblxuXG4gICAgZm9yIChiID0gMDsgYiA8IDE4MDsgYiArPSAxODApIHtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgIGxldCBib3ggPSBbXTtcblxuICAgICAgLy8gdGhpcyBpcyBvbmUgYm94OiBcblxuICAgICAgbGV0IGNoZWNrcG9pbnQgPSAwO1xuXG4gICAgICBmb3IgKHggPSBiOyB4IDwgYiArIDU0MDsgeCArPSA2MCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgY29sdW1uICR7Y291bnR9YCk7IGNvdW50Kys7XG4gICAgICAgIGxldCBjb2wgPSBbXTtcblxuICAgICAgICAvLyB0aGlzIGdvZXMgYWNyb3NzIHRoZSB4IGF4aXMgMyAob3IgOSBkZXBlbmRpbmcgb24gdGhlIHggbGltaXQpIHNwYWNlcyBhbmQgZ2VuZXJhdGVzIGVhY2ggbGl0dGxlIGNvbHVtbiBpbiB0aGUgc21hbGxib3guIFxuICAgICAgICBjaGVja3BvaW50Kys7XG5cbiAgICAgICAgZm9yICh5ID0gbGFyZ2U7IHkgPCAobGFyZ2UgKyAxODApOyB5ICs9IDYwKSB7XG5cbiAgICAgICAgICAvLyB0aGlzIGdvZXMgZG93biB0aGUgeSBheGlzIChvbmUgM3gzIGJveCBhdCBhIHRpbWUpIGFuZCBhZGRzIGxpdHRsZSBzcXVhcmVzIHRvIGNhbnZhcyBhbmQgbnVtcyB0byB0aGUgY29sIHRvIGJlIGFkZGVkIHRvIHRoZSBzbWFsbGJveC4gXG5cbiAgICAgICAgICAvLyBJIG5lZWQgdG8gYWRkIHRoZSBjb2xzIHRvIGEgbGFyZ2VyIGNvbHVtbiBhbmQgY2hlY2sgZXZlcnkgdGltZSBJIGdvIHRvIHRoZSBuZXh0IGJveCBpZiB0aGUgY29sIGZyb20gdGhlIHByZXZpb3VzIGJveCBoYXMgdGhlIG51bXMuIGJlIGNhcmVmdWwgYWJvdXQgYWRkaW5nIHRvIGNvbHVtbjEsIGNvbHVtbjIsIG9yIGNvbHVtbjMuIFxuXG4gICAgICAgICAgY3R4LnJlY3QoeCwgeSwgNjAsIDYwKTtcbiAgICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICBsZXQgbnVtID0gZ2VuZXJhdGVOdW0oKTtcbiAgICAgICAgICBsZXQgYm9vbCA9IGZhbHNlO1xuXG5cbiAgICAgICAgICBpZiAoIWNvbHVtbnNbY2hlY2twb2ludF0uZmxhdCgpLmluY2x1ZGVzKG51bSkpIHtcbiAgICAgICAgICAgIGJvb2wgPSB0cnVlO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAoIWJveC5pbmNsdWRlcyhudW0pICYmIGJvb2wpIHtcbiAgICAgICAgICAgIGNvbC5wdXNoKG51bSk7IGJveC5wdXNoKG51bSk7XG4gICAgICAgICAgICBjdHguZmlsbFRleHQobnVtLCB4ICsgMjUsIHkgKyA0NSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbC5wdXNoKFwiXCIpOyBib3gucHVzaChcIlwiKTtcbiAgICAgICAgICB9XG5cblxuICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgfVxuICAgICAgICBjb2x1bW5zW2NoZWNrcG9pbnRdLnB1c2goY29sKTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKGBCb3g6ICR7Ym94fWApO1xuICAgIH1cbiAgfVxuXG4gIGxldCBjb2xzID0geyAxOiBjb2wxID0gW10sIDI6IGNvbDIgPSBbXSwgMzogY29sMyA9IFtdLCA0OiBjb2w0ID0gW10sIDU6IGNvbDUgPSBbXSwgNjogY29sNiA9IFtdLCA3OiBjb2w3ID0gW10sIDg6IGNvbDggPSBbXSwgOTogY29sOSA9IFtdIH07XG5cbiAgZm9yIChpID0gMTsgaSA8PSA5OyBpKyspIHtcbiAgICBjb2xzW2ldID0gcGFyc2lmeShjb2x1bW5zW2ldKTtcbiAgfTtcblxuICBmb3IgKGkgPSAxOyBpIDw9IDk7IGkrKykge1xuICAgIC8vIGNvbnNvbGUubG9nKGBjb2wgJHtpfTogJHtjb2xzW2ldfWApO1xuICAgIGNvbnNvbGUubG9nKGBjb2x1bW4gJHtpfTogJHtjb2x1bW5zW2ldfWApO1xuICB9XG5cbiAgLy8gbGV0IHJvd3MgPSB7IDE6IHJvdzEsIDI6IHJvdzIsIDM6IHJvdzMsIDQ6IHJvdzQsIDU6IHJvdzUsIDY6IHJvdzYsIDc6IHJvdzcsIDg6IHJvdzgsIDk6IHJvdzkgfTtcblxuICBmb3IgKGkgPSAxOyBpIDw9IDk7IGkrKykge1xuICAgIGZvciAoaiA9IDE7IGogPD0gOTsgaisrKSB7XG4gICAgICByb3dzW2ldLnB1c2goY29sc1tqXVtpIC0gMV0pO1xuICAgIH1cbiAgfTtcblxuICBmb3IgKGkgPSAxOyBpIDw9IDk7IGkrKykge1xuICAgIGNvbnNvbGUubG9nKGByb3cgJHtpfTogJHtyb3dzW2ldfWApO1xuICB9XG5cbn1cblxuLy8gZHJhd1JlY3QoKTtcblxuXG4gICAgLy8gZHJhd0xhcmdlQm94KCk7XG5cbiAgICAvLyBkcmF3U21hbGxCb3goMCwgMTgwLCAwLCAxODApO1xuXG5cbiAgICAvLyBkcmF3U21hbGxCb3goKTtcbiAgICAvLyBTdWRva3UuZHJhd0xhcmdlQm94O1xuICAgIC8vIHNldEludGVydmFsKGRyYXdSZWN0LCA0MCk7XG5cblxuXG5sZXQgYiA9IG5ldyBCb2FyZChjYW52YXMsY3R4KTtcbmIuZ2VuZXJhdGVOdW0oKTtcblxuXG4vLyBiLmRyYXdCYWxsKCk7XG5iLmRyYXdCb3hlcygpO1xuLy8gYi5kcmF3Qm9hcmQoKTtcbmIucGxhY2VOdW1zKDAsMCk7XG5iLnBsYWNlTnVtcygwLDE4MCk7XG5iLnBsYWNlTnVtcygwLDM2MCk7XG5cblxuYi5wbGFjZU51bXMoMTgwLDApO1xuYi5wbGFjZU51bXMoMTgwLDE4MCk7XG5iLnBsYWNlTnVtcygxODAsMzYwKTtcblxuXG5iLnBsYWNlTnVtcygzNjAsMCk7XG5iLnBsYWNlTnVtcygzNjAsMTgwKTtcbmIucGxhY2VOdW1zKDM2MCwzNjApO1xuXG5cbmIuZ2VuUm93cygpO1xuXG4vLyBiLnBsYWNlTnVtcygwLDApO1xuXG4vLyBiLnBsYWNlTnVtcygxODAsIDE4MCk7XG4vLyBiLnBsYWNlTnVtcygwLCAxODApO1xuLy8gYi5wbGFjZU51bXMoMCwgMzYwKTtcbi8vIGIucGxhY2VOdW1zKDE4MCwgMCk7XG5cbmIuZHJhd091dGxpbmUoKTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9