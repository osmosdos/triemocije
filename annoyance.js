let osc, playing, fre, ampl;
  let x = 0;
  let y = 0;
  let x1 = 0;
  let y1 = 0;

function setup() {
  let cnv = createCanvas(innerWidth,innerHeight);
  
  
  noStroke();
 // cnv.mousePressed(playOscillator); 
 
osc = new p5.Oscillator('sine');
   playOscillator();
}

function draw() {
 
  fre = constrain(map(mouseX, 0, width, 100, 200), 100, 200);
  ampl = constrain(map(mouseY, height, 0, 0.1, 0.5), 0, 0.5);

  if (playing) {
    // smooth the transitions by 0.1 seconds
    osc.freq(fre, 0.1);
    osc.amp(ampl, 0.1);
    
  }
  


        
  background(232, 212, 100);
  x += (mouseX - x) * 0.1;
  y += (mouseY - y) * 0.1;
  fill(230, 245, 66);
  ellipse(x, y, 30, 30);
  
  x1 += (mouseX - x1) * 0.06;
  y1 += (mouseY - y1) * 0.06;
  fill(230);
  ellipse(x1, y1, 10, 10);
}


function playOscillator() {
  // starting an oscillator on a user gesture will enable audio
  // in browsers that have a strict autoplay policy.
  // See also: userStartAudio();
  osc.start();
  playing = true;
}

function mouseReleased() {
  // ramp amplitude to 0 over 0.5 seconds
  osc.amp(0, 0.5);
  playing = false;
}

