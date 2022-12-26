import styled, { css } from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HighLight } from '@components/HighLight'

export const Container = styled(SafeAreaView)`
  flex: 1;
`

export const Header = styled(HighLight)`
  height: 200px;
  margin-top: 0;
  align-items: center;
  justify-content: center;
  border-radius: 0;
`

export const Content = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};

  margin-top: -20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  padding: 0 24px;
`
export const Title = styled.Text`
  margin-top: 33px;
  margin-bottom: 23px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`
export const StatisticHighLight = styled(HighLight)`
  margin-bottom: 12px;
`

export const StatisticInfoContent = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`
export const StatisticDietInfo = styled(HighLight)`
  width: 48%;
  height: 107px;
  padding: 16px;
  align-items: center;
  justify-content: center;
`
