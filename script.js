var apiKey = '2a5e17a287c640fed3ee226ac9b0ebec'
var city = 'Los Angeles, CA'
var cityInput = $("#input").val(); //saves the city that has been entered

var cityDataUrl = 'api.openweathermap.org/data/2.5/weather?q='+ city + '&appid=' + apiKey;

fetch(cityDataUrl)

.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });