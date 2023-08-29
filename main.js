
function preload() {
classifier = ml5.imageClassifier('DoodleNet');
}

function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synther = window.speechSynthesis;

}
function draw(){
    strokeWeight(10.5)
    colorMode(RGB, 255,255,255,1);
    r=random(255)
    g=random(255)
    b=random(255)
stroke(r,g,b)
    if (mouseIsPressed) {
        line(pmouseX, pmouseY , mouseX, mouseY)
    }
}

function clearCanvas() {

    background("white")
}
function classifyCanvas() {
    classifier.classify(canvas, gotResult);
}
function gotResult(error, results) {
    if (error) {
        console.log(error)
    }
    console.log(results);
    document.getElementById('label').innerHTML = 'label:' + results[0].label;

    document.getElementById('confidence').innerHTML = 'Confidence:' + Math.round(results[0].confidence * 100) + "%";

    utterThis = new SpeechSynthesisUtterance(results[0].label);
    synther.speak(utterThis);
}