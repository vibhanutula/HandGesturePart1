function Goto() {
    window.location = "refer.html";
}

Prediction1 = "";
Prediction2 = "";

Webcam.set({
    width:350,
    height:300,
    image_format:'jpeg',
    jpeg_quality:90
});

camera = document.getElementById("Camera");
Webcam.attach('#camera');

function TakeSnap() {
    Webcam.snap(function(data_uri){
        document.getElementById("Snap").innerHTML = '<img id="capturedImg" src="' + data_uri + '"/>';
    });
}

console.log("ml5 version: ", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/mIies_Bsj/model.json", modelLoaded);

function modelLoaded() {
    console.log("Model Loaded!!");
}

function speak() {
    var synth = window.speechSynthesis;
    SpeakData1 = "First prediction is " + Prediction1;
    SpeakData2 = "and the second prediction is " + Prediction2;
    var utterthis = new SpeechSynthesisUtterance(SpeakData1 + SpeakData2);
    synth.speak(utterthis);
}