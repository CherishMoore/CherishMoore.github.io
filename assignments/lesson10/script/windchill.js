/*function windchill() {
    var tempF = (66 + 14) / 2;
    var speed = Math.pow(7, 0.16);
    var chill = 35.74 + (0.6215 * tempF) - (35.75 * speed) + (0.4275 * tempF * speed);
    chill = Math.round(chill * 10) / 10 + ' &deg F'
    return chill;
}

document.getElementById("windChill").innerHTML = windchill();

var maxTemp = document.getElementById('max-city').innerHTML = weatherData.main.temp_max;
var minTemp = document.getElementById('min-city').innerHTML = weatherData.main.temp_min;
var wind = document.getElementById('wind-city').innerHTML = weatherData.wind.speed;



function windchill() {
    var maxTemp = document.getElementById('max-city').innerHTML = weatherData.main.temp_max;
    var minTemp = document.getElementById('min-city').innerHTML = weatherData.main.temp_min;
    var wind = document.getElementById('wind-city').innerHTML = weatherData.wind.speed;
    var tempF = (maxTemp + minTemp) / 2;
    var speed = Math.pow(wind, 0.16);
    var chill = 35.74 + (0.6215 * tempF) - (35.75 * speed) + (0.4275 * tempF * speed);
    chill = Math.round(chill * 10) / 10 + ' &deg F'
    return chill;
}

document.getElementById("windChill").innerHTML = windchill();
*/