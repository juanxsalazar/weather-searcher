const getWeather = () => {
  const searchTerm = document.querySelector('.search-term').value
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=4874272fe78ea13697eb80a62b2b86e9&units=imperial`
  console.log(url)
  fetch (url) 
  .then(resp => {
    return resp.json()
  })
  .then (weatherData => {
    currentWeather = weatherData
    document.querySelector('.weather-type').textContent = 'Current Weather:' + weatherData.weather[0].main
    document.querySelector('.location').textContent = weatherData.name + ', ' + weatherData.sys.country
    document.querySelector('.temp').textContent = 'Current Temperature:' + weatherData.main.temp + '°F'
    document.querySelector('.min-temp').textContent = 'Min Temperature:' + weatherData.main.temp_min + '°F'
    document.querySelector('.max-temp').textContent = 'Max Temperature:' + weatherData.main.temp_max + '°F'
  })
}


document.querySelector('.search').addEventListener('click', getWeather)


// * https://api.openweathermap.org/data/2.5/weather?q=&appid=4874272fe78ea13697eb80a62b2b86e9
//  &units=imperial makes the degrees 