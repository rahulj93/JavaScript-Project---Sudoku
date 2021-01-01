class Board {
  constructor() {
    this.boxes = {
      0: [],
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
      7: [],
      8: [],
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
      8: [],
    }
    this.columns = {
      0: [],
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
      7: [],
      8: [],
    }
    this.generateNum = this.generateNum.bind(this);
    this.drawBoxes = this.drawBoxes.bind(this);
    this.placeNums = this.placeNums.bind(this);
    this.checkValues = this.checkValues.bind(this);
  }

  generateNum() {
    let num = Math.ceil(Math.random() * 9);
    console.log(`num: ${num}`);
    return num;
  }

  drawOutline() {
    this.ctx.beginPath();
    this.ctx.lineWidth = 4;

    for (let x = 0; x <= 540; x += 180) {
      this.ctx.moveTo(x, 0);
      this.ctx.lineTo(x, 540);

      this.ctx.moveTo(0, x);
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
    for (let x = 0; x < 540; x += 60) {
      for (let y = 0; y < 540; y += 60) {
        this.ctx.rect(x, y, 60, 60);
      }
    }
    this.ctx.stroke();
    this.ctx.closePath();
  }

  placeNums(startX, startY) {
    this.ctx.beginPath();
    this.ctx.font = "20px Arial";

    // x is 180 -> count = 3 bc 540/9 = 60 and 180/60 = 3

    let box = [];
    let colIndex = (startX / 60) - 1;

    for (let x = startX; x < (startX + 180); x += 60) {

      let rowIndex = (startY / 60) - 1;
      colIndex++;
      let col = [];

      for (let y = startY; y < (startY + 180); y += 60) {
        rowIndex++;

        num = this.generateNum();

        //  Since I'm building a box one column at a time, the following boolean variable checks that the number isn't already in the row (whether added while building a different box or added while building this box)

        let bool = false;
        if (!this.rows[rowIndex].includes(num)) {
          bool = true;
        }

        // Roll a dice to limit the number placements to the board to reduce the risk of building an unsolvable board 

        let diceRoll = false;
        let coin = Math.ceil(Math.random() * 6);
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

      console.log(`box: [${box}]`);
      console.log("Columns: ", this.columns);
      // console.log("cols:", Object.values(this.columns).flat());
    }

    console.log("Rows: ", this.rows);
    this.ctx.closePath();
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
    let box1 = [this.rows[0].slice(0, 3), this.rows[1].slice(0, 3), this.rows[2].slice(0, 3)];
    let box2 = [this.rows[3].slice(0, 3), this.rows[4].slice(0, 3), this.rows[5].slice(0, 3)];
    let box3 = [this.rows[6].slice(0, 3), this.rows[7].slice(0, 3), this.rows[8].slice(0, 3)];

    let box4 = [this.rows[0].slice(3, 6), this.rows[1].slice(3, 6), this.rows[2].slice(3, 6)];
    let box5 = [this.rows[3].slice(3, 6), this.rows[4].slice(3, 6), this.rows[5].slice(3, 6)];
    let box6 = [this.rows[6].slice(3, 6), this.rows[7].slice(3, 6), this.rows[8].slice(3, 6)];

    let box7 = [this.rows[0].slice(6, 9), this.rows[1].slice(6, 9), this.rows[2].slice(6, 9)];
    let box8 = [this.rows[3].slice(6, 9), this.rows[4].slice(6, 9), this.rows[5].slice(6, 9)];
    let box9 = [this.rows[6].slice(6, 9), this.rows[7].slice(6, 9), this.rows[8].slice(6, 9)];

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
}

module.exports = Board; 