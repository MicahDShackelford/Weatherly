import React from 'react';

let CurrentTemp = (props) => {
  let conditions = "", temp = 0, loc = 'none';

  if(props.data.data.weather) {
    conditions = props.data.data.weather[0].main;
    temp = Math.round(props.data.data.main.temp * (9/5) - 459.67);
    loc = props.data.data.name;
  }

  return (
    <div className="current-temp">
      <h1 className="temp">{temp}&deg;F</h1>
      <h2>{loc} - {props.data.zip}</h2>
      <p>{conditions}</p>
    </div>
  )
}

export default CurrentTemp;