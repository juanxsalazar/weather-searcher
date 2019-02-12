const getWeather = () => {
  // function for getting weather
  const searchTerm = document.querySelector('.search-term').value
  //  ^ allows the search input text to specify the place we want to see weather of
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=4874272fe78ea13697eb80a62b2b86e9&units=imperial`
//  ^ api url where we will get the weather.  $ {} is the string interpolation where the directory will happen. 
  console.log(url)
  // ^ console.log (checks to see if it actual works on inspect console)
fetch ('https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=4874272fe78ea13697eb80a62b2b86e9&units=imperial')
//  ^ this is the promise that lets us fetch the url
.then(response => response.json())


  // make get request to weather api
  // parse results
  // add current weather to html
}





document.querySelector('.search').addEventListener('click', getWeather)
// ^ allows button to work 

// * https://api.openweathermap.org/data/2.5/weather?q=&appid=4874272fe78ea13697eb80a62b2b86e9
//  &units=imperial makes the degrees in farenheight 