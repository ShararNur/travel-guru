import React from 'react';
import GoogleMapReact from 'google-map-react';
import './map.css';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/map-marker';

const Map = ({ location, zoomLevel }) => {

    return (
        <div className="google-map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: '' }}
                defaultCenter={location}
                defaultZoom={zoomLevel} local
            >
                {/* <LocationPin
                        lat={location.lat}
                        lng={location.lng}
                        text={location.address}
                    /> */}
            </GoogleMapReact>
        </div>
    );
};

export default Map;