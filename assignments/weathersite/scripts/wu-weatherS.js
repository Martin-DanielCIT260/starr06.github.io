var weatherObject = new XMLHttpRequest();

weatherObject.open('GET', '//api.wunderground.com/api/cb37f191fa75ceaa/conditions/q/IL/Springfield.json', true );

weatherObject.send();

weatherObject.onload = function () {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    document.getElementById('currentWeather').innerHTML = weatherInfo.current_observation.weather;
    document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.temp_f;
    document.getElementById('wind').innerHTML = weatherInfo.current_observation.wind_mph;
    document.getElementById('currentIcon').src = weatherInfo.current_observation.icon_url;
    document.getElementById('feelsLike').innerHTML = weatherInfo.current_observation.feelslike_f
    
}

var weatherForecast = new XMLHttpRequest();

weatherForecast.open('GET', '//api.wunderground.com/api/cb37f191fa75ceaa/forecast/q/IL/Springfield.json', true );

weatherForecast.send();

weatherForecast.onload = function () {
    var weatherInfo = JSON.parse(weatherForecast.responseText);
    //console.log(weatherInfo);

    document.getElementById('weatherDesc').innerHTML =weatherInfo.forecast.txt_forecast.forecastday["0"].fcttext;

}

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
        var i = 3;        
        if (towns[i].name = "Springfield") {
                
            var myArticle = document.createElement('article');
            var myH2 = document.createElement('h2');
            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var myPara4 = document.createElement('p');
            var myPara5 = document.createElement('p');
            
            
            myH2.textContent = towns[i].name;
            myPara1.textContent = 'Motto: ' + towns[i].motto;
            myPara2.textContent = 'Founded: ' + towns[i].yearFounded;
            myPara3.textContent = 'Population: ' + towns[i].currentPopulation;
            myPara4.textContent = 'Annual Rainfall: ' + towns[i].averageRainfall;
            myPara5.textContent = 'Town Events: ' + towns[i].events;
            
            myArticle.appendChild(myH2);
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);
            myArticle.appendChild(myPara4);
            myArticle.appendChild(myPara5);

            section.appendChild(myArticle);
        }
          
}  
