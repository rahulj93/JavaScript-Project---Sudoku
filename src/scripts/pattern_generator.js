const puzzles = require("./puzzles");
const puzzleSolutions = require("./puzzle_solutions");
class Grid {
  constructor() {
    this.templateRows = {
      1: [], 2: [], 3: [],
      4: [], 5: [], 6: [],
      7: [], 8: [], 9: [],
    };
    this.rowSolutions = {
      1: [], 2: [], 3: [],
      4: [], 5: [], 6: [],
      7: [], 8: [], 9: [],
    };
    this.updatedRows = {
      1: [], 2: [], 3: [],
      4: [], 5: [], 6: [],
      7: [], 8: [], 9: [],
    }

    this.gameOver = false; 

    this.emptyCount = 0;

    this.boxes = {};
    for (let i = 1; i <= 9; i++) {
      this.boxes[i] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    }
    // this.boxes = {
    //   1: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    //   2: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    //   3: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    //   4: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    //   5: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    //   6: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    //   7: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    //   8: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    //   9: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    // };
    // this.rows = {}; 
    // for (let i = 1; i <= 9; i++) {
    //   this.rows[i] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    // }

    // this.columns = {}; 
    // for (let i = 1; i <= 9; i++) {
    //   this.columns[i] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    // }

    // this.allBoxes = {}

    // for (let i = 1; i<=81; i++) {
    //   this.allBoxes[i] = [1,2,3,4,5,6,7,8,9]; 
    // }

    this.quads = { 'topleft': [], 'topmiddle': [], 'topright': [], 'midleft': [], 'midmiddle': [], 'midright': [], 'bottomleft': [], 'bottommiddle': [], 'bottomright': [] }
    // this.quadsArray = ['topleft', 'topmiddle', 'topright', 'midleft', 'midmiddle', 'midright', 'bottomleft', 'bottommiddle', 'bottomright']; 
    this.quadsArray = Object.keys(this.quads);
    this.quadrant = document.getElementById('myCanvas');
    Object.assign(this.quadrant.style, {
      height: '54vh',
      width: '54vw',
      display: 'flex',
      flexFlow: 'wrap',
      // backgroundColor: 'white',
      justifyContent: 'center',
      alignContent: 'center',
      // justifyContent: 'space-around',
      color: 'black',
      // margin: '70 auto'
    });
    // this.box.style = {}; 
    // this.cell.style = {}; 
    this.createCartesian = this.createCartesian.bind(this);
    this.obtainIDs = this.obtainIDs.bind(this);

    // this.val = ''; 
    this.obj = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    // this.genNums = this.genNums.bind(this);
    // this.selectNum = this.selectNum.bind(this); 
    this.filled = ['.']
    // this.print = this.print.bind(this); 
    // this.templatePuzzles = this.templatePuzzles.bind(this); 
    this.transposeTemplate = this.transposeTemplate.bind(this);
    this.renderTemplate = this.renderTemplate.bind(this);
    this.score = 0;
  }

