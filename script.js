try {
  var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  var recognition = new SpeechRecognition();
} catch (ex) {
  console.error(ex);
  alert("No Browser support for WebAPI");
  document.getElementById("no-browser").classList.remove()
}