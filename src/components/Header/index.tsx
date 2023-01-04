import { useNavigation } from '@react-navigation/native'
import * as S from './styles'

type HeaderProps = {
  title: string
}

export function Header({ title }: HeaderProps) {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.navigate('home')
  }

  return (
    <S.Container>
      <S.BackButton onPress={handleGoBack}>
        <S.BackIcon />
      </S.BackButton>
      <S.Title>{title}</S.Title>
      <S.EmptyView />
    </S.Container>
  )
}
