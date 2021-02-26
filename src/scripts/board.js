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
    this.score = 0; 
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

    // this.val = ''; 
    this.obj = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; 
    this.filled = ['.']
    this.transposeTemplate = this.transposeTemplate.bind(this); 
    this.renderTemplate = this.renderTemplate.bind(this); 
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

    // console.log(this.currentId);
    let x = parseInt(this.currentId[2]); 
    let y = parseInt(this.currentId[7]); 
    let i = y; 
    let j = x - 1;  

    let int = parseInt(e.target.value, 10);
    // console.log(int); 
    // console.log(int === this.rowSolutions[i][j]); 
    if (int === this.rowSolutions[i][j]) {
      // inp.value = e.target.value;
      this.score +=1; 
      // document.getElementById('score').innerHTML = parseInt(document.getElementById('score').innerHTML) + 1; 
      document.getElementById('score').innerHTML = this.score + '/ ' + this.emptyCount; 
      this.updatedRows[i][j] = parseInt(e.target.value);
      // console.log(this.updatedRows);
      // console.log(inp); 
      // console.log(inputEls.namedItem(this.currentId));
      inp.style.backgroundColor = document.getElementById(this.currentId).style.backgroundColor; 
    } else if (!int) {
      inp.style.backgroundColor = document.getElementById(this.currentId).style.backgroundColor;
    } else {
      this.score -= 2; 
      // inp.value = ''; 
      // document.getElementById('score').innerHTML = parseInt(document.getElementById('score').innerHTML) - 2; 
      document.getElementById('score').innerHTML = this.score + '/ ' + this.emptyCount; 
      inp.style.backgroundColor = 'red'; 
      // inputEls.namedItem(this.currentId).style.backgroundColor = 'red';
    }
    // let strUpdatedRows = JSON.stringify(this.updatedRows);
    // let strSol = JSON.stringify(this.rowSolutions);
    // if (strUpdatedRows === strSol) {
    if (JSON.stringify(this.updatedRows) === JSON.stringify(this.rowSolutions)) {
      // alert(`total empty spaces: ${emptyCount}`); 
      // let scored = (parseInt(document.getElementById('score').innerHTML) / this.emptyCount) * 100
      let scored = (this.score / this.emptyCount) * 100; 
      let totalTime = document.getElementById('time').innerHTML;
      document.getElementById('myCanvas').style.background = 'white';
      document.getElementById('myCanvas').innerHTML = 'GAME OVER!' + '<br />' + '<br />' + 'Final Score: ' + Math.ceil(scored) + ' %' + '<br />' + '<br />' + 'Total ' + totalTime; 
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
          document.getElementById('score').innerHTML = 0; 
          inp.addEventListener('input', ()=> {
            this.currentId = inp.id; 
            inp.className = this.currentId; 
          })
          ele.appendChild(inp);
          inp.onchange = this.updateCell; 
          
          // inp.onchange = function (e) {
          //   e.preventDefault();
          //   let int = parseInt(e.target.value, 10)
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
        // let quad = ''; 
        if (i<=3)y = 1; 
        else if (i>3 && i<=6) y = 4; 
        else y = 7; 
  
        if (i%3 === 1) x = 1; 
        else if (i%3 === 2) x = 4;  
        else if (i%3 ===0) x = 7; 
      
        // if (i<=3) {
        //   y = 1; 
        //   quad += 'top';  
        // } else if (i>3 && i<=6) {
        //   y = 4; 
        //   quad += 'mid';  
        // } else {
        //   y = 7; 
        //   quad += 'bottom';  
        // }
        // if (i%3 === 1) {
        //   x = 1; 
        //   quad += 'left';  
        // } else if (i%3 === 2) {
        //   x = 4; 
        //   quad += 'middle'; 
        // } else if (i%3 ===0) {
        //   x = 7; 
        //   quad += 'right'; 
        // }
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
        // console.log(cell.id); 
        cell.style.backgroundColor = 'white'; 

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