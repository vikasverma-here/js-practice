const search = document.getElementById("name")
const button = document.getElementById('btn')
const api_key= "a6f32827bba8a0f8d7ef245195b6b946"
const imageIcon=document.getElementById('image_icon')

const api_url= "https://api.openweathermap.org/data/2.5/weather?q="

async function checkweather(city){
    const respose = await fetch(api_url + city + `&appid=${api_key}`)
    const data = await respose.json()
    console.log(data)
    document.getElementById('temprature').innerHTML= Math.round(data.main.temp) 
    document.getElementById('name_of_city').innerHTML= data.name
    document.getElementById('hum').innerHTML=data.main.humidity +"%"
    document.getElementById('hum').innerHTML=data.main.humidity +"%"
    document.getElementById('win').innerHTML=data.wind.speed + " Km/h"
    document.getElementById('type').innerHTML=`${data.weather[0].main}`
    if(data.weather[0].main == 'Clouds'){
        imageIcon.src="images/clouds.png"
    }else if(data.weather[0].main == 'Clear'){
imageIcon.src="images/clear.png"
    }
    else if(data.weather[0].main == 'Drizzle'){
imageIcon.src="images/drizzle.png"
    
    }else if(data.weather[0].main == 'Humidity'){
imageIcon.src="images/humidity.png"
    }
    else if(data.weather[0].main == 'Mist'){
imageIcon.src="images/mist.png"
    }
    else if(data.weather[0].main == 'Rain'){
imageIcon.src="images/rain.png"
    }
    else if(data.weather[0].main == 'Snow'){
imageIcon.src="images/snow.png"
    }
    
    
}
button.addEventListener('click',()=> {
    checkweather(search.value)
})
