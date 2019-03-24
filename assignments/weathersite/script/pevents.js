var section = document.querySelector('section');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
var townInfo = request.response;
eventData(townInfo);
}

function eventData(jsonObj) {
    var info = jsonObj['towns'];

    for (var i = 0; i < info.length; i++) {
        if (info[i].name == "Preston") {
     
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myList = document.createElement('ul');
        var myListItem1 = document.createElement('li');
        var myListItem2 = document.createElement('li');
        var myListItem3 = document.createElement('li');
    


        myH2.textContent = "Events:"
        myListItem1.textContent =  info[i].events[0];
        myListItem2.textContent =  info[i].events[1];
        myListItem3.textContent =  info[i].events[2];
        

        myArticle.appendChild(myH2);
        myArticle.appendChild(myList);
        myArticle.appendChild(myListItem1);
        myArticle.appendChild(myListItem2);
        myArticle.appendChild(myListItem3);

        section.appendChild(myArticle);
    }

}

}