var myDate = function () {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;//January is 0!`

    var yyyy = today.getFullYear();
    if(dd<10){dd='0'+dd}
    if(mm<10){mm='0'+mm}
    var today = mm+'/'+dd+'/'+yyyy;
    return today

}
var weatherFormEl = document.querySelector ("#form-weather");
var cityInputEl = document.querySelector("#findCity");

var formSubmitHandler = function(event){
    event.preventDefault();
    //get value from input form for citi name 
    var cityName = cityInputEl.value.trim();

    if(cityName) {
        getCitiRepos(cityName);
        cityInputEl.value = "";
    }
    else {
        alert("Please enter City name");
    }
 //   console.log(event)
};






// create city var for search form
var getCitiRepos = function (city) {
 var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=82f4ffefa4407cc347782857301fcc38"
console.log ("you was searching for city:" + city)
// make request for the URL
fetch(apiURL).then(function(response){
    response.json().then(function(data){
     displayCityRepos(data, city);
    });
});
};
//getCitiRepos();



weatherFormEl.addEventListener("submit", formSubmitHandler);
 // create function to display repos for City
 var displayCityRepos = function(data, city){
    $("#city-name").text(city)
    $("#currentdate").text(myDate(data.dt))
    //$("#icon").text("https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png")
    $("#icon").html("<img src='https://openweathermap.org/img/wn/' + data.weather[0].icon + '.png'/>")
    $("#temp").text(data.main.temp +  '&#8457;');
    $("#wind").text(data.wind.speed + " MPH");
    // console.log(data.weather[0].icon);
    console.log(city);
    console.log(data.wind.speed);

 }