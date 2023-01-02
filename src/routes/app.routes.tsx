import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '@screens/Home'
import { Statistic } from '@screens/Statistic'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator>
      <Screen name="home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="statistics"
        component={Statistic}
        options={{ headerShown: false }}
      />
    </Navigator>
  )
}
