import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'weather-ln',
  styleUrl: 'weather-ln.css',
})




export class WeatherLn {
 
 

  render() {
 function  widenClose(){
  if(document.getElementById("weather").style.visibility==="unset"){
    document.getElementById("weather").style.visibility="hidden";
  } else {
    document.getElementById("weather").style.visibility="unset";
  }
 }



    const appId: string="9ca27b3b3c74c643772ca6556ca4a8a7";
    

  
    fetch('https://extreme-ip-lookup.com/json/')
  .then( res => res.json())
  .then(response => {
    let country = response.country;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${appId}`).then(result => result.json())
    .then(data => {
       document.getElementById("weather").innerHTML=`<p>Land: ${country} ${Math.round(data.main.temp-273.15)} Grad</p>`;
    });
  
  })
  const divStyle = {
    visibility: 'hidden'
  };
  return (
    <Host>
      <slot>
        
        <div class="OpenWeather"  onClick={widenClose}>GO</div>


      <div id="weather" style={divStyle}></div>


      </slot>
    </Host>
  );
  }

}
