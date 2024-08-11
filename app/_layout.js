import { Stack } from 'expo-router'
import { View, Text } from 'react-native'


export default function _layout() {
  return (
    <Stack screenOptions={{ headerShown: false }} >
      <Stack.Screen 
        name='index'
        
      />
    </Stack>
  )
}