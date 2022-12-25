import styled, { css } from 'styled-components/native'

export type DietTypeProps = {
  isInDiet: boolean
}

export const Container = styled.View`
  width: 100%;

  padding: 14px 16px 14px 12px;

  flex-direction: row;

  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_300};

  /* margin: 8px 16px 0; // remover */

  align-items: center;
  justify-content: space-between;

  margin-bottom: 8px;
`

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Time = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.XSM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  padding-right: 8px;

  border-right-width: 1px;
  border-right-color: ${({ theme }) => theme.COLORS.GRAY_300};
`
export const Description = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}

  padding-left: 8px;
`

export const DietType = styled.View<DietTypeProps>`
  width: 14px;
  height: 14px;

  border-radius: 7px;
  background-color: ${({ theme, isInDiet }) =>
    isInDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`
