// event listener usage attached to my button
// take input from the HTMLinput tag when the buton is clickeds
document.getElementById("speedButton").addEventListener("click", function () {
  //user input taken
  var userInput = document.getElementById("speedInput").value;

  function speedDetector(speed) {
    //declearing variables
    const speedLimit = 70;
    const kilometerCheck = 5;
    let demeritPoints = Math.ceil((userInput - speedLimit) / kilometerCheck); //calculation
    //logit to check speed using if ele if control flow
    if (!speed) {
      return "Enter Something";
    } else if (isNaN(speed)) {
      return "Enter a Number value ";
    } else if (speed < 0) {
      return `enter a valid speed`;
    } else if (speed >= 0 && speed < 70) {
      return `Ok`;
    } else if (speed >= 70 && speed < 130) {
      return `Demerits points: ${demeritPoints}`;
    } else if (speed > 130 && speed <= 1227.985) {
      return ` Liscence Suspended`;
    } else {
      return `That wouldn't be a car`;
    }
  }
  // calling or invoking the function
  speedDetector(userInput);
  //displaying the output  that is the current state of your
  document.getElementById("speed").innerHTML = ` ${speedDetector(userInput)}`;
});
