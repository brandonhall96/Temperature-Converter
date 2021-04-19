console.log('Hello, front end');



let data = document.querySelector('#input');
let radioInfo = document.querySelectorAll("input[name='temp']");
let resultsText = document.querySelector('.results');
let submitButton = document.querySelector('#three');
 






function cToF (celsius) {
    let cTemp = celsius;
    let cToFahr = cTemp * 9 / 5 + 32;
    let message = cTemp+'\xB0C is' + cToFahr + '\xB0F.';
    resultsText.innerText = message
    console.log(message);
}

function fToC (fahrenheit) {
    let fTemp = fahrenheit;
    let fToCel = (fTemp - 32) * 5 / 9;
    let message = fTemp + '\xB0F is' + fToCel + '\xB0C.';
    resultsText.innerText = message
    console.log(message);
}


submitButton.onclick = function(){
    console.log("click")
    // alert(data.value)
    if (radioInfo[0].checked){
        console.log("USA Yeah")
        fToC(data.value)
    } else {
        console.log("The rest of the world")
        cToF(data.value)
    }
}