/* eslint-disable camelcase */
import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts,
} from '@expo-google-fonts/nunito-sans'
import { ActivityIndicator, StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'

import { Statistic } from '@screens/Statistic'
import theme from '@theme/index'
import { Home } from '@screens/Home'

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Home /> : <ActivityIndicator />}
    </ThemeProvider>
  )
}
