// "use client";

// import { GoogleMap, Marker } from "@react-google-maps/api";

// // Map's styling
// export const defaultMapContainerStyle = {
//   width: "50%",
//   height: "50vh",
//   borderRadius: "15px 0px 0px 15px",
// };

// const defaultMapCenter = {
//   lat: 47.5547801,
//   lng: 25.8911297,
// };
// const defaultMapZoom = 18;

// const defaultMapOptions = {
//   zoomControl: true,
//   tilt: 0,
//   gestureHandling: "auto",
//   mapTypeId: "roadmap",
// };

// const MapComponent = () => {
//   return (
//     <div className="w-full m-5">
//       <GoogleMap
//         mapContainerStyle={defaultMapContainerStyle}
//         center={defaultMapCenter}
//         zoom={defaultMapZoom}
//         options={defaultMapOptions}
//       >
//         <Marker position={defaultMapCenter} />
//       </GoogleMap>
//     </div>
//   );
// };

// export { MapComponent };
"use client";
import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

export default function MapComponent({ address }) {
  const mapRef = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      version: "weekly",
    });

    loader.load().then(() => {
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address: address }, (results, status) => {
        if (status === "OK") {
          const map = new google.maps.Map(mapRef.current, {
            center: results[0].geometry.location,
            zoom: 18,
          });
          new google.maps.Marker({
            map: map,
            position: results[0].geometry.location,
          });
        } else {
          console.error(
            `Geocode was not successful for the following reason: ${status}`
          );
        }
      });
    });
  }, [address]);

  return <div className=" w-full h-full" ref={mapRef} />;
}
