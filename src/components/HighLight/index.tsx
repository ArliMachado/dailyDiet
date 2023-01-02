import * as S from './styles'

type HighLightProps = {
  title: string
  subtitle: string
  type?: S.HighLightCardTypeProps
  iconPosition?: 'LEFT' | 'RIGHT'
  onGoToScreen?: () => void
}

export function HighLight({
  title,
  subtitle,
  type = 'PRIMARY',
  iconPosition,
  onGoToScreen,
}: HighLightProps) {
  return (
    <S.Container type={type}>
      <S.Header>
        {iconPosition === 'LEFT' && (
          <S.BackIconContent onPress={onGoToScreen}>
            <S.BackIcon type={type} />
          </S.BackIconContent>
        )}
        {iconPosition === 'RIGHT' && (
          <S.OpenIconContent onPress={onGoToScreen}>
            <S.OpenIcon type={type} />
          </S.OpenIconContent>
        )}
      </S.Header>

      <S.HighLightInfo>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
      </S.HighLightInfo>
    </S.Container>
  )
}
