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
      var count = startX / 60; // for (let x=180; x<360; x+=60) {

      for (var x = startX; x < startX + 180; x += 60) {
        count++;
        var col = [];

        for (var y = startY; y < startY + 180; y += 60) {
          // this.ctx.rect(x,y,60,60);
          num = this.generateNum();

          if (!box.includes(num) && !this.columns[count - 1].flat().flat().includes(num)) {
            box.push(num);
            col.push(num);
            this.ctx.fillText(num, x + 25, y + 45);
          }
        }

        this.columns[count - 1].push(col);
        this.columns[count - 1].flat();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2JvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3N1ZG9rdS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiQm9hcmQiLCJjYW52YXMiLCJjdHgiLCJyb3dzIiwiY29sdW1ucyIsImdlbmVyYXRlTnVtIiwiYmluZCIsImRyYXdCYWxsIiwiZHJhd0JveGVzIiwicGxhY2VOdW1zIiwibnVtIiwiTWF0aCIsImNlaWwiLCJyYW5kb20iLCJjb25zb2xlIiwibG9nIiwiYmVnaW5QYXRoIiwiYXJjIiwiUEkiLCJmaWxsU3R5bGUiLCJzdHJva2UiLCJjbG9zZVBhdGgiLCJsaW5lV2lkdGgiLCJ4IiwibW92ZVRvIiwibGluZVRvIiwieSIsInJlY3QiLCJzdGFydFgiLCJzdGFydFkiLCJib3giLCJjb3VudCIsImNvbCIsImluY2x1ZGVzIiwiZmxhdCIsInB1c2giLCJmaWxsVGV4dCIsIk9iamVjdCIsInZhbHVlcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZXF1aXJlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJwYXJzaWZ5IiwiYXJyIiwib2JqIiwiZm9yRWFjaCIsImVsIiwibmV3QXJyIiwia2V5cyIsImtleSIsInNwbGl0IiwicGFyc2VJbnQiLCJkcmF3UmVjdCIsInJvdzEiLCJyb3cyIiwicm93MyIsInJvdzQiLCJyb3c1Iiwicm93NiIsInJvdzciLCJyb3c4Iiwicm93OSIsImNvbHVtbjEiLCJjb2x1bW4yIiwiY29sdW1uMyIsImNvbHVtbjQiLCJjb2x1bW41IiwiY29sdW1uNiIsImNvbHVtbjciLCJjb2x1bW44IiwiY29sdW1uOSIsImMiLCJsYXJnZSIsImIiLCJjaGVja3BvaW50IiwiYm9vbCIsImNvbHMiLCJjb2wxIiwiY29sMiIsImNvbDMiLCJjb2w0IiwiY29sNSIsImNvbDYiLCJjb2w3IiwiY29sOCIsImNvbDkiLCJpIiwiaiIsImRyYXdPdXRsaW5lIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0NBRUEsMkI7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDSk1BLEs7QUFDSixpQkFBWUMsTUFBWixFQUFvQkMsR0FBcEIsRUFBeUI7QUFBQTs7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQUtDLElBQUwsR0FBWTtBQUNWLFNBQUcsRUFETztBQUVWLFNBQUcsRUFGTztBQUdWLFNBQUcsRUFITztBQUlWLFNBQUcsRUFKTztBQUtWLFNBQUcsRUFMTztBQU1WLFNBQUcsRUFOTztBQU9WLFNBQUcsRUFQTztBQVFWLFNBQUcsRUFS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QjBFLENBQW5CLGVBQXlCdEYsSUFBSSxDQUFDc0YsQ0FBRCxDQUE3QjtBQUNEO0FBRUYsQyxDQUVEO0FBR0k7QUFFQTtBQUdBO0FBQ0E7QUFDQTs7O0FBSUosSUFBSWIsQ0FBQyxHQUFHLElBQUk1RSxLQUFKLENBQVVDLE1BQVYsRUFBaUJDLEdBQWpCLENBQVI7QUFDQTBFLENBQUMsQ0FBQ3ZFLFdBQUYsRyxDQUdBOztBQUNBdUUsQ0FBQyxDQUFDcEUsU0FBRixHLENBQ0E7O0FBQ0FvRSxDQUFDLENBQUNuRSxTQUFGLENBQVksQ0FBWixFQUFjLENBQWQ7QUFDQW1FLENBQUMsQ0FBQ25FLFNBQUYsQ0FBWSxDQUFaLEVBQWMsR0FBZDtBQUNBbUUsQ0FBQyxDQUFDbkUsU0FBRixDQUFZLENBQVosRUFBYyxHQUFkO0FBR0FtRSxDQUFDLENBQUNuRSxTQUFGLENBQVksR0FBWixFQUFnQixDQUFoQjtBQUNBbUUsQ0FBQyxDQUFDbkUsU0FBRixDQUFZLEdBQVosRUFBZ0IsR0FBaEI7QUFDQW1FLENBQUMsQ0FBQ25FLFNBQUYsQ0FBWSxHQUFaLEVBQWdCLEdBQWhCO0FBR0FtRSxDQUFDLENBQUNuRSxTQUFGLENBQVksR0FBWixFQUFnQixDQUFoQjtBQUNBbUUsQ0FBQyxDQUFDbkUsU0FBRixDQUFZLEdBQVosRUFBZ0IsR0FBaEI7QUFDQW1FLENBQUMsQ0FBQ25FLFNBQUYsQ0FBWSxHQUFaLEVBQWdCLEdBQWhCLEUsQ0FJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBbUUsQ0FBQyxDQUFDZSxXQUFGLEc7Ozs7Ozs7Ozs7O0FDek5BLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIGltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0ICcuL3NjcmlwdHMvYm9hcmQuanMnO1xuaW1wb3J0ICcuL3NjcmlwdHMvc3Vkb2t1LmpzJztcbi8vICcvc3JjL3N0eWxlcy9pbmRleC5zY3NzJyIsImNsYXNzIEJvYXJkIHtcbiAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgpIHtcbiAgICAvLyB0aGlzLmJveGVzID0ge1xuICAgIC8vICAgMDogW10sXG4gICAgLy8gICAxOiBbXSxcbiAgICAvLyAgIDI6IFtdLFxuICAgIC8vICAgMzogW10sXG4gICAgLy8gICA0OiBbXSxcbiAgICAvLyAgIDU6IFtdLFxuICAgIC8vICAgNjogW10sXG4gICAgLy8gICA3OiBbXSxcbiAgICAvLyAgIDg6IFtdXG4gICAgLy8gfTsgIFxuICAgIHRoaXMucm93cyA9IHtcbiAgICAgIDA6IFtdLFxuICAgICAgMTogW10sXG4gICAgICAyOiBbXSxcbiAgICAgIDM6IFtdLFxuICAgICAgNDogW10sXG4gICAgICA1OiBbXSxcbiAgICAgIDY6IFtdLFxuICAgICAgNzogW10sXG4gICAgICA4OiBbXVxuICAgIH07IFxuICAgIHRoaXMuY29sdW1ucyA9IHsgXG4gICAgICAwOiBbXSwgXG4gICAgICAxOiBbXSwgXG4gICAgICAyOiBbXSwgXG4gICAgICAzOiBbXSwgXG4gICAgICA0OiBbXSwgXG4gICAgICA1OiBbXSwgXG4gICAgICA2OiBbXSwgXG4gICAgICA3OiBbXSwgXG4gICAgICA4OiBbXVxuICAgIH07IFxuXG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5jdHggPSBjdHg7XG5cbiAgICB0aGlzLmdlbmVyYXRlTnVtID0gdGhpcy5nZW5lcmF0ZU51bS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZHJhd0JhbGwgPSB0aGlzLmRyYXdCYWxsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kcmF3Qm94ZXMgPSB0aGlzLmRyYXdCb3hlcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMucGxhY2VOdW1zID0gdGhpcy5wbGFjZU51bXMuYmluZCh0aGlzKTtcbiAgfVxuICBcbiAgZ2VuZXJhdGVOdW0oKSB7XG4gICAgbGV0IG51bSA9IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogOSk7XG4gICAgY29uc29sZS5sb2coYG51bTogJHtudW19YCk7XG4gICAgcmV0dXJuIG51bTsgXG4gIH1cblxuICBkcmF3QmFsbCgpIHtcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcblxuICAgIHRoaXMuY3R4LmFyYyg1MCwgNTAsIDIwLCAwLCBNYXRoLlBJICogMik7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjMDA5NUREXCI7XG4gICAgdGhpcy5jdHguc3Ryb2tlKCk7IFxuICAgIC8vIHRoaXMuY3R4LmZpbGwoKTtcbiAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgfVxuXG4gIGRyYXdPdXRsaW5lKCkge1xuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDQ7IFxuXG4gICAgZm9yIChsZXQgeCA9IDA7IHg8PTU0MDsgeCs9MTgwKSB7XG4gICAgICB0aGlzLmN0eC5tb3ZlVG8oeCwwKTtcbiAgICAgIHRoaXMuY3R4LmxpbmVUbyh4LCA1NDApO1xuXG4gICAgICB0aGlzLmN0eC5tb3ZlVG8oMCx4KTtcbiAgICAgIHRoaXMuY3R4LmxpbmVUbyg1NDAsIHgpO1xuICAgIH1cblxuICAgIC8vIGZvciAobGV0IHkgPSAwOyB5PD01NDA7IHkrPTE4MCkge1xuICAgIC8vICAgdGhpcy5jdHgubW92ZVRvKDAseSk7XG4gICAgLy8gICB0aGlzLmN0eC5saW5lVG8oNTQwLCB5KTtcbiAgICAvLyB9XG5cbiAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICB9XG5cbiAgZHJhd0JveGVzKCkge1xuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDAuNTtcbiAgICBmb3IgKGxldCB4PTA7IHggPCA1NDA7IHgrPTYwKSB7XG4gICAgICBmb3IgKGxldCB5PTA7IHk8NTQwOyB5Kz02MCkge1xuICAgICAgICB0aGlzLmN0eC5yZWN0KHgseSw2MCw2MCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpOyBcbiAgfVxuXG4gIHBsYWNlTnVtcyhzdGFydFgsc3RhcnRZKSB7XG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG5cbiAgICAvLyB4IGlzIDE4MCAtPiBjb3VudCA9IDMgYmMgNTQwLzkgPSA2MCBhbmQgMTgwLzYwID0gM1xuXG4gICAgbGV0IGJveCA9IFtdO1xuICAgIGxldCBjb3VudCA9IHN0YXJ0WC82MDsgXG5cbiAgICAvLyBmb3IgKGxldCB4PTE4MDsgeDwzNjA7IHgrPTYwKSB7XG4gICAgZm9yIChsZXQgeD1zdGFydFg7IHg8IChzdGFydFgrMTgwKTsgeCs9NjApIHtcbiAgICAgIGNvdW50ICsrOyBcbiAgICAgIGxldCBjb2wgPSBbXTsgXG4gICAgICBmb3IgKGxldCB5PXN0YXJ0WTsgeTwoc3RhcnRZKzE4MCk7IHkrPTYwKSB7XG4gICAgICAgIC8vIHRoaXMuY3R4LnJlY3QoeCx5LDYwLDYwKTtcbiAgICAgICAgbnVtID0gdGhpcy5nZW5lcmF0ZU51bSgpO1xuICAgICAgICBpZiAoIWJveC5pbmNsdWRlcyhudW0pICYmICF0aGlzLmNvbHVtbnNbY291bnQtMV0uZmxhdCgpLmZsYXQoKS5pbmNsdWRlcyhudW0pKSB7XG4gICAgICAgICAgYm94LnB1c2gobnVtKTsgXG4gICAgICAgICAgY29sLnB1c2gobnVtKTtcbiAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChudW0sIHggKyAyNSwgeSArIDQ1KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5jb2x1bW5zW2NvdW50LTFdLnB1c2goY29sKTtcbiAgICAgIHRoaXMuY29sdW1uc1tjb3VudC0xXS5mbGF0KCk7XG4gICAgICBjb25zb2xlLmxvZyhgYm94OiBbJHtib3h9XWApO1xuICAgICAgY29uc29sZS5sb2coXCJDb2x1bW5zOiBcIiwgdGhpcy5jb2x1bW5zKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGBDb2x1bW5zOiAke3RoaXMuY29sdW1uc31gKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiY29sczpcIiwgT2JqZWN0LnZhbHVlcyh0aGlzLmNvbHVtbnMpLmZsYXQoKSk7XG4gICAgfVxuXG4gICAgLy8gdGhpcy5jdHgucmVjdCgxODAsIDE4MCwgNjAsIDYwKTtcbiAgICAvLyBsZXQgbnVtID0gdGhpcy5nZW5lcmF0ZU51bSgpO1xuICAgIC8vIHRoaXMuY3R4LmZpbGxUZXh0KG51bSwgMTgwICsgMjUsIDE4MCArIDQ1KTtcblxuICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICB9XG5cbn07XG5cbi8vIGxldCBiID0gbmV3IEJvYXJkOyBcbi8vIGNvbnNvbGUubG9nKGIuZ2VuZXJhdGVOdW0oKSk7IFxuLy8gYi5nZW5lcmF0ZU51bSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJvYXJkOyBcblxuXG5cbi8vIGxldCBjb3VudCA9IDE7XG4vLyBsZXQgcm93cyA9IHsgMTogcm93MSA9IFtdLCAyOiByb3cyID0gW10sIDM6IHJvdzMgPSBbXSwgNDogcm93NCA9IFtdLCA1OiByb3c1ID0gW10sIDY6IHJvdzYgPSBbXSwgNzogcm93NyA9IFtdLCA4OiByb3c4ID0gW10sIDk6IHJvdzkgPSBbXSB9O1xuLy8gbGV0IGNvbHVtbnMgPSB7IDE6IGNvbHVtbjEgPSBbXSwgMjogY29sdW1uMiA9IFtdLCAzOiBjb2x1bW4zID0gW10sIDQ6IGNvbHVtbjQgPSBbXSwgNTogY29sdW1uNSA9IFtdLCA2OiBjb2x1bW42ID0gW10sIDc6IGNvbHVtbjcgPSBbXSwgODogY29sdW1uOCA9IFtdLCA5OiBjb2x1bW45ID0gW10gfVxuLy8gLy8gbGV0IGNvbHMgPSB7IDE6IGNvbDE9W10sIDI6IGNvbDI9W10sIDM6IGNvbDM9W10sIDQ6IGNvbDQ9W10sIDU6IGNvbDU9W10sIDY6IGNvbDY9W10sIDc6IGNvbDc9W10sIDg6IGNvbDg9W10sIDk6IGNvbDk9W10gfTtcblxuLy8gbGV0IGMgPSAwO1xuXG5cbi8vIGZvciAobGFyZ2UgPSAwOyBsYXJnZSA8IDU0MDsgbGFyZ2UgKz0gMTgwKSB7XG4vLyAgIGNvbnNvbGUubG9nKCdXICAgIFQgICAgIEYnKTtcbi8vICAgLy8gdGhpcyBpcyB0aGUgZW50aXJlIGxlZnQgc2lkZSAzIGJveGVzIGRvd246IFxuXG5cbi8vICAgZm9yIChiID0gMDsgYiA8IDE4MDsgYiArPSAxODApIHtcbi8vICAgICBjdHguc3Ryb2tlKCk7XG4vLyAgICAgbGV0IGJveCA9IFtdO1xuXG4vLyAgICAgLy8gdGhpcyBpcyBvbmUgYm94OiBcblxuLy8gICAgIGxldCBjaGVja3BvaW50ID0gMDtcblxuLy8gICAgIGZvciAoeCA9IGI7IHggPCBiICsgNTQwOyB4ICs9IDYwKSB7XG4vLyAgICAgICBjb25zb2xlLmxvZyhgY29sdW1uICR7Y291bnR9YCk7IGNvdW50Kys7XG4vLyAgICAgICBsZXQgY29sID0gW107XG5cbi8vICAgICAgIC8vIHRoaXMgZ29lcyBhY3Jvc3MgdGhlIHggYXhpcyAzIChvciA5IGRlcGVuZGluZyBvbiB0aGUgeCBsaW1pdCkgc3BhY2VzIGFuZCBnZW5lcmF0ZXMgZWFjaCBsaXR0bGUgY29sdW1uIGluIHRoZSBzbWFsbGJveC4gXG4vLyAgICAgICBjaGVja3BvaW50Kys7XG5cbi8vICAgICAgIGZvciAoeSA9IGxhcmdlOyB5IDwgKGxhcmdlICsgMTgwKTsgeSArPSA2MCkge1xuXG4vLyAgICAgICAgIC8vIHRoaXMgZ29lcyBkb3duIHRoZSB5IGF4aXMgKG9uZSAzeDMgYm94IGF0IGEgdGltZSkgYW5kIGFkZHMgbGl0dGxlIHNxdWFyZXMgdG8gY2FudmFzIGFuZCBudW1zIHRvIHRoZSBjb2wgdG8gYmUgYWRkZWQgdG8gdGhlIHNtYWxsYm94LiBcblxuLy8gICAgICAgICAvLyBJIG5lZWQgdG8gYWRkIHRoZSBjb2xzIHRvIGEgbGFyZ2VyIGNvbHVtbiBhbmQgY2hlY2sgZXZlcnkgdGltZSBJIGdvIHRvIHRoZSBuZXh0IGJveCBpZiB0aGUgY29sIGZyb20gdGhlIHByZXZpb3VzIGJveCBoYXMgdGhlIG51bXMuIGJlIGNhcmVmdWwgYWJvdXQgYWRkaW5nIHRvIGNvbHVtbjEsIGNvbHVtbjIsIG9yIGNvbHVtbjMuIFxuXG4vLyAgICAgICAgIGN0eC5yZWN0KHgsIHksIDYwLCA2MCk7XG4vLyAgICAgICAgIGN0eC5zdHJva2UoKTtcblxuLy8gICAgICAgICBsZXQgbnVtID0gZ2VuZXJhdGVOdW0oKTtcbi8vICAgICAgICAgbGV0IGJvb2wgPSBmYWxzZTtcblxuXG4vLyAgICAgICAgIGlmICghY29sdW1uc1tjaGVja3BvaW50XS5mbGF0KCkuaW5jbHVkZXMobnVtKSkge1xuLy8gICAgICAgICAgIGJvb2wgPSB0cnVlO1xuLy8gICAgICAgICB9O1xuXG4vLyAgICAgICAgIGlmICghYm94LmluY2x1ZGVzKG51bSkgJiYgYm9vbCkge1xuLy8gICAgICAgICAgIGNvbC5wdXNoKG51bSk7IGJveC5wdXNoKG51bSk7XG4vLyAgICAgICAgICAgY3R4LmZpbGxUZXh0KG51bSwgeCArIDI1LCB5ICsgNDUpO1xuLy8gICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgIGNvbC5wdXNoKFwiXCIpOyBib3gucHVzaChcIlwiKTtcbi8vICAgICAgICAgfVxuXG5cbi8vICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuLy8gICAgICAgfVxuLy8gICAgICAgY29sdW1uc1tjaGVja3BvaW50XS5wdXNoKGNvbCk7XG4vLyAgICAgfVxuLy8gICAgIGNvbnNvbGUubG9nKGBCb3g6ICR7Ym94fWApO1xuLy8gICB9XG4vLyB9XG5cbi8vIGxldCBjb2xzID0geyAxOiBjb2wxID0gW10sIDI6IGNvbDIgPSBbXSwgMzogY29sMyA9IFtdLCA0OiBjb2w0ID0gW10sIDU6IGNvbDUgPSBbXSwgNjogY29sNiA9IFtdLCA3OiBjb2w3ID0gW10sIDg6IGNvbDggPSBbXSwgOTogY29sOSA9IFtdIH07XG5cbi8vIGZvciAoaSA9IDE7IGkgPD0gOTsgaSsrKSB7XG4vLyAgIGNvbHNbaV0gPSBwYXJzaWZ5KGNvbHVtbnNbaV0pO1xuLy8gfTtcblxuLy8gZm9yIChpID0gMTsgaSA8PSA5OyBpKyspIHtcbi8vICAgLy8gY29uc29sZS5sb2coYGNvbCAke2l9OiAke2NvbHNbaV19YCk7XG4vLyAgIGNvbnNvbGUubG9nKGBjb2x1bW4gJHtpfTogJHtjb2x1bW5zW2ldfWApO1xuLy8gfVxuXG4vLyAvLyBsZXQgcm93cyA9IHsgMTogcm93MSwgMjogcm93MiwgMzogcm93MywgNDogcm93NCwgNTogcm93NSwgNjogcm93NiwgNzogcm93NywgODogcm93OCwgOTogcm93OSB9O1xuXG4vLyBmb3IgKGkgPSAxOyBpIDw9IDk7IGkrKykge1xuLy8gICBmb3IgKGogPSAxOyBqIDw9IDk7IGorKykge1xuLy8gICAgIHJvd3NbaV0ucHVzaChjb2xzW2pdW2kgLSAxXSk7XG4vLyAgIH1cbi8vIH07XG5cbi8vIGZvciAoaSA9IDE7IGkgPD0gOTsgaSsrKSB7XG4vLyAgIGNvbnNvbGUubG9nKGByb3cgJHtpfTogJHtyb3dzW2ldfWApO1xuLy8gfVxuIiwiY29uc3QgQm9hcmQgPSByZXF1aXJlKFwiLi9ib2FyZFwiKTtcblxubGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlDYW52YXNcIik7XG5sZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVOdW0oKSB7XG4gIGxldCBudW0gPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDkpO1xuICBjb25zb2xlLmxvZyhudW0pO1xuICByZXR1cm4gbnVtO1xufVxuXG4vLyBmdW5jdGlvbiBkcmF3U21hbGxCb3gobGVmdCwgcmlnaHQsIHRvcCwgYm90dG9tKSB7XG4vLyAgIGxldCBjb3VudCA9IDE7XG4vLyAgIGN0eC5iZWdpblBhdGgoKTtcbi8vICAgLy8gY3R4LmxpbmVXaWR0aCA9IDEwO1xuXG4vLyAgIGxldCByb3cxID0gW107XG4vLyAgIGxldCByb3cyID0gW107XG4vLyAgIGxldCByb3czID0gW107XG5cbi8vICAgY3R4LmZvbnQgPSBcIjIwcHggQXJpYWxcIjtcbi8vICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2JhKDAsMCwyNTUsMC41KVwiO1xuLy8gICBmb3IgKGIgPSBsZWZ0OyBiIDwgcmlnaHQ7IGIgKz0gMTgwKSB7XG4vLyAgICAgY3R4LnN0cm9rZSgpO1xuLy8gICAgIGxldCBib3ggPSBbXTtcbi8vICAgICBmb3IgKHggPSBiOyB4IDwgYiArIDE4MDsgeCArPSA2MCkge1xuLy8gICAgICAgY29uc29sZS5sb2coYGNvbHVtbiAke2NvdW50fWApOyBjb3VudCsrO1xuLy8gICAgICAgbGV0IGNvbCA9IFtdO1xuLy8gICAgICAgZm9yICh5ID0gdG9wOyB5IDwgYm90dG9tOyB5ICs9IDYwKSB7XG4vLyAgICAgICAgIGN0eC5yZWN0KHgsIHksIDYwLCA2MCk7XG4vLyAgICAgICAgIGxldCBudW0gPSBnZW5lcmF0ZU51bSgpO1xuLy8gICAgICAgICBpZiAoIWNvbC5pbmNsdWRlcyhudW0pICYmICFib3guaW5jbHVkZXMobnVtKSkge1xuLy8gICAgICAgICAgIGNvbC5wdXNoKG51bSk7IGJveC5wdXNoKG51bSk7XG4vLyAgICAgICAgICAgY3R4LmZvbnQgPSBcIjE1MHB4IEFyaWFsXCI7XG4vLyAgICAgICAgICAgY3R4LmZpbGxUZXh0KG51bSwgeCArIDI1LCB5ICsgNDUpO1xuLy8gICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgIGNvbC5wdXNoKFwiXCIpOyBib3gucHVzaChcIlwiKTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBjdHguc3Ryb2tlKCk7XG4vLyAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbi8vICAgICAgIH1cblxuLy8gICAgICAgaWYgKCFyb3cxLmluY2x1ZGVzKGNvbFswXSkpIHtcbi8vICAgICAgICAgcm93MS5wdXNoKGNvbFswXSk7XG4vLyAgICAgICB9O1xuLy8gICAgICAgaWYgKCFyb3cyLmluY2x1ZGVzKGNvbFsxXSkpIHtcbi8vICAgICAgICAgcm93Mi5wdXNoKGNvbFsxXSk7XG4vLyAgICAgICB9O1xuLy8gICAgICAgaWYgKCFyb3czLmluY2x1ZGVzKGNvbFsyXSkpIHtcbi8vICAgICAgICAgcm93My5wdXNoKGNvbFsyXSk7XG4vLyAgICAgICB9O1xuLy8gICAgIH1cbi8vICAgICBjb25zb2xlLmxvZyhgUm93IDE6ICR7cm93MX1gKTtcbi8vICAgICBjb25zb2xlLmxvZyhgUm93IDI6ICR7cm93Mn1gKTtcbi8vICAgICBjb25zb2xlLmxvZyhgUm93IDM6ICR7cm93M31gKTtcbi8vICAgICAvLyBjb25zb2xlLmxvZyhgQm94OiAke2JveH1gKTtcbi8vICAgICBjb25zb2xlLmxvZyhgYm94IGJldHdlZW4gbGVmdCwgJHtsZWZ0fSwgYW5kIHJpZ2h0LCAke3JpZ2h0fSwgY29tcGxldGUhIHdpdGg6IFske2JveH1dYCk7XG4vLyAgIH1cbi8vIH1cbi8vIGZ1bmN0aW9uIGRyYXdMYXJnZUJveCgpIHtcbi8vICAgZm9yIChsZWZ0ID0gMDsgbGVmdCA8IDU0MDsgbGVmdCArPSAxODApIHtcbi8vICAgICBkcmF3U21hbGxCb3gobGVmdCwgbGVmdCArIDE4MCwgMCwgMTgwKTtcbi8vICAgICBkcmF3U21hbGxCb3gobGVmdCwgbGVmdCArIDE4MCwgMTgwLCAzNjApO1xuLy8gICAgIGRyYXdTbWFsbEJveChsZWZ0LCBsZWZ0ICsgMTgwLCAzNjAsIDU0MCk7XG4vLyAgICAgLy8gY29uc29sZS5sb2coZHJhd1NtYWxsQm94LnJvdzEpXG4vLyAgIH1cbi8vIH07XG5cblxuXG5mdW5jdGlvbiBwYXJzaWZ5KGFycikge1xuICBsZXQgb2JqID0ge307XG4gIGFyci5mb3JFYWNoKGVsID0+IHtcbiAgICBvYmpbZWxdID0gdHJ1ZTtcbiAgfSlcbiAgbmV3QXJyID0gW107XG4gIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChrZXkgPT4ge1xuICAgIGtleS5zcGxpdCgnLCcpLmZvckVhY2goZWwgPT4ge1xuICAgICAgbmV3QXJyLnB1c2gocGFyc2VJbnQoZWwpKTtcbiAgICB9KVxuICB9KVxuICByZXR1cm4gbmV3QXJyO1xufVxuXG5mdW5jdGlvbiBkcmF3UmVjdCgpIHtcblxuICBsZXQgY291bnQgPSAxO1xuICBsZXQgcm93cyA9IHsgMTogcm93MSA9IFtdLCAyOiByb3cyID0gW10sIDM6IHJvdzMgPSBbXSwgNDogcm93NCA9IFtdLCA1OiByb3c1ID0gW10sIDY6IHJvdzYgPSBbXSwgNzogcm93NyA9IFtdLCA4OiByb3c4ID0gW10sIDk6IHJvdzkgPSBbXSB9O1xuICBsZXQgY29sdW1ucyA9IHsgMTogY29sdW1uMSA9IFtdLCAyOiBjb2x1bW4yID0gW10sIDM6IGNvbHVtbjMgPSBbXSwgNDogY29sdW1uNCA9IFtdLCA1OiBjb2x1bW41ID0gW10sIDY6IGNvbHVtbjYgPSBbXSwgNzogY29sdW1uNyA9IFtdLCA4OiBjb2x1bW44ID0gW10sIDk6IGNvbHVtbjkgPSBbXSB9XG4gIC8vIGxldCBjb2xzID0geyAxOiBjb2wxPVtdLCAyOiBjb2wyPVtdLCAzOiBjb2wzPVtdLCA0OiBjb2w0PVtdLCA1OiBjb2w1PVtdLCA2OiBjb2w2PVtdLCA3OiBjb2w3PVtdLCA4OiBjb2w4PVtdLCA5OiBjb2w5PVtdIH07XG5cbiAgbGV0IGMgPSAwO1xuXG4gIGN0eC5iZWdpblBhdGgoKTtcblxuICBmb3IgKGxhcmdlID0gMDsgbGFyZ2UgPCA1NDA7IGxhcmdlICs9IDE4MCkge1xuICAgIGNvbnNvbGUubG9nKCdXICAgIFQgICAgIEYnKTtcbiAgICAvLyB0aGlzIGlzIHRoZSBlbnRpcmUgbGVmdCBzaWRlIDMgYm94ZXMgZG93bjogXG5cblxuICAgIGZvciAoYiA9IDA7IGIgPCAxODA7IGIgKz0gMTgwKSB7XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICBsZXQgYm94ID0gW107XG5cbiAgICAgIC8vIHRoaXMgaXMgb25lIGJveDogXG5cbiAgICAgIGxldCBjaGVja3BvaW50ID0gMDtcblxuICAgICAgZm9yICh4ID0gYjsgeCA8IGIgKyA1NDA7IHggKz0gNjApIHtcbiAgICAgICAgY29uc29sZS5sb2coYGNvbHVtbiAke2NvdW50fWApOyBjb3VudCsrO1xuICAgICAgICBsZXQgY29sID0gW107XG5cbiAgICAgICAgLy8gdGhpcyBnb2VzIGFjcm9zcyB0aGUgeCBheGlzIDMgKG9yIDkgZGVwZW5kaW5nIG9uIHRoZSB4IGxpbWl0KSBzcGFjZXMgYW5kIGdlbmVyYXRlcyBlYWNoIGxpdHRsZSBjb2x1bW4gaW4gdGhlIHNtYWxsYm94LiBcbiAgICAgICAgY2hlY2twb2ludCsrO1xuXG4gICAgICAgIGZvciAoeSA9IGxhcmdlOyB5IDwgKGxhcmdlICsgMTgwKTsgeSArPSA2MCkge1xuXG4gICAgICAgICAgLy8gdGhpcyBnb2VzIGRvd24gdGhlIHkgYXhpcyAob25lIDN4MyBib3ggYXQgYSB0aW1lKSBhbmQgYWRkcyBsaXR0bGUgc3F1YXJlcyB0byBjYW52YXMgYW5kIG51bXMgdG8gdGhlIGNvbCB0byBiZSBhZGRlZCB0byB0aGUgc21hbGxib3guIFxuXG4gICAgICAgICAgLy8gSSBuZWVkIHRvIGFkZCB0aGUgY29scyB0byBhIGxhcmdlciBjb2x1bW4gYW5kIGNoZWNrIGV2ZXJ5IHRpbWUgSSBnbyB0byB0aGUgbmV4dCBib3ggaWYgdGhlIGNvbCBmcm9tIHRoZSBwcmV2aW91cyBib3ggaGFzIHRoZSBudW1zLiBiZSBjYXJlZnVsIGFib3V0IGFkZGluZyB0byBjb2x1bW4xLCBjb2x1bW4yLCBvciBjb2x1bW4zLiBcblxuICAgICAgICAgIGN0eC5yZWN0KHgsIHksIDYwLCA2MCk7XG4gICAgICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgbGV0IG51bSA9IGdlbmVyYXRlTnVtKCk7XG4gICAgICAgICAgbGV0IGJvb2wgPSBmYWxzZTtcblxuXG4gICAgICAgICAgaWYgKCFjb2x1bW5zW2NoZWNrcG9pbnRdLmZsYXQoKS5pbmNsdWRlcyhudW0pKSB7XG4gICAgICAgICAgICBib29sID0gdHJ1ZTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKCFib3guaW5jbHVkZXMobnVtKSAmJiBib29sKSB7XG4gICAgICAgICAgICBjb2wucHVzaChudW0pOyBib3gucHVzaChudW0pO1xuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KG51bSwgeCArIDI1LCB5ICsgNDUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb2wucHVzaChcIlwiKTsgYm94LnB1c2goXCJcIik7XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29sdW1uc1tjaGVja3BvaW50XS5wdXNoKGNvbCk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhgQm94OiAke2JveH1gKTtcbiAgICB9XG4gIH1cblxuICBsZXQgY29scyA9IHsgMTogY29sMSA9IFtdLCAyOiBjb2wyID0gW10sIDM6IGNvbDMgPSBbXSwgNDogY29sNCA9IFtdLCA1OiBjb2w1ID0gW10sIDY6IGNvbDYgPSBbXSwgNzogY29sNyA9IFtdLCA4OiBjb2w4ID0gW10sIDk6IGNvbDkgPSBbXSB9O1xuXG4gIGZvciAoaSA9IDE7IGkgPD0gOTsgaSsrKSB7XG4gICAgY29sc1tpXSA9IHBhcnNpZnkoY29sdW1uc1tpXSk7XG4gIH07XG5cbiAgZm9yIChpID0gMTsgaSA8PSA5OyBpKyspIHtcbiAgICAvLyBjb25zb2xlLmxvZyhgY29sICR7aX06ICR7Y29sc1tpXX1gKTtcbiAgICBjb25zb2xlLmxvZyhgY29sdW1uICR7aX06ICR7Y29sdW1uc1tpXX1gKTtcbiAgfVxuXG4gIC8vIGxldCByb3dzID0geyAxOiByb3cxLCAyOiByb3cyLCAzOiByb3czLCA0OiByb3c0LCA1OiByb3c1LCA2OiByb3c2LCA3OiByb3c3LCA4OiByb3c4LCA5OiByb3c5IH07XG5cbiAgZm9yIChpID0gMTsgaSA8PSA5OyBpKyspIHtcbiAgICBmb3IgKGogPSAxOyBqIDw9IDk7IGorKykge1xuICAgICAgcm93c1tpXS5wdXNoKGNvbHNbal1baSAtIDFdKTtcbiAgICB9XG4gIH07XG5cbiAgZm9yIChpID0gMTsgaSA8PSA5OyBpKyspIHtcbiAgICBjb25zb2xlLmxvZyhgcm93ICR7aX06ICR7cm93c1tpXX1gKTtcbiAgfVxuXG59XG5cbi8vIGRyYXdSZWN0KCk7XG5cblxuICAgIC8vIGRyYXdMYXJnZUJveCgpO1xuXG4gICAgLy8gZHJhd1NtYWxsQm94KDAsIDE4MCwgMCwgMTgwKTtcblxuXG4gICAgLy8gZHJhd1NtYWxsQm94KCk7XG4gICAgLy8gU3Vkb2t1LmRyYXdMYXJnZUJveDtcbiAgICAvLyBzZXRJbnRlcnZhbChkcmF3UmVjdCwgNDApO1xuXG5cblxubGV0IGIgPSBuZXcgQm9hcmQoY2FudmFzLGN0eCk7XG5iLmdlbmVyYXRlTnVtKCk7XG5cblxuLy8gYi5kcmF3QmFsbCgpO1xuYi5kcmF3Qm94ZXMoKTtcbi8vIGIuZHJhd0JvYXJkKCk7XG5iLnBsYWNlTnVtcygwLDApO1xuYi5wbGFjZU51bXMoMCwxODApO1xuYi5wbGFjZU51bXMoMCwzNjApO1xuXG5cbmIucGxhY2VOdW1zKDE4MCwwKTtcbmIucGxhY2VOdW1zKDE4MCwxODApO1xuYi5wbGFjZU51bXMoMTgwLDM2MCk7XG5cblxuYi5wbGFjZU51bXMoMzYwLDApO1xuYi5wbGFjZU51bXMoMzYwLDE4MCk7XG5iLnBsYWNlTnVtcygzNjAsMzYwKTtcblxuXG5cbi8vIGIucGxhY2VOdW1zKDAsMCk7XG5cbi8vIGIucGxhY2VOdW1zKDE4MCwgMTgwKTtcbi8vIGIucGxhY2VOdW1zKDAsIDE4MCk7XG4vLyBiLnBsYWNlTnVtcygwLCAzNjApO1xuLy8gYi5wbGFjZU51bXMoMTgwLCAwKTtcblxuYi5kcmF3T3V0bGluZSgpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=