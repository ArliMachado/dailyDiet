import styled, { css, DefaultTheme } from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HighLightInfo } from '@components/HighLightInfo'

export type HeaderColorTypeProps = 'PRIMARY' | 'SECONDARY'

const headerColorModifiers = {
  PRIMARY: (theme: DefaultTheme) => theme.COLORS.GREEN_LIGHT,
  SECONDARY: (theme: DefaultTheme) => theme.COLORS.RED_LIGHT,
}

type HeaderProps = {
  type: HeaderColorTypeProps
}

export const Container = styled(SafeAreaView)`
  flex: 1;
`

export const Header = styled.View<HeaderProps>`
  padding: 12px 0px 12px;

  background-color: ${({ type, theme }) => headerColorModifiers[type](theme)};
`

export const Content = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};

  margin-top: -10px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  padding: 0 24px;
`
export const Title = styled.Text`
  margin: 33px 0 23px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`
export const StatisticHighLight = styled(HighLightInfo)`
  margin-bottom: 12px;
`

export const StatisticInfoContent = styled.View`
  margin-top: 12px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`
export const StatisticDietInfo = styled(HighLightInfo)`
  width: 48%;
  height: 107px;
  padding: 16px;
  align-items: center;
  justify-content: center;
`
