//scene manager
let mgr;
//video
let vid;

let font;
var fontfile = "data/Krungthep.otf";
var fontfile2 = 'data/Hind-Medium.ttf';
var fontfile3 = 'data/mono.otf';

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
let mySound10;
let mySound11;

//image
let img;



function preload() {
  font = loadFont(fontfile);
  font2 = loadFont(fontfile2);
  font3 = loadFont(fontfile3);
  // mySound0 = loadSound('../00-redline.mp3');
  mySound1 = loadSound('../02-question.mp3');
  mySound2 = loadSound('../03-systemerror.mp3');
  mySound3 = loadSound('../04-sayyourname.mp3');
  mySound4 = loadSound('../05-louder.mp3');
  mySound5 = loadSound('../06-count.mp3');
  mySound6 = loadSound('../07-singsong.mp3');
  mySound7 = loadSound('../08-brave.mp3');
  mySound8 = loadSound('../09-chat.mp3');
  mySound9 = loadSound('../10-bye.mp3');
  mySound10  = loadSound('../citywalk.mp3')
  mySound11 = loadSound('../typing.mp3')
  //iamge
  img = loadImage('img/bg.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //background('#faf5ed');
  textFont(font);
  //create sound array
  mySounds = [mySound1, mySound2, mySound3, mySound4, mySound5, mySound6, mySound7, mySound8, mySound9,mySound10,mySound11]
  
  //videos
  vid = createVideo('01intro.mp4');
  vid.hide();
  mgr = new SceneManager();
  mgr.showScene(intro);
  // mgr.showScene(begin);
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

//text format
function sText() {
  textAlign(CENTER, TOP);
  fill(255);
  noStroke();
  textSize(30);
  textLeading(40);
  textFont(font);
}

function bText() {
  textAlign(CENTER, TOP);
  fill(255);
  noStroke();
  textSize(70);
  textLeading(80);
  textFont(font);
}

function sTitle() {
  textAlign(LEFT, TOP);
  fill(255);
  noStroke();
  textSize(18);
  textLeading(24);
  textFont(font);
}

function mTitle() {
  textAlign(CENTER, TOP);
  //fill(255);
  noStroke();
  textSize(48);
  textLeading(65);
  textFont(font3);

}

function bTitle() {
  textAlign(CENTER, TOP);
  fill(255);
  noStroke();
  textSize(60);
  textLeading(74);
  textFont(font3);

}

function rText() {
  textAlign(LEFT, TOP);
  fill(153, 153, 153);
  noStroke();
  textFont(font3);
  textSize(18);
  textLeading(24);

}

function xsText() {
  textAlign(LEFT, TOP);
  fill(153, 153, 153);
  noStroke();
  textFont(font3);
  textSize(18);
  textLeading(24);
}

function h1Text() {
  textAlign(CENTER, TOP);
  fill(255);
  noStroke();
  textFont(font3);
  textSize(100);
  textLeading(100);
}

function numText() {
  textAlign(LEFT, TOP);
  fill(255);
  noStroke();
  textFont(font3);
  textSize(54);
  textLeading(60);
}


// function mousePressed() {
//   mgr.handleEvent("mousePressed");
// }




