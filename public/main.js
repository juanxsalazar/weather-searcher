let myHour = document.getElementById('hour')
let myMinutes = document.getElementById('minutes')
let mySecond = document.getElementById('second')
let presentDate = document.getElementById('day')

const myClock = () => {
  let now = new Date()
  let hour = now.getHours()
  let minutes = now.getMinutes()
  let second = now.getSeconds()

  if (second < 10) { second = '0' + second }
  if (minutes < 10) { minutes = '0' + minutes }
  if (hour < 10) { hour = '0' + hour }
  let currentDate = now.toDateString()

  presentDate.textContent = currentDate
  myHour.textContent = hour + ':'
  myMinutes.textContent = minutes + ':'
  mySecond.textContent = second
}

setInterval(myClock, 500)



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