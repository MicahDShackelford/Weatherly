import React from 'react';
import CurrentTemp from './Components/CurrentTemp';
import AddLocation from './Components/AddLocation';
import Forecast from './Components/Forecast';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentlocation : {},
      locations : []
    }
  }
  render(){
    return (
      <div className="App">
        <CurrentTemp />
        <AddLocation />
        <Forecast />
      </div>
    );
  }
}

export default App;
