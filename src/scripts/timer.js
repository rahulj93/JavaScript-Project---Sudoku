class Timer {
  constructor() {
    this.startTime = new Date(); 
    this.timer = document.getElementById('time'); 
    this.start = this.start.bind(this); 
  }; 

  start() {
    let d = new Date(); 
    this.timer.innerHTML = 'Time: '; 
    let elapsedTime = Math.round((d - this.startTime) / 1000);
    if (elapsedTime % 60 < 10) {
      this.timer.appendChild(document.createTextNode(Math.floor(elapsedTime / 60) + ':0' + (elapsedTime % 60)));
    } else {
      this.timer.appendChild(document.createTextNode(Math.floor(elapsedTime / 60) + ':' + (elapsedTime % 60)));
    }
    // t = setTimeout(function () { myFunc(time, x) }, 1000);
  }; 

  stop() {

  }
}; 


module.exports = Timer; 

// let ti = new Timer(); 
// let begin = setInterval(function() {ti.start(), 1000}); 
// begin; 