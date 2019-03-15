var weatherObj = new XMLHttpRequest();
weatherObj.open('GET', 'http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=ad29c6aa79f2ea1e6701e2107e4be543',true); 
weatherObj.send();

weatherObj.onload =  function () {
    var weatherData = JSON.parse(weatherObj.responseText);
    console.log(weatherData);

    document.getElementById('max-city').innerHTML = weatherData.main.temp_max;
    document.getElementById('min-city').innerHTML = weatherData.main.temp_min;
    document.getElementById('wind-city').innerHTML = weatherData.wind.speed;

    

}
