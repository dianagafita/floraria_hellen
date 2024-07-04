// "use client";
// import React, { useState } from "react";
// import {
//   GoogleMap,
//   useLoadScript,
//   DistanceMatrixService,
// } from "@react-google-maps/api";

// const DistanceCalculator = ({ destination }) => {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
//   });

//     if (!isLoaded) return; // Ensure Google Maps API is loaded

//     const origin = { lat: 47.5547159, lng: 25.8912127 }; // San Francisco

//     const service = new window.google.maps.DistanceMatrixService();
//     service.getDistanceMatrix(
//       {
//         origins: [origin],
//         destinations: [destination],
//         travelMode: "DRIVING",
//       },
//       (response, status) => {
//         if (status === "OK") {
//           const distanceInMeters = response.rows[0].elements[0].distance.value;
//           setDistance(distanceInMeters);
//         } else {
//           console.error("Error fetching data: ", status);
//         }
//       }
//     );
//   return
// };

// export default DistanceCalculator;
// import { useLoadScript } from "@react-google-maps/api";

// const calculateDistance = (destination, setDistance) => {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
//   });

//   if (!isLoaded) {
//     console.error("Google Maps API not loaded.");
//     return;
//   }

//   const origin = { lat: 47.5547159, lng: 25.8912127 }; // San Francisco

//   const service = new window.google.maps.DistanceMatrixService();
//   service.getDistanceMatrix(
//     {
//       origins: [origin],
//       destinations: [destination],
//       travelMode: "DRIVING",
//     },
//     (response, status) => {
//       if (status === "OK") {
//         const distanceInMeters = response.rows[0].elements[0].distance.value;
//         setDistance(distanceInMeters);
//       } else {
//         console.error("Error fetching data: ", status);
//       }
//     }
//   );
// };

// export default calculateDistance;
// import { useState } from "react";
// import { getDistance } from "@/components/util/calculateDeliveryFee"; // Import your distance calculation function
// import { useLoadScript } from "@react-google-maps/api";

// const calculateDistance = async (destination, setDistance) => {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
//   });

//   if (!isLoaded) {
//     console.error("Google Maps API not loaded.");
//     return;
//   }

//   const origin = { lat: 47.5547159, lng: 25.8912127 }; // San Francisco

//   const service = new window.google.maps.DistanceMatrixService();
//   service.getDistanceMatrix(
//     {
//       origins: [origin],
//       destinations: [destination],
//       travelMode: "DRIVING",
//     },
//     (response, status) => {
//       if (status === "OK") {
//         const distanceInMeters = response.rows[0].elements[0].distance.value;
//         setDistance(distanceInMeters);
//       } else {
//         console.error("Error fetching data: ", status);
//       }
//     }
//   );
// };

// export default calculateDistance;
// calc.js

const calculateDistance = async (
  destination,
  setDistance,
  isLoaded,
  loadError
) => {
  if (loadError) {
    console.error("Error loading Google Maps:", loadError);
    return;
  }

  if (!isLoaded) {
    console.error("Google Maps API not loaded.");
    return;
  }

  // Continue with your distance calculation logic using Google Maps services
  const origin = { lat: 47.5547159, lng: 25.8912127 }; // San Francisco

  const service = new window.google.maps.DistanceMatrixService();
  service.getDistanceMatrix(
    {
      origins: [origin],
      destinations: [destination],
      travelMode: "DRIVING",
    },
    (response, status) => {
      if (status === "OK") {
        const distanceInMeters = response.rows[0].elements[0].distance.value;
        setDistance(distanceInMeters);
      } else {
        console.error("Error fetching data: ", status);
      }
    }
  );
};

export default calculateDistance;
