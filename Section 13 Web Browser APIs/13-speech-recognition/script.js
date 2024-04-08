const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

// initialize a speech recognition with the speech recognition object
const rec = new SpeechRecognition();

rec.lang = "en-US";
// if this is true api listions continuously
rec.continuous = false;

// handler for what to do with result
rec.onresult = function (e) {
  //   console.log(e.results[0][0].transcript);
};
// browser will ask for permission
rec.start();
