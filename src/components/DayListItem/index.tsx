import * as S from './styled'

type DayListItemProps = {
  time: string
  description: string
  isInDiet?: boolean
}

export function DayListItem({
  time,
  description,
  isInDiet = true,
}: DayListItemProps) {
  return (
    <S.Container>
      <S.Content>
        <S.Time>{time}</S.Time>
        <S.Description>{description}</S.Description>
      </S.Content>
      <S.DietType isInDiet={isInDiet} />
    </S.Container>
  )
}
