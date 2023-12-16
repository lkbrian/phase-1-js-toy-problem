document.getElementById("speedButton").addEventListener("click", function () {
    var userInput = document.getElementById("speedInput").value;

function speedDetector(speed){

    const speedLimit = 70;
    const kilometerCheck = 5;
    let demeritPoints = Math.floor((userInput - speedLimit ) / kilometerCheck);
if(speed < 0){
    return `enter a valid speed`
}else if(speed >=0 && speed <= 70){
    return `Ok`;
}else if(speed > 70 && speed <=130){
    return `Demerits points: ${demeritPoints}` ;   
}else if(speed > 130 && speed <= 250){
    return ` Liscence Suspended`
}else{
    return `Your Space is reserved in the morgue`
}
}
speedDetector(userInput)
document.getElementById("speed").innerHTML = ` ${speedDetector(userInput)}`;
}); 
