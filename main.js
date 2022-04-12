var SpeechRecognition= window.webkitSpeechRecognition
var recognition= new SpeechRecognition()
function start(){
document.getElementById("voicedisplayed").innerHTML=""
recognition.start()
}
recognition.onresult= function(event){
console.log(event)
var content=event.results[0][0].transcript
console.log(content)
document.getElementById("voicedisplayed").innerHTML=content
if (content=="take my selfie") {
    console.log("taking selfie")
    speak()
}
}
function speak(){
    var synth=window.speechSynthesis
    var speakdata="taking your selfie in 5 seconds"
    var utterThis=new SpeechSynthesisUtterance(speakdata)
    synth.speak(utterThis)
    Webcam.attach(camera)
 setTimeout(function(){
selfietake()
save()
 },5000)
}


Webcam.set({
width:360,
height:250,
image_format:"jpg",
jpg_quality:80
})
camera=document.getElementById("camera")
function selfietake(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML="<img id='newimg' src=  "+data_uri+">"    
})    
}
function save(){
link=document.getElementById("link")
img=document.getElementById("newimg").src;
link.href=img
link.click()
}