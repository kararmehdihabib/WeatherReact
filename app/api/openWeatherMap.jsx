var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=dc187baa650feb30e6224e4e191d3afa&units=metric';

module.exports = {
    getTemp: function(location){
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        
        return axios.get(requestUrl).then(function(res){
            
            if(res.data.cod && res.data.message){
               
                throw new Error(res.data.message);
            }else{
                 
                return res.data.main.temp;
                debugger;
            }
        }, function(res){
        
            
            throw new Error(res.data.message);
            
        });
    }
    
}