  transposeTemplate() {
    let randompuzzle = Math.ceil(Math.random() * 10);

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        this.templateRows[1].push(puzzles.sudokuPuzzles[randompuzzle][i][j]);
        this.rowSolutions[1].push(puzzleSolutions.sudokuPuzzleSolutions[randompuzzle][i][j]);
      }
      for (let j = 3; j < 6; j++) {
        this.templateRows[2].push(puzzles.sudokuPuzzles[randompuzzle][i][j]);
        this.rowSolutions[2].push(puzzleSolutions.sudokuPuzzleSolutions[randompuzzle][i][j]);
      }
      for (let j = 6; j < 9; j++) {
        this.templateRows[3].push(puzzles.sudokuPuzzles[randompuzzle][i][j]);
        this.rowSolutions[3].push(puzzleSolutions.sudokuPuzzleSolutions[randompuzzle][i][j]);
      }
    }
    for (let i = 3; i < 6; i++) {
      for (let j = 0; j < 3; j++) {
        this.templateRows[4].push(puzzles.sudokuPuzzles[randompuzzle][i][j]);
        this.rowSolutions[4].push(puzzleSolutions.sudokuPuzzleSolutions[randompuzzle][i][j]);
      }
      for (let j = 3; j < 6; j++) {
        this.templateRows[5].push(puzzles.sudokuPuzzles[randompuzzle][i][j]);
        this.rowSolutions[5].push(puzzleSolutions.sudokuPuzzleSolutions[randompuzzle][i][j]);
      }
      for (let j = 6; j < 9; j++) {
        this.templateRows[6].push(puzzles.sudokuPuzzles[randompuzzle][i][j]);
        this.rowSolutions[6].push(puzzleSolutions.sudokuPuzzleSolutions[randompuzzle][i][j]);
      }
    }
    for (let i = 6; i < 9; i++) {
      for (let j = 0; j < 3; j++) {
        this.templateRows[7].push(puzzles.sudokuPuzzles[randompuzzle][i][j]);
        this.rowSolutions[7].push(puzzleSolutions.sudokuPuzzleSolutions[randompuzzle][i][j]);
      }
      for (let j = 3; j < 6; j++) {
        this.templateRows[8].push(puzzles.sudokuPuzzles[randompuzzle][i][j]);
        this.rowSolutions[8].push(puzzleSolutions.sudokuPuzzleSolutions[randompuzzle][i][j]);
      }
      for (let j = 6; j < 9; j++) {
        this.templateRows[9].push(puzzles.sudokuPuzzles[randompuzzle][i][j]);
        this.rowSolutions[9].push(puzzleSolutions.sudokuPuzzleSolutions[randompuzzle][i][j]);
      }
    }
    console.log(this.templateRows);
    console.log(this.rowSolutions);
    this.updatedRows = this.templateRows;
    // return;
  }

  renderTemplate() {
    this.transposeTemplate();
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        let x = this.obj[j + 1];
        let y = this.obj[i + 1];
        let ele = document.getElementById('x:' + this.obj[j + 1] + ', y:' + this.obj[i + 1])
        let num = this.templateRows[i + 1][j];

        let id = 'x:' + x + ', y:' + y;
        quad = ele.className;

        if (num === '.') {
          this.emptyCount += 1;
          let inp = document.createElement('input');
          inp.type = 'text'; inp.value = '';
          inp.id = id;
          inp.className = quad;
          inp.style.width = '5.4vw';
          inp.style.height = '5.4vh';
          inp.style.backgroundColor = document.getElementById(id).style.backgroundColor;
          // inp.style.border = '.2vw dotted black';
          let val = 'no'
          let updatedRows = this.updatedRows;
          let sol = this.rowSolutions;
          let score = this.score;
          let emptyCount = this.emptyCount;
          document.getElementById('score').innerHTML = 0;

          ele.appendChild(inp);
          inp.onchange = function (e) {
            e.preventDefault();
            let int = parseInt(e.target.value, 10);
            // console.log(e.toString());
            console.log(sol);
            // console.log(this.rowSolutions); 
            if (int === sol[i + 1][j]) {
              // if (int === this.rowSolutions[i+1][j]) {
              // if (int === 1) {
              // if (e.target.value % 2 === 0) {
              // this.score += 1; 
              document.getElementById('score').innerHTML = parseInt(document.getElementById('score').innerHTML) + 1;
              // document.getElementById('score').appendChild(document.createTextNode('/')); 
              // document.getElementById('score').appendChild(document.createTextNode(emptyCount)); 
              //  appendChild(document.createTextNode(score)); 
              inp.style.backgroundColor = document.getElementById(id).style.backgroundColor;

              inp.value = e.target.value;
              // console.log(this.val); 
              console.log(val);
              // this.val = e.target.value; 
              val = e.target.value;
              // console.log(e.target.value); 
              // console.log(this.val); 
              console.log(val);
              updatedRows[i + 1][j] = parseInt(val);
              console.log(updatedRows === sol);

              console.log(updatedRows);
            } else if (!int) {
              inp.style.backgroundColor = document.getElementById(id).style.backgroundColor;

            } else {
              document.getElementById('score').innerHTML = parseInt(document.getElementById('score').innerHTML) - 2;

              // alert('try again');
              // inp.value = '';
              inp.style.backgroundColor = 'red';
            }
            let strUpdatedRows = JSON.stringify(updatedRows);
            let strSol = JSON.stringify(sol);
            if (strUpdatedRows === strSol) {
              alert(`total empty spaces: ${emptyCount}`);
              let scored = (parseInt(document.getElementById('score').innerHTML) / emptyCount) * 100
              document.getElementById('myCanvas').style.background = 'white';
              document.getElementById('myCanvas').innerHTML = 'GAME OVER!  Final Score: '
              document.getElementById('myCanvas').appendChild(document.createTextNode(Math.ceil(scored)));
              document.getElementById('myCanvas').appendChild(document.createTextNode('%'));
              alert('game over');
              this.gameOver = true; 
            }
          }
        } else {
          ele.appendChild(document.createTextNode(num));
        }
        ele.style.display = 'flex';
        ele.style.left = '50%';
        ele.style.top = '50%';
      };
    }
  }

  // print(x,y) {
  //   let id = 'x:' + x + ', y:' + y; 
  //   let el = document.getElementById(id); 
  //   // let x = Math.ceil(81%9); 
  //   // let y = Math.ceil(81/9); 
  //   // let x = 9; 
  //   // let y = 9; 
  //   let boxNum = (9*(y-1)) + x;  
  //   if (this.allBoxes[boxNum].length === 0) {
  //     return; 
  //   }
  //   let randomNum = Math.floor(Math.random() * this.allBoxes[boxNum].length)
  //   let r1 = this.allBoxes[boxNum].indexOf(randomNum)
  //   console.log(`r1: ${r1}`);

  //   // let idk = this.wtf[boxNum].splice(Math.floor(Math.random()*this.wtf[boxNum].length), 1); 
  //   let spliced = this.allBoxes[boxNum].splice(r1, 1); 
  //   this.allBoxes[boxNum] = spliced;

  //   for (let i = 1; i<=81; i++) {
  //     let r = this.allBoxes[i].indexOf(randomNum);
  //     console.log(`r: ${r}`); 
  //     if (this.allBoxes[i].length > 1 && i !== boxNum && x!==9 && i%9 === x) {
  //       this.allBoxes[i].splice(r, 1); 
  //     } else if (this.allBoxes[i].length > 1 && i !== boxNum && x===9 && i%9 === 0) {
  //       this.allBoxes[i].splice(r, 1); 
  //     }; 
  //   }; 

  //   for (let j=1; j<=81; j++) {
  //     if (this.allBoxes[j].length > 1 && j!==boxNum && y === Math.ceil(j/9)) {
  //       console.log(j);
  //       let r = this.allBoxes[j].indexOf(parseInt(spliced[0]));  
  //       console.log(this.allBoxes[j].indexOf(parseInt(spliced[0]))); 
  //       this.allBoxes[j].splice(r, 1); 

  //     }
  //   }

  //   console.log(this.allBoxes); 
  //   console.log(spliced);
  //   console.log(boxNum); 
  //   let lengths = []; 
  //   Object.keys(this.allBoxes).forEach((k) => {
  //     lengths.push(this.allBoxes[k].length); 
  //   })
  //   console.log(lengths[boxNum-1]); 
  //   let boxNumber = lengths.indexOf(Math.min.apply(Math, lengths)) + 1; 
  //   // console.log(`boxnumber: ${lengths.indexOf(Math.min.apply(Math, lengths))+1}`); 
  //   console.log(`boxnumber: ${boxNumber}`); 

  //   let aX = boxNumber%9; 
  //   if (aX === 0) {
  //     aX = 9; 
  //   }
  //   let aY = Math.ceil(boxNumber/9);   
  //   console.log(`aX: ${aX}`);
  //   console.log(`aY: ${aY}`);

  //   el.appendChild(document.createTextNode(spliced)); 

  //   // this.print(aX,aY); 
  // }

  createCartesian() {
    this.quadrant.style.backgroundColor = 'black';
    let x = 0;
    let y = 0;
    for (let i = 1; i <= 9; i++) {
      let box = document.createElement('div');
      this.quadrant.appendChild(box);
      Object.assign(box.style, {
        height: '17.4vh',
        width: '17.4vw',
        border: '.2vw solid black',
        display: 'flex',
        flexFlow: 'wrap',
        justifyContent: 'center'
      });

      for (let j = 1; j <= 9; j++) {
        let quad = '';
        if (i <= 3) {
          y = 1;
          quad += 'top';
        } else if (i > 3 && i <= 6) {
          y = 4;
          quad += 'mid';
        } else {
          y = 7;
          quad += 'bottom';
        }
        if (i % 3 === 1) {
          x = 1;
          quad += 'left';
        } else if (i % 3 === 2) {
          x = 4;
          quad += 'middle';
        } else if (i % 3 === 0) {
          x = 7;
          quad += 'right';
        }
        // let diffX = (j%3)-1; 
        x += (j - 1) % 3;
        // x += diffX;
        // x += (j%3); 
        // x+=(j%3); 
        y += Math.ceil(j / 3) - 1;
        // if (j <= 3) {
        //   y += 0;
        // } else if (j > 3 && j <= 6) {
        //   y += 1;
        // } else if (j>6) {
        //   y += 2;
        // }
        let cell = document.createElement('div');
        // cell.appendChild(document.createTextNode(j));
        box.appendChild(cell);
        cell.style.width = '5.4vw';
        cell.style.height = '5.4vh';
        // cell.style.border = '.2vw dotted black';
        cell.style.border = '.1vw solid gray';
        // cell.id = i + '-' + j;
        let ident = 'x:' + x + ', y:' + y;
        cell.id = ident;
        console.log(cell.id);
        // cell.appendChild(document.createTextNode(x + ',' + y));   
        // cell.appendChild(document.createTextNode(y));   
        cell.className = quad;
        if (this.quadsArray.indexOf(quad) % 2 === 0) {
          cell.style.backgroundColor = 'white';
        } else {
          cell.style.backgroundColor = 'tan';
          cell.style.backgroundColor = 'white';
        }
        // console.log(quad); 
      }
    }
  }

  obtainIDs() {
    // let obj = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; 
    // let quads = { 'topleft': [], 'topmiddle': [], 'topright': [], 'midleft': [], 'midmiddle': [], 'midright': [], 'bottomleft': [], 'bottommiddle': [], 'bottomright': []}
    let rows = [[], [], [], [], [], [], [], [], []];
    let cols = [[], [], [], [], [], [], [], [], []];
    let quad = '';

    for (let i = 1; i <= 9; i++) {
      for (let j = 1; j <= 9; j++) {
        console.log(this.obj[j], this.obj[i])
        let x = this.obj[j];
        let y = this.obj[i];
        let ele = document.getElementById('x:' + this.obj[j] + ', y:' + this.obj[i])
        // ele.appendChild(document.createTextNode(obj[j] + ',' + obj[i]))
        console.log(`rows: ${this.rows}`);
        let num = Math.ceil(Math.random() * 9);
        console.log(`num: ${num}`);
        let id = 'x:' + x + ', y:' + y;
        quad = ele.className;

        // Object.keys(quads).forEach((box, i) => {
        //   if (box === quad && i%2 === 0) {
        //     document.getElementById(id).style.backgroundColor = 'white';
        //   } else if (box === quad && i%2 !== 0) {
        //     // document.getElementById(id).style.backgroundColor = 'lightgray';
        //     document.getElementById(id).style.backgroundColor = 'tan';
        //   }
        // })

        let bool = true;
        let diceRoll = false;
        let coin = Math.ceil(Math.random() * 6);
        if (coin < 2) {
          diceRoll = true;
        }
        if (rows[y - 1].includes(num) || cols[x - 1].includes(num)) {
          bool = false;
        }

        if (bool && !this.quads[quad].includes(num)) {
          this.quads[quad].push(num);
          ele.appendChild(document.createTextNode(num));
          rows[y - 1].push(num);
          cols[x - 1].push(num);
        } else {
          rows[y - 1].push('');
          cols[x - 1].push('');

          let inp = document.createElement('input');
          inp.type = 'text'; inp.value = '';
          inp.id = id;
          inp.className = quad;
          inp.style.width = '5.4vw';
          inp.style.height = '5.4vh';
          // inp.style.backgroundColor = 'white';
          inp.style.backgroundColor = document.getElementById(id).style.backgroundColor;
          // inp.style.backgroundColor = 'black';
          // inp.style.color = 'green';
          inp.style.border = '.2vw dotted black';
          ele.appendChild(inp);
          let val = 'no'
          let quads = this.quads;
          inp.onchange = function (e) {
            e.preventDefault();
            let int = parseInt(e.target.value, 10);
            // console.log(`quads: ${quads[quad]}`); 
            console.log(`quads: ${quads[inp.className]}`);
            // console.log(`quads includes?: ${quads[quad].includes(e.target.value)}`); 
            // console.log(`quads includes?: ${quads[inp.className].includes(parseInt(e.target.value,10))}`); 
            console.log(`quads includes ${int}?: ${quads[inp.className].includes(int)}`);
            // console.log(`quad: ${quad}`); 
            console.log(`quad: ${inp.className}`);
            // console.log(e.toString());
            if (!quads[inp.className].includes((int))) {
              // if (e.target.value % 2 === 0) {
              inp.value = e.target.value;
              // console.log(this.val); 
              console.log(val);
              // this.val = e.target.value; 
              val = e.target.value;
              // console.log(e.target.value); 
              // console.log(this.val); 
              console.log(val);
            } else {
              alert('try again');
            }
          }
        };
        console.log(`rows ${x}: ${rows[x - 1]}`);
        console.log(`cols ${y}: ${cols[y - 1]}`);
        console.log(quad);
        console.log(this.quads);
      }
      // document.getElementById(obj[i]  obj[j]);
    }
  }

  // selectNum(x,y, boxNumber) {
  //   // let bool = true; 
  //   // let num = Math.ceil(Math.random() * 9)
  //   // let el = document.getElementById(id); 
  //   if (this.boxes[boxNumber].length === 1) {
  //     return this.boxes[boxNumber][0]; 
  //   }
  //   // let boxNumber = this.quadsArray.indexOf(el.className) + 1; 
  //   let num = Math.ceil(Math.random() * (this.boxes[boxNumber].length - 1))
  //   // if (!this.boxes[boxNumber].includes(num)) {
  //   //   bool = false; 
  //   // }

  //   // let num = Math.ceil(Math.random() * 9)
  //   if (!this.columns[x].includes(num) || !this.rows[y].includes(num)) {
  //     this.selectNum(x,y, boxNumber); 
  //   }
  //   return num; 
  // }

  // genNums(idk) {
  // genNums(x,y) {
  //   if (this.columns[x].length < 1) { 
  //     x = Math.ceil(Math.random() * 9); 
  //   };
  //   // if (this.rows[y].length < 1) { 
  //   //   y = Math.ceil(Math.random() * 9); 
  //   // };

  //   // if (x>9) {
  //   //   // x = 1; 
  //   //   x = Math.ceil(Math.random() * 9); 
  //   //   // y += 1;  
  //   // }
  //   if (y>9) {
  //   //   // y = 1; 
  //     y = Math.ceil(Math.random() * 9); 
  //   //   // x += 1; 
  //   }
  //   // console.log(idk); 
  //   // pick any random x and any random y and place random num from 1 - 9. 
  //   // don't block rows, columns, boxes. 
  //   // repeat until board is full. 
  //   // let str = '0123456789'; 
  //   // if (this.filled.length === 1) {
  //   //   for (let i=1; i<=9; i++) {
  //   //     for (let j=1; j<=9; j++) {
  //   //       let id = 'x:' + i + ', y:' + j; 
  //   //       let el = document.getElementById(id); 
  //   //       el.appendChild(document.createTextNode(str)); 
  //   //     }
  //   //   }; 
  //   // }
  //   // if (this.filled.length === 82) {
  //   //   console.log('full board!')
  //   //   return; 
  //   // }; 
  //   // let x = Math.ceil(Math.random()*9); 
  //   // let y = Math.ceil(Math.random() * 9); 
  //   // let id = 'x:' + x + ', y:' + y; 
  //   // let el = document.getElementById(id); 
  //   // let stri = el.childNodes[0]; 
  //   // console.log(stri); 

  //   // let num = Math.ceil(Math.random() * 9); 
  //   // let bool = true;

  //   // if (this.quads[el.className].includes(num)) {
  //   //   bool = false; 
  //   // }

  //   // if (this.rows[x].includes(num)) {
  //   //   bool = false; 
  //   // }

  //   // if (this.columns[y].includes(num)) {
  //   //   bool = false; 
  //   // }

  //   // if (bool) {
  //   //   let arr = str.split(''); 
  //   //   arr[num] = '.'; 
  //   //   str = arr.join('');  
  //   //   console.log(str);
  //   //   // for (let i=1; i<=9; i++) {
  //   //   //   let id = 'x:' + x + ', y:' + i;
  //   //   //   let el = document.getElementById(id); 
  //   //   //   el.removeChild(el.childNodes[0]); 
  //   //   //   el.appendChild(document.createTextNode(str));
  //   //   // } 
  //   //   // for (let i=1; i<=9; i++) {
  //   //   //   let id = 'x:' + i + ', y:' + y;
  //   //   //   let el = document.getElementById(id); 
  //   //   //   el.removeChild(el.childNodes[0]); 
  //   //   //   el.appendChild(document.createTextNode(str));
  //   //   // } 
  //   //   this.quads[el.className].push(num);
  //   //   this.rows[x].push(num);
  //   //   this.columns[y].push(num); 
  //   //   el.removeChild(el.childNodes[0]);
  //   //   el.appendChild(document.createTextNode(num));
  //   //   this.filled.push(id); 
  //   // }
  //   // // str.split('')[num] = '-'; 
  //   // // if (el.childNodes[0][num] === '.') {
  //   // //   this.genNums(); 
  //   // // } 

  //   // this.genNums(); 

  //   // // return; 

  //   // // console.log(x+',' + y);
  //   // // console.log(num); 
  //   // // console.log(str);

  //   // return; 
  //   let rows = Object.values(this.rows); 
  //   // let cols = Object.values(this.columns); 
  //   console.log(rows); 
  //   // let y = 1; 
  //   // for (let i=0; i<8; i++) {
  //   //   if (rows[i+1].length <= rows[i].length) { 
  //   //     y = i+1; 
  //   //   } else {
  //   //     y = i;
  //   //   }
  //   // }
  //   // let x = 0; 
  //   // for (let i=0; i<8; i++) {
  //   //   if (cols[i+1].length <= cols[i].length) { 
  //   //     x = i+1; 
  //   //   } else {
  //   //     x = i;
  //   //   }
  //   // }
  //   // console.log(x); 
  //   // let x = Math.ceil(Math.random()*9); 
  //   // let y = Math.ceil(Math.random() * 9); 
  //   let id = 'x:' + x + ', y:' + y; 
  //   console.log(this.filled);
  //   console.log(this.quads);

  //   if (this.filled.length === 82) {
  //     console.log('full board!')
  //     return; 
  //   }; 
  //   let bool = true; 
  //   let el = document.getElementById(id); 
  //       let boxNumber = this.quadsArray.indexOf(el.className) + 1; 


  //       let num = Math.ceil(Math.random() * 9);

  //       if (this.filled.includes(id)) {
  //         bool = false; 
  //       }; 
  //   if (!this.boxes[boxNumber].includes(num)) {
  //     bool = false; 
  //   }
  //   let arrBox = []; 
  //   // Object.keys(this.boxes).forEach((k) => {
  //   //   arrBox.push(this.boxes[k].length); 
  //   // });
  //   // console.log(`arrBox: ${arrBox}`);  
  //   let arrRow = []; 
  //   // Object.keys(this.rows).forEach((k) => {
  //   //   arrRow.push(this.rows[k].length); 
  //   // });
  //   // console.log(`arrRow: ${arrRow}`);  
  //   let arrCol = []; 
  //   // Object.keys(this.columns).forEach((k) => {
  //   //   arrCol.push(this.columns[k].length); 
  //   // });
  //   // console.log(`arrCol: ${arrCol}`);  

  //   // let smallest = Math.min.apply(Math, arr); 
  //   // if (this.quads[el.className].includes(num)) {
  //   //   bool = false; 
  //   // }; 
  //   if (!this.rows[y].includes(num)) {
  //     bool = false; 
  //   };
  //   if (!this.columns[x].includes(num)) {
  //     bool = false; 
  //   };

  //     if (bool) {
  //       // let num = this.selectNum(x, y, boxNumber);
  //       // let el = document.getElementById(id); 
  //       // el.appendChild(document.createTextNode(x+', '+y))
  //       console.log(el.className); 
  //       // let num = Math.ceil(Math.random() * 9)
  //       // this.quads[el.className].push(num); 
  //       el.appendChild(document.createTextNode(num))
  //       this.filled.push(id); 
  //       console.log(this.filled);
  //       // this.quads[el.className].push(num); 
  //       // this.rows[x].push(num); 
  //       // this.columns[y].push(num); 
  //       this.boxes[boxNumber].splice(this.boxes[boxNumber].indexOf(num), 1); 
  //       this.rows[y].splice(this.rows[y].indexOf(num), 1); 
  //       this.columns[x].splice(this.columns[x].indexOf(num), 1); 
  //       console.log(this.boxes);
  //       console.log(this.rows);
  //       console.log(this.columns);
  //     }

  //     console.log(this.quadsArray.indexOf(el.className)+1); 

  //     // if (x>9) {
  //     //   // x = 1; 
  //     //   x = Math.ceil(Math.random() * 9); 
  //     //   // this.genNums(x, y+1); 
  //     // // }      
  //     // } else if (y>9) {
  //     // //   // y = 1; 
  //     //   y = Math.ceil(Math.random() * 9); 
  //     // //   this.genNums(x+1, y); 
  //     // // } else {
  //     // //   this.genNums(x+1,y+1); 
  //     // }
  //     // for (let i = x; i <=9; i++) {
  //     //   this.genNums(i, y); 
  //     // } 
  //     // for (let j=y; j<=9; j++) {
  //     //   this.genNums(x, j); 
  //     // }
  //   Object.keys(this.boxes).forEach((k) => {
  //     arrBox.push(this.boxes[k].length);
  //   });
  //   console.log(`arrBox: ${arrBox}`);  
  //   Object.keys(this.rows).forEach((k) => {
  //     arrRow.push(this.rows[k].length); 
  //   });
  //   console.log(`arrRow: ${arrRow}`);  
  //   Object.keys(this.columns).forEach((k) => {
  //     arrCol.push(this.columns[k].length); 
  //   });
  //   console.log(`arrCol: ${arrCol}`);  
  //     x = arrCol.indexOf(Math.min.apply(Math,arrCol))+1; 
  //     // y = arrRow.indexOf(Math.min.apply(Math,arrRow))+1; 
  //     console.log(`x: ${x} and y: ${y}`); 
  //   // this.genNums(x+1, y+1); 
  //   this.genNums(x, y+1); 

  // }
};

