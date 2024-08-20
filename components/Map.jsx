import MapView, { Marker } from "react-native-maps";
import { useDispatch, useSelector } from "react-redux";
import { selectDestination, selectOrigin, setTravelTimeInformation } from "../reducers/navSlice";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_KEY } from "@env";
import { useEffect, useRef } from "react";
import axios from 'axios'

export default function Map() {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);
  const dispatch = useDispatch()

  const origin1= 'Madrid, Spain'
  const des2= 'Barcelona, Spain'

  useEffect(() => {
    if (!origin || !destination || !mapRef.current) return;

    setTimeout(() => {
      mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
        edgePadding: { top: 150, right: 50, bottom: 50, left: 50 },
        animated: true,
      });
    }, 1000);

    //zoom and fit to markers
  }, [origin, destination, mapRef]);

  useEffect(() => {
    if (!origin || !destination) return;
    
    //dispatch(setTravelTimeInformation(data))
      async function getTravelTime() {
        fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?&destinations=${destination.description}&origins=${origin.description}&units=imperial&key=${GOOGLE_MAPS_KEY}`)
        .then((res)=> res.json())
        .then((data)=> {
          dispatch(setTravelTimeInformation(data.rows[0].elements[0]))
          console.log(data.rows[0].elements[0])
        })                
       }
       getTravelTime();
    

  }, [origin, destination, GOOGLE_MAPS_KEY]);

  return (
    <MapView
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
      style={{
        flex: 1,
      }}
      mapType="mutedStandar"
      ref={mapRef}
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
      {origin?.location && (
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

      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="Destination"
          description={destination.description}
          identifier="destination"
          pinColor="#cbe4ea"
        />
      )}
    </MapView>
  );
}
