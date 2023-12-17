//adding the event listener
document.getElementById("salaryButton").addEventListener("click", function () {
  //taking user input
  var userInput = document.getElementById("salaryInput").value;
  // variable declaration
  let payee, netSalary, nssf, housing, nhif;
  //calculating the nhif deductions
  function nhifCalculator(salary) {
    if (salary >= 0 && salary <= 10000) {
      return 150;
    } else {
      return 300;
    }
  }
  // assigning the output of the nhifcalculator function to the
  //nhif variable
  nhif = nhifCalculator(userInput);

  //function to calculate the net salary ~ ,nssf ,housing levy and payee deductions
  function netSalaryCalculator(salary) {
    nssf = userInput * 0.06;
    housing = userInput * 0.015;
    if (!salary) {
      return "Enter Something";
    } else if (isNaN(salary)) {
      return "Enter a Number value ";
    } else if (salary > 0 && salary <= 24000) {
      payee = (userInput * 0.1).toFixed(2)
    } else if (salary > 24000 && salary <= 32333) {
      payee = (userInput * 0.25).toFixed(2)
    } else if (salary > 32333 && salary <= 500000) {
      payee = (userInput * 0.3).toFixed(2)
    } else if (salary > 500000 && salary <= 800000) {
      payee = (userInput * 0.325).toFixed(2)
    } else if (salary > 800000) {
      payee = (userInput * 0.35).toFixed(2)
    }
    netSalary = userInput - nssf - housing - payee - nhif;
    // returning the output in two decimal places since we are dealing with currency
    return netSalary.toFixed(2);
  }
  //calling the function to return the output when user inpurt is passed as an argument
  netSalaryCalculator(userInput);
  //display  output by use of html tags  and adding a bit of space between them
  document.getElementById(
    "PAYEE"
  ).innerHTML = `PAYEE&ensp;&emsp;&ensp;&ensp; &emsp;&ensp;KSH ${payee}`;
  document.getElementById(
    "NHIF"
  ).innerHTML = `NHIF&ensp;&emsp;&ensp;&ensp; &emsp;&ensp;&ensp;&nbsp;KSH ${nhif} `;
  document.getElementById(
    "NSSF"
  ).innerHTML = `NSSF&ensp;&emsp;&ensp;&ensp; &emsp;&ensp;&ensp;&nbsp;KSH ${nssf}`;
  document.getElementById(
    "Housing"
  ).innerHTML = `Housing levy&ensp; &emsp;KSH${housing}`;
  //displayin the final amount which would be the net salary
  document.getElementById(
    "finalAmount"
  ).innerHTML = `Net Salary:&ensp; &emsp;KSH ${netSalaryCalculator(userInput)}`;
});
