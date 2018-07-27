import React from 'react';
import MyMapComponent from './MyMapComponent'

class Trains extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  // Format data ( change bus to train positions )

  formatData=()=> {
    return this.state.items && this.state.items.map(val => {
      return (
        {
        title:val.TrainId,
        key:val.TrainId,
        name:val.TrainId,
        position:{lat: val.Lat, lng: val.Lon},
          }
        )
    })
  }

  componentDidMount() {
    fetch("https://api.wmata.com/StationPrediction.svc/json/GetPrediction/A10?api_key=e13626d03d8e4c03ac07f95541b3091b")
      // .then(results => results)
      .then((response) => {
        console.log(response.json())
      return response.json();
      })
      .then((json) => {
        this.setState({
          items: json.TrainPositions,
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

export default Trains;
