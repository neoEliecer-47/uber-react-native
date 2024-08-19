import { View, Text, Image, ScrollView } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_KEY } from "@env";
import NavOptions from "../NavOptions";
import Screen from "../Screen";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../../reducers/navSlice";
import NavFavourites from "../NavFavourites";

export default function Main() {
  const dispatch = useDispatch();

  return (
    <Screen flex={true}>
      <View className="p-2">
        <Image
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
          className="w-24 h-24 m-2"
          style={{
            resizeMode: "contain",
          }}
        />

        <GooglePlacesAutocomplete
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          placeholder="Where from?"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
            description: {
              fontWeight: "bold",
            },
          }}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            setDestination(null);
          }}
          returnKeyType={"search"}
          fetchDetails={true}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_KEY,
            language: "en",
          }}
        />

        <NavOptions />
      </View>
      <NavFavourites />
    </Screen>
  );
}
