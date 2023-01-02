import React from 'react'
import { TextInput, TextInputProps } from 'react-native'
import * as S from './styles'

type InputProps = TextInputProps & {
  inputRef?: React.RefObject<TextInput>
  label: string
}

export function Input({ inputRef, label, ...rest }: InputProps) {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.InputText ref={inputRef} {...rest} />
    </S.Container>
  )
}
