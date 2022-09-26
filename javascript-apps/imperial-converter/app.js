let toConvert;

document.getElementById("myButton").onclick = function(){
    
    toConvert = document.getElementById("myText").value;
    console.log(toConvert);
    document.getElementById("myLabel").innerHTML = toConvert / 2.54;
}

