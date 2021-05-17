function intro() {
    console.log("i am scene01 inrovideo");
    // an array to add multiple particles
    let particles = [];

    this.enter = function () {
        ///set 30000 to finish the video file
        vid.play();
        setTimeout(showProjectname, 31000);
        for (let i = 0; i < width / 10; i++) {
            particles.push(new Particle());
        }
    }

    this.draw = function () {
        //background('#faf5ed');
        background('#FEFEFE');
        vid.size(540, 380);
        image(vid, width / 2-300, height / 2-200 );
        showText();
        for (let i = 0; i < particles.length; i++) {
            particles[i].createParticle();
            particles[i].moveParticle();
            particles[i].joinParticles(particles.slice(i));
        }
    }

    // this class describes the properties of a single particle.
    class Particle {
        // setting the co-ordinates, radius and the
        // speed of a particle in both the co-ordinates axes.
        constructor() {
            this.x = random(0, width);
            this.y = random(0, height);
            this.r = random(1, 8);
            this.xSpeed = random(-2, 2);
            this.ySpeed = random(-1, 1.5);
        }

        // creation of a particle.
        createParticle() {
            noStroke();
            //fill(174,31,35);
            fill('#004AFF');
            circle(this.x, this.y, this.r);
        }

        // setting the particle in motion.
        moveParticle() {
            this.xSpeed *= -1;
            if (this.y < 0 || this.y > height)
                this.ySpeed *= -1;
            this.y += this.ySpeed;
        }

        // this function creates the connections(lines)
        // between particles which are less than a certain distance apart
        joinParticles(paraticles) {
            particles.forEach(element => {
                let dis = dist(this.x, this.y, element.x, element.y);
                if (dis < 55) {
                    //stroke('black');
                    stroke('#ABE7FF ');
                    line(this.x, this.y, element.x, element.y);
                }
            });
        }
    }


    function showText() {
        fill('#0005A4');
        textFont(font2);
        noStroke();
        strokeWeight(2);
        textSize(20);
        textAlign(LEFT, BASELINE);
        text("This project needs to turn on the sound ", 150 ,height / 2-280);
        text("The video might need to be refreshed to load", 150 ,height / 2-240);
    }
    function showProjectname() {
        vid.stop();
        mgr.showScene(Projectname);
        console.log('01 scene ends');
    }
}
