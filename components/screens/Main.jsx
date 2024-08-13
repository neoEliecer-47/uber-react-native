import { View, Text, Image } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_KEY } from '@env'
import NavOptions from '../NavOptions'
import Screen from '../Screen'


export default function Main() {

  
  return (
    <Screen>
      <View className='p-2'>
        <Image 
          source={{
            uri: 'https://links.papareact.com/gzs'
          }}
          className='w-24 h-24 m-2'
          style={{
            resizeMode: 'contain'
          }}
          
        />

        <GooglePlacesAutocomplete 
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
          placeholder='Where from?'
        />
        
        <NavOptions />
      </View>
    </Screen>
  )
}