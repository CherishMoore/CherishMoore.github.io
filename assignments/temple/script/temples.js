var section = document.querySelector('section');
var requestURL = 'https://assignments/temple/temple-data.json';
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
        
        
        if (info[i].name == "Payson") {
            myImg.src="images/payson-temple-med.jpg";
            myImg.alt="Payson, Utah Temple";
        }
        if (info[i].name == "Laie") {
            myImg.src="images/laie-temple-med";
            myImg.alt="Laie, Hawaii Temple";
        }
        if (info[i].name == "Orlando") {
            myImg.src="images/orlando-temple-med.jpg";
            myImg.alt="Orlando, Florida Temple";
        }
        if (info[i].name == "San Diego") {
            myImg.src="images/san-diego-temple-med.jpg";
            myImg.alt="San Diego, California Temple";
        }

        myH2.textContent = info[i].name;
        myPara1.textContent = info[i].address;
        myPara2.textContent = info[i].telephone;
        myList.textContent = info[i].services[0];
      

        

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