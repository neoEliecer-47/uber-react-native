import { View, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_KEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../reducers/navSlice";
import { router } from "expo-router";
import { useNavigation } from "@react-navigation/native";

export default function NavigateCard() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <>
      <Text className="text-center py-5 text-xl">Good Morning, Sonny</Text>
      <View className="border-t border-gray-200 flex-shrink">
        <View>
          <GooglePlacesAutocomplete
            placeholder="Where to?"
            debounce={400}
            nearbyPlacesAPI="GooglePlacesSearch"
            styles={{
              container: {
                backgroundColor: "white",
                paddingTop: 20,
                flex: 0,
              },
              textInput: {
                backgroundColor: "#DDDDDF",
                borderRadius: 0,
                fontSize: 18,
              },
              textInputContainer: {
                paddingHorizontal: 20,
                paddingBottom: 0,
              },
            }}
            enablePoweredByContainer={false}
            query={{
              key: GOOGLE_MAPS_KEY,
              language: "en",
            }}
            returnKeyType="search"
            minLength={2}
            onPress={(data, details = null) => {
              console.log({2: details})
              dispatch(
                setDestination({
                  location: details.geometry?.location,
                  description: data.description,
                })
              );

              navigation.navigate("RideOptionsCard");
            }}
          />
        </View>
      </View>
    </>
  );
}
