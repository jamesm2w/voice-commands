try {
  var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  var recognition = new SpeechRecognition();
  var instructions = document.getElementById("instructions");
  var capturedText = "";
} catch (ex) { // It is fairly experimental technology, if no support, hide the app.
  console.error(ex);
  alert("No Browser support for WebAPI");
  document.getElementById("no-browser").classList.remove("hidden");
  document.getElementById("app").classList.add("hidden");
}

recognition.onstart = () => {
  instructions.innerHTML = "Listening for voice input"
}

recognition.onspeechend = () => {
  instructions.innerHTML = "<span class='important'>Speech detection stopped.</span>"
}

recognition.onerror = (e) => {
  console.error(e);
  (e.error == "no-speech") ? instructions.innerHTML = "No speech detected." : instructions.innerHTML = "Error occured";
}

recognition.onresult = (e) => {
  let current = e.resultIndex;
  
  let transcript = e.results[current][0].transcript;
  
  capturedText += transcript;
  document.getElementById("text-area").value = capturedText;
}