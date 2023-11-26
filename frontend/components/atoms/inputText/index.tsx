import { ChangeEvent, FC } from 'react'
import styled from 'styled-components'
import { MediaQuery } from '../../../shares/const/mediaQuery'

type InputProps = {
  pcWidth?: string
  spWidth?: string
  label?: string
  value: string | number
  isDisable?: boolean
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  type?: string
  placeholder?: string
}
export const InputText: FC<InputProps> = (props) => {
  const {
    label,
    spWidth,
    pcWidth,
    value,
    onChange,
    isDisable,
    type = 'text',
    placeholder = ''
  } = props

  return (
    <Container>
      <Label>{label}</Label>
      <TextField
        value={value}
        spWidth={spWidth}
        pcWidth={pcWidth}
        onChange={onChange}
        disabled={isDisable}
        type={type}
        placeholder={placeholder}
      />
    </Container>
  )
}

const TextField = styled.input<{
  spWidth?: string
  pcWidth?: string
  isDisable?: boolean
}>`
  ${MediaQuery.MOBILE_SCREEN} {
    width: ${(props) => (props.spWidth ? props.spWidth : '100%')};
  }
  ${MediaQuery.PC_SCREEN} {
    width: ${(props) => (props.pcWidth ? props.pcWidth : '100%')};
  }

  height: 48px;
  border-radius: 8px;
  outline: none;
  padding: 10px 20px;
  border: 1px solid #806a6a;
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
