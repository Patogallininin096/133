x = 0;
y = 0;
screenwidth = 0;
screenheight = 0;
draw_apple = "";
apple = "";
speak_data = "";
to_number = 0;

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "El sistema está escuchando, por favor habla";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;
 to_number = Number(content);
 if (Number.isInteger(to_number)){
  draw_apple = "set"
  document.getElementById("status").innerHTML = "El comando ha sido reconocido: " + content; 
 }
  else{
    document. getElementById("status").innerHTML = "No se reconocio el numero"
  }  
}

function setup() {
 screenwidth = window.innerWidth;
 screenheight = window.innerHeight;
 canvas = createCanvas(screenwidth, screenheight-150)
}

function draw() {
  if(draw_apple == "set")
  {
    for (let index = 1; index = to_number; index++) {
     x = Math.floor(Math.random()*700)
     y = Math.floor(Math.random()*400)
     image(apple, x, y, 50, 50) 
    }
    document.getElementById("status").innerHTML = to_number + " manzanas dibujadas";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

function preload(){
  apple = loadImage("apple.png");
}
