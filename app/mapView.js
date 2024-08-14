import { SafeAreaView, ScrollView } from "react-native";
import { View, Text } from "react-native";
import Screen from "../components/Screen";
import Map from "../components/Map";

export default function mapView() {
  return (
    <Screen>
      <View>
        <View className='h-1/2 bg-gray-500'>
          <Map />
        </View>
        <View className='h-1/2 bg-blue-500'>

        </View>
      </View>
    </Screen>
  );
}
