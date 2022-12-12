const APIKey = "2911c69a549d605a7b39cee66f6fdeae";
var cityNameEl = document.getElementById("city-name");
var icon = document.getElementById("icon");

var currentTemp = document.getElementById("Temp");
var currentWind = document.getElementById("Wind");
var currentHumidity = document.getElementById("Humidity");
var currentWeather = document.getElementById("current-weather");

var enterCity = document.getElementById("enter-city");
var searchBtn = document.getElementById("search-button");
var fivedayForecast = document.getElementById("fiveday-forecast");
var historySearch = document.getElementById("history");
var searchesEl = JSON.parse(localStorage.getItem("search")) || [];
