import React from 'react';
import{ Map, TileLayer, Marker } from 'react-leaflet';
import geolocated from 'react'
const DEFAULT_LANGITUDE =-123;
const DEFAULT_LATITUDE =48;

class App extends React.Component {
  render(){
  const langitude =this.props.coords ? this.props.coords.langitude:DEFAULT_LANGITUDE
  const latitude =this.props.coords ? this.props.coords.latitude:DEFAULT_LATITUDE
  return (
    <Map center={[DEFAULT_LATITUDE ,DEFAULT_LANGITUDE]} zoom={1}>
 
 <tileLayer 
 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
 attribution='&copy; <a href="http://osm.org/copyright">openStret</a>contributors'
 />
{
  !this.props.coords?
  <div className="lowding">lowww</div>
  :
  <Marker
  position={[langitude, latitude]}>
    <Popup>YOU ARE HERE</Popup>
  </Marker>
}


    </Map>

  );
}
}
export default geolocated({
positionOptions:{
  enableHighAccuracy:false
}
,
userDecisionTimeout:10000
})
(App)
