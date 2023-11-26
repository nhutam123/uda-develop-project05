import React, { ChangeEvent, FC, SyntheticEvent, useState } from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import styled from 'styled-components'
import { MediaQuery } from '../../../shares/const/mediaQuery'

type DatePickerAtomProps = {
  pcWidth?: string
  spWidth?: string
  label?: string
  value: string
  onChange: (
    date: Date | null,
    event: SyntheticEvent<any, Event> | undefined
  ) => void
}
export const DatePickerAtom: FC<DatePickerAtomProps> = (props) => {
  const { onChange, pcWidth, label, value } = props
  return (
    <Container>
      <Label>{label}</Label>
      <DatePickerStyle value={value} onChange={onChange} />
    </Container>
  )
}

const DatePickerStyle = styled(DatePicker)`
  height: 48px;
  padding: 0 20px;
  border-radius: 8px;
  width: 110px;
`

const Container = styled.div`
  display: flex;
  ${MediaQuery.MOBILE_SCREEN} {
    flex-direction: column;
  }
  flex-grow: 1;
`
const Label = styled.label`
  font-size: 16px;
  ${MediaQuery.PC_SCREEN} {
    width: 120px;
  }
`
