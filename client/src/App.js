import React from 'react';
import CurrentTemp from './Components/CurrentTemp';
import AddLocation from './Components/AddLocation';
import Forecast from './Components/Forecast';
import API_KEY from './config/API_KEY.config';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      currentLocation : {zip: '37912', data: {}},
      locations : []
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData () {
    fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${this.state.currentLocation.zip},us&APPID=${API_KEY}`, {
      method: 'GET'
    }).then((res) => {
      return res.json();
    }).then((res) => {
      this.setState({
        currentLocation: {zip:this.state.currentLocation.zip, data: res}
      });
    })
  }

  render(){
    return (
      <div className="App">
        <CurrentTemp data={this.state.currentLocation} />
        <AddLocation />
        <Forecast />
      </div>
    );
  }
}

export default App;
