function playit() {
    console.log("i am scene06-playit");
    let video;
    let poseNet;
    let poses = [];
    let x1, y1;
    let x2, y2;
    let d;
    let faceapi;
    let detections = [];

    this.enter = function () {
        // ml5 Face Detection Model
        createCanvas(windowWidth, windowHeight);
        video = createCapture(VIDEO);
        video.size(windowWidth, windowHeight);
        // Create a new poseNet method with a single detection
        poseNet = ml5.poseNet(video, modelReady);
        poseNet.on("pose", function (results) {
            poses = results;
        });
        // Only need landmarks for this example
        let faceOptions = {
            withLandmarks: true,
            withExpressions: false,
            withDescriptors: false,
        };
        faceapi = ml5.faceApi(video, faceOptions, faceReady);
        video.hide();
    }


    function modelReady() {
        select("#status").html("Model Loaded");
    }

    // Start detecting faces
    function faceReady() {
        faceapi.detect(gotFaces);
    }

    // Got faces
    function gotFaces(error, result) {
        if (error) {
            console.log(error);
            return;
        }
        detections = result;
        faceapi.detect(gotFaces);
    }


    this.draw = function () {
        image(video, 0, 0, windowWidth, windowHeight);
        background("#faf5ed");
        //if pose loaded, run thouse functions
        if (poses) {
            // console.log("123");
            drawKeypoints();
            checkSound();
            let checked = checkSound();
            console.log(checked);
        }
        showText();
    }

    function showText(){
        console.log('i am intro text');
        noStroke();
        fill('#0005A4');
        textSize(20);
        textFont(font2);
        textAlign(LEFT,LEFT);
        text('This is your avatar.', 100, height / 2);
        text('The system is detecting the distance between you and screen.', 100, height / 2 + 40);
        text("Feel free to play with the distance.", 100, height / 2 + 80);
    }

    function checkSound() {
        isPlaying = false;
        for (let i = 0; i < mySounds.length; i++) {
            if (mySounds[i].isPlaying()) return true;
        }
    }

    // A function to draw ellipses over the detected keypoints
    function drawKeypoints() {
        console.log("i am draw")
        // Loop through all the poses detected
        for (let i = 0; i < poses.length; i++) {
            // For each pose detected, loop through all the keypoints
            let pose = poses[i].pose;
            for (let j = 0; j < pose.keypoints.length; j++) {
                // A keypoint is an object describing a body part (like rightArm or leftShoulder)
                let keypoint = pose.keypoints[1];
                let keypoint1 = pose.keypoints[2];
                if (keypoint.score > 0.2) {
                    fill('#0005A4');
                    noStroke();
                    let x1 = keypoint.position.x;
                    let y1 = keypoint.position.y;
                    let x2 = keypoint1.position.x;
                    let y2 = keypoint1.position.y;
                    ellipse(x1, y1, 10, 10);
                    ellipse(x2, y2, 10, 10);
                    d = dist(x1, y1, x2, y2);
                    console.log(d);
                }

                if (detections.length > 0) {
                     points = detections[0].landmarks.positions;
                    // beginShape(triangleS);
                    beginShape(TRIANGLES);
                    for (i = 0; i < points.length; i++) {
                        stroke('#0005A4');
                        strokeWeight(2);
                        x = points[i]._x;
                        y = points[i]._y;
                        //point(points[i]._x, points[i]._y);
                        vertex(x, y);
                        noFill();
                    }
                    endShape(CLOSE);
                }
                

                if (i == 1) {
                    // then call this function to calculate distance
                    tri();
                }
            }
        }
    }

   

    function tri() {
        console.log('haha');
        console.log(d);
        userStartAudio();
        if (d < 20) {
            console.log("this is bio+by " + d);
            if (!checkSound()) mySound9.play();
        } else if (d < 40) {
            console.log("this is chat  " + d);
            if (!checkSound()) mySound8.play();
        } else if (d < 80) {
            console.log("this is big move! " + d);
            if (!checkSound()) mySound7.play();
        } else if (d < 100) {
            console.log("this is sing song " + d);
            if (!checkSound()) mySound6.play();
        } else if (d < 120) {
            console.log("this is 6 count out number" + d);
            if (!checkSound()) mySound5.play();
        }
    }
}
