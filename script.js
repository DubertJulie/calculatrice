let num1 = " ";
let num2 = " ";
let operation = " ";
let result = " ";

function getValues(value) {
    if (num1 === " ") {
        num1 = value;
        console.log(num1);
        document.getElementById(num1).style.backgroundColor = "#F15B67";
        return num1;
    } else if (num2 === " ") {
        num2 = value;
        console.log(num2);
        document.getElementById(num2).style.backgroundColor = "#F47C85";
        return num2;
    } 
    // else {
    //     document.getElementById(num2).style.backgroundColor = "black";
    //     num2 = value;
    // }
}

function getOperator(value){
    if (operation === " ") {
    operation = value;
    document.getElementById(operation).style.backgroundColor = "#A94048";
    } else {
    document.getElementById(operation).style.backgroundColor = "#F782B4";
    operation = " ";
    }
    console.log(operation);
}
   
function calculate() {
    console.log(num1, num2, operation);

    switch(true){
        case (operation === "add"):
            result = num1 + num2;
            break;
        case (operation === "subtract"):
            result = num1 - num2;
            break;
        case (operation === "multiply"):
            result = num1 * num2;
            break;
        case (operation === "divide" && num2 === 0):
            result = "Pas possible !";
            break;
        case (operation === "divide"):
            result = num1 / num2;
            break;
        default: 
            result = "Erreur !";
    }

    document.getElementById("equal").style.backgroundColor = "#91373E";
    document.getElementById("result").innerHTML = result;
    console.log("num1 = "+num1+", num2 = "+num2+", operateur = "+operation);

    document.getElementById(num1).style.backgroundColor = "#E4A0B7";
    document.getElementById(num2).style.backgroundColor = "#E4A0B7";
    document.getElementById(operation).style.backgroundColor = "#F782B4";
    document.getElementById("equal").style.backgroundColor = "#F955A0";

    num1 = " "; 
    num2 = " ";
    operation = " ";
}

function flush() {
    if (num1 !== " ") {
        document.getElementById(num1).style.backgroundColor = null;
    }

    if (num2 !== " ") {
        document.getElementById(num2).style.backgroundColor = null;
    }

   if (operation !== " ") {
    document.getElementById(operation).style.backgroundColor = null;
   }

    num1 = " "; 
    num2 = " ";
    operation = " ";
    document.getElementById("result").innerHTML = " ";
}


