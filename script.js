var temp = document.getElementById('temp');
var cityName = document.getElementById('city');
var humidity = document.getElementById('humidity');
var windspeed = document.getElementById('windspeed');
var searchinput = document.getElementById('searchinput');
var serchbox = document.getElementById('serchbox');
var body_img = document.getElementById('body_img');

var body_data = document.getElementById('body_data');
var deatil = document.getElementById('deatil');
var error = document.getElementById('error-message');

async function checkWeather(city) {
    let Upi_key = 'cefbbe63d5236688c465ed4c02efbae1';
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Upi_key}&units=metric`);
        if (!response.ok) {
            throw new Error('City not found');
        }
        let data = await response.json();

        temp.innerHTML = Math.floor(data.main.temp) + '°C';
        cityName.innerHTML = data.name;
        humidity.innerHTML = data.main.humidity + "%";
        windspeed.innerHTML = data.wind.speed + 'km/h';

        if (data.weather[0].main == "Clouds") {
            body_img.src = 'image/cloud.png';
        } else if (data.weather[0].main == 'Clear') {
            body_img.src = 'image/clear.png';
        } else if (data.weather[0].main == 'Rain') {
            body_img.src = 'image/rain.png';
        } else if (data.weather[0].main == 'Drizzle') {
            body_img.src = 'image/Day Drizzle.png';
        } else if (data.weather[0].main == 'Mist') {
            body_img.src = 'image/mist.png';
        } else if (data.weather[0].main == 'Haze') {
            body_img.src = 'image/haze.png';
        }else if (data.weather[0].main == 'Snow') {
            body_img.src = 'image/snow.png';
        }
      
   


        body_data.style.display = 'flex';
        deatil.style.display = 'flex';
        error.style.display = 'none';
    } catch (err) {
        body_data.style.display = 'none';
        deatil.style.display = 'none';
        error.style.display = 'block';
    }
}

serchbox.addEventListener('click', () => {
    let cityIn = searchinput.value;
    checkWeather(cityIn);
});

