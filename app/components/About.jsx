var React = require('react');

var About =  React.createClass({
    render: function(){
        return(
            <div>
            <h1 className="text-center">About Component</h1>
            <p>Welcome to about page.</p>
                
            <p>Here are some of the tools I used:</p>
                <ul>
                <li>
                <a href="https://facebook.github.io/react">React</a> -This was the Js Framework used.   
                </li>
                <li>
                <a href="http://openweathermap.org">Open Weather Map</a>- I used open weather map to search for weather data by city name.    
                </li>
                
                </ul>
            </div>
            
        );
    }
});

module.exports  =About;