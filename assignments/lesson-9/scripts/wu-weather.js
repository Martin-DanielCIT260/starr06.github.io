var weatherObject = new XMLHttpRequest();

weatherObject.open('GET', 'http://api.wunderground.com/api/cb37f191fa75ceaa/conditions/q/MN/Franklin.json', true );

weatherObject.send();

weatherObject.onload = function () {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    //console.log(weatherInfo);
    
    document.getElementById('currentWeather').innerHTML = weatherInfo.current_observation.weather;
    document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.temp_f;
    document.getElementById('wind').innerHTML = weatherInfo.current_observation.wind_mph;
    document.getElementById('currentIcon').src = weatherInfo.current_observation.icon_url;
    document.getElementById('feelsLike').innerHTML = weatherInfo.current_observation.feelslike_f
    
}

var weatherForecast = new XMLHttpRequest();

weatherForecast.open('GET', 'http://api.wunderground.com/api/cb37f191fa75ceaa/forecast/q/MN/Franklin.json', true );

weatherForecast.send();

weatherForecast.onload = function () {
    var weatherInfo = JSON.parse(weatherForecast.responseText);
    //console.log(weatherInfo);

    document.getElementById('weatherDesc').innerHTML =weatherInfo.forecast.txt_forecast.forecastday["0"].fcttext;

}
