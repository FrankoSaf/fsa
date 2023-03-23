import React from "react";
import GoogleMapReact from "google-map-react";
import "./map.css";
import { ImLocation2 } from "react-icons/im";
import MapSquare from "./MapSquare";
import { mapStyles } from "../../assets/map";
import mapMarker from "../../assets/images/MapMarkerFSA.png";
const Map = ({ location, zoomLevel }) => {
  return (
    <div className="map" style={{ position: "relative" }}>
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBWfVlEwLKClNW6xqX6YKk27v-nG1RVKMY" }}
          defaultCenter={location.center}
          defaultZoom={zoomLevel}
          options={{
            styles: mapStyles,
          }}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
      <MapSquare />
    </div>
  );
};
const LocationPin = ({ text }) => (
  <div
    className="pin"
    style={{ position: "absolute", transform: "translate(-50%,-50%)" }}
  >
    <img src={mapMarker} alt="" className="marker" style={{ height: "100%" }} />
  </div>
);
export default Map;
