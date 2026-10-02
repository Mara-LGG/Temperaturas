let celsiusInput = document.getElementById("celsiusInput");
let btn = document.getElementById("btn");

let celsius = parseFloat(celsiusInput.value);

let fahrenheit = (celsius * 1.8) + 32;

let kelvin = 273.15 + celsius;


btn.addEventListener("click", function() {
    celsius = parseFloat(celsiusInput.value);
    fahrenheit = (celsius * 1.8) + 32;
    kelvin = 273.15 + celsius;

    document.getElementById("fahrenheitResultado").innerHTML = fahrenheit.toFixed(2) + " °F";
    document.getElementById("kelvinResultado").innerHTML = kelvin.toFixed(2) + " K";
});
