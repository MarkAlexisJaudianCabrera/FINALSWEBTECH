const audio = document.getElementById("myAudio");
const controlBtn = document.getElementById("flag");
let clickStage = 0; 

function toggleAudio() {
    if (clickStage === 0) {
        audio.play();
    } else if (clickStage === 1) {
        audio.pause();
    } else if (clickStage === 2) {
        audio.currentTime = 0;
    }
    clickStage = (clickStage + 1) % 3; 
}
