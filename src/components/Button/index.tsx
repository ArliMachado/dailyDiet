import * as S from './styled'

type ButtonProps = {
  showIcon?: boolean
  title: string
}

export function Button({ showIcon = false, title }: ButtonProps) {
  return (
    <S.Container>
      {showIcon && <S.Icon />}
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}
