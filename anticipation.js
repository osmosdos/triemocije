  let synth, soundLoop;
  let notePattern = [56,57];

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

  userStartAudio();
  soundLoop.start();
  
  
        
  background(194, 206, 209);
  x += (mouseX - x-50) * 0.002;
  y += (mouseY - y+50) * 0.002;
  fill(255, 98, 0);
  
  ellipse(x, y, 30, 30);
  
}

function onSoundLoop(timeFromNow) {
  let noteIndex = (soundLoop.iterations - 1) % notePattern.length;
  let note = midiToFreq(notePattern[noteIndex]);
  synth.play(note, 0.5, timeFromNow);
  background(noteIndex * 360 / notePattern.length, 50, 500);
}


