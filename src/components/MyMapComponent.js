import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React from 'react';

class MyMapComponent extends React.Component {

// spread is ... take all the properies on this object and make it my props
  getMarkers=()=>{
    return this.props.data && this.props.data.map(val => {
      return (
        <Marker
        {...val}
        />
        )
    })
  }


  render(){
    return(
      <Map google={this.props.google} zoom={6}>

        {this.getMarkers()}

        <Marker onClick={this.onMarkerClick}
          name={'Current location'}/>
        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>{console.log(this)}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyDggNixXJa00YBtnM82MIPdt2vL2fR4nZU")
})(MyMapComponent)

