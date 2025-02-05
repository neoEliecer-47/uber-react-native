import { Icon } from "@rneui/themed";
import { router } from "expo-router";

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../reducers/navSlice";

const data = [
  {
    id: "1",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    view: "map",
  },
  {
    id: "2",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    view: "eats",
  },
];

export default function NavOptions() {
  const origin = useSelector(selectOrigin);

  function originDetector(item) {
    if (!origin) return alert("please, type your location");
    router.navigate(`(views)/${item.view}`);
  }

  return (

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => originDetector(item)}
            className="p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40"
          >
            <View className={`${!origin && "opacity-40"}`}>
              <Image
                source={{
                  uri: item.image,
                }}
                className="w-28 h-28"
                style={{ resizeMode: "contain" }}
              />
              <Text className="mt-2 text-lg font-semibold text-center">
                {item.title}
              </Text>
              <Icon
                type="antdesign"
                name="arrowright"
                color="white"
                style={{
                  padding: 2,
                  backgroundColor: "black",
                  borderRadius: 9999,
                  width: 30,
                  marginTop: 16,
                }}
              />
            </View>
          </TouchableOpacity>
        )}
      />
    
  );
}
