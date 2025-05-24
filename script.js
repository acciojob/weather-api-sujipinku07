document.querySelector('#getWeatherBtn').addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=d2b7bc546a476ee61d5675dfb844c8c0')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Extract weather information from the data
            const weatherDescription = data.weather[0].description;
            // Update the weatherData div
            document.querySelector('#weatherData').innerHTML = `Current Weather in London: ${weatherDescription}`;
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
        });
});