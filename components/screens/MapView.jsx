import { TouchableOpacity, View } from "react-native";
import Screen from "../Screen";
import Map from "../Map";

import NavigateCard from "../NavigateCard";
import RideOptionsCard from "../RideOptionsCard";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Icon } from "@rneui/base";
import { router } from "expo-router";


export default function MapView() {
  
  const Stack = createNativeStackNavigator();

  return (
    <Screen topSpacing={false}>
      <View className="bg-white">
        
        <TouchableOpacity onPress={()=> router.push('/')} className='absolute top-16 left-5 bg-gray-200 z-50 p-2 rounded-full opacity-70 shadow-lg'>
          <Icon name="menu" />
        </TouchableOpacity>

        <View className="h-1/2">
          <Map />
        </View>
        <View className="h-1/2 bg-blue-500">
          <Stack.Navigator screenOptions={{ animation: "ios" }}>
            <Stack.Screen
              name="NavigateCard"
              component={NavigateCard}
              options={{
                headerShown: false,
                gestureEnabled: true,
              }}
            />
            <Stack.Screen
              name="RideOptionsCard"
              component={RideOptionsCard}
              options={{
                headerShown: false,
                gestureEnabled: true,
              }}
            />
          </Stack.Navigator>
        </View>
      </View>
    </Screen>
  );
}
