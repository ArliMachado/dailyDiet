import { Header } from '@components/Header'
import { Input } from '@components/Input'
import { StatusBar } from 'react-native'
import { useTheme } from 'styled-components'
import * as S from './styles'

export function NewMeal() {
  const { COLORS } = useTheme()

  return (
    <S.Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.GRAY_300}
        translucent
      />
      <Header title="Nova refeição" />

      <S.Content>
        <S.InputName label="Nome" />

        <S.Description
          label="Descrição"
          multiline={true}
          numberOfLines={4}
          textAlignVertical="top"
        />

        <S.DateInputContent>
          <S.DateTimeInput>
            <Input label="Data" />
          </S.DateTimeInput>
          <S.DateTimeInput>
            <Input label="Hora" />
          </S.DateTimeInput>
        </S.DateInputContent>
      </S.Content>
    </S.Container>
  )
}
