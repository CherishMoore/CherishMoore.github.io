function doInputOutput() {
    var tempF = 14;
    var speed = 7;
    var result = windChill(speed, tempF);
    document.getElementById('chill').innerHTML = result;
    }
function windChill(speed,tempF) {
    var speed = Math.pow(speed, .16);
    result = 35.74 + 0.6215 * tempF - 35.75 * speed + 0.4275 * tempF * speed + " Fahrenheit";
    return result;
    }