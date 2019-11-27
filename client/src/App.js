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
    // let exdata = {"coord":{"lon":-86.88,"lat":35.93},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"base":"stations","main":{"temp":286.68,"pressure":1019,"humidity":33,"temp_min":284.15,"temp_max":289.26},"visibility":16093,"wind":{"speed":5.7,"deg":260,"gust":8.2},"rain":{"1h":0.25},"clouds":{"all":1},"dt":1574883051,"sys":{"type":1,"id":4609,"country":"US","sunrise":1574858144,"sunset":1574894091},"timezone":-21600,"id":0,"name":"Franklin","cod":200};

    // this.setState({
    //   currentLocation : {zip: '37912', data : exdata}
    // })
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
