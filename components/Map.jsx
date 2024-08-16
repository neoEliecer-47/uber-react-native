
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import { selectDestination, selectOrigin } from "../reducers/navSlice";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_KEY } from '@env'

export default function Map() {

    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    
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
      {origin && destination && (
        <MapViewDirections 
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_KEY}
          strokeWidth={3}
          strokeColor="black"
        />
      )}
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
