const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

// initialize a speech recognition with the speech recognition object
const rec = new SpeechRecognition();

rec.lang = "en-US";
// if this is true api listions continuously
rec.continuous = true;

// handler for what to do with result
rec.onresult = function (e) {
  //   console.log(e.results[0][0].transcript);
  for (let i = e.resultIndex; i < e.results.length; i++) {
    const script = e.results[i][0].transcript;
    console.log(script);
  }
};
// browser will ask for permission
rec.start();
