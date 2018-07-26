import React from 'react';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       error: null,
//       isLoaded: false,
//       items: []
//     };
//   }

//   componentDidMount() {
//     // https://api.wmata.com/TrainPositions/TrainPositions?contentType={}&
//     fetch("https://api.wmata.com/StationPrediction.svc/json/GetPrediction/A10?api_key=e13626d03d8e4c03ac07f95541b3091b")
//       // .then(results => results)
//       .then((response) => {
//       return response.json();
//       })
//       .then((json) => {
//         this.setState({
//           items: json,
//           isLoaded: true
//         })
//       });
//   }

//   render() {
//     const { error, isLoaded, items } = this.state;
//     if (error) {
//       return <div>Error: {error.message}</div>;
//     } else if (!isLoaded) {
//       return <div>Loading...</div>;
//     } else {
//       return (
//         <pre>
//           {JSON.stringify(this.state.items, null, 2)}
//         </pre>
//       );
//     }
//   }
// }

// export default App;

// react router to do some client side routing

// import React from 'react'
import Header from './Header'
import Main from './Main'


const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)

export default App


// landing page - 3 links
// separate components for each page
// redux
// mobx - simpler than redux - packages- one global state for application


