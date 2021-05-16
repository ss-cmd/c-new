function intro() {
    //set the polygons;
    console.log("i am scene01");
    let polygons;
    let polygonsX = [];
    let polygonsY = [];

    this.enter = function () {
        //intro video 30s
        vid.play();
        //set 30000 to finish the video file
        //try 时间
        //setTimeout(showText, 36000);
        setTimeout(showQuestion, 38000);

    }

   

    this.draw = function () {
        //background("#faf5ed");
        //video doesn't work, will fix it
        image(vid, windowWidth / 5, windowHeight / 4);
        vid.size(480, 280);
        if (setTimeout(30000)){
            background('#faf5ed');
            showText();
        }   
    }

    function showText() {
        //for show the text
        
        console.log("i am title");
        //project title
        fill('#0005A4');

        textSize(50);
        noStroke();
        //fill("#ffb0ea");
        textAlign(CENTER, CENTER);
        text("CLOSER", width / 2, height / 2);

        //fill("#ffb0ea");
        noStroke();
        textSize(20);
        text("Low Res IMA", width / 2, height / 2 + 200);
        text("Ivy Shu ", width / 2, height / 2 + 220);

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
        polygon(width / 2, height / 1.5, radius, points, angle);

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