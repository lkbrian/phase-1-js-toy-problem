// the event listener method that takes input it for usage below
// i pass in an anonymus function as the second parameter and enclose all my solutions in it
document.getElementById("gradeButton").addEventListener("click", function () {
    //it takes input from html index page 
    let userInput = document.getElementById("gradeInput").value;
    
//   function to do the grading 
function grading(input) {
// when no input is entered this is the return statement
    if(!input){
        return 'Enter Something'
    }else if (isNaN(input)){
        return 'Enter a Number value '
    }
     //if else if statements to  checks for the score range and award grades
    else if (input >= 0 && input < 40) {
        return 'Grade: E';
    } else if (input >= 40 && input < 49) {
        return 'Grade: D';
    } else if (input >= 49 && input <= 59) {
        return 'Grade: C';
    } else if (input >= 60 && input < 79) {
        return 'Grade: B';
    } else if (input >= 79 && input <= 100) {
        return 'Grade: A';
    } else {
        return 'Enter a valid Score';
    }
}
// calling the function grading and passing the argument user input from html decleared avove
grading(userInput)
//outputs the result of the function grading on the index.html page
document.getElementById("grades").innerHTML = `  ${grading(userInput)}`;
}); 
