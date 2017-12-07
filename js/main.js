//weather api endpoint
var api_root = 'http://api.openweathermap.org/data/2.5/weather?zip='

//api key
var api_key = '1040a1d025c0098c4b28f52573fc1ba8'

//select element from the dom
constcity_name = document.querySelector('#city_name')
var zip = document.querySelector('.searchBox')
var weather = document.querySelector('.weather')
var temp = document.querySelector('.temp')
var humid = document.querySelector('.humid')
var convert = document.querySelector('.convert')
var temper
var state = true
var w = document.querySelector('#iconBox')

function kelvinToFarenheit(kelvin){
    return Math.round(kelvin * (9/5) - 459.67)
}


function FarenheitToCelcius(farenheit){
    return Math.round((farenheit - 32) * 5/9)
}

function addIcon(w){
  if (w == "Cloudy"){
      icon.src = `img/cloudy.png`
  }
  if (w == "pPrtly-cloudy"){
      icon.src = `img/partly-cloudy.png`
  }
  if (w == "Rain"){
      icon.src = `img/Rain.png`
  }
  if (w == "Snow"){
      icon.src = `img/Snow.png`
  }
  if (w == "Sun"){
      icon.src = `img/Sun.png`
  }
  
 }
  if (w == "Thunderstorm"){
      icon.src = `img/Thunderstorm.png`
  }
  if (w == "Clouds"){
      icon.src = `img/Clouds.png`
  }
  if (w == "Clear"){
      icon.src = `img/Clear.png`
  }



function getWeather(zipCode){
    $.ajax({
        type: 'GET',
        url: `${api_root}${zipCode},us&appid=${api_key}`,
        dataType: 'json',
        success: function(data){
            console.log(data.weather[0].main)
            temper = kelvinToFarenheit(data.main.temp)
            weather.textContent = data.weather[0].main
            addIcon(data.weather[0].main)
            city_name.textContent = data.name
            console.log(kelvinToFarenheit(data.main.temp))
            temp.innerHTML = `${temper} &deg F;`
            humid.textContent = `${data.main.humidity}%`
        },
        error: function(error){
            console.log(error)
        }
    })
}





getWeather('33166')
zip.addEventListener('keypress', function(e){
    if(e.keyCode == 13){
        getWeather(this.value)
    }
})

convert.addEventListener('click', function(){
    //console.log(FarenheitToCelcius(temper))
    if(state == true){ 
        temp.innerHTML = `${FarenheitToCelcius(temper)} &deg C`
        state = false
    }else {
        temp.innerHTML = `${temper} &deg F;`
        state = true
    }
    
})