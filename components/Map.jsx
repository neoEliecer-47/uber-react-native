
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import { selectOrigin } from "../reducers/navSlice";

export default function Map() {

    const origin = useSelector(selectOrigin)
    console.log(origin)
  return (
    <MapView
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
      style={{
        flex: 1
      }}
      mapType="mutedStandar"
    >
      {origin?.location  && (
        <Marker 
            coordinate={{
                latitude: origin.location.lat,
                longitude: origin.location.lng,
            }}
            title="Origin"
            description={origin.description}
            identifier="origin"
            pinColor="#cbe4ea"
            
        />
      )}
    </MapView>
  );
}
