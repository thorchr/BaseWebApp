$(document).ready(function(){
	getWeather();
})

function getWeather(searchQuery){
	var url = "https://api.openweathermap.org/data/2.5/weather?q="+searchQuery+"&units=metric&APPID="+apiKey;

	$.ajax(url, {success: function(data){
		$(".city").text(data.name);
		$(".coord").text(data.coord.lon);
		$(".temp").text(data.main.temp);
		$(".wind").text(data.wind.speed);
	}})
}

function searchWeather(){
	var searchQuery = $(".search").val();
	getWeather(searchQuery);
}