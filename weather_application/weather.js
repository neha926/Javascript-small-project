let clicky = document.getElementById("search_icon");
let weatherIcon=document.getElementById("weather_icon");
let cityInputBox=document.getElementById("city_input_box")
let locationSection=document.getElementById("location_section")
let infoSection=document.getElementById("info_section")
let humidityWindSection=document.getElementById("humidity_wind_section")
clicky.addEventListener("click",async () => {
  let userInput = document.getElementById("input_city").value;
  
  clicky.style.transform = "scale(1.09)";
  
  let weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=86d912426f05d02e08a35573ef1a46a0`;
  let weatherApiFetchResponse= await fetch(weatherApi);
  let weatherReport=await weatherApiFetchResponse.json();
  console.dir(weatherReport)
  
  
  document.getElementById("loc_name").textContent=weatherReport.name;;
  document.getElementById("weather_desc").textContent=weatherReport.weather[0].description;
  document.getElementById("humidity_val").textContent=`${weatherReport.main.humidity}%`;
  document.getElementById("wind_speed_val").textContent=`${weatherReport.wind.speed}m/s`;
  document.getElementById("weather_temp_val").innerHTML=
  `
    ${Math.floor(weatherReport.main.temp-273.15)}<sup>0</sup>C</span>
  `
  weatherIconID=weatherReport.weather[0].id;
  if(weatherIconID==800){
    weartherIcon.src=`/assets/images/Clear.jpeg`
  }
  else if(200>=weatherIconID && weatherIconID<=232){
    weatherIcon.src=`/assets/images/Thunderstorm.png`
  }
  else if(300>=weatherIconID && weatherIconID<=321){
    weatherIcon.src=`/assets/images/Drizzle.png`

  }
  else if(500>=weatherIconID && weatherIconID<=531){
    weatherIcon.src=`/assets/images/Rain.jpeg`
  }
  else if(600<=weatherIconID<=622){
    weartherIcon.src=`/assets/images/Snow.jpeg`
  }
  else if(weatherIconID==701){
    weartherIcon.src=`/assets/images/Mist.jpeg`
  }
  else if(weatherIconID==711){
    weartherIcon.src=`../../assets/images/Smoke.png`
  }
  else if(weatherIconID==721){
    weartherIcon.src=`../../assets/images/Haze.png`
  }
  else if(weatherIconID==731 && weatherIconID==761){
    weartherIcon.src=`../../assets/images/Dust.png`
  }
  else if(weatherIconID==741){
    weartherIcon.src=`../../assets/images/Fog.png`
  }
  else if(weatherIconID==751){
    weartherIcon.src=`../../assets/images/Sand.png`
  }
  else if(weatherIconID==762){
    weartherIcon.src=`../../assets/images/Ash.png`
  }
  else if(weatherIconID==771){
    weartherIcon.src=`../../assets/images/Squall.png`
  }
  else if(weatherIconID==781){
    weartherIcon.src=`../../assets/images/Tornado.png`
  }
  else if(801<=weatherIconID<=804){
    weatherIcon.src=`../../assets/images/Clouds.png`
  }
  cityInputBox.value="";
  
});
cityInputBox.addEventListener("focus",()=>{
  locationSection.style.display="none";
  infoSection.style.display="none";
  humidityWindSection.style.display="none"


})
