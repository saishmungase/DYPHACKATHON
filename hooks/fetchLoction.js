"use client";

import { useState, useEffect } from "react";

export function useUserCoords() {
  const [coords, setCoords] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoords({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Got No Location!", error);
        }
      );
    }
  }, []);

  return coords;
}
