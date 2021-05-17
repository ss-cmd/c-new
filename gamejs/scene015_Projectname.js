function Projectname() {
    //set the polygons;
    console.log("i am scene01");
    let lineLength = width;
    fr = 60;
    let lineV = width / fr / 12;
    //let polygons;

    this.enter = function () {
        setTimeout(showText, 5000);
        setTimeout(showQuestion, 10000);     
    }

    this.draw = function () {
        showLine();
        showText();
    }

    function showLine() {
        //move line
        //background("#faf5ed");
        background('#FEFEFE');
        console.log('line');
        stroke('#0005A4');
        strokeWeight(5);
        line(width / 2 - lineLength / 2, height / 1.5-50 , width / 2 + lineLength / 2, height / 1.5-50 );
        lineLength -= lineV;
        if (lineLength <= 0) {
            lineLength = 0;
        }
        showText();
    }

    function showText() {
        //for show the text

        console.log("i am title");
        //project title
        fill('#0005A4');
        textFont(font);

        textSize(50);
        noStroke();
        //fill("#ffb0ea");
        textAlign(CENTER, CENTER);
        text("CLOSER", width / 2, height / 2-100);

        //fill("#ffb0ea");
        noStroke();
        textSize(20);
        textFont(font2)
        ;
        text("Low Res IMA", width / 2, height / 2+ 160);
        text("Ivy Shu ", width / 2, height / 2 + 200);
        text("Please allow the access to microphone and camera on your browser", width / 2,height /2+240);
        const dim = Math.min(width, height);
        const time = millis() / 1000;
        strokeWeight(dim * 0.005);

        // Get a value that ping-pongs from 0 ... 1
        const pingPong = sin(time * 0.75 - PI / 2) * 0.5 + 0.5;

        // Get a number of points, using pow() to skew to one end
        const points = lerp(2, 100, pow(pingPong, 2.5));

        // Size of shape
        const radius = dim / 10;

        // Draw shape with an angle offset
        const angle = pingPong * PI * 2;
        polygon(width / 2, height / 1.5-50, radius, points, angle);

    }

    function polygon(x, y, radius, sides = 3, angle = 0) {
        beginShape();
        console.log("i am drawing polygon");
        for (let j = 0; j < 2; j++) {
            for (let i = 0; i < sides; i++) {
                const a = angle + TWO_PI * (i / sides);
                let sx = x + cos(a) * radius;
                let sy = y + sin(a) * radius;
                vertex(sx, sy);

            }
            endShape(CLOSE);
        }
    }


    function showQuestion() {
        vid.stop();
        mgr.showScene(question);
        console.log('01 scene ends');
    }
}