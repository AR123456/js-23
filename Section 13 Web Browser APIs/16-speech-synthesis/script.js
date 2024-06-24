const voiceSelect = document.getElementById("voice-select");

const synth = window.speechSynthesis;
let voices;

function addVoicesToSelect() {
  voices = synth.getVoices();

  for (let i = 0; i < voices.length; i++) {
    // build options html
    const option = document.createElement("option");
    // get the voice name and lang
    option.textContent = `${voices[i].name} - ${voices[i].lang}`;
    // default edge case
    if (voices[i].default) {
      option.textContent += " - DEFAULT";
    }
    // set  data attribute
    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    voiceSelect.appendChild(option);
  }
}

function onSubmit(e) {
  e.preventDefault();
  // getting the text input by user
  const textInput = document.getElementById("text-input");
  // telling synthesiser to say it
  const utterThis = new SpeechSynthesisUtterance(textInput.value);
  // select the voice from  the dynamically created list
  const selectedOption =
    voiceSelect.selectedOptions[0].getAttribute("data-name");
  for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }

  synth.speak(utterThis);
}

addVoicesToSelect();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = addVoicesToSelect;
}

document.getElementById("form").addEventListener("submit", onSubmit);
