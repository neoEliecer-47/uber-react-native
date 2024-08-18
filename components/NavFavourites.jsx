import { View, Text, FlatList, TouchableOpacity, ScrollView } from "react-native";
import { Icon } from "@rneui/themed";

const data = [
  {
    id: 1,
    icon: "home",
    location: "Home",
    destination: "Code Street, London UK",
  },
  {
    id: 2,
    icon: "briefcase",
    location: "Work",
    destination: "London Eye, London UK",
  },
  {
    id: 3,
    icon: "briefcase",
    location: "Las Carinosas",
    destination: "La 21",
  },
  {
    id: 4,
    icon: "briefcase",
    location: "pleasure house",
    destination: "La 21 street 21",
  },
];
export default function NavFavourites() {
  return (
    
        <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View className="bg-gray-200 h-1" />}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity className="flex-row items-center p-5">
          <Icon
            style={{
              marginRight: 16,
              borderRadius: 9999,
              backgroundColor: "#c9cccc",
              padding: 12,
            }}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text className="font-semibold text-lg">{location}</Text>
            <Text className="text-gray-500">{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
    
  );
}
