import * as S from './styles'
import logoImg from '@assets/Logo.png'
import { PercentCard } from '@components/PercentCard'

export function Home() {
  return (
    <S.Container>
      <S.Header>
        <S.Logo source={logoImg} />
        <S.Photo source={{ uri: 'https://github.com/ArliMachado.png' }} />
      </S.Header>
      <PercentCard title="90,86%" subtitle="das refeições dentro da dieta" />
    </S.Container>
  )
}
