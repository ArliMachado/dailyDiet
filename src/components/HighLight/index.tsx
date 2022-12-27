import { ViewProps } from 'react-native'
import * as S from './styles'

type HighLightProps = ViewProps & {
  title: string
  subtitle: string
  type?: S.HighLightCardTypeProps
  iconPosition?: 'LEFT' | 'RIGHT'
}

export function HighLight({
  title,
  subtitle,
  type = 'PRIMARY',
  iconPosition,
  ...rest
}: HighLightProps) {
  return (
    <S.Container type={type} {...rest}>
      {iconPosition === 'LEFT' && <S.BackIcon type={type} />}
      {iconPosition === 'RIGHT' && <S.OpenIcon type={type} />}
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.Container>
  )
}
