function question() {
    console.log('i am scene02 question')
    //sound wave
    let f1 = 20;

    this.enter = function () {
        //　ask user question,36s
        mySound1.play();
        setTimeout(showtoCamera, 38000);
        //want to resize the canvas
        //createCanvas(200,300);
        //setTimeout(showSayname, 38000);
        //sound wave
        fft = new p5.FFT();
        frameRate(60);
        amplitude = new p5.Amplitude();
    }

    this.draw = function () {
        background('#faf5ed');
        voiceWave();         
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

   
    function showtoCamera() {
        mySound1.stop();
        mgr.showScene(toCamera);
        console.log('scene02 ends');
    }

}