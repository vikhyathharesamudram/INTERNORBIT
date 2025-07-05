function convertTemp() {
  const input = parseFloat(document.getElementById("tempInput").value);
  const unit = document.getElementById("unit").value;
  let c, f, k;

  if (unit === "celsius") {
    c = input;
    f = (input * 9/5) + 32;
    k = input + 273.15;
  } else if (unit === "fahrenheit") {
    f = input;
    c = (input - 32) * 5/9;
    k = c + 273.15;
  } else {
    k = input;
    c = input - 273.15;
    f = (c * 9/5) + 32;
  }

  document.getElementById("result").innerHTML =
    `Celsius: ${c.toFixed(2)}°C<br>
     Fahrenheit: ${f.toFixed(2)}°F<br>
     Kelvin: ${k.toFixed(2)}K`;
}
