import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

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
