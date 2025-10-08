import MapContainer from "../../../pages/MapContainer"

const Contacts = () => {
  return (
    <>
      <div>Contacts</div>
      <div className="space-y-6 p-4">
        <h1 className="text-2xl font-bold">Google Map Example</h1>
        <MapContainer
          type="google"
          center={{ lat: 28.6139, lng: 77.209 }}
          zoom={12}
          width="100%"
          height="500px"
          marker={{ lat: 28.6139, lng: 77.209, label: "Delhi" }}
        />

        <MapContainer
          type="osm"
          center={{ lat: 28.6139, lng: 77.289 }}
          zoom={10}
          width="100%"
          height="400px"
        />

      </div>
    </>
  )
}

export default Contacts