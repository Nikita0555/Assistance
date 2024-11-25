window.onload=function(){

    
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = "en-US";

const btn = document.querySelector("#listen-btn");
btn.addEventListener("click", function () {

    function speak(text){
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
    }

 function handleCommand(command){
    if(command.includes("open youtube")){
        speak("Opening Youtube...");
        window.open("https://www.youtube.com", "_blank");
    }
    else if(command.includes("open facebook")){
        speak("Opening facebook...");
        window.open("https://www.facebook.com", "_blank");
    }
    else if(command.includes("open watsapp")){
        speak("Opening watsapp...");
        window.open("https://www.watsapp.com", "_blank");
    }
    else if(command.includes("open instagram")){
        speak("Opening instagram...");
        window.open("https://www.instagram.com", "_blank");
    }
    else if(command.includes("open google")){
        speak("Opening google...");
        window.open("https://www.google.com", "_blank");
    }
    else if(command.includes("open amazon")){
        speak("Opening amazon...");
        window.open("https://www.amazon.com", "_blank");
    }
    else if(command.includes("open flipcart")){
        speak("Opening flipcart...");
        window.open("https://www.flipcart.com", "_blank");
    }
    else if(command.includes("open g-mail")){
        speak("Opening g-mail...");
        window.open("https://www.gmail.com", "_blank");
    }
    else if(command.includes("open zomato")){
        speak("Opening zomato...");
        window.open("https://www.zomato.com", "_blank");
    }
    else if(command.includes("open meesho")){
        speak("Opening meesho...");
        window.open("https://www.meesho.com", "_blank");
    }
    else{
        speak("Searching Google for" + command);
        window.open(`https://www.google.com/search?q=${encodeURIComponent(command)}` ,"_blank");
    }
 }
  speak("Hello, how can I help you?");

  setTimeout(()=> {
    btn.innerHTML="Listening...👂";
    btn.classList.add("listening");
    recognition.start();
  },2500);

  recognition.onresult = (event) => {
    console.log(event)
    const command = event.results[0][0].transcript.toLowerCase();
    handleCommand(command);
  };
  recognition.onend=()=>{
     btn.innerHTML= " 🎤Start Listening";
     btn.classList.remove("listening");
  };
});


  }






