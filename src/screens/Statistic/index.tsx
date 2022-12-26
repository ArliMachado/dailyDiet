import { HighLight } from '@components/HighLight'
import { StatusBar } from 'react-native'
import { useTheme } from 'styled-components/native'

import * as S from './styles'

export function Statistic() {
  const { COLORS } = useTheme()
  return (
    <S.Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.GREEN_LIGHT}
        translucent
      />
      <S.Header
        title="90,86%"
        subtitle="das refeições dentro da dieta"
        iconPosition="LEFT"
      />
      <S.Content>
        <S.Title>Estatísticas gerais</S.Title>
        <S.StatisticHighLight
          title="22"
          subtitle="melhor sequência de pratos dentro da dieta"
          type="TERTIARY"
        />
        <S.StatisticHighLight
          title="109"
          subtitle="refeições registradas"
          type="TERTIARY"
        />

        <S.StatisticInfoContent>
          <S.StatisticDietInfo
            title="99"
            subtitle="refeições dentro da dieta"
          />
          <S.StatisticDietInfo
            title="10"
            subtitle="refeições fora da dieta"
            type="SECONDARY"
          />
        </S.StatisticInfoContent>
      </S.Content>
    </S.Container>
  )
}
