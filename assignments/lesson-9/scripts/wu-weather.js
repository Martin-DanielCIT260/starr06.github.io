var weatherObject = new XMLHttpRequest();

weatherObject.open('GET', 'http://api.wunderground.com/api/cb37f191fa75ceaa/conditions/q/MN/Franklin.json', true );

weatherObject.send();

weatherObject.onload = function () {
 
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    document.getElementById('currentWeather').innerHTML = weatherInfo.current_observation.weather;
    document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.temp_f;
    document.getElementById('wind').innerHTML = weatherInfo.current_observation.wind_mph;
    
    document.getElementById('currentIcon').src = weatherInfo.current_observation.icon_url;
}