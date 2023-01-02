import { TextInput } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  max-height: 70px;
  align-items: flex-start;
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
  flex: 1;
  min-height: 56px;
  max-height: 48px;

  border-radius: 6px;
  border-width: 1px;
  border-radius: 6px;
  padding: 14px;

  ${({ theme }) => `
    background-color: ${theme.COLORS.GRAY_300};
    border-color: ${theme.COLORS.GRAY_300};
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`
