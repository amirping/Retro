setTimeout(function(){
    const screen = document.getElementById("screen");
    const grenny = document.getElementById("greeny");
    grenny.classList.add('on')
    screen.classList.add('on');
    const tabWords = ["it's","Art","Weirdo","Crazy","Freiknes","Deep","Lovnes"];
    const placeTxt = document.getElementById("gk");
    let indec = 0;
    setInterval(function(){
        if (indec>=(tabWords.length-1)) {
            indec =0;
        }
        placeTxt.innerText = tabWords[indec]
        indec++
    },800)
    
},6000)
function preload() {
    mySound = loadSound('./assets/s2.mp3');
  }
function setup() {
    var canvas = createCanvas(windowWidth, 100);
    // Move the canvas so it’s inside our <div id="sketch-holder">.
    canvas.parent('pl');
    //background(0);
    fft = new p5.FFT(0.8,512);
    setTimeout(()=>{
        mySound.setVolume(1);
        mySound.play();
        mySound.loop();
    },6000)
    
}

function draw() {
  clear();
  var waveform = fft.waveform();
  noFill();
  beginShape();
  stroke(255,0,0); // waveform is red
  strokeWeight(3);
  for (var i = 0; i< waveform.length; i++){
    var x = map(i, 0, waveform.length, 0, windowWidth);
    var y = map( waveform[i], -1, 1, 0, 100);
    // if(y == 1 || y == -1 ){
    //     stroke(0,255,0);
    // }
    vertex(x,y);
  }
  endShape();
}
function mouseMoved() {
    var panning = map(mouseX, 0., width,-1.0, 1.0);
    mySound.pan(panning);
  }
