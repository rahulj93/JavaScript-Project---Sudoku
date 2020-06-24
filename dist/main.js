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

    // this.smallBox = {};  
    this.rows = {};
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
      }

      for (var y = 0; y <= 540; y += 180) {
        this.ctx.moveTo(0, y);
        this.ctx.lineTo(540, y);
      }

      this.ctx.stroke(); // this.ctx.moveTo(0,0);
      // this.ctx.lineTo(540,0);
      // this.ctx.moveTo(0,540);
      // this.ctx.lineTo(540,540);
      // this.ctx.moveTo(0,0);
      // this.ctx.lineTo(0,540);
      // this.ctx.moveTo(540,0);
      // this.ctx.lineTo(540,540);
      // this.ctx.moveTo(180,0);
      // this.ctx.lineTo(180,540);
      // this.ctx.moveTo(360,0);
      // this.ctx.lineTo(360,540);
      // this.ctx.moveTo(0,180);
      // this.ctx.lineTo(540,180);
      // this.ctx.moveTo(0,360);
      // this.ctx.lineTo(540,360);
      // this.ctx.stroke();

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
    value: function placeNums() {
      this.ctx.beginPath();
      var box = [];
      var count = 0;

      for (var x = 180; x < 360; x += 60) {
        count++;
        var col = [];

        for (var y = 180; y < 360; y += 60) {
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
        console.log(this.columns);
      } // this.ctx.rect(180, 180, 60, 60);
      // let num = this.generateNum();
      // this.ctx.fillText(num, 180 + 25, 180 + 45);


      this.ctx.closePath();
    }
  }, {
    key: "fillNums",
    value: function fillNums() {// this.ctx.fillText(num, x + 25, y + 45);
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

b.placeNums();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2JvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3N1ZG9rdS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiQm9hcmQiLCJjYW52YXMiLCJjdHgiLCJyb3dzIiwiY29sdW1ucyIsImdlbmVyYXRlTnVtIiwiYmluZCIsImRyYXdCYWxsIiwiZHJhd0JveGVzIiwicGxhY2VOdW1zIiwibnVtIiwiTWF0aCIsImNlaWwiLCJyYW5kb20iLCJjb25zb2xlIiwibG9nIiwiYmVnaW5QYXRoIiwiYXJjIiwiUEkiLCJmaWxsU3R5bGUiLCJzdHJva2UiLCJjbG9zZVBhdGgiLCJsaW5lV2lkdGgiLCJ4IiwibW92ZVRvIiwibGluZVRvIiwieSIsInJlY3QiLCJib3giLCJjb3VudCIsImNvbCIsImluY2x1ZGVzIiwicHVzaCIsImZpbGxUZXh0IiwiZmxhdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZXF1aXJlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJwYXJzaWZ5IiwiYXJyIiwib2JqIiwiZm9yRWFjaCIsImVsIiwibmV3QXJyIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsInNwbGl0IiwicGFyc2VJbnQiLCJkcmF3UmVjdCIsInJvdzEiLCJyb3cyIiwicm93MyIsInJvdzQiLCJyb3c1Iiwicm93NiIsInJvdzciLCJyb3c4Iiwicm93OSIsImNvbHVtbjEiLCJjb2x1bW4yIiwiY29sdW1uMyIsImNvbHVtbjQiLCJjb2x1bW41IiwiY29sdW1uNiIsImNvbHVtbjciLCJjb2x1bW44IiwiY29sdW1uOSIsImMiLCJsYXJnZSIsImIiLCJjaGVja3BvaW50IiwiYm9vbCIsImNvbHMiLCJjb2wxIiwiY29sMiIsImNvbDMiLCJjb2w0IiwiY29sNSIs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QUtBLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsSUFBSSxDQUFqQixFQUFvQkEsQ0FBQyxFQUFyQixFQUF5QjtBQUN2QjtBQUNBeEUsV0FBTyxDQUFDQyxHQUFSLGtCQUFzQnVFLENBQXRCLGVBQTRCbEYsT0FBTyxDQUFDa0YsQ0FBRCxDQUFuQztBQUNELEdBekVpQixDQTJFbEI7OztBQUVBLE9BQUtBLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsSUFBSSxDQUFqQixFQUFvQkEsQ0FBQyxFQUFyQixFQUF5QjtBQUN2QixTQUFLQyxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLElBQUksQ0FBakIsRUFBb0JBLENBQUMsRUFBckIsRUFBeUI7QUFDdkJwRixVQUFJLENBQUNtRixDQUFELENBQUosQ0FBUXRELElBQVIsQ0FBYTRDLElBQUksQ0FBQ1csQ0FBRCxDQUFKLENBQVFELENBQUMsR0FBRyxDQUFaLENBQWI7QUFDRDtBQUNGOztBQUFBOztBQUVELE9BQUtBLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsSUFBSSxDQUFqQixFQUFvQkEsQ0FBQyxFQUFyQixFQUF5QjtBQUN2QnhFLFdBQU8sQ0FBQ0MsR0FBUixlQUFtQnVFLENBQW5CLGVBQXlCbkYsSUFBSSxDQUFDbUYsQ0FBRCxDQUE3QjtBQUNEO0FBRUYsQyxDQUVEO0FBR0k7QUFFQTtBQUdBO0FBQ0E7QUFDQTs7O0FBSUosSUFBSWIsQ0FBQyxHQUFHLElBQUl6RSxLQUFKLENBQVVDLE1BQVYsRUFBaUJDLEdBQWpCLENBQVI7QUFDQXVFLENBQUMsQ0FBQ3BFLFdBQUYsRyxDQUdBOztBQUNBb0UsQ0FBQyxDQUFDakUsU0FBRixHLENBQ0E7O0FBQ0FpRSxDQUFDLENBQUNoRSxTQUFGO0FBRUFnRSxDQUFDLENBQUNlLFdBQUYsRzs7Ozs7Ozs7Ozs7QUNwTUEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5pbXBvcnQgJy4vc2NyaXB0cy9ib2FyZC5qcyc7XG5pbXBvcnQgJy4vc2NyaXB0cy9zdWRva3UuanMnO1xuLy8gJy9zcmMvc3R5bGVzL2luZGV4LnNjc3MnIiwiY2xhc3MgQm9hcmQge1xuICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCkge1xuICAgIC8vIHRoaXMuc21hbGxCb3ggPSB7fTsgIFxuICAgIHRoaXMucm93cyA9IHt9OyBcbiAgICB0aGlzLmNvbHVtbnMgPSB7IFxuICAgICAgMDogW10sIFxuICAgICAgMTogW10sIFxuICAgICAgMjogW10sIFxuICAgICAgMzogW10sIFxuICAgICAgNDogW10sIFxuICAgICAgNTogW10sIFxuICAgICAgNjogW10sIFxuICAgICAgNzogW10sIFxuICAgICAgODogW11cbiAgICB9OyBcblxuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuXG4gICAgdGhpcy5nZW5lcmF0ZU51bSA9IHRoaXMuZ2VuZXJhdGVOdW0uYmluZCh0aGlzKTtcbiAgICB0aGlzLmRyYXdCYWxsID0gdGhpcy5kcmF3QmFsbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZHJhd0JveGVzID0gdGhpcy5kcmF3Qm94ZXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLnBsYWNlTnVtcyA9IHRoaXMucGxhY2VOdW1zLmJpbmQodGhpcyk7XG4gIH1cbiAgXG4gIGdlbmVyYXRlTnVtKCkge1xuICAgIGxldCBudW0gPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgIGNvbnNvbGUubG9nKGBudW06ICR7bnVtfWApO1xuICAgIHJldHVybiBudW07IFxuICB9XG5cbiAgZHJhd0JhbGwoKSB7XG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG5cbiAgICB0aGlzLmN0eC5hcmMoNTAsIDUwLCAyMCwgMCwgTWF0aC5QSSAqIDIpO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzAwOTVERFwiO1xuICAgIHRoaXMuY3R4LnN0cm9rZSgpOyBcbiAgICAvLyB0aGlzLmN0eC5maWxsKCk7XG4gICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gIH1cblxuICBkcmF3T3V0bGluZSgpIHtcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA0OyBcblxuICAgIGZvciAobGV0IHggPSAwOyB4PD01NDA7IHgrPTE4MCkge1xuICAgICAgdGhpcy5jdHgubW92ZVRvKHgsMCk7XG4gICAgICB0aGlzLmN0eC5saW5lVG8oeCwgNTQwKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCB5ID0gMDsgeTw9NTQwOyB5Kz0xODApIHtcbiAgICAgIHRoaXMuY3R4Lm1vdmVUbygwLHkpO1xuICAgICAgdGhpcy5jdHgubGluZVRvKDU0MCwgeSk7XG4gICAgfVxuXG4gICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAvLyB0aGlzLmN0eC5tb3ZlVG8oMCwwKTtcbiAgICAvLyB0aGlzLmN0eC5saW5lVG8oNTQwLDApO1xuICAgIC8vIHRoaXMuY3R4Lm1vdmVUbygwLDU0MCk7XG4gICAgLy8gdGhpcy5jdHgubGluZVRvKDU0MCw1NDApO1xuICAgIC8vIHRoaXMuY3R4Lm1vdmVUbygwLDApO1xuICAgIC8vIHRoaXMuY3R4LmxpbmVUbygwLDU0MCk7XG4gICAgLy8gdGhpcy5jdHgubW92ZVRvKDU0MCwwKTtcbiAgICAvLyB0aGlzLmN0eC5saW5lVG8oNTQwLDU0MCk7XG5cbiAgICAvLyB0aGlzLmN0eC5tb3ZlVG8oMTgwLDApO1xuICAgIC8vIHRoaXMuY3R4LmxpbmVUbygxODAsNTQwKTtcblxuICAgIC8vIHRoaXMuY3R4Lm1vdmVUbygzNjAsMCk7XG4gICAgLy8gdGhpcy5jdHgubGluZVRvKDM2MCw1NDApO1xuXG4gICAgLy8gdGhpcy5jdHgubW92ZVRvKDAsMTgwKTtcbiAgICAvLyB0aGlzLmN0eC5saW5lVG8oNTQwLDE4MCk7XG5cbiAgICAvLyB0aGlzLmN0eC5tb3ZlVG8oMCwzNjApO1xuICAgIC8vIHRoaXMuY3R4LmxpbmVUbyg1NDAsMzYwKTtcbiAgICAvLyB0aGlzLmN0eC5zdHJva2UoKTtcblxuXG4gICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gIH1cblxuICBkcmF3Qm94ZXMoKSB7XG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jdHgubGluZVdpZHRoID0gMC41O1xuICAgIGZvciAobGV0IHg9MDsgeCA8IDU0MDsgeCs9NjApIHtcbiAgICAgIGZvciAobGV0IHk9MDsgeTw1NDA7IHkrPTYwKSB7XG4gICAgICAgIHRoaXMuY3R4LnJlY3QoeCx5LDYwLDYwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7IFxuICB9XG5cbiAgcGxhY2VOdW1zKCkge1xuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuXG4gICAgbGV0IGJveCA9IFtdO1xuICAgIGxldCBjb3VudCA9IDA7IFxuXG4gICAgZm9yIChsZXQgeD0xODA7IHg8MzYwOyB4Kz02MCkge1xuICAgICAgY291bnQgKys7IFxuICAgICAgbGV0IGNvbCA9IFtdOyBcbiAgICAgIGZvciAobGV0IHk9MTgwOyB5PDM2MDsgeSs9NjApIHtcbiAgICAgICAgLy8gdGhpcy5jdHgucmVjdCh4LHksNjAsNjApO1xuICAgICAgICBudW0gPSB0aGlzLmdlbmVyYXRlTnVtKCk7XG4gICAgICAgIGlmICghYm94LmluY2x1ZGVzKG51bSkpIHtcbiAgICAgICAgICBib3gucHVzaChudW0pOyBcbiAgICAgICAgICBjb2wucHVzaChudW0pO1xuICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KG51bSwgeCArIDI1LCB5ICsgNDUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmNvbHVtbnNbY291bnQtMV0ucHVzaChjb2wpO1xuICAgICAgdGhpcy5jb2x1bW5zW2NvdW50LTFdLmZsYXQoKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29sdW1ucyk7XG4gICAgfVxuXG4gICAgLy8gdGhpcy5jdHgucmVjdCgxODAsIDE4MCwgNjAsIDYwKTtcbiAgICAvLyBsZXQgbnVtID0gdGhpcy5nZW5lcmF0ZU51bSgpO1xuICAgIC8vIHRoaXMuY3R4LmZpbGxUZXh0KG51bSwgMTgwICsgMjUsIDE4MCArIDQ1KTtcblxuICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICB9XG5cbiAgZmlsbE51bXMoKSB7XG4gICAgLy8gdGhpcy5jdHguZmlsbFRleHQobnVtLCB4ICsgMjUsIHkgKyA0NSk7XG4gIH1cblxuXG59O1xuXG4vLyBsZXQgYiA9IG5ldyBCb2FyZDsgXG4vLyBjb25zb2xlLmxvZyhiLmdlbmVyYXRlTnVtKCkpOyBcbi8vIGIuZ2VuZXJhdGVOdW0oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBCb2FyZDsgXG5cblxuXG4vLyBsZXQgY291bnQgPSAxO1xuLy8gbGV0IHJvd3MgPSB7IDE6IHJvdzEgPSBbXSwgMjogcm93MiA9IFtdLCAzOiByb3czID0gW10sIDQ6IHJvdzQgPSBbXSwgNTogcm93NSA9IFtdLCA2OiByb3c2ID0gW10sIDc6IHJvdzcgPSBbXSwgODogcm93OCA9IFtdLCA5OiByb3c5ID0gW10gfTtcbi8vIGxldCBjb2x1bW5zID0geyAxOiBjb2x1bW4xID0gW10sIDI6IGNvbHVtbjIgPSBbXSwgMzogY29sdW1uMyA9IFtdLCA0OiBjb2x1bW40ID0gW10sIDU6IGNvbHVtbjUgPSBbXSwgNjogY29sdW1uNiA9IFtdLCA3OiBjb2x1bW43ID0gW10sIDg6IGNvbHVtbjggPSBbXSwgOTogY29sdW1uOSA9IFtdIH1cbi8vIC8vIGxldCBjb2xzID0geyAxOiBjb2wxPVtdLCAyOiBjb2wyPVtdLCAzOiBjb2wzPVtdLCA0OiBjb2w0PVtdLCA1OiBjb2w1PVtdLCA2OiBjb2w2PVtdLCA3OiBjb2w3PVtdLCA4OiBjb2w4PVtdLCA5OiBjb2w5PVtdIH07XG5cbi8vIGxldCBjID0gMDtcblxuXG4vLyBmb3IgKGxhcmdlID0gMDsgbGFyZ2UgPCA1NDA7IGxhcmdlICs9IDE4MCkge1xuLy8gICBjb25zb2xlLmxvZygnVyAgICBUICAgICBGJyk7XG4vLyAgIC8vIHRoaXMgaXMgdGhlIGVudGlyZSBsZWZ0IHNpZGUgMyBib3hlcyBkb3duOiBcblxuXG4vLyAgIGZvciAoYiA9IDA7IGIgPCAxODA7IGIgKz0gMTgwKSB7XG4vLyAgICAgY3R4LnN0cm9rZSgpO1xuLy8gICAgIGxldCBib3ggPSBbXTtcblxuLy8gICAgIC8vIHRoaXMgaXMgb25lIGJveDogXG5cbi8vICAgICBsZXQgY2hlY2twb2ludCA9IDA7XG5cbi8vICAgICBmb3IgKHggPSBiOyB4IDwgYiArIDU0MDsgeCArPSA2MCkge1xuLy8gICAgICAgY29uc29sZS5sb2coYGNvbHVtbiAke2NvdW50fWApOyBjb3VudCsrO1xuLy8gICAgICAgbGV0IGNvbCA9IFtdO1xuXG4vLyAgICAgICAvLyB0aGlzIGdvZXMgYWNyb3NzIHRoZSB4IGF4aXMgMyAob3IgOSBkZXBlbmRpbmcgb24gdGhlIHggbGltaXQpIHNwYWNlcyBhbmQgZ2VuZXJhdGVzIGVhY2ggbGl0dGxlIGNvbHVtbiBpbiB0aGUgc21hbGxib3guIFxuLy8gICAgICAgY2hlY2twb2ludCsrO1xuXG4vLyAgICAgICBmb3IgKHkgPSBsYXJnZTsgeSA8IChsYXJnZSArIDE4MCk7IHkgKz0gNjApIHtcblxuLy8gICAgICAgICAvLyB0aGlzIGdvZXMgZG93biB0aGUgeSBheGlzIChvbmUgM3gzIGJveCBhdCBhIHRpbWUpIGFuZCBhZGRzIGxpdHRsZSBzcXVhcmVzIHRvIGNhbnZhcyBhbmQgbnVtcyB0byB0aGUgY29sIHRvIGJlIGFkZGVkIHRvIHRoZSBzbWFsbGJveC4gXG5cbi8vICAgICAgICAgLy8gSSBuZWVkIHRvIGFkZCB0aGUgY29scyB0byBhIGxhcmdlciBjb2x1bW4gYW5kIGNoZWNrIGV2ZXJ5IHRpbWUgSSBnbyB0byB0aGUgbmV4dCBib3ggaWYgdGhlIGNvbCBmcm9tIHRoZSBwcmV2aW91cyBib3ggaGFzIHRoZSBudW1zLiBiZSBjYXJlZnVsIGFib3V0IGFkZGluZyB0byBjb2x1bW4xLCBjb2x1bW4yLCBvciBjb2x1bW4zLiBcblxuLy8gICAgICAgICBjdHgucmVjdCh4LCB5LCA2MCwgNjApO1xuLy8gICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbi8vICAgICAgICAgbGV0IG51bSA9IGdlbmVyYXRlTnVtKCk7XG4vLyAgICAgICAgIGxldCBib29sID0gZmFsc2U7XG5cblxuLy8gICAgICAgICBpZiAoIWNvbHVtbnNbY2hlY2twb2ludF0uZmxhdCgpLmluY2x1ZGVzKG51bSkpIHtcbi8vICAgICAgICAgICBib29sID0gdHJ1ZTtcbi8vICAgICAgICAgfTtcblxuLy8gICAgICAgICBpZiAoIWJveC5pbmNsdWRlcyhudW0pICYmIGJvb2wpIHtcbi8vICAgICAgICAgICBjb2wucHVzaChudW0pOyBib3gucHVzaChudW0pO1xuLy8gICAgICAgICAgIGN0eC5maWxsVGV4dChudW0sIHggKyAyNSwgeSArIDQ1KTtcbi8vICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICBjb2wucHVzaChcIlwiKTsgYm94LnB1c2goXCJcIik7XG4vLyAgICAgICAgIH1cblxuXG4vLyAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbi8vICAgICAgIH1cbi8vICAgICAgIGNvbHVtbnNbY2hlY2twb2ludF0ucHVzaChjb2wpO1xuLy8gICAgIH1cbi8vICAgICBjb25zb2xlLmxvZyhgQm94OiAke2JveH1gKTtcbi8vICAgfVxuLy8gfVxuXG4vLyBsZXQgY29scyA9IHsgMTogY29sMSA9IFtdLCAyOiBjb2wyID0gW10sIDM6IGNvbDMgPSBbXSwgNDogY29sNCA9IFtdLCA1OiBjb2w1ID0gW10sIDY6IGNvbDYgPSBbXSwgNzogY29sNyA9IFtdLCA4OiBjb2w4ID0gW10sIDk6IGNvbDkgPSBbXSB9O1xuXG4vLyBmb3IgKGkgPSAxOyBpIDw9IDk7IGkrKykge1xuLy8gICBjb2xzW2ldID0gcGFyc2lmeShjb2x1bW5zW2ldKTtcbi8vIH07XG5cbi8vIGZvciAoaSA9IDE7IGkgPD0gOTsgaSsrKSB7XG4vLyAgIC8vIGNvbnNvbGUubG9nKGBjb2wgJHtpfTogJHtjb2xzW2ldfWApO1xuLy8gICBjb25zb2xlLmxvZyhgY29sdW1uICR7aX06ICR7Y29sdW1uc1tpXX1gKTtcbi8vIH1cblxuLy8gLy8gbGV0IHJvd3MgPSB7IDE6IHJvdzEsIDI6IHJvdzIsIDM6IHJvdzMsIDQ6IHJvdzQsIDU6IHJvdzUsIDY6IHJvdzYsIDc6IHJvdzcsIDg6IHJvdzgsIDk6IHJvdzkgfTtcblxuLy8gZm9yIChpID0gMTsgaSA8PSA5OyBpKyspIHtcbi8vICAgZm9yIChqID0gMTsgaiA8PSA5OyBqKyspIHtcbi8vICAgICByb3dzW2ldLnB1c2goY29sc1tqXVtpIC0gMV0pO1xuLy8gICB9XG4vLyB9O1xuXG4vLyBmb3IgKGkgPSAxOyBpIDw9IDk7IGkrKykge1xuLy8gICBjb25zb2xlLmxvZyhgcm93ICR7aX06ICR7cm93c1tpXX1gKTtcbi8vIH1cbiIsImNvbnN0IEJvYXJkID0gcmVxdWlyZShcIi4vYm9hcmRcIik7XG5cbmxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FudmFzXCIpO1xubGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlTnVtKCkge1xuICBsZXQgbnVtID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgY29uc29sZS5sb2cobnVtKTtcbiAgcmV0dXJuIG51bTtcbn1cblxuLy8gZnVuY3Rpb24gZHJhd1NtYWxsQm94KGxlZnQsIHJpZ2h0LCB0b3AsIGJvdHRvbSkge1xuLy8gICBsZXQgY291bnQgPSAxO1xuLy8gICBjdHguYmVnaW5QYXRoKCk7XG4vLyAgIC8vIGN0eC5saW5lV2lkdGggPSAxMDtcblxuLy8gICBsZXQgcm93MSA9IFtdO1xuLy8gICBsZXQgcm93MiA9IFtdO1xuLy8gICBsZXQgcm93MyA9IFtdO1xuXG4vLyAgIGN0eC5mb250ID0gXCIyMHB4IEFyaWFsXCI7XG4vLyAgIGN0eC5zdHJva2VTdHlsZSA9IFwicmdiYSgwLDAsMjU1LDAuNSlcIjtcbi8vICAgZm9yIChiID0gbGVmdDsgYiA8IHJpZ2h0OyBiICs9IDE4MCkge1xuLy8gICAgIGN0eC5zdHJva2UoKTtcbi8vICAgICBsZXQgYm94ID0gW107XG4vLyAgICAgZm9yICh4ID0gYjsgeCA8IGIgKyAxODA7IHggKz0gNjApIHtcbi8vICAgICAgIGNvbnNvbGUubG9nKGBjb2x1bW4gJHtjb3VudH1gKTsgY291bnQrKztcbi8vICAgICAgIGxldCBjb2wgPSBbXTtcbi8vICAgICAgIGZvciAoeSA9IHRvcDsgeSA8IGJvdHRvbTsgeSArPSA2MCkge1xuLy8gICAgICAgICBjdHgucmVjdCh4LCB5LCA2MCwgNjApO1xuLy8gICAgICAgICBsZXQgbnVtID0gZ2VuZXJhdGVOdW0oKTtcbi8vICAgICAgICAgaWYgKCFjb2wuaW5jbHVkZXMobnVtKSAmJiAhYm94LmluY2x1ZGVzKG51bSkpIHtcbi8vICAgICAgICAgICBjb2wucHVzaChudW0pOyBib3gucHVzaChudW0pO1xuLy8gICAgICAgICAgIGN0eC5mb250ID0gXCIxNTBweCBBcmlhbFwiO1xuLy8gICAgICAgICAgIGN0eC5maWxsVGV4dChudW0sIHggKyAyNSwgeSArIDQ1KTtcbi8vICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICBjb2wucHVzaChcIlwiKTsgYm94LnB1c2goXCJcIik7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgY3R4LnN0cm9rZSgpO1xuLy8gICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4vLyAgICAgICB9XG5cbi8vICAgICAgIGlmICghcm93MS5pbmNsdWRlcyhjb2xbMF0pKSB7XG4vLyAgICAgICAgIHJvdzEucHVzaChjb2xbMF0pO1xuLy8gICAgICAgfTtcbi8vICAgICAgIGlmICghcm93Mi5pbmNsdWRlcyhjb2xbMV0pKSB7XG4vLyAgICAgICAgIHJvdzIucHVzaChjb2xbMV0pO1xuLy8gICAgICAgfTtcbi8vICAgICAgIGlmICghcm93My5pbmNsdWRlcyhjb2xbMl0pKSB7XG4vLyAgICAgICAgIHJvdzMucHVzaChjb2xbMl0pO1xuLy8gICAgICAgfTtcbi8vICAgICB9XG4vLyAgICAgY29uc29sZS5sb2coYFJvdyAxOiAke3JvdzF9YCk7XG4vLyAgICAgY29uc29sZS5sb2coYFJvdyAyOiAke3JvdzJ9YCk7XG4vLyAgICAgY29uc29sZS5sb2coYFJvdyAzOiAke3JvdzN9YCk7XG4vLyAgICAgLy8gY29uc29sZS5sb2coYEJveDogJHtib3h9YCk7XG4vLyAgICAgY29uc29sZS5sb2coYGJveCBiZXR3ZWVuIGxlZnQsICR7bGVmdH0sIGFuZCByaWdodCwgJHtyaWdodH0sIGNvbXBsZXRlISB3aXRoOiBbJHtib3h9XWApO1xuLy8gICB9XG4vLyB9XG4vLyBmdW5jdGlvbiBkcmF3TGFyZ2VCb3goKSB7XG4vLyAgIGZvciAobGVmdCA9IDA7IGxlZnQgPCA1NDA7IGxlZnQgKz0gMTgwKSB7XG4vLyAgICAgZHJhd1NtYWxsQm94KGxlZnQsIGxlZnQgKyAxODAsIDAsIDE4MCk7XG4vLyAgICAgZHJhd1NtYWxsQm94KGxlZnQsIGxlZnQgKyAxODAsIDE4MCwgMzYwKTtcbi8vICAgICBkcmF3U21hbGxCb3gobGVmdCwgbGVmdCArIDE4MCwgMzYwLCA1NDApO1xuLy8gICAgIC8vIGNvbnNvbGUubG9nKGRyYXdTbWFsbEJveC5yb3cxKVxuLy8gICB9XG4vLyB9O1xuXG5cblxuZnVuY3Rpb24gcGFyc2lmeShhcnIpIHtcbiAgbGV0IG9iaiA9IHt9O1xuICBhcnIuZm9yRWFjaChlbCA9PiB7XG4gICAgb2JqW2VsXSA9IHRydWU7XG4gIH0pXG4gIG5ld0FyciA9IFtdO1xuICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goa2V5ID0+IHtcbiAgICBrZXkuc3BsaXQoJywnKS5mb3JFYWNoKGVsID0+IHtcbiAgICAgIG5ld0Fyci5wdXNoKHBhcnNlSW50KGVsKSk7XG4gICAgfSlcbiAgfSlcbiAgcmV0dXJuIG5ld0Fycjtcbn1cblxuZnVuY3Rpb24gZHJhd1JlY3QoKSB7XG5cbiAgbGV0IGNvdW50ID0gMTtcbiAgbGV0IHJvd3MgPSB7IDE6IHJvdzEgPSBbXSwgMjogcm93MiA9IFtdLCAzOiByb3czID0gW10sIDQ6IHJvdzQgPSBbXSwgNTogcm93NSA9IFtdLCA2OiByb3c2ID0gW10sIDc6IHJvdzcgPSBbXSwgODogcm93OCA9IFtdLCA5OiByb3c5ID0gW10gfTtcbiAgbGV0IGNvbHVtbnMgPSB7IDE6IGNvbHVtbjEgPSBbXSwgMjogY29sdW1uMiA9IFtdLCAzOiBjb2x1bW4zID0gW10sIDQ6IGNvbHVtbjQgPSBbXSwgNTogY29sdW1uNSA9IFtdLCA2OiBjb2x1bW42ID0gW10sIDc6IGNvbHVtbjcgPSBbXSwgODogY29sdW1uOCA9IFtdLCA5OiBjb2x1bW45ID0gW10gfVxuICAvLyBsZXQgY29scyA9IHsgMTogY29sMT1bXSwgMjogY29sMj1bXSwgMzogY29sMz1bXSwgNDogY29sND1bXSwgNTogY29sNT1bXSwgNjogY29sNj1bXSwgNzogY29sNz1bXSwgODogY29sOD1bXSwgOTogY29sOT1bXSB9O1xuXG4gIGxldCBjID0gMDtcblxuICBjdHguYmVnaW5QYXRoKCk7XG5cbiAgZm9yIChsYXJnZSA9IDA7IGxhcmdlIDwgNTQwOyBsYXJnZSArPSAxODApIHtcbiAgICBjb25zb2xlLmxvZygnVyAgICBUICAgICBGJyk7XG4gICAgLy8gdGhpcyBpcyB0aGUgZW50aXJlIGxlZnQgc2lkZSAzIGJveGVzIGRvd246IFxuXG5cbiAgICBmb3IgKGIgPSAwOyBiIDwgMTgwOyBiICs9IDE4MCkge1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgbGV0IGJveCA9IFtdO1xuXG4gICAgICAvLyB0aGlzIGlzIG9uZSBib3g6IFxuXG4gICAgICBsZXQgY2hlY2twb2ludCA9IDA7XG5cbiAgICAgIGZvciAoeCA9IGI7IHggPCBiICsgNTQwOyB4ICs9IDYwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBjb2x1bW4gJHtjb3VudH1gKTsgY291bnQrKztcbiAgICAgICAgbGV0IGNvbCA9IFtdO1xuXG4gICAgICAgIC8vIHRoaXMgZ29lcyBhY3Jvc3MgdGhlIHggYXhpcyAzIChvciA5IGRlcGVuZGluZyBvbiB0aGUgeCBsaW1pdCkgc3BhY2VzIGFuZCBnZW5lcmF0ZXMgZWFjaCBsaXR0bGUgY29sdW1uIGluIHRoZSBzbWFsbGJveC4gXG4gICAgICAgIGNoZWNrcG9pbnQrKztcblxuICAgICAgICBmb3IgKHkgPSBsYXJnZTsgeSA8IChsYXJnZSArIDE4MCk7IHkgKz0gNjApIHtcblxuICAgICAgICAgIC8vIHRoaXMgZ29lcyBkb3duIHRoZSB5IGF4aXMgKG9uZSAzeDMgYm94IGF0IGEgdGltZSkgYW5kIGFkZHMgbGl0dGxlIHNxdWFyZXMgdG8gY2FudmFzIGFuZCBudW1zIHRvIHRoZSBjb2wgdG8gYmUgYWRkZWQgdG8gdGhlIHNtYWxsYm94LiBcblxuICAgICAgICAgIC8vIEkgbmVlZCB0byBhZGQgdGhlIGNvbHMgdG8gYSBsYXJnZXIgY29sdW1uIGFuZCBjaGVjayBldmVyeSB0aW1lIEkgZ28gdG8gdGhlIG5leHQgYm94IGlmIHRoZSBjb2wgZnJvbSB0aGUgcHJldmlvdXMgYm94IGhhcyB0aGUgbnVtcy4gYmUgY2FyZWZ1bCBhYm91dCBhZGRpbmcgdG8gY29sdW1uMSwgY29sdW1uMiwgb3IgY29sdW1uMy4gXG5cbiAgICAgICAgICBjdHgucmVjdCh4LCB5LCA2MCwgNjApO1xuICAgICAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgICAgIGxldCBudW0gPSBnZW5lcmF0ZU51bSgpO1xuICAgICAgICAgIGxldCBib29sID0gZmFsc2U7XG5cblxuICAgICAgICAgIGlmICghY29sdW1uc1tjaGVja3BvaW50XS5mbGF0KCkuaW5jbHVkZXMobnVtKSkge1xuICAgICAgICAgICAgYm9vbCA9IHRydWU7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmICghYm94LmluY2x1ZGVzKG51bSkgJiYgYm9vbCkge1xuICAgICAgICAgICAgY29sLnB1c2gobnVtKTsgYm94LnB1c2gobnVtKTtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChudW0sIHggKyAyNSwgeSArIDQ1KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29sLnB1c2goXCJcIik7IGJveC5wdXNoKFwiXCIpO1xuICAgICAgICAgIH1cblxuXG4gICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbHVtbnNbY2hlY2twb2ludF0ucHVzaChjb2wpO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coYEJveDogJHtib3h9YCk7XG4gICAgfVxuICB9XG5cbiAgbGV0IGNvbHMgPSB7IDE6IGNvbDEgPSBbXSwgMjogY29sMiA9IFtdLCAzOiBjb2wzID0gW10sIDQ6IGNvbDQgPSBbXSwgNTogY29sNSA9IFtdLCA2OiBjb2w2ID0gW10sIDc6IGNvbDcgPSBbXSwgODogY29sOCA9IFtdLCA5OiBjb2w5ID0gW10gfTtcblxuICBmb3IgKGkgPSAxOyBpIDw9IDk7IGkrKykge1xuICAgIGNvbHNbaV0gPSBwYXJzaWZ5KGNvbHVtbnNbaV0pO1xuICB9O1xuXG4gIGZvciAoaSA9IDE7IGkgPD0gOTsgaSsrKSB7XG4gICAgLy8gY29uc29sZS5sb2coYGNvbCAke2l9OiAke2NvbHNbaV19YCk7XG4gICAgY29uc29sZS5sb2coYGNvbHVtbiAke2l9OiAke2NvbHVtbnNbaV19YCk7XG4gIH1cblxuICAvLyBsZXQgcm93cyA9IHsgMTogcm93MSwgMjogcm93MiwgMzogcm93MywgNDogcm93NCwgNTogcm93NSwgNjogcm93NiwgNzogcm93NywgODogcm93OCwgOTogcm93OSB9O1xuXG4gIGZvciAoaSA9IDE7IGkgPD0gOTsgaSsrKSB7XG4gICAgZm9yIChqID0gMTsgaiA8PSA5OyBqKyspIHtcbiAgICAgIHJvd3NbaV0ucHVzaChjb2xzW2pdW2kgLSAxXSk7XG4gICAgfVxuICB9O1xuXG4gIGZvciAoaSA9IDE7IGkgPD0gOTsgaSsrKSB7XG4gICAgY29uc29sZS5sb2coYHJvdyAke2l9OiAke3Jvd3NbaV19YCk7XG4gIH1cblxufVxuXG4vLyBkcmF3UmVjdCgpO1xuXG5cbiAgICAvLyBkcmF3TGFyZ2VCb3goKTtcblxuICAgIC8vIGRyYXdTbWFsbEJveCgwLCAxODAsIDAsIDE4MCk7XG5cblxuICAgIC8vIGRyYXdTbWFsbEJveCgpO1xuICAgIC8vIFN1ZG9rdS5kcmF3TGFyZ2VCb3g7XG4gICAgLy8gc2V0SW50ZXJ2YWwoZHJhd1JlY3QsIDQwKTtcblxuXG5cbmxldCBiID0gbmV3IEJvYXJkKGNhbnZhcyxjdHgpO1xuYi5nZW5lcmF0ZU51bSgpO1xuXG5cbi8vIGIuZHJhd0JhbGwoKTtcbmIuZHJhd0JveGVzKCk7XG4vLyBiLmRyYXdCb2FyZCgpO1xuYi5wbGFjZU51bXMoKTtcblxuYi5kcmF3T3V0bGluZSgpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=