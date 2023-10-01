const inputSlider = document.querySelector("data-lengthSlider");
const lengthDisplay = document.querySelector("data-lengthNumber");
const passwordDisplay = document.querySelector("data-passwordDisplay");
const copyBtn = document.querySelector("(data-copy)")
const copyMsg = document.querySelector("(data-copyMsg)")
const uppercaseCheck = document.querySelector("#upperacse")
const lowercaseCheck = document.querySelector("#lowercase")
const numbersCheck  = document.querySelector("#numbers")
const symbolsCheck = document.querySelector("#symbols")
const indicator = document.querySelector("(data-indicator")
const generatedBtn = document.querySelector(".generateButton")
const allCheckBox = document.querySelectoraAll("input(type=checkbox)")
const symbols = '~'!@#$%^&*()_+=-<>/?\|;
let password = "";
let passwordLength = 10;
let checkCount = 1;
handleSlider();

//strength circle to grey

function handleSlider(){
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
}

function setIndicator(color){
    indicator.style.backgroundcolor = color;
}

function getRndInteger(min,max){
   Math.floor( Math.random()*(max-min)) + min;
}

function generateRandomNumber(){
    return getRndInteger(0,9);

}

function generateLowerCse(){
    return String.fromCharCode(generateRndInteger(97,123));
}

function generateUpperCse(){
    return String.fromCharCode(generateRndInteger(65,91));
}

function generateSymbol(){
    const randNum = getRndInteger(0,symbols.length);
    return symbols.charAt(randNum);

 }

 function calcStrength(){
    let hasUpper = false;
    let hasLower = false;
    let hasSym = false;
    let hasNumber = false;
    
    if (hasUpper&&hasLower==true || hasSym&&hasNumber==true){
        
    }
}