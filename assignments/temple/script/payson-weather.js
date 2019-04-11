var weatherObj = new XMLHttpRequest();
weatherObj.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5779548&units=imperial&appid=ad29c6aa79f2ea1e6701e2107e4be543', true);
weatherObj.send();

weatherObj.onload = function () {
    var weatherData = JSON.parse(weatherObj.responseText);
    console.log(weatherData);


    document.getElementById('curr-city').innerHTML = weatherData.main.temp;
    document.getElementById('desc').innerHTML = weatherData.weather[0].main;
    

}