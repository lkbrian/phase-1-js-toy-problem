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
    } else if(salary >= 6000 && salary <= 7999)  {
      return 300;
    } else if (salary >= 8000 && salary <= 11999) {
      return 400;
    } else if (salary >= 12000 && salary <= 14999) {
      return 500;
    } else if (salary >= 15000 && salary <= 19999) {
      return 600;
    } else if (salary >= 20000 && salary <= 24999) {
      return 750;
    } else if (salary >= 25000 && salary <= 29999) {
      return 850;
    } else if (salary >= 30000 && salary <= 34999) {
      return 900;
    } else if (salary >= 35000 && salary <= 39999) {
      return 950;
    } else if (salary >= 40000 && salary <= 44999) {
      return 1000;
    } else if (salary >= 50000 && salary <= 59999) {
      return 1200;
    } else if (salary >= 60000 && salary <= 69999) {
      return 1300;
    } else if (salary >= 70000 && salary <= 79999) {
      return 1400;
    } else if (salary >= 80000 && salary <= 89999) {
      return 1500;
    } else if (salary >= 90000 && salary <= 99999) {
      return 1600;
    } else if (salary >= 100000) {
      return 1700;
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
