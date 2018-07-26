// import React from 'react'

// const Trains = () => (
//   <div>
//     <ul>
//       <li> Live Train Positions</li>
//       <li> Trains by line </li>
//       <li> Train by Station </li>
//     </ul>
//   </div>
// )


import React from 'react';

class Trains extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    // https://api.wmata.com/TrainPositions/TrainPositions?contentType={}&
    fetch("https://api.wmata.com/StationPrediction.svc/json/GetPrediction/A10?api_key=e13626d03d8e4c03ac07f95541b3091b")
      // .then(results => results)
      .then((response) => {
      return response.json();
      })
      .then((json) => {
        this.setState({
          items: json,
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

export default Trains;
