const synth = window.speechSynthesis;
inputForm = document.querySelector("#form");
textInput = document.querySelector("#text-input");
selectVoice = document.querySelector("#voice-select");
speakButton = document.querySelector(".btn");

let voices;
const addVoicesToSelect = () => {
  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} - ${voices[i].lang}`;

    if (voices[i].default) {
      option.textContent += " - DEFAULT";
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    voiceSelect.appendChild(option);
  }
};
const onSubmit = (e) => {
  e.preventDefault();
  const sayThis = new SpeechSynthesisUtterance(textInput.value);
  synth.speak(sayThis);
};
inputForm.addEventListener("submit", onSubmit);
