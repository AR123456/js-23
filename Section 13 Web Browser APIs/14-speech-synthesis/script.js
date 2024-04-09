const synth = window.speechSynthesis;
inputForm = document.querySelector("#form");
textInput = document.querySelector("#text-input");
selectVoice = document.querySelector("#voice-select");
speakButton = document.querySelector(".btn");

let voices = [];

inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const sayThis = new SpeechSynthesisUtterance(textInput.value);
  synth.speak(sayThis);
});
