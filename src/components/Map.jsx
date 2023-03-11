import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import { FiMapPin } from "react-icons/fi";
import "./Map.css";
function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCKLVyKT0eh081mxadX1tcrVVrAOVTn5Tw",
    libraries: ["places"],
  });
  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);
  if (loadError) return <div>Error loading maps</div>;

  if (!isLoaded) return <div>Loading maps...</div>;

  return (
    <GoogleMap
      mapContainerClassName="map-container"
      center={center}
      zoom={10}
      options={{
        // Set a minimum height for the map container
        // to ensure it is visible on the page
        minHeight: "400px",
      }}
    >
      <Marker
        position={{ lat: 18.52043, lng: 73.856743 }}
        icon={<FiMapPin />}
      />
    </GoogleMap>
  );
}

export default Map;
