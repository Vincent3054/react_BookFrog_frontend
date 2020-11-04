import React, { Component } from "react";
import BraftEditor from 'braft-editor';
import { List, Avatar, Rate, Row, Col, Divider, Typography, Modal, Button, Result } from 'antd';
import GoogleMapReact from 'google-map-react';
import "../mixin/main.css";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const findCafeLocation = () => {
    if(mapApiLoaded) {
      const service = new mapApi.places.PlacesService(mapInstance)

      const request = {
        location: myPosition,
        radius: 1000,
        type: ['cafe']
      };

      service.nearbySearch(request, (results, status) => {
        if(status === mapApi.places.PlacesServiceStatus.OK) {
          console.log(results)
        }
      })
    }
  }

export default class SimpleMap  extends Component {
    static defaultProps = {
        center: {
            lat: 25.0216745,
            lng: 121.5331069
        },
        zoom: 18
    };

    render() {
        return (
            <div style={{ height: 800, width: 1200 }}>
                <input type="button" value="找咖啡廳" onClick={findCafeLocation} />
                <GoogleMapReact
                
                    bootstrapURLKeys={{ key:'AIzaSyBl97Q2qi59q3XyhAypbV8eD89fxvifLLU' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        )
    }
}

