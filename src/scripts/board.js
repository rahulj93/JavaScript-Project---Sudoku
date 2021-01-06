class Grid {
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

    this.quadrant = document.getElementById('myCanvas'); 

    this.newGrid = this.newGrid.bind(this); 
    this.smallBox = this.smallBox.bind(this); 
    this.render = this.render.bind(this); 
    this.createCartesian = this.createCartesian.bind(this); 
    this.obtainIDs = this.obtainIDs.bind(this);

    this.obj = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; 

  }

  createCartesian() {
    // let obj = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; 
    // let quadrant = document.getElementById('myCanvas'); 
    Object.assign(this.quadrant.style, {
      height: '54vh',
      width: '54vw',
      display: 'flex',
      flexFlow: 'wrap',
      backgroundColor: 'white',
      justifyContent: 'center',
      // justifyContent: 'space-around',
      color: 'black',
      margin: '70 auto'
    });
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
        flexFlow: 'wrap'
      });
      
      for (let j = 1; j <= 9; j++) {
        if (i%3 === 1) {
          x = 1; 
        } else if (i%3 === 2) {
          x = 4; 
        } else if (i%3 ===0) {
          x = 7; 
        }
        if (i<=3) {
          y = 1; 
        } else if (i>3 && i<=6) {
          y = 4; 
        } else {
          y = 7; 
        }
        // y = Math.ceil(i/3-1)+Math.floor(i/3+1); 
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
        cell.style.border = '.2vw dotted black';
        // cell.id = i + '-' + j;
        let ident = 'x:' + x + ', y:' + y; 
        cell.id = ident; 
        console.log(cell.id); 
        // cell.appendChild(document.createTextNode(x + ',' + y));   
        // cell.appendChild(document.createTextNode(y));   
      }
    }
    // for (let y=1; y<=9; y++) {
    //   for (let x=1; x<=9; x++) {
    //     let box = document.createElement('div');
    //     this.quadrant.appendChild(box);
    //     Object.assign(box.style, {
    //       height: '5.4vh',
    //       width: '5.4vw',
    //       border: '.2vw solid black',
    //       display: 'flex',
    //       flexFlow: 'wrap',
    //       backgroundColor: 'white',
    //     });
    //     // let ident = { 'x': x, 'y': y }; 
    //     let ident = 'x:' + x + ', y:' + y; 
    //     box.id = ident;    
    //     console.log(box.id); 
    //     // box.appendChild(document.createTextNode(box.id));   
    //     console.log(box.id.split('')[2], box.id.split('')[7]); 
    //     // console.log(box.id.split('')[7]); 
    //     console.log(box.id.split('')[7] === '9'); 
    //     console.log(box.id.split('')[7] === this.obj[9]); 
    //     console.log(this.obj.indexOf(box.id.split('')[2])); 
    //     console.log(this.obj.indexOf(box.id.split('')[7])); 
    //   }
    // }    
  }
  
  obtainIDs() {
    // let obj = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; 
    let quads = { 'topleft': [], 'topmiddle': [], 'topright': [], 'midleft': [], 'midmiddle': [], 'midright': [], 'bottomleft': [], 'bottommiddle': [], 'bottomright': []}
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

        // quad = ''; 

        // if (y<=3) {
        //   quad += 'top'; 
        // } else if (y>3 && y<=6) {
        //   quad += 'mid'; 
        // } else if (y>6) {
        //   quad += 'bottom'; 
        // }
        // if (x<=3) {
        //   quad += 'left'; 
        // } else if (x>3 && x<=6) {
        //   quad += 'middle';
        // } else if (x>6) {
        //   quad += 'right'; 
        // }
        // Object.keys(quads).forEach((box, i) => {
        //   if (box === quad && i%2 === 0) {
        //     document.getElementById(id).style.backgroundColor = 'white';
        //   } else if (box === quad && i%2 !== 0) {
        //     document.getElementById(id).style.backgroundColor = 'lightgray';
        //   }
        // })
        if (x <=3 && y<=3) {
          quad = 'topleft'; 
          document.getElementById(id).style.backgroundColor = 'white';
          // quads['topleft'].push([x,y]); 
        } else if (x>3 && x<=6 && y<=3) {
          quad = 'topmiddle'; 
          // document.getElementById(id).style.backgroundColor = 'lightgray';
          document.getElementById(id).style.backgroundColor = 'tan';
        } else if (x>6 && y<=3) { 
          quad = 'topright'; 
          document.getElementById(id).style.backgroundColor = 'white';
        } else if (x <=3 && y>3 && y<=6) { 
          quad = 'midleft'; 
          // document.getElementById(id).style.backgroundColor = 'lightgray';
          document.getElementById(id).style.backgroundColor = 'tan';
        } else if (x>3 && x<=6 && y>3 && y<=6) {
          quad = 'midmiddle'; 
          document.getElementById(id).style.backgroundColor = 'white';
        } else if (x>6 && y>3 && y<=6) { 
          quad = 'midright'; 
          // document.getElementById(id).style.backgroundColor = 'lightgray';
          document.getElementById(id).style.backgroundColor = 'tan';
        } else if (x <=3 && y>6) { 
          quad = 'bottomleft'; 
          document.getElementById(id).style.backgroundColor = 'white';
        } else if (x>3 && x<=6 && y>6) { 
          quad = 'bottommiddle'; 
          // document.getElementById(id).style.backgroundColor = 'lightgray';
          document.getElementById(id).style.backgroundColor = 'tan';
        } else if (x>6 && y>6) {
          quad = 'bottomright'; 
          document.getElementById(id).style.backgroundColor = 'white';
        } 
        // document.getElementById(id).style.backgroundColor = 'white';

        let bool = true;  
        let diceRoll = false;
        let coin = Math.ceil(Math.random() * 6);
        if (coin < 2) {
          diceRoll = true;
        }
        if (rows[y-1].includes(num) || cols[x-1].includes(num)) {
          bool = false; 
        }  

        if (bool && !quads[quad].includes(num)) {
          quads[quad].push(num);
          ele.appendChild(document.createTextNode(num)); 
          rows[y - 1].push(num);
          cols[x - 1].push(num);
        } else {
          rows[y - 1].push('');
          cols[x - 1].push('');

          let inp = document.createElement('input');
          inp.type = 'text'; inp.value = '';
          inp.style.width = '5.4vw';
          inp.style.height = '5.4vh';
          // inp.style.backgroundColor = 'white';
          inp.style.backgroundColor = document.getElementById(id).style.backgroundColor;
          inp.style.border = '.2vw dotted black';
          ele.appendChild(inp);
        };
        console.log(`rows ${x}: ${rows[x - 1]}`);
        console.log(`cols ${y}: ${cols[y - 1]}`);
        console.log(quad);
        console.log(quads);
      }
      // document.getElementById(obj[i]  obj[j]);
    }
  }
  
  render() {
    let sud = document.createElement('div'); 
    // sud.appendChild()
    for(let i=1; i<=6; i++) {
      this.smallBox(); 
    }
  }

  smallBox() {
    let grid = document.getElementById("myCanvas"); 
    Object.assign(grid.style, {
      height: '17.4vh',
      width: '17.4vw',
      display: 'flex',
      flexFlow: 'wrap',
      backgroundColor: 'white',
      justifyContent: 'center',
      color: 'black',
      margin: '70 auto'
    });
    
    let nums = []; 
    for (let i = 1; i<=9; i++) {
      let box = document.createElement('div'); 
      grid.appendChild(box); 
      Object.assign(box.style, {
        height: '5.4vh',
        width: '5.4vw',
        border: '.2vw solid black',
        display: 'flex',
        flexFlow: 'wrap'
      });

      let num = Math.ceil(Math.random() * 9); 
      let prob = Math.floor(Math.random() * 2);

      // console.log(`prob: ${prob}`);
      // if (j%3 ===0) {
      if (!nums.includes(num) && prob) {
          box.appendChild(document.createTextNode(num));
          nums.push(num); 
      // }
      } else {
      //   console.log('eh');
        let inp = document.createElement('input');
        inp.type = 'text'; inp.value = '';
      //   // inp.style = Object.assign(inp.style, cell.style); 
        inp.style.width = '5.4vw';
        inp.style.height = '5.4vh';
        inp.style.backgroundColor = 'white';
        inp.style.border = '.2vw dotted black';
        box.appendChild(inp);
        // cell.appendChild(document.createTextNode(Math.ceil(Math.random()*9)));            
      //   // cell.appendChild(document.createTextNode(cell.id));
      }
    }
  }

  newGrid() {
    let grid = document.getElementById("myCanvas");
    // grid.style.backgroundColor = 'white'; 
    // grid.style.cssText = "display: flex; flexFlow: wrap; width: 54vw; height: 54vh;"
    Object.assign(grid.style, {
      height: '54vh',
      width: '54vw',
      display: 'flex',
      flexFlow: 'wrap',
      backgroundColor: 'white',
      justifyContent: 'center',
      color: 'black',
      margin: '70 auto'
    });

    for (let i = 1; i <= 9; i++) {
      console.log(`i: ${i}`);
      let box = document.createElement('div');
      // box.appendChild(document.createTextNode(i)); 
      grid.appendChild(box);
      Object.assign(box.style, {
        height: '17.4vh',
        width: '17.4vw',
        border: '.2vw solid black',
        display: 'flex',
        flexFlow: 'wrap'
      });
      // box.style.border = ".2vw solid black";
      box.id = i;
      console.log(`id: # ${i}`);

      for (let j = 1; j <= 9; j++) {
        let cell = document.createElement('div');
        // cell.appendChild(document.createTextNode(j));
        box.appendChild(cell);
        cell.style.width = '5.4vw';
        cell.style.height = '5.4vh';
        cell.style.border = '.2vw dotted black';
        cell.id = i + '-' + j;
        let prob = Math.floor(Math.random() * 2);
        console.log(`prob: ${prob}`);
        // if (j%3 ===0) {
        if (prob) {
          cell.appendChild(document.createTextNode(Math.ceil(Math.random() * 9)));
        } else {
          console.log('eh');
          let inp = document.createElement('input');
          inp.type = 'text'; inp.value = '';
          // inp.style = Object.assign(inp.style, cell.style); 
          inp.style.width = '5.4vw';
          inp.style.height = '5.4vh';
          inp.style.backgroundColor = 'white';
          inp.style.border = '.2vw dotted black';
          cell.appendChild(inp);
          // cell.appendChild(document.createTextNode(Math.ceil(Math.random()*9)));            
          // cell.appendChild(document.createTextNode(cell.id));
        }
      }
  }
} }; 

let g = new Grid();
// g.newGrid(); 
// g.smallBox(); 
// g.render(); 
g.createCartesian();
g.obtainIDs();

// function newSudoku() {
  // let grid = document.getElementById("myCanvas");
  // // grid.style.backgroundColor = 'white'; 
  // // grid.style.cssText = "display: flex; flexFlow: wrap; width: 54vw; height: 54vh;"
  // Object.assign(grid.style, {
  //   height: '54vh',
  //   width: '54vw',
  //   display: 'flex',
  //   flexFlow: 'wrap',
  //   backgroundColor: 'white',
  //   justifyContent: 'center',
  //   color: 'black',
  //   margin: '70 auto'
  // });

  // // for (let i = 1; i<=81; i++) {
  // //   let cell = document.createElement('div'); 
  // //   // grid.appendChild(document.createTextNode(i)); 
  // //   cell.appendChild(document.createTextNode(i)); 
  // //   grid.appendChild(cell); 

  // //   cell.style.width = '5.4vw'; 
  // //   cell.style.height = '5.4vh'; 
  // //   if (i%3===0) {
  // //     cell.style.border = '.2vw solid black'; 
  // //     // cell.style.borderRight = '.2vw solid black'; 
  // //     // cell.style.borderBottom = '.2vw solid black'; 
  // //   } else {
  // //     cell.style.border = '.2vw dotted black'; 
  // //   }
  // // }


  // for (let i = 1; i <= 9; i++) {
  //   console.log(`i: ${i}`);
  //   let box = document.createElement('div');
  //   // box.appendChild(document.createTextNode(i)); 
  //   grid.appendChild(box);
  //   Object.assign(box.style, {
  //     height: '17.4vh',
  //     width: '17.4vw',
  //     // border: '.2vw solid black',
  //     border: '.2vw solid black',
  //     display: 'flex',
  //     flexFlow: 'wrap'
  //   });
  //   // box.style.border = ".2vw solid black";
  //   box.id = i;
  //   console.log(`id: # ${i}`);

  //   // box.style.cssText = 'display: flex; flexFlow: wrap';     
  //   // box.style.display = 'flex';
  //   // box.style.flexFlow = 'wrap';


  //   for (let j = 1; j <= 9; j++) {
  //     let cell = document.createElement('div');
  //     // cell.appendChild(document.createTextNode(j));
  //     box.appendChild(cell);
  //     cell.style.width = '5.4vw';
  //     cell.style.height = '5.4vh';
  //     cell.style.border = '.2vw dotted black';
  //     cell.id = i + '-' + j;
  //     let prob = Math.floor(Math.random() * 2);
  //     console.log(`prob: ${prob}`);
  //     // if (j%3 ===0) {
  //     if (prob) {
  //       cell.appendChild(document.createTextNode(Math.ceil(Math.random() * 9)));
  //     } else {
  //       console.log('eh');
  //       let inp = document.createElement('input');
  //       inp.type = 'text'; inp.value = '';
  //       // inp.style = Object.assign(inp.style, cell.style); 
  //       inp.style.width = '5.4vw';
  //       inp.style.height = '5.4vh';
  //       inp.style.backgroundColor = 'white';
  //       inp.style.border = '.2vw dotted black';
  //       cell.appendChild(inp);
  //       // cell.appendChild(document.createTextNode(Math.ceil(Math.random()*9)));            
  //       // cell.appendChild(document.createTextNode(cell.id));
  //     }
  //   }
  // }

  // document.getElementById('6-1').appendChild(document.createTextNode('  ayyy'));
// }

// newSudoku(); 




class Board {
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

    this.canvas = canvas;
    this.ctx = ctx;

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