function showterms() {
    console.log("i am scene02");
    let webCam;
    let ypix = [];
    maxDiam = 10;
    let imageCol = [];
    let scanner;
    scannerRight = true;
    let colCount = 0;

    this.enter = function () {
        // setTimeout(showText, 5000);
        setTimeout(showQuestion, 10000);
        // setTimeout(showCircle, 1000)
        webCam = createCapture(VIDEO);
        webCam.size(480, 340);
        webCam.hide();

        ypix[0] = [];
        scanner = webCam.width / 2;

        // setTimeout(showText, 30000);
    }

    this.draw = function () {
        image(img, 0, 0, img.width / 2, img.height / 2);
        webCam.loadPixels();

        let screenWidth = int(webCam.width * 3 / 4);
        let screenHeight = int(webCam.height * 3 / 4);

        push();
        translate(width / 2 - screenWidth / 2, 350 / 2 - screenHeight / 2);
        image(webCam, 0, 0, screenWidth, screenHeight);
        blendMode(SCREEN);
        strokeWeight(5);
        stroke(255, 0, 0);
        line(scanner * 3 , 0, scanner * 3 , screenHeight);
        line(scanner * 3 , 0, scanner * 3 , screenHeight);
        blendMode(BLEND);
        strokeWeight(1);
        stroke(255, 0, 0);
        line(scanner * 3 , 0, scanner * 3, screenHeight);
        pop();

        imageCol[colCount] = new column;

        for (let i = 0; i < imageCol.length; i++) {
            imageCol[i].display();
        }
        frameRate(30);

        colCount++;

        if (colCount > width / 2) {
            colCount = 0;
        }
    }
    class column {
        constructor() {
            this.no = ypix.length - 1;
            for (let i = 0; i < int(webCam.height / maxDiam); i++) {
                this.offset = int(((i * maxDiam * webCam.width) + scanner) * 4);
                this.redc = webCam.pixels[this.offset];
                this.greenc = webCam.pixels[this.offset + 1];
                this.bluec = webCam.pixels[this.offset + 2];

                ypix[this.no][i] = map(this.greenc, 0, 255, 0, maxDiam);
                this.xpix = 0;
                // ypix[this.no][i] = int(random(255));
            }
            ypix[ypix.length] = [];

            if (scanner >= webCam.width - 2) {
                scannerRight = false;
            }
            if (scanner <= 2) {
                scannerRight = true;
            }

            if (scannerRight == true) {
                scanner += int(random(5));
            }
            if (scannerRight == false) {
                scanner -= int(random(5));
            }
            // scanner = int(webCam.width/2 * sin(frameCount/40) + webCam.width / 2);
        }

        display() {
            for (let i = 0; i < int(webCam.height / maxDiam); i++) {
                // fill(ypix[this.no][i]);
                fill(255);
                noStroke();
                ellipse(width - 2 - this.xpix, i * maxDiam + maxDiam / 2 + 350,
                    ypix[this.no][i], ypix[this.no][i]);
            }
            this.xpix += maxDiam / 4;
        }
    }


    function showQuestion() {
        vid.stop();
        mgr.showScene(question);
        console.log('02 scene ends');
    }
}