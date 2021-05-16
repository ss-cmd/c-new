function toCamera() {
    console.log('iam scene03 sayname');
    
    var video;
    var snapshot = [];
    //let  systemText;

    this.enter = function(){
        video = createCapture(VIDEO);
        video.size(640, 480);
        video.hide();
        //system error,12s
        mySound2.play();
        
        //machine back, say your name to start the game,33s,
        setTimeout(showGame,20000);
        // setTimeout(showLouder, 55000);
    }

    this.draw = function(){
        if (frameCount % 50 == 0) {
            // rect(width/2,height/2,20,20); 
            noStroke();
            background(random(256), random(256), random(256));
        }
        if (frameCount % 100 == 0) {
            takesnap();    
        }
        setTimeout(systemText, 10000);
    }

    function takesnap() {
        //set the camera
        snapshot = video.get();
        print(snapshot);
        //image(snapshot, width/6, height/2); // draw the video frame to canvas
        image(snapshot, width/6, height/2);
        // image(snapshot, width/0.5, height/2);
      }

    function systemText(){
        textSize(20);         
        noStroke();
        fill(174,31,35);
        textAlign(CENTER, CENTER);
        text("system error", width / 2, height / 2-100);
        text("The next step will be excuted ", width / 2, height / 2-80);
    }

    function showGame(){
        video.stop();
        mgr.showScene(game);
        console.log('this scene03 ends');
    }

}
