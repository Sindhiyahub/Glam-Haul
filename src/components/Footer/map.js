import React from 'react';
import GoogleMapReact from 'google-map-react';

const GoogleMap = ({ apiKey, center, zoom }) => {
  return (
    <div style={{ height: '400px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {/* Add markers or other components here */}
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
