function windchill() {
    var tempF = (66 + 14) / 2;
    var speed = Math.pow(7, 0.16);
    var chill = 35.74 + (0.6215 * tempF) - (35.75 * speed) + (0.4275 * tempF * speed);
    chill = Math.round(chill * 10) / 10 + ' &deg F'
    return chill;
}

document.getElementById("windChill").innerHTML = windchill();