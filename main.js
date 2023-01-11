function startClassification()
{
   navigator.mediaDevices.getUserMedia({audio: true});
   classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/pz5-o8GiU/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResult);
}

function gotResult(error,result)
{
    if (error)
    {
        console.error(error);
    }
    else
    {
        console.log(result);
        document.getElementById("label").innerHTML = 'I can hear - '+result[0].label;
        document.getElementById("confidence").innerHTML = 'Accuracy - '+ (result[0].confidence*100).toFixed(2)+"%"; 
    }
}