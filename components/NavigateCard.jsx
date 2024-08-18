import { View, Text, TouchableOpacity } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_KEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../reducers/navSlice";

import { useNavigation } from "@react-navigation/native";
import NavFavourites from "./NavFavourites";
import { Icon } from "@rneui/base";

export default function NavigateCard() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <>
      <Text className="text-center py-2 text-xl">Good Morning, Eli</Text>
      <View className="border-t border-gray-200 flex-shrink">
        <View>
          <GooglePlacesAutocomplete
            placeholder="Where to?"
            debounce={400}
            nearbyPlacesAPI="GooglePlacesSearch"
            styles={{
              container: {
                backgroundColor: "white",
                paddingVertical: 10,
                flex: 0,
              },
              textInput: {
                backgroundColor: "#DDDDDF",
                borderRadius: 5,
                fontSize: 18,
              },
              textInputContainer: {
                paddingHorizontal: 20,
              },
            }}
            enablePoweredByContainer={false}
            query={{
              key: GOOGLE_MAPS_KEY,
              language: "en",
            }}
            returnKeyType="search"
            fetchDetails={true}
            minLength={2}
            onPress={(data, details = null) => {
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
        <NavFavourites />
      </View>

      <View className="py-2 mt-auto flex-row justify-evenly border-t border-gray-300">
        <TouchableOpacity
          className="flex flex-row bg-black w-24 px-4 py-3 rounded-full space-x-2"
          onPress={() => navigation.navigate("RideOptionsCard")}
        >
          <Icon name="car" type="font-awesome" color="white" size={16} />
          <Text className="text-white text-center">Rides</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex flex-row bg-gray-300 w-24 px-4 py-3 rounded-full space-x-2">
          <Icon
            name="fast-food-outline"
            type="ionicon"
            color="black"
            size={16}
          />
          <Text className="text-center">Eats</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
