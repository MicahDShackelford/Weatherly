import React from 'react';
import convertTemp from '../util/covertTemp';
import moment from 'moment';

let Forecast = (props) => {
  let formatForecast = () => {
    let forecast = [];
    if(props.data.forecast.list) {
      for(var i = 0; i < props.data.forecast.list.length; i++) {
        let currentDate = moment().format('DD');
        let time = (moment.unix(props.data.forecast.list[i].dt)).format('ha');
        let date = (moment.unix(props.data.forecast.list[i].dt)).format('DD');
        if(currentDate !== date && time === '1pm') {
          let obj = {date: date, forecast: props.data.forecast.list[i]};
          forecast.push(obj);
        }
      }
    }
    return forecast;
  }

  let forecasts = formatForecast();
  console.log(forecasts)
  return (
    <div className="forecast">
      <div className="cont">
        <h2>Five Day Forecast</h2>
      </div>
        <div className="days">
          {forecasts.map((day) => (
            <div className="day">
              <h2>{day.date}</h2>
              <p>{convertTemp(day.forecast.main.temp)}&deg;F</p>
              <p>{day.forecast.weather[0].main}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Forecast;