// const Board = require("./board");
const Grid = require("./board");
// const CanvasSudoku = require("./canvas_board"); 
const CanvasBoard = require("./canvas_board");
const Timer = require("./timer"); 

let begin; 
function go() {
  let ti = new Timer(); 
  begin = setInterval(function() {ti.start(), 1000}); 
  begin; 
}
go(); 
// import {
//   CanvasBoard as CanvasBoard, CanvasSudoku as CanvasSudoku
// } from './canvas_board'; 

// let elem = document.getElementById("instr");
let x = 0; 
function timeNow() {
  let t = setTimeout(function() {timeNow()}, 1000); 
}
let t; 
function myFunc(time, x) {
  let d = new Date();  
  // let min = d.getMinutes() - x.getMinutes(); 
  // let sec = d.getSeconds() - x.getSeconds(); 
  time.innerHTML = 'Time: ';
  let elapsedTime = Math.round((d - x) / 1000); 
  if (elapsedTime % 60 < 10) { 
    time.appendChild(document.createTextNode(Math.floor(elapsedTime/60)+':0'+(elapsedTime%60))); 
  } else {
    time.appendChild(document.createTextNode(Math.floor(elapsedTime / 60) + ':' + (elapsedTime % 60)));  
  }
  t= setTimeout(function() {myFunc(time, x)}, 1000); 
}

// export default function newSudoku() {
  function newSudoku() {
  // clearTimeout(t); 
  // let startTime = new Date;
  // // let x = 0; 
  // let time = document.getElementById("time"); 
  // // window.clearInterval; 
  // // timeNow(); 
  // myFunc(time, startTime); 
  // // setInterval(myFunc(startTime), 1000); 
    clearInterval(begin); 
go(); 

  document.getElementById("myCanvas").innerHTML = '';
  let g = new Grid();
  g.createCartesian();
  g.templatePuzzles();

  // console.log(startTime.getMinutes() + ":" + startTime.getSeconds());

  return;
  g.obtainIDs();
      // box.style.cssText = 'display: flex; flexFlow: wrap';     
      // box.style.display = 'flex';
      // box.style.flexFlow = 'wrap';
}

function launchSudoku() {
  let canvas = document.getElementById("myCanvas");
  let ctx = canvas.getContext("2d");
  // ctx.clearBoard();
  // ctx.beginPath();
  ctx.clearRect(0, 0, 540, 540);
  // ctx.closePath();

  // alert("New Board! ");
  let b = new CanvasBoard(canvas, ctx);
  b.generateNum();


  // b.drawBall();
  b.drawBoxes();
  // b.drawBoard();
  b.placeNums(180, 180);

  b.placeNums(0, 0);
  b.placeNums(360, 360);

  b.placeNums(0, 360);
  b.placeNums(360, 0);



  b.placeNums(0, 180);
  b.placeNums(180, 0);


  b.placeNums(180, 360);
  b.placeNums(360, 180);


  b.checkValues();

  // b.genRows();

  // b.placeNums(0,0);

  // b.placeNums(180, 180);
  // b.placeNums(0, 180);
  // b.placeNums(0, 360);
  // b.placeNums(180, 0);

  b.drawOutline();

}

// newSudoku(); 
let sudoku = document.getElementById("resetBoard");
// sudoku.onclick = launchSudoku;
    sudoku.onclick = newSudoku;

// document.getElementById("resetBoard").onclick = launchSudoku(); 
// let canvas = document.getElementById("myCanvas");
// let ctx = canvas.getContext("2d");
// let b = new Board(canvas, ctx); 
// b.generateNum(); 
// b.drawBoxes(); 

export default function testing() {
  alert('test!'); 
}

// module.exports = testing; 

document.getElementById('startBoard').onclick = newSudoku; 