import logoImg from '@assets/Logo.png'
import { Button } from '@components/Button'
import { HighLight } from '@components/HighLight'
import { DayListItem } from '@components/DayListItem'
import * as S from './styles'

const data = [
  {
    title: '12.08.22',
    data: [
      {
        id: '1',
        time: '20:00',
        description: 'X-tudo',
        isInDiet: false,
      },
      {
        id: '2',
        time: '16:00',
        description: 'Whey protein com leite',
        isInDiet: true,
      },
      {
        id: '3',
        time: '12:30',
        description: 'Salada cesar com frango grelhado',
        isInDiet: true,
      },
      {
        id: '4',
        time: '09:30',
        description: 'Vitamina de banana com abacate',
        isInDiet: false,
      },
    ],
  },
  {
    title: '11.08.22',
    data: [
      {
        id: '1',
        time: '20:00',
        description: 'X-tudo',
        isInDiet: false,
      },
      {
        id: '2',
        time: '16:00',
        description: 'Whey protein com leite',
        isInDiet: true,
      },
      {
        id: '3',
        time: '12:30',
        description: 'Salada cesar com frango grelhado',
        isInDiet: true,
      },
      {
        id: '4',
        time: '09:30',
        description: 'Vitamina de banana com abacate',
        isInDiet: false,
      },
    ],
  },
]

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

      <S.DayList
        showsVerticalScrollIndicator={false}
        sections={data}
        keyExtractor={(item) => item.id}
        SectionSeparatorComponent={() => <S.DayListSeparator />}
        renderItem={({ item }) => (
          <DayListItem
            time={item.time}
            description={item.description}
            isInDiet={item.isInDiet}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <S.DateTitle>{title}</S.DateTitle>
        )}
      />
    </S.Container>
  )
}
