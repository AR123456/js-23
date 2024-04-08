const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

// initialize a speech recognition with the speech recognition object
const rec = new SpeechRecognition();

rec.lang = "en-US";
// if this is true api listions continuously
rec.continuous = true;

// handler for what to do with result
rec.onresult = function (e) {
  //array of acceptable colors for comparison
  const acceptedColors = [
    "red",
    "blue",
    "green",
    "yellow",
    "pink",
    "brown",
    "purple",
    "orange",
    "black",
    "white",
  ];

  for (let i = e.resultIndex; i < e.results.length; i++) {
    const script = e.results[i][0].transcript.toLowerCase().trim();
    if (acceptedColors.includes(script)) {
      console.log(script);
    } else {
      console.log(acceptedColors);
    }
  }
};
// browser will ask for permission
rec.start();
