import useResps from "../hooks/useResps";
import { Marker, Popup, FeatureGroup, useMap } from "react-leaflet";
import { useEffect, useRef } from "react";

import ReactDOMServer from "react-dom/server";
import PersonPinIcon from "@material-ui/icons/PersonPin";

import L from "leaflet";
import { Table, TableBody, TableCell, TableRow } from "@material-ui/core";
import moment from "moment";

const icon = L.divIcon({
  className: "custom-icon",
  html: ReactDOMServer.renderToString(<PersonPinIcon fontSize="large" />),
  iconSize: [35, 35],
  iconAnchor: [17, 35],
  popupAnchor: [0, -35],
});

function RespMarkers() {
  const resps = useResps();

  const map = useMap();
  const group = useRef();

  useEffect(() => {
    map.fitBounds((group as any).current.getBounds());
  }, [map]);

  return (
    <FeatureGroup ref={group as any}>
      {Object.values(resps).map((resp) => (
        <Marker icon={icon} position={[resp.address.lat, resp.address.lng]}>
          <Popup>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Prénom</TableCell>
                  <TableCell>{resp.firstName}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Nom</TableCell>
                  <TableCell>{resp.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Date de naissance</TableCell>
                  <TableCell>
                    {moment(resp.birthday).format("DD/MM/YYYY")}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Adresse</TableCell>
                  <TableCell>{resp.address.label}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Popup>
        </Marker>
      ))}
    </FeatureGroup>
  );
}
export default RespMarkers;
