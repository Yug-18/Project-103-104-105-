Webcam.set({
    width: 350,
    height: 300,
    image_format:'png',
    png_quality: 90
})

Camera = document.getElementById("Camera")

Webcam.attach(Camera)

function Take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("Result").innerHTML = '<img id ="captured_image" src="'+data_uri+'"/>'
    })
}

console.log('ml5 version:', ml5.version)
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/SxZnRp0RN/model.json', modelLoaded)

function modelLoaded() {
    console.log('Model Loaded!');
}

function check() {
    img = document.getElementById('captured_image')
    classifier.classify(img, gotResult);
}

function gotResult(error, Result)
{
    if (error) {
        console.error(error)
    }
    else{
        console.log(Result)
        document.getElementById("member_name").innerHTML = Result[0].label 
        document.getElementById("FM_accuracy").innerHTML = Result[0].confidence.toFixed(2);
    }
}

