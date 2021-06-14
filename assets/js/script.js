var myDate = function () {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!`

  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  var today = mm + "/" + dd + "/" + yyyy;
  return today;
};
var weatherFormEl = document.querySelector("#form-weather");
var cityInputEl = document.querySelector("#findCity");

var formSubmitHandler = function (event) {
  event.preventDefault();
  //get value from input form for citi name
  var cityName = cityInputEl.value.trim();

  if (cityName) {
    getCitiRepos(cityName);
    cityInputEl.value = "";
  } else {
    alert("Please enter City name");
  }
};

// create function for nested API fetch
//
var getCitiRepos = function (city) {
  // find city long and lat values
  console.log(city);
  var apiURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=imperial&appid=82f4ffefa4407cc347782857301fcc38";

  fetch(apiURL).then(function (cityResponce) {
    return cityResponce.json().then(function (cityResponce) {
      var lat = cityResponce.coord.lat;
      var lon = cityResponce.coord.lon;
      console.log(lat, lon);

      // fetch citi forecast

      var apiURL2 =
        "https://api.openweathermap.org/data/2.5/onecall?lat=" +
        lat +
        "&lon=" +
        lon +
        "&exclude=hourly,minutely&appid=82f4ffefa4407cc347782857301fcc38";

      //daily

      //var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=82f4ffefa4407cc347782857301fcc38"
      console.log("you was searching for city:" + city);
      // make request for the URL
      fetch(apiURL2).then(function (response) {
        response.json().then(function (data) {
          displayCityRepos(data, city);
          console.log("For" + city + "parse data: " + data);
        });
      });
    });
  });
};

weatherFormEl.addEventListener("submit", formSubmitHandler);
// create function to display repos for City
var displayCityRepos = function (data, city) {
  $("#city-name").text(city);
  $("#currentdate").text(myDate(data.current.dt));
  //$("#icon").text("https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png")
  console.log('http://openweathermap.org/img/wn/' + data.current.weather[0].icon + '.png')
  $("#icon").html(
    "<img src='http://openweathermap.org/img/wn/' + data.current.weather[0].icon + '.png'/>"
  );
  $("#temp").text("Temp: " + data.current.dt + "℉");
  $("#wind").text("Wind: " + data.current.wind_speed + " MPH");
  $("#humid").text("Humidity: " + data.current.humidity + " %");

  $("#UVindex").text("UV Index: " + data.current.uvi + " MPH");
  // console.log(data.weather[0].icon);
  console.log(city);
  console.log(data.current.uvi);

//Create list of City's
var cityList = JSON.parse(localStorage.getItem())

};
