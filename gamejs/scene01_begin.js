
function begin() {
  const phrases = ['Hello,stranger.', 'I will guide you throuhgt the process.', 'All I ask for you is', 'Be intuitive.']
  let i = 0
  let j = 0
  let currentPhrase = []
  let isDeleting = false
  let isEnd = false
  let fr = 10;

  this.enter = function () {
    mySound10.play();
    mySound11.loop();
    setTimeout(showTerms, 20000);
  }

  this.draw = function () {
    background('#FEFEFE'); 
    isEnd = false
    frameRate(fr);
    typeWriter();

    if (i < phrases.length) {

      if (!isDeleting && j <= phrases[i].length) {
        currentPhrase.push(phrases[i][j])
        j++
        typeWriter();
      }

      if (isDeleting && j <= phrases[i].length) {
        currentPhrase.pop(phrases[i][j])
        j--
        typeWriter();

      }

      if (j == phrases[i].length) {
        isEnd = true
        isDeleting = true
      }

      if (isDeleting && j === 0) {
        currentPhrase = []
        isDeleting = false
        i++
        if (i === phrases.length) {
          i = 0
        }
      }
    }

      const spedUp = Math.random() * (80 - 50) + 50
      const normalSpeed = Math.random() * (300 - 200) + 200
      const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
      setTimeout(typeWriter, time)
      //console.log(time);

  }

  function typeWriter() {
    fill('#0005A4');
    mTitle();
    text(currentPhrase.join(''), width / 2 - 250, height / 2);
    //console.log(width / 2 - 200);
  }

  function showTerms() {
    mySound10.stop();
    mySound11.stop();
    mgr.showScene(checkdistance1);
    console.log('scene01 ends');
  }
}



