function game() {
    console.log('i am start')
    //sound wave
    let f2 = 20;
    
    this.enter = function () {
        //32s
        mySound3.play();
        setTimeout(showLouder, 35000);

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
        let spectrum = fft.analyze();
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

    function showLouder() {
        mySound3.stop();
        mgr.showScene(louder);
        console.log('this scene ends');
    }

}