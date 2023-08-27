import styled from 'styled-components'
import { Colors } from '../../../shares/const/colors'
const { Main, WHITE } = Colors

export const Footer = () => {
  return (
    <Container>
      <h1>Footer</h1>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60px;
  width: 100vw;
  background-color: ${Main};
  color: ${WHITE};
`
