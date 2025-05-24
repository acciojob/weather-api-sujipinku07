//your JS code here. If required.
document.querySelector('.weather-button').addEventListener('click', function(){
	fetch('https://openweathermap.org/2.5/weather?q=London&appid=YOUR-API-KEY')
	.then(response => response.json())
        .then(data => {
            // Extract weather information from the data
            const weatherDescription = data.weather[0].description;
            // Update the weatherData div
            document.querySelector('.weatherData').innerHTML = `Current Weather in London: ${weatherDescription}`;
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
        });
});
})