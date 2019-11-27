import React from 'react';

let CurrentTemp = (props) => {
  let conditions = "";
  if(props.data.data.weather) {
    conditions = props.data.data.weather[0].main;
  }
  console.log(props.data)
  return (
    <div className="current-temp">
      <h1 className="temp">92&deg;F</h1>
      <h2>{props.data.data.name} - {props.data.zip}</h2>
      <p>{conditions} Skys</p>
    </div>
  )
}

export default CurrentTemp;