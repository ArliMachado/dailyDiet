import { ArrowLeft } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  /* flex: 1; */
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 24px;
  /* margin-top: 29px; */
  height: 104px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`
export const BackButton = styled(TouchableOpacity)`
  flex: 1;
`

export const EmptyView = styled.View`
  flex: 1;
`

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_600,
}))``
