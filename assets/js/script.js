// create city var for search form
var getCitiRepos = function (city) {
 var apiURL = "https://pro.openweathermap.org/data/2.5/forecast/hourly?q=" + city + "&appid=82f4ffefa4407cc347782857301fcc38"

// make request for the URL
fetch(apiURL).then(function(response){
    response.json().then(function(data){
        console.log(data);
    });
});
};
getCitiRepos("Scottsdale");

var weatherFormEl = document.querySelector ("#form-weather");
var citiInputEl = document.querySelector("#findCity");

var formSubmitHandler = function(event){
    event.preventDefault();
    console.log(event)
}

weatherFormEl.addEventListener("submit", formSubmitHandler);