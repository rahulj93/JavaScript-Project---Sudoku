class Grid {
  constructor() {
    this.boxes = {
      1: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      2: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      3: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      4: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      5: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      6: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      7: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      8: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      9: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    };
    this.rows = {
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
      7: [],
      8: [],
      9: []
    }
    this.columns = {
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
      7: [],
      8: [],
      9: []
    }

    this.quads = { 'topleft': [], 'topmiddle': [], 'topright': [], 'midleft': [], 'midmiddle': [], 'midright': [], 'bottomleft': [], 'bottommiddle': [], 'bottomright': [] }
    this.quadsArray = ['topleft', 'topmiddle', 'topright', 'midleft', 'midmiddle', 'midright', 'bottomleft', 'bottommiddle', 'bottomright']; 

    this.quadrant = document.getElementById('myCanvas'); 
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
    // this.box.style = {}; 
    // this.cell.style = {}; 
    this.createCartesian = this.createCartesian.bind(this); 
    this.obtainIDs = this.obtainIDs.bind(this);

    this.val = ''; 
    this.obj = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; 

    this.smallBox = this.smallBox.bind(this); 
    this.render = this.render.bind(this); 
this.genNums = this.genNums.bind(this);
    this.filled = ['.']

  }

  createCartesian() {
    // let obj = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; 
    // let quadrant = document.getElementById('myCanvas'); 

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
        cell.className = quad; 
        if (this.quadsArray.indexOf(quad) % 2 === 0) {
          cell.style.backgroundColor = 'white'; 
        } else {
          cell.style.backgroundColor = 'tan'; 
        }  
        // console.log(quad); 
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
      // document.getElementById(obj[i]  obj[j]);
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

  render() {
    let sud = document.createElement('div');
    // sud.appendChild()
    for (let i = 1; i <= 6; i++) {
      this.smallBox();
    }
  }

  genNums() {
    // pick any random x and any random y and place random num from 1 - 9. 
    // don't block rows, columns, boxes. 
    // repeat until board is full. 
    // let str = '0123456789'; 
    // if (this.filled.length === 1) {
    //   for (let i=1; i<=9; i++) {
    //     for (let j=1; j<=9; j++) {
    //       let id = 'x:' + i + ', y:' + j; 
    //       let el = document.getElementById(id); 
    //       el.appendChild(document.createTextNode(str)); 
    //     }
    //   }; 
    // }
    // if (this.filled.length === 82) {
    //   console.log('full board!')
    //   return; 
    // }; 
    // let x = Math.ceil(Math.random()*9); 
    // let y = Math.ceil(Math.random() * 9); 
    // let id = 'x:' + x + ', y:' + y; 
    // let el = document.getElementById(id); 
    // let stri = el.childNodes[0]; 
    // console.log(stri); 

    // let num = Math.ceil(Math.random() * 9); 
    // let bool = true;
    
    // if (this.quads[el.className].includes(num)) {
    //   bool = false; 
    // }

    // if (this.rows[x].includes(num)) {
    //   bool = false; 
    // }

    // if (this.columns[y].includes(num)) {
    //   bool = false; 
    // }

    // if (bool) {
    //   let arr = str.split(''); 
    //   arr[num] = '.'; 
    //   str = arr.join('');  
    //   console.log(str);
    //   // for (let i=1; i<=9; i++) {
    //   //   let id = 'x:' + x + ', y:' + i;
    //   //   let el = document.getElementById(id); 
    //   //   el.removeChild(el.childNodes[0]); 
    //   //   el.appendChild(document.createTextNode(str));
    //   // } 
    //   // for (let i=1; i<=9; i++) {
    //   //   let id = 'x:' + i + ', y:' + y;
    //   //   let el = document.getElementById(id); 
    //   //   el.removeChild(el.childNodes[0]); 
    //   //   el.appendChild(document.createTextNode(str));
    //   // } 
    //   this.quads[el.className].push(num);
    //   this.rows[x].push(num);
    //   this.columns[y].push(num); 
    //   el.removeChild(el.childNodes[0]);
    //   el.appendChild(document.createTextNode(num));
    //   this.filled.push(id); 
    // }
    // // str.split('')[num] = '-'; 
    // // if (el.childNodes[0][num] === '.') {
    // //   this.genNums(); 
    // // } 

    // this.genNums(); 

    // // return; 

    // // console.log(x+',' + y);
    // // console.log(num); 
    // // console.log(str);

    // return; 
    let x = Math.ceil(Math.random()*9); 
    let y = Math.ceil(Math.random() * 9); 
    let id = 'x:' + x + ', y:' + y; 
    console.log(this.filled);
    console.log(this.quads);

    if (this.filled.length === 82) {
      console.log('full board!')
      return; 
    }; 
    let bool = true; 
    let el = document.getElementById(id); 
    let num = Math.ceil(Math.random() * 9)

    if (this.filled.includes(id)) {
      bool = false; 
    }; 
    if (this.quads[el.className].includes(num)) {
      bool = false; 
    }; 
    if (this.rows[x].includes(num)) {
      bool = false; 
    };
    if (this.columns[y].includes(num)) {
      bool = false; 
    }

      if (bool) {
        // let el = document.getElementById(id); 
        // el.appendChild(document.createTextNode(x+', '+y))
        console.log(el.className); 
        // let num = Math.ceil(Math.random() * 9)
        this.quads[el.className].push(num); 
        el.appendChild(document.createTextNode(num))
        this.filled.push(id); 
        console.log(this.filled);
        this.quads[el.className].push(num); 
        this.rows[x].push(num); 
        this.columns[y].push(num); 
        let boxNumber = this.quadsArray.indexOf(el.className) + 1; 
        this.boxes[boxNumber].splice(this.boxes[boxNumber].indexOf(num), 1); 
        console.log(this.boxes)
      }

      console.log(this.quadsArray.indexOf(el.className)+1); 

    // this.genNums(); 
    
  }
}; 

let g = new Grid();
// g.smallBox(); 
// g.render(); 
g.createCartesian();
// g.obtainIDs();
g.genNums(); 

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