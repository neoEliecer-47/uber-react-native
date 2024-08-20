import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "../reducers/navSlice";

const data = [
  {
    id: "Uber-X-10",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-XL-15",
    title: "UberXL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-LUX-47",
    title: "UberLUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];

export default function RideOptionsCard() {
  const [selectedItem, setSelectedItem] = useState(null);
  const navigation = useNavigation();
  const travelTimeInformation = useSelector(selectTravelTimeInformation)
  
  
  function mileToKilometre(){
    const mile = travelTimeInformation?.distance?.text
  const stringMile = mile?.split(" ")[0]
  const mileNumber = parseFloat(stringMile)

const km = parseFloat(mileNumber * 1.609).toFixed(2)
return km;
  }
  

  return (
    <View className=" bg-white flex-1">
      <View className="">
        <TouchableOpacity
          className="absolute top-3 left-5 z-10 p-2 bg-gray-200 rounded-full"
          onPress={() => navigation.goBack()}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text className="text-center py-5 text-lg">Select a Ride - {mileToKilometre()} km</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            className={`flex-row items-center justify-between px-8 border-t border-gray-100 ${
              item.id === selectedItem?.id && "bg-gray-200"
            }`}
            onPress={() => setSelectedItem(item)}
          >
            <Image
              style={{ width: 100, height: 100, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <View className="-ml-6">
              <Text className="text-xl font-semibold">{item.title}</Text>
              <Text>{travelTimeInformation?.duration?.text}</Text>
            </View>
            <Text className="text-xl">

              {
                new Intl.NumberFormat('en-gb', {
                  style: 'currency',
                  currency: 'USD'
                }).format((travelTimeInformation?.duration?.value * item.multiplier) / 150)
              }
            </Text>
          </TouchableOpacity>
        )}
      />

      <View className="">
        <TouchableOpacity
          disabled={!selectedItem}
          className={`bg-black/70 py-3 m-2 rounded-full ${
            !selectedItem && "bg-black/20"
          }`}
        >
          <Text className="text-center text-white text-xl">
            Choose {selectedItem?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
