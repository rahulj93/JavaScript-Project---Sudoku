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

    this.emptyCount = 0; 
    this.currentId = 0; 

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
    this.filled = ['.']
  this.transposeTemplate = this.transposeTemplate.bind(this); 
  this.renderTemplate = this.renderTemplate.bind(this); 
  this.score = 0; 
  this.updateCell = this.updateCell.bind(this); 
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

  updateCell(e) {
    e.preventDefault(); 
    let inputEls = document.getElementsByTagName('input'); 
    let inp = inputEls.namedItem(this.currentId); 

    console.log(this.currentId);
    let x = parseInt(this.currentId[2]); 
    let y = parseInt(this.currentId[7]); 
    let i = y; 
    let j = x - 1;  

    let int = parseInt(e.target.value, 10);
    // console.log(int); 
    // console.log(int === this.rowSolutions[i][j]); 
    if (int === this.rowSolutions[i][j]) {
      this.score +=1; 
      // document.getElementById('score').innerHTML = parseInt(document.getElementById('score').innerHTML) + 1; 
      document.getElementById('score').innerHTML = this.score + '/ ' + this.emptyCount; 
      this.updatedRows[i][j] = parseInt(e.target.value);
      console.log(this.updatedRows);
      console.log(inp); 
      // console.log(inputEls.namedItem(this.currentId));
      inp.style.backgroundColor = document.getElementById(this.currentId).style.backgroundColor; 
      // inputEls.getElementById(this.currentId).style.backgroundColor = 'black';
    } else if (!int) {
      inp.style.backgroundColor = document.getElementById(this.currentId).style.backgroundColor;
    } else {
      this.score -= 2; 
      // document.getElementById('score').innerHTML = parseInt(document.getElementById('score').innerHTML) - 2; 
      document.getElementById('score').innerHTML = this.score + '/ ' + this.emptyCount; 
      inp.style.backgroundColor = 'red'; 
      // inputEls.namedItem(this.currentId).style.backgroundColor = 'red';
    }
    // let strUpdatedRows = JSON.stringify(this.updatedRows);
    // let strSol = JSON.stringify(this.rowSolutions);
    // if (strUpdatedRows === strSol) {
    if (JSON.stringify(this.updatedRows) === JSON.stringify(this.rowSolutions)) {
      // let scored = (parseInt(document.getElementById('score').innerHTML) / this.emptyCount) * 100
      let scored = (this.score / this.emptyCount) * 100; 
      document.getElementById('myCanvas').style.background = 'white';
      document.getElementById('myCanvas').innerHTML = 'GAME OVER!  Final Score: ' + Math.ceil(scored)  + '%'; 
      alert('game over');
    }
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
          // let val = 'no'
          let updatedRows = this.updatedRows;
          let sol = this.rowSolutions;
          let score = this.score; 
          let emptyCount = this.emptyCount; 
          document.getElementById('score').innerHTML = 0; 
          inp.addEventListener('input', ()=> {
            this.currentId = inp.id; 
            inp.className = this.currentId; 
          })
          ele.appendChild(inp);
          inp.onchange = this.updateCell; 
          
          // inp.onchange = function (e) {
          //   e.preventDefault();
          //   let int = parseInt(e.target.value, 10);
          //   if (int === sol[i + 1][j]) {
          //     document.getElementById('score').innerHTML = parseInt(document.getElementById('score').innerHTML) + 1; 
          //     // document.getElementById('score').appendChild(document.createTextNode('/')); 
          //     // document.getElementById('score').appendChild(document.createTextNode(emptyCount));  
          //     inp.style.backgroundColor = document.getElementById(id).style.backgroundColor; 

          //     inp.value = e.target.value;
          //     // this.val = e.target.value; 
          //     // val = e.target.value;

          //     // updatedRows[i + 1][j] = parseInt(val);
          //     updatedRows[i + 1][j] = parseInt(e.target.value);
          //     console.log(updatedRows === sol);
          //   } else if (!int) {
          //     inp.style.backgroundColor = document.getElementById(id).style.backgroundColor; 

          //   } else {
          //     document.getElementById('score').innerHTML = parseInt(document.getElementById('score').innerHTML) - 2; 
          //     // inp.value = '';
          //     inp.style.backgroundColor = 'red'; 
          //   }
          //   let strUpdatedRows = JSON.stringify(updatedRows);
          //   let strSol = JSON.stringify(sol);
          //   if (strUpdatedRows === strSol) {
          //     // alert(`total empty spaces: ${emptyCount}`); 
          //     let scored = (parseInt(document.getElementById('score').innerHTML) / emptyCount) * 100
          //     document.getElementById('myCanvas').style.background = 'white';
          //     document.getElementById('myCanvas').innerHTML = 'GAME OVER!  Final Score: '
          //     document.getElementById('myCanvas').appendChild(document.createTextNode(Math.ceil(scored))); 
          //     document.getElementById('myCanvas').appendChild(document.createTextNode('%')); 
          //     // alert('game over'); 
          //   }
          // }
        } else {
          ele.appendChild(document.createTextNode(num));
          ele.style.alignItems = 'center';
          ele.style.fontWeight = 'bold';
          // ele.style.justifyContent = 'center';
        }
        ele.style.display = 'flex';
        ele.style.left = '50%';
        ele.style.top = '50%';
      };
    }
  }
  
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
        if (i<=3) {
          y = 1; 
          quad += 'top';  
        } else if (i>3 && i<=6) {
          y = 4; 
          quad += 'mid';  
        } else {
          y = 7; 
          quad += 'bottom';  
        }
        if (i%3 === 1) {
          x = 1; 
          quad += 'left';  
        } else if (i%3 === 2) {
          x = 4; 
          quad += 'middle'; 
        } else if (i%3 ===0) {
          x = 7; 
          quad += 'right'; 
        }
        // let diffX = (j%3)-1; 
        x+=(j-1)%3; 
        // x += diffX;
        // x += (j%3); 
        // x+=(j%3); 
        y += Math.ceil(j/3) - 1;
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
    let rows = [[],[],[],[],[],[],[],[],[]]; 
    let cols = [[],[],[],[],[],[],[],[],[]]; 
    let quad = ''; 

    for (let i =1; i<=9; i++) {
      for (let j=1; j<=9; j++) {
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
        if (rows[y-1].includes(num) || cols[x-1].includes(num)) {
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
          inp.onchange = function(e) {
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
    }
  }

}; 

module.exports = Grid; 

document.getElementById('myCanvas').style.width = '54vw'; 
document.getElementById('myCanvas').style.textAlign = 'left'; 


let initialize = document.createElement('button'); 
document.getElementById('myCanvas').appendChild(initialize);
initialize.style.height = '4vh'; 
initialize.style.width = '20vw'; 
initialize.innerHTML = 'Start';
initialize.id = 'startBoard'; 
// initialize.onclick = Sudoku.newSudoku;
// initialize.onclick = testing; 

let g = new Grid(); 