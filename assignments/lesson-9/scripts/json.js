var section = document.querySelector('section');
    var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
            var smallTowns = request.response;
            showTowns(smallTowns);
        }

    //Display the individual town data with the motto, year founded, population, and annual
    //rainfall from the JSON file

    function showTowns(jsonObj) {
        var towns = jsonObj['towns'];
                
        for (var i = 0; i < towns.length; i++) {
            if (towns[i].name != "Placerton") {
                
            var myArticle = document.createElement('article');
            var myH2 = document.createElement('h2');
            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var myPara4 = document.createElement('p');
            
            myH2.textContent = towns[i].name;
            myPara1.textContent = 'Motto: ' + towns[i].motto;
            myPara2.textContent = 'Founded: ' + towns[i].yearFounded;
            myPara3.textContent = 'Population: ' + towns[i].currentPopulation;
            myPara4.textContent = 'Annual Rainfall: ' + towns[i].averageRainfall;
            
            myArticle.appendChild(myH2);
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);
            myArticle.appendChild(myPara4);

            section.appendChild(myArticle);
            }
          }
        }  