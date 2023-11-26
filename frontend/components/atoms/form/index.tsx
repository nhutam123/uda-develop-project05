import { FC, ReactNode, FormEventHandler } from 'react'
import styled from 'styled-components'

type FormProps = {
  children: ReactNode
  handleSubmit: FormEventHandler<HTMLFormElement>
}
export const Form: FC<FormProps> = (props) => {
  const { children, handleSubmit } = props
  return <StyleForm onSubmit={handleSubmit}>{children}</StyleForm>
}

const StyleForm = styled.form`
  display: flex;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`
