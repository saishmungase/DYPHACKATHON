"use client"

import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const MapComponent = () => {
  useEffect(() => {
    let map;    
    const initMap = () => {
      // Check if the map container is already initialized
      const container = L.DomUtil.get('map');
      if (container != null) {
        container._leaflet_id = null; // Reset the Leaflet ID to avoid conflicts
      }

      // Initialize the map
      map = L.map('map').setView([19.0760, 72.8777], 11);

      // Add OpenStreetMap layer
      const OSM_URL = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
      const OSM_ATTRIB = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors';
      const osmLayer = L.tileLayer(OSM_URL, { attribution: OSM_ATTRIB });
      osmLayer.addTo(map);

      // Add WAQI Air Quality layer
      const WAQI_URL = "https://tiles.waqi.info/tiles/usepa-aqi/{z}/{x}/{y}.png?token=_TOKEN_ID_";
      const WAQI_ATTR = 'Air Quality Tiles &copy; <a href="http://waqi.info">waqi.info</a>';
      const waqiLayer = L.tileLayer(WAQI_URL, { attribution: WAQI_ATTR });
      waqiLayer.addTo(map);
    };

    initMap();

    // Cleanup function to remove the map instance on component unmount
    return () => {
      if (map) {
        map.remove();
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return <div id="map" style={{ height: '550px' }} />;
};

export default MapComponent;


