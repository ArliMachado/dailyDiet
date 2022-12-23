/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components/native'

import { ArrowUpRight } from 'phosphor-react-native'

export type HighLightCardTypeProps = 'PRIMARY' | 'SECONDARY'

type Props = {
  type: HighLightCardTypeProps
}

export const Container = styled.View<Props>`
  width: 100%;
  padding: 20px 16px;
  margin-top: 36px;
  border-radius: 8px;
  align-items: center;

  background-color: ${({ type, theme }) =>
    type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`

export const Icon = styled(ArrowUpRight).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
})) <Props>`
  position: absolute;
  top: 8px;
  right: 8px;
`

export const Title = styled.Text`

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-weight: ${theme.FONT_FAMILY.BOLD};
  `}
`
export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-weight: ${theme.FONT_FAMILY.REGULAR};
  `}
`
