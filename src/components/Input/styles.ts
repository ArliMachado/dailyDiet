import { TextInput } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
`

export const Label = styled.Text`
  ${({ theme }) => `
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}

  margin-bottom: 4px;
`

export const InputText = styled(TextInput)`
  min-height: 56px;
  max-height: 48px;

  border-radius: 6px;
  border-width: 1px;
  padding: 14px;

  ${({ theme }) => `
    background-color: ${theme.COLORS.GRAY_100};
    border-color: ${theme.COLORS.GRAY_300};
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`