module.exports = Grid;

// const Sudoku = require('./sudoku'); 
// const newSudoku = require('./sudoku').newSudoku;  
// const testing = require('./sudoku').testing;  
// import newSudoku from './sudoku'; 
// import testing from './sudoku'; 


document.getElementById('myCanvas').style.width = '54vw';
document.getElementById('myCanvas').style.textAlign = 'left';
// document.getElementById('myCanvas').style.display = 'flex'; 
// document.getElementById('myCanvas').appendChild(document.createTextNode('Welcome to Sudoku  '));
// let list = document.createElement('ol'); 
// list.appendChild(document.createElement('li')).innerHTML = 'Fill in rows and columns with numbers 1-9'; 
// list.appendChild(document.createElement('li')).innerHTML = 'Fill in 3x3 boxes with numbers 1-9'; 
// document.getElementById('myCanvas').appendChild(list);

let initialize = document.createElement('button');
document.getElementById('myCanvas').appendChild(initialize);
initialize.style.height = '4vh';
initialize.style.width = '20vw';
initialize.innerHTML = 'Start';
initialize.id = 'startBoard';
// initialize.onclick = Sudoku.newSudoku;
// initialize.onclick = testing; 

let g = new Grid();
// g.createCartesian();
// g.templatePuzzles(); 
// return; 
// g.obtainIDs();
let x = Math.ceil(Math.random() * 9);
let y = Math.ceil(Math.random() * 9);
// console.log(puzzles.sudokuPuzzles[1]);
// g.genNums(x,y); 
// g.print(1,2); 
// g.print(1,3); 
// g.print(9,9); 
// for (let i=1; i<=9; i++) {
//     g.print(1,i); 
//     // g.print(9,i); 
//   }
// for (let i=1; i<=9; i++) {
//     g.print(9,i); 
//     // g.print(9,i); 
//   }
  // for (let i=2; i<=9; i++) {
    //   g.print(i,1); 
    // }
// for (let i=1; i<=9; i++) {
//   for (let j=1; j<=9; j++) {
//     g.print(i,j); 
//   }
// }
// for (let i=1;i<=9; i++) {
//   for (let j=1;j<=9; j++) {
//     g.print(i,j); 
//   }
// }