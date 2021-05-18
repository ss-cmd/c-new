function louder() {
    let mic;
    console.log('i am scene05 louder');
    myRec = new p5.SpeechRec(); // new P5.SpeechRec object

    let lineLength = width;
    fr = 60;
    let lineV = width / fr / 25;
    this.setup = function () {
        //tell use speak louder to engage,24s
        mySound4.play();
        myRec.onResult = showResult;
        let continuous = true;
        let interim = false;
        myRec.start(continuous, interim);
        mic = new p5.AudioIn();
        mic.start();

        //try here
        console.log('i am here1');
        setTimeout(showPlayit, 26000);
    }

    this.draw = function () {
        showText();
        showLine();
        showResult();
        // showResult();    
    }

    function showText() {
        background('#fefefe');
        noStroke();
        fill('#0005A4');
        textSize(20);
        textFont(font2);
        text('Say your name', 100, height / 2);
    }

    function showLine() {
        //move line        
        stroke('#0005A4');
        strokeWeight(4);
        line(width / 2 - lineLength / 2, height / 1.5 - 100, width / 2 + lineLength / 2, height / 1.5 - 100);
        lineLength -= lineV;
        if (lineLength <= 0) {
            lineLength = 0;
        }
    }

    function showResult() {
        if (myRec.resultValue == true) {
            //try here
            background('#fefefe');
            console.log("i am working");
            fill("#0005A4");
            console.log(myRec.resultString);
            textSize(10 + mic.getLevel() * 1000);
            text(myRec.resultString, width / 2, height / 2);
        }
        noStroke();
        fill('#0005A4');
        textSize(20);
        textFont(font2);
        text('Speak louder to weak up the system!', 100, height / 2 + 50);
    }


    function showPlayit() {
        console.log('i am here')
        mgr.showScene(playit);
        console.log('this 05scene ends');
    }
}

