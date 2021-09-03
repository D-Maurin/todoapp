import { TileLayer, MapContainer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../../css/leaflet.css";
import styled from "styled-components";
import RespMarkers from "../RespMarkers";

const FullHeightContainer = styled.div`
  height: calc(100vh - 64px);
`;

function MapPage() {
  return (
    <FullHeightContainer>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <RespMarkers />
      </MapContainer>
    </FullHeightContainer>
  );
}

export default MapPage;
