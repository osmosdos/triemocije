  let synth, soundLoop;
  let notePattern = [15];

  let x = 0;
  let y = 0;
  let x1 = 0;
  let y1 = 0;
  let r;

function setup() {
  createCanvas(innerWidth,innerHeight);
  
  noStroke();
  
  let intervalInSeconds = 2;
   soundLoop = new p5.SoundLoop(onSoundLoop, intervalInSeconds);

   synth = new p5.MonoSynth();
  
}

function draw() {

  r=100+frameCount/1.2;
  
   userStartAudio();
  soundLoop.start();
  
        
  background(40, 46, 56);
  x += (mouseX - x) * 0.001;
  y += (mouseY - y) * 0.001;
  fill(25, 67, 130);
  
  ellipse(x, y, r, r);
  
}


function onSoundLoop(timeFromNow) {
  let noteIndex = (soundLoop.iterations - 1) % notePattern.length;
  let note = midiToFreq(notePattern[noteIndex]);
  synth.play(note, 1000, timeFromNow);
  background(noteIndex * 360 / notePattern.length, 50, 500);
}



