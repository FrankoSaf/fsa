import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import "./map.css";

import MapSquare from "./MapSquare";
import { mapStyles } from "../../assets/map";

import EKG from "../../assets/EKG.png";

const Map = ({ location, zoomLevel }) => {
  const [currentLocation, setCurrentLocation] = useState(location);

  useEffect(() => {
    setCurrentLocation(location);
  }, [location]);
  return (
    <section>
      {/* <div class="title_deco">
        <div className="deco_cont">
          <img src={EKG} alt="title decoration" />
        </div>
        <h2>UNSER STANDORT</h2>
      </div> */}
      <div className="map" style={{ position: "relative" }}>
        <div className="google-map">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyBWfVlEwLKClNW6xqX6YKk27v-nG1RVKMY",
            }}
            defaultCenter={currentLocation.center}
            defaultZoom={18}
            options={{
              styles: mapStyles,
            }}
          >
            <LocationPin
              lat={currentLocation.lat}
              lng={currentLocation.lng}
              text={currentLocation.address}
            />
          </GoogleMapReact>
        </div>
        <MapSquare location={currentLocation.name} />
      </div>
    </section>
  );
};
const LocationPin = ({ text }) => (
  <div
    className="pin"
    style={{ position: "absolute", transform: "translate(-50%,-50%)" }}
  >
    <img
      src="https://res.cloudinary.com/dnp7nm4iy/image/upload/c_scale,w_140/v1680344909/MapMarkerFSA_glucbx.png"
      alt="Map marker"
      class="marker"
      style={{ height: "100%;" }}
    />
  </div>
);
export default Map;
