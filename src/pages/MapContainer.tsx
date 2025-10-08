import React from "react";

interface MapContainerProps {
  type?: "google" | "osm"; // Map type
  center?: { lat: number; lng: number }; // Map center
  zoom?: number; // Zoom level
  width?: string; // Width of map
  height?: string; // Height of map
  marker?: { lat: number; lng: number; label?: string }; // Optional marker
  className?: string; // Additional styling
}

const MapContainer: React.FC<MapContainerProps> = ({
  type = "google",
  center = { lat: 20.5937, lng: 78.9629 },
  zoom = 5,
  width = "100%",
  height = "400px",
  marker,
  className = "",
}) => {
  // Google Maps Embed URL
  const googleMapSrc = `https://www.google.com/maps/embed/v1/view?key=YOUR_GOOGLE_API_KEY&center=${center.lat},${center.lng}&zoom=${zoom}&maptype=roadmap`;

  // OpenStreetMap Embed URL
  const osmMapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${center.lng - 0.5}%2C${center.lat - 0.5}%2C${center.lng + 0.5}%2C${center.lat + 0.5}&layer=mapnik${
    marker ? `&marker=${marker.lat},${marker.lng}` : ""
  }`;

  const src = type === "google" ? googleMapSrc : osmMapSrc;

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      <iframe
        title="Map"
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        className="rounded-lg shadow-md"
      ></iframe>

      {marker && type === "google" && (
        <div
          className="absolute bg-red-500 text-white text-xs px-1 py-[1px] rounded-full"
          style={{
            transform: "translate(-50%, -50%)",
            left: "50%",
            top: "50%",
          }}
        >
          {marker.label || "Marker"}
        </div>
      )}
    </div>
  );
};

export default MapContainer;
