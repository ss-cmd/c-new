function question() {
    console.log('i am scene02 question')
    //sound wave
    let f1 = 20;

    this.enter = function () {
        //　ask user question,36s
        mySound1.play();
        //want to resize the canvas
        //createCanvas(200,300);
        fft = new p5.FFT();
        frameRate(60);
        amplitude = new p5.Amplitude();

        // setTimeout(showText, 30000);
        setTimeout(showtoCamera, 38000);
    }

    this.draw = function () {
        //background('#faf5ed');
        background('#FEFEFE');
        voiceWave();
        showText();
    }

    function voiceWave() {
        //this.draw.voiceWave=function(){
        spectrum = fft.analyze();
        noStroke();
        //fill(174,31,35);
        let level = amplitude.getLevel();
        let peak = map(level, 0, 1, 0, height); // ''peak'' is actually not an accurate name, because it determines the number of waves (frequency) and not the height of them.
        //console.log('voice');
        translate(0, height / 2);

        f1 = peak * 0.5;
        for (let i = 0; i < width; i++) {
            strokeWeight(5);
            stroke('#0005A4');
            line(i, 60 * sin((f1 * radians(frameCount + i)) / 5),
                i - 1, 60 * sin((f1 * radians(frameCount + i - 1)) / 5));
        }
    }

     function showText(){
         //try here
        console.log("miss the text")
        fill('#0005A4');
        //fill("#ffb0ea");
        textSize(50);
        noStroke();
        //fill("#ffb0ea");
        textAlign(CENTER, CENTER);
        text("I care about your feeling,you're great so far", width / 2, height-100); 
        console.log("miss the text2")
        text("Be present，be intuitive ", width / 2, height-80); 
     }

    function showtoCamera() {
        mySound1.stop();
        mgr.showScene(toCamera);
        console.log('scene02 ends');
    }

}