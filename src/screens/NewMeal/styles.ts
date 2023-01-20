import { Input } from '@components/Input'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
`

export const Content = styled.View`
  flex: 1;
  margin-top: -10px;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};

  padding: 40px 24px 0;
`

export const InputName = styled(Input)`
  margin-bottom: 26px;
`

export const Description = styled(Input)`
  min-height: 150px;

  margin-bottom: 26px;
`

export const DateInputContent = styled.View`
  /* margin-top: 126px; */
  flex-direction: row;
  justify-content: space-between;
`

export const DateTimeInput = styled.View`
  width: 45%;
`
