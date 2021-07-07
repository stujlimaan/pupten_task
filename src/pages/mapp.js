import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
    
      <div style={{ height: '80vh', width: '50%', margin:'4vh',marginRight:'-40vh'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBkvDWWDu3vqr2lS9XW8MJYFsYzyvJH_CM" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="welcome"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;