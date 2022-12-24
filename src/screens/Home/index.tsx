import * as S from './styles'
import logoImg from '@assets/Logo.png'
import { HighLight } from '@components/HighLight'
import { Button } from '@components/Button'

export function Home() {
  return (
    <S.Container>
      <S.Header>
        <S.Logo source={logoImg} />
        <S.Photo source={{ uri: 'https://github.com/ArliMachado.png' }} />
      </S.Header>
      <HighLight title="90,86%" subtitle="das refeições dentro da dieta" />

      <S.ButtonContent>
        <S.Title>Refeições</S.Title>
        <Button showIcon title="Nova refeição" />
      </S.ButtonContent>
    </S.Container>
  )
}
