var x=0;
var y=0;
draw_circle="";
draw_rect="";
function setup(){
    canvas=createCanvas(500,400);
}
speechRecognition=window.webkitSpeechRecognition;
recognition=new speechRecognition();

function start(){
 document.getElementById("status").innerHTML="Recording!!!";
 recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    rec=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="You have spoken "+rec;
    if(rec=="Circle."){ 
        x=Math.floor(Math.random()*500);
        y=Math.floor(Math.random()*400);
        document.getElementById("status").innerHTML="drawing circle";
        draw_circle="set";
    }
    if(rec=="Rectangle."){
        x=Math.floor(Math.random()*500);
        y=Math.floor(Math.random()*400);
        document.getElementById("status").innerHTML="drawing rectangle";
        draw_rect="set";
    }
}
function draw(){
    if(draw_circle=="set"){
       radi=Math.floor(Math.random()*59);
       circle(x,y,radi);
       document.getElementById("status").innerHTML="circle has been drawn";
       draw_circle=" ";
    }
    if(draw_rect=="set"){
        W=Math.floor(Math.random()*59);
        H=Math.floor(Math.random()*67);
        rect(x,y,W,H);
        document.getElementById("status").innerHTML="rectangle has been drawn";
        draw_rect=" ";
     }
}