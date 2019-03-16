var weatherObj = new XMLHttpRequest();
weatherObj.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=ad29c6aa79f2ea1e6701e2107e4be543',true); 
weatherObj.send();

weatherObj.onload =  function () {
    var weatherData = JSON.parse(weatherObj.responseText);
    console.log(weatherData);

    document.getElementById('curr-city').innerHTML = weatherData.main.temp;
    document.getElementById('max-city').innerHTML = weatherData.main.temp_max;
    document.getElementById('min-city').innerHTML = weatherData.main.temp_min;
    document.getElementById('wind-city').innerHTML = weatherData.wind.speed;
    document.getElementById('desc').innerHTML = weatherData.weather[0].main;
    document.getElementById('humid').innerHTML = weatherData.main.humidity;
    

}

function windchill() {

    
    var maxTemp = document.createElement('max-city').innerHTML;
    var minTemp = document.createElement('min-city').innerHTML;
    var wind = document.getElementById('wind-city').innerHTML;
    var tempF = (maxTemp + minTemp) / 2;
    var speed = Math.pow(wind, 0.16);
    var chill = 35.74 + (0.6215 * tempF) - (35.75 * speed) + (0.4275 * tempF * speed);
    chill = Math.round(chill * 10) / 10 + ' &deg F';
    return chill;
}

document.getElementById("windChill").innerHTML = windchill();