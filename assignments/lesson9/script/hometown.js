var section = document.querySelector('section');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
var townInfo = request.response;
showData(townInfo);
}

function showData(jsonObj) {
    var info = jsonObj['towns'];

    for (var i = 0; i < info.length; i++) {
        if (info[i].name == "Preston" || info[i].name == "Fish Haven" || info[i].name == "Soda Springs") {
     
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myH3 = document.createElement('h3');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myList = document.createElement('ul');
        var myImg = document.createElement('img');
        
        if (info[i].name == "Preston") {
            myImg.src="images/preston.jpg";
            myImg.alt="Preston, Idaho";
        }
        if (info[i].name == "Fish Haven") {
            myImg.src="images/fish-haven.jpg";
            myImg.alt="Fish Haven, Idaho";
        }
        if (info[i].name == "Soda Springs") {
            myImg.src="images/soda-springs";
            myImg.alt="Soda Springs, Idaho";
        }
    

        myH2.textContent = info[i].name;
        myH3.textContent = 'Motto: ' + info[i].motto;
        myPara1.textContent = 'Year Founded: ' + info[i].yearFounded;
        myPara2.textContent = 'Currrent Population: ' + info[i].currentPopulation;
        myPara3.textContent = 'Average Rainfall: ' + info[i].averageRainfall;
        

        myArticle.appendChild(myH2);
        myArticle.appendChild(myH3);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);
        myArticle.appendChild(myImg);

        section.appendChild(myArticle);
    }

}

}