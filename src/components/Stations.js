import React from 'react';
// import MyMapComponent from './MyMapComponent'

class Stations extends React.Component {
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
        title:val.TrainId,
        key:val.TrainId,
        name:val.TrainId,
        position:{lat: val.Lat, lng: val.Lon},
          }
        )
    })
  }

  componentDidMount() {
    fetch("https://api.wmata.com/StationPrediction.svc/json/GetPrediction/all?api_key=e13626d03d8e4c03ac07f95541b3091b")
      // .then(results => results)
      .then((response) => {
      return response.json();
      })
      .then((json) => {
        this.setState({
          items: json.Trains,
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
        <pre>
          {JSON.stringify(this.state.items, null, 2)}
        </pre>
      );
    }
  }
}

export default Stations;
