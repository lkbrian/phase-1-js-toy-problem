document.getElementById("salaryButton").addEventListener("click", function () {

    var userInput = document.getElementById("salaryInput").value;

    let payee, netSalary ,nssf ,housing,nhif;

    let nhifRates = [150,300,400,500,600,750,850,900,950,1000,1100,1200,1300,1400,1500,1600,1700]
    
    function nhifCalculator(salary){
        if(salary >=0 && salary<= 10000){
            return 150;
        }else {
            return 300
        }
    }
    nhif = nhifCalculator(userInput)

    function netSalaryCalculator(salary){
     nssf = userInput * 0.06;
     housing = userInput *0.015;
 
    if(salary > 0 && salary <= 24000){
        payee = userInput * 0.1;
           
    }else if(salary > 24000 && salary <= 32333){
        payee = userInput * 0.25;
          
    } else if(salary > 32333 && salary <= 500000){
        payee = userInput * 0.3;
          
    } else if(salary > 500000 && salary <= 800000){
        payee = userInput * 0.325;
           
    }else if(salary > 800000){
        payee = userInput * 0.35;
        
    }else{
        return 'unaumia'
    }
    netSalary = userInput - nssf - housing - payee - nhif
    return netSalary.toFixed(2);
    }
    netSalaryCalculator(userInput)
    document.getElementById("PAYEE").innerHTML = `PAYEE&ensp;&emsp;&ensp;&ensp; &emsp;&ensp;KSH ${payee}`;
    document.getElementById("NHIF").innerHTML = `NHIF&ensp;&emsp;&ensp;&ensp; &emsp;&ensp;&ensp;&nbsp;KSH ${nhif} `;
    document.getElementById("NSSF").innerHTML = `NSSF&ensp;&emsp;&ensp;&ensp; &emsp;&ensp;&ensp;&nbsp;KSH ${nssf}`;
    document.getElementById("Housing").innerHTML = `Housing levy&ensp; &emsp;KSH${housing}`;
    document.getElementById("finalAmount").innerHTML = `Net Salary:&ensp; &emsp;KSH ${netSalaryCalculator(userInput)}`;
}); 