import { Header } from '@components/Header'
import { StatusBar } from 'react-native'
import { useTheme } from 'styled-components'
import * as S from './styles'

export function NewMeal() {
  const { COLORS } = useTheme()

  return (
    <S.Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.GRAY_300}
        translucent
      />
      <Header title="Nova refeição" />
    </S.Container>
  )
}
