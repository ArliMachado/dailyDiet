/* eslint-disable prettier/prettier */
import styled, { css, DefaultTheme } from 'styled-components/native'


export type HighLightCardTypeProps = 'PRIMARY' | 'SECONDARY' | 'TERTIARY'

type Props = {
  type: HighLightCardTypeProps
}

const backgroundModifiers = {
  'PRIMARY': (theme: DefaultTheme) => theme.COLORS.GREEN_LIGHT,
  'SECONDARY': (theme: DefaultTheme) => theme.COLORS.RED_LIGHT,
  'TERTIARY': (theme: DefaultTheme) => theme.COLORS.GRAY_200
}

export const Container = styled.View<Props>`
  /* flex: 1; */
  width: 100%;
  padding: 20px 16px;
  border-radius: 8px;
  align-items: center;
  /* margin-bottom: 12px; */

  background-color: ${({ type, theme }) => backgroundModifiers[type](theme)};

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
