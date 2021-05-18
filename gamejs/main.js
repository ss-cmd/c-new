//scene manager
let mgr;
//video
let vid; 

let font;
var fontfile = "data/Krungthep.otf";
var fontfile2 ='data/Hind-Medium.ttf';
//sound array
let mySounds = [];
let mySound1; 
let mySound2;
let mySound3; 
let mySound4; 
let mySound5;
let mySound6; 
let mySound7;
let mySound8; 
let mySound9; 

function preload() {
  font = loadFont(fontfile);
  font2= loadFont(fontfile2);
  
  mySound1 = loadSound('../02-question.mp3');
  mySound2 = loadSound('../03-systemerror.mp3');
  mySound3 = loadSound('../04-sayyourname.mp3');
  mySound4 = loadSound('../05-louder.mp3');
  mySound5 = loadSound('../06-count.mp3');
  mySound6 = loadSound('../07-singsong.mp3');
  mySound7 = loadSound('../08-brave.mp3');
  mySound8 = loadSound('../09-chat.mp3');
  mySound9 = loadSound('../10-bye.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //background('#faf5ed');
  textFont(font);
  //create sound array
  mySounds = [mySound1, mySound2, mySound3,mySound4, mySound5, mySound6, mySound7, mySound8, mySound9]
 
  //videos
  vid = createVideo('01intro.mp4');
  vid.hide();
  mgr = new SceneManager();
  mgr.showScene(playit);
  //mgr.showScene(louder);
  //test mgr.showScene(playit);
}

// On window resize, update the canvas size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// Render loop that draws shapes with p5
function draw() {
  mgr.draw();
}

function mousePressed() {
  mgr.handleEvent("mousePressed");
}



