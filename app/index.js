
import Main from '../components/screens/Main'
import { SafeAreaProvider } from 'react-native-safe-area-context'


export default function index() {
  return (
    <SafeAreaProvider>
      <Main />
    </SafeAreaProvider>
  )
}