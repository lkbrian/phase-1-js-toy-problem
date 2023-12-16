document.getElementById("gradeButton").addEventListener("click", function () {
    let userInput = document.getElementById("gradeInput").value;
    
  
function grading(input) {
     // Convert the input to a floating-point number
    if (input >= 0 && input < 40) {
        return 'E';
    } else if (input >= 40 && input < 49) {
        return 'D';
    } else if (input >= 49 && input <= 59) {
        return 'C';
    } else if (input >= 60 && input < 79) {
        return 'B';
    } else if (input >= 79 && input <= 100) {
        return 'A';
    } else {
        return 'Enter a valid Score';
    }
}
grading(userInput)
document.getElementById("grades").innerHTML = ` : ${grading(userInput)}`;
}); 
