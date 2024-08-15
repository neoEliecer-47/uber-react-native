import { useLocalSearchParams } from 'expo-router'
import { View, Text } from 'react-native'
import MapView from '../../components/screens/MapView'


export default function DinamicView() {

    const { view } = useLocalSearchParams()
   
  return (
    <View>
      {view === 'map' ? <MapView /> : <Text>Eats View</Text>}
    </View>
  )
}