'use client';

import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';

interface DynamicMapProps {
  latitude: number;
  longitude: number;
  companyName: string;
  address: string;
}

export default function DynamicMap({ latitude, longitude, companyName, address }: DynamicMapProps) {
  const [Map, setMap] = useState<any>(null);

  useEffect(() => {
    // Only import Leaflet and related modules on the client side
    Promise.all([
      import('leaflet'),
      import('react-leaflet'),
    ]).then(([L, { MapContainer, TileLayer, Marker, Popup }]) => {
      // Configure the icon
      const icon = L.icon({
        iconUrl: '/marker-icon.png',
        iconRetinaUrl: '/marker-icon-2x.png',
        shadowUrl: '/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });

      // Create the map component
      setMap(
        <div className="w-full h-[600px] rounded-lg overflow-hidden">
          <MapContainer
            center={[latitude, longitude]}
            zoom={15}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[latitude, longitude]} icon={icon}>
              <Popup>
                <div className="text-center">
                  <h3 className="font-bold">{companyName}</h3>
                  <p>{address}</p>
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      );
    });
  }, [latitude, longitude, companyName, address]);

  if (!Map) {
    return <div className="w-full h-[600px] bg-gray-200 animate-pulse rounded-lg"></div>;
  }

  return Map;
} 