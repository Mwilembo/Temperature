//variables
let date = document.getElementById('date');

//declaring the date 
const todayDate = Date();
date.innerHTML = `Date: ${todayDate}`;


function calculate(){
    //This is the constant value for Kelvin
    let Kelvin = document.getElementById('number').value;
    //Calculating Celsius 
    let Celsius = 273.15;
    Celsius = Kelvin - Celsius;
    Celsius = Math.round(Celsius * 10) / 10;
    document.getElementById('Celsius').innerHTML=`${Celsius}`;
    //Equation to Calculate fahrenheit
    let fahrenheit;
    fSolve = Kelvin - 273.15;
    fahrenheit = fSolve * 9/5 + 32;
    //rounding down the decimal of fahrenheit to a whole number.
    fahrenheit = Math.round(fahrenheit * 10) / 10;
    document.getElementById('Fahrenheit').innerHTML=`${fahrenheit}`;
    //converting celsius to newton scale
    let Newton;
    nSolve = Kelvin - 273.15;
    Newton = nSolve * 33/100;
    //rounding down the newton figure
    Newton = Math.round(Newton * 10) / 10;
    document.getElementById('Newton').innerHTML=`${Newton}`;
}
//printing to the screen the fahrenheit temperature.
console.log(`The Temperature is ${fahrenheit} degrees Fahrenheit.`);

//printing the newton value to the screen.
console.log(`The Temperature in ${Celsius} is ${Newton} degrees on the Newton Scale.`);
