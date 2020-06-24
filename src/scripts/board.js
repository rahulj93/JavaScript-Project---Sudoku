class Board {
  constructor(canvas, ctx) {
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
  
  generateNum() {
    let num = Math.ceil(Math.random() * 9);
    console.log(`num: ${num}`);
    return num; 
  }

  drawBall() {
    this.ctx.beginPath();

    this.ctx.arc(50, 50, 20, 0, Math.PI * 2);
    this.ctx.fillStyle = "#0095DD";
    this.ctx.stroke(); 
    // this.ctx.fill();
    this.ctx.closePath();
  }

  drawOutline() {
    this.ctx.beginPath();
    this.ctx.lineWidth = 4; 

    for (let x = 0; x<=540; x+=180) {
      this.ctx.moveTo(x,0);
      this.ctx.lineTo(x, 540);

      this.ctx.moveTo(0,x);
      this.ctx.lineTo(540, x);
    }

    // for (let y = 0; y<=540; y+=180) {
    //   this.ctx.moveTo(0,y);
    //   this.ctx.lineTo(540, y);
    // }

    this.ctx.stroke();

    this.ctx.closePath();
  }

  drawBoxes() {
    this.ctx.beginPath();
    this.ctx.lineWidth = 0.5;
    for (let x=0; x < 540; x+=60) {
      for (let y=0; y<540; y+=60) {
        this.ctx.rect(x,y,60,60);
      }
    }
    this.ctx.stroke();
    this.ctx.closePath(); 
  }

  placeNums(startX,startY) {
    this.ctx.beginPath();

    // x is 180 -> count = 3 bc 540/9 = 60 and 180/60 = 3

    let box = [];
    let colIndex = startX/60; 

    // for (let x=180; x<360; x+=60) {
    for (let x=startX; x< (startX+180); x+=60) {
      colIndex ++; 
      let col = []; 
      for (let y=startY; y<(startY+180); y+=60) {
        // this.ctx.rect(x,y,60,60);
        num = this.generateNum();
        if (!box.includes(num) && !this.columns[colIndex-1].flat().flat().includes(num)) {
          box.push(num); 
          col.push(num);
          this.ctx.fillText(num, x + 25, y + 45);
        } else {
          col.push("-");
        }
      }
      this.columns[colIndex-1].push(col);
      this.columns[colIndex-1].flat();
      console.log(`box: [${box}]`);
      console.log("Columns: ", this.columns);
      // console.log(`Columns: ${this.columns}`);
      console.log("cols:", Object.values(this.columns).flat());
    }

    // this.ctx.rect(180, 180, 60, 60);
    // let num = this.generateNum();
    // this.ctx.fillText(num, 180 + 25, 180 + 45);

    this.ctx.closePath();
  }

};

// let b = new Board; 
// console.log(b.generateNum()); 
// b.generateNum();

module.exports = Board; 



// let count = 1;
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
