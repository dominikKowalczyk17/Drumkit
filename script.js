function playSound(keyCode) {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  key.classList.add("playing");
  key.addEventListener("transitionend", removeTransition);
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});

document.addEventListener("keydown", (e) => {
  playSound(e.keyCode);
});
