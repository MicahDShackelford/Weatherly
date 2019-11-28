import React from 'react';
import convertTemp from '../util/covertTemp';

let CurrentTemp = (props) => {
  console.log(props);
  let conditions = "", temp = 0, loc = 'none';

  if(props.data.data.weather) {
    conditions = props.data.data.weather[0].main;
    temp = convertTemp(props.data.data.main.temp);
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