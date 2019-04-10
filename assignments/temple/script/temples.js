var section = document.querySelector('section');
var requestURL = 'https://CherishMoore.github.io/assignments/temple/temple-data.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
var templeInfo = request.response;
showData(templeInfo);
}

function showData(jsonObj) {
    var info = jsonObj['temples'];

    for (var i = 0; i < info.length; i++) {
        if (info[i].name == "Payson" || info[i].name == "Laie" || info[i].name == "Orlando" || info[i].name == "San Diego") {
     
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myH3 = document.createElement('h3');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myList = document.createElement('ul');
        var myImg = document.createElement('img');
        var myEvents = document.createElement('p');
        
        if (info[i].name == "Payson") {
            myImg.src="images/holding-hands.temple.jpg";
            myImg.alt="Holding Hands at the Temple";
        }
        if (info[i].name == "Laie") {
            myImg.src="images/fish-haven.jpg";
            myImg.alt="Fish Haven, Idaho";
        }
        if (info[i].name == "Orlando") {
            myImg.src="images/soda-springs.jpg";
            myImg.alt="Soda Springs, Idaho";
        }
        if (info[i].name == "San Diego") {
            myImg.src="images/preston.jpg";
            myImg.alt="Preston, Idaho";
        }

        myH2.textContent = info[i].name;
        myPara1.textContent = 'Year Founded: ' + info[i].yearFounded;
        myPara2.textContent = 'Currrent Population: ' + info[i].currentPopulation;
        myPara3.textContent = 'Average Rainfall: ' + info[i].averageRainfall;
        myEvents.textContent = 'Events: ' + info[i].events[0];

        

        myArticle.appendChild(myH2);
        myArticle.appendChild(myH3);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);
        myArticle.appendChild(myImg);
        myArticle.appendChild(myEvents);

        section.appendChild(myArticle);
    }

}

}