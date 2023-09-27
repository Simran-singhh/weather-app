
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

  const getWeather=(city)=>{
    // let cityName=document.getElementsByClassName("cityName");
   
	const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
	  fetch(url, options).then(response=>response.json())
     .then(response=>{console.log(response)

    //    cloud_pct.innerHTML =response.cloud_pct,
       Feels_like.innerHTML =response. feels_like,
       Humidity.innerHTML =response.humidity ,
       Max_temp.innerHTML =response.max_temp,
       Min_temp.innerHTML =response.min_temp,
       Sunrise.innerHTML =response.sunrise,
       Sunset.innerHTML =response.sunset,
       Temp.innerHTML=response.temp,
       Wind_degrees.innerHTML =response. wind_degrees,
      Wind_speed.innerHTML =response.wind_speed 
     })
     .then((respons)=> cityName.innerHTML=city.toUpperCase())
	.catch(err=>console.error(err));
  }

  let submit=document.getElementById("submit");
  submit.addEventListener('click',(e)=>{
    e.preventDefault();
     console.log(city.value);
     getWeather(city.value);
  })
  getWeather("delhi");
