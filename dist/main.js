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
      this.ctx.beginPath();
      var box = [];
      var count = 0; // for (let x=180; x<360; x+=60) {

      for (var x = startX; x < startX + 180; x += 60) {
        count++;
        var col = [];

        for (var y = startY; y < startY + 180; y += 60) {
          // this.ctx.rect(x,y,60,60);
          num = this.generateNum();

          if (!box.includes(num)) {
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

b.placeNums(0, 0); // b.placeNums(0,180);
// b.placeNums(0,360);
// b.placeNums(180,0);
// b.placeNums(180,180);
// b.placeNums(180,360);
// b.placeNums(360,0);
// b.placeNums(360,180);
// b.placeNums(360,360);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2JvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3N1ZG9rdS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiQm9hcmQiLCJjYW52YXMiLCJjdHgiLCJyb3dzIiwiY29sdW1ucyIsImdlbmVyYXRlTnVtIiwiYmluZCIsImRyYXdCYWxsIiwiZHJhd0JveGVzIiwicGxhY2VOdW1zIiwibnVtIiwiTWF0aCIsImNlaWwiLCJyYW5kb20iLCJjb25zb2xlIiwibG9nIiwiYmVnaW5QYXRoIiwiYXJjIiwiUEkiLCJmaWxsU3R5bGUiLCJzdHJva2UiLCJjbG9zZVBhdGgiLCJsaW5lV2lkdGgiLCJ4IiwibW92ZVRvIiwibGluZVRvIiwieSIsInJlY3QiLCJzdGFydFgiLCJzdGFydFkiLCJib3giLCJjb3VudCIsImNvbCIsImluY2x1ZGVzIiwicHVzaCIsImZpbGxUZXh0IiwiZmxhdCIsIk9iamVjdCIsInZhbHVlcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZXF1aXJlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJwYXJzaWZ5IiwiYXJyIiwib2JqIiwiZm9yRWFjaCIsImVsIiwibmV3QXJyIiwia2V5cyIsImtleSIsInNwbGl0IiwicGFyc2VJbnQiLCJkcmF3UmVjdCIsInJvdzEiLCJyb3cyIiwicm93MyIsInJvdzQiLCJyb3c1Iiwicm93NiIsInJvdzciLCJyb3c4Iiwicm93OSIsImNvbHVtbjEiLCJjb2x1bW4yIiwiY29sdW1uMyIsImNvbHVtbjQiLCJjb2x1bW41IiwiY29sdW1uNiIsImNvbHVtbjciLCJjb2x1bW44IiwiY29sdW1uOSIsImMiLCJsYXJnZSIsImIiLCJjaGVja3BvaW50IiwiYm9vbCIsImNvbHMiLCJjb2wxIiwiY29sMiIsImNvbDMiLCJjb2w0IiwiY29sNSIsImNvbDYiLCJjb2w3IiwiY29sOCIsImNvbDkiLCJpIiwiaiIsImRyYXdPdXRsaW5lIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0NBRUEsMkI7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDSk1BLEs7QUFDSixpQkFBWUMsTUFBWixFQUFvQkMsR0FBcEIsRUFBeUI7QUFBQTs7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQUtDLElBQUwsR0FBWTtBQUNWLFNBQUcsRUFETztBQUVWLFNBQUcsRUFGTztBQUdWLFNBQUcsRUFITztBQUlWLFNBQUcsRUFKTztBQUtWLFNBQUcsRUFMTztBQU1WLFNBQUcsRUFOTztBQU9WLFNBQUcsRUFQTztBQVFWLFNBQUcsRUFS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LEVBQWlCQyxHQUFqQixDQUFSO0FBQ0EwRSxDQUFDLENBQUN2RSxXQUFGLEcsQ0FHQTs7QUFDQXVFLENBQUMsQ0FBQ3BFLFNBQUYsRyxDQUNBOztBQUNBb0UsQ0FBQyxDQUFDbkUsU0FBRixDQUFZLENBQVosRUFBYyxDQUFkLEUsQ0FDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQW1FLENBQUMsQ0FBQ2UsV0FBRixHOzs7Ozs7Ozs7OztBQ3pOQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBpbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCAnLi9zY3JpcHRzL2JvYXJkLmpzJztcbmltcG9ydCAnLi9zY3JpcHRzL3N1ZG9rdS5qcyc7XG4vLyAnL3NyYy9zdHlsZXMvaW5kZXguc2NzcyciLCJjbGFzcyBCb2FyZCB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4KSB7XG4gICAgLy8gdGhpcy5ib3hlcyA9IHtcbiAgICAvLyAgIDA6IFtdLFxuICAgIC8vICAgMTogW10sXG4gICAgLy8gICAyOiBbXSxcbiAgICAvLyAgIDM6IFtdLFxuICAgIC8vICAgNDogW10sXG4gICAgLy8gICA1OiBbXSxcbiAgICAvLyAgIDY6IFtdLFxuICAgIC8vICAgNzogW10sXG4gICAgLy8gICA4OiBbXVxuICAgIC8vIH07ICBcbiAgICB0aGlzLnJvd3MgPSB7XG4gICAgICAwOiBbXSxcbiAgICAgIDE6IFtdLFxuICAgICAgMjogW10sXG4gICAgICAzOiBbXSxcbiAgICAgIDQ6IFtdLFxuICAgICAgNTogW10sXG4gICAgICA2OiBbXSxcbiAgICAgIDc6IFtdLFxuICAgICAgODogW11cbiAgICB9OyBcbiAgICB0aGlzLmNvbHVtbnMgPSB7IFxuICAgICAgMDogW10sIFxuICAgICAgMTogW10sIFxuICAgICAgMjogW10sIFxuICAgICAgMzogW10sIFxuICAgICAgNDogW10sIFxuICAgICAgNTogW10sIFxuICAgICAgNjogW10sIFxuICAgICAgNzogW10sIFxuICAgICAgODogW11cbiAgICB9OyBcblxuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuXG4gICAgdGhpcy5nZW5lcmF0ZU51bSA9IHRoaXMuZ2VuZXJhdGVOdW0uYmluZCh0aGlzKTtcbiAgICB0aGlzLmRyYXdCYWxsID0gdGhpcy5kcmF3QmFsbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZHJhd0JveGVzID0gdGhpcy5kcmF3Qm94ZXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLnBsYWNlTnVtcyA9IHRoaXMucGxhY2VOdW1zLmJpbmQodGhpcyk7XG4gIH1cbiAgXG4gIGdlbmVyYXRlTnVtKCkge1xuICAgIGxldCBudW0gPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgIGNvbnNvbGUubG9nKGBudW06ICR7bnVtfWApO1xuICAgIHJldHVybiBudW07IFxuICB9XG5cbiAgZHJhd0JhbGwoKSB7XG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG5cbiAgICB0aGlzLmN0eC5hcmMoNTAsIDUwLCAyMCwgMCwgTWF0aC5QSSAqIDIpO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzAwOTVERFwiO1xuICAgIHRoaXMuY3R4LnN0cm9rZSgpOyBcbiAgICAvLyB0aGlzLmN0eC5maWxsKCk7XG4gICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gIH1cblxuICBkcmF3T3V0bGluZSgpIHtcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA0OyBcblxuICAgIGZvciAobGV0IHggPSAwOyB4PD01NDA7IHgrPTE4MCkge1xuICAgICAgdGhpcy5jdHgubW92ZVRvKHgsMCk7XG4gICAgICB0aGlzLmN0eC5saW5lVG8oeCwgNTQwKTtcblxuICAgICAgdGhpcy5jdHgubW92ZVRvKDAseCk7XG4gICAgICB0aGlzLmN0eC5saW5lVG8oNTQwLCB4KTtcbiAgICB9XG5cbiAgICAvLyBmb3IgKGxldCB5ID0gMDsgeTw9NTQwOyB5Kz0xODApIHtcbiAgICAvLyAgIHRoaXMuY3R4Lm1vdmVUbygwLHkpO1xuICAgIC8vICAgdGhpcy5jdHgubGluZVRvKDU0MCwgeSk7XG4gICAgLy8gfVxuXG4gICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgfVxuXG4gIGRyYXdCb3hlcygpIHtcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmN0eC5saW5lV2lkdGggPSAwLjU7XG4gICAgZm9yIChsZXQgeD0wOyB4IDwgNTQwOyB4Kz02MCkge1xuICAgICAgZm9yIChsZXQgeT0wOyB5PDU0MDsgeSs9NjApIHtcbiAgICAgICAgdGhpcy5jdHgucmVjdCh4LHksNjAsNjApO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTsgXG4gIH1cblxuICBwbGFjZU51bXMoc3RhcnRYLHN0YXJ0WSkge1xuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuXG4gICAgbGV0IGJveCA9IFtdO1xuICAgIGxldCBjb3VudCA9IDA7IFxuXG4gICAgLy8gZm9yIChsZXQgeD0xODA7IHg8MzYwOyB4Kz02MCkge1xuICAgIGZvciAobGV0IHg9c3RhcnRYOyB4PCAoc3RhcnRYKzE4MCk7IHgrPTYwKSB7XG4gICAgICBjb3VudCArKzsgXG4gICAgICBsZXQgY29sID0gW107IFxuICAgICAgZm9yIChsZXQgeT1zdGFydFk7IHk8KHN0YXJ0WSsxODApOyB5Kz02MCkge1xuICAgICAgICAvLyB0aGlzLmN0eC5yZWN0KHgseSw2MCw2MCk7XG4gICAgICAgIG51bSA9IHRoaXMuZ2VuZXJhdGVOdW0oKTtcbiAgICAgICAgaWYgKCFib3guaW5jbHVkZXMobnVtKSkge1xuICAgICAgICAgIGJveC5wdXNoKG51bSk7IFxuICAgICAgICAgIGNvbC5wdXNoKG51bSk7XG4gICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQobnVtLCB4ICsgMjUsIHkgKyA0NSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuY29sdW1uc1tjb3VudC0xXS5wdXNoKGNvbCk7XG4gICAgICB0aGlzLmNvbHVtbnNbY291bnQtMV0uZmxhdCgpO1xuICAgICAgY29uc29sZS5sb2coYGJveDogWyR7Ym94fV1gKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29sdW1uczogXCIsIHRoaXMuY29sdW1ucyk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhgQ29sdW1uczogJHt0aGlzLmNvbHVtbnN9YCk7XG4gICAgICBjb25zb2xlLmxvZyhcImNvbHM6XCIsIE9iamVjdC52YWx1ZXModGhpcy5jb2x1bW5zKS5mbGF0KCkpO1xuICAgIH1cblxuICAgIC8vIHRoaXMuY3R4LnJlY3QoMTgwLCAxODAsIDYwLCA2MCk7XG4gICAgLy8gbGV0IG51bSA9IHRoaXMuZ2VuZXJhdGVOdW0oKTtcbiAgICAvLyB0aGlzLmN0eC5maWxsVGV4dChudW0sIDE4MCArIDI1LCAxODAgKyA0NSk7XG5cbiAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgfVxuXG59O1xuXG4vLyBsZXQgYiA9IG5ldyBCb2FyZDsgXG4vLyBjb25zb2xlLmxvZyhiLmdlbmVyYXRlTnVtKCkpOyBcbi8vIGIuZ2VuZXJhdGVOdW0oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBCb2FyZDsgXG5cblxuXG4vLyBsZXQgY291bnQgPSAxO1xuLy8gbGV0IHJvd3MgPSB7IDE6IHJvdzEgPSBbXSwgMjogcm93MiA9IFtdLCAzOiByb3czID0gW10sIDQ6IHJvdzQgPSBbXSwgNTogcm93NSA9IFtdLCA2OiByb3c2ID0gW10sIDc6IHJvdzcgPSBbXSwgODogcm93OCA9IFtdLCA5OiByb3c5ID0gW10gfTtcbi8vIGxldCBjb2x1bW5zID0geyAxOiBjb2x1bW4xID0gW10sIDI6IGNvbHVtbjIgPSBbXSwgMzogY29sdW1uMyA9IFtdLCA0OiBjb2x1bW40ID0gW10sIDU6IGNvbHVtbjUgPSBbXSwgNjogY29sdW1uNiA9IFtdLCA3OiBjb2x1bW43ID0gW10sIDg6IGNvbHVtbjggPSBbXSwgOTogY29sdW1uOSA9IFtdIH1cbi8vIC8vIGxldCBjb2xzID0geyAxOiBjb2wxPVtdLCAyOiBjb2wyPVtdLCAzOiBjb2wzPVtdLCA0OiBjb2w0PVtdLCA1OiBjb2w1PVtdLCA2OiBjb2w2PVtdLCA3OiBjb2w3PVtdLCA4OiBjb2w4PVtdLCA5OiBjb2w5PVtdIH07XG5cbi8vIGxldCBjID0gMDtcblxuXG4vLyBmb3IgKGxhcmdlID0gMDsgbGFyZ2UgPCA1NDA7IGxhcmdlICs9IDE4MCkge1xuLy8gICBjb25zb2xlLmxvZygnVyAgICBUICAgICBGJyk7XG4vLyAgIC8vIHRoaXMgaXMgdGhlIGVudGlyZSBsZWZ0IHNpZGUgMyBib3hlcyBkb3duOiBcblxuXG4vLyAgIGZvciAoYiA9IDA7IGIgPCAxODA7IGIgKz0gMTgwKSB7XG4vLyAgICAgY3R4LnN0cm9rZSgpO1xuLy8gICAgIGxldCBib3ggPSBbXTtcblxuLy8gICAgIC8vIHRoaXMgaXMgb25lIGJveDogXG5cbi8vICAgICBsZXQgY2hlY2twb2ludCA9IDA7XG5cbi8vICAgICBmb3IgKHggPSBiOyB4IDwgYiArIDU0MDsgeCArPSA2MCkge1xuLy8gICAgICAgY29uc29sZS5sb2coYGNvbHVtbiAke2NvdW50fWApOyBjb3VudCsrO1xuLy8gICAgICAgbGV0IGNvbCA9IFtdO1xuXG4vLyAgICAgICAvLyB0aGlzIGdvZXMgYWNyb3NzIHRoZSB4IGF4aXMgMyAob3IgOSBkZXBlbmRpbmcgb24gdGhlIHggbGltaXQpIHNwYWNlcyBhbmQgZ2VuZXJhdGVzIGVhY2ggbGl0dGxlIGNvbHVtbiBpbiB0aGUgc21hbGxib3guIFxuLy8gICAgICAgY2hlY2twb2ludCsrO1xuXG4vLyAgICAgICBmb3IgKHkgPSBsYXJnZTsgeSA8IChsYXJnZSArIDE4MCk7IHkgKz0gNjApIHtcblxuLy8gICAgICAgICAvLyB0aGlzIGdvZXMgZG93biB0aGUgeSBheGlzIChvbmUgM3gzIGJveCBhdCBhIHRpbWUpIGFuZCBhZGRzIGxpdHRsZSBzcXVhcmVzIHRvIGNhbnZhcyBhbmQgbnVtcyB0byB0aGUgY29sIHRvIGJlIGFkZGVkIHRvIHRoZSBzbWFsbGJveC4gXG5cbi8vICAgICAgICAgLy8gSSBuZWVkIHRvIGFkZCB0aGUgY29scyB0byBhIGxhcmdlciBjb2x1bW4gYW5kIGNoZWNrIGV2ZXJ5IHRpbWUgSSBnbyB0byB0aGUgbmV4dCBib3ggaWYgdGhlIGNvbCBmcm9tIHRoZSBwcmV2aW91cyBib3ggaGFzIHRoZSBudW1zLiBiZSBjYXJlZnVsIGFib3V0IGFkZGluZyB0byBjb2x1bW4xLCBjb2x1bW4yLCBvciBjb2x1bW4zLiBcblxuLy8gICAgICAgICBjdHgucmVjdCh4LCB5LCA2MCwgNjApO1xuLy8gICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbi8vICAgICAgICAgbGV0IG51bSA9IGdlbmVyYXRlTnVtKCk7XG4vLyAgICAgICAgIGxldCBib29sID0gZmFsc2U7XG5cblxuLy8gICAgICAgICBpZiAoIWNvbHVtbnNbY2hlY2twb2ludF0uZmxhdCgpLmluY2x1ZGVzKG51bSkpIHtcbi8vICAgICAgICAgICBib29sID0gdHJ1ZTtcbi8vICAgICAgICAgfTtcblxuLy8gICAgICAgICBpZiAoIWJveC5pbmNsdWRlcyhudW0pICYmIGJvb2wpIHtcbi8vICAgICAgICAgICBjb2wucHVzaChudW0pOyBib3gucHVzaChudW0pO1xuLy8gICAgICAgICAgIGN0eC5maWxsVGV4dChudW0sIHggKyAyNSwgeSArIDQ1KTtcbi8vICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICBjb2wucHVzaChcIlwiKTsgYm94LnB1c2goXCJcIik7XG4vLyAgICAgICAgIH1cblxuXG4vLyAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbi8vICAgICAgIH1cbi8vICAgICAgIGNvbHVtbnNbY2hlY2twb2ludF0ucHVzaChjb2wpO1xuLy8gICAgIH1cbi8vICAgICBjb25zb2xlLmxvZyhgQm94OiAke2JveH1gKTtcbi8vICAgfVxuLy8gfVxuXG4vLyBsZXQgY29scyA9IHsgMTogY29sMSA9IFtdLCAyOiBjb2wyID0gW10sIDM6IGNvbDMgPSBbXSwgNDogY29sNCA9IFtdLCA1OiBjb2w1ID0gW10sIDY6IGNvbDYgPSBbXSwgNzogY29sNyA9IFtdLCA4OiBjb2w4ID0gW10sIDk6IGNvbDkgPSBbXSB9O1xuXG4vLyBmb3IgKGkgPSAxOyBpIDw9IDk7IGkrKykge1xuLy8gICBjb2xzW2ldID0gcGFyc2lmeShjb2x1bW5zW2ldKTtcbi8vIH07XG5cbi8vIGZvciAoaSA9IDE7IGkgPD0gOTsgaSsrKSB7XG4vLyAgIC8vIGNvbnNvbGUubG9nKGBjb2wgJHtpfTogJHtjb2xzW2ldfWApO1xuLy8gICBjb25zb2xlLmxvZyhgY29sdW1uICR7aX06ICR7Y29sdW1uc1tpXX1gKTtcbi8vIH1cblxuLy8gLy8gbGV0IHJvd3MgPSB7IDE6IHJvdzEsIDI6IHJvdzIsIDM6IHJvdzMsIDQ6IHJvdzQsIDU6IHJvdzUsIDY6IHJvdzYsIDc6IHJvdzcsIDg6IHJvdzgsIDk6IHJvdzkgfTtcblxuLy8gZm9yIChpID0gMTsgaSA8PSA5OyBpKyspIHtcbi8vICAgZm9yIChqID0gMTsgaiA8PSA5OyBqKyspIHtcbi8vICAgICByb3dzW2ldLnB1c2goY29sc1tqXVtpIC0gMV0pO1xuLy8gICB9XG4vLyB9O1xuXG4vLyBmb3IgKGkgPSAxOyBpIDw9IDk7IGkrKykge1xuLy8gICBjb25zb2xlLmxvZyhgcm93ICR7aX06ICR7cm93c1tpXX1gKTtcbi8vIH1cbiIsImNvbnN0IEJvYXJkID0gcmVxdWlyZShcIi4vYm9hcmRcIik7XG5cbmxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FudmFzXCIpO1xubGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlTnVtKCkge1xuICBsZXQgbnVtID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgY29uc29sZS5sb2cobnVtKTtcbiAgcmV0dXJuIG51bTtcbn1cblxuLy8gZnVuY3Rpb24gZHJhd1NtYWxsQm94KGxlZnQsIHJpZ2h0LCB0b3AsIGJvdHRvbSkge1xuLy8gICBsZXQgY291bnQgPSAxO1xuLy8gICBjdHguYmVnaW5QYXRoKCk7XG4vLyAgIC8vIGN0eC5saW5lV2lkdGggPSAxMDtcblxuLy8gICBsZXQgcm93MSA9IFtdO1xuLy8gICBsZXQgcm93MiA9IFtdO1xuLy8gICBsZXQgcm93MyA9IFtdO1xuXG4vLyAgIGN0eC5mb250ID0gXCIyMHB4IEFyaWFsXCI7XG4vLyAgIGN0eC5zdHJva2VTdHlsZSA9IFwicmdiYSgwLDAsMjU1LDAuNSlcIjtcbi8vICAgZm9yIChiID0gbGVmdDsgYiA8IHJpZ2h0OyBiICs9IDE4MCkge1xuLy8gICAgIGN0eC5zdHJva2UoKTtcbi8vICAgICBsZXQgYm94ID0gW107XG4vLyAgICAgZm9yICh4ID0gYjsgeCA8IGIgKyAxODA7IHggKz0gNjApIHtcbi8vICAgICAgIGNvbnNvbGUubG9nKGBjb2x1bW4gJHtjb3VudH1gKTsgY291bnQrKztcbi8vICAgICAgIGxldCBjb2wgPSBbXTtcbi8vICAgICAgIGZvciAoeSA9IHRvcDsgeSA8IGJvdHRvbTsgeSArPSA2MCkge1xuLy8gICAgICAgICBjdHgucmVjdCh4LCB5LCA2MCwgNjApO1xuLy8gICAgICAgICBsZXQgbnVtID0gZ2VuZXJhdGVOdW0oKTtcbi8vICAgICAgICAgaWYgKCFjb2wuaW5jbHVkZXMobnVtKSAmJiAhYm94LmluY2x1ZGVzKG51bSkpIHtcbi8vICAgICAgICAgICBjb2wucHVzaChudW0pOyBib3gucHVzaChudW0pO1xuLy8gICAgICAgICAgIGN0eC5mb250ID0gXCIxNTBweCBBcmlhbFwiO1xuLy8gICAgICAgICAgIGN0eC5maWxsVGV4dChudW0sIHggKyAyNSwgeSArIDQ1KTtcbi8vICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICBjb2wucHVzaChcIlwiKTsgYm94LnB1c2goXCJcIik7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgY3R4LnN0cm9rZSgpO1xuLy8gICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4vLyAgICAgICB9XG5cbi8vICAgICAgIGlmICghcm93MS5pbmNsdWRlcyhjb2xbMF0pKSB7XG4vLyAgICAgICAgIHJvdzEucHVzaChjb2xbMF0pO1xuLy8gICAgICAgfTtcbi8vICAgICAgIGlmICghcm93Mi5pbmNsdWRlcyhjb2xbMV0pKSB7XG4vLyAgICAgICAgIHJvdzIucHVzaChjb2xbMV0pO1xuLy8gICAgICAgfTtcbi8vICAgICAgIGlmICghcm93My5pbmNsdWRlcyhjb2xbMl0pKSB7XG4vLyAgICAgICAgIHJvdzMucHVzaChjb2xbMl0pO1xuLy8gICAgICAgfTtcbi8vICAgICB9XG4vLyAgICAgY29uc29sZS5sb2coYFJvdyAxOiAke3JvdzF9YCk7XG4vLyAgICAgY29uc29sZS5sb2coYFJvdyAyOiAke3JvdzJ9YCk7XG4vLyAgICAgY29uc29sZS5sb2coYFJvdyAzOiAke3JvdzN9YCk7XG4vLyAgICAgLy8gY29uc29sZS5sb2coYEJveDogJHtib3h9YCk7XG4vLyAgICAgY29uc29sZS5sb2coYGJveCBiZXR3ZWVuIGxlZnQsICR7bGVmdH0sIGFuZCByaWdodCwgJHtyaWdodH0sIGNvbXBsZXRlISB3aXRoOiBbJHtib3h9XWApO1xuLy8gICB9XG4vLyB9XG4vLyBmdW5jdGlvbiBkcmF3TGFyZ2VCb3goKSB7XG4vLyAgIGZvciAobGVmdCA9IDA7IGxlZnQgPCA1NDA7IGxlZnQgKz0gMTgwKSB7XG4vLyAgICAgZHJhd1NtYWxsQm94KGxlZnQsIGxlZnQgKyAxODAsIDAsIDE4MCk7XG4vLyAgICAgZHJhd1NtYWxsQm94KGxlZnQsIGxlZnQgKyAxODAsIDE4MCwgMzYwKTtcbi8vICAgICBkcmF3U21hbGxCb3gobGVmdCwgbGVmdCArIDE4MCwgMzYwLCA1NDApO1xuLy8gICAgIC8vIGNvbnNvbGUubG9nKGRyYXdTbWFsbEJveC5yb3cxKVxuLy8gICB9XG4vLyB9O1xuXG5cblxuZnVuY3Rpb24gcGFyc2lmeShhcnIpIHtcbiAgbGV0IG9iaiA9IHt9O1xuICBhcnIuZm9yRWFjaChlbCA9PiB7XG4gICAgb2JqW2VsXSA9IHRydWU7XG4gIH0pXG4gIG5ld0FyciA9IFtdO1xuICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goa2V5ID0+IHtcbiAgICBrZXkuc3BsaXQoJywnKS5mb3JFYWNoKGVsID0+IHtcbiAgICAgIG5ld0Fyci5wdXNoKHBhcnNlSW50KGVsKSk7XG4gICAgfSlcbiAgfSlcbiAgcmV0dXJuIG5ld0Fycjtcbn1cblxuZnVuY3Rpb24gZHJhd1JlY3QoKSB7XG5cbiAgbGV0IGNvdW50ID0gMTtcbiAgbGV0IHJvd3MgPSB7IDE6IHJvdzEgPSBbXSwgMjogcm93MiA9IFtdLCAzOiByb3czID0gW10sIDQ6IHJvdzQgPSBbXSwgNTogcm93NSA9IFtdLCA2OiByb3c2ID0gW10sIDc6IHJvdzcgPSBbXSwgODogcm93OCA9IFtdLCA5OiByb3c5ID0gW10gfTtcbiAgbGV0IGNvbHVtbnMgPSB7IDE6IGNvbHVtbjEgPSBbXSwgMjogY29sdW1uMiA9IFtdLCAzOiBjb2x1bW4zID0gW10sIDQ6IGNvbHVtbjQgPSBbXSwgNTogY29sdW1uNSA9IFtdLCA2OiBjb2x1bW42ID0gW10sIDc6IGNvbHVtbjcgPSBbXSwgODogY29sdW1uOCA9IFtdLCA5OiBjb2x1bW45ID0gW10gfVxuICAvLyBsZXQgY29scyA9IHsgMTogY29sMT1bXSwgMjogY29sMj1bXSwgMzogY29sMz1bXSwgNDogY29sND1bXSwgNTogY29sNT1bXSwgNjogY29sNj1bXSwgNzogY29sNz1bXSwgODogY29sOD1bXSwgOTogY29sOT1bXSB9O1xuXG4gIGxldCBjID0gMDtcblxuICBjdHguYmVnaW5QYXRoKCk7XG5cbiAgZm9yIChsYXJnZSA9IDA7IGxhcmdlIDwgNTQwOyBsYXJnZSArPSAxODApIHtcbiAgICBjb25zb2xlLmxvZygnVyAgICBUICAgICBGJyk7XG4gICAgLy8gdGhpcyBpcyB0aGUgZW50aXJlIGxlZnQgc2lkZSAzIGJveGVzIGRvd246IFxuXG5cbiAgICBmb3IgKGIgPSAwOyBiIDwgMTgwOyBiICs9IDE4MCkge1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgbGV0IGJveCA9IFtdO1xuXG4gICAgICAvLyB0aGlzIGlzIG9uZSBib3g6IFxuXG4gICAgICBsZXQgY2hlY2twb2ludCA9IDA7XG5cbiAgICAgIGZvciAoeCA9IGI7IHggPCBiICsgNTQwOyB4ICs9IDYwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBjb2x1bW4gJHtjb3VudH1gKTsgY291bnQrKztcbiAgICAgICAgbGV0IGNvbCA9IFtdO1xuXG4gICAgICAgIC8vIHRoaXMgZ29lcyBhY3Jvc3MgdGhlIHggYXhpcyAzIChvciA5IGRlcGVuZGluZyBvbiB0aGUgeCBsaW1pdCkgc3BhY2VzIGFuZCBnZW5lcmF0ZXMgZWFjaCBsaXR0bGUgY29sdW1uIGluIHRoZSBzbWFsbGJveC4gXG4gICAgICAgIGNoZWNrcG9pbnQrKztcblxuICAgICAgICBmb3IgKHkgPSBsYXJnZTsgeSA8IChsYXJnZSArIDE4MCk7IHkgKz0gNjApIHtcblxuICAgICAgICAgIC8vIHRoaXMgZ29lcyBkb3duIHRoZSB5IGF4aXMgKG9uZSAzeDMgYm94IGF0IGEgdGltZSkgYW5kIGFkZHMgbGl0dGxlIHNxdWFyZXMgdG8gY2FudmFzIGFuZCBudW1zIHRvIHRoZSBjb2wgdG8gYmUgYWRkZWQgdG8gdGhlIHNtYWxsYm94LiBcblxuICAgICAgICAgIC8vIEkgbmVlZCB0byBhZGQgdGhlIGNvbHMgdG8gYSBsYXJnZXIgY29sdW1uIGFuZCBjaGVjayBldmVyeSB0aW1lIEkgZ28gdG8gdGhlIG5leHQgYm94IGlmIHRoZSBjb2wgZnJvbSB0aGUgcHJldmlvdXMgYm94IGhhcyB0aGUgbnVtcy4gYmUgY2FyZWZ1bCBhYm91dCBhZGRpbmcgdG8gY29sdW1uMSwgY29sdW1uMiwgb3IgY29sdW1uMy4gXG5cbiAgICAgICAgICBjdHgucmVjdCh4LCB5LCA2MCwgNjApO1xuICAgICAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgICAgIGxldCBudW0gPSBnZW5lcmF0ZU51bSgpO1xuICAgICAgICAgIGxldCBib29sID0gZmFsc2U7XG5cblxuICAgICAgICAgIGlmICghY29sdW1uc1tjaGVja3BvaW50XS5mbGF0KCkuaW5jbHVkZXMobnVtKSkge1xuICAgICAgICAgICAgYm9vbCA9IHRydWU7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmICghYm94LmluY2x1ZGVzKG51bSkgJiYgYm9vbCkge1xuICAgICAgICAgICAgY29sLnB1c2gobnVtKTsgYm94LnB1c2gobnVtKTtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChudW0sIHggKyAyNSwgeSArIDQ1KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29sLnB1c2goXCJcIik7IGJveC5wdXNoKFwiXCIpO1xuICAgICAgICAgIH1cblxuXG4gICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbHVtbnNbY2hlY2twb2ludF0ucHVzaChjb2wpO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coYEJveDogJHtib3h9YCk7XG4gICAgfVxuICB9XG5cbiAgbGV0IGNvbHMgPSB7IDE6IGNvbDEgPSBbXSwgMjogY29sMiA9IFtdLCAzOiBjb2wzID0gW10sIDQ6IGNvbDQgPSBbXSwgNTogY29sNSA9IFtdLCA2OiBjb2w2ID0gW10sIDc6IGNvbDcgPSBbXSwgODogY29sOCA9IFtdLCA5OiBjb2w5ID0gW10gfTtcblxuICBmb3IgKGkgPSAxOyBpIDw9IDk7IGkrKykge1xuICAgIGNvbHNbaV0gPSBwYXJzaWZ5KGNvbHVtbnNbaV0pO1xuICB9O1xuXG4gIGZvciAoaSA9IDE7IGkgPD0gOTsgaSsrKSB7XG4gICAgLy8gY29uc29sZS5sb2coYGNvbCAke2l9OiAke2NvbHNbaV19YCk7XG4gICAgY29uc29sZS5sb2coYGNvbHVtbiAke2l9OiAke2NvbHVtbnNbaV19YCk7XG4gIH1cblxuICAvLyBsZXQgcm93cyA9IHsgMTogcm93MSwgMjogcm93MiwgMzogcm93MywgNDogcm93NCwgNTogcm93NSwgNjogcm93NiwgNzogcm93NywgODogcm93OCwgOTogcm93OSB9O1xuXG4gIGZvciAoaSA9IDE7IGkgPD0gOTsgaSsrKSB7XG4gICAgZm9yIChqID0gMTsgaiA8PSA5OyBqKyspIHtcbiAgICAgIHJvd3NbaV0ucHVzaChjb2xzW2pdW2kgLSAxXSk7XG4gICAgfVxuICB9O1xuXG4gIGZvciAoaSA9IDE7IGkgPD0gOTsgaSsrKSB7XG4gICAgY29uc29sZS5sb2coYHJvdyAke2l9OiAke3Jvd3NbaV19YCk7XG4gIH1cblxufVxuXG4vLyBkcmF3UmVjdCgpO1xuXG5cbiAgICAvLyBkcmF3TGFyZ2VCb3goKTtcblxuICAgIC8vIGRyYXdTbWFsbEJveCgwLCAxODAsIDAsIDE4MCk7XG5cblxuICAgIC8vIGRyYXdTbWFsbEJveCgpO1xuICAgIC8vIFN1ZG9rdS5kcmF3TGFyZ2VCb3g7XG4gICAgLy8gc2V0SW50ZXJ2YWwoZHJhd1JlY3QsIDQwKTtcblxuXG5cbmxldCBiID0gbmV3IEJvYXJkKGNhbnZhcyxjdHgpO1xuYi5nZW5lcmF0ZU51bSgpO1xuXG5cbi8vIGIuZHJhd0JhbGwoKTtcbmIuZHJhd0JveGVzKCk7XG4vLyBiLmRyYXdCb2FyZCgpO1xuYi5wbGFjZU51bXMoMCwwKTtcbi8vIGIucGxhY2VOdW1zKDAsMTgwKTtcbi8vIGIucGxhY2VOdW1zKDAsMzYwKTtcblxuXG4vLyBiLnBsYWNlTnVtcygxODAsMCk7XG4vLyBiLnBsYWNlTnVtcygxODAsMTgwKTtcbi8vIGIucGxhY2VOdW1zKDE4MCwzNjApO1xuXG5cbi8vIGIucGxhY2VOdW1zKDM2MCwwKTtcbi8vIGIucGxhY2VOdW1zKDM2MCwxODApO1xuLy8gYi5wbGFjZU51bXMoMzYwLDM2MCk7XG5cblxuXG4vLyBiLnBsYWNlTnVtcygwLDApO1xuXG4vLyBiLnBsYWNlTnVtcygxODAsIDE4MCk7XG4vLyBiLnBsYWNlTnVtcygwLCAxODApO1xuLy8gYi5wbGFjZU51bXMoMCwgMzYwKTtcbi8vIGIucGxhY2VOdW1zKDE4MCwgMCk7XG5cbmIuZHJhd091dGxpbmUoKTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9