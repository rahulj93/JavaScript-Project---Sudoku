const Board = require("./board");

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

function generateNum() {
  let num = Math.ceil(Math.random() * 9);
  console.log(num);
  return num;
}

// function drawSmallBox(left, right, top, bottom) {
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
  let obj = {};
  arr.forEach(el => {
    obj[el] = true;
  })
  newArr = [];
  Object.keys(obj).forEach(key => {
    key.split(',').forEach(el => {
      newArr.push(parseInt(el));
    })
  })
  return newArr;
}

function drawRect() {

  let count = 1;
  let rows = { 1: row1 = [], 2: row2 = [], 3: row3 = [], 4: row4 = [], 5: row5 = [], 6: row6 = [], 7: row7 = [], 8: row8 = [], 9: row9 = [] };
  let columns = { 1: column1 = [], 2: column2 = [], 3: column3 = [], 4: column4 = [], 5: column5 = [], 6: column6 = [], 7: column7 = [], 8: column8 = [], 9: column9 = [] }
  // let cols = { 1: col1=[], 2: col2=[], 3: col3=[], 4: col4=[], 5: col5=[], 6: col6=[], 7: col7=[], 8: col8=[], 9: col9=[] };

  let c = 0;

  ctx.beginPath();

  for (large = 0; large < 540; large += 180) {
    console.log('W    T     F');
    // this is the entire left side 3 boxes down: 


    for (b = 0; b < 180; b += 180) {
      ctx.stroke();
      let box = [];

      // this is one box: 

      let checkpoint = 0;

      for (x = b; x < b + 540; x += 60) {
        console.log(`column ${count}`); count++;
        let col = [];

        // this goes across the x axis 3 (or 9 depending on the x limit) spaces and generates each little column in the smallbox. 
        checkpoint++;

        for (y = large; y < (large + 180); y += 60) {

          // this goes down the y axis (one 3x3 box at a time) and adds little squares to canvas and nums to the col to be added to the smallbox. 

          // I need to add the cols to a larger column and check every time I go to the next box if the col from the previous box has the nums. be careful about adding to column1, column2, or column3. 

          ctx.rect(x, y, 60, 60);
          ctx.stroke();

          let num = generateNum();
          let bool = false;


          if (!columns[checkpoint].flat().includes(num)) {
            bool = true;
          };

          if (!box.includes(num) && bool) {
            col.push(num); box.push(num);
            ctx.fillText(num, x + 25, y + 45);
          } else {
            col.push(0); box.push(0);
          }


          ctx.closePath();
        }
        columns[checkpoint].push(col);
      }
      console.log(`Box: ${box}`);
    }
  }

  let cols = { 1: col1 = [], 2: col2 = [], 3: col3 = [], 4: col4 = [], 5: col5 = [], 6: col6 = [], 7: col7 = [], 8: col8 = [], 9: col9 = [] };

  for (i = 1; i <= 9; i++) {
    cols[i] = parsify(columns[i]);
  };

  for (i = 1; i <= 9; i++) {
    // console.log(`col ${i}: ${cols[i]}`);
    console.log(`column ${i}: ${columns[i]}`);
  }

  // let rows = { 1: row1, 2: row2, 3: row3, 4: row4, 5: row5, 6: row6, 7: row7, 8: row8, 9: row9 };

  for (i = 1; i <= 9; i++) {
    for (j = 1; j <= 9; j++) {
      rows[i].push(cols[j][i - 1]);
    }
  };

  for (i = 1; i <= 9; i++) {
    console.log(`row ${i}: ${rows[i]}`);
  }

}

// drawRect();


    // drawLargeBox();

    // drawSmallBox(0, 180, 0, 180);


    // drawSmallBox();
    // Sudoku.drawLargeBox;
    // setInterval(drawRect, 40);

let sudoku = document.getElementById("resetBoard"); 
sudoku.onclick = launchSudoku; 
    



// clearBoard() {
//   clearRect(0, 0, 540, 540);
// }

function launchSudoku () {
  // let canvas = document.getElementById("myCanvas");
  // let ctx = canvas.getContext("2d");
  // ctx.clearBoard();
  // ctx.beginPath();
  ctx.clearRect(0, 0, 540, 540);
  // ctx.closePath();

  alert("New Board! ");
  let b = new Board(canvas,ctx);
  b.generateNum();
  
  
  // b.drawBall();
  b.drawBoxes();
  // b.drawBoard();
  b.placeNums(180,180);
  
  b.placeNums(0,0);
  b.placeNums(360,360);
  
  b.placeNums(0,360);
  b.placeNums(360,0);
  
  
  
  b.placeNums(0,180);
  b.placeNums(180,0);
  
  
  b.placeNums(180,360);
  b.placeNums(360,180);
  
  
  b.checkValues();
  
  
  
  // b.genRows();
  
  // b.placeNums(0,0);
  
  // b.placeNums(180, 180);
  // b.placeNums(0, 180);
  // b.placeNums(0, 360);
  // b.placeNums(180, 0);
  
  b.drawOutline();

}


// document.getElementById("resetBoard").onclick = launchSudoku(); 
 