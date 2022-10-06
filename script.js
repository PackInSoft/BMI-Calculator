// Grabbing all inputs
// inputs[0] and inputs[2] are normal inputs
// inputs[1] and inputs[4] are range inputs
const inputs =  [...document.querySelectorAll("input")];

    //synchronising normal inputs with range ones
    inputs[0].addEventListener("input", () => 
    inputs[1].value = inputs[0].value)

    inputs[1].addEventListener("input", () => 
    inputs[0].value = inputs[1].value)

    inputs[2].addEventListener("input", () => 
    inputs[3].value = inputs[2].value)

    inputs[3].addEventListener("input", () => 
    inputs[2].value = inputs[3].value)


// grabbing .calculate button and initializing the rest of the program on "click"
let calculate = document.querySelector(".calculate");
calculate.addEventListener("click", calc);

function calc() {
    let resultBox = document.querySelector(".result-container");
    let result = document.querySelector(".result");
    let resultImage = document.querySelector(".result-info");
    resultImage.style.display = "none";
    resultBox.style.display = "flex";

    //DEBUG
    //console.log(heightInput);
    //console.log(weightInput);
    
    let height = parseInt(inputs[0].value);
    let weight = parseInt(inputs[2].value);
    
    //before making calculation, first check if the inputs are numbers and if they are greater than 0
    if (!isNumeric(height) || height == 0) {
        result.innerText = "Check Height Input";
    }else if (!isNumeric(weight) || weight == 0) {
        result.innerText = "Check Weight Input";
    }else {
        //main calculations and result display
        resultImage.style.display = "flex";
        let BMI = (weight/((height/100)**2)).toFixed(2);
        result.innerText = "Your BMI: " + BMI;
        if (BMI < 18.5) {
            resultImage.innerHTML = "Underweight";
        }
        else if(BMI >= 18.5 && BMI < 25) {
            resultImage.innerHTML = "Healthy weight";
        }
        else if(BMI >= 25 && BMI < 30) {
            resultImage.innerHTML = "Overweight";
        }
        else if(BMI >= 30) {
            resultImage.innerHTML = "Obese";
        }
    }
    
}

// Check if the input is a valid number
function isNumeric(value) {
    return /^-?\d+$/.test(value);
}
