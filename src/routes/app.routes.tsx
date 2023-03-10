import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '@screens/Home'
import { NewMeal } from '@screens/NewMeal'
import { Statistic } from '@screens/Statistic'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistic} />
      <Screen name="newMeal" component={NewMeal} />
    </Navigator>
  )
}
