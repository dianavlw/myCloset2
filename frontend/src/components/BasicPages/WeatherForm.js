import React from 'react';

function WeatherForm(props) {
  return (
     <div className="weather-info">
    {
        this.props.country && this.props.city && <p className="weather__key">Location: 
            <span className="weather__value">  {this.props.city}, {this.props.country}</span>                    
        </p> 
    }
    
    {
        this.props.temperature && <p className="weather__key">Temperature: 
            <span className="weather__value">  {this.props.temperature}</span>
        </p>
    }
    </div>
  );
}

export default WeatherForm;