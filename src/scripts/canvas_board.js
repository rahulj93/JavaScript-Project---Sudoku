class CanvasBoard {
  constructor(canvas, ctx) {
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
    // this.clearBoard = this.clearBoard.bind(this);
  }
  
  generateNum() {
    let num = Math.ceil(Math.random() * 9);
    console.log(`num: ${num}`);
    return num; 
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
    this.ctx.font = "20px Arial";

    // x is 180 -> count = 3 bc 540/9 = 60 and 180/60 = 3

    let box = [];
    let colIndex = (startX/60) - 1; 
    
    for (let x=startX; x< (startX+180); x+=60) {
      
      let rowIndex = (startY/60)-1;
      colIndex ++; 
      let col = []; 

      for (let y=startY; y<(startY+180); y+=60) {
        rowIndex++; 

        num = this.generateNum();

        //  Since I'm building a box one column at a time, the following boolean variable checks that the number isn't already in the row (whether added while building a different box or added while building this box)

        let bool=false; 
        if (!this.rows[rowIndex].includes(num)) {
          bool=true;
        }

        // Roll a dice to limit the number placements to the board to reduce the risk of building an unsolvable board 

        let diceRoll = false; 
        let coin = Math.ceil(Math.random()*6);
        if (coin ===1) {
          diceRoll = true;
        }
        
        if (diceRoll && bool && !box.includes(num) && !this.columns[colIndex].flat().flat().includes(num)) {
          box.push(num); 
          col.push(num);
          this.rows[rowIndex][colIndex]= num ;
          this.ctx.fillText(num, x + 25, y + 45);
        } else {
          col.push(0);
          this.rows[rowIndex][colIndex]= 0 ;
        }

      }

      this.columns[colIndex].push(col);
      this.columns[colIndex] = this.columns[colIndex].flat();

      console.log(`box: [${box}]`);
      console.log("Columns: ", this.columns);
      // console.log("cols:", Object.values(this.columns).flat());
    }

    console.log("Rows: ", this.rows);
    this.ctx.closePath();
  }

  recursiveSolver() {

  }


  genRows() {
    for (let col = 0; col < Object.keys(this.columns).length; col++) {
      for (let row = 0; row < Object.keys(this.columns).length; row++) {
        let el = this.columns[row].flat()[col];
        this.rows[col].push(el);
      }
    }
    // console.log('Rows: ', this.rows); 
    return this.rows;
  }

  checkValues() {
    console.log("Checking columns: ", this.columns);
    console.log("Checking rows: ", this.rows);
    let box1 = [ this.rows[0].slice(0, 3), this.rows[1].slice(0, 3), this.rows[2].slice(0, 3) ];
    let box2 = [ this.rows[3].slice(0, 3), this.rows[4].slice(0, 3), this.rows[5].slice(0, 3) ];
    let box3 = [ this.rows[6].slice(0, 3), this.rows[7].slice(0, 3), this.rows[8].slice(0, 3) ];
    
    let box4 = [ this.rows[0].slice(3, 6), this.rows[1].slice(3, 6), this.rows[2].slice(3, 6) ];
    let box5 = [ this.rows[3].slice(3, 6), this.rows[4].slice(3, 6), this.rows[5].slice(3, 6) ];
    let box6 = [ this.rows[6].slice(3, 6), this.rows[7].slice(3, 6), this.rows[8].slice(3, 6) ];

    let box7 = [ this.rows[0].slice(6, 9), this.rows[1].slice(6, 9), this.rows[2].slice(6, 9) ];
    let box8 = [ this.rows[3].slice(6, 9), this.rows[4].slice(6, 9), this.rows[5].slice(6, 9) ];
    let box9 = [ this.rows[6].slice(6, 9), this.rows[7].slice(6, 9), this.rows[8].slice(6, 9) ];

    console.log("box1: ", box1);
    console.log("box2: ", box2);
    console.log("box3: ", box3);

    console.log("box4: ", box4);
    console.log("box5: ", box5);
    console.log("box6: ", box6);

    console.log("box7: ", box7);
    console.log("box8: ", box8);
    console.log("box9: ", box9);

  }

  // clearBoard() {
  //   clearRect(0, 0, 540, 540);
  // }

};

// let b = new Board; 
// console.log(b.generateNum()); 
// b.generateNum();

module.exports = CanvasBoard; 

// --------------------------------------------------------




  function generateNum() {
    let num = Math.ceil(Math.random() * 9);
    console.log(num);
    return num;
  }

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

  function drawSmallBox(left, right, top, bottom) {
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    
    let count = 1;
    ctx.beginPath();
    // ctx.lineWidth = 10;

    let row1 = [];
    let row2 = [];
    let row3 = [];

    ctx.font = "20px Arial";
    // ctx.strokeStyle = "rgba(0,0,255,0.5)";
    for (b = left; b < right; b += 180) {
      ctx.stroke();
      let box = [];
      for (x = b; x < b + 180; x += 60) {
        console.log(`column ${count}`); count++;
        let col = [];
        for (y = top; y < bottom; y += 60) {
          ctx.rect(x, y, 60, 60);
          let num = generateNum();
          if (!col.includes(num) && !box.includes(num)) {
            col.push(num); box.push(num);
            ctx.fillText(num, x + 25, y + 45);
          } else {
            col.push(""); box.push("");
          }
          ctx.stroke();
          ctx.closePath();
        }

        if (!row1.includes(col[0])) {
          row1.push(col[0]);
        };
        if (!row2.includes(col[1])) {
          row2.push(col[1]);
        };
        if (!row3.includes(col[2])) {
          row3.push(col[2]);
        };
      }
      console.log(`Row 1: ${row1}`);
      console.log(`Row 2: ${row2}`);
      console.log(`Row 3: ${row3}`);
      // console.log(`Box: ${box}`);
      console.log(`box between left, ${left}, and right, ${right}, complete! with: [${box}]`);
    }
  }

  function drawLargeBox() {
    for (left = 0; left < 540; left += 180) {
      drawSmallBox(left, left + 180, 0, 180);
      drawSmallBox(left, left + 180, 180, 360);
      drawSmallBox(left, left + 180, 360, 540);
      // console.log(drawSmallBox.row1)
    }
  };

    // drawLargeBox();
    // drawSmallBox(0, 180, 0, 180);

    // Sudoku.drawLargeBox;

  function drawRect() {
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 540, 540);

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
    
            // let num = this.generateNum();
            let num = generateNum();
            let bool = false;
    
    
            if (!columns[checkpoint].flat().includes(num)) {
              bool = true;
            };
    
            if (!box.includes(num) && bool) {
              col.push(num); box.push(num);
              ctx.fillText(num, x + 25, y + 45);
            } else {
              col.push(""); box.push("");
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
// }

// drawRect(); 
// module.exports = {
//   CanvasBoard: CanvasBoard, 
//   CanvasSudoku: CanvasSudoku
// }  

// module.exports = CanvasSudoku; 


  // setInterval(drawRect, 2000);
