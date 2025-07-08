import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import React, { useRef } from "react";

const containerStyle = {
  width: "100%",
  height: "35rem",
};

const center = {
  lat: 21.0278,
  lng: 105.8342,
};

const MapSection: React.FC = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAbyg3XLgopwfAV-X4foXP1smnYN6hIM-Q",
  });

  const mapRef = useRef<google.maps.Map | null>(null);

  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    mapRef.current = map;
    map.setZoom(6);
  }, []);

  const onUnmount = React.useCallback(function callback() {
    mapRef.current = null;
  }, []);

  if (loadError) {
    return <div>Lỗi tải bản đồ: {loadError.message}</div>;
  }

  return isLoaded ? (
    <section className="bg-gray-100">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={6}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={center} />
      </GoogleMap>
    </section>
  ) : (
    <div className="py-20 px-6 bg-gray-100 flex justify-center items-center h-full">
      Đang tải bản đồ...
    </div>
  );
};

export default MapSection;
