import { SafeAreaView, ScrollView } from "react-native";
import { View, Text } from "react-native";
import Screen from "../components/Screen";

export default function mapView() {
  return (
    <Screen>
      <ScrollView>
        <View>
          <Text>mapView</Text>
        </View>
      </ScrollView>
    </Screen>
  );
}
