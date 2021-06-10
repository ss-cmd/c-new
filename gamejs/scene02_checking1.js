function checkdistance1() {
    let lineW = width;
    let lineH = height;
    fr = 10;
    let lineGo1 = (width / fr / 12) * 6;
    let lineGo2 = (height / fr / 12) * 6;

    let instructText = ['mood checking', 'Look at the screen.', 'Stare at the blinking rect', 'Hold on for 5 seconds.', '5', '4', '3', '2', '1','Done', 'Go to the next position'];
    let instructNum = 0;

    let intructInt = setInterval(switchInstruct, 2000);
    setTimeout(showtoQuestion, 28000);

    let d;
    let video;
    let poseNet;
    let poses = [];
    let x1, y1;
    let x2, y2;
    //let d;
    let cx;
    let cy;

    let w = 0, h = 0;

    this.enter = function () {
        imageMode(CENTER);
        createCanvas(windowWidth, windowHeight);
        video = createCapture(VIDEO);
        video.size(windowWidth, windowHeight);
        // Create a new poseNet method with a single detection
        poseNet = ml5.poseNet(video, modelReady);
        poseNet.on("pose", function (results) {
            poses = results;
        });
        video.hide();
    }

    function modelReady() {
        select("#status").html("Model Loaded");
    }

    this.draw = function () {
        
        background(255);
        //console.log('check');
        //image(video, 0, 0, windowWidth, windowHeight);
        // nofill();

        //4 lines and rect
        strokeWeight(3);
        line(width / 2 - lineW / 2, height / 2 + 50, width / 2 + lineW / 2, height / 2 + 50);
        line(width / 2 - lineW / 2, height / 2 - 50, width / 2 + lineW / 2, height / 2 - 50);
        line(width / 2 - 200, height / 2 + lineH / 2, width / 2 - 200, height / 2 - lineH / 2);
        line(width / 2 + 200, height / 2 - lineH / 2, width / 2 + 200, height / 2 + lineH / 2);
        push();
        rect(width / 2 - 200, height / 2 - 50, 400, 100);
        pop();

        push();
        strokeWeight(1);
        textFont(font3);
        textSize(25);
        textAlign(CENTER, CENTER);
        text(instructText[instructNum], width / 2, height / 2);
        pop();

        lineW -= lineGo1;
        lineH -= lineGo2;
        if (lineW <= 0) {
            lineW = 0;
        }
        if (lineH <= 0) {
            lineH = 0;
        }
        if (poses) {
            drawKeypoints();
        }

    }

    function drawKeypoints() {
        for (let i = 0; i < poses.length; i++) {
            // For each pose detected, loop through all the keypoints
            let pose = poses[i].pose;
            for (let j = 0; j < pose.keypoints.length; j++) {
                // A keypoint is an object describing a body part (like rightArm or leftShoulder)
                let keypoint = pose.keypoints[1];
                let keypoint1 = pose.keypoints[2];
                if (keypoint.score > 0.2) {
                    //stroke('#ffb0ea');
                    stroke('black');

                    //noStroke();
                    x1 = keypoint.position.x;
                    y1 = keypoint.position.y;
                    x2 = keypoint1.position.x;
                    y2 = keypoint1.position.y;
                    cx = (x1 + x2) / 2;
                    cy = (y1 + y2) / 2;
                    d = dist(x1, y1, x2, y2);
                    //tbd shape
                    // rect(cx, cy, d, d / 3);
                    //console.log(d);
                }

            }
        }
    }

    function switchInstruct() {
        instructNum++;
        if (instructNum > 9) {
            instructNum = 9;
            showQuestion();
        }
    }

    function showtoQuestion() {
        console.log('end');
        clearInterval(intructInt);
        if (width / 2 + 200>cx > width / 2 - 200 ||  height / 2 - 50<cy < height / 2 + 50) {
            mgr.showScene(question);
            console.log('end2');
        }
    }
}