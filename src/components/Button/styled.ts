import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'
import { Plus } from 'phosphor-react-native'

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 50px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 6px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`

export const Icon = styled(Plus).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.WHITE,
}))``

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  margin-left: 12px
`
