var weatherObj = new XMLHttpRequest();
weatherObj.open('GET', 'http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=ad29c6aa79f2ea1e6701e2107e4be543',true); 
weatherObj.send();

weatherObj.onload =  function () {
    var weatherData = JSON.parse(weatherObj.responseText);
    console.log(weatherData);

    document.getElementById('cc-city').innerHTML = weatherData.main.temp;

    var icon = "http://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";
    var desc = weatherData.weather[0].description;

document.getElementById('cc-img').setAttribute('src', icon);
document.getElementById('cc-img').setAttribute('alt', desc);

}
