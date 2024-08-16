import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DinamicView from './[view]'

export default function _layout() {

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen 
          name='[view]'
          component={DinamicView}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}