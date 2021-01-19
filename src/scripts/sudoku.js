// const Board = require("./board");
const Grid = require("./board");
// const CanvasSudoku = require("./canvas_board"); 
const CanvasBoard = require("./canvas_board");

// import {
//   CanvasBoard as CanvasBoard, CanvasSudoku as CanvasSudoku
// } from './canvas_board'; 

// let elem = document.getElementById("instr");

function newSudoku() {
  document.getElementById("myCanvas").innerHTML = '';

  let g = new Grid();
  g.createCartesian();
  g.templatePuzzles();
  // return;
  g.obtainIDs();
  return; 
//   let grid = document.getElementById("myCanvas");
//   // grid.style.backgroundColor = 'white'; 
//   // grid.style.cssText = "display: flex; flexFlow: wrap; width: 54vw; height: 54vh;"
//   Object.assign(grid.style, {
//     height: '54vh',
//     width: '54vw',  
//     display: 'flex', 
//     flexFlow: 'wrap', 
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     color: 'black', 
//     margin: '70 auto' 
//   }); 
  
//   // for (let i = 1; i<=81; i++) {
//   //   let cell = document.createElement('div'); 
//   //   // grid.appendChild(document.createTextNode(i)); 
//   //   cell.appendChild(document.createTextNode(i)); 
//   //   grid.appendChild(cell); 
    
//   //   cell.style.width = '5.4vw'; 
//   //   cell.style.height = '5.4vh'; 
//   //   if (i%3===0) {
//   //     cell.style.border = '.2vw solid black'; 
//   //     // cell.style.borderRight = '.2vw solid black'; 
//   //     // cell.style.borderBottom = '.2vw solid black'; 
//   //   } else {
//   //     cell.style.border = '.2vw dotted black'; 
//   //   }
//   // }
  
  
//   for (let i=1; i<=9; i++) {
//       console.log(`i: ${i}`); 
//       let box = document.createElement('div'); 
//       // box.appendChild(document.createTextNode(i)); 
//       grid.appendChild(box); 
//       Object.assign(box.style, {
//         height: '17.4vh', 
//         width: '17.4vw',
//         // border: '.2vw solid black',
//         border: '.2vw solid black',
//         display: 'flex',
//         flexFlow: 'wrap'
//       }); 
//       // box.style.border = ".2vw solid black";
//       box.id = i; 
//       console.log(`id: # ${i}`);     

//       // box.style.cssText = 'display: flex; flexFlow: wrap';     
//       // box.style.display = 'flex';
//       // box.style.flexFlow = 'wrap';
    
    
//       for (let j=1; j<=9; j++) {
//           let cell = document.createElement('div');
//           // cell.appendChild(document.createTextNode(j));
//           box.appendChild(cell);  
//           cell.style.width = '5.4vw'; 
//           cell.style.height = '5.4vh'; 
//           cell.style.border = '.2vw dotted black';
//           cell.id = i + '-' + j; 
//           let prob = Math.floor(Math.random()*2);
//           console.log(`prob: ${prob}`);
//           // if (j%3 ===0) {
//           if (prob) {
//             cell.appendChild(document.createTextNode(Math.ceil(Math.random()*9)));            
//           } else {
//             console.log('eh'); 
//             let inp = document.createElement('input'); 
//             inp.type = 'text'; inp.value= ''; 
//             // inp.style = Object.assign(inp.style, cell.style); 
//             inp.style.width = '5.4vw';
//             inp.style.height = '5.4vh';
//             inp.style.backgroundColor = 'white'; 
//             inp.style.border = '.2vw dotted black';
//             cell.appendChild(inp); 
//             // cell.appendChild(document.createTextNode(Math.ceil(Math.random()*9)));            
//             // cell.appendChild(document.createTextNode(cell.id));
//           }
//         }
//       }

//       // document.getElementById('6-1').appendChild(document.createTextNode('  ayyy'));
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

// clearBoard() {
//   clearRect(0, 0, 540, 540);
// }

// document.getElementById("resetBoard").onclick = launchSudoku(); 
// let canvas = document.getElementById("myCanvas");
// let ctx = canvas.getContext("2d");
// let b = new Board(canvas, ctx); 
// b.generateNum(); 
// b.drawBoxes(); 