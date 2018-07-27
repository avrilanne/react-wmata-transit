import React from 'react';
import MyMapComponent from './MyMapComponent'

class Buses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  formatData=()=> {
    return this.state.items && this.state.items.map(val => {
      return (
        {
        title:val.VehicleID,
        key:val.VehicleID,
        name:val.VehicleID,
        position:{lat: val.Lat, lng: val.Lon},
          }
        )
    })
  }

  componentDidMount() {
    fetch("https://api.wmata.com/Bus.svc/json/jBusPositions?api_key=e13626d03d8e4c03ac07f95541b3091b")
      .then((response) => {
      return response.json();
      })
      .then((json) => {
        this.setState({
          items: json.BusPositions,
          isLoaded: true
        })
      });
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <MyMapComponent
        data={this.formatData()}
        />
      );
    }
  }
}

export default Buses;
