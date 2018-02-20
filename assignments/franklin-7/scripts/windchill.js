//function doInputOutput() {
//	var t = parseFloat(document.getElementById('Temperature').value);
//	var s = parseFloat(document.getElementById('Wind Speed').value);

var t = (90 + 66) / 2;
var s = 5;

var ans = windChill(t, s);
	document.getElementById('feelsLike').innerHTML = ans;
	//document.getElementById('outputDiv').innerHTML = "With wind chill the" +
	//" temperature is " + ans.toFixed(00) + " degrees Farhrenheit.";

function windChill(tempF, speed) {
	var f = 35.74 + .6215 * tempF - 35.75 * Math.pow(speed, .16) +
	.4275 * tempF * Math.pow(speed, .16);
	return f.toFixed(00);
}