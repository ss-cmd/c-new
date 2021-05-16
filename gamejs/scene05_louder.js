function louder() {
    console.log('i am scene05 louder');

    var myRec = new p5.SpeechRec(); // new P5.SpeechRec object
    let mic;
    this.setup = function () {
        //background(192, 255, 192);
        //tell use speak louder to engage,24s
        mySound4.play();
        myRec.onResult = showResult;
        let continuous = true;
        let interim = false;
        myRec.start(continuous, interim);
        mic = new p5.AudioIn();
        mic.start();
        //12s speak louder
        setTimeout(showResult,13000);
        //23s + 10s speak louder
        setTimeout(showPlayit,33000);
    }
    this.draw = function () {
        showResult(); 
    }

    function showResult() {
        if (myRec.resultValue == true) {
            background(192, 255, 192);
            fill("#ffb0ea");
            text(myRec.resultString, width / 2, height / 2);
            //console.log('is it working?');
            console.log(myRec.resultString);
            textSize(10 + mic.getLevel() * 1000);
          }
    }

    function showPlayit() {
        mySound4.stop();
        mgr.showScene(playit);
        console.log('this 05scene ends');
    }
}

