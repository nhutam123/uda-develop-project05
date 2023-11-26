import styled from 'styled-components'
import { FC, ChangeEvent } from 'react'
import { MediaQuery } from '../../../shares/const/mediaQuery'

type SelectOptionProps = {
  options: any[]
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
  value: string | number
  width?: string
  label?: string
}

export const SelectOption: FC<SelectOptionProps> = (props) => {
  const { options, onChange, value, width = '', label = '' } = props
  return (
    <Container>
      <Label>{label}</Label>
      <Select onChange={onChange} value={value} width={width}>
        {options.map((option, index) => (
          <Option key={index} value={option.value}>
            {option.name}
          </Option>
        ))}
      </Select>
    </Container>
  )
}

const Select = styled.select<{ width: string }>`
  width: ${(props) => (props.width ? props.width : '100%')};
  border: 1px solid #ccc;
  border-radius: 8px;
  height: 48px;
  outline: none;
  padding: 0 10px;
`

const Option = styled.option`
  height: 48px;
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
