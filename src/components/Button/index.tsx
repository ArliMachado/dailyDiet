import { TouchableOpacityProps } from 'react-native'
import * as S from './styled'

type ButtonProps = TouchableOpacityProps & {
  showIcon?: boolean
  title: string
}

export function Button({ showIcon = false, title, ...rest }: ButtonProps) {
  return (
    <S.Container {...rest}>
      {showIcon && <S.Icon />}
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}
