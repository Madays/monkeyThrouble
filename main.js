function monkeyTrouble() {
    var aSmile = document.getElementById("aSmile").value;
    var bSmile = document.getElementById("bSmile").value;  
    
    if (aSmile=="si" && bSmile=="si"){
        document.getElementById("resultado").innerHTML="1"   ;
    }else if (aSmile=="no" && bSmile=="no"){
        document.getElementById("resultado").innerHTML="1";
    }else{
        document.getElementById("resultado").innerHTML="0";
    }   
}
