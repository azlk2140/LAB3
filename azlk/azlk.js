const playBtn = document.querySelector('.btn btn-one');
const pauseBtn = document.querySelector('.btn btn-two');
const audio = new Audio();

function playAudio() {
  audio.src = 'C:/Users/Пипидастер/Desktop/azlk/grob/kaif.mp3'
  audio.currentTime = 0;
  audio.play(); 
}

function pauseAudio() {
  audio.pause();
}

playBtn.addEventListener('click', playAudio);
pauseBtn.addEventListener('click', pauseAudio);

var isPlay;
let isPlay = false;
