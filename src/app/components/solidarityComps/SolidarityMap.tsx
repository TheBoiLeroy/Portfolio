"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import CitySearchForm from "@/app/components/solidarityComps/CitySearchForm";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useRef } from "react";


// Fix default icon issue in Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "/leaflet/marker-icon.png",
  iconRetinaUrl: "/leaflet/marker-icon-2x.png",
  shadowUrl: "/leaflet/marker-shadow.png",
});
function FlyToLocation({ lat, lng }: { lat: number; lng: number }) {
  const map = useMap();
  map.flyTo([lat, lng], 13, { duration: 1.5 });
  return null;
}

const exampleReports = [
  { id: 1, lat: 34.0522, lng: -118.2437, type: "Protest", desc: "Peaceful protest at City Hall." },
  { id: 2, lat: 34.0407, lng: -118.2468, type: "ICE", desc: "Unconfirmed ICE presence reported." },
];


export default function SolidarityMap({ reports = [] }: { reports?: any[] }) {
  const [targetLocation, setTargetLocation] = useState<[number, number] | null>(null);

  return (
    <div className="space-y-4">
      <CitySearchForm onLocate={(lat, lng) => setTargetLocation([lat, lng])} />

      <div className="h-[500px] w-full rounded overflow-hidden">
        <MapContainer
          center={[34.0522, -118.2437]}
          zoom={12}
          scrollWheelZoom={true}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Fly the map to the new location when user searches */}
          {targetLocation && <FlyToLocation lat={targetLocation[0]} lng={targetLocation[1]} />}

          {reports.map((report: any) => (
            <Marker key={report.id} position={[report.lat, report.lng]}>
              <Popup>
                <strong>{report.type}</strong>
                <p>{report.description}</p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}