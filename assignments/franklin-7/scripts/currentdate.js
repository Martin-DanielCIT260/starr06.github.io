var d = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var dayIndex = d.getDay();
var dateNum = d.getDate();
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novemeber", "December"];
var monthIndex = d.getMonth();
var year = d.getFullYear();

var formattedDate = days[dayIndex] + ", " + dateNum + " " + month[monthIndex] + " " + year;

document.getElementById("currentDate").innerHTML = formattedDate;