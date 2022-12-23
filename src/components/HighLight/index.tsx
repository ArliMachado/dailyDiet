import * as S from './styles'

type HighLightProps = {
  type?: S.HighLightCardTypeProps
  title: string
  subtitle: string
}

export function HighLight({
  type = 'PRIMARY',
  title,
  subtitle,
}: HighLightProps) {
  return (
    <S.Container type={type}>
      <S.Icon type={type} />
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.Container>
  )
}
