import React, { Component } from "react";
import BraftEditor from 'braft-editor';
import { List, Avatar, Rate, Row, Col, Divider, Typography, Modal, Button, Result } from 'antd';
import GoogleMapReact from 'google-map-react';
import "../mixin/main.css";

const MyPositionMarker = ({ text }) => <div>{text}</div>;

export default class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 25.0216697,
            lng: 121.5331016
        },
        zoom: 15
    };
    state = {

        mapApiLoaded: false,
        mapInstance: null,
        mapApi: null,
        myPosition: {
            lat: 25.0216697,
            lng: 121.5331016,
        },
        places: [],
        name: [],

    }
    render() {
        const handleCenterChange = () => {
            // const { mapInstance} = this.state;

            // this.setState({
            //     lat: mapInstance.center.lat(),
            //     lng: mapInstance.center.lng()
            // })

        }
        const apiHasLoaded = (map, maps) => {
            this.setState({
                mapApiLoaded: true,
                mapInstance: map,
                mapApi: maps,
            })
        };

        // 找咖啡廳
        const findCafeLocation = () => {
            const { mapInstance, myPosition, mapApi, name } = this.state;

            const service = new mapApi.places.PlacesService(mapInstance)

            const request = {
                location: myPosition,
                radius: 3000,
                type: ['museum'],
                name: name,
            };

            service.nearbySearch(request, (results, status) => {

                if (status === mapApi.places.PlacesServiceStatus.OK) {
                    this.setState({
                        places: results,
                    })
                    console.log(results)

                }

            })

        }
        const { places, myPosition } = this.state;
        const CafeMarker = ({ icon, text }) => (
            <div>
                <img style={{ height: '30px', width: '30px' }} src={icon} />
                <div>{text}</div>
            </div>
        )
        return (
            <div style={{ height: 800, width: 1200 }}>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: 'AIzaSyBl97Q2qi59q3XyhAypbV8eD89fxvifLLU',
                        libraries: ['places'] // 要在這邊放入我們要使用的 API
                    }}
                    onBoundsChange={handleCenterChange} // 移動地圖邊界時觸發 handleCenterChange
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => apiHasLoaded(map, maps)}

                >
                    <MyPositionMarker
                        lat={myPosition.lat}
                        lng={myPosition.lng}
                        text={<img height="30px" src={'https://www.flaticon.com/svg/static/icons/svg/252/252025.svg'} />}

                    />
                    {places.map(item => (
                        <CafeMarker
                            icon={item.icon}
                            key={item.id}
                            lat={item.geometry.location.lat()}
                            lng={item.geometry.location.lng()}
                            text={item.name}
                            placeId={item.place_id}
                        />
                    ))}
                </GoogleMapReact>
                <div style={{ textAlign: 'center', marginBottom: '20px' ,marginTop:'20px'}}>
                    <Button type="primary" size={'large'} onClick={findCafeLocation} >開始搜尋</Button>
                </div>
            </div>
        )
    }
}

