const url = 'http://api.openweathermap.org/data/2.5/weather?&q=California&appid=f2002f7ae07db6bce3da0c22bea3c41f&units=imperial'

//WEATHER API //
function WeatherApi(){
    const []
  useEffect(() => {
    const url ="http://api.openweathermap.org/data/2.5/weather?q=California&units=imperial&appid=f2002f7ae07db6bce3da0c22bea3c41f"
    fetch(url).then(resp=>resp.json())
    .then(resp=>console.log(resp))


    return () => {
      <div>
        <h1>
          Weather API
        </h1>
      </div>
    }
  }, [])


}
  //   const express = require("express");
  //   const http = require("https");
      
  //   const app = express();
      
      
  //   app.get("/", function (req, res) {
      
      
  //   http.get(url, function(response){
  //   console.log(response, statusCode);
          
  //     response.log("data", function(data){
  //       const weatherData = Json.parse(data)
  //       const temp = weatherData.main.temp
  //       const weatherDescription = weatherData[0].description
  //       res.send("The Temperature in California is " + temp + "degress F.");
  //       })
  //     })
        
  //   res.send("Server is up and running.")
  // })
      
  // app.listen(3000, function(){
  //   console.log("server is running on port 3000")
  // })
      
      

    // const [weather, setWeather] =  useState(null) 
    
    // const state = {
    //     weather: undefined,
    //     main: undefined,
    //     name: undefined
    // }
        
    //     const main = e.target.elements.main.values;
    //     const name = e.target.elements.name.value;
    //     e.preventDefault();
        
    //     const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?&q=California&appid=f2002f7ae07db6bce3da0c22bea3c41f&units=imperial')
        
    //     const response = await api_call.json();
    //     console.log(response);
    //     if(main && name){
    //         this.setState({
    //             weather: response.main,
    //             main: response.temp,
    //             name: response

    //         })
    //     }
//     }

//     return {
//         <div>
//             <div className = "container">
//             <div className ="col-xs-7 form-container">
            
//             </div>
//             </div>
//         </div>
//     }

// }