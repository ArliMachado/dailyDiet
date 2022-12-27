import { SectionList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};

  padding: 0 24px;
`

export const Header = styled.View`
  width: 100%;
  margin-top: 66px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 36px;
`

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`

export const Photo = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`
export const ButtonContent = styled.View`
  margin-top: 40px;
  width: 100%;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  margin-bottom: 8px;
`

export const DayList = styled(SectionList)`
  width: 100%;

  margin-top: 32px;
  margin-bottom: 20px;
`

export const DayListSeparator = styled.View`
  margin-top: 12px;
`

export const DateTitle = styled.Text`
  /* margin-bottom: 8px; */

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`
