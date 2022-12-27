/* eslint-disable prettier/prettier */
import styled, { css, DefaultTheme } from 'styled-components/native'

import { ArrowLeft, ArrowUpRight } from 'phosphor-react-native'

export type HighLightCardTypeProps = 'PRIMARY' | 'SECONDARY' | 'TERTIARY'

type Props = {
  type: HighLightCardTypeProps
}

const backgroundModifiers = {
  'PRIMARY': (theme: DefaultTheme) => theme.COLORS.GREEN_LIGHT,
  'SECONDARY': (theme: DefaultTheme) => theme.COLORS.RED_LIGHT,
  'TERTIARY': (theme: DefaultTheme) => theme.COLORS.GRAY_200
}
const iconColorModifiers = {
  'PRIMARY': (theme: DefaultTheme) => theme.COLORS.GREEN_DARK,
  'SECONDARY': (theme: DefaultTheme) => theme.COLORS.RED_DARK,
  'TERTIARY': (theme: DefaultTheme) => ''
}

export const Container = styled.View<Props>`
  width: 100%;
  padding: 20px 16px;
  border-radius: 8px;
  align-items: center;

  background-color: ${({ type, theme }) => backgroundModifiers[type](theme)};
`

export const BackIcon = styled(ArrowLeft).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: iconColorModifiers[type](theme)
})) <Props>`
  position: absolute;
  top: 56px;
  left: 24px;
`


export const OpenIcon = styled(ArrowUpRight).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: iconColorModifiers[type](theme)
})) <Props>`
  position: absolute;
  top: 8px;
  right: 8px;
`

export const Title = styled.Text`

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`
export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`
