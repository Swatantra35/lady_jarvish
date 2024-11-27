let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")
function speak(text){
    let text_speak= new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak) 
}

 function wishMe(){
    let day = new Date()
    let hours = day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours<16){
        speak("good afternoon sir")
    
    }
    else if(hours>=16 && hours<22){
        speak("Good evening sir")
    }
    else{
        speak("so jao ab")
    }
 }

 window.addEventListener("load", () =>{
    wishMe()
 })
let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
   let transcript= event.results[currentIndex][0].transcript
   content.innerText=transcript
    takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click", () =>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
 })
 function takeCommand(message) {
    btn.style.display="flex"
     voice.style.display="none"
    switch (true) {
        case message.includes("hello"):
            speak("Hello Sir");
            break;
        case message.includes("good morning"):
            speak("Good morning! Have a productive day ahead!");
            break;
            case message.includes("good afternoon"):
                speak("Good afternoon Azad sir! Have a productive day ahead!");
                break;
                case message.includes("good evening"):
                    speak("Good evening Azad sir! ");
                    break;
        case message.includes("who is tanu"):
            speak("Meri dusman!");
            break;

        case message.includes("how are you")|| message.includes("how r u"):
            speak("I'm doing great! How about you?");
            break;
            case message.includes("who are you")|| message.includes("hu r u"):
                speak("I'm lady jarvis, created by Azad");
                break;
        case message.includes("thank you")|| message.includes("thank"):
            speak("its my pleasure sir");
            break;
            case message.includes("who is my father"):
            speak("your father is a legend , his name is shri sanjeev kumar singh");
            break;
        case message.includes("what's your name"):
            speak("My name is Lady jarvish, i am your personal assistant ,always here for you and your problems!");
            break;
        case message.includes("tanu kaun hai"):
            speak("meri duuusman");
            break;
        case message.includes("how's the weather"):
            speak("I'm not sure, but you could check a weather app!");
            break;
        case message.includes("do you like coffee"):
            speak("I don't drink coffee, but it smells great!");
            break;
        case message.includes("how do I reduce stress"):
            speak("Try taking a walk, meditating, or listening to calming music.");
            break;
        case message.includes("i am feeling sad"):
            speak("It's okay to feel sad sometimes. Things will get better!");
            break;
        case message.includes("motivate me"):
            speak("You are capable of amazing things. Keep going!");
            break;
        case message.includes("can I do this"):
            speak("Of course you can! Believe in yourself.");
            break;
        case message.includes("tell me a joke"):
            speak("Why don’t skeletons fight each other? They don’t have the guts!");
            break;
        case message.includes("do you like music"):
            speak("I can't listen to music, but I know it's amazing!");
            break;
        case message.includes("what's your favorite color"):
            speak("I love all colors equally!");
            break;
        case message.includes("favourite teacher"):
            speak("your favourite teacher is deepti mam");
            break;
        case message.includes("suggest a good trip"):
            speak("How about the mountains or a relaxing beach?");
            break;
        case message.includes("suggest movie"):
            speak("You might enjoy watching a feel-good movie like *love is life*.");
            break;
        case message.includes("open youtube"):
            speak("opening youtube...")
            window.open("https://www.youtube.com/","_blank");
            break;
            case message.includes("open google"):
            speak("opening google...")
            window.open("https://google.com/","_blank");
            break;
            case message.includes("open my project"):
                speak("opening your project azad sir ...")
                window.open("https://swatantra35.github.io/Amazon-Clone/","_blank");
                break;
            
            case message.includes("time"):
                let time=new Date().toLocaleDateString(undefined,{hour:"numeric",minute:"numeric"})
         speak(time);
         break;
       
        case message.includes("open calculator"):
                speak("opening calculator....");
            window.open("calculator://");
            break;
            case message.includes("open linkedin"):
                speak("opening linkedin....");
            window.open("linkedin://");
            break;
      case message.includes("open whatsapp"):
                speak("opening whatsapp....");
            window.open("Whatsapp://");
         break;
        default:
            speak(`This is what I found on internet regarding ${message.replace("jarvis","")}`);
           
            window.open(`https://www.google.com/search?q=${message.replace("jarvis","")}`)
            break;
    } 
}