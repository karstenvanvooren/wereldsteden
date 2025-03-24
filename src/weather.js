const API_KEY = '70444a013a9d9b6c2d07e8288c260d4f';
const cities = ['New York', 'Tokyo', 'Kaapstad', 'Sydney', 'Rio de Janeiro'];

async function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return Math.round(data.main.temp); // Temperatuur afronden
  } catch (error) {
    console.error(`Fout bij ophalen van weer voor ${city}:`, error);
    return '❌';
  }
}

function updateWeather() {
  document.querySelectorAll('.swiper-slide').forEach(async (slide, index) => {
    const tempElement = slide.querySelector('.temperature');
    tempElement.innerHTML = '⏳'; 
    
    const temp = await fetchWeather(cities[index]);
    tempElement.innerHTML = `${temp}°C 🌡️`; // Afgeronde temperatuur weergeven
  });
}

updateWeather();