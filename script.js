function convertToFahrenheit() 
{
    const celsius = parseFloat(document.getElementById('celsius').value); 
    if (!isNaN(celsius)) 
    {
        const fahrenheit = (celsius * 9/5) + 32;
        document.getElementById('result').textContent = `${celsius}°C is ${fahrenheit.toFixed(2)}°F`;
    } else 
    {
        document.getElementById('result').textContent = "Please enter a valid Celsius temperature.";
    }
}
function convertToCelsius() 
{
    const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    if (!isNaN(fahrenheit)) 
    {
        const celsius = (fahrenheit - 32) * 5/9;
        document.getElementById('result').textContent = `${fahrenheit}°F is ${celsius.toFixed(2)}°C`;
    }
    else 
    {
        document.getElementById('result').textContent = "Please enter a valid Fahrenheit temperature.";
    }
}
