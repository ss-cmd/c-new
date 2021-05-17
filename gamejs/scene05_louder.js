function louder() {
    console.log('i am scene05 louder');
    var myRec = new p5.SpeechRec(); // new P5.SpeechRec object
    let mic;
    let lineLength = width;
    fr = 60;
    let lineV = width / fr / 12;
    this.setup = function () {
        //tell use speak louder to engage,24s
        mySound4.play();
        myRec.onResult = showResult;
        let continuous = true;
        let interim = false;
        myRec.start(continuous, interim);
        mic = new p5.AudioIn();
        mic.start();
        //23s + 10s speak louder
        console.log('show here should')
        setTimeout(showResult, 10000);
        setTimeout(showPlayit, 30000);
    }

    this.draw = function () {
        //showResult();
        //ShowText();
        showText();
    }

  
    function showResult() {
        if (myRec.resultValue == true) {
            //try here
            console.log('show here should2')
            background('black');
            fill("#ffb0ea");
            console.log('try here');
            text(myRec.resultString, width / 2, height / 2);
            console.log('is it working?');
            console.log(myRec.resultString);
            textSize(10 + mic.getLevel() * 1000);
        }
        showLine(); 
        
    }

    function showLine() {
        //move line
        onsole.log('show here should')
        background(192, 255, 192);
        console.log('line');
        stroke('#0005A4');
        strokeWeight(4);
        line(width / 2 - lineLength / 2, height / 1.5 - 50, width / 2 + lineLength / 2, height / 1.5 - 50);
        lineLength -= lineV;
        if (lineLength <= 0) {
            lineLength = 0;
        }
    }

    function showText() {
        noStroke();
        fill('#0005A4');
        textSize(30);
        textFont(font2);
        text('Say you name', 100, height / 2);
    }
    
    function showPlayit() {
        mySound4.stop();
        mgr.showScene(playit);
        console.log('this 05scene ends');
    }
}

