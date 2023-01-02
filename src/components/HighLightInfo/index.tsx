import { ViewProps } from 'react-native'
import * as S from './styles'

type HighLightInfoProps = ViewProps & {
  title: string
  subtitle: string
  type?: S.HighLightCardTypeProps
}

export function HighLightInfo({
  title,
  subtitle,
  type = 'PRIMARY',
}: HighLightInfoProps) {
  return (
    <S.Container type={type}>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.Container>
  )
}
