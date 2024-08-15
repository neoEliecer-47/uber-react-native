import { SafeAreaView, ScrollView } from "react-native";
import { View, Text } from "react-native";
import Screen from "../Screen";
import Map from "../Map";

import NavigateCard from "../NavigateCard";
import RideOptionsCard from "../RideOptionsCard";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function MapView() {

  const Stack = createNativeStackNavigator()

  return (
    <Screen>
      <View>
        <View className="h-1/2">
          <Map />
        </View>
        <View className="h-1/2 bg-blue-500">
          <Stack.Navigator>
            <Stack.Screen 
              name="NavigateCard"
              component={NavigateCard}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen 
              name="RideOptionsCard"
              component={RideOptionsCard}
            />
          </Stack.Navigator>
        </View>
      </View>
    </Screen>
  );
}
